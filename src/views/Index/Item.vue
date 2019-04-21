<template>
    <div class="item-lists">
        <h3><p class="left"><span class="bg"></span><span>领券直播</span></p><p class="right">今日已为用户节省 <span>140,457,233</span> 元</p></h3>
        <ul>
            <li v-for="item in itemlists" :key="item.tk_zs_id">
                <div class="left"><img :src="item.pic" alt=""></div>
                <div class="right">
                    <p class="title">{{item.d_title}}</p>
                    <p class="tm-price"><span>天猫价￥{{item.yuanjia}}</span><span>已售{{item.xiaoliang}}件</span></p>
                    <p class="discount"><span>券后价￥<em>{{item.jiage}}</em></span><i>{{item.quan_jine}}元券</i></p>
                </div> 
            </li>
        </ul>
    </div>
</template>
<script>
import { InfiniteScroll } from 'mint-ui';
export default {
    props: ["itemlists"],
    
}
</script>
<style lang="scss" scoped>
.item-lists{
    margin-top: .1rem;
    h3{
        display: flex;
        padding: 0 .1rem;
        align-items: center;
        justify-content: space-between;
        background: #ffffff;
        height: .3rem;
        font-weight: 100;
        p.left{
            display: flex;
            align-items: center;
            span.bg{
                display: inline-block;
                width: .03rem;
                height: .15rem;
                background: #fc4d52;
                margin-right: .05rem;
            }
        }
        p.right{
            font-size: 12px;
            color: #aaaaaa;
            span{
                color: #fc4d52;
                font-size: 16px;
                font-weight: 550;
            }
        }
    }
    ul{
        background: #ffffff;
        li{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: .1rem 0 0 .1rem;
            height: 1.36rem;
            div.left{
                img{
                    width: 1.26rem;
                }
            }
            div.right{
                flex: 1;
                height: 100%;
                padding: 0 .1rem 0 .2rem;
                position: relative;
                p{
                    position: absolute;
                    width: 2rem;
                }
                p.title{
                    top: 0;
                    font-size: 14px;
                    color: #333;
                }
                p.tm-price{
                    bottom: .25rem;
                    font-size: 12px;
                    display: flex;
                    justify-content: space-between;
                    color: #aaaaaa;
                }
                p.discount{
                    bottom: 0;
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                    color: #fc4d52;
                    height: .2rem;
                    span{
                        em{
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 550;
                        }
                    }
                    i{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-image: linear-gradient(to right,#ff907b,#ff605f);
                        color: #ffffff;
                        padding: .04rem .1rem;
                        position: relative;
                        font-style: normal;
                    }
                    i::after{
                        content: '';
                        position: absolute;
                        right: -.03rem;
                        width: .06rem;
                        height: .06rem;
                        border-radius: 50%;
                        background: #ffffff;
                    }
                    i::before{
                        content: '';
                        position: absolute;
                        left: -.03rem;
                        width: .06rem;
                        height: .06rem;
                        border-radius: 50%;
                        background: #ffffff;
                    }
                }
            }
        }
    }
}
</style>
