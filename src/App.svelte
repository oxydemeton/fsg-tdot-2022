<script lang="ts">
    import Header from "./Header.svelte";
    import {all_stations, default_status, group_count, id_by_group_and_num} from "./script/StationsGroupsConfig"
    import MapComp from "./components/Map.svelte";
    import Station from "./components/Station.svelte";
    import GroupSelector from "./components/GroupSelector.svelte";
    import ResetIcon from "./assets/reset.png"
    import InfoIcon from "./assets/info.svg"
    import InfoScreen from "./components/InfoScreen.svelte";
    //Loop to log the station order of each group
    /*for (let gr = 0; gr < group_count; gr++) {
        const stations_in_order: string[] = []
        for (let st = 0; st < all_stations.length; st++) {
            stations_in_order.push(all_stations[id_by_group_and_num(gr, st)].name)
        }
        let stations_str = ""
        stations_in_order.forEach((e)=>{
            stations_str += `${e};`
        })
        console.log(`Group ${gr}`, stations_str);
        
    }*/
    let floor = 0
    let group: number = -1
    let station_num = 0
    let show_info = false
    //Function called on the reset button and when the tour is finished
    function reset() {
        group = -1
        station_num = 0
        all_stations.forEach((it, i, arr)=>{
            arr[i].status = default_status
            if (i === 0) arr[i].status = "Current"
        })
        console.log("RESET")
    }
    //Function to be called if the a station is done
    function station_done(station_id: number) {
        station_num++
        //Reset after last station
        if(station_num >= all_stations.length){
            reset()
        }else {
            all_stations[station_id].status = "Done"
            all_stations[id_by_group_and_num(group, station_num)].status = "Current"
        }
    }

    //Code to execute on page Load
    const hash_params: Map<string, string> = new Map()
    window.location.hash.replace("#", "").split("&").forEach((t)=>{
        const name = t.split("=")[0]
        if (t.split("=").length > 0) hash_params.set(name, t.split("=")[1]) 
        else hash_params.set(name, "")
    })
    //If the group is given as a parameter use it, otherwise show selector
    if (!isNaN(Number(hash_params.get("group")))) {
        group = Number(hash_params.get("group")) % group_count
    }
    console.log(Number(hash_params.get("station")));
    
    if (!isNaN(Number(hash_params.get("station")))) {
        station_num = Number(hash_params.get("station")) % all_stations.length
        for (let i = 0; i < station_num; i++) {
            all_stations[id_by_group_and_num(group, i)].status = "Done"
        } 
        all_stations[id_by_group_and_num(group, station_num)].status = "Current"
    }

</script>

<Header station={all_stations[id_by_group_and_num(group, station_num)].name}></Header>
<div id="bg">
    <main>
        <MapComp bind:floor_lvl={floor}> </MapComp>
        <div id="Info">
            {#if (show_info)}
                <InfoScreen onclose={()=>show_info=false}></InfoScreen>
            {:else}
                <button on:click={()=>show_info = !show_info} class="absolute top-2 right-16 w-12 h-12" type="button">
                    <img src={InfoIcon} alt="Show Info">
                </button>
            {/if}
        </div>
        {#if group >= 0}
            <button on:click={reset} class="absolute top-2 right-2 w-12 h-12" type="button">
                <img src={ResetIcon} alt="Reset" class="w-full h-full"/>
            </button>
            <div id="Stations">
            {#each all_stations as sta, i (i)}
                <Station bind:station={sta} ondone={()=>station_done(i)} bind:floor={floor} bind:group={group} last={i === (all_stations.length -1)}></Station>
            {/each}
            </div>
        {:else}
            <GroupSelector onselect={(g)=>group = g}></GroupSelector>
        {/if}
    </main>
</div>

<style>
    #bg {
        background-color: #313131;
        display: flex;
        justify-content: center;
    }
    main {
        @apply overflow-hidden h-[100vh] w-[133vh] relative select-none;
    }
</style>