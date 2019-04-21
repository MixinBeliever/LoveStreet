<template>
    <div class="heart-branch">
        <div class="top">
            <div class="left">
                <img :src="heartobg.logo"/>
            </div>
            <div class="right">
                <h3>{{heartobg.title}}</h3>
                <p>{{heartobg.info}}</p>
            </div>
        </div>
        <div class="bottom">
            <ul>
                <li v-for="(item,index) in heartobg.datalist" :key="index">
                    <a href="">
                        <img :src="item.img" alt="">
                        <p class="title">{{item.title}}</p>
                        <p class="price"><em>￥</em>{{item.price}} <span>￥{{item.discountprice}}</span></p>
                    </a>
                </li>
            </ul>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            heartobg: {logo: './imgs/heartlogo.png',title: '纸享新境界·心相印',info:'爱让世界心相印',datalist: [{img: './imgs/xinyin (1).jpg',title: '心相印卷纸，3层柔韧，遇水不易破',price: 13.6,discountprice: 9.9},{img: './imgs/xinyin (1).jpg',title: '心相印卷纸，3层柔韧，遇水不易破',price: 13.6,discountprice: 9.9},{img: './imgs/xinyin (1).jpg',title: '心相印卷纸，3层柔韧，遇水不易破',price: 13.6,discountprice: 9.9}]},
        }
    }
}
</script>
<style lang="scss" scoped>
    .heart-branch{
        background: url(../assets/heartbg.png) no-repeat top;
        background-size: 100%;
        margin-top: .1rem;
        .top{
            display: flex;
            justify-content: center;
            align-items: center;
            height: .9rem;
            .left{
                display: flex;
                padding: .15rem;
                justify-content: center;
                align-items: center;
                img{
                    width: .7rem;
                    height: .7rem;
                }
            }
            .right{
                flex: 1;
                height: .5rem;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                h3{
                }
                p{
                }
            }
        }
        .bottom{
            ul{
                width: 100%;
                display: flex;
                padding: .1rem;
                background: #ffffff;
                border-radius: .15rem .15rem 0 0;
                li{
                    width: 33.3%;
                    a{
                        img{
                            width: 100%;
                        }
                        p{
                            margin: 0.05rem 0;
                        }
                        p.title{
                            width: 100%;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                            font-size: 16px;
                            color: #666666;
                        }
                    }
                }
            }
        }
    }
</style>

