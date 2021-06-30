<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <div class="nav-btn">
    <router-link to='/'> Home</router-link>
    <router-link to='/contact'>Contact </router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {

}
</script>