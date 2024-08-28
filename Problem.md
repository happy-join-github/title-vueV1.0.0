# 开发中遇到的问题以及解决方案

1. 在vue3中非父子组件通信。

   > 场景：在答题页面要将用户输入的答案，在用户点击提交的时候，提交给答案渲染界面。使用pinia状态管理进行管理。
   >
   > 解决方案：
   >
   > 1. 在stores文件夹内创建一个js文件声明一个状态来管理用户输入的答案
   >
   > 2. 声明代码如下
   >
   >    ```javascript
   >    //引入pinia状态管理
   >    import { defineStore } from 'pinia'
   >    // 题目生成代码
   >    import { grouparr, groupAnswelist } from '@/utils/baseProblem.js'
   >    export const useAforBstore = defineStore('AforB', {
   >      state: () => ({
   >        //答案列表
   >        answer: groupAnswelist,
   >        // 用户输入
   >        result: [],
   >        //题目列表
   >        list: grouparr
   >      }),
   >      actions: {
   >        sendmsg(list) {
   >          this.result = list
   >        },
   >        solutionMsg() {
   >          return { userresult: this.result, okresult: this.answer, list: this.list }
   >        }
   >      }
   >    })
   >    ```

2. 如何解决a标签跳转的其他组件的问题，部署nginx服务遇到的问题

   > 场景：我需要在主界面把每个题目渲染出来，当用户点击时需要进行跳转到相应的组件，当我使用a的herf属性动态绑定每个组件的路由地址时，部署到nginx服务器点击跳转显示404。当项目为编译时，点击时正常。搜索互联网的相关回答，也没有解决。
   >
   > 解决：使用router-link来代替a标签来进行相应组件的跳转。使用to属性来代替herf属性

   