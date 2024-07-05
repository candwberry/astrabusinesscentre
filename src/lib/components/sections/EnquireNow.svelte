<script lang="ts">
    import ContentSection from "$lib/components/elements/ContentSection.svelte";
    import Button from "$lib/components/elements/Button.svelte";
    import ContactIcon from '$lib/assets/svg/contact.svelte';
    import UnitIcon from '$lib/assets/svg/units.svelte';
</script>

<ContentSection 
    id="enquirenow"
    title="Enquire Today"
    description="With a selection of premium office and industrial units to rent on fixed term contracts, see how Astra Business Centre can help your business succeed. Browse our unit availability our enquire today to find out more."
>
<div class="flex">
    <Button color="primary" href="/unit-availability">
        <UnitIcon />
        View Availability
    </Button>
    <Button color="secondary" href="/contact-us">
        <ContactIcon />
        Enquire Now
    </Button>
</div>
</ContentSection>

<style lang="scss">
    .flex {
        display: flex;
        flex-direction: row;
        gap: 12px;

		@media (max-width: 767px) {
            flex-direction: column;
        }
    }
</style>