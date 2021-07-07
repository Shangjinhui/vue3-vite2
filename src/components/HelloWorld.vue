<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }},{{dcount}}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
    
  </p>
  <div @click="giveParent">给你</div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
export default {
  props: {
    place: {
      type: Object,
      default: {},
    },
  },
  setup(props, { emit }) {
    //分解context对象取出emit
    console.log(props.place.address, "组件");

    const state = reactive({
      count: 0,
      dcount: computed(() => state.count * 2),
      msg: computed(() => props.place.address),
      
    });

    const giveParent = () => {
        emit('giveParent',state.count)
      }
    return { ...toRefs(state),giveParent };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
