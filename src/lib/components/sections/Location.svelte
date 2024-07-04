<script lang="ts">
    import ContentSection from '$lib/components/elements/ContentSection.svelte';
</script>

<ContentSection
    id="ourlocation"
    title="Our Location"
    description="Conveniently located at the entrance to Roman Way Industrial Estate and less than a mile from Junction 31(a) of the M6 Motorway, Astra Business Centre offers excellent accessibility to businesses and organisations throughout the North West of England."
>
<div id="iframeParent">
    <iframe
        title="Astra Business Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9427.743016075412!2d-2.6377409!3d53.790631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b73de089a9f2b%3A0xed2b8ac41df1d55c!2sAstra%20Business%20Centre!5e0!3m2!1sen!2suk!4v1719753926459!5m2!1sen!2suk"
        allowfullscreen={true}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
</div>
</ContentSection>

<style lang="scss">
    #iframeParent {
        width: 100%;
    }

    iframe {
        width: 100%;
        height: 400px;
        border: none;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        appearance: none;
        outline: none;
    }

    iframe:active {
        outline: none;
        appearance: none;
    }
    
    @media (max-width: 900px) {
        #iframeParent {
            width: 90vw;
        }
    }

</style>