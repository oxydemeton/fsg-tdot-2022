<script lang="ts">
    import LockClosed from "../assets/locks/SchlossNormal.png"
    import LockClosedWp from "../assets/locks/SchlossNormal.webp"
    import LockOpen from "../assets/locks/SchlossGrün.png"
    import LockOpenWp from "../assets/locks/SchlossGrün.webp"
    import LockSelected from "../assets/locks/SchlossRot.png"
    import LockSelectedWp from "../assets/locks/SchlossRot.webp"
    import ArrowRed from "../assets/arrow_red.svg"
    import ArrowGray from "../assets/arrow_gray.svg"
    import StationPopup from "./StationPopup.svelte";
    import type {Station as StationApp} from "../script/Station"
    export let station: StationApp
    export let floor: number
    export let group: number
    export let last: boolean = false
    //Selecting correct Image to be shown
    $: current_lock = () => {
        if (station.status === 0) {
            return LockSelected
        }else if (station.status < 0){
            return LockClosed
        }else {
            return LockOpen
        }
    }
    $:current_lock_wp = () => {
        if (station.status === 0) {
            return LockSelectedWp
        }else if (station.status < 0){
            return LockClosedWp
        }else {
            return LockOpenWp
        }
    }
    $: current_arrow = () => {
        return station.status === 0 ? ArrowRed: ArrowGray
    }
    //Calculated Opacity of the arrow indicating the level whether the station is the current one or not
    $: arrow_opacity = () => {
        if (station.status === 0) {
            return "1"
        }else {
            return "0.6"
        }
    }
    let show_popup = false
    //Function on click of the Lock
    function toggle_popup() {
        if (station.status === 0) {
            show_popup = !show_popup
        }
    }
    //Whether the station popup should be shown
    $: popup = () => {
        return station.status === 0 && show_popup
    }

    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<style>
    .arrow {
        @apply absolute w-4 h-6 top-1/3 -left-6;
    }
</style>

<div class="absolute w-28 h-28" style="left: {station.pos.x}%; top: {station.pos.y}%;">
    <button on:click={toggle_popup} class="static w-[3rem] xl:w-16 h-fit">
        <!--Lock-->
        <picture>
            <source srcset={current_lock_wp()} type="image/webp">
            <img src={current_lock()} alt={"Station: " + station.name} class="w-full" style={station.floor === floor ? "": "opacity: .5;"}>
        </picture>
        
        <!--Arrow-->
        {#if (station.floor < floor)}
            <img src={current_arrow()} alt="Tieferes Geschoss" style="opacity: {arrow_opacity()};" class="arrow rotate-180"/>
        {:else if (station.floor > floor)}
            <img src={current_arrow()} alt="Tieferes Geschoss" style="opacity: {arrow_opacity()};" class="arrow"/>
        {/if}
    </button>
    {#if (popup())}
        <StationPopup station={station} on:done={()=>dispatch("done")} bind:group={group} on:close={toggle_popup} bind:last={last}></StationPopup>
    {/if}
</div>
