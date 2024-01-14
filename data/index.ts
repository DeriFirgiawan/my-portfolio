export const Profile = {
	name: "Deri Firgiawan",
	title: "Software Engineer",
	experience: 2,
	completed_projects: 5,
	satisfied_client: 3,
};

export const Portfolio = {
	data: [
		{
			id: 1,
			name: "Gelora",
			image: require("@/assets/images/porfolio/gelora.png"),
			description:
				"The Gelora application is an application for ordering futsal fields online using Android and IOS mobile devices built with React Native",
			link: "https://www.gelora.id/",
		},
		{
			id: 2,
			name: "Tuut",
			image: require("@/assets/images/porfolio/tuut.png"),
			description:
				"The Tuut application is an application for ordering online training using Android and iOS mobile devices built with React Native",
			link: "https://www.tuutapp.com/",
		},
		{
			id: 3,
			name: "Fitcells",
			image: require("@/assets/images/porfolio/fitcells.png"),
			description:
				"The Fitcells application is an application for ordering Gym, Classes online using Android and IOS mobile devices built with React Native",
			link: "https://www.fitcells.com/",
		},
		{
			id: 4,
			name: "Inatti",
			image: require("@/assets/images/porfolio/inatti.png"),
			description:
				"Inatti is a website for making appointments with hospitals for the Covid-19 vaccine",
			link: "https://www.inatti.id/",
		},
		{
			id: 5,
			name: "GIS UMKM",
			image: require("@/assets/images/porfolio/umkm.png"),
			description:
				"GIS UMKM is a mobile application built using Kotlin which functions to map MSME data spread across an area at a certain distance from each device.",
			link: null,
		},
		{
			id: 6,
			name: "My Digilearn",
			image: require("@/assets/images/porfolio/my-digilearn.png"),
			description:
				"My Digilearn is Telkom's online learning application which has features for viewing videos, podcasts, webinars and courses",
			link: "https://mydigilearn.id/",
		},
	],
};

export const Skills = [
	{
		id: 1,
		title: "Web Developer",
		skills: [
			{
				id: 1,
				name: "HTML",
			},
			{
				id: 2,
				name: "CSS/SCSS",
			},
			{
				id: 3,
				name: "Javascript",
			},
			{
				id: 4,
				name: "Node JS",
			},
			{
				id: 5,
				name: "React",
			},
			{
				id: 6,
				name: "Next JS",
			},
			{
				id: 7,
				name: "Express JS",
			},
			{
				id: 8,
				name: "Vue JS",
			},
		],
	},
	{
		id: 2,
		title: "Mobile Developer",
		skills: [
			{
				id: 1,
				name: "React Native",
			},
			{
				id: 2,
				name: "Kotlin",
			},
		],
	},
];

export const Experience = [
	{
		id: 1,
		startDate: "Nov 2021 - Dec 2023",
		name: "Xcidic PTE LTD",
		title: "Software Developer",
		description: "",
	},
	{
		id: 2,
		startDate: "Jun 2021 - Nov 2021",
		name: "PT Sahaware Teknologi Indonesia",
		title: "Front-End Engineer",
		description: "",
	},
];

Profile.completed_projects = Portfolio.data.length;

export const Data = {
	profile: { ...Profile },
	portfolio: { ...Portfolio },
	skills: [...Skills],
	experiences: [...Experience],
};
