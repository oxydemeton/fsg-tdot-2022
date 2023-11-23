<script lang="ts">
    import type {Station} from "../script/Station";
    export let station: Station
    export let group: number
    export let last: boolean = false
    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
    //User input
    let txt = ""
    //Text shown as error message
    let mistake = ""

    //Check solution if needed and if correct trigger event
    function submit(e){
        e.preventDefault()
        console.log(txt);
        
        if (station.solution === undefined) {
            dispatch("done")
        } else if (station.solution(txt)) {
            dispatch("done")
        } else {
            mistake = "Das Lösungswort ist falsch."
            txt = ""
        }
    }
    //Text shown on submit button based on different conditions
    $: btn_txt = () => {
        if (last) return "Neustarten"
        else if (station.solution) return "Lösung Prüfen"
        else return "Weiter"
    }
</script>
<style>
    * {
        @apply outline-0;
    }
    .submit-btn {
        @apply rounded-lg bg-light/90 w-full p-0.5 my-1 border-2 border-dark font-semibold text-xl;
    }
    form {
        @apply h-auto bg-main/70 backdrop-blur-3xl rounded-xl mt-1 p-4;
    }
    dialog {
        @apply fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-light/50 z-20 backdrop-blur select-none shadow-xl;
    }
    h2 {
        @apply text-5xl font-bold font-mono w-full text-center;
    }
    h3 {
        @apply italic font-serif text-2xl;
    }
</style>
<dialog open>
    <form on:submit={submit} class="w-fit min-w-1/3 max-w-2/3">
        <button type="button" on:click={()=>dispatch("close")} class="
            rounded-xl text-2xl text-black bg-main w-12 h-12 font-extrabold font-mono hover:ring-4 ring-fsg text-center shadow-md">
            X
        </button>
        <div class="text-center items-center p-4">
            <h2>{station.name}</h2>
            {#if (station.desc)}
                <h3>{station.desc(group)}</h3>
            {/if}
            {#if (station.solution)}
                <input required type="text" name="solution" id="stationsolution" spellcheck="false" bind:value={txt} placeholder="Lösung"
                    autocapitalize="none" autocomplete="off" autofocus
                    class="w-full my-1 rounded-lg block px-1 py-0.5
                        text-dark focus:text-white
                        bg-light focus:bg-main
                        font-light focus:font-medium
                        placeholder-dark placeholder:italic placeholder:font-medium
                        focus:ring-4 ring-fsg
                    ">
            {/if}
            <button type="submit" class="submit-btn"> {btn_txt()} </button>
            <br>
            <span class="italic font-light text-black bg-red-600/20 rounded-xl m-1 select-all">{mistake}</span>
        </div>
    </form>
</dialog>