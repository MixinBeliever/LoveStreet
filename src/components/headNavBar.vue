<template>
    <section ref="defaultHeight" :class="headNavBarIsFixed?'fixed':''" :id="superHeadNavBarIsFixed?'superFixed':''">
        <headerBar></headerBar>
        <navBar></navBar>
    </section>
</template>

<script>
import headerBar from './headerBar'
import navBar from './navBar'
export default {
    props:["headNavBarIsFixed","superHeadNavBarIsFixed"],
    components:{
        headerBar,
        navBar
    }
}
</script>

<style lang="scss" scoped>
    section{
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
    }
    section.fixed{
        position: fixed;
        top: -45px;
        width: 100%;
        z-index: 100;
    }
    section#superFixed{
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
    }
</style>
