import { forwardRef } from "react";
import { TabsItemsProps } from "./Tabs.interface";

export const TabsItem = forwardRef((_props: TabsItemsProps, _) => {
	const { title, isActive, onPress } = _props;

	const $style = `${
		isActive ? "bg-[#0C151D]" : "bg-transparent"
	} md:px-4 md:py-6 lg:px-4 lg:py-6 py-4 w-full text-center hover:cursor-pointer rounded`;
	return (
		<div className={$style} onClick={onPress}>
			<span className="text-paragraph">{title}</span>
		</div>
	);
});
