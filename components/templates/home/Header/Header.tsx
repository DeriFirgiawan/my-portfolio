import { Icon } from "@/components";
import { useTheme } from "next-themes";

export const Header = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	return (
		<header className="md:py-8 lg:py-8 py-5 px-[96px] flex items-center justify-center md:items-end md:justify-end lg:items-end lg:justify-end">
			<span
				onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
				className="w-[48px] h-[48px] md:w-[42px] md:h-[42px] lg:w-[42px] lg:h-[42px] rounded-full dark:bg-[#171F26] bg-slate-100 inline-flex items-center justify-center hover:cursor-pointer"
			>
				<Icon name="brightness" size={24} />
			</span>
		</header>
	);
};
