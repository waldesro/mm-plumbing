import { useEffect } from 'react';

export default function GoogleReviewsEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.defer = true;
    script.setAttribute("data-use-service-core", "true");
    document.body.appendChild(script);
  }, []);

  return (
    <div className="my-12">
      <div class="elfsight-app-49fc556c-297c-4a3c-8df5-f6da346a6f1f" data-elfsight-app-lazy></div>
    </div>
  );
}