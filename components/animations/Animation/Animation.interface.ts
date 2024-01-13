import { AnimationProps, MotionProps } from "framer-motion";
import { AnimationType } from "./Animation.types";
import React from "react";

export interface AnimateProps extends MotionProps {
	animation?: AnimationType;
	tagType: keyof HTMLElementTagNameMap;
	children?: React.ReactNode;
	className?: string | undefined;
}
