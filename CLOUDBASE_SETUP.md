# CloudBase 国内同步配置

环境 ID：`asia-trip-2026-d7g1rngaqcd47c8fb`  
地域：`ap-shanghai`  
数据库集合：`tripVotes`

## 操作

1. 身份认证中启用“匿名登录”。
2. 文档型数据库中新建集合 `tripVotes`。
3. 给该集合设置自定义安全规则：

```json
{
  "read": true,
  "create": "auth.uid != null",
  "update": "auth.uid != null",
  "delete": false
}
```

4. 静态网站托管中选择“本地项目部署”，上传V7文件。
5. 确保部署根目录直接包含 `index.html`、`vote.html`。
6. 打开分配域名下的 `/vote.html?v=20260718-cb1`，应显示“腾讯云已连接”。
7. 使用两台设备测试投票和留言同步。
