<template>
  <headerView></headerView>
  <div id="bottom">
    <div class="title">欢迎使用本系统检查自己的学习情况,祝你做题愉快！！！</div>
    <ul>
      <li class="titleLi" style="text-align: center">目录</li>
      <li v-for="item of list" :key="item" class="titleLi">
        {{ item }}
        <ul>
          <li v-for="(liItem, index) of model[item].data" :key="liItem">
            <router-link :to="liItem ? `${model[item].path}${model[item].data_path[liItem]}` : ''">
              {{ index + 1 }}. {{ liItem }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import headerView from '@/components/header.vue'
import { modelResult } from '@/config/moodel'
export default {
  components: { headerView },
  data() {
    return {
      model: modelResult.model,
      list: Object.keys(modelResult.model)
    }
  },
  methods: {}
}
</script>

<style scoped>
#bottom {
  width: 100vw;
  height: 90vh;
  background-color: antiquewhite;
}

.title {
  font-size: 20px;
  font-weight: bold;
  background-image: linear-gradient(0, #e9c4cb, #9284b4);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* 设置文本颜色为透明以展示背景渐变色 */
  text-align: center;
  padding-top: 20px;
}

ul li {
  text-align: left;
}

.titleLi {
  color: #9284b4;
  font-size: 22px;
  line-height: 26px;
  width: 400px;
  background-color: #fff;
  margin: 0 auto;
}

a {
  color: #9284b4;
  font-size: 22px;
  line-height: 26px;
}
</style>
