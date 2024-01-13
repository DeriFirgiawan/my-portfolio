export const useHome = () => {
	const listTabs = ["Portfolio", "Skills", "Work History"];
	const listIcon = [
		{
			id: 1,
			icon: "githubIcon",
			link: "https://github.com/DeriFirgiawan",
		},
		{
			id: 2,
			icon: "linkedin",
			link: "https://www.linkedin.com/in/deri-firgiawan-b697761a4/",
		},
		{
			id: 3,
			icon: "youtubeIcon",
			link: "https://www.youtube.com/@eicoders",
		},
	];

	const onDownloadFile = async () => {
		const response = await fetch("/api/file");
		const blob = await response.blob();
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "cv-derifirgiawan.pdf";
		link.click();
		window.URL.revokeObjectURL(url);
	};
	return {
		listTabs,
		listIcon,
		onDownloadFile,
	};
};
