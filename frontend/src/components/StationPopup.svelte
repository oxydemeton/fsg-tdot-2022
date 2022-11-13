<script lang="ts">
    import type {Station} from "../script/Station";

    export let station: Station
    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
    let txt = ""

    function submit(e){
        e.preventDefault()
        if (txt === station.solution) {
            dispatch("done")
        }else {
            mistake = "Das Lösungswort ist falsch."
            txt = ""
        }
    }
    let mistake = ""
</script>
<style>
    * {
        @apply outline-0;
    }
    .submit-btn {
        @apply rounded-lg bg-neutral-400/80 w-full p-0.5 my-1 border-2 border-neutral-800 font-semibold text-xl;
    }
    form {
        @apply h-auto bg-neutral-500/70 rounded-xl mt-1 p-4;
    }
    dialog {
        @apply fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-neutral-600/50 z-20 backdrop-blur-sm select-none;
    }
    h2 {
        @apply text-3xl font-bold font-mono w-full text-center;
    }
</style>
<dialog open>
    <form on:submit={submit} class="w-fit min-w-1/3 max-w-2/3">
        <button type="button" on:click={()=>dispatch("close")} class="
            rounded-xl text-xl bg-black/50 w-7 h-7 font-extrabold font-mono hover:ring-4 ring-fsg text-center">
            X
        </button>
        <div class="text-center items-center p-4">
            <h2>{station.name}</h2>
            {#if (station.solution.length > 0)}
                <input required type="text" name="solution" id="stationsolution" maxlength={station.solution.length} spellcheck="false" bind:value={txt} placeholder="Lösung"
                    autocapitalize="none" autocomplete="off"
                    class="w-full my-1 rounded-lg block px-1 py-0.5
                        text-white
                        bg-neutral-600/75 focus:bg-neutral-800/90
                        font-light focus:font-medium
                        placeholder-gray-300 placeholder:italic placeholder:font-light
                        focus:ring-4 ring-fsg
                    ">
                <button type="submit" class="submit-btn">
                    Check
                </button>
            {:else}
                <button type="submit" class="submit-btn"> Weiter </button>
            {/if}
            <br>
            <span class="italic font-light text-black bg-red-600/20 rounded-xl m-1 select-all">{mistake}</span>
        </div>
    </form>
</dialog>