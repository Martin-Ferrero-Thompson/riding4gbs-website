import { useEffect, useRef } from 'react';
import { animate } from 'motion';

function AnimatedCard({ children }) { // Accepts 'children' as a prop
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      animate(
        cardRef.current,
        { 
          x: ['-100vw', '0vw'],
          opacity: [0, 1]
        },
        { 
          duration: 1.2, 
          easing: [0.22, 1, 0.36, 1]
        }
      );
    }
  }, []);

  return (
    <div ref={cardRef} className="opacity-0">
      {children} 
    </div>
  );
}

export default AnimatedCard;