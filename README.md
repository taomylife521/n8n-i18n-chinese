
# 安装教程

## 自带中文docker镜像
```shell
docker run -it --rm --name n8ntest \
-p 15678:5678 \
-v ~/.n8n:/home/node/.n8n \
-e N8N_SECURE_COOKIE=false \
blowsnow/n8n-chinese
```

## docker安装
> 其他命令参考n8n官方文档
```shell
docker run -it --rm --name n8ntest \
-p 15678:5678 \
-v 【替换为下载的编辑器UI目录】:/usr/local/lib/node_modules/n8n/node_modules/n8n-editor-ui/dist \
-v ~/.n8n:/home/node/.n8n \
-e N8N_DEFAULT_LOCALE=zh-CN \
-e N8N_SECURE_COOKIE=false \
n8nio/n8n
```


## npx本地启动n8n替换安装
> 其他本地方式启动的话参考这个即可
1. 找到路径：C:\Users\xxxxxx\AppData\Local\npm-cache\_npx\n8n\node_modules\n8n-editor-ui\dist
   （新版本也可能是C:\Users\xxxxxx\AppData\Roaming\npm\node_modules\n8n\node_modules\n8n-editor-ui\dist）
3. 下载对应版本editor-ui.tar.gz文件
4. 解压到 dist目录下替换
5. 设置环境变量 N8N_DEFAULT_LOCALE=zh-CN，自行咨询AI设置方法
6. 重启 n8n 服务

# 原理
> editor-ui是支持i18n的，但是未开放语言包

1. 手动添加 zh-CN.json 到 editor-ui `/src/plugins/i18n/locales/` 里面，然后重新编译
2. 环境里面设置语言即可正常使用中文  `N8N_DEFAULT_LOCALE=zh-CN`

# 参考n8n官方i18n介绍
https://github.com/n8n-io/n8n/blob/master/packages/frontend/%40n8n/i18n/docs/README.md

# 语言环境变量
> 其他语言参考：https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language

N8N_DEFAULT_LOCALE=zh-CN


# 广告
本项目 CDN 加速及安全防护由 Tencent EdgeOne 赞助：EdgeOne 提供长期有效的免费套餐，包含不限量的流量和请求，覆盖中国大陆节点，且无任何超额收费，感兴趣的朋友可以点击下面的链接领取
[亚洲最佳CDN、边缘和安全解决方案 - Tencent EdgeOne](https://edgeone.ai/zh?from=github)
