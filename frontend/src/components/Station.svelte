<script lang="ts">
    import LockClosed from "../assets/schloss_closed.jpg"
    import LockOpen from "../assets/schloss_closed.jpg"
    import LockSelected from "../assets/schloss_closed.jpg"
    import StationPopup from "./StationPopup.svelte";
    import type {Station} from "../script/Station"
    export let station: Station
    export let status = 0
    export let pos = {
        x: 0,
        y: 0
    }
    $: current_lock = () => {
        if (status === 0) {
            return LockSelected
        }else if (status < 0){
            return LockClosed
        }else {
            return LockOpen
        }
    }
    let show_popup = false
    function toggle_popup() {
        if (status === 0) {
            show_popup = !show_popup
        }
    }

    $: popup = () => {
        return status === 0 && show_popup
    }

    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>
<style>
    img {
        @apply w-full;
    }
</style>
<div class="absolute w-1/6" style="left: {pos.x}%; top: {pos.y}%;">
    <img src={current_lock()} alt={"Station: " + station.name} on:click={toggle_popup}>
    {#if (popup())}
        <StationPopup solution={station.solution} on:done={()=>dispatch("done")}></StationPopup>
    {/if}
</div>
