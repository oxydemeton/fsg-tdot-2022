<script lang="ts">
    export let station: string
    import Eg               from "./assets/map/eg.png"
    import Ug               from "./assets/map/ug.png"
    import Og               from "./assets/map/og.png"
    import LockClosed       from "./assets/SchlossNormal.png"
    import LockOpen         from "./assets/SchlossGrün.png"
    import LockSelected     from "./assets/SchlossRot.png"
    const images = [
        Eg,
        Og,
        Ug,
        LockClosed,
        LockOpen,
        LockSelected
    ]
</script>

<svelte:head>
    <title>Station: {station}</title>

    {#each images as pre_img}
        <link rel="prefetch" href={pre_img} as="image">
    {/each}

</svelte:head>