<script lang="ts">

import {all_stations} from "../script/StationsGroupsConfig.js";
import Spoiler from "./Spoiler.svelte";
import LockGreen from "../assets/locks/SchlossGrün.png"
import LockGreenWp from "../assets/locks/SchlossGrün.webp"
import LockRed from "../assets/locks/SchlossRot.png"
import LockRedWp from "../assets/locks/SchlossRot.webp"
import LockDefault from "../assets/locks/SchlossNormal.png"
import LockDefaultWp from "../assets/locks/SchlossNormal.webp"
import ArrowRed from "../assets/arrow_red.svg"
import ArrowGray from "../assets/arrow_gray.svg"
import QR from "../assets/qrcode.png"

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
</script>

<style>
    dialog {
        @apply fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-light/50 z-20 backdrop-blur select-none;
    }
    .Info {
        @apply
            h-1/2 bg-main/70 backdrop-blur-3xl rounded-xl mt-1 p-8
            overflow-y-auto overflow-x-hidden
            text-2xl shadow-xl;
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
    <div class="Info w-2/3 xl:w-1/2">
        <button type="button" on:click={()=>dispatch("close")} class="
            rounded-xl text-2xl text-black bg-main w-12 h-12 font-extrabold font-mono hover:ring-4 ring-fsg text-center shadow-xl">
            X
        </button>
        <h2>Info</h2>
        <br>
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
                    <picture>
                        <source srcset={LockDefaultWp} type="image/webp">
                        <img src={LockDefault} alt="Messing Schloss Symbol" class="icon">
                    </picture>
                    <span class="mark p-4">zukünftige Station</span>
                </li>
                <li class="inline w-full">
                    <img src={QR} alt="Qr Code Symbol" class="icon">
                    <span class="mark p-4">dort befindet sich ein QR-code zum scannen</span>
                </li>
                <li class="inline w-full">
                    <picture>
                        <source srcset={LockGreenWp} type="image/webp">
                        <img src={LockGreen} alt="Grünes Schloss Symbol" class="icon">
                    </picture>
                    <span class="mark p-4">bereits erfüllte Station</span>
                </li>
                <li class="inline w-full">
                    <picture>
                        <source srcset={LockRedWp} type="image/webp">
                        <img src={LockRed} alt="Rotes Schloss Symbol" class="icon">    
                    </picture>
                    <span class="mark p-4">aktuelle Station</span>
                </li>
                <li class="inline w-full">
                    <img src={ArrowRed} alt="Roter Pfeil nach oben" class="icon">
                    <span class="mark p-4">Aktuelle Station befindet sich ein oder mehrere Ebenen weiter oben</span>
                </li>
                <li class="inline w-full">
                    <img src={ArrowRed} alt="roter Pfeil nach unten" class="icon rotate-180">
                    <span class="mark p-4">Aktuelle Station befindet sich ein oder mehrere Ebenen weiter unten</span>
                </li>
                <li class="inline w-full">
                    <img src={ArrowGray} alt="Grauer Pfeil nach oben" class="icon">
                    <span class="mark p-4">Station befindet sich ein oder mehrere Ebenen weiter oben</span>
                </li>
                <li class="inline w-full">
                    <img src={ArrowGray} alt="Grauer Pfeil nach unten" class="icon rotate-180">
                    <span class="mark p-4">Station befindet sich ein oder mehrere Ebenen weiter unten</span>
                </li>
            </ul>
        </details>
        <!--Solutions/Lösungen-->
        <details>
            <summary>Lösungen</summary>
            <table>
                {#each all_stations as station}
                    <tr class="" >
                        <th class="">{station.name}:</th>
                        <td class="italic">
                            <Spoiler>
                                {#if (station.hintSolution)}
                                    "{@html station.hintSolution}"
                                {:else}
                                    Es wird keine Lösung benötigt.
                                {/if}
                            </Spoiler>
                        </td>
                    <tr/>
                {/each}
            </table>
        </details>
        <details class="text-center italic">
            <summary>Links</summary>
            <a href="https://www.fsggeldern.de" class="block hover:text-fsg">Fsg Geldern</a>
            <a href="https://github.com/oxydemeton/fsg-tdot-2022/" class="block hover:text-fsg">Source Code 2022</a>
            <a href="https://github.com/oxydemeton/fsg-tdot-2021/" class="block hover:text-fsg">Source Code 2021</a>
            <a href="https://tdot2022.mabla.name/" class="block hover:text-fsg">Archiv live Website 2022</a>
            <a href="https://tdot2021.mabla.name/" class="block hover:text-fsg">Archiv live Website 2021</a>
            <span class="font-thin block">Lesen Sie die Dokumentation beim Sourcecode bevor Sie die 2021er live Website nutzen</span>
        </details>
    </div>
</dialog>
