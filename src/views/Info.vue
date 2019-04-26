<template>
  <div class="home">
  indo
  </div>
</template>

<script>
import axios from 'axios';
export default {
  mounted(){
    axios.post('/index.php?r=user/addcheck','id=19329823&token=false').then(res=>{
      console.log(res.data);
    })
  }
}
</script>