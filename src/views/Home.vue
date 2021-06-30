<template>
    <div class="aa"><p>home</p></div>
</template>
<script>
import { defineComponent,inject, onMounted } from 'vue'
import {getIndex} from '@/api/index.js'

export default defineComponent({
    inject:['until'],
    setup() {
        console.log(inject('until'))
        onMounted(()=>{
            getIndex().then(res=>{
                console.log(res);
            })
        })
    },
})
</script>
<style lang="less">
.aa{
    p{
        color: red;
    }
}
</style>
