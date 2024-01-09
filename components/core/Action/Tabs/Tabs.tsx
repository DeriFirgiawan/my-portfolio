"use client";
import React, { forwardRef, useState } from "react";
import { TabsProps } from "./Tabs.interface";
import { TabsItem } from "./TabsItem";

export const Tabs = forwardRef((_props: TabsProps, _) => {
	const { className, listItems, onRenderItem } = _props;
	const [isActiveName, setIsActiveName] = useState<string>(listItems[0]);

	const $style = `bg-[#171F26] md:p-6 lg:p-6 p-2 rounded-lg gap-6 flex ${className}`;
	return (
		<React.Fragment>
			<div className={$style}>
				{listItems?.map((value) => (
					<TabsItem
						key={value}
						title={value}
						isActive={isActiveName === value}
						onPress={() => setIsActiveName(value)}
					/>
				))}
			</div>
			<div className="spacer-xl" />
			{onRenderItem(isActiveName)}
		</React.Fragment>
	);
});
