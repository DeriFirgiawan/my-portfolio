"use client";
import { Tab } from "@headlessui/react";
import { forwardRef, useState } from "react";
import { TabsProps } from "./Tabs.interface";
import { Animation } from "@/components";

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}
export const Tabs = forwardRef((_props: TabsProps, _) => {
	const { listTabs, renderComponent } = _props;
	const $styleActive = "dark:bg-[#0C151D] bg-slate-200";
	const [activeTab, setActiveTab] = useState(listTabs[0]);
	const $styleInActive = "dark:bg-[#171F26] bg-slate-50";
	return (
		<Animation tagType="div" animation="fadeIn" className="w-full">
			<Tab.Group>
				<Tab.List className="flex items-center px-2 py-2 rounded-xl dark:bg-[#171F26] bg-slate-50 gap-2">
					{listTabs.map((value, index) => (
						<Tab
							// onClick={() => setActiveTab(value)}
							className={({ selected }) => {
								return classNames(
									"w-full rounded-lg text-sm font-bold text-color--primary leading-5 py-4 md:py-6 lg:py-6 ",
									"ring-white/60 focus:outline-none",
									selected ? $styleActive : $styleInActive
								);
							}}
							key={index}
						>
							{value}
						</Tab>
					))}
				</Tab.List>
				{renderComponent}
			</Tab.Group>
		</Animation>
	);
});
