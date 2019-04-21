<template>
    <footer>
        <ul>
            <router-link to="/index" tag="li" activeClass="footer-active"><span class="iconfont icon-home"></span>首页</router-link>
            <router-link to="/mail" tag="li" activeClass="footer-active"><span class="iconfont icon-xingxing"></span>9.9邮</router-link>
            <router-link to="/sort" tag="li" activeClass="footer-active"><span class="iconfont icon-taobao"></span>分类</router-link>
            <router-link to="/shopcar" tag="li" activeClass="footer-active"><span class="iconfont icon-shopping"></span>购物车</router-link>
            <router-link to="/info" tag="li" activeClass="footer-active"><span class="iconfont icon-nickname"></span>我的</router-link>
        </ul>    
    </footer>    
</template>

<script>
import '../assets/font/iconfont.css'
export default {
    
}
</script>

<style lang="scss" scoped>
    footer{
        height: 50px;
        border-top: 1px solid #cccccc;
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        background: #ffffff;
        z-index: 10;
        ul{
            display: flex;
            align-items: center;
            height: 100%;
            li{
                height: 100%;
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                span.iconfont{
                    font-size: 25px;
                }
            }
            li.footer-active{
                color: #f60;
            }
        }
    }
</style>
