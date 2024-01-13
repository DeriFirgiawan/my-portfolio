import React from "react";

export interface TabsProps {
	listTabs: string[];
	renderComponent: React.ReactNode;
}

export interface TabsItemsProps {
	title: string;
	isActive: boolean;
	onPress?: () => void;
}
