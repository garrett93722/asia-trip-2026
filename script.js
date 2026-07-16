(() => {
  const data = window.tripData;
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  const cityMap = Object.fromEntries(data.cities.map(city => [city.id, city]));

  function setText() {
    $("#tripSubtitle").textContent = data.subtitle;
    $("#memberCount").textContent = `${data.members.length} 人`;
    $("#cityCount").textContent = `${data.cities.length} 城`;
    $("#lastUpdated").textContent = data.lastUpdated || "未标注";
  }

  function renderCountdown() {
    const el = $("#countdown");
    if (!data.startDate) {
      el.textContent = "日期待补充";
      return;
    }
    const start = new Date(`${data.startDate}T00:00:00`);
    const now = new Date();
    const diff = Math.ceil((start - now) / 86400000);
    if (Number.isNaN(diff)) {
      el.textContent = "日期待补充";
    } else if (diff > 0) {
      el.textContent = `${diff} 天`;
    } else if (diff === 0) {
      el.textContent = "今天出发";
    } else {
      el.textContent = "旅程已开始";
    }
  }

  function renderRoute() {
    $("#routeTimeline").innerHTML = data.cities.map((city, index) => `
      <article class="route-card">
        <span class="route-index">0${index + 1}</span>
        <h3 class="route-city">${city.name}</h3>
        <div class="route-dates">${city.dates}</div>
        <span class="pill">${city.status}</span>
      </article>
    `).join("");
  }

  let currentFilter = "all";

  function renderFilters() {
    const filters = [{ id: "all", name: "全程" }, ...data.cities];
    $("#cityFilters").innerHTML = filters.map(item => `
      <button class="filter-btn ${item.id === currentFilter ? "active" : ""}" data-city="${item.id}" type="button">
        ${item.name}
      </button>
    `).join("");

    $$(".filter-btn").forEach(button => {
      button.addEventListener("click", () => {
        currentFilter = button.dataset.city;
        renderFilters();
        renderItinerary();
      });
    });
  }

  function eventButtons(event) {
    const buttons = [];
    if (event.maps) {
      buttons.push(`<a class="mini-link" href="${event.maps}" target="_blank" rel="noopener">地图导航</a>`);
    }
    return buttons.length ? `<div class="event-actions">${buttons.join("")}</div>` : "";
  }

  function renderItinerary() {
    const list = data.itinerary.filter(day => currentFilter === "all" || day.city === currentFilter);
    if (!list.length) {
      $("#itineraryList").innerHTML = `<div class="empty-state">这个城市的行程还没有录入。</div>`;
      return;
    }

    $("#itineraryList").innerHTML = list.map((day, index) => {
      const city = cityMap[day.city];
      return `
        <article class="day-card ${index === 0 ? "open" : ""}" data-date="${day.date}">
          <button class="day-summary" type="button" aria-expanded="${index === 0}">
            <span class="day-date">${day.displayDate}</span>
            <span>
              <span class="day-title">${day.title}</span>
              <span class="day-city">${city?.name || ""} · ${day.summary || ""}</span>
            </span>
            <span class="day-chevron">⌄</span>
          </button>
          <div class="day-content">
            <div class="event-list">
              ${day.events.map(event => `
                <div class="event">
                  <div class="event-time">${event.time}</div>
                  <div>
                    <div class="event-title">${event.title}</div>
                    <div class="event-meta">${event.meta || ""}</div>
                    ${eventButtons(event)}
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </article>
      `;
    }).join("");

    $$(".day-summary").forEach(button => {
      button.addEventListener("click", () => {
        const card = button.closest(".day-card");
        card.classList.toggle("open");
        button.setAttribute("aria-expanded", card.classList.contains("open"));
      });
    });
  }

  function renderStack(target, items) {
    $(target).innerHTML = items.map(item => `
      <div class="stack-item">
        <strong>${item.title}</strong>
        <span>${item.detail}</span>
        ${item.warning ? `<span class="hotel-warning">⚠ ${item.warning}</span>` : ""}
      </div>
    `).join("");
  }

  function checklistKey(category, item) {
    return `trip-check:${category}:${item}`;
  }

  function renderChecklist() {
    $("#checklistGrid").innerHTML = data.checklist.map(group => `
      <article class="checklist-card">
        <h3>${group.category}</h3>
        ${group.items.map(item => {
          const key = checklistKey(group.category, item);
          const checked = localStorage.getItem(key) === "1";
          return `
            <label class="check-item ${checked ? "done" : ""}">
              <input type="checkbox" data-key="${encodeURIComponent(key)}" ${checked ? "checked" : ""}>
              <span>${item}</span>
            </label>
          `;
        }).join("")}
      </article>
    `).join("");

    $$("#checklistGrid input[type='checkbox']").forEach(input => {
      input.addEventListener("change", () => {
        const key = decodeURIComponent(input.dataset.key);
        localStorage.setItem(key, input.checked ? "1" : "0");
        input.closest(".check-item").classList.toggle("done", input.checked);
        updateProgress();
      });
    });

    updateProgress();
  }

  function updateProgress() {
    const checks = $$("#checklistGrid input[type='checkbox']");
    const completed = checks.filter(input => input.checked).length;
    const total = checks.length;
    $("#progressText").textContent = `${completed} / ${total}`;
    $("#progressBar").style.width = total ? `${(completed / total) * 100}%` : "0%";
  }

  function renderGuides() {
    $("#cityGuideGrid").innerHTML = data.cities.map(city => `
      <article class="guide-card">
        <p class="eyebrow">${city.englishName.toUpperCase()}</p>
        <h3>${city.name}</h3>
        <ul>${city.guide.map(item => `<li>${item}</li>`).join("")}</ul>
      </article>
    `).join("");
  }


  function renderTravelerGroups() {
    const target = $("#travelerGroupGrid");
    if (!target || !data.travelerGroups) return;
    target.innerHTML = data.travelerGroups.map(group => `
      <article class="info-card group-card">
        <div class="card-title-row">
          <div>
            <p class="eyebrow">${group.flight}</p>
            <h3>${group.title}</h3>
          </div>
          <strong class="group-count">${group.count}</strong>
        </div>
        <div class="group-route">
          <span>${group.route}</span>
          <span>${group.timing}</span>
        </div>
      </article>
    `).join("");
  }

  function renderAlerts() {
    const target = $("#alertGrid");
    if (!target || !data.alerts) return;
    target.innerHTML = data.alerts.map((item, index) => `
      <article class="alert-card">
        <span class="alert-label">待确认 ${index + 1}</span>
        <h3>${item.title}</h3>
        <p>${item.detail}</p>
      </article>
    `).join("");
  }

  function initTheme() {
    const saved = localStorage.getItem("trip-theme");
    if (saved === "dark") document.body.classList.add("dark");
    updateThemeIcon();

    $("#themeToggle").addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem("trip-theme", document.body.classList.contains("dark") ? "dark" : "light");
      updateThemeIcon();
    });
  }

  function updateThemeIcon() {
    $("#themeToggle").textContent = document.body.classList.contains("dark") ? "☀" : "☾";
  }

  function bindTodayButton() {
    $("#todayBtn").addEventListener("click", () => {
      const today = new Date().toISOString().slice(0, 10);
      const card = document.querySelector(`.day-card[data-date="${today}"]`);
      if (!card) {
        document.querySelector("#itinerary").scrollIntoView({ behavior: "smooth" });
        return;
      }
      card.classList.add("open");
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  setText();
  renderCountdown();
  renderRoute();
  renderTravelerGroups();
  renderAlerts();
  renderFilters();
  renderItinerary();
  renderStack("#flightList", data.flights);
  renderStack("#hotelList", data.hotels);
  renderChecklist();
  renderGuides();
  initTheme();
  bindTodayButton();
})();
