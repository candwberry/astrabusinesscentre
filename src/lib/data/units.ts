import type { Unit } from '$lib/data/types';

// Import feature svgs
import wcsvg from '$lib/assets/svg/wc.svg';
import wifisvg from '$lib/assets/svg/wifi.svg';
import parkingsvg from '$lib/assets/svg/parking.svg';
import kitchensvg from '$lib/assets/svg/kitchen.svg';
import wastesvg from '$lib/assets/svg/waste.svg';

let wc: string[] = [wcsvg, "Toilets"];
let wifi: string[] = [wifisvg, "Wi-Fi"];
let parking: string[] = [parkingsvg, "Parking"];
let kitchen: string[] = [kitchensvg, "Kitchen"];
let waste: string[] = [wastesvg, "Waste"];

/* ENTER THE ACTIVE UNITS BELOW :)
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
            wc, wifi, parking
        ],
        price: 1000
    },
    {
        name: 'Unit 2',
        sq_ft: 100,
        features: [
            wc, wifi, kitchen
        ],
        price: 500
    },
    {
        name: 'Unit 3',
        sq_ft: 500,
        features: [
            wc, wifi, waste
        ],
        price: 1000
    }
];
export default activeUnits;