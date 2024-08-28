<template>
  <div class="app">
    <div class="contentArea">
      <table class="Area">
        <tr>
          <td colspan="5">
            请查看作答结果,
            <span class="green">绿色为正确</span>,
            <span class="red">红色错误</span>
          </td>
        </tr>
        <tr v-for="(row, rowIndex) in commuincation.solutionMsg()['list']" :key="rowIndex">
          <td
            v-for="(cell, cellIndex) in row"
            :key="cell.id"
            :class="{
              red: isgreen(rowIndex, cellIndex),
              green: isgreen(rowIndex, cellIndex)
            }"
          >
            <input
              type="text"
              v-if="!cell.a"
              v-model.number="commuincation.solutionMsg()['userresult'][rowIndex][cellIndex]"
              readonly
            />
            <span v-else>{{ cell.a }}</span>
            ×
            <input
              type="text"
              v-if="!cell.b"
              v-model.number="commuincation.solutionMsg()['userresult'][rowIndex][cellIndex]"
              readonly
            />
            <span v-else>{{ cell.b }}</span>
            =
            {{ cell.result }}
          </td>
        </tr>
        <tr>
          <td colspan="5"><button @click="backup">返回上一页</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { useCommunicationStore } from '@/stores/useadvanced.js'
export default {
  data() {
    return {
      commuincation: useCommunicationStore()
    }
  },
  methods: {
    backup() {
      this.$router.push('/koujue/advancedProject')
    },
    isgreen(rowIndex, cellIndex) {
      if (
        this.commuincation.solutionMsg()['userresult'][rowIndex][cellIndex] ===
        this.commuincation.solutionMsg()['okresult'][rowIndex][cellIndex]
      ) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
/* 如果题目错误将加上这个类 */
.red {
  background-color: red;
}

/* 如果正确则加上这个类 */
.green {
  background-color: greenyellow;
}

.app {
  background-image: url('@/assets/images/2ecdfec1161c4aa6b2fc0868b391509c.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.contentArea {
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
  font-size: large;
}

tr td {
  border: 2px solid black;
  padding: 10px;
}

input {
  width: 25px;
}
</style>
