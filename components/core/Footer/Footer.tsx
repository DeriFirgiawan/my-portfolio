import { forwardRef } from "react";

export const Footer = forwardRef(() => {
	return (
		<footer className="text-center pb-6">
			<p className="text-sm text-color--primary">
				© Deri Firgiawan. {new Date().getFullYear()} All rights reserved
			</p>
		</footer>
	);
});
