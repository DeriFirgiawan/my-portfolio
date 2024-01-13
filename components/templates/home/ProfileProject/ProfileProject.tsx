import { Data } from "@/data";
import { Animation } from "@/components";

export const ProfileProject = () => {
	return (
		<section className="py-5 flex items-center justify-around">
			<Animation
				tagType="div"
				animation="fadeIn"
				transition={{ duration: 0.12 }}
				className="text-center w-[148px]"
			>
				<p className="text-subtitle">{Data.profile.experience}</p>
				<div className="spacer-tiny" />
				<span className="text-paragraph">Years of work experience</span>
			</Animation>
			<Animation
				tagType="div"
				animation="fadeIn"
				transition={{ duration: 0.14 }}
				className="text-center w-[148px]"
			>
				<p className="text-subtitle">{Data.profile.completed_projects}</p>
				<div className="spacer-tiny" />
				<span className="text-paragraph">Completed projects</span>
			</Animation>
			<Animation
				tagType="div"
				animation="fadeIn"
				transition={{ duration: 0.16 }}
				className="text-center w-[148px]"
			>
				<p className="text-subtitle">{Data.profile.satisfied_client}</p>
				<div className="spacer-tiny" />
				<span className="text-paragraph">Satisfied customers</span>
			</Animation>
		</section>
	);
};
