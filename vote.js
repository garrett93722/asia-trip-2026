import { firebaseConfig, firebaseReady } from "./firebase-config.js?v=20260718-3";

const data = window.votePageData;
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const state = {
  identity: localStorage.getItem("trip-voter-name") || "",
  filter: "全部",
  pollVotes: [],
  attractionVotes: [],
  comments: [],
  selectedAttraction: null,
  pendingAction: null,
  cloud: false,
  db: null,
  auth: null,
  firebase: {}
};

const identityKey = (value) =>
  value.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^\p{L}\p{N}-]/gu, "");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function updateIdentityUI() {
  $("#identityButton").textContent = state.identity ? `身份：${state.identity}` : "设置身份";
  $("#commentIdentityHint").textContent = state.identity ? `将以“${state.identity}”发布` : "请先设置身份";
}

function openModal(name) {
  const modal = name === "identity" ? $("#identityModal") : $("#attractionModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(name) {
  const modal = name === "identity" ? $("#identityModal") : $("#attractionModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function requireIdentity(action) {
  if (state.identity) return action();
  state.pendingAction = action;
  $("#identityInput").value = "";
  openModal("identity");
  setTimeout(() => $("#identityInput").focus(), 80);
}

function pollVoteFor(pollId, identity = state.identity) {
  return state.pollVotes.find(v => v.pollId === pollId && v.voter === identity);
}

function pollOptionVoters(pollId, optionId) {
  return state.pollVotes
    .filter(v => v.pollId === pollId && v.optionId === optionId)
    .map(v => v.voter);
}

function attractionVoteFor(attractionId, identity = state.identity) {
  return state.attractionVotes.find(v => v.attractionId === attractionId && v.voter === identity);
}

function attractionCounts(attractionId) {
  const votes = state.attractionVotes.filter(v => v.attractionId === attractionId);
  return {
    want: votes.filter(v => v.choice === "want").length,
    neutral: votes.filter(v => v.choice === "neutral").length,
    skip: votes.filter(v => v.choice === "skip").length
  };
}

function commentsFor(attractionId) {
  return state.comments
    .filter(c => c.attractionId === attractionId)
    .sort((a, b) => (b.createdAtMs || 0) - (a.createdAtMs || 0));
}

function renderPolls() {
  $("#pollList").innerHTML = data.polls.map(poll => {
    const mine = pollVoteFor(poll.id);
    return `
      <section class="poll-section">
        <div class="poll-heading">
          <div>
            <span class="poll-city">${poll.city}</span>
            <h3>${poll.title}</h3>
          </div>
          <p>${poll.description}</p>
        </div>
        <div class="plan-grid">
          ${poll.options.map(option => {
            const voters = pollOptionVoters(poll.id, option.id);
            const selected = mine?.optionId === option.id;
            return `
              <article class="plan-card ${option.id}">
                <div class="plan-card-head">
                  <div class="plan-title-row">
                    <div>
                      <span class="plan-badge">${option.label}</span>
                      <h3>${option.title}</h3>
                    </div>
                    <span class="plan-badge">${voters.length} 票</span>
                  </div>
                  <p class="plan-subtitle">${option.subtitle}</p>
                  <div class="plan-cost">${option.estimate}</div>
                </div>
                <ul class="plan-option-days">
                  ${option.days.map(item => `<li>${item}</li>`).join("")}
                </ul>
                <div class="plan-vote-area">
                  <div class="plan-voters">${voters.length ? `已投：${voters.map(escapeHtml).join("、")}` : "还没有人投票"}</div>
                  <button class="plan-vote-button ${selected ? "selected" : ""}"
                    data-poll="${poll.id}" data-option="${option.id}" type="button">
                    ${selected ? "✓ 我的选择" : `投给${option.label}`}
                  </button>
                </div>
              </article>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }).join("");

  $$(".plan-vote-button").forEach(button => {
    button.addEventListener("click", () => requireIdentity(() =>
      savePollVote(button.dataset.poll, button.dataset.option)
    ));
  });
}

function renderFilters() {
  const filters = [...data.destinationFilters, "我还没投"];
  $("#attractionFilters").innerHTML = filters.map(filter => `
    <button class="filter-button ${state.filter === filter ? "active" : ""}" data-filter="${filter}" type="button">
      ${filter}
    </button>
  `).join("");

  $$(".filter-button").forEach(button => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      renderFilters();
      renderAttractions();
    });
  });
}

function voteButtonsHtml(attractionId, selectedChoice = "") {
  const counts = attractionCounts(attractionId);
  const labels = {
    want: ["想去", "＋"],
    neutral: ["都可以", "○"],
    skip: ["不想去", "－"]
  };
  return ["want", "neutral", "skip"].map(choice => `
    <button class="vote-choice ${choice} ${selectedChoice === choice ? "active" : ""}"
      data-attraction="${attractionId}" data-choice="${choice}" type="button">
      <span>${labels[choice][1]} ${labels[choice][0]}</span>
      <span class="vote-count">${counts[choice]} 人</span>
    </button>
  `).join("");
}

function filteredAttractions() {
  return data.attractions.filter(item => {
    if (state.filter === "全部") return true;
    if (state.filter === "我还没投") return !attractionVoteFor(item.id);
    return item.city === state.filter;
  });
}

function renderAttractions() {
  const items = filteredAttractions();
  $("#attractionGrid").innerHTML = items.map(item => {
    const mine = attractionVoteFor(item.id);
    const commentCount = commentsFor(item.id).length;
    return `
      <article class="attraction-card">
        <button class="attraction-image-button" data-open-attraction="${item.id}" type="button">
          <img src="${item.image}" alt="${item.chinese}" loading="lazy">
          <span class="image-action">看大图 · 留言</span>
        </button>
        <div class="attraction-body">
          <span class="city-chip">${item.city}</span>
          <h3>${item.chinese}</h3>
          <div class="english-name">${item.name}</div>
          <p class="attraction-note">${item.note}</p>
          <div class="meta-row">
            <span>${item.time}</span>
            <span>${item.cost}</span>
          </div>
          <div class="vote-buttons">${voteButtonsHtml(item.id, mine?.choice || "")}</div>
          <div class="card-footer">
            <button class="comment-open-button" data-open-attraction="${item.id}" type="button">
              留言 ${commentCount ? `(${commentCount})` : ""}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  const votedCount = data.attractions.filter(item => attractionVoteFor(item.id)).length;
  $("#progressSummary").textContent = state.identity
    ? `${state.identity} 已对 ${votedCount} / ${data.attractions.length} 个景点表态`
    : "设置身份后开始投票";

  $$("[data-open-attraction]").forEach(button => {
    button.addEventListener("click", () => openAttraction(button.dataset.openAttraction));
  });
  bindAttractionVoteButtons($("#attractionGrid"));
}

function bindAttractionVoteButtons(container) {
  container.querySelectorAll(".vote-choice").forEach(button => {
    button.addEventListener("click", () => requireIdentity(() =>
      saveAttractionVote(button.dataset.attraction, button.dataset.choice)
    ));
  });
}

function openAttraction(attractionId) {
  const item = data.attractions.find(x => x.id === attractionId);
  if (!item) return;
  state.selectedAttraction = attractionId;
  $("#modalAttractionImage").src = item.image;
  $("#modalAttractionImage").alt = item.chinese;
  $("#modalAttractionEnglish").textContent = `${item.city} · ${item.name}`;
  $("#modalAttractionName").textContent = item.chinese;
  $("#modalAttractionNote").textContent = item.note;
  $("#modalAttractionMeta").innerHTML = `<span>${item.time}</span><span>${item.cost}</span>`;
  renderModalAttractionVote();
  renderModalComments();
  openModal("attraction");
}

function renderModalAttractionVote() {
  if (!state.selectedAttraction) return;
  const mine = attractionVoteFor(state.selectedAttraction);
  $("#modalVoteButtons").innerHTML = voteButtonsHtml(state.selectedAttraction, mine?.choice || "");
  bindAttractionVoteButtons($("#modalVoteButtons"));
}

function formatTime(value) {
  if (!value) return "刚刚";
  try {
    return new Intl.DateTimeFormat("zh-CN", {
      month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit"
    }).format(new Date(value));
  } catch {
    return "";
  }
}

function renderModalComments() {
  if (!state.selectedAttraction) return;
  const comments = commentsFor(state.selectedAttraction);
  $("#commentCount").textContent = `${comments.length} 条`;
  $("#commentList").innerHTML = comments.length ? comments.map(comment => `
    <div class="comment-item">
      <div class="comment-item-head">
        <span class="comment-voter">${escapeHtml(comment.voter)}</span>
        <span class="comment-time">${formatTime(comment.createdAtMs)}</span>
      </div>
      <p class="comment-text">${escapeHtml(comment.text)}</p>
    </div>
  `).join("") : `<div class="empty-comments">还没有留言，可以第一个说说想法。</div>`;
}


function setCloudFailure(title, error) {
  state.cloud = false;
  $("#setupWarning").hidden = false;
  $("#syncStatus").textContent = title;
  $("#syncStatus").classList.remove("online");
  $("#syncStatus").classList.add("offline");

  const detail = $("#cloudErrorDetail");
  if (detail) {
    const code = error?.code ? `错误代码：${error.code}` : "";
    const message = error?.message ? `错误信息：${error.message}` : "";
    const network = navigator.onLine ? "浏览器显示当前有网络。" : "浏览器显示当前处于离线状态。";
    detail.textContent = [network, code, message].filter(Boolean).join(" ");
  }
}

async function initFirebase() {
  $("#setupWarning").hidden = true;
  $("#syncStatus").textContent = "正在连接云端…";
  $("#syncStatus").classList.remove("online", "offline");

  if (!firebaseReady) {
    setCloudFailure("配置未加载", new Error("firebase-config.js 仍是旧缓存或配置不完整"));
    loadLocalFallback();
    return;
  }

  try {
    const [appModule, authModule, firestoreModule] = await Promise.all([
      import("https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js"),
      import("https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js")
    ]);

    const app = appModule.initializeApp(firebaseConfig);
    state.auth = authModule.getAuth(app);

    // Explicitly enable transport auto-detection for mobile networks and proxies.
    state.db = firestoreModule.initializeFirestore(app, {
      experimentalAutoDetectLongPolling: true
    });

    await authModule.signInAnonymously(state.auth);

    state.cloud = true;
    state.firebase = { ...firestoreModule };
    $("#syncStatus").textContent = "云端已连接";
    $("#syncStatus").classList.remove("offline");
    $("#syncStatus").classList.add("online");
    $("#setupWarning").hidden = true;
    subscribeCloud();
  } catch (error) {
    console.error("Firebase initialization failed:", error);
    setCloudFailure("云端未连接", error);
    loadLocalFallback();
  }
}

function loadLocalFallback() {
  state.pollVotes = JSON.parse(localStorage.getItem("trip-poll-votes") || "[]");
  state.attractionVotes = JSON.parse(localStorage.getItem("trip-attraction-votes") || "[]");
  state.comments = JSON.parse(localStorage.getItem("trip-comments") || "[]");
  renderAll();
}

function subscribeCloud() {
  const { collection, onSnapshot } = state.firebase;
  const handleListenerError = (error) => {
    console.error("Firestore listener failed:", error);
    setCloudFailure("云端监听失败", error);
  };

  onSnapshot(collection(state.db, "pollVotes"), snapshot => {
    state.pollVotes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    renderPolls();
  }, handleListenerError);

  onSnapshot(collection(state.db, "attractionVotes"), snapshot => {
    state.attractionVotes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    renderAttractions();
    renderModalAttractionVote();
  }, handleListenerError);

  onSnapshot(collection(state.db, "comments"), snapshot => {
    state.comments = snapshot.docs.map(doc => {
      const value = doc.data();
      return {
        id: doc.id,
        ...value,
        createdAtMs: value.createdAt?.toMillis?.() || value.createdAtMs || Date.now()
      };
    });
    renderAttractions();
    renderModalComments();
  }, handleListenerError);
}

async function savePollVote(pollId, optionId) {
  if (!state.identity) return;

  if (!state.cloud) {
    state.pollVotes = state.pollVotes.filter(v => !(v.voter === state.identity && v.pollId === pollId));
    state.pollVotes.push({ voter: state.identity, pollId, optionId, updatedAtMs: Date.now() });
    localStorage.setItem("trip-poll-votes", JSON.stringify(state.pollVotes));
    renderPolls();
    showToast("已保存在当前设备（尚未连接云端）");
    return;
  }

  const { doc, setDoc, serverTimestamp } = state.firebase;
  const id = `${pollId}_${identityKey(state.identity)}`;
  await setDoc(doc(state.db, "pollVotes", id), {
    voter: state.identity,
    pollId,
    optionId,
    updatedAt: serverTimestamp()
  });
  showToast("方案投票已更新");
}

async function saveAttractionVote(attractionId, choice) {
  if (!state.identity) return;

  if (!state.cloud) {
    state.attractionVotes = state.attractionVotes.filter(
      v => !(v.voter === state.identity && v.attractionId === attractionId)
    );
    state.attractionVotes.push({ voter: state.identity, attractionId, choice, updatedAtMs: Date.now() });
    localStorage.setItem("trip-attraction-votes", JSON.stringify(state.attractionVotes));
    renderAttractions();
    renderModalAttractionVote();
    showToast("已保存在当前设备（尚未连接云端）");
    return;
  }

  const { doc, setDoc, serverTimestamp } = state.firebase;
  const id = `${attractionId}_${identityKey(state.identity)}`;
  await setDoc(doc(state.db, "attractionVotes", id), {
    voter: state.identity,
    attractionId,
    choice,
    updatedAt: serverTimestamp()
  });
  showToast("景点态度已更新");
}

async function saveComment(text) {
  if (!state.identity || !state.selectedAttraction) return;

  if (!state.cloud) {
    state.comments.push({
      voter: state.identity,
      attractionId: state.selectedAttraction,
      text,
      createdAtMs: Date.now()
    });
    localStorage.setItem("trip-comments", JSON.stringify(state.comments));
    renderAttractions();
    renderModalComments();
    showToast("留言保存在当前设备（尚未连接云端）");
    return;
  }

  const { collection, addDoc, serverTimestamp } = state.firebase;
  await addDoc(collection(state.db, "comments"), {
    voter: state.identity,
    attractionId: state.selectedAttraction,
    text,
    createdAt: serverTimestamp()
  });
  showToast("留言已发布");
}

function renderAll() {
  $("#currencyNote").textContent = data.currencyNote;
  renderPolls();
  renderFilters();
  renderAttractions();
  updateIdentityUI();
}


$("#retryCloudButton")?.addEventListener("click", () => {
  $("#cloudErrorDetail").textContent = "";
  initFirebase();
});

$("#identityButton").addEventListener("click", () => {
  $("#identityInput").value = state.identity;
  openModal("identity");
});

$("#identityForm").addEventListener("submit", event => {
  event.preventDefault();
  const value = $("#identityInput").value.trim();
  if (!value) return;
  state.identity = value.slice(0, 16);
  localStorage.setItem("trip-voter-name", state.identity);
  updateIdentityUI();
  closeModal("identity");
  renderAll();
  showToast(`身份已设为：${state.identity}`);
  const action = state.pendingAction;
  state.pendingAction = null;
  if (action) action();
});

$("#commentForm").addEventListener("submit", event => {
  event.preventDefault();
  const text = $("#commentInput").value.trim();
  if (!text) return showToast("请先写下留言");
  requireIdentity(async () => {
    await saveComment(text);
    $("#commentInput").value = "";
  });
});

$$("[data-close]").forEach(element => {
  element.addEventListener("click", () => closeModal(element.dataset.close));
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal("identity");
    closeModal("attraction");
  }
});

renderAll();
initFirebase();
