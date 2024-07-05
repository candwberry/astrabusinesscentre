<script lang="ts">
    import ContentSection from "$lib/components/elements/ContentSection.svelte";
    import Button from "$lib/components/elements/Button.svelte";
    import ContactIcon from '$lib/assets/svg/contact.svelte';
    import UnitIcon from '$lib/assets/svg/units.svelte';
</script>

<ContentSection 
    id="enquirenow"
    title="Enquire Today"
    description="With a selection of premium office and industrial units to rent on fixed term contracts, see how Astra Business Centre can help your business succeed. Enquire today or browse our Unit Availability to find out more."
>
<div class="flex">
    <Button color="primary" size="large" href="/units">
        <UnitIcon />
        View Availability
    </Button>
    <Button color="secondary" size="large" href="/contactus">
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