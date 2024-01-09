import { Data } from "@/data";
import Image from "next/image";

export const Portfolio = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-6 lg:gap-6 gap-0">
			{Data.portfolio.data.map((value, index) => (
				<div key={`${index}--${value.id}`}>
					<div className="bg-slate-200 mt-6 w-full h-[226px] rounded-lg overflow-hidden">
						<Image
							alt={value.name}
							src={value.image}
							className="w-full h-[226px]"
						/>
					</div>
					<div className="spacer-sm" />
					<h4 className="text-paragraph">{value.name}</h4>
				</div>
			))}
		</div>
	);
};
