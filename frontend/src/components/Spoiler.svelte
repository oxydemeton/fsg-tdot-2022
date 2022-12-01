<script>
    export let label = "Anzeigen"
    export let disabled = false
    let show = false
</script>

<style>

</style>

<div class="spoiler">
    {#if (show)}
        <button on:click={()=>show=true} type="button" disabled={disabled}>{label}</button>
    {:else}
        <slot></slot>
    {/if}
</div>
