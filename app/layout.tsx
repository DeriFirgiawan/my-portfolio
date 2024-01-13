import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Deri Firgiawan",
	description: "Portfolio Deri Firgiawan",
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
