<template>
    <div class="springstreet">
        <commonMail :itemlist="itemlist" 
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        infinite-scroll-immediate-check="false"></commonMail>
    </div>
</template>

<script>
import { Indicator } from 'mint-ui';



import commonMail from './commonMail'
import axios from 'axios';
export default {
    data(){
        return {
            itemlist: [],
            curpage: 1,
            loading: false,
        }
    },
    mounted(){
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        });
        axios.get("/classify/recommendList?pageIndex=1&pageId=moses%3Apid_1&pvid=53440b1c-1556017455908-9452737eb3&platform=mweb&ctp=%257B%2522pf%2522%253A%2522mweb%2522%252C%2522u%2522%253A%2522%2522%252C%2522av%2522%253A%2522%2522%252C%2522avn%2522%253A%2522%2522%252C%2522d%2522%253A%2522%2522%252C%2522os%2522%253A%2522%2522%252C%2522dw%2522%253A375%252C%2522dh%2522%253A667%252C%2522b%2522%253A%2522safari%2522%252C%2522stid%2522%253A%25221%2522%252C%2522utm%2522%253A%2522%2522%252C%2522did%2522%253A%2522aa82591038db43e2%2522%252C%2522uu%2522%253A%2522963fead1-e3c3-4c03-9d37-6db61a805cd0%2522%252C%2522ssid%2522%253A%252253440b1c0284aceb-1556015927526%2522%252C%2522p%2522%253A%25221-100000-500501%2522%252C%2522pvid%2522%253A%252253440b1c-1556017455908-9452737eb3%2522%257D&stp%5B%5D=http%3A%2F%2Fm.biyao.com%2Fclassify%2FpagesMiddle%3Fisrecommend%3D1&stp%5B%5D=pageId%3Dmoses%3Apid_13&stp%5B%5D=topicId%3D10300085&uuid=963fead1-e3c3-4c03-9d37-6db61a805cd0&topicId=2047&isTab=1").then(res=>{
            this.itemlist = res.data.data.blockList[0].block;
            Indicator.close();
        })
    },
    methods: {
        loadMore() {
            console.log('到底了')
            this.loading = true;
            this.curpage++;
            axios.get(`/classify/recommendList?pageIndex=${this.curpage}&pageId=moses%3Apid_1&pvid=53440b1c-1556017455908-9452737eb3&platform=mweb&ctp=%257B%2522pf%2522%253A%2522mweb%2522%252C%2522u%2522%253A%2522%2522%252C%2522av%2522%253A%2522%2522%252C%2522avn%2522%253A%2522%2522%252C%2522d%2522%253A%2522%2522%252C%2522os%2522%253A%2522%2522%252C%2522dw%2522%253A375%252C%2522dh%2522%253A667%252C%2522b%2522%253A%2522safari%2522%252C%2522stid%2522%253A%25221%2522%252C%2522utm%2522%253A%2522%2522%252C%2522did%2522%253A%2522aa82591038db43e2%2522%252C%2522uu%2522%253A%2522963fead1-e3c3-4c03-9d37-6db61a805cd0%2522%252C%2522ssid%2522%253A%252253440b1c0284aceb-1556015927526%2522%252C%2522p%2522%253A%25221-100000-500501%2522%252C%2522pvid%2522%253A%252253440b1c-1556017455908-9452737eb3%2522%257D&stp%5B%5D=http%3A%2F%2Fm.biyao.com%2Fclassify%2FpagesMiddle%3Fisrecommend%3D1&stp%5B%5D=pageId%3Dmoses%3Apid_13&stp%5B%5D=topicId%3D10300085&uuid=963fead1-e3c3-4c03-9d37-6db61a805cd0&topicId=2047&isTab=1`).then(res=>{
                this.itemlist = [...this.itemlist,...res.data.data.blockList[0].block];
                this.loading = false; //数据加载完再放出来 必须要写在then里面
            })
        }
    },
    components: {
        commonMail,
    },
}
</script>

<style lang="scss" scoped>
    
</style>
