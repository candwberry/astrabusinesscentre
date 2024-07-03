import type { Feature } from '$lib/utils/types';
import boardroom from "$lib/assets/boardroom.jpg?enhanced";
import cctv from "$lib/assets/cctv.jpg?enhanced";
import kitchen from "$lib/assets/kitchen.jpg?enhanced";
import parking from "$lib/assets/parking.jpg?enhanced";
import waste from "$lib/assets/waste.jpg?enhanced";
import wifi from "$lib/assets/wifi.jpg?enhanced";

export default [
	{
		name: 'Convenient Parking',
		description:
			'Enjoy hassle-free parking options. We offer a limited number of on-site parking spots for an additional fee, as well as ample street parking nearby for your convenience.',
		image: parking
	},
	{
		name: 'Efficient Waste Management',
		description: 'Our state-of-the-art waste management system promotes sustainability. We provide recycling bins and guide you on proper waste sorting to reduce our environmental impact.',
		image: waste
	},
	{
		name: 'High-Speed Wi-Fi',
		description:
			"Stay connected with our complimentary high-speed Wi-Fi. Perfect for work or leisure, our secure network ensures you're always online when you need to be.",
		image: wifi
	},
	{
		name: 'Advanced Security System',
		description: 'Your safety is our priority. Our 24/7 CCTV monitoring and state-of-the-art security measures provide peace of mind for all our tenants.',
		image: cctv
	},
	{
		name: 'Modern Kitchen Facilities',
		description: 'Enjoy our fully-equipped communal kitchen space, complete with modern appliances to meet all your culinary needs.',
		image: kitchen
	},
	{
		name: 'Professional Boardrooms',
		description:
			'Impress clients and boost productivity in our sleek, well-appointed boardrooms. Equipped with the latest technology for seamless presentations and video conferencing.',
		image: boardroom
	}
] as Feature[];