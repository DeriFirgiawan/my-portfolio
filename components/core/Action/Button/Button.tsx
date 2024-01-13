import { useMemo } from "react";
import { IButtonProps } from "./Button.interface";

export const Button = (_props: IButtonProps) => {
	const { text, onClik, className, type = "dark-secondary" } = _props;

	const $baseStyle =
		"transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-full text-white focus:outline-none focus:ring-4 rounded-[10px] py-6 px-6 text-paragraph";

	const $backgroundColor = useMemo(() => {
		if (type === "primary") {
			return "bg-primary";
		}

		if (type === "dark-primary") {
			return "bg-dark-primary";
		}

		if (type === "dark-secondary") {
			return "bg-dark-secondary";
		}

		if (type === "secondary") {
			return "bg-secondary";
		}

		return "bg-primary";
	}, [type]);
	return (
		<button
			onClick={onClik}
			type="button"
			className={`${$backgroundColor} ${$baseStyle}${
				className && ` ${className}`
			}`}
		>
			{text}
		</button>
	);
};
