<template>
  <div id="app">
    <el-container>
      <el-header class="header" style="height:70px">
        <div class="content">
          <div class="logo">
            <a href="#"><img src="./assets/img/logo.png" alt=""/></a>
          </div>
          <ul>
            <li :class="{active:active===1}" @click="active=1">
              <router-link to="/index">发现音乐</router-link>
            </li>
            <li :class="{active:active===2}" @click="active=2"><router-link to="/my">我的音乐</router-link></li>
            <li :class="{active:active===3}" @click="active=3"><router-link to="/friend">朋友</router-link></li>
            <li :class="{active:active===4}" @click="active=4"><a href="#">商城</a></li>
            <li :class="{active:active===5}" @click="active=5"><a href="#">音乐人</a></li>
            <li :class="{active:active===6}" @click="active=6"><router-link to="/download">下载客户端</router-link><span class="hot">HOT</span></li>
          </ul>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer></el-footer>
    </el-container>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      active:1
    }
  },
  
}
</script>

<style>

</style>
