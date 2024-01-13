import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Deri Firgiawan",
	description:
		"As a junior software developer at Xcidic, I design and develop user-friendly web applications using Redux Thunk, Tailwind CSS, and Node.js. I have two years of work experience in frontend engineering, including six months at Sahaware Teknologi Indonesia, where I contributed to the development of a cloud-based e-commerce platform. I have also earned multiple certifications from Dicoding Indonesia, a leading online learning platform, in Dart, Web Development, and Front-End Web Development. I graduated with an associate's degree in informatika from SMK Merdeka Bandung in 2021, where I learned the fundamentals of programming, data structures, algorithms, and databases. I am passionate about creating innovative and accessible web solutions that solve real-world problems and enhance user experience. I am always eager to learn new technologies and best practices, and to collaborate with other developers and stakeholders. My goal is to become a senior software developer and a mentor for aspiring programmers.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon.ico" type="image/x-icon" />
			<body className={jakarta_sans.className}>{children}</body>
		</html>
	);
}
