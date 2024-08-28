<template>
  <div id="application">
    <table>
      <tr>
        <td colspan="5">
          请查看作答结果,
          <span class="green">绿色为正确</span>,
          <span class="red">红色错误</span>
        </td>
      </tr>
      <tr v-for="(item, index) in store.list" :key="index">
        <td
          v-for="(listItem, id) in item"
          :key="id"
          :class="{ red: isgreen(index, id), green: isgreen(index, id) }"
        >
          <span> {{ listItem.a }} × {{ listItem.b }} = </span>
          <input type="text" readonly v-model="store.solutionMsg()['userresult'][index][id]" />
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <button @click="this.$router.push('/koujue/baseProject/')" style="margin-right: 30px">
            再练习一遍
          </button>
          <button @click="this.$router.push('/')">返回主页</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { useAforBstore } from '@/stores/usebase.js'
export default {
  data() {
    return {
      store: useAforBstore()
    }
  },
  methods: {
    isgreen(index, id) {
      if (
        this.store.solutionMsg()['userresult'][index][id] ===
        this.store.solutionMsg()['okresult'][index][id]
      ) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>
/* 如果题目错误将加上这个类 */
.red {
  background-color: red;
}

/* 如果正确则加上这个类 */
.green {
  background-color: greenyellow;
}

#application {
  background-color: #9284b4;
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
  margin: 20px auto 0;
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
