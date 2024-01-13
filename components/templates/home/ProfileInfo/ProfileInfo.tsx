"use client";
import { Animation, Icon } from "@/components";
import { IconTypeName } from "@/components/core/Icon/Icon.types";
import { Data } from "@/data";
import { useHome } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

export const ProfileInfo = () => {
	const { listIcon } = useHome();
	return (
		<section className="flex gap-[40px] items-center justify-center md:flex-row lg:flex-row flex-col">
			<Animation
				tagType="div"
				animation="fadeIn"
				className="w-[215px] h-[215px] rounded-full border-2 border-yellow-200 p-2"
			>
				<Image
					className="w-[215px] rounded-full"
					alt="hero"
					priority
					src={require("@/assets/images/hero.png")}
				/>
			</Animation>

			<div className="flex flex-col md:items-start items-center justify-center">
				<Animation
					className="text-title"
					tagType="h1"
					animation="fadeIn"
					transition={{ duration: 0.9 }}
				>
					{Data.profile.name}
				</Animation>
				<div className="spacer-tiny" />
				<Animation
					className="text-paragraph"
					tagType="span"
					animation="fadeIn"
					transition={{ duration: 0.8 }}
				>
					{Data.profile.title}
				</Animation>
				<div className="spacer-lg" />

				<div className="flex gap-6">
					{listIcon.map((value, index) => (
						<Link
							href={value.link}
							rel="noopener noreferrer"
							target="_blank"
							key={index}
						>
							<Animation tagType="div" animation="fadeIn" key={value.id}>
								<Icon
									size={24}
									name={value.icon as IconTypeName}
									className="transition ease-in-out hover:-translate-y-1 hover:scale-110 delay-150 hover:cursor-pointer"
								/>
							</Animation>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};
