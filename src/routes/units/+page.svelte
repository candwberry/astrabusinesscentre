<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    
    let rows = data.rows ? data.rows : [];
    let halfLength = Math.ceil(rows.length / 2);
    let leftRows = rows.slice(0, halfLength);
    let rightRows = rows.slice(halfLength);
    import Map from '$lib/components/Map.svelte';
</script>

<svelte:head>
    <meta name="title" content="Unit Availability | Astra Business Centre" />
    <meta
        name="description"
        content="Looking for office space? Check out the available units at Astra Business Centre. Flexible options and prime locations. Contact us today!"
    />
    <title>Unit Availability</title>
</svelte:head>

<main>
    <div class="directory-board">
        <h1>Welcome to Astra Business Centre</h1>
        <div class="content">
            <div class="unit-list-container">
                <div class="map-container">
                    <Map text={false}/>
                </div>
                <div class="tables-container">
                    <div class="unit-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>Unit</th>
                                    <th>Company</th>
                                    <th>Sqr Ft.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {#each leftRows as [unit, company, size, href]}
                                {#if company.includes("#NONE")}
                                    <tr style="font-weight: 900;">
                                        <td>Unit {unit}</td>
                                        <td style="background-color: #ff6600"><a href="/enquire">Available to rent!</a></td>
                                        <td>{size}</td>
                                    </tr>
                                {:else}
                                    <tr style="font-weight: 600">
                                        <td>Unit {unit}</td>
                                        <td><a href={href}>{company}</a></td>
                                        <td>{size}</td>
                                    </tr>
                                {/if}
                                {/each}
                            </tbody>
                        </table>
                    </div>
                    <div class="unit-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>Unit</th>
                                    <th>Company</th>
                                    <th>Sqr Ft.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {#each rightRows as [unit, company, size]}
                                    <tr>
                                        <td>Unit {unit}</td>
                                        {#if company.includes("#")}
                                            <td><span style="color: #f7eaca">Available! Enquire here!</span></td>
                                        {:else}
                                            <td>{company}</td>
                                        {/if}
                                        <td>{size}</td>
                                    </tr>
                                {/each}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <p>If you are interested in an on-site unit or office suite, please <a href="/enquire" style="color: #ff6600">enquire here.</a></p>
        </div>
    </div>
</main>

<style>
    h1 {
        text-align: center;
        border-bottom: 2px solid #ff6600;
        padding-bottom: 1rem;
        margin-bottom: 2rem;
        font-size: 1.8rem;
    }

    .content {
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .unit-list-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 1200px;
    }

    .map-container {
        width: 100%;
        max-width: 600px;
        margin-bottom: 2rem;
    }

    .tables-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        width: 100%;
    }

    .unit-list {
        flex: 1;
        min-width: 300px;
        max-width: 100%;
    }
    
    table {
        width: 100%;
        border-spacing: 16px 0;
        white-space: nowrap;
    }

    td {
        text-align: left;
        padding: 0.75rem 0;
        border-bottom: 2px solid #ff6600;
    }

    th {
        font-weight: bold;
        color: #ff6600;
        gap: 1rem;
        text-align: left;
    }

    .footer {
        text-align: center;
        font-size: 0.9rem;
        margin-top: 2rem;
    }

    main {
        padding: 1rem;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 1.5rem;
        }

        table {
            font-size: 0.9rem;
        }

        td, th {
            padding: 0.5rem 0;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 1.2rem;
        }

        table {
            font-size: 0.8rem;
        }

        .unit-list {
            min-width: 100%;
        }
    }
</style>