<template>
  <div id="application">
    <table>
      <tr>
        <td colspan="5">请在方框中填入合适的数字</td>
      </tr>
      <tr v-for="(item, index) of list" :key="index">
        <td v-for="(Item, id) of item" :key="id">
          <span>{{ Item.a }} × {{ Item.b }} = </span>
          <input type="text" v-model.number="resultNum[index][id]" />
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <button @click="submition" style="margin-right: 30px">提交答案</button>
          <button @click="this.$router.push('/')">返回主页</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { grouparr, groupAnswelist } from '@/utils/baseProblem.js'
import { useAforBstore } from '@/stores/usebase.js'
export default {
  data() {
    return {
      list: grouparr,
      stores: useAforBstore(),
      answelist: groupAnswelist,
      isEdit: false
    }
  },
  methods: {
    submition() {
      let flag = [...this.resultNum].flat().filter((item) => item !== '')

      for (let i = 0; i < flag.length; i++) {
        if (flag[i] !== '') {
          this.isEdit = true
        }
      }

      if (this.isEdit) {
        this.stores.sendmsg(this.resultNum)
        this.$router.push('/koujue/baseAnswer')
      } else {
        alert('请完成题目')
      }
    }
  },

  created() {
    this.resultNum = this.list.map(() => new Array(this.list[0].length).fill(''))
  }
}
</script>

<style>
#application {
  background-color: #e9c4cb;
  height: 100vh;
  margin: -20px auto 0;
}

table {
  border: 2px solid black;
  border-collapse: collapse;
  text-align: center;
  width: 1000px;
  margin: 30px auto 0;
}

tr td {
  border: 2px solid black;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
}

input {
  width: 30px;
}
</style>
