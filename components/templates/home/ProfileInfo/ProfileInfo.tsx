import { Icon } from "@/components";
import { Data } from "@/data";
import Image from "next/image";

export const ProfileInfo = () => {
	return (
		<section className="flex gap-[40px] items-center justify-center md:flex-row lg:flex-row flex-col">
			<div className="w-[215px] h-[215px] rounded-full border-2 border-yellow-200 p-2">
				<Image
					className="w-[215px] rounded-full"
					alt="hero"
					src={require("@/assets/images/hero.png")}
				/>
			</div>

			<div className="flex flex-col md:items-start items-center justify-center">
				<h1 className="text-title">{Data.profile.name}</h1>
				<div className="spacer-tiny" />
				<span className="text-paragraph">{Data.profile.title}</span>
				<div className="spacer-lg" />

				<div className="flex gap-6">
					<Icon name="githubIcon" />
					<Icon name="linkedin" />
					<Icon name="youtubeIcon" />
				</div>
			</div>
		</section>
	);
};
