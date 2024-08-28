import { defineStore } from 'pinia'
import { grouparr, groupAnswelist } from '@/utils/baseProblem.js'
export const useAforBstore = defineStore('AforB', {
  state: () => ({
    //答案列表
    answer: groupAnswelist,
    // 用户输入
    result: [],
    //题目列表
    list: grouparr
  }),
  actions: {
    sendmsg(list) {
      this.result = list
    },
    solutionMsg() {
      return { userresult: this.result, okresult: this.answer, list: this.list }
    }
  }
})
