<script lang="ts">
    import {group_count} from "../script/Stations_and_gruops";

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
</script>

<style>
    dialog {
        @apply w-screen h-screen fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-neutral-600/50 z-30 backdrop-blur-xs select-none;
    }
</style>

<dialog open>
    <div class="w-full h-full grid grid-cols-2 gap-8">
        <h2 class="col-span-2 text-center text-5xl font-bold">
            <span class="bg-neutral-800/80 text-neutral-100 px-4 pt-1 pb-2 rounded-full shadow-lg">Wähle eine Gruppe</span>
        </h2>
        {#each Array(group_count) as _, i (i)}
            <button class="
                bg-neutral-800/60 hover:bg-neutral-800/80
                hover:text-neutral-300 text-neutral-50
                w-full h-full rounded-2xl backdrop-blur-lg
                text-4xl font-extrabold font-mono
                hover:ring-4 ring-fsg shadow-lg"
                    on:click={()=>dispatch("select", i)}>
                Gruppe {i+1}
            </button>
        {/each}
    </div>
</dialog>