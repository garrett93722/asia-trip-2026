# 旅行投票系统配置

推荐直接打开网站中的 `firebase-setup.html`，里面是适合逐步操作的图文式说明。

核心流程：

1. 创建 Firebase 项目并注册 Web 应用。
2. 将控制台给出的 `firebaseConfig` 粘贴到 `firebase-config.js`。
3. Authentication 中启用 Anonymous 匿名登录。
4. 创建 Cloud Firestore。
5. 把 `firestore.rules` 全部复制到 Firestore Rules 并发布。
6. 上传 V6 全部文件到 GitHub 仓库根目录。
7. 用两台设备测试实时投票和留言。

投票地址：

`https://garrett93722.github.io/asia-trip-2026/vote.html`
