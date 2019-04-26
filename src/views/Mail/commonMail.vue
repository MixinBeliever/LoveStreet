<template>
    <div class="mystreet">
        <ul>
            <li v-for="(item,index) in itemlist" :key="index">
                <div class="left" v-for="msg in item.data" :key="msg.id">
                    <img  v-lazy="msg.image" alt="">
                    <dl>
                        <dt><i>￥</i><span>{{msg.priceStr}}</span></dt>
                        <dd class="branch" v-if="msg.labels">
                            <span v-for="(res,index) in msg.labels" :key="index" :style="{color: res.textColor,background: res.color, borderColor: res.roundColor }">{{res.content}}</span>
                        </dd>
                        <dd class="info">{{msg.subtitle | filterSubtitle }}</dd>
                        <dd class="title">{{msg.mainTitle}}</dd>
                        <dd class="last-line">{{msg.thirdContent | filterSubtitle}}</dd>
                    </dl>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
import { Lazyload } from 'mint-ui';
import Vue from 'vue';
Vue.use(Lazyload);
export default {
    props: ["itemlist"],
    filters:{
        filterSubtitle(data){
            return data.split("|")[0];
        }
    }
}
</script>

<style lang="scss" scoped>
    .mystreet{
        background: #ffffff;
        margin-bottom: .5rem;
        ul{

            li{
                display: flex;
                width: 100%;
                div.left{
                    width: 50%;
                    padding-bottom: .1rem;
                    img{
                        width: 100%;
                    }
                    img[lazy=loading] {
                        padding: .15rem;
                        width: 100%;
                        background: url(../../assets/logo.png) no-repeat center;
                        margin: auto;
                    }
                    dl{
                        padding: 0 .1rem;
                        dd{
                            width: 100%;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            font-size: 12px;
                        }
                        dt{
                            color: #f8b427;
                            i{
                                font-style: normal;
                                font-size: 12px;
                            }
                            span{
                                font-size: 18px;
                                font-weight: 540;
                                margin-left: 0.02rem;
                            }
                        }
                        dd.branch{
                            span{
                                border-width: 1px;
                                border-style: solid;
                                margin-right: .05rem;
                            }
                        }
                        dd.info{
                            color: #c4a576;
                        }
                        dd.last-line{
                            color: #d1d1d1;
                        }
                    }
                }
            }
        }
    }
</style>
