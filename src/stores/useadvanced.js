import { defineStore } from 'pinia'
import data from '@/utils/advancedProblem.js'
// 空缺a,b
export const useCommunicationStore = defineStore('toAnswerView', {
  state: () => ({
    //答案
    answer: data.answer,
    //用户输入
    result: [],
    //题目
    list: data.listbackup
  }),
  getters: {},
  actions: {
    sendMsg(list) {
      this.result = list
    },
    solutionMsg() {
      return { userresult: this.result, okresult: this.answer, list: this.list }
    }
  }
})
