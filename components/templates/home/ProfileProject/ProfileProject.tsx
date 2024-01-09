import { Data } from "@/data";

export const ProfileProject = () => {
	return (
		<section className="py-5 flex items-center justify-around">
			<div className="text-center w-[148px]">
				<p className="text-subtitle">{Data.profile.experience}</p>
				<div className="spacer-tiny" />
				<span className="text-paragraph">Years of work experience</span>
			</div>
			<div className="text-center w-[148px]">
				<p className="text-subtitle">{Data.profile.completed_projects}</p>
				<div className="spacer-tiny" />
				<span className="text-paragraph">Completed projects</span>
			</div>
			<div className="text-center w-[148px]">
				<p className="text-subtitle">{Data.profile.satisfied_client}</p>
				<div className="spacer-tiny" />
				<span className="text-paragraph">Satisfied customers</span>
			</div>
		</section>
	);
};
