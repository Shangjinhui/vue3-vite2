<template>
    <div class="aa"><p>home</p></div>
    <div @click="pro2.toContact">手动调路由</div>
    <div @click="pro2.changTxt(111)">手动改store</div>
    <div @click="pro2.changNum">异步改store{{store_num}}</div>
    <p @click="pro1.toggleVisible">{{pro1.place.address}}---</p>
    <p @click="pro2.toggleVisible">{{pro2.place.address}}---{{pro2.address2}}</p>
    <p>{{myname}}</p>
    <p>{{store_txt}}</p>
    ----------------组件----------------
    <hello-word :place="pro1.place" @giveParent="giveParent"></hello-word>
</template>
<script>
import { defineComponent,inject, onMounted, ref, reactive, toRefs, computed,watch } from 'vue'
import {getIndex} from '@/api/index.js'
import $router from '@/router/index.js'
import $store from '@/store/index.js'

import helloWord from '@/components/HelloWorld.vue'
//defineComponent可去除（主要对setup的封装）
export default defineComponent({
    inject:['until'],
    components:{
        helloWord
    },
    setup() {
        console.log(inject('until'))       //使用app上绑定的全局变量
        console.log()

        let pro1 = reactive({
            place:{
                address:'杭州市'
            },
            toggleVisible(){
                pro1.place.address = '河南省'
            }
        }),
        pro2 = reactive({
            place:{
                address:'aaaaaa'
            },
            address2:computed(()=>pro2.place.address+'heiheihei'),
            toggleVisible(){
                pro2.place.address = 'bbbbbb'
            },
            toContact(){
                //console.log($router)
                $router.push({path:'/contact',query:{id:1}})
            },
            changTxt(val){
                $store.commit('SET_TXT',val)
            },
            changNum(){
                $store.dispatch('setNum')
            }
        });
        let myname = ref('尚金辉');
        let store_txt = computed(()=>$store.state.txt)
        let store_num = computed(()=>$store.state.num)
        //监听写法
        watch(store_txt,(val,old)=>{
            console.log(val,old)
        })
        //接受子组件参数
        const giveParent = val => {
            console.log(val,'---------')
        }

        onMounted(()=>{
            getIndex().then(res=>{
                console.log(res);
            })
        })
        //dom上绑定的数据和方法需要return出来。
        //1reactive一般针对复杂函数需要{}套一下，return的时候如果用toRefs处理下就渲染时不用了带变量名了，否则要带(所以如果有多个reactive时为了防止名字冲突，可以不用toRefs(那我们为什么要分开呢，这就涉及功能模块区分，区别于vue2所有数据都在data里))
        //2ref一般定义简单数据类型
        return {pro1,pro2,myname,store_txt,store_num,giveParent}
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
