import { forwardRef } from "react";
import { motion, MotionProps } from "framer-motion";
import { AnimateProps } from "./Animation.interface";
import { ANIMATE, INIT_ANIMATION } from "./animation.data";

export const Animation = forwardRef((_props: AnimateProps, _) => {
	const { animation, tagType, children, ...props } = _props;
	const Component = motion(tagType);
	const initAnimation = animation ? INIT_ANIMATION[animation] : undefined;
	const animate = animation ? ANIMATE[animation] : undefined;

	return (
		<Component {...props} initial={initAnimation} animate={animate}>
			{children}
		</Component>
	);
});
