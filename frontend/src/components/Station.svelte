<script lang="ts">
    import LockClosed from "../assets/SchlossNormal.png"
    import LockOpen from "../assets/SchlossGrün.png"
    import LockSelected from "../assets/SchlossRot.png"
    import Arrow from "../assets/arrow.svg"
    import StationPopup from "./StationPopup.svelte";
    import type {Station as StationApp} from "../script/Station"
    export let station: StationApp
    export let floor: number
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
        @apply absolute;
    }
</style>
<div class="absolute w-32 h-32" style="left: {station.pos.x}%; top: {station.pos.y}%;">
    <button on:click={toggle_popup} class="static w-20 h-20">
        <img src={current_lock()} alt={"Station: " + station.name} class="w-20">
        {#if (station.floor < floor)}
            <img src={Arrow} alt="Tieferes Geschoss" class="rotate-180 w-6 h-8 -bottom-6 -left-6"/>
        {:else if (station.floor > floor)}
            <img src={Arrow} alt="Tieferes Geschoss" class="w-6 h-8 -bottom-6 -left-6"/>
        {/if}
    </button>
    {#if (popup())}
        <StationPopup station={station} on:done={()=>dispatch("done")} on:close={toggle_popup}></StationPopup>
    {/if}
</div>
