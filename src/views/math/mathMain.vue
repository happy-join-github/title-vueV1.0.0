<template>
    <threePass>
        <template #title>
            <td colspan="4">两位数加两位数</td>
        </template>
        <template #one>
            <img :src="UrlObj[list[0]]">
        </template>
        <template #two>
            <img :src="UrlObj[list[1]]">
        </template>
        <template #three>
            <img :src="UrlObj[list[2]]">
        </template>
    </threePass>
</template>
<script>
import threePass from '@/components/threePass.vue'
import { ThreeMovesToPassTheLevel, num } from '@/utils/math'
export default {
    components: { threePass },
    data() {
        return {
            MathData: ThreeMovesToPassTheLevel,
            day: num,
            list: ['one', 'two', 'three'],
            UrlObj: {}
        }
    },
    created() {
        for (let item of this.list) {
            this.UrlObj[item] = new URL(this.MathData[this.day][item], import.meta.url).href
        }
    }
}
</script>

<style scoped></style>