import Vue from 'vue'
import Vuex from 'vuex'
import { Indicator } from 'mint-ui';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowHeaderBar: true,
    ladyStreetItemList: [],
  },
  mutations: {
    hideHeaderBar(state,data){  //自动得到一个形参state 可以传参 
			state.isShowHeaderBar = false;
		},
		showHeaderBar(){           //也可以通过this访问这个state
			this.state.isShowHeaderBar = true;
    },
    ladyStreetMutation(state,data){
      console.log("mutation中",data)
      state.ladyStreetItemList = data;
    }
  },
  actions: {
    ladyStreet(store){
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      axios.get("/classify/recommendList?pageId=moses%3Apid_5&pageIndex=1&pvid=53440b1c-1556018610971-d15523a942&platform=mweb&uuid=963fead1-e3c3-4c03-9d37-6db61a805cd0&ctp=%257B%2522pf%2522%253A%2522mweb%2522%252C%2522u%2522%253A%2522%2522%252C%2522av%2522%253A%2522%2522%252C%2522avn%2522%253A%2522%2522%252C%2522d%2522%253A%2522%2522%252C%2522os%2522%253A%2522%2522%252C%2522dw%2522%253A375%252C%2522dh%2522%253A667%252C%2522b%2522%253A%2522safari%2522%252C%2522stid%2522%253A%25221%2522%252C%2522utm%2522%253A%2522%2522%252C%2522did%2522%253A%2522aa82591038db43e2%2522%252C%2522uu%2522%253A%2522963fead1-e3c3-4c03-9d37-6db61a805cd0%2522%252C%2522ssid%2522%253A%252253440b1c0284aceb-1556015927526%2522%252C%2522p%2522%253A%25221-100000-500501%2522%252C%2522pvid%2522%253A%252253440b1c-1556018610971-d15523a942%2522%257D&stp%5B%5D=http%3A%2F%2Fm.biyao.com%2Fclassify%2FpagesMiddle%3Fisrecommend%3D1&stp%5B%5D=pageId%3Dmoses%3Apid_13&stp%5B%5D=topicId%3D10300085&topicId=&isTab=1").then(res=>{
          // console.log(res.data.data.blockList)
          // this.itemlist = res.data.data.blockList;
          store.commit('ladyStreetMutation',res.data.data.blockList)
          Indicator.close();
      })
      
    }
  }
})
