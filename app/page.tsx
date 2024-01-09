"use client";
import { Button, HomePage } from "@/components";
import { Tabs } from "@/components/core/Action/Tabs";
import { useHome } from "@/hooks";

export default function Home() {
	const { listTabs } = useHome();
	return (
		<main>
			<HomePage.Header />
			<div className="flex items-center justify-center">
				<div className="h-screen px-5 md:px-0 lg:px-0 w-full md:w-[756px] lg:w-[756px]">
					<HomePage.ProfileInfo />

					<div className="mt-4 md:mt-12 lg:mt-12" />
					<HomePage.ProfileProject />
					<div className="mt-4 md:mt-12 lg:mt-12" />
					<div className="md:px-[92px] lg:px-[92px]">
						<Button text="Contact Me" />
					</div>

					<div className="mt-4 md:mt-12 lg:mt-12" />

					<div>
						<Tabs
							listItems={listTabs}
							onRenderItem={(value) => {
								if (listTabs[0] === value) {
									return (
										<div>
											<HomePage.Portfolio />
										</div>
									);
								}
								return (
									<div>
										<h1>Skill</h1>
									</div>
								);
							}}
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
