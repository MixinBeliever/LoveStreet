<template>
  <div class="side-silder">
    <h3><p class="left"><span class="bg"></span><span>大家都在领</span></p>
    <p class="right"><strong>3507896</strong><span class="tick">次实时抢券</span></p></h3>
    <div class="swiper-container side">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in hotProductTop10" :key="item.productId">
                <a>
                    <img :src="item.fileUrl" alt="">
                    <p><span>1.7</span>万人已领|<span>20</span>元券</p>
                </a>
                <p class="title">{{item.productName}}</p>
                <p class="price"><em>￥</em><strong>{{item.price}}</strong><span>￥{{item.marketPrice}}</span></p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
export default {
    props: ["hotProductTop10"],
    updated(){
        var swiper = new Swiper('.swiper-container.side', {
            slidesPerView: 2.5,
            spaceBetween: 5,
            freeMode: true,
        });
    }
}
</script>

<style lang="scss" scoped>
.side-silder{
    margin-top: .05rem;
    h3{
        height: .3rem;
        padding: 0 .1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #ffffff;
        p.left{
            display: flex;
            align-items: center;
            span{
                font-weight: 300;
                color: #7b7b7b;
            }
            span.bg{
                display: inline-block;
                height: .1rem;
                width: 0.03rem;
                background: #f60;
                vertical-align: middle;
            }
        }
        p.right{
            float: right;
            strong{
            }
            span.tick{
            }
        }
        
    }
    .swiper-container{
            background: #ffffff;
            padding-bottom: .2rem;
        .swiper-wrapper{
            background:  #f5f5f5;
            .swiper-slide{
                margin:.03rem .03rem 0;
                border-radius: .05rem;
                background: #ffffff;
                box-shadow: -.02rem -.02rem .02rem #fbfbfb;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                a{
                    position: relative;
                    img{
                        width: 1.2rem;
                        height: 1.4rem;
                    }
                    p{
                        position: absolute;
                        bottom: 0;
                        font-size: 12px;
                        color: #ffffff;
                        border-radius: .05rem;
                        width: 100%;
                        padding: .03rem .05rem;
                        background-image: linear-gradient(to right, #fe6ba8,#ff7dea);
                    }
                }
                p.title{
                    line-height: .2rem;
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    padding: 0 .15rem;
                }
                p.price{
                    text-align: left;
                    color: #fd898d;
                    width: 100%;
                    padding: 0 .15rem;
                    em{
                        font-size: 12px;
                        font-style: normal;
                    }
                    strong{
                        font-size: 18px;
                        font-weight: 100;
                    }
                    span{
                        margin-left: .05rem;
                        font-size: 12px;
                        text-decoration: line-through;
                        color: #7b7b7b;
                    }
                }
            }
        }
    }
    
}
</style>
