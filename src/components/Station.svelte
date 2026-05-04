<script lang="ts">
    import LockClosed from "../assets/locks/SchlossNormal.png"
    import LockClosedWp from "../assets/locks/SchlossNormal.webp"
    import LockClosedSm from "../assets/locks/SchlossNormal.avif"
    import LockOpen from "../assets/locks/SchlossGrün.png"
    import LockOpenWp from "../assets/locks/SchlossGrün.webp"
    import LockOpenSm from "../assets/locks/SchlossRot.avif"
    import LockSelected from "../assets/locks/SchlossRot.png"
    import LockSelectedWp from "../assets/locks/SchlossRot.webp"
    import LockSelectedSM from "../assets/locks/SchlossRot.avif"
    import ArrowRed from "../assets/arrow_red.svg"
    import ArrowGray from "../assets/arrow_gray.svg"
    import StationPopup from "./StationPopup.svelte";
    import type {Station as StationApp} from "../script/Station"

    let show_popup = $state(false)
    //Function on click of the Lock
    function toggle_popup() {
        if (station.status === "Current") {
            show_popup = !show_popup
        }
    }

    interface Props {
        station: StationApp;
        floor: number;
        group: number;
        last?: boolean;
        ondone: ()=>void;
    }

    let {
        station = $bindable(),
        floor = $bindable(),
        group = $bindable(),
        last = $bindable(false),
        ondone
    }: Props = $props();

    //Selecting correct Image to be shown
    const current_lock = $derived(() => {
        if (station.status === "Current") {
            return LockSelected
        }else if (station.status === "Locked"){
            return LockClosed
        }else {
            return LockOpen
        }
    })
    const current_lock_wp = $derived(() => {
        if (station.status === "Current") {
            return LockSelectedWp
        }else if (station.status === "Locked"){
            return LockClosedWp
        }else {
            return LockOpenWp
        }
    })
    const current_lock_sm = $derived(() => {
        if (station.status === "Current") {
            return LockSelectedSM
        }else if (station.status === "Locked"){
            return LockClosedSm
        }else {
            return LockOpenSm
        }
    })
    const current_arrow = $derived(() => {
        return station.status === "Current"? ArrowRed: ArrowGray
    })
    //Calculated Opacity of the arrow indicating the level whether the station is the current one or not
    const arrow_opacity = $derived(() => {
        if (station.status === "Current") {
            return "1"
        }else {
            return "0.6"
        }
    })
    //Whether the station popup should be shown
    const popup = $derived(() => {
        return station.status === "Current" && show_popup
    })
</script>

<style>
    .arrow {
        @apply absolute w-4 h-6 top-1/3 -left-6;
    }
</style>

<div class="absolute w-28 h-28" style="left: {station.pos.x}%; top: {station.pos.y}%;">
    <button onclick={toggle_popup} class="static w-[3rem] xl:w-16 h-fit">
        <!--Lock-->
        <picture>
            <source srcset={current_lock_sm()} type="image/avif" width="320" height="519">
            <source srcset={current_lock_wp()} type="image/webp" width="960" height="1556">
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
        <StationPopup station={station} {ondone} bind:group={group} onclose={toggle_popup} bind:last={last}></StationPopup>
    {/if}
</div>
