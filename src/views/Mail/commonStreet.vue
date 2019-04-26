<template>
    <div class="commonstreet" v-if="itemlist.length!==0">
        <div class="top">
            <h3>{{itemlist[0].block[0].data[0].mainTitle}}</h3>
            <div class="up">
                <div class="up-left">
                    <p :style="{color: itemlist[1].block[0].data[0].mainTitleColor}">{{itemlist[1].block[0].data[0].mainTitle}}</p>
                    <p :style="{color: itemlist[1].block[0].data[0].subtitleColor}">{{itemlist[1].block[0].data[0].subtitle}}</p>
                    <div>
                        <img :src="item" alt="" v-for="(item,index) in itemlist[1].block[0].data[0].images" :key="index">
                    </div>
                </div> -->
                <div class="up-right">
                    <p :style="{color: itemlist[1].block[0].data[1].mainTitleColor}">{{itemlist[1].block[0].data[1].mainTitle}}</p>
                    <p :style="{color: itemlist[1].block[0].data[1].subtitleColor}">{{itemlist[1].block[0].data[1].subtitle}}</p>
                    <img :src="itemlist[1].block[0].data[0].images[0]" alt="">
                </div>
            </div>
            <div class="line"></div>
            <div class="down">
                <ul>
                    <li v-for="(item,index) in itemlist[1].block[2].data" :key="index">
                        <p class="maintitle" :style="{color: item.mainTitleColor}">{{item.mainTitle}}</p>
                        <p class="subtitle" :style="{color: item.subtitleColor}">{{item.subtitle}}</p>
                        <img :src="item.images[0]" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="itemlist">
            <h3>{{itemlist[2].block[0].data[0].mainTitle}}</h3>
            <ul>
                <li v-for="(item) in itemlist[3].block" :key="item.data[0].id">
                    <img :src="item.data[0].image" alt="">
                    <dl>
                        <dt><i>￥</i><span>{{item.data[0].priceStr}}</span></dt>
                        <dd class="branch" v-if="item.data[0].labels"><span v-for="(res,index) in item.data[0].labels" :key="index" :style="{background: res.color,color: res.textColor,borderColor: res.roundColor}">{{res.content}}</span></dd>
                        <dd class="subtitle">{{item.data[0].subtitle | filterSubtitle}}</dd>
                        <dd class="maintitle">{{item.data[0].mainTitle}}</dd>
                        <dd class="lastinfo">{{item.data[0].subtitle | filterMaintitle}}</dd>
                    </dl>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: ["itemlist"],
    filters:{
        filterSubtitle(data){
            return data.split("|")[0];
        },
        filterMaintitle(data){
            return data.split("|")[1];
        }
    }
}
</script>

<style lang="scss" scoped>
    .commonstreet{
        .top{
            background: #ffffff;
            h3{
                text-align: center;
                padding: .1rem 0;
            }
            .up{
                padding: 0 .1rem .1rem;
                display: flex;
                
                .up-left{
                    border-right: 1px solid #f7f7f7;
                    width: 66%;
                    p{
                        width: 100%;
                    }
                    div{
                        display: flex;
                        img{
                            width: 1rem;
                            height: 1rem;
                            padding: .05rem;
                            margin-right: .1rem;
                        }
                    }
                }
                .up-right{
                    padding: 0 .05rem;
                    width: 1.15rem;
                    p{

                    }
                    img{
                        padding: .05rem;
                        width: 100%;
                        height: 1rem;
                    }
                }
            }
            div.line{
                height: 1px;
                margin: 0 .1rem;
                background: #f7f7f7;
            }
            .down{
                padding: 0 .1rem;
                ul{
                    display: flex;
                    li{
                        flex: 1;
                        border-right: 1px solid #f7f7f7;
                        img{
                            padding: .1rem;
                            width: 100%;
                        }
                        p.subtitle{
                            margin-left: .05rem;
                            font-size: 12px;
                        }
                        p.maintitle{
                            margin-left: .05rem;
                            margin-top: .1rem;
                        }
                    }
                    li:nth-last-of-type(1){
                        border: none;
                    }
                }
            }
        }
        .itemlist{
            
            margin-top: .1rem;
            h3{
                text-align: center;
                padding: .1rem 0;
                background: #ffffff;
            }
            ul{
                li{
                    background: #ffffff;
                    margin-bottom: .1rem;
                    img{
                        width: 100%;
                    }
                    dl{
                        padding: .1rem;
                        font-size: 12px;
                        dt{
                            line-height: .25rem;
                            color: #f60;
                            i{
                                font-style: normal;
                                font-size: 12px;
                                margin-right: .03rem;
                            }
                            span{
                                font-weight: 540;
                                font-size: 18px;        
                            }
                        }
                        dd{
                            margin-bottom: .05rem;
                        }
                        dd.branch{
                            span{
                                border-style: solid;
                                border-width: 1px;
                                margin-right: .05rem;
                            }
                        }
                        dd.subtitle{
                            color: #bf9e6b;
                        }
                        dd.lastinfo{
                            color: #999;
                        }
                        dd.maintitle{
                            font-size: 14px;
                        }
                        dd.subtitle,dd.maintitle{
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }

                    }
                }
            }
        }
    }
</style>
