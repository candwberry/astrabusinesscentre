import type { Unit } from '$lib/data/types';

// Import feature svgs
import wcsvg from '$lib/assets/svg/wc.svg';
import wifisvg from '$lib/assets/svg/wifi.svg';

let wc: string[] = [wcsvg, "Toilets"];
let wifi: string[] = [wifisvg, "Wi-Fi"];

/*
Example:
const activeUnits: Unit[] = [
    { name: 'Unit1', sq_ft: 100, features: [wc, wifi], price: 1000 },
    { name: 'Unit2', sq_ft: 200, features: [wc, wifi], price: 2000 }, etc....
]
*/
const activeUnits: Unit[] = [
    {
        name: 'Unit 1',
        sq_ft: 200,
        features: [
            wc, wifi
        ],
        price: 1000
    },
    {
        name: 'Unit 2',
        sq_ft: 100,
        features: [
            wc, wifi
        ],
        price: 500
    },
    {
        name: 'Unit 3',
        sq_ft: 500,
        features: [
            wc, wifi
        ],
        price: 1000
    }
];
export default activeUnits;