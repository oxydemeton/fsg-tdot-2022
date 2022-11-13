<script lang="ts">
    import LockClosed from "../assets/schloss_closed.jpg"
    import LockOpen from "../assets/schloss_closed.jpg"
    import LockSelected from "../assets/schloss_closed.jpg"
    import StationPopup from "./StationPopup.svelte";
    import type {Station} from "../script/Station"
    export let station: Station
    $: current_lock = () => {
        if (station.status === 0) {
            return LockSelected
        }else if (station.status < 0){
            return LockClosed
        }else {
            return LockOpen
        }
    }
    let show_popup = false
    function toggle_popup() {
        if (station.status === 0) {
            show_popup = !show_popup
        }
    }

    $: popup = () => {
        return station.status === 0 && show_popup
    }

    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>
<style>
    img {
        @apply w-full;
    }
</style>
<div class="absolute w-1/6" style="left: {station.pos.x}%; top: {station.pos.y}%;">
    <img src={current_lock()} alt={"Station: " + station.name} on:click={toggle_popup}>
    {#if (popup())}
        <StationPopup station={station} on:done={()=>dispatch("done")} on:close={toggle_popup}></StationPopup>
    {/if}
</div>
