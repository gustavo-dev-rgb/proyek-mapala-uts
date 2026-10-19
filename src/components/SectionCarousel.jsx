import { Children, useRef, useState } from "react";

export default function SectionCarousel({ label, children }) {
  const trackRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false });
  const [active, setActive] = useState(0);

  const slides = Children.toArray(children);
  const count = slides.length;

  function goTo(index) {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.max(0, Math.min(count - 1, index));
    const slide = track.children[i];
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  function handleScroll() {
    const track = trackRef.current;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDistance = Infinity;
    Array.from(track.children).forEach((el, i) => {
      const distance = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = i;
      }
    });
    setActive(best);
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(active - 1);
    }
  }

  function handlePointerDown(e) {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startLeft: trackRef.current.scrollLeft,
      moved: false,
    };
  }

  function handlePointerMove(e) {
    const d = drag.current;
    if (!d.active) return;
    const dx = e.clientX - d.startX;
    if (!d.moved && Math.abs(dx) > 6) {
      d.moved = true;
      trackRef.current.classList.add("is-dragging");
      trackRef.current.setPointerCapture(e.pointerId);
    }
    if (d.moved) trackRef.current.scrollLeft = d.startLeft - dx;
  }

  function handlePointerUp(e) {
    const d = drag.current;
    if (!d.active) return;
    d.active = false;
    if (!d.moved) return;
    const dx = e.clientX - d.startX;
    trackRef.current.classList.remove("is-dragging");
    if (dx < -50) goTo(active + 1);
    else if (dx > 50) goTo(active - 1);
    else goTo(active);
    setTimeout(() => {
      d.moved = false;
    }, 0);
  }

  function handleClickCapture(e) {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  return (
    <section
      className="carousel"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div
        ref={trackRef}
        className="carousel__track"
        tabIndex={0}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClickCapture={handleClickCapture}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`carousel__slide${i === active ? " is-active" : ""}`}
            aria-roledescription="slide"
            aria-label={`${i + 1} dari ${count}`}
          >
            {slide}
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            className="carousel__arrow carousel__arrow--prev"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="Section sebelumnya"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel__arrow carousel__arrow--next"
            onClick={() => goTo(active + 1)}
            disabled={active === count - 1}
            aria-label="Section berikutnya"
          >
            ›
          </button>
          <div className="carousel__dots">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`carousel__dot${i === active ? " is-active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Ke section ${i + 1}`}
                aria-current={i === active ? "true" : undefined}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
