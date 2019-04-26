<template>
  <div class="mail">
    <headerBar></headerBar>
    <navBar :headFixed="headFixed" :navlist="navlist" @whocomponent="handleIsWhich"></navBar>
    <!-- <keep-alive> -->
      <component :is="who"></component>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import headerBar from './Mail/headerBar'
import navBar from './Mail/navBar'

import myStreet from './Mail/myStreet'
import findGoods from './Mail/findGoods'
import springStreet from './Mail/springStreet'
import ladyStreet from './Mail/ladyStreet'
import menStreet from './Mail/menStreet'
import girlShoes from './Mail/girlShoes'
import menShoes from './Mail/menShoes'

import { InfiniteScroll } from 'mint-ui';
import Vue from 'vue';
Vue.use(InfiniteScroll);
export default {
  data(){
    return {
      navlist: [],
      who: myStreet,
      headFixed: false,
    }
  },
  methods:{
    handleIsWhich(data){
      console.log('收到了',data)
      switch(data){
        case '我的街':
          this.who = myStreet;
          break;
        case '发现好货':
          this.who = findGoods;
          break;
        case '春装街':
          this.who = springStreet;
          break;
        case '女人街':
          this.who = ladyStreet;
          break;
        case '男人街':
          this.who = menStreet;
          break;
        case '女鞋街':
          this.who = girlShoes;
          break;
        case '男鞋街':
          this.who = menShoes;
          break;
        default :
          this.who = myStreet;
          break
      }
      
    }
  },
  mounted(){
    this.$store.commit("hideHeaderBar");
    fetch("/classify/recommendList?pageId=moses%3Apid_13&pageIndex=1&pvid=53440b1c-1555994274097-d63f703c57&platform=mweb&uuid=963fead1-e3c3-4c03-9d37-6db61a805cd0&ctp=%257B%2522pf%2522%253A%2522mweb%2522%252C%2522u%2522%253A%2522%2522%252C%2522av%2522%253A%2522%2522%252C%2522avn%2522%253A%2522%2522%252C%2522d%2522%253A%2522%2522%252C%2522os%2522%253A%2522%2522%252C%2522dw%2522%253A375%252C%2522dh%2522%253A667%252C%2522b%2522%253A%2522safari%2522%252C%2522stid%2522%253A%25221%2522%252C%2522utm%2522%253A%2522%2522%252C%2522did%2522%253A%2522aa82591038db43e2%2522%252C%2522uu%2522%253A%2522963fead1-e3c3-4c03-9d37-6db61a805cd0%2522%252C%2522ssid%2522%253A%252253440b1c0284aceb-1555993712788%2522%252C%2522p%2522%253A%25221-100000-500501%2522%252C%2522pvid%2522%253A%252253440b1c-1555994274097-d63f703c57%2522%257D&stp%5B%5D=http%3A%2F%2Fm.biyao.com%2Fclassify%2FpagesMiddle%3Fisrecommend%3D1&stp%5B%5D=pageId%3Dmoses%3Apid_13&stp%5B%5D=topicId%3D10300085&topicId=10300085&isTab=1",{
      method: 'get',
    }).then(res=>res.json()).then(res=>{
      console.log(res);
      this.navlist = res.data.blockList[0].block[0].data
    })
    document.onscroll = ()=>{
      console.log("滚了")
      if((document.documentElement.scrollTop || document.body.scrollTop) > 50){
        this.headFixed = true;
      }else{
        this.headFixed = false;
      }
    }
  },
  destroyed(){
		//离开这个组件时需要的操作
		this.$store.commit("showHeaderBar");
  },
  components:{
    headerBar,
    navBar,
  }
}
</script>