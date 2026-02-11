import { useEffect, useRef, useState } from "react";
export const galleryImages = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
    "img10.jpg",
    "img11.jpg",
    "img12.jpg",
    "img13.jpg",
    "img14.jpg",
    "img15.jpg",
    "img16.jpg",
    "img17.jpg",
    "img18.jpg",
    "img19.jpg",
    "img20.jpg",
    "img21.jpg",
    "img22.jpg",
    "img23.jpg",
    "img24.jpg"
];

export default function GalleryCarousel({
    images = galleryImages,
    basePath = "/images/gallery/",
    title,
    subtitle,
    className = "",
    autoPlay = true,
    autoPlayInterval = 5000,
}) {

    const [current, setCurrent] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);
    const thumbnailRefs = useRef([]);

    const hasImages = Array.isArray(images) && images.length > 0;

    const prev = () => {
        if (!hasImages) return;
        setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
    };

    const next = () => {
        if (!hasImages) return;
        setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));
    };
    useEffect(() => {
        if (!autoPlay) return;
        if (!Array.isArray(images) || images.length < 2) return;

        const id = setInterval(() => {
            setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));
        }, autoPlayInterval);

        return () => clearInterval(id);
    }, [autoPlay, autoPlayInterval, images.length]);

    // Swipe support
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

        const container = activeThumb.parentElement?.parentElement;
        if (!container) return;

        const scrollTo =
            activeThumb.offsetLeft - container.clientWidth / 2 + activeThumb.clientWidth / 2;

        container.scrollTo({ left: scrollTo, behavior: "smooth" });
    }, [current]);

    const srcFor = (img) => {
        if (!img) return "";
        // allow full URLs or absolute paths
        if (img.startsWith("http://") || img.startsWith("https://") || img.startsWith("/")) return img;
        return `${basePath}${img}`;
    };

    return (
        <div className={className}>
            {(title) && (

                <div className="mx-auto mb-6 max-w-3xl text-center">
                    {title ? <h2 className="text-4xl sm:text-5xl font-bold text-(--plumbing-red) leading-tight mb-6 text-center">{title}</h2> : null}
                </div>
            )}

            <div >
                {!hasImages ? (
                    <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center text-sm text-gray-600">
                        No images yet. Add files to <span className="font-semibold">public/images/gallery/</span>
                        <div className="mt-2 text-xs text-gray-500">
                            Then pass their filenames to <code className="font-mono">images</code>.
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Carousel */}
                        <div
                            className="relative w-full max-h-[80vh] overflow-hidden rounded-2xl flex items-center justify-center bg-gray-50"
                            onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
                            onTouchEnd={(e) => setTouchEndX(e.changedTouches[0].clientX)}
                        >
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{
                                    transform: `translateX(-${current * 100}%)`,
                                    width: `${images.length * 100}%`,
                                }}
                            >
                                {images.map((img, idx) => (
                                    <img
                                        key={`${img}-${idx}`}
                                        src={srcFor(img)}
                                        alt={`Gallery image ${idx + 1}`}
                                        className="w-full h-auto max-h-[80vh] object-contain mx-auto shrink-0 rounded-xl"
                                        loading="lazy"
                                    />
                                ))}
                            </div>

                            {/* Arrows */}
                            <button
                                type="button"
                                onClick={prev}
                                className="absolute top-1/2 left-3 sm:left-4 -translate-y-1/2 bg-white/70 backdrop-blur text-blue-800 p-2 rounded-full shadow-md hover:bg-white"
                                aria-label="Previous image"
                            >
                                ‹
                            </button>

                            <button
                                type="button"
                                onClick={next}
                                className="absolute top-1/2 right-3 sm:right-4 -translate-y-1/2 bg-white/70 backdrop-blur text-blue-800 p-2 rounded-full shadow-md hover:bg-white"
                                aria-label="Next image"
                            >
                                ›
                            </button>
                        </div>

                        {/* Thumbnails */}
                        <div
                            className="mt-5 flex gap-2 overflow-x-auto px-1"
                            style={{
                                overflowX: "auto",
                                overflowY: "hidden",
                                scrollSnapType: "x mandatory",
                                WebkitOverflowScrolling: "touch",
                                scrollBehavior: "smooth",
                            }}
                        >
                            <div className="flex w-max gap-2">
                                {images.map((img, idx) => (
                                    <button
                                        key={`${img}-thumb-${idx}`}
                                        ref={(el) => (thumbnailRefs.current[idx] = el)}
                                        type="button"
                                        onClick={() => setCurrent(idx)}
                                        className={`shrink-0 border-2 rounded-lg overflow-hidden ${idx === current ? "border-blue-700" : "border-transparent"
                                            }`}
                                        aria-label={`Go to image ${idx + 1}`}
                                    >
                                        <img
                                            src={srcFor(img)}
                                            alt={`Thumbnail ${idx + 1}`}
                                            className="w-20 h-16 object-cover object-center"
                                            loading="lazy"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
