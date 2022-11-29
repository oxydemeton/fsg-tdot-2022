<script lang="ts">
    export let floor_lvl = 0
    import Eg from "../assets/map/eg.png"
    import Ug from "../assets/map/ug.png"
    import Og from "../assets/map/og.png"
    $: compute_current_img = () => {
        if (floor_lvl === 0) {
            return Eg
        } else if (floor_lvl < 0) {
            return Ug
        } else {
            return Og
        }
    }
</script>
<style>
#Map, #button-box {
    @apply absolute h-[100vh] w-[133vh] overflow-hidden object-fill;
}
#button-box {
    @apply mt-1;
}
button {
    @apply p-2 mx-2 my-1 rounded-full bg-neutral-600 text-lg font-bold tracking-tighter;
    touch-action: manipulation;
}

</style>
<img id="Map" src={compute_current_img()} alt="Map">
<div id="button-box">
    <button type="button" on:click={()=>floor_lvl++} disabled={floor_lvl>0} class="disabled:bg-neutral-500 disabled:text-neutral-700 enabled:hover:ring-4 ring-fsg"> /\</button> <br>
    <button type="button" on:click={()=>floor_lvl--} disabled={floor_lvl<0} class="disabled:bg-neutral-500 disabled:text-neutral-700 enabled:hover:ring-4 ring-fsg"> \/</button>
</div>
