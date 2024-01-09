export const Profile = {
	name: "Deri Firgiawan",
	title: "Software Enginner",
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
		},
		{
			id: 2,
			name: "Tuut",
			image: require("@/assets/images/porfolio/tuut.png"),
		},
		{
			id: 3,
			name: "Fitcells",
			image: require("@/assets/images/porfolio/fitcells.png"),
		},
		{
			id: 4,
			name: "Inatti",
			image: require("@/assets/images/porfolio/inatti.png"),
		},
		{
			id: 5,
			name: "My Digilearn",
			image: require("@/assets/images/porfolio/my-digilearn.png"),
		},
	],
};

Profile.completed_projects = Portfolio.data.length;

export const Data = {
	profile: { ...Profile },
	portfolio: { ...Portfolio },
};
