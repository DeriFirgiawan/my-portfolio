import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useAnimate = () => {
	const control = useAnimation();
	const [ref, inView] = useInView();

	const cardVariant = {
		visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
		hidden: { opacity: 0, scale: 0, x: 200 },
	};

	return {
		cardVariant,
		ref,
		inView,
		control,
	};
};
