window.votePageData = {
  currencyNote: "人民币换算仅作预算参考：约 100 THB≈¥20，S$1≈¥5.25，HK$1≈¥0.87，MOP1≈¥0.84。最终以购票和支付页面为准。",

  polls: [
    {
      id: "bangkok-plan",
      city: "曼谷",
      title: "曼谷总体路线",
      description: "两版共有朱拉隆功美食街、郑王庙、ICONSIAM、Talat Noi / Song Wat 与唐人街。",
      options: [
        {
          id: "classic",
          label: "方案 A",
          title: "经典初访版",
          subtitle: "加入 Jim Thompson House 和大皇宫，代表性更完整，但早起、步行和门票更多。",
          estimate: "固定门票与交通约 1300–1550 THB / 人（约¥260–310）",
          days: [
            "7月27日：Jim Thompson House＋Siam＋朱拉隆功美食街",
            "7月28日：大皇宫＋郑王庙＋ICONSIAM",
            "7月29日：Talat Noi＋Song Wat＋唐人街",
            "7月30日：购物／按摩＋机场"
          ]
        },
        {
          id: "relaxed",
          label: "方案 B",
          title: "松弛出片版",
          subtitle: "减少收费景点和早起，Jim Thompson 与 BACC 可按当天体力决定。",
          estimate: "固定门票与交通约 660–910 THB / 人（约¥132–182）",
          days: [
            "7月27日：Siam＋朱拉隆功美食街；Jim Thompson 待定",
            "7月28日：河边午餐＋泰服郑王庙＋ICONSIAM",
            "7月29日：BACC（可删）＋Talat Noi＋Song Wat＋唐人街",
            "7月30日：购物／按摩＋机场"
          ]
        }
      ]
    },
    {
      id: "singapore-plan",
      city: "新加坡",
      title: "8月4日完整日主线",
      description: "不去环球影城；两版都安排哈芝巷、酒店休息，并与8月3日滨海湾花园衔接。",
      options: [
        {
          id: "botanic",
          label: "方案 A",
          title: "植物园松弛版",
          subtitle: "更符合休闲和拍照需求，免费为主；国家兰花园单独可选。",
          estimate: "植物园免费；兰花园可选 S$15 / 人（约¥79）",
          days: [
            "上午：新加坡植物园，兰花园可选",
            "下午：回酒店休息",
            "傍晚：哈芝巷／甘榜格南",
            "晚上：鱼尾狮＋滨海湾＋Spectra"
          ]
        },
        {
          id: "night-safari",
          label: "方案 B",
          title: "夜间动物园体验版",
          subtitle: "体验更独特，但四人门票和往返交通较高，晚间拍照价值相对有限。",
          estimate: "S$58 / 人（约¥305）；四人约¥1218，往返叫车另计",
          days: [
            "上午：哈芝巷／甘榜格南",
            "下午：回酒店休息",
            "17:15左右：叫车前往夜间动物园",
            "晚上：游览车＋表演＋1–2条步行路线"
          ]
        }
      ]
    },
    {
      id: "hongkong-plan",
      city: "香港",
      title: "8月8日第二天路线",
      description: "8月7日维港夜景为共同路线；8月8日晚均返回深圳南山。",
      options: [
        {
          id: "disney",
          label: "方案 A",
          title: "香港迪士尼版",
          subtitle: "主题乐园体验完整，但价格高、步行排队多；看完夜间表演后返深会很晚。",
          estimate: "门票约 HK$669–939 / 人（约¥582–817），餐饮、寄存、返深交通另计",
          days: [
            "上午退房并处理行李",
            "约10:00入园，全天游玩",
            "不看夜间表演：较从容返回深圳",
            "看完夜间表演：需准备深夜跨境方案"
          ]
        },
        {
          id: "city",
          label: "方案 B",
          title: "太平山＋中环城市版",
          subtitle: "香港本地城市体验更完整，预算低很多，晚上返回南山更从容。",
          estimate: "山顶缆车往返约 HK$116 / 人（约¥101）；观景台可选",
          days: [
            "上午：山顶缆车＋太平山",
            "中午：中环午餐",
            "下午：大馆／半山扶梯／PMQ／叮叮车",
            "傍晚：取行李，经西九龙返回深圳"
          ]
        }
      ]
    }
  ],

  destinationFilters: ["全部", "曼谷", "普吉岛", "新加坡", "澳门", "香港"],

  attractions: [
    {
      id: "jim-thompson", city: "曼谷", name: "Jim Thompson House", chinese: "吉姆·汤普森之家",
      note: "A版固定、B版待定。泰式柚木建筑和绿植庭院，适合安静人像；对历史和建筑兴趣不强的人可能觉得内容不多。",
      time: "约1.5小时", cost: "250 THB / 人（约¥50）", image: "assets/vote/bangkok-jim.svg"
    },
    {
      id: "siam-bacc", city: "曼谷", name: "Siam & BACC", chinese: "Siam商圈与BACC",
      note: "Siam两版都保留；BACC仅B版可选。室内有空调，适合雨天、逛街、城市照片和恢复体力。",
      time: "2–4小时", cost: "公共区域免费", image: "assets/vote/bangkok-siam.svg"
    },
    {
      id: "banthat-thong", city: "曼谷", name: "Banthat Thong Road", chinese: "朱拉隆功美食街",
      note: "两版共同项目。建议17:45左右到，四人共享正餐、小吃和甜品，不为单家网红店排太久。",
      time: "2–2.5小时", cost: "建议350–650 THB / 人（约¥70–130）", image: "assets/vote/bangkok-food.svg"
    },
    {
      id: "grand-palace", city: "曼谷", name: "The Grand Palace", chinese: "曼谷大皇宫",
      note: "仅A版。第一次到曼谷的代表性景点，但需要早起、严格着装，客流和步行量较大。",
      time: "约2小时", cost: "500 THB / 人（约¥100）", image: "assets/vote/bangkok-palace.svg"
    },
    {
      id: "wat-arun", city: "曼谷", name: "Wat Arun", chinese: "郑王庙",
      note: "两版核心拍照景点。B版预留更多泰服、妆发和拍摄时间。",
      time: "约2.5小时", cost: "200 THB / 人（约¥40），泰服另计", image: "assets/vote/bangkok-watarun.svg"
    },
    {
      id: "iconsiam", city: "曼谷", name: "ICONSIAM & Chao Phraya", chinese: "ICONSIAM与湄南河",
      note: "两版共同项目。适合寺庙后吃饭、吹空调和看夜景，下雨也不影响主要体验。",
      time: "2–3小时", cost: "公共区域免费", image: "assets/vote/bangkok-river.svg"
    },
    {
      id: "talat-noi", city: "曼谷", name: "Talat Noi & Song Wat", chinese: "哒叻仔与嵩越路",
      note: "老建筑、涂鸦、骑楼和咖啡馆，适合随走随拍；不要列太多固定打卡点。",
      time: "3–3.5小时", cost: "免费，咖啡餐饮另计", image: "assets/vote/bangkok-oldtown.svg"
    },
    {
      id: "yaowarat", city: "曼谷", name: "Yaowarat Road", chinese: "曼谷唐人街",
      note: "以晚餐、街头小吃和霓虹夜景为主，不与高空观景台叠加。",
      time: "2–2.5小时", cost: "免费，餐饮另计", image: "assets/vote/bangkok-chinatown.svg"
    },

    {
      id: "sawasdee-village", city: "普吉岛", name: "Sawasdee Village", chinese: "卡塔泳池酒店",
      note: "已确定。7月31日下午留时间体验直通泳池套房和泰式园林，避免花了住宿费却没有真正享受酒店。",
      time: "约1–2小时", cost: "已预订住宿", image: "assets/vote/phuket-hotel.svg"
    },
    {
      id: "cliff-cafe", city: "普吉岛", name: "A Blanket & A Pillow", chinese: "悬崖咖啡馆落日",
      note: "已确定。7月31日16:30左右到，先点单，再拍天亮、落日和亮灯后的照片。",
      time: "2.5–3小时", cost: "约150–300 THB / 人（约¥30–60）", image: "assets/vote/phuket-cafe.svg"
    },
    {
      id: "racha-coral", city: "普吉岛", name: "Racha & Coral Islands", chinese: "皇帝岛＋珊瑚岛",
      note: "已确定8月1日出海。套餐重点核对船型、卡塔接送、国家公园费、船上人数和海况退改。",
      time: "全天", cost: "以携程所选套餐为准", image: "assets/vote/phuket-islands.svg"
    },
    {
      id: "phuket-shooting", city: "普吉岛", name: "Phuket Shooting Range", chinese: "老牌普吉射击场",
      note: "已确定选择82/35 Moo 4, Patak Road的老牌场地，不去芭东。需确认枪型、发数、安全装备和拍照规则。",
      time: "1.5–2小时", cost: "以携程所选套餐为准", image: "assets/vote/phuket-shooting.svg"
    },
    {
      id: "phuket-oldtown", city: "普吉岛", name: "Old Town & Lard Yai", chinese: "普吉老城＋周日夜市",
      note: "8月2日射击后前往。下午先在咖啡馆休息和拍建筑，16:00后逛周日夜市，19:00左右离开。",
      time: "4–4.5小时", cost: "免费，餐饮购物另计", image: "assets/vote/phuket-oldtown.svg"
    },

    {
      id: "gbtb", city: "新加坡", name: "Gardens by the Bay", chinese: "滨海湾花园双馆",
      note: "8月3日室外花园和超级树为固定项；Flower Dome＋Cloud Forest双馆是否买票待投票。",
      time: "双馆约2小时", cost: "S$46 / 人（约¥242），四人约¥966", image: "assets/vote/sg-gardens.svg"
    },
    {
      id: "botanic-gardens", city: "新加坡", name: "Singapore Botanic Gardens", chinese: "新加坡植物园",
      note: "松弛、免费、适合绿植人像。若同时去双馆，植物主题会有一定重复。",
      time: "2.5–3.5小时", cost: "主体免费；兰花园S$15（约¥79）", image: "assets/vote/sg-botanic.svg"
    },
    {
      id: "night-safari", city: "新加坡", name: "Night Safari", chinese: "新加坡夜间动物园",
      note: "体验独特，含园内游览车；位置远、回来晚，禁止闪光灯，普通手机夜间拍照效果有限。",
      time: "含交通约5–6小时", cost: "S$58 / 人（约¥305），四人约¥1218", image: "assets/vote/sg-night.svg"
    },
    {
      id: "kampong-glam", city: "新加坡", name: "Kampong Glam & Haji Lane", chinese: "甘榜格南与哈芝巷",
      note: "两版都可安排。苏丹回教堂、彩色店屋和街头涂鸦适合拍照，离酒店较近。",
      time: "2–2.5小时", cost: "免费", image: "assets/vote/sg-haji.svg"
    },
    {
      id: "marina-bay", city: "新加坡", name: "Merlion & Marina Bay", chinese: "鱼尾狮与滨海湾",
      note: "城市版晚上安排鱼尾狮、滨海湾和Spectra；如选择夜间动物园，主要滨海湾体验放在8月3日。",
      time: "2–3小时", cost: "公共区域与灯光秀免费", image: "assets/vote/sg-bay.svg"
    },

    {
      id: "macau-history", city: "澳门", name: "Historic Centre of Macao", chinese: "澳门历史城区",
      note: "已确定。大三巴、恋爱巷、老街、圣玫瑰堂外观与议事亭前地，按下坡方向减少体力消耗。",
      time: "2.5–3小时", cost: "公共区域免费", image: "assets/vote/macau-history.svg"
    },
    {
      id: "macau-cotai", city: "澳门", name: "Cotai Resorts", chinese: "路氹酒店区",
      note: "已确定下午前往。巴黎人、伦敦人、威尼斯人选重点拍照，不要求把每家大型商场全部走完。",
      time: "3–3.5小时", cost: "公共区域免费", image: "assets/vote/macau-cotai.svg"
    },

    {
      id: "victoria-harbour", city: "香港", name: "Victoria Harbour & Star Ferry", chinese: "维港夜景与天星小轮",
      note: "8月7日共同路线。下午乘天星小轮，中环浅逛，晚上星光大道看维港与幻彩咏香江。",
      time: "4–5小时", cost: "海滨免费；小轮约数港币/程", image: "assets/vote/hk-harbour.svg"
    },
    {
      id: "hk-disney", city: "香港", name: "Hong Kong Disneyland", chinese: "香港迪士尼",
      note: "8月8日方案A。看完夜间表演后返深较晚；还需考虑园内餐饮、行李寄存和跨境交通。",
      time: "全天", cost: "HK$669–939 / 人（约¥582–817）", image: "assets/vote/hk-disney.svg"
    },
    {
      id: "hk-peak", city: "香港", name: "The Peak & Central", chinese: "太平山与中环",
      note: "8月8日方案B。山顶俯瞰、缆车、中环、大馆和街区体验；晚上经西九龙回深圳更从容。",
      time: "6–7小时", cost: "缆车往返HK$116（约¥101）；观景台可选", image: "assets/vote/hk-peak.svg"
    }
  ]
};
