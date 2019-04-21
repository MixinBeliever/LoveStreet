<template>
<div>
    <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in bannerlists" :key="index">
          <a>
              <img :src="item" alt="" /> 
          </a>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
export default {
    props: ["bannerlists"],
    mounted(){
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
        });
    }
}
</script>

<style lang="scss" scoped>
    img{
        width: 100%;
    }
</style>
