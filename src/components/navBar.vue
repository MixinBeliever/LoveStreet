<template>
    <nav>
        <ul>
            <router-link to="/home" tag="li" activeClass="cur-sel" ><span>精选</span></router-link>
            <router-link to="/item/women" tag="li" activeClass="cur-sel" ><span>女装</span></router-link>
            <router-link to="/item/men" tag="li" activeClass="cur-sel" ><span>男装</span></router-link>
            <router-link to="/item/food" tag="li" activeClass="cur-sel" ><span>美食</span></router-link>
            <router-link to="/item/meiz" tag="li" activeClass="cur-sel" ><span>美妆</span></router-link>
            <router-link to="/item/lifestyle" tag="li" activeClass="cur-sel" ><span>居家日用</span></router-link>
            <router-link to="/item/foot" tag="li" activeClass="cur-sel" ><span>鞋品</span></router-link>
            <router-link to="/item/digital" tag="li" activeClass="cur-sel" ><span>数码家电</span></router-link>
            <router-link to="/item/kid" tag="li" activeClass="cur-sel" ><span>母婴</span></router-link>
        </ul>
        <router-link to="" tag="a" class="more"><span class="iconfont icon-more" @click="isshow=true;run=false"></span></router-link>
        <div class="item-more" v-if="isshow" @click="isshow=true">
            <h3>选择分类<span @click.stop="isshow=false">收起</span></h3>  
            <itemMore v-on:click="isshow=true" :itemlists="itemlists"></itemMore>
        </div>
    </nav>    
</template>
<script>
import axios from 'axios';
import itemMore from './itemMore'
export default {
    data(){
        return{
            isshow: false,
            run: true,
            itemlists:[],     //navbar更多数据
        }
    },
    mounted(){
        document.body.onclick = ()=>{
            if(this.run){
                this.isshow = false
            }
            this.run = true;
        }
        axios.get('/index.php?r=class/type').then(res=>{
            console.log(res.data.data)
            this.itemlists = res.data.data;
        })
    },
    components:{
        itemMore,
    }
}
</script>
<style lang="scss" scoped>
    nav{
        height: 40px;
        line-height: 40px;
        display: flex;
        top: .45rem;
        width: 100%;
        background: #fff;
        a{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
        }
        a.more{
            span.iconfont{
                font-size: 20px;
            }
        }
        ul{
            flex: 1;
            height: 40px;
            display: flex;
            align-items: center;
            overflow-y: hidden;
            flex-wrap: nowrap;
            font-size: 16px;
            li{
                height: 100%;
                color: #666;
                padding: 0 .1rem;
                white-space: nowrap;
            }
            li.cur-sel{
                color: #fa4fbd;
                span{
                    display: flex;
                    height: 100%;
                    border-bottom: 2px solid #fa4fbd;
                }
            }
        }
        div.item-more{
            position: absolute;
            top: .45rem;
            left: 0;
            width: 100%;
            background: rgba(000, 000, 000, .5);
            height: 667px;
            h3{
                padding: 0 .1rem;
                font-weight: 600;
                font-size: 14px;
                border-bottom: 1px solid #cccccc;
                background: #fff;
                span{
                    float: right;
                    // padding-left: .1rem; 
                    // padding-bottom: .1rem;
                    // transform: rotate(-90deg)
                }
            }
        }
    }
</style>
