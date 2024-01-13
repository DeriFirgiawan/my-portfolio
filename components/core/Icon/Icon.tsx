import Image from "next/image";
import { IIconProps } from "./Icon.interface";
import { IconType } from "./data";

export const Icon = (_props: IIconProps) => {
	const { size = 24, name, className } = _props;

	return (
		<Image
			priority
			src={IconType[name]}
			className={className}
			height={size}
			width={size}
			alt={name}
		/>
	);
};
