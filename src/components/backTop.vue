<template>
    <div class="back-top" @click="handleBackTop">
        <div>↑</div>
        <span>top</span>
    </div>    
</template>
<script>
export default {
    methods:{
        handleBackTop(){
            document.documentElement.scrollTop = 0;
        } 
    },
}
</script>
<style lang="scss" scoped>
    .back-top{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(000, 000, 000, .5);
        position: fixed;
        z-index: 10;
        right: .1rem;
        bottom: .8rem;
        border-radius: 50%;
        width: .4rem;
        height: .4rem;
        color: #ffffff;
        div{

        }
        span{

        }
    }
</style>
