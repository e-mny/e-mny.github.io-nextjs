import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

const slideIn = ({ children, inView }) => {
  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-100%)",
  });

  return <animated.div style={animationProps}>{children}</animated.div>;
};



export {useIsVisible, slideIn};