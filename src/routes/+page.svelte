<script lang="ts">
	import office from '$lib/assets/office.jpeg';
	import logomini from '$lib/assets/logomini.svg';
	import security from '$lib/assets/security.webp';
	import background from '$lib/assets/background.png';
	import FadeIn from '$lib/components/FadeIn.svelte';
	import location from '$lib/assets/location.svg';
	import toilet from '$lib/assets/toilet.webp';
	import land from '$lib/assets/land.jpg';
	import maintenance from '$lib/assets/maintenance.png';
	import cctv from '$lib/assets/cctv.svg';
	import router from '$lib/assets/router.svg';
	import parking from '$lib/assets/parking.svg';
	import waste from '$lib/assets/waste.svg';
	import kitchen from '$lib/assets/kitchen.svg';
	import boardroom from '$lib/assets/boardroom.svg';
	// @ts-expect-error - No official types for this.
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
    import Footer from '$lib/components/Footer.svelte';

	let carousel: Carousel;
	const handleNextClick = () => {
		carousel.goToNext();
	};
	const handlePrevClick = () => {
		carousel.goToPrev();
	};
</script>

<svelte:head>
    <title>Astra Business Centre</title>
    <meta title="title" content="Astra Business Centre" />
    <meta name="description" content="Astra Business Centre is a business park located in the heart of the UK. We offer a range of services to help innovators build breakout companies." />
</svelte:head>

<main>
    <section id="hero">
        <div id="hero-left">
            <FadeIn>
                <h1>
                    <span class="highlight">Commercial</span> &
                    <span class="highlight">Industrial</span> units to rent in Preston.
                </h1>
            </FadeIn>
            <FadeIn extraDelay={200}>
                <h2>Astra Business Centre, Roman Way, PR2 5AP</h2>
            </FadeIn>
            <FadeIn extraDelay={200}>
                <a id="findoutmore" href="#services">Find Out More</a>
            </FadeIn>
        </div>
        <div id="hero-right">
            <FadeIn extraDelay={-200}>
                <img class="main-img special" src={office} alt="office" width="500" height="500" />
                <svg width="0" height="0">
                    <defs>
                        <clipPath id="clipPolygon" clipPathUnits="objectBoundingBox">
                            <path d="M 0.205 0.111 L 0.698 0.020 L 0.982 0.173 C 0.983 0.173 0.982 0.174 0.981 0.174 L 0.693 0.091 C 0.692 0.091 0.690 0.092 0.690 0.093 L 0.687 0.544 L 0.617 0.554 V 0.509 L 0.388 0.361 L 0.203 0.400 L 0.205 0.111 M 0.448 0.584 L 0.446 0.902 L 0.773 0.827 L 0.772 0.569 C 0.772 0.568 0.773 0.567 0.774 0.568 L 0.953 0.614 L 0.774 0.528 L 0.448 0.584 M 0.024 0.432 L 0.388 0.361 L 0.617 0.509 L 0.386 0.432 C 0.385 0.432 0.383 0.433 0.383 0.434 L 0.380 0.919 L 0.018 0.998 L 0.024 0.432" />
                        </clipPath>
                    </defs>
                </svg>
            </FadeIn>
        </div>
    </section>

    <section id="facilities">
        <div class="facilities-header">
            <div class="facilities-title">
                <h1>Our Services</h1>
            </div>
            <div class="facilities-controls">
                <button on:click={handlePrevClick}>&lt;</button>
                <button on:click={handleNextClick}>&gt;</button>
            </div>
        </div>
        <div class="carousel-container">
            {#if browser}
                <Carousel
                    bind:this={carousel}
                    arrows={false}
                    particlesToShow={1}
                    initialPageIndex={0}
                    autoplayDuration={10000}
                >
                    <div class="carouselItem" id="toilets">
                        <div id="iframeParent">
                            <iframe
                                title="Astra Business Map"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9427.743016075412!2d-2.6377409!3d53.790631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b73de089a9f2b%3A0xed2b8ac41df1d55c!2sAstra%20Business%20Centre!5e0!3m2!1sen!2suk!4v1719753926459!5m2!1sen!2suk"
                                allowfullscreen={true}
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </Carousel>
            {:else}
                <div class="carouselItem">
                    <img src={background} alt="background" />
                    <div>
                        <h3>Google Maps</h3>
                    </div>
                </div>
            {/if}
        </div>
        <div id="grid">
            <div class="gridItem">
                <img src={cctv} alt="" />
                <div>CCTV & Security</div>
            </div>
            <div class="gridItem">
                <img src={router} alt="" />
                <div>High Speed Internet</div>
            </div>
            <div class="gridItem">
                <img src={parking} alt="" />
                <div>Parking</div>
            </div>
            <div class="gridItem">
                <img src={waste} alt="" />
                <div>Waste Management</div>
            </div>
            <div class="gridItem">
                <img src={kitchen} alt="" />
                <div>Kitchen</div>
            </div>
            <div class="gridItem">
                <img src={boardroom} alt="" />
                <div>Boardroom</div>
            </div>
        </div>
    </section>
    <section class="spacer"></section>
    <Footer />
</main>

<style>
button {
    background-color: #ee6925;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bolder;
}

.highlight {
    color: #ee6925;
}

#findoutmore {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ee6925;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}

.main-img.special {
    clip-path: url(#clipPolygon);
}

#facilities {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    justify-content: center;
    background-color: white;
    gap : 2rem;
    min-height: 91vh;
}

.facilities-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: black;
    margin-top: 2rem;
}

.facilities-title {
    padding: 0 4rem;

    & > h1 {
        margin: 0;
    }
}

.facilities-title h1 {
    font-size: 3em;
}

.facilities-controls {
    padding-right: 4rem;
    display: flex;
    flex-direction: row;
    gap: 4px;
}

.carousel-container {
    width: 80vw;
    overflow: clip;
    position: relative;
}

#iframeParent iframe {
    width: 100%;
    height: 380px;
    border: 0;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
}

#grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;;
}

.gridItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    color: black;
    font-size: 1.25rem;
}

.gridItem img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

.spacer {
    max-height: 5vh;
    min-height: 5vh;
    background-color: white;
    border-bottom: 5rem solid #081535;
}

main {
    width: 100%;
    overflow-x: hidden;
}

#hero {
    display: flex;
    justify-content: center;
    align-items: center;
	min-height: 91vh;
    padding: 0 4rem; 
}

#hero-left {
    z-index: 2;
    max-width: 800px;
        display: flex;
    flex-direction: column;
    justify-content: center;

}

#hero-left h1 {
    font-size: 4rem;
    color: white;
}

#hero-left h2 {
    font-size: 1.5rem;
    color: white;
}

.highlight {
    color: #ee6925;
}

#findoutmore {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ee6925;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 1rem;
}

#hero-right {
    right: 0;
    top: 50%;
    z-index: 1;
}

.main-img.special {
    clip-path: url(#clipPolygon);
    max-width: 500px;
    width: 100%;
    height: auto;
    opacity: 0.8;
    transition: opacity 0.3s ease;
}

@media (max-width: 1200px) {
    .main-img.special {
        max-width: 400px;
        opacity: 0.4;
    }

    .gridItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: black;
    }

    .gridItem img {
        width: 50px;
        height: 50px;
        margin: 0;
        margin-bottom: 10px;
    }
}

@media (max-width: 768px) {
    .main-img.special {
        max-width: 300px;
        opacity: 0.2;
    }

    .facilities-title h1 {
        font-size: 2rem;
        white-space: nowrap;
    }

    button {
        font-size: 1rem;
    }

    
    #grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .main-img.special {
        max-width: 250px;
        opacity: 0.1;
    }

    .gridItem img {
    }
}

#hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 91vh;
    padding: 0 2rem;
    position: relative;
    overflow: hidden;
    justify-content: center;
}

#hero-left {
    z-index: 2;
    max-width: 1200px;
    flex: 1.5;
    padding-left: 10%;
    padding-bottom: 5%;
}

#hero-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding-right: calc(9% - 3rem);
    padding-bottom: 5%;
}

.main-img.special {
    clip-path: url(#clipPolygon);
    max-width: 500px;
    width: 100%;
    height: auto;
    opacity: 0.8;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

@media (max-width: 1200px) {
    #hero {
        flex-direction: column;
        justify-content: center;
    }

    #hero-right {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .main-img.special {
        max-width: 400px;
        opacity: 0.4;
        transform: scale(1.2);
    }
}

@media (max-width: 768px) {
    .main-img.special {
        max-width: 300px;
        opacity: 0.2;
        transform: scale(1.4);
    }
}

@media (max-width: 480px) {
    .main-img.special {
        max-width: 250px;
        opacity: 0.1;
        transform: scale(1.6);
    }
}
</style>