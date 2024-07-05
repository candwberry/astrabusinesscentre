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
let kitchen: string[] = [kitchensvg, "Kitchen Facilities"];
let waste: string[] = [wastesvg, "Waste Management"];

/* ENTER THE ACTIVE UNITS BELOW :) Note; you will want to put the features in an order that will wrap nicely.. i.e. don't put long features
next to each other, or they will likely take up one row each when you could pair a long with a short (as in the name of the feature..)
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
            wifi, parking, waste
        ],
        price: 1000
    },
    {
        name: 'Unit 2',
        sq_ft: 100,
        features: [
            wc, wifi, kitchen, 
        ],
        price: 500
    },
    {
        name: 'Unit 3',
        sq_ft: 500,
        features: [
            kitchen, wc, parking, wifi
        ],
        price: 1000
    }
];
export default activeUnits;