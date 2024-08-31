---
title: GitPage部署教程
date: 2024-08-22
order: 1
tags: 
    - GitPage
    - GitHub
    - 教程
---

## 单仓库部署

1. 创建仓库
创建用户名同名仓库，如 `username.github.io`

![创建用户名同名仓库](/2024/gitpage.png)
2. 创建 `index.html`

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>我的网站</title>
</head>
<body>
    <h1>我的网站</h1>
    <p>我的网站。</p>
</body>
</html>
```

![分支](/2024/gitpage2.png)
3. 配置 Page

![配置Page](/2024/gitpage1.png)
4. 访问页面

[https://username.github.io](https://superdly.github.io)

![访问页面](/2024/gitpage3.png)
参考文档：https://docs.github.com/zh/pages/quickstart

## 多仓库部署
::: warning 需要有自己的域名
多仓库部署需要有自己的域名才可以部署
:::