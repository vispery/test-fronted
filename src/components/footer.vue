<template>
  <footer>
    <p style="color:gray"><i class="el-icon-s-home"></i> 公司地址:北京航空航天大学</p>
    <p style="color:gray"><i class="el-icon-phone"></i> 联系方式:12345678</p>
    <p style="color:gray">® {{copyright}}</p>
  </footer>
</template>

<script>
  export default {
    name: "app-footer",
    data(){
      return{
        copyright:"Copyright 2019 Hotel Demo"
      }
    }
  }

</script>

<style scoped>
  footer{
    background: ghostwhite;
    height:120px;
    background-size:cover;
    padding:10px;
    margin-top:0;
  }
  p{
    text-align: center;
  }
</style>
