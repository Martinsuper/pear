---
title: Virtual Studio Code 使用
date: 2024-08-31 14:01:53
order: 4
tags: 
    - VSCode
---


## 设置快捷代码块

在写 markdown 文档的时候，可以通过在 Virtual Studio Code 配置用户代码块来实现快捷输入代码

`Command + Shift + P` 选择：`代码片段:配置代码片段` 搜索 markdown 如果第一次配置，则需要创建

![20240831151650](https://raw.githubusercontent.com/superdly/image-bed/pear/2024/20240831151650.png)

然后在 markdown.json 添加代码块，如：

```json
{
    "cde": {
        "prefix": "cde",
        "body": [
            "```$1",
            "$2",
            "```",
            "\n"
        ],
        "description": "代码块"
    },
}
```

当在 Markdown 文档编辑的时候输入 `cde` 则自动弹出补全代码，按 Tab 键，可以选择光标跳转位置，$1、$2是输入光标跳转的位置

![20240831152115](https://raw.githubusercontent.com/superdly/image-bed/pear/2024/20240831152115.png)

## 支持快捷键上传图片到图床

1. VSCode 插件搜索 `PicGo` 安装插件

![图床配置](https://raw.githubusercontent.com/superdly/image-bed/pear/2024/20240831144549.png)
2. 配置自定义图床

安装完成插件就已经可以使用图床了，默认使用的是：SM.MS。
如果想要设置其他的图床则可以通过 [安装 PicGo](./PicGo使用.md) 软件来实现，VScode 插件可以使用软件的配置，只需要配置两个路径：

* 通过设置用户 `settings.json`,追加如下配置即可

::: tabs

@tab Windows

```bash
{
    "picgo.configPath":"YOUR_HOME_DIR\\AppData\\Roaming\\PicGo\\data.json",
    "picgo.dataPath": "YOUR_HOME_DIR\\AppData\\Roaming\\PicGo\\data.json"
}
```

@tab macOS

```bash
{
    "picgo.configPath": "YOUR_HOME_DIR/Library/Application Support/picgo/data.json",
    "picgo.dataPath": "YOUR_HOME_DIR/Library/Application Support/picgo/data.json"
}
```

@tab Linux

```bash
{
    "picgo.configPath": "YOUR_HOME_DIR/.config/picgo/data.json",
    "picgo.dataPath": "YOUR_HOME_DIR/.config/picgo/data.json"
}
```

:::

* 或者在 VSCode 设置里面搜索 PicGo 然后配置如下即可

![20240831144248](https://raw.githubusercontent.com/superdly/image-bed/pear/2024/20240831144248.png)
![图床配置](https://raw.githubusercontent.com/superdly/image-bed/pear/2024/20240831150120.png)
3. 使用

通过快捷键 `Command` + `option` + `U` 触发上传图片。
