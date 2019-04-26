<template>
  <div id="app">
    <headNavBar :headNavBarIsFixed="headNavBarIsFixed" :superHeadNavBarIsFixed="superHeadNavBarIsFixed" ref="scrolltop" v-if="this.$store.state.isShowHeaderBar"></headNavBar>
    <router-view></router-view>
    <backTop v-show="backTopShow"></backTop>
    <footerBar></footerBar>
  </div>
</template>

<script>
import footerBar from './components/footerBar'
import headNavBar from './components/headNavBar'
import backTop from './components/backTop'


export default {
  data(){
    return{
      backTopShow: false,
      headNavBarIsFixed: false,
      superHeadNavBarIsFixed: false
    }
  },
  mounted(){
    window.onmousewheel= (e)=>{
      if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
          if (e.wheelDelta > 0) { //当滑轮向上滚动时
          console.log("???")
            this.superHeadNavBarIsFixed = true;
          }
          if (e.wheelDelta < 0) { //当滑轮向下滚动时
              // alert("滑轮向下滚动");
            this.superHeadNavBarIsFixed = false;
          }
      } else if (e.detail) {  //Firefox滑轮事件
          if (e.detail> 0) { //当滑轮向上滚动时
              // alert("滑轮向上滚动");
          }
          if (e.detail< 0) { //当滑轮向下滚动时
              // alert("滑轮向下滚动");
          }
      }
    }
    window.onscroll = ()=>{
      //头部固定效果
      if((document.documentElement.scrollTop || document.body.scrollTop) > 500){
        this.headNavBarIsFixed = true;          //headerbar 是否fixed
      }else{
        // this.headNavBarIsFixed = false;
      }
      // if(document.documentElement.scrollTop || document.body.scrollTop>0){
      //   this.headNavBarIsFixed = true;          //headerbar 是否fixed
      // }

      //以下是返回顶部的代码
      if((document.documentElement.scrollTop || document.body.scrollTop) > 85){
        this.backTopShow = true;
      }else{
        this.backTopShow = false;
      }
    }
  },
  components:{
    footerBar,
    backTop,
    headNavBar,
  },

}
</script>

<style lang="scss">
  /*======================================移动端样式重置============================================*/
/*=======================================清样式--通用=============================================*/
body,h1,h2,h3,h4,h5,h6,p,img,input,ul,ol,dl,li,dd,dt,figure,form,fieldset,legend{padding: 0;margin: 0;}
header,nav,main,article,section,aside,footer,figure,figcaption,details,summary{display: block;}
						 /*新标签在低版本浏览器默认识别为内联元素，需要转块*/
li{list-style: none;}        /*清除列表符号 此处可以为ul、ol但li写一个更方便。给ul ol写是利用了继承*/
img{display: block;border: 0;}                       /*低版本浏览器里面，图片加超链接会出现border  */
input{outline: none;border: 0;}                                                 /* 表单蓝色外围轮廓*/

/*===================================定义全局样式==================================================*/
body{
  font:14px "宋体","Arial Narrow",HELVETICA;
  background: #f5f5f5;}/*多个英文字母有空格要加“”，一个英文单词可以不加*/

/*===================================定义超链接样式================================================*/
a{ color:#7b7b7b; text-decoration:none; }

/*===================================移动端必须要有的==============================================*/
html,body{height: 100%;}

html{
  font-size: 26.67vw;
}

/*==================================所有盒子转为怪异盒模型=========================================*/
*{box-sizing: border-box;}

/* @media screen and (min-width: 320px) {
  html {font-size: 14px;}
}

@media screen and (min-width: 360px) {
  html {font-size: 16px;}
}

@media screen and (min-width: 400px) {
  html {font-size: 18px;}
}

@media screen and (min-width: 440px) {
  html {font-size: 20px;}
}

@media screen and (min-width: 480px) {
  html {font-size: 22px;}
}

@media screen and (min-width: 640px) {
  html {font-size: 28px;}
} */
</style>
