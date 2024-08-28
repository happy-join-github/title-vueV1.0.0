# titleWebsite说明文档

## 项目研究背景

随着时代的发展，知识付费的时代正将席卷整个时代，为了免费的享受到付费的快乐，本人制作了一个基于vue3+vite+pinia的做题网站，旨在解决付费的问题。因为经费有限，本项目的所有的判题机制都在前端进行，无后端。项目起始于20240820，本项目将持续更新。

## 项目结构

本项目一共有四个板块

- 乘法口诀
- 语文
- 数学
- 英语

针对后面的三个项目还有细分的版块(下面仅是初期打算的模块，后面将基于这些木块进行扩充)

1. 语文
   - 阅读理解
   - 生词听写(下载每个字的音频，每次播放一个音频，听写后截图发送，人工修改)
   - 日积月累(词语，歇后语，四字成语)
   - 作文(关于各种格式的作文模板，以及写作技巧，范文示例，练习)
2. 数学
   - 100以内的混合运算
   - 应用题
   - 退位减法
   - 进位加法
3. 英语
   1. 认识26个字母

## 项目开发环境

> node 18.16.1

## 项目依赖

> +-- @rushstack/eslint-patch@1.10.4
> +-- @vitejs/plugin-vue@5.1.2
> +-- @vue/eslint-config-prettier@9.0.0
> +-- eslint-plugin-vue@9.27.0
> +-- eslint@8.57.0
> +-- pinia@2.2.2
> +-- prettier@3.3.3
> +-- vite-plugin-vue-devtools@7.3.9
> +-- vite@5.4.2
> +-- vue-router@4.4.3
> `-- vue@3.4.38

## 项目构建，编译，运行

```sh
npm install
npm run build
npm run dev
```

## 项目错误检查

```sh
# 项目已引入ESlint
npm run lint
```

## 项目贡献者

![peopleone](https://github.com/happy-join-github/title-vueV1.0.0/blob/main/contributor.png)

> 2024/08/28乘法口诀开发完毕
>
