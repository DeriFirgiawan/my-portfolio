import { IButtonProps } from "./Button.interface";

export const Button = (_props: IButtonProps) => {
	const { text, ...rest } = _props;
	return (
		<button
			type="button"
			className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-[10px] py-6 px-6 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-paragraph"
			{...rest}
		>
			{text}
		</button>
	);
};
