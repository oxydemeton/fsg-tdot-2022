<script lang="ts">

import {all_stations} from "../script/Stations_and_gruops.js";
import Spoiler from "./Spoiler.svelte";
</script>

<style>
    dialog {
        @apply fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-light/50 z-20 backdrop-blur select-none;
    }
    .Info {
        @apply w-1/2 h-1/2
            h-1/2 bg-main/70 backdrop-blur-3xl rounded-xl mt-1 p-4;
    }
    h2 {
        @apply w-full text-center text-5xl font-black font-mono;
    }
    h3, summary {
        @apply text-3xl text-center font-serif italic;
    }
    h4 {
        @apply text-2xl font-bold inline-block;
    }
    section {
        @apply text-xl;
    }
    /* Table related stuff*/
    table {
        @apply w-full;
    }
    table > tr {
        @apply border-t-2 border-dark m-8;
    }
    table > tr > * {
        @apply w-1/2 text-center;
    }

    /*usefull classes*/
    .mark {
        @apply font-bold italic underline;
    }
</style>

<dialog open>
    <div class="Info">
        <h2>Info</h2>
        <br>

        <details>
            <summary>Lösungen</summary>
            <table>
            {#each all_stations as station}
                <tr class="" >
                    <th class="">{station.name}:</th>
                    <td class="italic">
                    <Spoiler class="inline-block">
                        {#if (station.solution)}
                            "{station.solution}"
                        {:else}
                            Es gibt keine Lösung
                        {/if}
                    </Spoiler>
                    </td>
                <tr/>
            {/each}
            </table>
        </details>
    </div>
</dialog>