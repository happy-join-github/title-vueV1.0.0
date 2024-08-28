<template>
  <div class="app">
    <div class="titleArea">
      <table class="Area">
        <tr>
          <td colspan="5">请在方框中填入合适的数字</td>
        </tr>
        <tr v-for="(row, rowIndex) in list" :key="rowIndex">
          <td v-for="(cell, cellIndex) in row" :key="cell.id">
            <input type="text" v-if="!cell.a" v-model.number="modelnum[rowIndex][cellIndex]" />
            <span v-else>{{ cell.a }}</span>
            ×
            <input type="text" v-if="!cell.b" v-model.number="modelnum[rowIndex][cellIndex]" />
            <span v-else>{{ cell.b }}</span>
            =
            {{ cell.result }}
          </td>
        </tr>
      </table>
    </div>
    <div class="submitArea">
      <button @click="submitResult" style="margin-right: 60px">提交答案</button>
      <button @click="this.$router.push('/')">返回主页</button>
    </div>
  </div>
</template>

<script>
import data from '@/utils/advancedProblem'
import { useCommunicationStore } from '@/stores/useadvanced'
export default {
  data() {
    return {
      list: data.listbackup,
      result: data.answer,
      modelnum: [],
      commuincation: useCommunicationStore()
    }
  },
  methods: {
    submitResult() {
      // 非父子组件
      //已经向状态管理发送了消息
      if (this.modelnum.flat().filter((item) => item !== '')) {
        this.commuincation.sendMsg(this.modelnum)
        this.$router.push('/koujue/advancedAnswer')
      } else {
        alert('请按照要求填写下面的题目')
      }
    }
  },
  created() {
    // 初始化modelnum数组，使其与list结构匹配
    this.modelnum = this.list.map(() => new Array(this.list[0].length).fill(''))
  }
}
</script>

<style scoped>
.app {
  position: relative;
  height: 98vh;
}

.app::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/u=2330576488,3695252461&fm=253&fmt=auto&app=138&f=JPEG.webp');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.7;
  /* 设置透明度 */
  z-index: -1;
  /* 确保伪元素在内容后面 */
}

.titleArea {
  width: 1000px;
  text-align: center;
  margin: 0 auto;
}

table {
  border: 2px solid black;
  border-collapse: collapse;
  text-align: center;
  width: 1000px;
  margin: 0 auto;
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

.submitArea {
  width: 1000px;
  margin: 20px auto;
  text-align: center;
}
</style>
