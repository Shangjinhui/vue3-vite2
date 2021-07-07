<template>
    <div>Con</div>
</template>
<script>
import { defineComponent } from 'vue'

import router from '@/router/index.js'

export default defineComponent({
    setup() {
        console.log(router.currentRoute._rawValue.query.id)
    },
})
</script>