"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Data } from "@/data";
import { useAnimate, usePortfolio } from "./hooks";
import { useEffect } from "react";
import Link from "next/link";

export const Portfolio = () => {
	const { scrollPosition } = usePortfolio();
	const { ref, control, cardVariant } = useAnimate();

	useEffect(() => {
		if (scrollPosition > 258) {
			control.start("visible");
		}
	}, [scrollPosition]);

	return (
		<motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-6 lg:gap-6 gap-0">
			{Data.portfolio.data.map((value, index) => (
				<motion.div
					ref={ref}
					animate={control}
					initial="hidden"
					key={`${index}--${value.id}`}
					variants={cardVariant}
					className="w-full"
				>
					<div className="bg-slate-200 mt-6 w-full h-[226px] rounded-lg overflow-hidden border shadow">
						<Image
							alt={value.name}
							src={value.image}
							className="w-full h-[226px]"
						/>
					</div>
					<div className="spacer-sm" />
					<h4 className="text-subtitle">{value.name}</h4>
					<div className="spacer-sm" />
					<Link
						href={value.link ?? ""}
						rel="noopener noreferrer"
						target="_blank"
						className="text-md font-bold underline dark:text-blue-300 text-blue-500"
					>
						Visit
					</Link>
					<div className="spacer-sm" />
					<p className="text-sm text-color--primary">{value.description}</p>
				</motion.div>
			))}
		</motion.div>
	);
};
