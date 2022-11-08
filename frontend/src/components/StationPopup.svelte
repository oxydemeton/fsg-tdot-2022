<script lang="ts">
    export let solution
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
    let txt = ""

    function submit(){
        if (txt === solution) {
            dispatch("done")
        }
    }
</script>
<style>
    button {
        @apply rounded bg-neutral-300 w-full m-0.5 p-0.5 border-2 border-neutral-800;
    }
    input {
        @apply w-full rounded bg-neutral-300;
    }
    div {
        @apply w-full h-auto bg-neutral-400 rounded mt-1 p-1;
    }
</style>
<div>
    {#if (solution.length > 0)}
    <label for="stationsolution">Lösung:</label> <br>
    <input type="text" name="solution" id="stationsolution" maxlength={solution.length} spellcheck="false" bind:value={txt}>
    <button type="button" on:click={submit} class="hover:bg-neutral-500">
        Check
    </button>
    {:else}
    <button type="button" on:click={submit} class="hover:bg-neutral-500">
        Weiter
    </button>
    {/if}
</div>