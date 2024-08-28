<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { modelResult } from '@/config/moodel'
export default {
  data() {
    return {
      list: Object.keys(modelResult.model)
    }
  },
  methods: {}
}
</script>

<style scoped>
div {
  width: 100vw;
  height: 10vh;
  background-color: gainsboro;
}

ul {
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
}

ul li {
  font-size: 20px;
  margin: 26px 20px 0 0;
}
</style>
