<template>
    <div class="mystreet">
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <commonMail :itemlist="itemlist"></commonMail>
        </mt-loadmore>
    </div>
</template>

<script>
import { Indicator } from 'mint-ui';

import { Loadmore } from 'mint-ui';
import Vue from 'vue';
Vue.component(Loadmore.name, Loadmore);

import commonMail from './commonMail'
import axios from 'axios';
export default {
    data(){
        return {
            itemlist: [],
            curpage: 1,
            loading: false,
            allLoaded: false,
        }
    },
    mounted(){
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        });
        axios.get("/classify/recommendList?pageId=moses%3Apid_1&pageIndex=1&pvid=53440b1c-1556075553346-93ad602ac6&platform=mweb&uuid=963fead1-e3c3-4c03-9d37-6db61a805cd0&ctp=%257B%2522pf%2522%253A%2522mweb%2522%252C%2522u%2522%253A%2522%2522%252C%2522av%2522%253A%2522%2522%252C%2522avn%2522%253A%2522%2522%252C%2522d%2522%253A%2522%2522%252C%2522os%2522%253A%2522%2522%252C%2522dw%2522%253A375%252C%2522dh%2522%253A667%252C%2522b%2522%253A%2522safari%2522%252C%2522stid%2522%253A%25221%2522%252C%2522utm%2522%253A%2522%2522%252C%2522did%2522%253A%2522aa82591038db43e2%2522%252C%2522uu%2522%253A%2522963fead1-e3c3-4c03-9d37-6db61a805cd0%2522%252C%2522ssid%2522%253A%252253440b1c0284aceb-1556075017673%2522%252C%2522p%2522%253A%25221-100000-500501%2522%252C%2522pvid%2522%253A%252253440b1c-1556075553346-93ad602ac6%2522%257D&stp%5B%5D=http%3A%2F%2Fm.biyao.com%2Fclassify%2FpagesMiddle%3Fisrecommend%3D1&stp%5B%5D=pageId%3Dmoses%3Apid_13&stp%5B%5D=topicId%3D10300085&topicId=10000201&isTab=1").then(res=>{
            this.itemlist = res.data.data.blockList[0].block;
            Indicator.close();
        })
    },
    methods: {
        loadBottom() {
            // 加载更多数据
            console.log('拉动了吗');
            this.curpage++;
            axios.get(`/classify/recommendList?pageId=moses%3Apid_1&pageIndex=${this.curpage}&pvid=53440b1c-1556075553346-93ad602ac6&platform=mweb&uuid=963fead1-e3c3-4c03-9d37-6db61a805cd0&ctp=%257B%2522pf%2522%253A%2522mweb%2522%252C%2522u%2522%253A%2522%2522%252C%2522av%2522%253A%2522%2522%252C%2522avn%2522%253A%2522%2522%252C%2522d%2522%253A%2522%2522%252C%2522os%2522%253A%2522%2522%252C%2522dw%2522%253A375%252C%2522dh%2522%253A667%252C%2522b%2522%253A%2522safari%2522%252C%2522stid%2522%253A%25221%2522%252C%2522utm%2522%253A%2522%2522%252C%2522did%2522%253A%2522aa82591038db43e2%2522%252C%2522uu%2522%253A%2522963fead1-e3c3-4c03-9d37-6db61a805cd0%2522%252C%2522ssid%2522%253A%252253440b1c0284aceb-1556075017673%2522%252C%2522p%2522%253A%25221-100000-500501%2522%252C%2522pvid%2522%253A%252253440b1c-1556075553346-93ad602ac6%2522%257D&stp%5B%5D=http%3A%2F%2Fm.biyao.com%2Fclassify%2FpagesMiddle%3Fisrecommend%3D1&stp%5B%5D=pageId%3Dmoses%3Apid_13&stp%5B%5D=topicId%3D10300085&topicId=10000201&isTab=1`,{}).then(res=>{
                this.itemlist = res.data.data.blockList[0].block;
                
            })
            this.allLoaded = true;                  // 若数据已全部获取完毕
            this.$refs.loadmore.onBottomLoaded();   //底部加载完毕提示 关闭
        }
    },
    components: {
        commonMail,
    },
}
</script>

<style lang="scss" scoped>
    
</style>
