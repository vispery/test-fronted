<template>
  <div id="housecard">
    <el-row>
      <el-col :span="7" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 4 : 0">
        <el-card :body-style="{ padding: '15px',margin:'5px' }" shadow="always">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
               class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "housecard",
        data: function () {
            return {
                currentDate: new Date()

            }
        }
    }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  #housecard {
    margin-top: 3%;

    padding-left: 1%;
  }
</style>
