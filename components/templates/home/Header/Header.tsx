import { Icon } from "@/components";

export const Header = () => {
	return (
		<header className="md:py-8 lg:py-8 py-5 px-[96px] flex items-center justify-center md:items-end md:justify-end lg:items-end lg:justify-end">
			<span className="w-[48px] h-[48px] md:w-[42px] md:h-[42px] lg:w-[42px] lg:h-[42px] rounded-full bg-[#171F26] inline-flex items-center justify-center hover:cursor-pointer">
				<Icon name="brightness" size={24} />
			</span>
		</header>
	);
};
