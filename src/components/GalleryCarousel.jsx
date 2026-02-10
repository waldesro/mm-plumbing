import { useEffect, useRef, useState } from "react";

export const galleryImages = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",
    "img7.jpeg",
    "img8.jpeg",
    "img9.jpeg",
    "img10.jpeg",
    "img11.jpeg",
    "img12.jpeg",
    "img13.jpeg",
    "img14.jpeg",
    "img15.jpeg",
];

export default function GalleryCarousel({
    images = galleryImages,
    basePath = "/images/gallery/",
    title = "Gallery",
    subtitle = "Recent work",
    className = "",
    autoPlay = true,
    autoPlayInterval = 5000,
}) {
    const [current, setCurrent] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);
    const thumbnailRefs = useRef([]);

    const hasImages = Array.isArray(images) && images.length > 0;

    const srcFor = (img) => {
        if (!img) return "";
        if (img.startsWith("http://") || img.startsWith("https://") || img.startsWith("/")) return img;
        return `${basePath}${img}`;
    };

    const prev = () => {
        if (!hasImages) return;
        setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
    };

    const next = () => {
        if (!hasImages) return;
        setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));
    };

    // Auto play
    useEffect(() => {
        if (!autoPlay) return;
        if (!Array.isArray(images) || images.length < 2) return;

        const id = setInterval(() => {
            setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));
        }, autoPlayInterval);

        return () => clearInterval(id);
    }, [autoPlay, autoPlayInterval, images]);

    // Swipe
    useEffect(() => {
        if (!touchStartX || !touchEndX) return;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) < 50) return;

        if (diff > 0) next();
        else prev();

        setTouchStartX(0);
        setTouchEndX(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [touchEndX]);

    // Auto-scroll thumbnails to keep active thumb centered
    useEffect(() => {
        const activeThumb = thumbnailRefs.current[current];
        if (!activeThumb) return;

        const scroller = activeThumb.closest("[data-thumb-scroller]");
        if (!scroller) return;

        const scrollTo =
            activeThumb.offsetLeft - scroller.clientWidth / 2 + activeThumb.clientWidth / 2;

        scroller.scrollTo({ left: scrollTo, behavior: "smooth" });
    }, [current]);

    return (
        <section className={className}>
            {/* Minimal section header */}
            <div className="max-w-3xl text-center mx-auto">
                <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold text-(--elite-green)">
                    {title}
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                    A few examples of recent cleaning and landscaping projects.
                </p>
            </div>

            <div className="mt-10">
                {!hasImages ? (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
                        <div className="text-sm font-semibold text-slate-900">No images yet</div>
                        <div className="mt-2 text-sm text-slate-600">
                            Add files to <span className="font-mono">public/images/gallery/</span>
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                            Then pass filenames via the <span className="font-mono">images</span> prop.
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Main image frame (minimal + professional) */}
                        <div
                            className="
                relative overflow-hidden border border-slate-200 bg-white
              "
                            onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
                            onTouchEnd={(e) => setTouchEndX(e.changedTouches[0].clientX)}
                        >
                            {/* Aspect-ratio frame */}
                            <div className="relative w-full bg-slate-50">
                                {/* Use a height that feels premium, not huge */}
                                <div className="h-[52vh] min-h-85 max-h-140">
                                    <div
                                        className="flex h-full transition-transform duration-700 ease-in-out"
                                        style={{
                                            transform: `translateX(-${current * 100}%)`,
                                            width: `${images.length * 100}%`,
                                        }}
                                    >
                                        {images.map((img, idx) => (
                                            <div key={`${img}-${idx}`} className="w-full h-full shrink-0 flex items-center justify-center">
                                                <img
                                                    src={srcFor(img)}
                                                    alt={`Gallery image ${idx + 1}`}
                                                    className="w-full h-full object-contain"
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Minimal arrows */}
                                <button
                                    type="button"
                                    onClick={prev}
                                    aria-label="Previous image"
                                    className="
                    absolute left-3 sm:left-4 top-1/2 -translate-y-1/2
                    inline-flex items-center justify-center
                    h-10 w-10 rounded-full
                    bg-white/90 border border-slate-200
                    text-slate-700 hover:bg-white
                    shadow-sm transition
                  "
                                >
                                    <span className="text-xl leading-none">‹</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={next}
                                    aria-label="Next image"
                                    className="
                    absolute right-3 sm:right-4 top-1/2 -translate-y-1/2
                    inline-flex items-center justify-center
                    h-10 w-10 rounded-full
                    bg-white/90 border border-slate-200
                    text-slate-700 hover:bg-white
                    shadow-sm transition
                  "
                                >
            
                                </button>

                                {/* Minimal counter */}
                                <div className="absolute bottom-3 right-3 rounded-full bg-white/90 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                                    {current + 1} / {images.length}
                                </div>
                            </div>
                        </div>

                        {/* Thumbnails (clean) */}
                        <div
                            data-thumb-scroller
                            className="
                mt-5 flex gap-2 overflow-x-auto
                pb-1
                [scrollbar-width:none]
              "
                            style={{ WebkitOverflowScrolling: "touch" }}
                        >
                            <div className="flex w-max gap-2">
                                {images.map((img, idx) => {
                                    const active = idx === current;
                                    return (
                                        <button
                                            key={`${img}-thumb-${idx}`}
                                            ref={(el) => (thumbnailRefs.current[idx] = el)}
                                            type="button"
                                            onClick={() => setCurrent(idx)}
                                            aria-label={`Go to image ${idx + 1}`}
                                            className={`
                        shrink-0 overflow-hidden rounded-xl
                        border transition
                        ${active ? "border-(--elite-blue)" : "border-slate-200 hover:border-slate-300"}
                      `}
                                        >
                                            <img
                                                src={srcFor(img)}
                                                alt={`Thumbnail ${idx + 1}`}
                                                className="h-16 w-20 object-cover object-center"
                                                loading="lazy"
                                            />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
