<template>
  <div class="index">
    <Swipe :bannerlists="bannerlists"></Swipe>
    <div class="liuliang">
      <a>
        <img :src="bg1" />
      </a>
    </div>
    <div class="nav">
      <ul>
        <li v-for="(item,index) in nav" :key="index">
          <a>
            <img :src="item.img" />
            <span>{{item.name}}</span>
          </a>
        </li>
      </ul>
    </div>
    <sideSilder :hotProductTop10="hotProductTop10"></sideSilder>
    <heartBranch></heartBranch>
    <Item :itemlists="itemlists" v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="30" 
    infinite-scroll-immediate-check="false"></Item>
  </div>
</template>

<script>
import axios from 'axios';

import Vue from 'vue';
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

import Swipe from './Swipe';
import sideSilder from './sideSilder';
import heartBranch from './heartBranch';
import Item from './Index/Item';

export default {
  data(){
    return{
      bannerlists: ['./imgs/banner (1).gif','./imgs/banner (1).png','./imgs/banner (1).jpg','./imgs/banner (2).jpg','./imgs/banner (3).jpg',],
      bg1: './imgs/bg (1).gif',
      nav: [{img:"./imgs/nav (1).png",name:"9.9包邮"},{img:"./imgs/nav (2).png",name:"疯抢排行"},{img:"./imgs/nav (3).png",name:"叮咚抢"},{img:"./imgs/nav (4).png",name:"局拼团"},],
      hotProductTop10: [],
      itemlists: [],
      pagestatus: true,
      pagecount: 1,
    }
  },
  methods:{
    loadMore() {
      if (this.itempagestatus) {
        this.loading = true;
        console.log('到底了')
        this.pagecount++;
        /**
         * &cac_id=cXVlcnlUaGVuRmV0Y2g7NjszMjMwNzgyNTc3OmdoTW5qX1BMU1BLeGdLdnpaVmFJMEE7MzIzMDc3NzI1Njp5YVJ0Vm83QlNNeTNsMHdNenRfc1N3OzE2MjAyMTY0NDk6RjVXM2FnYUVRZm1wdFdrWnRveVYtQTsxNjIwMjI1MzQwOkNwRjljNndlUTQ2MXUtUHZ1TnRHblE7MzIzMDc4MjU3ODpnaE1ual9QTFNQS3hnS3Z6WlZhSTBBOzMyMzA3NzcyNTc6eWFSdFZvN0JTTXkzbDB3TXp0X3NTdzswOw%3D%3D
         */
        fetch(`/index.php?r=index/ajaxnew&page=${this.pagecount}`).then(res=>res.json()).then(res=>{
          console.log(res.data.data)
          let last = this.itemlists[this.itemlists.length - 1];
          
            this.itemlists.push(...res.data.data);
          
          this.$nextTick(()=>{
            this.loading = false;
          })
        }) 
        this.loading = false;   
      }
        // setTimeout(() => {
        //     let last = this.itemlists[this.itemlists.length - 1];
        //     for (let i = 1; i <= 10; i++) {
        //     this.itemlists.push(last + i);
        //     }
        //     this.loading = false;
        // }, 2500);
    }
  },
  mounted(){
    fetch('http://www.mei.com/appapi/brand/product/hotNew/v3?logoId=3616200100000000853').then(res=>res.json()).then(res=>{
      console.log(res)
      this.hotProductTop10 = res.body.hotProductTop10;
    })

    axios({
      url: '/index.php?r=index/ajaxnew&page=1',
    }).then(res=>{
      console.log(res.data.data.data)
      this.itemlists = res.data.data.data;
      this.itempagestatus = res.data.data.pageStatus;
    })

  },
  components:{
    Swipe,
    sideSilder,
    heartBranch,
    Item,
  }
}
</script>

<style lang="scss" scoped>
.index{
  margin-top: .85rem;
  margin-bottom: .5rem;
}
  .liuliang{
    img{
      width: 100%;
    }
  }
  .nav{
    background: #ffffff;
    ul{
      display: flex;
      justify-content: center;
      align-items: center;
      li{
        flex: 1;
        padding: .2rem 0;
        a{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          img{
            width: .6rem;
          }
          span{

          }
        }
      }
    }
  }
</style>

