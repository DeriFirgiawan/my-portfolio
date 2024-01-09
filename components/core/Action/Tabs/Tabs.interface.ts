import React from "react";

export interface TabsProps {
	listItems: string[];
	className?: string;
	onRenderItem: (value: string) => React.ReactNode;
}

export interface TabsItemsProps {
	title: string;
	isActive: boolean;
	onPress?: () => void;
}
