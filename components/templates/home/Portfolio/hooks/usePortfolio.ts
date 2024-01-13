import { useEffect, useState } from "react";

export const usePortfolio = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const onScroll = () => {
		const { scrollY } = window;
		if (scrollY === 0) {
			setScrollPosition(258);
		} else {
			setScrollPosition(scrollY);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, [setScrollPosition]);

	return {
		scrollPosition,
	};
};
