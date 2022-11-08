<script lang="ts">
    export let floor_lvl = 0
    import Floor0 from "../assets/example_map.svg"
    $: compute_current_img = () => {
        if (floor_lvl === 0) {
            return Floor0
        } else {
            return ""
        }
    }
</script>
<style>
#Map, #button-box {
    @apply absolute h-[100vh] w-[133vh] overflow-hidden;
}
#button-box {
    @apply mt-1;
}
button {
    @apply p-1 mx-1 my-0.5 rounded bg-neutral-700 ;
}

</style>
<img id="Map" src={compute_current_img()} alt="Map">
<div id="button-box">
    <button type="button" on:click={()=>floor_lvl++} disabled={floor_lvl>0} class="disabled:bg-neutral-600"> /\</button> <br>
    <button type="button" on:click={()=>floor_lvl--} disabled={floor_lvl<0} class="disabled:bg-neutral-600 disabled:text-neutral-700"> \/</button>
</div>
