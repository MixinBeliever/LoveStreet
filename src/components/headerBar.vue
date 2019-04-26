<template>
    <header>
        <ul>
            <li><router-link to="" tag="a"><span class="iconfont icon-sousuo"></span>输入您需要的商品<span></span></router-link></li>
            <li><router-link to="" tag="a"><span class="iconfont icon-jiaoya"></span></router-link></li>
        </ul>
    </header>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    header{
        height: 45px;
        background-image: linear-gradient(to right, #fba958, #fa4fbd);
        width: 100%;
        ul{
            height: 100%;
            display: flex;
            li{
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                a{
                    span{

                    }
                }
            }
            li:nth-of-type(1){
                flex: 1;
                a{
                    display: flex;
                    align-items: center;
                    width: 95%;
                    height: 30px;
                    border-radius: 25px; 
                    background: #fff;
                    padding: 0 .15rem;
                    span.iconfont{
                        font-size: 25px;
                    }
                }
            }
            li:nth-of-type(2){
                width: 45px;
                a{
                    span.iconfont{
                        font-size: 25px;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>
