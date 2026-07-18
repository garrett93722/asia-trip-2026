// 把 Firebase 控制台提供的 firebaseConfig 完整复制到这里。
// 这不是管理员私钥；真正的读写权限由 firestore.rules 控制。
export const firebaseConfig = {
  apiKey: "REPLACE_ME",
  authDomain: "REPLACE_ME.firebaseapp.com",
  projectId: "REPLACE_ME",
  storageBucket: "REPLACE_ME.firebasestorage.app",
  messagingSenderId: "REPLACE_ME",
  appId: "REPLACE_ME"
};

export const firebaseReady =
  firebaseConfig.apiKey !== "REPLACE_ME" &&
  firebaseConfig.projectId !== "REPLACE_ME";
