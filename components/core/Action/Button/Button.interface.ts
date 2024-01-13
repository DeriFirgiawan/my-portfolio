import { ButtonThemeType } from "./Button.types";

export interface IButtonProps {
	onClik?: () => void;
	className?: string;
	text: string;
	backgroundColor?: string;
	type?: ButtonThemeType;
}
