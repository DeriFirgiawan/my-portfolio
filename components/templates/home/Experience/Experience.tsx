import { Animation } from "@/components";
import { Data } from "@/data";

export const Experience = () => {
	return (
		<ol className="relative border-s border-gray-200 dark:border-gray-700">
			{Data.experiences.map((value, index) => (
				<Animation
					tagType="li"
					animation="fadeIn"
					transition={{ duration: 0.1 + index }}
					key={`${index}--${value.id}--${value.name}`}
					className="mb-10 ms-6"
				>
					<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
							/>
						</svg>
					</span>
					<h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
						{value.title} - {value.name}
					</h3>
					<time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						{value.startDate}
					</time>
					<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
						Get access to over 20+ pages including a dashboard layout, charts,
						kanban board, calendar, and pre-order E-commerce & Marketing pages.
					</p>
				</Animation>
			))}
		</ol>
	);
};
