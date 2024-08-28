<template>
    <table>
        <tr>
            <slot name="title"></slot>
        </tr>
        <tr>
            <td colspan="4">
                <slot name="one"></slot>
            </td>
        </tr>
        <tr>
            <td colspan="4">请在下面的对应位置填入上面题目的答案</td>
        </tr>
        <tr v-for="(rowitem, index) in onetitle" :key="index">
            <td v-for="(colItem, id) in rowitem" :key="id">{{ oneTitleNum(index) + id }} .
                <input type="text" v-model.number="onetitle[index][id]">
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <slot name="two"></slot>
            </td>
        </tr>
        <tr v-for="(rowitem, index) in twoTile" :key="index">
            <td v-for="(colItem, id) in rowitem" :key="id">
                {{ twoTitleNum(index) + id }}.
                <input type="text" v-model.number="twoTile[index][id]">
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <slot name="three"></slot>
            </td>
        </tr>
        <tr v-for="(rowitem, index) in threeTitle" :key="index">
            <td v-for="(colItem, id) in rowitem" :key="id" colspan="2">
                {{ index % 2 !== 0 ? 2 * index + 1 : 2 * index + 2 }} .
                <input type="text" v-model.number="threeTitle[index][id]">
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    data() {
        return {
            onetitle: Array.from({ length: 3 }, () => Array.from({ length: 4 }, () => null)),
            twoTile: Array.from({ length: 5 }, () => Array.from({ length: 4 }, () => null)),
            threeTitle: Array.from({ length: 5 }, () => Array.from({ length: 2 }, () => null))
        }
    },
    methods: {
        oneTitleNum(index) {
            switch (index) {
                case 0:
                    return 1 + index
                case 1:
                    return 4 + index
                case 2:
                    return 7 + index
            }
        },
        twoTitleNum(index) {
            switch (index) {
                case 0:
                    return index + 1
                case 1:
                    return index + 4
                case 2:
                    return index + 7
                case 3:
                    return index + 10
                case 4:
                    return index + 13
            }
        },
    }
}
</script>

<style scoped>
input {
    width: 50px;
    height: 20px;
}
</style>