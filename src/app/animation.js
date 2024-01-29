import { useSpring, animated } from "react-spring";

const SlideIn = ({ children, inView }) => {
  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-100%)",
  });

  return <animated.div style={animationProps}>{children}</animated.div>;
};

export default SlideIn;
