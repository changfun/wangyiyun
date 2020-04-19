<template>
<div class="app">
  <el-header class="wrap" style="height:34px">
    <div class="content">
      <ul>
        <li :class="{ active: wrapActive === 1 }" @click="wrapActive = 1">
          <router-link to="/recommend">推荐</router-link>
        </li>
        <li :class="{ active: wrapActive === 2 }" @click="wrapActive = 2">
          <router-link to="/top">排行榜</router-link>
        </li>
        <li :class="{ active: wrapActive === 3 }" @click="wrapActive = 3">
          <router-link to="/my">歌单</router-link>
        </li>
        <li :class="{ active: wrapActive === 4 }" @click="wrapActive = 4">
          <router-link to="/my">主播电台</router-link>
        </li>
        <li :class="{ active: wrapActive === 5 }" @click="wrapActive = 5">
          <router-link to="/my">歌手</router-link>
        </li>
        <li :class="{ active: wrapActive === 6 }" @click="wrapActive = 6">
          <router-link to="/my">新碟上架</router-link>
        </li>
      </ul>
    </div>
  </el-header>
  <el-main></el-main>

</div>
  
 
</template>

<script>
// 
// import recommend from "./recommend.vue";
// import top from "./top.vue";

export default {
  name: "index",

  data() {
    return {
      wrapActive:1
    }
  },
};
</script>

<style lang="less">
    .el-header.wrap {
    background-color: #d80000;
    .content {
        margin: 0 auto;
        width: 706px;
        height: 100%;
        ul {
            display: flex;
            align-items: center;
            height: 100%;
            
            li {
                margin: 0 14px;
                height: 22px;
                border-radius: 11px;
                &.active {
                    background-color: #ad0000;
                }
                a {
                    display: block;
                    padding: 0 14px;
                    color: #fff;
                    font-size: 12px;
                    text-align: center;
                    line-height: 22px;
                }
            }
        }
    }
}
</style>
