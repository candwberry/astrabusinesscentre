export type TagType = {
	label: string;
	color?: 'primary' | 'secondary';
};

export type Feature = {
	name: string;
	description: string;
	image: string;
	tags: TagType[];
};