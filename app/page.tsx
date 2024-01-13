"use client";
import { Animation, Button, HomePage, Tabs, ThemeProvider } from "@/components";
import { Footer } from "@/components/core/Footer";
import { useHome } from "@/hooks";
import { Tab } from "@headlessui/react";

export default function Home() {
	const { listTabs, onDownloadFile } = useHome();
	return (
		<ThemeProvider attribute="class" defaultTheme="dark">
			<main>
				<HomePage.Header />
				<div className="flex items-center justify-center">
					<div className="h-screen px-5 md:px-0 lg:px-0 w-full md:w-[756px] lg:w-[756px]">
						<HomePage.ProfileInfo />

						<div className="mt-4 md:mt-12 lg:mt-12" />
						<HomePage.ProfileProject />
						<div className="mt-4 md:mt-12 lg:mt-12" />
						<Animation
							tagType="div"
							animation="fadeIn"
							className="md:px-[92px] lg:px-[92px] flex items-center gap-4"
						>
							<Button
								text="Donwload CV"
								type="primary"
								onClik={onDownloadFile}
							/>
							<Button
								text="Contact Me"
								onClik={() =>
									(location.href = "mailto:derifirgiawan025@gmail.com")
								}
							/>
						</Animation>

						<div className="mt-4 md:mt-12 lg:mt-12" />

						<div>
							<Tabs
								listTabs={listTabs}
								renderComponent={
									<Tab.Panels>
										<Tab.Panel>
											<div>
												<HomePage.Portfolio />
												<div className="spacer-xl" />
												<Footer />
											</div>
										</Tab.Panel>
										<Tab.Panel>
											<div className="mt-6">
												<HomePage.Skills />
												<div className="spacer-xl" />
												<Footer />
											</div>
										</Tab.Panel>
										<Tab.Panel>
											<div className="mt-6">
												<HomePage.Experience />
												<div className="spacer-xl" />
												<Footer />
											</div>
										</Tab.Panel>
									</Tab.Panels>
								}
							/>
						</div>
					</div>
				</div>
			</main>
		</ThemeProvider>
	);
}
