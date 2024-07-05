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

export type UnitName = 
	"Unit 1" | "Unit 2" | "Unit 3" | "Unit 4" | "Unit 5" | "Unit 6" | "Unit 7" | "Unit 8" |
	"Unit 9" | "Unit 10" | "Unit A" | "Unit B" | "Unit C" | "Unit D" | "Unit E" | "Unit F";

export type Unit = {
	name: UnitName;
	sq_ft: number;
	features: string[][];
	price: number;
}