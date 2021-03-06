<p align="center"><a href="https://github.com/2214962083/ios-scriptable-tsx" target="_blank" rel="noopener noreferrer"><img width="100" src="https://p.pstatp.com/origin/1383f0000b2ce54d280a2" alt="ios-scriptable-tsx logo" style="border-radius: 30px;"></a></p>

<p align="center">
  <!-- package.json 版本 -->
  <a href="https://github.com/2214962083/ios-scriptable-tsx"><img src="https://img.shields.io/github/package-json/v/2214962083/ios-scriptable-tsx" alt="Version"></a>
  <!-- star数量 -->
  <a href="https://github.com/2214962083/ios-scriptable-tsx"><img src="https://img.shields.io/github/stars/2214962083/ios-scriptable-tsx" alt="Github stars"></a>
  <!-- issues -->
  <a href="https://github.com/2214962083/ios-scriptable-tsx/issues"><img src="https://img.shields.io/github/issues/2214962083/ios-scriptable-tsx" alt="Issues"></a>
  <!-- 仓库大小 -->
  <a href="https://github.com/2214962083/ios-scriptable-tsx"><img src="https://img.shields.io/github/repo-size/2214962083/ios-scriptable-tsx" alt="Repo size"></a>
  <!-- 语言 -->
  <a href="https://github.com/2214962083/ios-scriptable-tsx"><img src="https://img.shields.io/github/languages/top/2214962083/ios-scriptable-tsx" alt="Language"></a>
  <!-- 最后一次提交时间 -->
  <a href="https://github.com/2214962083/ios-scriptable-tsx"><img src="https://img.shields.io/github/last-commit/2214962083/ios-scriptable-tsx" alt="Last commit date"></a>
  <!-- 证书 -->
  <a href="https://github.com/2214962083/ios-scriptable-tsx/blob/master/LICENSE"><img src="https://img.shields.io/github/license/2214962083/ios-scriptable-tsx" alt="License"></a>
  <!-- package.json 关键词 -->
  <a href="https://github.com/2214962083/ios-scriptable-tsx"><img src="https://img.shields.io/github/package-json/keywords/2214962083/ios-scriptable-tsx" alt="Keywords"></a>
</p>
<h2 align="center">ios-scriptable-tsx</h2>

<br/><br/>

## 介绍

本项目旨在给 `Scriptable` 开发者提供舒适的开发体验,  `Scriptable` 是 ios 上一个用 js 开发桌面小组件的 app ，如果你还没安装，可以[点我下载](https://apps.apple.com/us/app/scriptable/id1405459188)

<br/>

`ios-scriptable-tsx` 是一个二次封装 `Scriptable` 官方 api 的开发框架，它具有以下特点：

<br/>

**1. 支持在 pc 开发，支持实时监听修改、编译同步到手机运行。**

<br/>

**2. 支持使用 typescript 和 tsx 开发小组件，支持 api 类型提示、自动补全。**

<br/>

**3. 支持打包混淆、加密 js。**

<br/>

**4. 支持远程输出 console 日志到 pc 的命令窗口。**

<br/>

**5. 支持环境变量定义，打包时自动替换环境变量为预设值。**

<br/>

**6. 常用函数封装，使用更便捷。**

<br/>

## 使用

1. 先克隆本仓库

    ```bash
    git clone https://github.com/2214962083/ios-scriptable-tsx.git
    ```

<br/>

2. 进入到 `ios-scriptable-tsx` 目录里，执行 `npm install` 安装依赖
   

<br/>

3. 打开 vscode 愉快开发，打包入口文件默认是 `./src/index.ts`
   

<br/>

4. 执行 `npm run build` 打包到 `./dist` 文件夹

<br/>

## 文档
- [快速上手](./docs/quick-start.md#quick-start)
- [命令说明](./docs/quick-start.md#command-introduction)
- [项目目录说明和配置指南](./docs/config.md#config-introduction)
  - [项目目录说明](./docs/config.md#project-dir-introduction)
  - [打包配置](./docs/config.md#scriptable-config)
  - [其他配置](./docs/config.md#others-config)
  - [环境变量](./docs/config.md#env-config)
- [JSX 组件](./docs/widget-element.md#jsx-element)
  - [wbox 盒子组件](./docs/widget-element.md#wbox)
  - [wstack 容器组件](./docs/widget-element.md#wstack)
  - [wimage 图片组件](./docs/widget-element.md#wimage)
  - [wspacer 空格占位组件](./docs/widget-element.md#wspacer)
  - [wtext 文字组件](./docs/widget-element.md#wtext)
  - [wdate 日期组件](./docs/widget-element.md#wdate)
- [常用函数封装](https://github.com/2214962083/ios-scriptable-tsx/blob/master/src/lib/help.ts)
- [常见问题](./docs/questions.md)
- [Scriptable 官方 api 文档](https://docs.scriptable.app/)<br/><br/>

## 讨论

- [Scriptable 官方论坛](https://talk.automators.fm/c/scriptable/13)<br/><br/>

## 项目参考

- [「小件件」开发框架](https://github.com/im3x/Scriptables)
- [Scriptable](https://github.com/dompling/Scriptable)
- [Transparent-Scriptable-Widget](https://github.com/mzeryck/Transparent-Scriptable-Widget)<br/><br/>

## 许可证

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2020-present, Yang xiaoming
