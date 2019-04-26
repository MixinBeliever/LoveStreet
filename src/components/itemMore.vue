<template>
    <div>
        <ul>
            <li v-for="item in itemlists" :key="item.id">
                <img :src="item.icon"/>
                <span>{{item.name}}</span>
            </li>
        </ul> 
    </div>
</template>

<script>
export default {
    props: ["itemlists"]
}
</script>

<style lang="scss" scoped>
    div{
        padding: .2rem;
        background: #ffffff;
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 25%;
                margin-bottom: .2rem;
                img{
                    height: .5rem;
                    width: .5rem;
                }
                span{

                }
            }
        }
    }    
</style>
