<script lang="ts">

import {all_stations} from "../script/Stations_and_gruops.js";
import Spoiler from "./Spoiler.svelte";
import LockGreen from "../assets/SchlossGrün.png"
import LockRed from "../assets/SchlossRot.png"
import LockDefault from "../assets/SchlossNormal.png"
</script>

<style>
    dialog {
        @apply fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-light/50 z-20 backdrop-blur select-none;
    }
    .Info {
        @apply w-1/2 h-2/3
            h-1/2 bg-main/70 backdrop-blur-3xl rounded-xl mt-1 p-8
            overflow-y-auto overflow-x-hidden
            text-2xl;
    }
    details {
        @apply m-1;
    }
    h2 {
        @apply w-full text-center text-5xl font-black font-mono;
    }
    h3, summary {
        @apply text-3xl text-center font-serif italic p-1;
    }
    h4 {
        @apply text-2xl font-bold inline-block text-center;
    }
    /* Table related stuff*/
    table {
        @apply w-full;
    }
    table > tr {
        @apply border-t-2 border-dark p-8;
    }
    table > tr > * {
        @apply w-1/2 text-center m-2;
    }

    /* List related stuff*/
    li {
        @apply block py-2 border-t-2 border-dark text-center w-full;
    }
    .color {
        @apply border w-8 h-8 rounded-full float-left inline p-2;
    }
    .icon {
        @apply h-full max-h-10 float-left inline p-2;
    }

    /*usefull classes*/
    .mark {
        @apply font-bold text-2xl;
    }
</style>

<dialog open>
    <div class="Info">
        <h2>Info</h2>
        <br>
        <!--Solutions/Lösungen-->
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
        <!--Map Info / Informationen zur Karte-->
        <details>
            <summary>Erklärung der Karte</summary>
            <ul>
                <li class="inline w-full">
                    <div class="color bg-map-red"></div>
                    <span class="mark p-4">Flure/Pausenhalle</span>
                </li>
                <li class="inline w-full">
                    <div class="color bg-map-green"></div>
                    <span class="mark p-4">Räume</span>
                </li>
                <li class="inline w-full">
                    <div class="color bg-map-purple"></div>
                    <span class="mark p-4">Treppen</span>
                </li>
                <li class="inline w-full">
                    <div class="color bg-map-gray"></div>
                    <span class="mark p-4">Ein-/Ausgänge</span>
                </li>
                <li class="inline w-full">
                    <div class="color bg-map-orange"></div>
                    <span class="mark p-4">WCs</span>
                </li>
                <li class="inline w-full">
                    <div class="color bg-map-blue"></div>
                    <span class="mark p-4">Bereiche aus anderen Ebenen</span>
                </li>
                <li class="inline w-full">
                    <img src={LockDefault} alt="Messing Schloss Symbol" class="icon">
                    <span class="mark p-4">zukünftige Station</span>
                </li>
                <li class="inline w-full">
                    <img src={LockGreen} alt="Grünes Schloss Symbol" class="icon">
                    <span class="mark p-4">bereits erfüllte Station</span>
                </li>
                <li class="inline w-full">
                    <img src={LockRed} alt="Rotes Schloss Symbol" class="icon">
                    <span class="mark p-4">aktuelle Station</span>
                </li>
            </ul>
        </details>
        <!--Projekt Info-->
        <details>
            <summary>Projekt Infos</summary>
            <p>
                Diese ganze Website, inklusive der Karte und Symbole, ist erstellt worden, im Rahmen eines Projektes von fünf Schülern. Das Projekt gibt es seit 2021 und wird seit dem auf den iPads der Führer in den Gruppen für die neuen Schüler genutzt. Grundlegend geht es darum, dass jede Gruppe einen eigenen Laufplan hat und dieses auf dem iPad abarbeitet. Die Gruppen erfüllen dann in allen Pflichtstationen ein Rätzel und erhalten ein Lösungswort, welches dann auf dem iPad benötigt wird, um die nächste Station frei zu schalten.
            </p>
        </details>
        <details class="text-center italic">
            <summary>Links</summary>
            <a href="https://github.com/oxydemeton/fsg-tdot-2022/" class="block hover:text-fsg">Source Code 2022</a>
            <a href="https://github.com/oxydemeton/fsg-tdot-2021/" class="block hover:text-fsg">Source Code 2021</a>
            <a href="https://tdot2022.mabla.name/" class="block hover:text-fsg">Archiv live Website 2022</a>
            <a href="https://tdot2021.mabla.name/" class="block hover:text-fsg">Archiv live Website 2021</a>
            <span class="font-thin block">Lesen Sie die Dokumentation beim Sourcecode bevor Sie die 2021er live Website nutzen</span>
        </details>
    </div>
</dialog>