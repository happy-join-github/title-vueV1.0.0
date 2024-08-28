// 进阶版服务

let list = []
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < i + 1; j++) {
    list.push({ id: i * 10 + j, a: j, b: i, result: i * j })
  }
}
//随机打乱
list = list.sort(() => Math.random() - 0.5)

//复制原始数组，随机将两个数中的一个数字变为null
let listbackup = [...list]
const randomList = new Array(list.length).fill(0)
for (let i = 0; i < list.length; i++) {
  randomList[i] = Math.random().toFixed(2)
}
let answer = []
listbackup.forEach((item, index) => {
  randomList[index] < 0.5 ? answer.push(item.a) : answer.push(item.b)
  randomList[index] < 0.5 ? (item.a = null) : (item.b = null)
})

//分组函数
function groupByFive(arr) {
  const result = []
  for (let i = 0; i < arr.length; i += 5) {
    result.push(arr.slice(i, i + 5).flat())
  }
  return result
}
//题目列表
listbackup = groupByFive(listbackup)
//空缺答案
answer = groupByFive(answer)

const data = {
  listbackup,
  answer
}

export default data
