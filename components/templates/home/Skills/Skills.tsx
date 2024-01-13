import { Animation } from "@/components";
import { Data } from "@/data";

export const Skills = () => {
	return (
		<section className="flex justify-between">
			{Data.skills.map((value, index) => (
				<div key={index}>
					<Animation
						tagType="p"
						animation="fadeIn"
						className="text-subtitle font-bold"
					>
						{value.title}
					</Animation>
					{value.skills.map((result, index) => (
						<Animation
							tagType="div"
							animation="fadeIn"
							key={`${index}--${result.name}--${result.id}`}
							className="mt-4"
						>
							<p className="text-paragraph">- {result.name}</p>
						</Animation>
					))}
				</div>
			))}
		</section>
	);
};
