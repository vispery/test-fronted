<template>
  <div id="app" class="block">
    <el-container style="width: 90%;margin-left: 5%">
      <el-header>
        <transition name="el-fade-in">
          <TopNavigator v-show="show"></TopNavigator>
        </transition>
      </el-header>
      <el-main>
        <transition name="el-fade-in-linear">
          <div v-show="show">
            <carousel></carousel>
            <h1 style="text-align: center;font-size: 40px">想要的屋子，一触即达</h1>
            <houseselector></houseselector>
          </div>
        </transition>
        <el-divider style="margin-top: 4%"></el-divider>
        <transition name="el-zoom-in-bottom">
          <housecard v-show="show"></housecard>
        </transition>
        <pagination></pagination>
        <el-divider style="margin-top: 4%"></el-divider>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>


    import TopNavigator from "./TopNavigator";
    import carousel from "./carousel";
    import houseselector from "./houseselector";
    import Housecard from "./housecard";
    import pagination from "./pagination"
    import Services from "./services";
    import Footer from "./footer";

    export default {
        name: 'index',
        components: {
            Services,
            Housecard,
            TopNavigator,
            carousel,
            houseselector,
            pagination,
            Footer,
        },
        data: function () {
            return {
                show: false,
            }
        },
        mounted() {
            this.show = true;
        }
    }
</script>

<style>

</style>
