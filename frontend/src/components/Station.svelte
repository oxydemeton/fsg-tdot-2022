<script lang="ts">
    import LockClosed from "../assets/SchlossNormal.png"
    import LockOpen from "../assets/SchlossGrün.png"
    import LockSelected from "../assets/SchlossRot.png"
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
<div class="absolute w-32 h-32" style="left: {station.pos.x}%; top: {station.pos.y}%;">
    <button on:click={toggle_popup}>
        <img src={current_lock()} alt={"Station: " + station.name}>
    </button>
    {#if (popup())}
        <StationPopup station={station} on:done={()=>dispatch("done")} on:close={toggle_popup}></StationPopup>
    {/if}
</div>
