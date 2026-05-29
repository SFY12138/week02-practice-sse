# SSE 演示项目

这是一个完整的 SSE (Server-Sent Events) 演示项目，展示了如何建立持续的请求去接受返回。

## 项目结构

```
sse/
├── server.js              # 基础服务端代码
├── index.html             # 基础前端代码
├── server-advanced.js     # 高级服务端代码（支持多种 event 类型）
├── index-advanced.html    # 高级前端代码
└── package.json           # 项目依赖配置
```

## 安装依赖

```bash
npm install
```

## 运行项目

### 基础示例

1. 启动服务端：
```bash
npm start
```

2. 在浏览器中打开 [index.html](file:///c:\Users\s2950\Desktop\WPS\3.20\sse\index.html)

### 高级示例（多种 event 类型）

1. 启动服务端：
```bash
npm run start:advanced
```

2. 在浏览器中打开 [index-advanced.html](file:///c:\Users\s2950\Desktop\WPS\3.20\sse\index-advanced.html)

## 功能说明

### 基础示例
- 服务端每秒向前端发送一个字符
- 前端逐步拼接显示 "金山办公WPS"
- 支持手动断开连接

### 高级示例
- 同一接口通过不同 event 类型承载不同功能
- 支持三种消息类型：未读消息、订单更新、系统通知
- 每种消息类型有独立的显示区域和动画效果

## 技术要点

### 服务端
- 设置 `Content-Type: text/event-stream; charset=utf-8`
- 使用 `res.write()` 持续发送消息
- 消息格式：`data: 内容\n\n`
- 监听 `close` 事件清理定时器

### 前端
- 创建 `EventSource` 对象连接服务端
- 使用 `onmessage` 监听消息
- 使用 `onopen` 监听连接状态
- 使用 `onerror` 监听错误
- 使用 `close()` 方法断开连接

### 最佳实践
- 同一接口通过不同 event 类型实现功能复用
- 组件卸载时记得关闭连接
- 服务端断开后浏览器会自动重连
