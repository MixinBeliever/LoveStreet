<template>
    <div class="mail_nav" :class="headFixed? 'headFixed': ''">
        <ul>
            <li v-for="(item,index) in navlist" :key="index"><a :class=" active=='list'+index?'active':''" @click="handleClick(item.mainTitle,index)">{{item.mainTitle}}</a></li>
        </ul>
        <div class=""></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            active: '',
            obj: {
            }
        }
    },
    props:["navlist","headFixed"],
    methods:{
        handleClick(data,index){
            console.log(index)
            this.active = 'list'+index;
            this.$emit("whocomponent",data);

        }
    }
}
</script>

<style lang="scss" scoped>
    .headFixed.mail_nav{
        position: fixed;
        width: 100%;
        top: 0;
    }
    .mail_nav{
        height: .4rem;
        ul{
            height: 100%;
            display: flex;
            overflow-y: hidden;
            flex-wrap: nowrap;
            background: #fff;
            li{
                height: 100%;
                white-space: nowrap;
                padding: 0 .15rem;
                display: flex;
                a{
                    height: 100%;
                    display: flex;
                    align-items: center;
                }
                a.active{
                    color: #af8abd;
                    position: relative;
                }
                a.active::after{
                    content: '';
                    position: absolute;
                    bottom: 0;
                    height: 1px;
                    width: 100%;
                    background: #af8abd;
                }
            }
            
            li:nth-last-of-type(1){
                margin-right: .5rem;
            }
        }
    }
</style>
