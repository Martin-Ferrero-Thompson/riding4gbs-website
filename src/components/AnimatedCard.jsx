import { useEffect, useRef } from 'react';

function AnimatedCard({ children }) { // Accepts 'children' as a prop
  const cardRef = useRef(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    node.style.opacity = "0";
    node.style.transform = "translateX(-100vw)";

    const animation = node.animate(
      [
        { transform: "translateX(-100vw)", opacity: 0 },
        { transform: "translateX(0)", opacity: 1 }
      ],
      {
        duration: 1200,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards"
      }
    );

    return () => {
      animation.cancel();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="will-change-transform"
      style={{ opacity: 0, transform: "translateX(-100vw)" }}
    >
      {children}
    </div>
  );
}

export default AnimatedCard;