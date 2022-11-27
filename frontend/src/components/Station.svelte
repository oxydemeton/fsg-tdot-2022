<script lang="ts">
    import LockClosed from "../assets/SchlossNormal.png"
    import LockOpen from "../assets/SchlossGrün.png"
    import LockSelected from "../assets/SchlossRot.png"
    import Arrow from "../assets/arrow.svg"
    import StationPopup from "./StationPopup.svelte";
    import type {Station as StationApp} from "../script/Station"
    export let station: StationApp
    export let floor: number
    export let group: string
    $: current_lock = () => {
        if (station.status === 0) {
            return LockSelected
        }else if (station.status < 0){
            return LockClosed
        }else {
            return LockOpen
        }
    }
    $: arrow_opacity = () => {
        if (station.status === 0) {
            return "1"
        }else {
            return ".7"
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
    .arrow {
        @apply absolute w-6 h-8 top-2/3 -left-6;
    }
</style>

<div class="absolute w-32 h-32" style="left: {station.pos.x}%; top: {station.pos.y}%;">
    <button on:click={toggle_popup} class="static w-[4.5rem] h-fit">
        <!--Lock-->
        <img src={current_lock()} alt={"Station: " + station.name} class="w-full">
        <!--Arrow-->
        {#if (station.floor < floor)}
            <img src={Arrow} alt="Tieferes Geschoss" style="opacity: {arrow_opacity()};" class="arrow rotate-180"/>
        {:else if (station.floor > floor)}
            <img src={Arrow} alt="Tieferes Geschoss" style="opacity: {arrow_opacity()};" class="arrow"/>
        {/if}
    </button>
    {#if (popup())}
        <StationPopup station={station} on:done={()=>dispatch("done")} bind:group={group} on:close={toggle_popup}></StationPopup>
    {/if}
</div>
