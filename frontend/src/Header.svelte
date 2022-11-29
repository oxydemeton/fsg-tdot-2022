<script lang="ts">
    export let station: string
    import Eg               from "./assets/map/eg.png"
    import Ug               from "./assets/map/ug.png"
    import Og               from "./assets/map/og.png"
    import LockClosed       from "./assets/SchlossNormal.png"
    import LockOpen         from "./assets/SchlossGrün.png"
    import LockSelected     from "./assets/SchlossRot.png"
    import Reset            from "./assets/reset.png"
    const images = [
        Eg,
        Og,
        Ug,
        LockClosed,
        LockOpen,
        LockSelected,
        Reset
    ]
</script>

<svelte:head>
    <title>Station: {station}</title>

    {#each images as pre_img}
        <link rel="prefetch" href={pre_img} as="image">
    {/each}

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="icon" href="favicon.png" type="image/png"/>
    <link rel="shortcut icon" href="favicon.png" type="image/png">
    <link rel="apple-touch-icon" href="favicon.png" type="image/png">

    <meta name="keywords"           content="FSG, Geldern, Tdot, Tag der offenen Tür, Friedrich, Spee, Gymnasium, 2022">
    <meta name="description"        content="Schülerführung für neue Schüler am FSG für den 03.12.2022 am Tag der offenen Tür.">
    <meta name="application-name"   content="Fsg Tdot guide 2022">
    <meta name="author"             content="github.com/oxydemeton">
    <meta name="theme-color"        content="#2E2E2E">
    <meta name="generator"          content="svelte">


</svelte:head>