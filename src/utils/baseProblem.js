// 基础服务
const list = []

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < i + 1; j++) {
    list.push({ a: j, b: i, result: i * j })
  }
}

let shuffleList = list.sort(() => Math.random() - 0.5)

function groupByFive(arr) {
  const result = []
  for (let i = 0; i < arr.length; i += 5) {
    result.push(arr.slice(i, i + 5).flat())
  }
  return result
}

let answelist = []
for (let i = 0; i < shuffleList.length; i++) {
  answelist.push(shuffleList[i].result)
}
export const groupAnswelist = groupByFive(answelist)
export const grouparr = groupByFive(shuffleList)
