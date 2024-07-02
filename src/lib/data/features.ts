import type { Feature } from '$lib/utils/types';

export default [
	{
		name: 'Parking',
		description:
			'There is one parking spot, and it is mine. You can park on the street, or pay me an additional $1000 a month for it.',
		image: '/images/parking.jpg'
	},
	{
		name: 'Waste Management',
		description: 'We will give you a bin, and make you sort everything else out yourself!',
		image: '/images/waste.jpg',
		tags: [{ label: 'Primary Color' }, { label: 'Secondary Color', color: 'secondary' }]
	},
	{
		name: 'Free Wi-Fi',
		description:
			'We provide free Wi-Fi. And also, we intercept all your traffic and sell it to the highest bidder, and you will have to call us to download or unblock anything :p',
		image: '/images/wifi.jpg'
	},
	{
		name: 'CCTV & Security',
		description: 'We are always watching! :)',
		image: '/images/cctv.jpg'
	},
	{
		name: 'Kitchen',
		description: 'a room with a microwave and kettle.',
		image: '/images/kitchen.jpg'
	},
	{
		name: 'Boardroom',
		description:
			'We provide awesome boardrooms for your meetings! You will look just like the guy in the image!',
		image: '/images/boardroom.jpg'
	}
] as Feature[];
