<script lang="ts">
    import {EmptyIcon} from "../script/station_icon";

    export let station_icon = EmptyIcon
</script>

<img src={station_icon.ico}
     width={station_icon.width}
     height={station_icon.height}
     class={ station_icon === EmptyIcon ? "hidden" : ""}
     alt="Station Icon">