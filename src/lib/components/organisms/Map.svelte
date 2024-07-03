<script lang="ts">
	let selectedUnit: string = 'NONE';
	export let callback = (unit: string) => {
		console.log(unit);
	};

	const handleClick = (unit: string) => {
		selectedUnit = unit;
		callback(unit);
	};

	export let text: boolean = true;
	export function getSelectedUnit() {
		return selectedUnit;
	}
</script>

{#if text}
	{#if selectedUnit === 'NONE'}
		<p style="color: black;">You <span style="color: #ee6925;">must</span> select your unit below.</p>
	{:else}
		<p style="color: black;"><b>Your unit: {selectedUnit}</b></p>
	{/if}
{:else}
	<div style="height: 3rem" />
	<!-- Kind of padding.. -->
{/if}
<div class="container">
	<svg
		style="max-height: 100%; width: 100%;"
		version="1.2"
		baseProfile="tiny"
		id="Layer_1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0px"
		y="0px"
		viewBox="0 0 373.04 500"
		overflow="visible"
		xml:space="preserve"
	>
		<path
			fill="#F5F5F5"
			d="M329.67,497.73H42.33c-22.51,0-40.76-18.25-40.76-40.76V43.03c0-22.51,18.25-40.76,40.76-40.76h287.35
	c22.51,0,40.76,18.25,40.76,40.76v413.94C370.43,479.48,352.19,497.73,329.67,497.73z"
		/>
		<g id="g142" transform="translate(1132.5665,180.121)">
			<path
				id="path144"
				fill="#FFFFFF"
				stroke="#FFFFFF"
				stroke-width="7"
				stroke-miterlimit="13.3333"
				d="M-884.82,302.45v-36.77
		c0-3.25-2.63-5.88-5.88-5.88h-199.39c-3.28,0-5.93-2.69-5.88-5.97l1.61-401.64c0.05-3.21,2.66-5.79,5.87-5.79l265.28-0.02
		c3.33,0,5.99,2.75,5.88,6.08l-7.86,229.69c-0.01,0.43-0.08,0.85-0.18,1.26l-10.64,41.46c-0.13,0.52-0.2,1.06-0.18,1.61l0.99,40.45
		c0.08,3.19,2.69,5.74,5.88,5.74h42.75c3.19,0,5.8,2.55,5.88,5.74l1.82,74.37c0.08,3.3-2.57,6.02-5.88,6.02h-43.15
		c-3.27,0-5.91,2.66-5.88,5.93l0.33,37.71"
			/>
		</g>
		<g>
			<g>
				<g
					id="g150_00000034801866452351135010000011817495251965355433_"
					transform="translate(1332.7643,678.6476)"
				>
					<path
						id="path152_00000140699975664329452410000000781763115765533613_"
						fill="none"
						stroke="#263746"
						stroke-width="9.3333"
						stroke-linecap="round"
						stroke-miterlimit="13.3333"
						stroke-dasharray="1.3267,26.54,2.6533,1.3267"
						d="
				M-1754.35-1043.07"
					/>
				</g>
			</g>
			<g>
				<g
					id="g150_00000154417904537414550080000001272101167625663133_"
					transform="translate(1332.7643,678.6476)"
				>
					<path
						id="path152_00000132772655591532487790000000479121267179399577_"
						fill="none"
						stroke="#263746"
						stroke-width="9.3333"
						stroke-linecap="round"
						stroke-miterlimit="13.3333"
						stroke-dasharray="1.3267,26.54,2.6533,1.3267"
						d="
				M-1391.35-1190.6"
					/>
				</g>
			</g>
			<g>
				<g
					id="g150_00000134209577518902186000000017385350383748226734_"
					transform="translate(1332.7643,678.6476)"
				>
					<path
						id="path152_00000078027248810075953620000016724883895341626767_"
						fill="none"
						stroke="#263746"
						stroke-width="9.3333"
						stroke-linecap="round"
						stroke-miterlimit="13.3333"
						stroke-dasharray="1.3267,26.54,2.6533,1.3267"
						d="
				M-1030.34-1038.24"
					/>
				</g>
			</g>
			<g>
				<g
					id="g150_00000151530077221455836700000000667287533330561973_"
					transform="translate(1332.7643,678.6476)"
				>
					<path
						id="path152_00000001650032206981845280000010748915789818018994_"
						fill="none"
						stroke="#263746"
						stroke-width="9.3333"
						stroke-linecap="round"
						stroke-miterlimit="13.3333"
						stroke-dasharray="1.3267,26.54,2.6533,1.3267"
						d="
				M-882.81-675.23"
					/>
				</g>
			</g>
			<g>
				<g
					id="g150_00000029767252138713644690000009257049547248061571_"
					transform="translate(1332.7643,678.6476)"
				>
					<path
						id="path152_00000025434028107331415590000006586174423672377250_"
						fill="none"
						stroke="#263746"
						stroke-width="9.3333"
						stroke-linecap="round"
						stroke-miterlimit="13.3333"
						stroke-dasharray="1.3267,26.54,2.6533,1.3267"
						d="
				M-1035.18-314.23"
					/>
				</g>
			</g>
			<g>
				<g
					id="g150_00000007419086484370400570000007251811031063037602_"
					transform="translate(1332.7643,678.6476)"
				>
					<path
						id="path152_00000015312418533889837480000010193879209695954103_"
						fill="none"
						stroke="#263746"
						stroke-width="9.3333"
						stroke-linecap="round"
						stroke-miterlimit="13.3333"
						stroke-dasharray="1.3267,26.54,2.6533,1.3267"
						d="
				M-1398.18-166.69"
					/>
				</g>
			</g>
			<g>
				<g
					id="g150_00000135662846111062641920000011129460414517797023_"
					transform="translate(1332.7643,678.6476)"
				>
					<path
						id="path152_00000046298809244122403180000002631041462112122756_"
						fill="none"
						stroke="#263746"
						stroke-width="9.3333"
						stroke-linecap="round"
						stroke-miterlimit="13.3333"
						stroke-dasharray="1.3267,26.54,2.6533,1.3267"
						d="
				M-1759.19-319.06"
					/>
				</g>
			</g>
			<g>
				<g
					id="g150_00000149373381034131054020000016991115103064756366_"
					transform="translate(1332.7643,678.6476)"
				>
					<path
						id="path152_00000018199217515754416050000018178872303231036326_"
						fill="none"
						stroke="#263746"
						stroke-width="9.3333"
						stroke-linecap="round"
						stroke-miterlimit="13.3333"
						stroke-dasharray="1.3267,26.54,2.6533,1.3267"
						d="
				M-1906.72-682.06"
					/>
				</g>
			</g>
		</g>
		<g id="g154" transform="translate(1332.9961,654.7631)">
			<path
				id="path156"
				fill="none"
				stroke="#263746"
				stroke-width="3"
				stroke-linecap="round"
				stroke-miterlimit="13.3333"
				stroke-dasharray="6,6,6,6,6,6"
				d="
		M-1037.41-298.35l0.66,76.31"
			/>
		</g>
		<g id="g158" transform="translate(1335.6615,380.0902)">
			<path
				id="path160_00000048469861340939634150000008470493857618623881_"
				fill="none"
				stroke="#263746"
				stroke-width="3"
				stroke-linecap="round"
				stroke-miterlimit="13.3333"
				d="
		M-1037.41,52.76"
			/>
		</g>
		<g id="g162" transform="translate(1281.014,1086.0198)">
			<path
				id="path164"
				fill="#263746"
				d="M-996.35-828.71l-4.13,13.07l17.54,6.08l4.59-13.18L-996.35-828.71z"
			/>
		</g>
		<path id="path174" fill="#263746" d="M280.92,438.88h-14.37v-23.54h14.37V438.88z" />
		<path id="path176" fill="#263746" d="M247.8,436.26h-31.38v-12.69h31.38V436.26z" />
		<g id="g178" transform="translate(1519.0436,687.5595)">
			<path
				id="path180"
				fill="#709796"
				d="M-1175.19-331.17h-41.84v76.73l42.86,0.02c2.35,0,4.23-1.94,4.16-4.28l-2.05-69.43
		C-1172.11-329.82-1173.5-331.17-1175.19-331.17 M-1240.73-437.59l25.65,0.04l6.23-216.59c0.07-2.45-1.89-4.47-4.34-4.47h-25.77
		L-1240.73-437.59z M-1355.09-370.15l0.31,35.46h75.2v-49.52h-116.97c0,0-0.11,13.45,0,13.91L-1355.09-370.15z M-1355.85-290.59
		l-76.58,0.23l0.23-36h-13.3v46.77h97.9v-15.36h-8.02L-1355.85-290.59z M-1475.54-251.69h168.44v-15.59h-168.44V-251.69z
		 M-1457.5-446.11h-14.67l-3.36,171.5l14.06-0.21L-1457.5-446.11z M-1434.59-457.48l-17.46,0.06v-52.58l17.78-0.02L-1434.59-457.48z
		"
			/>
		</g>
		<g id="g182" transform="translate(389.7829,816.9394)">
			<path
				id="path184"
				fill="#367DBF"
				d="M-326.74-492.72h-9.82c-1.09,0-1.97-0.88-1.97-1.97v-10.28c0-1.09,0.88-1.97,1.97-1.97h9.82
		c1.09,0,1.97,0.88,1.97,1.97v10.28C-324.77-493.6-325.65-492.72-326.74-492.72"
			/>
		</g>
		<g id="g186" transform="translate(389.7829,816.9394)">
			<path
				id="path188"
				fill="none"
				stroke="#FFFFFF"
				stroke-miterlimit="13.3333"
				d="M-326.74-492.72h-9.82
		c-1.09,0-1.97-0.88-1.97-1.97v-10.28c0-1.09,0.88-1.97,1.97-1.97h9.82c1.09,0,1.97,0.88,1.97,1.97v10.28
		C-324.77-493.6-325.65-492.72-326.74-492.72z"
			/>
		</g>
		<g id="g190" transform="translate(362.2145,846.231)">
			<path
				id="path192"
				fill="#FFFFFF"
				d="M-306.02-529.3h1.6c0.24,0,0.46-0.02,0.68-0.06c0.22-0.04,0.41-0.11,0.58-0.22
		c0.17-0.11,0.3-0.27,0.4-0.47c0.1-0.2,0.15-0.47,0.15-0.8c0-0.33-0.05-0.59-0.15-0.8c-0.1-0.2-0.23-0.36-0.4-0.47
		c-0.17-0.11-0.36-0.19-0.58-0.22c-0.22-0.04-0.45-0.06-0.68-0.06h-1.6V-529.3z M-308.08-534.16h4.22c0.58,0,1.08,0.09,1.49,0.28
		c0.41,0.19,0.74,0.44,1,0.74c0.26,0.31,0.45,0.66,0.56,1.06c0.12,0.4,0.18,0.81,0.18,1.22c0,0.42-0.06,0.83-0.18,1.23
		c-0.12,0.4-0.31,0.75-0.56,1.06c-0.26,0.31-0.59,0.56-1,0.75c-0.41,0.19-0.91,0.28-1.49,0.28h-2.16v3.7h-2.06V-534.16z"
			/>
		</g>
		<g id="g194" transform="translate(976.8629,797.2857)">
			<path
				id="path196"
				fill="#367DBF"
				d="M-767.83-468.18h-9.82c-1.09,0-1.97-0.88-1.97-1.97v-10.28c0-1.09,0.88-1.97,1.97-1.97h9.82
		c1.09,0,1.97,0.88,1.97,1.97v10.28C-765.86-469.06-766.74-468.18-767.83-468.18"
			/>
		</g>
		<g id="g198" transform="translate(976.8629,797.2857)">
			<path
				id="path200"
				fill="none"
				stroke="#FFFFFF"
				stroke-miterlimit="13.3333"
				d="M-767.83-468.18h-9.82
		c-1.09,0-1.97-0.88-1.97-1.97v-10.28c0-1.09,0.88-1.97,1.97-1.97h9.82c1.09,0,1.97,0.88,1.97,1.97v10.28
		C-765.86-469.06-766.74-468.18-767.83-468.18z"
			/>
		</g>
		<g id="g202" transform="translate(949.2944,826.5773)">
			<path
				id="path204"
				fill="#FFFFFF"
				d="M-747.12-504.76h1.6c0.24,0,0.46-0.02,0.68-0.06c0.22-0.04,0.41-0.11,0.58-0.22
		c0.17-0.11,0.3-0.27,0.4-0.47c0.1-0.2,0.15-0.47,0.15-0.8c0-0.33-0.05-0.59-0.15-0.8c-0.1-0.2-0.23-0.36-0.4-0.47
		c-0.17-0.11-0.36-0.19-0.58-0.22c-0.22-0.04-0.45-0.06-0.68-0.06h-1.6V-504.76z M-749.17-509.62h4.22c0.58,0,1.08,0.09,1.49,0.28
		c0.41,0.19,0.74,0.44,1,0.74c0.26,0.31,0.45,0.66,0.56,1.06c0.12,0.4,0.18,0.81,0.18,1.22c0,0.42-0.06,0.83-0.18,1.23
		c-0.12,0.4-0.31,0.75-0.56,1.06c-0.26,0.31-0.59,0.56-1,0.75c-0.41,0.19-0.91,0.28-1.49,0.28h-2.16v3.7h-2.06V-509.62z"
			/>
		</g>
		<g id="g206" transform="translate(1342.1625,1562.1616)">
			<path
				id="path208"
				fill="#367DBF"
				d="M-1042.29-1423.25h-9.82c-1.09,0-1.97-0.88-1.97-1.97v-10.28c0-1.09,0.88-1.97,1.97-1.97h9.82
		c1.09,0,1.97,0.88,1.97,1.97v10.28C-1040.32-1424.14-1041.2-1423.25-1042.29-1423.25"
			/>
		</g>
		<g id="g210" transform="translate(1342.1625,1562.1616)">
			<path
				id="path212"
				fill="none"
				stroke="#FFFFFF"
				stroke-miterlimit="13.3333"
				d="M-1042.29-1423.25h-9.82
		c-1.09,0-1.97-0.88-1.97-1.97v-10.28c0-1.09,0.88-1.97,1.97-1.97h9.82c1.09,0,1.97,0.88,1.97,1.97v10.28
		C-1040.32-1424.14-1041.2-1423.25-1042.29-1423.25z"
			/>
		</g>
		<g id="g214" transform="translate(1314.594,1591.4531)">
			<path
				id="path216"
				fill="#FFFFFF"
				d="M-1021.58-1459.83h1.6c0.24,0,0.46-0.02,0.68-0.06c0.22-0.04,0.41-0.11,0.58-0.22
		c0.17-0.11,0.3-0.27,0.4-0.47c0.1-0.2,0.15-0.47,0.15-0.8s-0.05-0.59-0.15-0.8c-0.1-0.2-0.23-0.36-0.4-0.47
		c-0.17-0.11-0.36-0.19-0.58-0.22c-0.22-0.04-0.45-0.06-0.68-0.06h-1.6V-1459.83z M-1023.64-1464.69h4.22
		c0.58,0,1.08,0.09,1.49,0.28c0.41,0.19,0.74,0.44,1,0.74c0.26,0.31,0.45,0.66,0.56,1.06c0.12,0.4,0.18,0.81,0.18,1.22
		c0,0.42-0.06,0.83-0.18,1.23c-0.12,0.4-0.31,0.75-0.56,1.06c-0.26,0.31-0.59,0.56-1,0.75c-0.41,0.19-0.91,0.28-1.49,0.28h-2.16v3.7
		h-2.06V-1464.69z"
			/>
		</g>
		<g id="g218" transform="translate(678.8623,452.7141)">
			<path
				id="path220"
				fill="#367DBF"
				d="M-543.93-37.93h-9.82c-1.09,0-1.97-0.88-1.97-1.97v-10.28c0-1.09,0.88-1.97,1.97-1.97h9.82
		c1.09,0,1.97,0.88,1.97,1.97v10.28C-541.96-38.81-542.84-37.93-543.93-37.93"
			/>
		</g>
		<g id="g222" transform="translate(678.8623,452.7141)">
			<path
				id="path224"
				fill="none"
				stroke="#FFFFFF"
				stroke-miterlimit="13.3333"
				d="M-543.93-37.93h-9.82c-1.09,0-1.97-0.88-1.97-1.97
		v-10.28c0-1.09,0.88-1.97,1.97-1.97h9.82c1.09,0,1.97,0.88,1.97,1.97v10.28C-541.96-38.81-542.84-37.93-543.93-37.93z"
			/>
		</g>
		<g id="g226" transform="translate(651.2939,482.0056)">
			<path
				id="path228"
				fill="#FFFFFF"
				d="M-523.22-74.5h1.6c0.24,0,0.46-0.02,0.68-0.06c0.22-0.04,0.41-0.11,0.58-0.22
		c0.17-0.11,0.3-0.27,0.4-0.47c0.1-0.2,0.15-0.47,0.15-0.8s-0.05-0.59-0.15-0.8c-0.1-0.2-0.23-0.36-0.4-0.47
		c-0.17-0.11-0.36-0.19-0.58-0.22c-0.22-0.04-0.45-0.06-0.68-0.06h-1.6V-74.5z M-525.27-79.36h4.22c0.58,0,1.08,0.09,1.49,0.28
		c0.41,0.19,0.74,0.44,1,0.74c0.26,0.31,0.45,0.66,0.56,1.06c0.12,0.4,0.18,0.81,0.18,1.22c0,0.42-0.06,0.83-0.18,1.23
		c-0.12,0.4-0.31,0.75-0.56,1.06c-0.26,0.31-0.59,0.56-1,0.75c-0.41,0.19-0.91,0.28-1.49,0.28h-2.16v3.7h-2.06V-79.36z"
			/>
		</g>
		<g id="g230" transform="translate(678.8623,375.7242)">
			<path
				id="path232"
				fill="#367DBF"
				d="M-543.93,58.21h-9.82c-1.09,0-1.97-0.88-1.97-1.97V45.96c0-1.09,0.88-1.97,1.97-1.97h9.82
		c1.09,0,1.97,0.88,1.97,1.97v10.28C-541.96,57.33-542.84,58.21-543.93,58.21"
			/>
		</g>
		<g id="g234" transform="translate(678.8623,375.7242)">
			<path
				id="path236"
				fill="none"
				stroke="#FFFFFF"
				stroke-miterlimit="13.3333"
				d="M-543.93,58.21h-9.82c-1.09,0-1.97-0.88-1.97-1.97
		V45.96c0-1.09,0.88-1.97,1.97-1.97h9.82c1.09,0,1.97,0.88,1.97,1.97v10.28C-541.96,57.33-542.84,58.21-543.93,58.21z"
			/>
		</g>
		<g id="g238" transform="translate(651.2939,405.0158)">
			<path
				id="path240"
				fill="#FFFFFF"
				d="M-523.22,21.63h1.6c0.24,0,0.46-0.02,0.68-0.06c0.22-0.04,0.41-0.11,0.58-0.22
		c0.17-0.11,0.3-0.27,0.4-0.47c0.1-0.2,0.15-0.47,0.15-0.8s-0.05-0.59-0.15-0.8c-0.1-0.2-0.23-0.36-0.4-0.47
		c-0.17-0.11-0.36-0.19-0.58-0.22c-0.22-0.04-0.45-0.06-0.68-0.06h-1.6V21.63z M-525.27,16.77h4.22c0.58,0,1.08,0.09,1.49,0.28
		c0.41,0.19,0.74,0.44,1,0.74c0.26,0.31,0.45,0.66,0.56,1.06c0.12,0.4,0.18,0.81,0.18,1.22c0,0.42-0.06,0.83-0.18,1.23
		c-0.12,0.4-0.31,0.75-0.56,1.06c-0.26,0.31-0.59,0.56-1,0.75c-0.41,0.19-0.91,0.28-1.49,0.28h-2.16v3.7h-2.06V16.77z"
			/>
		</g>
		<g id="g242" transform="translate(1244.4438,846.4521)">
			<path
				id="path244"
				fill="#ED7039"
				d="M-968.87-529.57v81.32h-32.1v-7.34h-82.54v-33.02h82.54v-40.97H-968.87z"
			/>
		</g>
		<g id="g246" transform="translate(1244.4438,846.4521)">
			<path
				id="path248"
				class="map-area"
				on:click={() => handleClick('E')}
				class:selected={selectedUnit === 'E'}
				role="button"
				tabindex="0"
				on:keydown={() => handleClick('E')}
				fill="none"
				stroke="#FFFFFF"
				stroke-miterlimit="13.3333"
				d="M-968.87-529.57v81.32h-32.1v-7.34h-82.54v-33.02
		h82.54v-40.97H-968.87z"
			/>
		</g>
		<path
			id="path250"
			fill="#ED7039"
			stroke="#FFFFFF"
			stroke-miterlimit="13.3333"
			d="M119.36,341.57H90.7v-19.49h28.66V341.57z"
		/>
		<path
			id="path252"
			class="map-area"
			on:click={() => handleClick('D')}
			class:selected={selectedUnit === 'D'}
			role="button"
			tabindex="0"
			on:keydown={() => handleClick('D')}
			fill="#ED7039"
			stroke="#FFFFFF"
			stroke-miterlimit="13.3333"
			d="M119.36,341.57h41.58v-19.49h-41.58V341.57z"
		/>
		<path
			id="path254"
			class="map-area"
			on:click={() => handleClick('F')}
			class:selected={selectedUnit === 'F'}
			role="button"
			tabindex="0"
			on:keydown={() => handleClick('F')}
			fill="#ED7039"
			stroke="#FFFFFF"
			stroke-miterlimit="13.3333"
			d="M119.36,341.57h41.58v53.65h-41.58V341.57z"
		/>
		<path
			id="path256"
			class="map-area"
			on:click={() => handleClick('C')}
			class:selected={selectedUnit === 'C'}
			role="button"
			tabindex="0"
			on:keydown={() => handleClick('C')}
			fill="#ED7039"
			stroke="#FFFFFF"
			stroke-miterlimit="13.3333"
			d="M119.36,367.02H90.7v-25.45h28.66V367.02z"
		/>
		<path
			id="path258"
			class="map-area"
			on:click={() => handleClick('B')}
			class:selected={selectedUnit === 'B'}
			role="button"
			tabindex="0"
			on:keydown={() => handleClick('B')}
			fill="#ED7039"
			stroke="#FFFFFF"
			stroke-miterlimit="13.3333"
			d="M119.36,367.02H90.7v14.22h28.66V367.02z"
		/>
		<path
			id="path260"
			class="map-area"
			on:click={() => handleClick('A')}
			class:selected={selectedUnit === 'A'}
			role="button"
			tabindex="0"
			on:keydown={() => handleClick('A')}
			fill="#ED7039"
			stroke="#FFFFFF"
			stroke-miterlimit="13.3333"
			d="M119.36,381.23H90.7v13.99h28.66V381.23z"
		/>
		<g id="g262" transform="translate(481.6011,1780.8003)">
			<path
				id="path264"
				class="map-area"
				on:click={() => handleClick('10')}
				class:selected={selectedUnit === '10'}
				role="button"
				tabindex="0"
				on:keydown={() => handleClick('10')}
				fill="#263746"
				d="M-395.72-1696.26v91.95h-20.4v54.34h-25.89l2.13-146.29H-395.72z"
			/>
		</g>
		<g id="g266" transform="translate(481.6011,1780.8003)">
			<path
				id="path268"
				fill="none"
				stroke="#FFFFFF"
				stroke-miterlimit="13.3333"
				d="M-395.72-1696.26v91.95h-20.4v54.34h-25.89
		l2.13-146.29H-395.72z"
			/>
		</g>
		<path
			id="path270"
			class="map-area"
			on:click={() => handleClick('8')}
			class:selected={selectedUnit === '8'}
			role="button"
			tabindex="0"
			on:keydown={() => handleClick('8')}
			fill="#263746"
			stroke="#FFFFFF"
			stroke-miterlimit="13.3333"
			d="M249.28,89.13h-91.1V35.94h91.1V89.13z"
		/>
		<g id="g272" transform="translate(1138.7234,1762.3365)">
			<path
				id="path274"
				class="map-area"
				on:click={() => handleClick('9')}
				class:selected={selectedUnit === '9'}
				role="button"
				tabindex="0"
				on:keydown={() => handleClick('9')}
				fill="#263746"
				d="M-889.44-1673.2v59.17h-45.86v-9.34h-45.25v-49.83H-889.44z"
			/>
		</g>
		<g id="g276" transform="translate(1138.7234,1762.3365)">
			<path
				id="path278"
				fill="none"
				stroke="#FFFFFF"
				stroke-miterlimit="13.3333"
				d="M-889.44-1673.2v59.17h-45.86v-9.34h-45.25v-49.83
		H-889.44z"
			/>
		</g>
		<g id="g280" transform="translate(1138.7234,1524.4033)">
			<path
				id="path282"
				class="map-area"
				on:click={() => handleClick('4')}
				class:selected={selectedUnit === '4'}
				role="button"
				tabindex="0"
				on:keydown={() => handleClick('4')}
				fill="#263746"
				d="M-889.44-1376.11v24.93h-45.86v18.62h-45.25v-52.89h45.25v9.34H-889.44z"
			/>
		</g>
		<g id="g284" transform="translate(1138.7234,1524.4033)">
			<path
				id="path286"
				fill="none"
				stroke="#FFFFFF"
				stroke-miterlimit="13.3333"
				d="M-889.44-1376.11v24.93h-45.86v18.62h-45.25
		v-52.89h45.25v9.34H-889.44z"
			/>
		</g>
		<path
			id="path288"
			class="map-area"
			on:click={() => handleClick('3')}
			class:selected={selectedUnit === '3'}
			role="button"
			tabindex="0"
			on:keydown={() => handleClick('3')}
			fill="#263746"
			stroke="#FFFFFF"
			stroke-miterlimit="13.3333"
			d="M249.28,213.34h-45.86v-40.12h45.86V213.34z"
		/>
		<path
			id="path290"
			class="map-area"
			on:click={() => handleClick('2')}
			class:selected={selectedUnit === '2'}
			role="button"
			tabindex="0"
			on:keydown={() => handleClick('2')}
			fill="#263746"
			stroke="#FFFFFF"
			stroke-miterlimit="13.3333"
			d="M249.28,259.2h-45.86v-45.86h45.86V259.2z"
		/>
		<path
			id="path292"
			class="map-area"
			on:click={() => handleClick('1')}
			class:selected={selectedUnit === '1'}
			role="button"
			tabindex="0"
			on:keydown={() => handleClick('1')}
			fill="#263746"
			stroke="#FFFFFF"
			stroke-miterlimit="13.3333"
			d="M249.28,290.29h-45.86V259.2h45.86V290.29z"
		/>
		<g id="g294" transform="translate(954.3142,1349.2676)">
			<path
				id="path296"
				class="map-area"
				on:click={() => handleClick('5')}
				class:selected={selectedUnit === '5'}
				role="button"
				tabindex="0"
				on:keydown={() => handleClick('5')}
				fill="#263746"
				d="M-750.89-1157.42v98.44h-45.25v-88.35h-41.04v-10.09H-750.89z"
			/>
		</g>
		<g id="g298" transform="translate(954.3142,1349.2676)">
			<path
				id="path300"
				fill="none"
				stroke="#FFFFFF"
				stroke-miterlimit="13.3333"
				d="M-750.89-1157.42v98.44h-45.25v-88.35h-41.04
		v-10.09H-750.89z"
			/>
		</g>
		<path
			id="path302"
			class="map-area"
			on:click={() => handleClick('6')}
			class:selected={selectedUnit === '6'}
			role="button"
			tabindex="0"
			on:keydown={() => handleClick('6')}
			fill="#263746"
			stroke="#FFFFFF"
			stroke-miterlimit="13.3333"
			d="M158.18,290.29h-41.04v-88.35h41.04V290.29z"
		/>
		<path
			id="path304"
			class="map-area"
			on:click={() => handleClick('7')}
			class:selected={selectedUnit === '7'}
			role="button"
			tabindex="0"
			on:keydown={() => handleClick('7')}
			fill="#263746"
			stroke="#FFFFFF"
			stroke-miterlimit="13.3333"
			d="M158.18,191.85h-41.04V89.13h41.04V191.85z"
		/>
		<text
			transform="matrix(1 0 0 1 50.5948 142.5743)"
			fill="#FFFFFF"
			font-family="'Arial-Black'"
			font-size="19.5691px">1</text
		>
		<text
			transform="matrix(1 0 0 1 64.1578 142.5743)"
			fill="#FFFFFF"
			font-family="'Arial-Black'"
			font-size="19.5691px">0</text
		>
		<text
			transform="matrix(1 0 0 1 219.8297 281.2422)"
			fill="#FFFFFF"
			font-family="'Arial-Black'"
			font-size="19.5691px">1</text
		>
		<text
			transform="matrix(1 0 0 1 219.8297 245.8018)"
			fill="#FFFFFF"
			font-family="'Arial-Black'"
			font-size="19.5691px">2</text
		>
		<text
			transform="matrix(1 0 0 1 219.8297 199.7364)"
			fill="#FFFFFF"
			font-family="'Arial-Black'"
			font-size="19.5691px">3</text
		>
		<text
			transform="matrix(1 0 0 1 174.7828 169.8936)"
			fill="#FFFFFF"
			font-family="'Arial-Black'"
			font-size="19.5691px">4</text
		>
		<text
			transform="matrix(1 0 0 1 174.7828 251.4375)"
			fill="#FFFFFF"
			font-family="'Arial-Black'"
			font-size="19.5691px">5</text
		>
		<text
			transform="matrix(1 0 0 1 131.8663 251.4375)"
			fill="#FFFFFF"
			font-family="'Arial-Black'"
			font-size="19.5691px">6</text
		>
		<text
			transform="matrix(1 0 0 1 131.8663 142.5743)"
			fill="#FFFFFF"
			font-family="'Arial-Black'"
			font-size="19.5691px">7</text
		>
		<text
			transform="matrix(1 0 0 1 196.9932 68.3106)"
			fill="#FFFFFF"
			font-family="'Arial-Black'"
			font-size="19.5691px">8</text
		>
		<text
			transform="matrix(1 0 0 1 196.9932 120.8135)"
			fill="#FFFFFF"
			font-family="'Arial-Black'"
			font-size="19.5691px">9</text
		>
		<text
			transform="matrix(1 0 0 1 102.2799 391.2198)"
			fill="#FFFFFF"
			font-family="'Arial-Black'"
			font-size="7.9955px">A</text
		>
		<text
			transform="matrix(1 0 0 1 102.0723 377.0742)"
			fill="#FFFFFF"
			font-family="'Arial-Black'"
			font-size="7.9955px">B</text
		>
		<text
			transform="matrix(1 0 0 1 102.0001 357.8701)"
			fill="#FFFFFF"
			font-family="'Arial-Black'"
			font-size="7.9955px">C</text
		>
		<text
			transform="matrix(1 0 0 1 136.9967 334.5235)"
			fill="#FFFFFF"
			font-family="'Arial-Black'"
			font-size="7.9955px">D</text
		>
		<text
			transform="matrix(1 0 0 1 212.6285 377.5088)"
			fill="#FFFFFF"
			font-family="'Arial-Black'"
			font-size="9.4613px">E</text
		>
		<text
			transform="matrix(1 0 0 1 137.1275 375.1719)"
			fill="#FFFFFF"
			font-family="'Arial-Black'"
			font-size="9.4613px">F</text
		>
		<g id="g354" transform="translate(487.5933,1266.4121)">
			<path
				id="path356"
				fill="#367DBF"
				d="M-400.22-1053.96h-9.82c-1.09,0-1.97-0.88-1.97-1.97v-10.28c0-1.09,0.88-1.97,1.97-1.97h9.82
		c1.09,0,1.97,0.88,1.97,1.97v10.28C-398.25-1054.84-399.14-1053.96-400.22-1053.96"
			/>
		</g>
		<g id="g358" transform="translate(487.5933,1266.4121)">
			<path
				id="path360"
				fill="none"
				stroke="#FFFFFF"
				stroke-miterlimit="13.3333"
				d="M-400.22-1053.96h-9.82
		c-1.09,0-1.97-0.88-1.97-1.97v-10.28c0-1.09,0.88-1.97,1.97-1.97h9.82c1.09,0,1.97,0.88,1.97,1.97v10.28
		C-398.25-1054.84-399.14-1053.96-400.22-1053.96z"
			/>
		</g>
		<g id="g362" transform="translate(460.0249,1295.7037)">
			<path
				id="path364"
				fill="#FFFFFF"
				d="M-379.51-1090.54h1.6c0.24,0,0.46-0.02,0.68-0.06c0.22-0.04,0.41-0.11,0.58-0.22
		c0.17-0.11,0.3-0.27,0.4-0.47c0.1-0.2,0.15-0.47,0.15-0.8s-0.05-0.59-0.15-0.8c-0.1-0.2-0.23-0.36-0.4-0.47
		c-0.17-0.11-0.36-0.19-0.58-0.22c-0.22-0.04-0.45-0.06-0.68-0.06h-1.6V-1090.54z M-381.57-1095.4h4.22c0.58,0,1.08,0.09,1.49,0.28
		c0.41,0.19,0.74,0.44,1,0.74c0.26,0.31,0.45,0.66,0.56,1.06c0.12,0.4,0.18,0.81,0.18,1.22c0,0.42-0.06,0.83-0.18,1.23
		c-0.12,0.4-0.31,0.75-0.56,1.06c-0.26,0.31-0.59,0.56-1,0.75c-0.41,0.19-0.91,0.28-1.49,0.28h-2.16v3.7h-2.06V-1095.4z"
			/>
		</g>
		<g id="g366" transform="translate(1467.8729,502.648)">
			<path
				id="path368"
				fill="#367DBF"
				d="M-1136.74-100.28h-9.82c-1.09,0-1.97-0.88-1.97-1.97v-10.28c0-1.09,0.88-1.97,1.97-1.97h9.82
		c1.09,0,1.97,0.88,1.97,1.97v10.28C-1134.77-101.16-1135.66-100.28-1136.74-100.28"
			/>
		</g>
		<g id="g370" transform="translate(1467.8729,502.648)">
			<path
				id="path372"
				fill="none"
				stroke="#FFFFFF"
				stroke-miterlimit="13.3333"
				d="M-1136.74-100.28h-9.82
		c-1.09,0-1.97-0.88-1.97-1.97v-10.28c0-1.09,0.88-1.97,1.97-1.97h9.82c1.09,0,1.97,0.88,1.97,1.97v10.28
		C-1134.77-101.16-1135.66-100.28-1136.74-100.28z"
			/>
		</g>
		<g id="g374" transform="translate(1440.3044,531.9395)">
			<path
				id="path376"
				fill="#FFFFFF"
				d="M-1116.03-136.85h1.6c0.24,0,0.46-0.02,0.68-0.06c0.22-0.04,0.41-0.11,0.58-0.22
		c0.17-0.11,0.3-0.27,0.4-0.47c0.1-0.2,0.15-0.47,0.15-0.8s-0.05-0.59-0.15-0.8c-0.1-0.2-0.23-0.36-0.4-0.47
		c-0.17-0.11-0.36-0.19-0.58-0.22c-0.22-0.04-0.45-0.06-0.68-0.06h-1.6V-136.85z M-1118.09-141.72h4.22c0.58,0,1.08,0.09,1.49,0.28
		c0.41,0.19,0.74,0.44,1,0.74c0.26,0.31,0.45,0.66,0.56,1.06c0.12,0.4,0.18,0.81,0.18,1.22c0,0.42-0.06,0.83-0.18,1.23
		c-0.12,0.4-0.31,0.75-0.56,1.06c-0.26,0.31-0.59,0.56-1,0.75c-0.41,0.19-0.91,0.28-1.49,0.28h-2.16v3.7h-2.06V-141.72z"
			/>
		</g>
	</svg>

	<!--
    <svg viewBox="0 0 800 1000">
        <rect x="60" y="50" width="680" height="350" fill="#003f5c"  />
        <rect x="60" y="430" width="50" height="450" fill="#7a5195" class="map-area" on:click={() => handleClick('2')} class:selected={selectedUnit === '2'} role="button" tabindex="0" on:keydown={() => handleClick('2')} />
        <rect x="130" y="430" width="50" height="450" fill="#ef5675" class="map-area" on:click={() => handleClick('3')} class:selected={selectedUnit === '3'} role="button" tabindex="0" on:keydown={() => handleClick('3')} />
        <rect x="200" y="430" width="50" height="450" fill="#ffa600" class="map-area" on:click={() => handleClick('4')} class:selected={selectedUnit === '4'} role="button" tabindex="0" on:keydown={() => handleClick('4')} />
        <rect x="270" y="430" width="50" height="450" fill="#003f5c" class="map-area" on:click={() => handleClick('5')} class:selected={selectedUnit === '5'} role="button" tabindex="0" on:keydown={() => handleClick('5')} />
        <rect x="340" y="430" width="50" height="450" fill="#7a5195" class="map-area" on:click={() => handleClick('6')} class:selected={selectedUnit === '6'} role="button" tabindex="0" on:keydown={() => handleClick('6')} />
        <rect x="410" y="430" width="50" height="450" fill="#ef5675" class="map-area" on:click={() => handleClick('7')} class:selected={selectedUnit === '7'} role="button" tabindex="0" on:keydown={() => handleClick('7')} />
        <rect x="480" y="430" width="50" height="450" fill="#ffa600" class="map-area" on:click={() => handleClick('8')} class:selected={selectedUnit === '8'} role="button" tabindex="0" on:keydown={() => handleClick('8')} />
        <rect x="550" y="430" width="50" height="450" fill="#003f5c" class="map-area" on:click={() => handleClick('9')} class:selected={selectedUnit === '9'} role="button" tabindex="0" on:keydown={() => handleClick('9')} />
        <rect x="620" y="430" width="50" height="450" fill="#7a5195" class="map-area" on:click={() => handleClick('10')} class:selected={selectedUnit === '10'} role="button" tabindex="0" on:keydown={() => handleClick('10')} />

        <rect x="60" y="900" width="100" height="50" fill="#ff6f61" class="map-area" on:click={() => handleClick('A')} class:selected={selectedUnit === 'A'} role="button" tabindex="0" on:keydown={() => handleClick('A')} />
        <rect x="180" y="900" width="100" height="50" fill="#de425b" class="map-area" on:click={() => handleClick('B')} class:selected={selectedUnit === 'B'} role="button" tabindex="0" on:keydown={() => handleClick('B')} />
        <rect x="300" y="900" width="100" height="50" fill="#2878a9" class="map-area" on:click={() => handleClick('C')} class:selected={selectedUnit === 'C'} role="button" tabindex="0" on:keydown={() => handleClick('C')} />
        <rect x="420" y="900" width="100" height="50" fill="#78c850" class="map-area" on:click={() => handleClick('D')} class:selected={selectedUnit === 'D'} role="button" tabindex="0" on:keydown={() => handleClick('D')} />
        <rect x="540" y="900" width="100" height="50" fill="#f7ac5a" class="map-area" on:click={() => handleClick('E')} class:selected={selectedUnit === 'E'} role="button" tabindex="0" on:keydown={() => handleClick('E')} />
        <rect x="660" y="900" width="100" height="50" fill="#fa5b3d" class="map-area" on:click={() => handleClick('F')} class:selected={selectedUnit === 'F'} role="button" tabindex="0" on:keydown={() => handleClick('F')} />
      </svg>
      -->
</div>

<style>
	text {
		pointer-events: none;
	}

	.container {
		position: relative;
		margin: auto;
		touch-action: manipulation;
		user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		height: 468px;
		display: flex;
		justify-content: center;
		transform: translateY(-16px);
	}

	.map-area {
		fill: #cccccc;
		cursor: pointer;
	}
	.map-area.selected {
		fill: red;
		border: none;
		outline: none;
	}

	p {
		font-weight: 600;
	}
</style>
