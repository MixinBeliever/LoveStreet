<template>
    <div class="mail_header">
        <div class="left">
            <span>50元</span>
        </div>
        <div class="right">
            <p class="top"><span>{{countDownList}}<i>{{millions}}</i></span> 后过期</p>
            <p class="bottom">下载app领取新用户限量专属特权</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
　　　　return {
　　　　　　countDownList: '00:02:00:00.',
　　　　　　actEndTime: Date.now() + 1000*60*60*2,
            millions: 9,
　　　　};
　　},
　　created() {
　　　　this.countDown();
        this.millionsfn();
　　},

　　methods: {
        millionsfn(){
            setInterval(()=>{
                this.millions--;
                if(this.millions < 0){
                    this.millions = 9;
                }
            },100)
        },

　　　　timeFormat(param) {
　　　　　　return param < 10 ? '0' + param : param;
　　　　},
　　　　countDown(it) {
　　　　　　var interval = setInterval(() => {
　　　　　　　　// 获取当前时间，同时得到活动结束时间数组
　　　　　　　　let newTime = new Date().getTime();
　　　　　　　　// 对结束时间进行处理渲染到页面
　　　　　　　　let endTime = new Date(this.actEndTime).getTime();
　　　　　　　　let obj = null;
　　　　　　　　// 如果活动未结束，对时间进行处理
　　　　　　　　if (endTime - newTime > 0) {
　　　　　　　　　　let time = (endTime - newTime) / 1000;
　　　　　　　　　　// 获取天、时、分、秒
　　　　　　　　　　let day = parseInt(time / (60 * 60 * 24));
　　　　　　　　　　let hou = parseInt(time % (60 * 60 * 24) / 3600);
　　　　　　　　　　let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
　　　　　　　　　　let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
　　　　　　　　　　obj = {
　　　　　　　　　　　　day: this.timeFormat(day),
　　　　　　　　　　　　hou: this.timeFormat(hou),
　　　　　　　　　　　　min: this.timeFormat(min),
　　　　　　　　　　　　sec: this.timeFormat(sec)
　　　　　　　　　　};
　　　　　　　　} else { // 活动已结束，全部设置为'00'
　　　　　　　　　　obj = {
　　　　　　　　　　　　day: '00',
　　　　　　　　　　　　hou: '00',
　　　　　　　　　　　　min: '00',
　　　　　　　　　　　　sec: '00'
　　　　　　　　　　};
　　　　　　　　　　clearInterval(interval);
　　　　　　　　}
　　　　　　　　this.countDownList = obj.day + ':' + obj.hou + ':' + obj.min + ':' + obj.sec + '.';
　　　　　　}, 1000);
　　　　}
　　}
}
</script>

<style lang="scss" scoped>
    .mail_header{
        height: .5rem;
        background: url(../../assets/mail_header.jpg) no-repeat center;
        background-size: 100% 100%;
        display: flex;
        font-family: PingFangSC-Regular;
        .left{
            width: .7rem;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            span{
                display: inline-block;
                width: 100%;
                font-size: 16px;
                font-family: PingFangSC-Medium;
                text-align: center;
                border-right: 1px solid #ffffff;
            }
        }
        .right{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 12px;
            color: #ffffff;
            padding-left: .1rem;
            .top{
                span{
                    i{
                        font-style: normal;
                    }
                }
            }
        }
    }
</style>
