window.tripData = {
  title: "四人亚洲之旅",
  subtitle: "2026年7月26日—8月9日 · 曼谷 → 普吉岛 → 新加坡 → 深圳 → 澳门 → 香港",
  members: ["北京组1", "北京组2", "北京组3", "成都组1"],
  startDate: "2026-07-26",
  lastUpdated: "2026-07-18",

  travelerGroups: [
    {
      title: "北京出发组",
      count: 3,
      flight: "海南航空 HU7995",
      route: "北京首都 T2 → 曼谷素万那普",
      timing: "7月26日 18:55 → 23:00（当地时间）"
    },
    {
      title: "成都出发组",
      count: 1,
      flight: "四川航空 3U3937",
      route: "成都天府 T1 → 曼谷素万那普",
      timing: "7月26日 22:05 → 7月27日 00:10（当地时间）"
    }
  ],

  alerts: [
    {
      title: "三项核心投票待完成",
      detail: "曼谷经典版/松弛版、新加坡植物园/夜间动物园、香港迪士尼/城市版仍需四人投票；投票页已保留完整方案。"
    },
    {
      title: "收费项目价格需临近复核",
      detail: "网页中的泰铢、新币、港币、澳门币及人民币换算仅作预算参考；花穹、夜间动物园、迪士尼、山顶缆车和船票应以购买当天页面为准。"
    },
    {
      title: "深圳与香港住宿待预订",
      detail: "深圳确定住南山区；香港建议优先比较佐敦、柯士甸和西九龙站附近，方便维港游览、寄存行李和返回深圳。"
    },
    {
      title: "海岛、射击与跨境交通待购票",
      detail: "需要购买皇帝岛＋珊瑚岛、老牌 Phuket Shooting Range 套餐、澳门往返船票；香港选择迪士尼后再购乐园票。"
    }
  ],

  cities: [
    {
      id: "bangkok",
      name: "曼谷",
      englishName: "Bangkok",
      dates: "7月27日—7月30日",
      status: "两版方案待投票",
      guide: [
        "房源位于 Ratchathewi / Phetchaburi，适合按片区安排行程。",
        "两版都保留朱拉隆功 Banthat Thong 美食街、郑王庙、ICONSIAM、Talat Noi / Song Wat 和唐人街。",
        "经典版增加 Jim Thompson House 与大皇宫；松弛版减少门票和早起，BACC 可按体力删除。"
      ]
    },
    {
      id: "phuket",
      name: "普吉岛",
      englishName: "Phuket",
      dates: "7月30日深夜—8月3日清晨",
      status: "主方案已确定",
      guide: [
        "7月31日从奈扬 Proud Phuket 换到卡塔 Sawasdee Village，下午体验酒店并去悬崖咖啡馆看落日。",
        "8月1日皇帝岛＋珊瑚岛出海。",
        "8月2日老牌 Phuket Shooting Range（82/35 Moo 4, Patak Road）＋普吉老城＋Lard Yai 周日夜市；不去芭东。"
      ]
    },
    {
      id: "singapore",
      name: "新加坡",
      englishName: "Singapore",
      dates: "8月3日—8月5日",
      status: "植物园/夜间动物园待投票",
      guide: [
        "不安排环球影城。",
        "8月3日入住后前往滨海湾花园；Flower Dome＋Cloud Forest 双馆联票作为可选项目。",
        "8月4日在植物园松弛版与夜间动物园体验版之间投票。"
      ]
    },
    {
      id: "shenzhen",
      name: "深圳",
      englishName: "Shenzhen",
      dates: "8月5日晚—8月7日；8月8日晚—8月9日",
      status: "确定住南山区",
      guide: [
        "8月5日23:10抵达深圳后入住南山区。",
        "8月6日从蛇口前往澳门，晚上从深圳机场码头返回南山区。",
        "8月8日晚从香港返回深圳，8月9日两人高铁、两人飞机返程。"
      ]
    },
    {
      id: "macau",
      name: "澳门",
      englishName: "Macau",
      dates: "8月6日一日往返",
      status: "完整版路线已确定",
      guide: [
        "蛇口邮轮中心 → 澳门外港入境。",
        "上午澳门历史城区，下午路氹巴黎人、伦敦人、威尼斯人区域。",
        "晚上从澳门氹仔码头 → 深圳机场码头，再返回南山区。"
      ]
    },
    {
      id: "hongkong",
      name: "香港",
      englishName: "Hong Kong",
      dates: "8月7日—8月8日",
      status: "第二天方案待投票",
      guide: [
        "8月7日共同路线：深圳湾入境、尖沙咀、天星小轮、中环浅逛、维港夜景与幻彩咏香江。",
        "8月8日二选一：香港迪士尼，或太平山＋中环城市版。",
        "迪士尼若看完夜间表演，回深圳时间更晚；若不看烟花则返程更从容。"
      ]
    }
  ],

  itinerary: [
    {
      id: "departure-day",
      date: "2026-07-26",
      displayDate: "7月26日",
      city: "bangkok",
      title: "分组出发前往曼谷",
      summary: "北京组三人、成都组一人分别出发。",
      events: [
        { time: "18:55", title: "北京组 HU7995 起飞", meta: "北京首都T2 → 曼谷素万那普；当日23:00抵达。每人托运行李1件23kg。", maps: "" },
        { time: "22:05", title: "成都组 3U3937 起飞", meta: "成都天府T1 → 曼谷素万那普；7月27日00:10抵达。", maps: "" },
        { time: "23:00", title: "北京组抵达曼谷", meta: "完成入境和取行李后先前往住宿，不在机场等待成都组。", maps: "" }
      ]
    },
    {
      id: "bangkok-day1",
      date: "2026-07-27",
      displayDate: "7月27日",
      city: "bangkok",
      title: "自然醒＋Siam＋朱拉隆功美食街",
      summary: "Jim Thompson House 是否加入由曼谷方案投票决定。",
      events: [
        { time: "00:10", title: "成都组抵达并前往房源", meta: "北京组已先行入住；四人在 Ratchathewi / Phetchaburi 房源汇合。", maps: "https://www.google.com/maps/search/?api=1&query=127+Soi+Phetchaburi+3+Bangkok" },
        { time: "上午", title: "自然醒与休息", meta: "不设置早起任务，午餐不要吃得太撑。", maps: "" },
        { time: "13:30—15:15", title: "A版：Jim Thompson House", meta: "约250 THB/人（约¥50）；B版可跳过，直接延长Siam休息时间。", maps: "https://www.google.com/maps/search/?api=1&query=Jim+Thompson+House+Bangkok" },
        { time: "15:30—17:30", title: "Siam 商圈慢逛", meta: "Siam Square、Siam Discovery、CentralWorld择一至两处。", maps: "https://www.google.com/maps/search/?api=1&query=Siam+Square+Bangkok" },
        { time: "17:45—20:30", title: "Banthat Thong 朱拉隆功美食街", meta: "不收门票；正餐、小吃、甜品四人共享，遇到排队超过30分钟的店直接更换。", maps: "https://www.google.com/maps/search/?api=1&query=Banthat+Thong+Road+Bangkok" }
      ]
    },
    {
      id: "bangkok-day2",
      date: "2026-07-28",
      displayDate: "7月28日",
      city: "bangkok",
      title: "寺庙与湄南河",
      summary: "A版含大皇宫；B版只保留更适合拍照的郑王庙。",
      events: [
        { time: "09:30—11:30", title: "A版：大皇宫", meta: "约500 THB/人（约¥100）；需要早起并遵守遮肩、长裤/长裙等着装要求。", maps: "https://www.google.com/maps/search/?api=1&query=The+Grand+Palace+Bangkok" },
        { time: "11:15—13:45", title: "河边午餐与咖啡", meta: "B版可10:30后慢慢出发；午间主要用于避暑和休息。", maps: "" },
        { time: "14:00—16:45", title: "郑王庙 Wat Arun", meta: "约200 THB/人（约¥40）；B版可加入泰服/妆发并预留更长拍摄时间。", maps: "https://www.google.com/maps/search/?api=1&query=Wat+Arun+Bangkok" },
        { time: "18:00—20:30", title: "ICONSIAM＋湄南河夜景", meta: "公共区域免费；晚餐和购物另计。", maps: "https://www.google.com/maps/search/?api=1&query=ICONSIAM" }
      ]
    },
    {
      id: "bangkok-day3",
      date: "2026-07-29",
      displayDate: "7月29日",
      city: "bangkok",
      title: "文艺街区＋唐人街",
      summary: "BACC 为B版可选项，觉得累可以直接删除。",
      events: [
        { time: "10:30—12:15", title: "B版可选：BACC", meta: "免费、室内有空调；A版或体力不足时不安排。", maps: "https://www.google.com/maps/search/?api=1&query=Bangkok+Art+and+Culture+Centre" },
        { time: "13:30—17:30", title: "Talat Noi＋Song Wat", meta: "老建筑、涂鸦、骑楼与咖啡馆；随走随拍，不列过多打卡点。", maps: "https://www.google.com/maps/search/?api=1&query=Talat+Noi+Bangkok" },
        { time: "18:00—20:30", title: "耀华力路唐人街", meta: "以晚餐、街头小吃和霓虹夜景为主，不再叠加高空观景台。", maps: "https://www.google.com/maps/search/?api=1&query=Yaowarat+Road+Bangkok" }
      ]
    },
    {
      id: "bangkok-to-phuket",
      date: "2026-07-30",
      displayDate: "7月30日",
      city: "bangkok",
      title: "轻松购物／按摩＋飞往普吉岛",
      summary: "活动保持在住宿、Pratunam与Siam附近。",
      events: [
        { time: "12:00", title: "退房并寄存行李", meta: "提前与房东确认能否寄存到傍晚。", maps: "" },
        { time: "12:30—16:30", title: "Pratunam / Platinum / Siam", meta: "购物、咖啡或按摩三选一，不安排远距离景点。", maps: "" },
        { time: "18:00左右", title: "前往素万那普机场", meta: "四个人带行李建议预约大车，给晚高峰预留余量。", maps: "" },
        { time: "22:00—23:35", title: "VZ316 曼谷 → 普吉岛", meta: "落地后入住机场附近 Proud Phuket, Naiyang Beach。", maps: "https://www.google.com/maps/search/?api=1&query=Proud+Phuket+Naiyang+Beach" }
      ]
    },
    {
      id: "phuket-transfer",
      date: "2026-07-31",
      displayDate: "7月31日",
      city: "phuket",
      title: "换到卡塔酒店＋悬崖咖啡馆落日",
      summary: "第一天以酒店度假和拍照为主。",
      events: [
        { time: "09:30—12:00", title: "Proud Phuket 早餐与退房", meta: "可在奈扬附近短暂散步，不安排正式景点。", maps: "" },
        { time: "12:00—13:30", title: "前往 Sawasdee Village", meta: "四个人带行李建议预约六座车；到达后寄存行李、附近午餐。", maps: "https://www.google.com/maps/search/?api=1&query=Sawasdee+Village+Phuket" },
        { time: "15:00—16:10", title: "入住与酒店拍照", meta: "体验卡巴纳直通泳池套房、泰式园林和泳池。", maps: "" },
        { time: "16:15—19:15", title: "A Blanket & A Pillow", meta: "海边悬崖咖啡馆；建议日落前约2小时到达，先点单再拍日间、落日和灯光照片。人均约150–300 THB（约¥30–60）。", maps: "https://www.google.com/maps/search/?api=1&query=A+Blanket+and+A+Pillow+Phuket" }
      ]
    },
    {
      id: "phuket-islands",
      date: "2026-08-01",
      displayDate: "8月1日",
      city: "phuket",
      title: "皇帝岛＋珊瑚岛出海",
      summary: "当天只安排一个全天核心项目。",
      events: [
        { time: "约07:00—08:00", title: "酒店接送前往码头", meta: "具体时间以携程套餐通知为准。", maps: "" },
        { time: "全天", title: "皇帝岛＋珊瑚岛", meta: "优先比较双体船/快艇、卡塔接送、国家公园费、船上人数、浮潜装备、中文服务和海况退改政策。价格以所选携程套餐为准。", maps: "" },
        { time: "17:00—18:30", title: "返回酒店", meta: "晚上只安排卡塔附近晚餐、按摩和休息。", maps: "" }
      ]
    },
    {
      id: "phuket-shooting-oldtown",
      date: "2026-08-02",
      displayDate: "8月2日",
      city: "phuket",
      title: "老牌射击场＋普吉老城周日夜市",
      summary: "不去芭东，按卡塔 → 查龙/Rawai → 普吉老城顺向移动。",
      events: [
        { time: "10:00", title: "从卡塔酒店出发", meta: "带好订单要求的有效身份证件；射击前不得饮酒。", maps: "" },
        { time: "10:30—12:30", title: "Phuket Shooting Range", meta: "老牌场地：82/35 Moo 4, Patak Road, Rawai/Chalong。四人预留约1.5–2小时；套餐价格、枪型、发数和拍照规则以携程确认单为准。", maps: "https://www.google.com/maps/search/?api=1&query=82%2F35+Moo+4+Patak+Road+Phuket+Shooting+Range" },
        { time: "12:45—14:00", title: "查龙附近午餐", meta: "射击后坐下休息，再前往普吉老城。", maps: "" },
        { time: "14:30—16:00", title: "普吉老城咖啡与拍照", meta: "Thalang Road、Soi Romanee和中葡式建筑；先坐咖啡馆避暑。", maps: "https://www.google.com/maps/search/?api=1&query=Phuket+Old+Town" },
        { time: "16:00—19:00", title: "Lard Yai 周日夜市", meta: "小吃、手工艺和夜间街景；19:00左右离开，为次日早班机留出休息时间。", maps: "https://www.google.com/maps/search/?api=1&query=Lard+Yai+Sunday+Walking+Street+Phuket" },
        { time: "20:00以后", title: "回酒店整理行李", meta: "确认清晨退房、送机司机和早餐打包。", maps: "" }
      ]
    },
    {
      id: "phuket-to-singapore",
      date: "2026-08-03",
      displayDate: "8月3日",
      city: "singapore",
      title: "普吉岛 → 新加坡＋滨海湾花园",
      summary: "花穹双馆作为可选项目。",
      events: [
        { time: "05:15—05:30", title: "从卡塔出发前往机场", meta: "最终时间结合航空公司值机要求和司机确认；提前与酒店沟通清晨退房。", maps: "" },
        { time: "09:20—12:45", title: "TR659 普吉 → 新加坡", meta: "抵达樟宜T1后入境、取行李并前往Waterloo Street。", maps: "" },
        { time: "15:00—16:30", title: "入住 Hotel Waterloo 并休息", meta: "78 Waterloo Street；已订2间房，共2晚。", maps: "https://www.google.com/maps/search/?api=1&query=78+Waterloo+Street+Singapore" },
        { time: "17:00—19:15", title: "滨海湾花园", meta: "免费室外区域为固定项；Flower Dome＋Cloud Forest 联票待投票：S$46/人（约¥242），四人约¥966。", maps: "https://www.google.com/maps/search/?api=1&query=Gardens+by+the+Bay" },
        { time: "19:45以后", title: "超级树灯光与滨海湾夜景", meta: "具体演出时间和是否有Borealis需临近出发复核。", maps: "" }
      ]
    },
    {
      id: "singapore-choice",
      date: "2026-08-04",
      displayDate: "8月4日",
      city: "singapore",
      title: "植物园松弛版 / 夜间动物园体验版",
      summary: "不去环球影城；两版均保留哈芝巷与酒店休息。",
      events: [
        { time: "09:45—12:30", title: "A版：新加坡植物园", meta: "植物园主体免费；国家兰花园可选 S$15/人（约¥79）。适合绿植人像、湖边与情侣散步照。", maps: "https://www.google.com/maps/search/?api=1&query=Singapore+Botanic+Gardens" },
        { time: "10:00—12:30", title: "B版：甘榜格南＋哈芝巷", meta: "苏丹回教堂、彩色店屋与街头涂鸦；免费，午餐后回酒店休息。", maps: "https://www.google.com/maps/search/?api=1&query=Haji+Lane+Singapore" },
        { time: "14:00—16:30", title: "酒店休息", meta: "两版都保留午后睡觉、洗澡和换衣时间。", maps: "" },
        { time: "16:45—20:30", title: "A版：哈芝巷＋鱼尾狮＋Spectra", meta: "城市拍照版；主要景点免费，市内交通另计。", maps: "https://www.google.com/maps/search/?api=1&query=Merlion+Park" },
        { time: "17:15—23:00", title: "B版：夜间动物园", meta: "S$58/人（约¥305），四人约¥1218，往返叫车另计；含园内游览车。夜间拍照效果有限，优势是独特动物体验。", maps: "https://www.google.com/maps/search/?api=1&query=Night+Safari+Singapore" }
      ]
    },
    {
      id: "singapore-to-shenzhen",
      date: "2026-08-05",
      displayDate: "8月5日",
      city: "shenzhen",
      title: "新加坡 → 海口 → 深圳南山",
      summary: "当天主要是转机和抵达。",
      events: [
        { time: "06:45—08:15", title: "早餐、整理与退房", meta: "建议08:30左右出发前往樟宜T4。", maps: "" },
        { time: "12:05—15:40", title: "HU748 新加坡 → 海口", meta: "樟宜T4 → 海口美兰T2。", maps: "" },
        { time: "21:35—23:10", title: "HU7027 海口 → 深圳", meta: "海口美兰T2 → 深圳宝安T3。", maps: "" },
        { time: "深夜", title: "入住深圳南山区", meta: "具体酒店待预订；8月5日和8月6日均住南山。", maps: "" }
      ]
    },
    {
      id: "macau-day",
      date: "2026-08-06",
      displayDate: "8月6日",
      city: "macau",
      title: "澳门一日游完整版",
      summary: "外港进、氹仔出，不走回头路。",
      events: [
        { time: "08:10", title: "抵达蛇口邮轮中心", meta: "船班与票价临近出发复核；规划按09:00船班。", maps: "https://www.google.com/maps/search/?api=1&query=Shekou+Cruise+Homeport" },
        { time: "09:00—10:00", title: "蛇口 → 澳门外港", meta: "预算约HK$200/人（约¥174），以购票页面为准。", maps: "" },
        { time: "10:40—13:15", title: "澳门历史城区", meta: "大三巴 → 恋爱巷 → 老街 → 圣玫瑰堂外观 → 议事亭前地；公共区域免费。", maps: "https://www.google.com/maps/search/?api=1&query=Ruins+of+St+Paul+Macau" },
        { time: "13:15—14:30", title: "澳门午餐与咖啡", meta: "葡餐、茶餐厅、蛋挞或甜品，留足避暑休息时间。", maps: "" },
        { time: "15:00—18:40", title: "路氹酒店区", meta: "巴黎人＋伦敦人＋威尼斯人选重点拍照，公共区域免费，不要求完整走完每家商场。", maps: "https://www.google.com/maps/search/?api=1&query=The+Londoner+Macao" },
        { time: "20:00—约21:20", title: "氹仔码头 → 深圳机场码头", meta: "预算约HK$259/人（约¥225）；抵达后返回南山区。", maps: "https://www.google.com/maps/search/?api=1&query=Taipa+Ferry+Terminal+Macau" }
      ]
    },
    {
      id: "hongkong-day1",
      date: "2026-08-07",
      displayDate: "8月7日",
      city: "hongkong",
      title: "香港初体验＋维港夜景",
      summary: "共同路线，节奏偏休闲。",
      events: [
        { time: "09:30左右", title: "从深圳南山出发", meta: "规划经深圳湾口岸进入香港；最终结合酒店和交通确定。", maps: "" },
        { time: "12:00左右", title: "酒店寄存行李／入住", meta: "住宿优先比较佐敦、柯士甸或西九龙站附近。", maps: "" },
        { time: "12:30—16:00", title: "午餐＋酒店休息／尖沙咀室内逛街", meta: "前一晚澳门返深较晚，因此下午不塞太多景点。", maps: "" },
        { time: "16:15—18:15", title: "尖沙咀＋天星小轮＋中环海滨", meta: "天星小轮本身就是低价维港观光体验。", maps: "https://www.google.com/maps/search/?api=1&query=Star+Ferry+Pier+Tsim+Sha+Tsui" },
        { time: "19:30—21:30", title: "星光大道＋维港夜景", meta: "20:00观看幻彩咏香江；公共区域免费，表演时间临近复核。", maps: "https://www.google.com/maps/search/?api=1&query=Avenue+of+Stars+Hong+Kong" }
      ]
    },
    {
      id: "hongkong-day2",
      date: "2026-08-08",
      displayDate: "8月8日",
      city: "hongkong",
      title: "香港迪士尼 / 太平山中环城市版",
      summary: "当天晚上返回深圳南山。",
      events: [
        { time: "08:15", title: "退房并处理行李", meta: "市区版寄存在酒店；迪士尼版需决定寄存在酒店还是乐园外，后者会产生按件费用。", maps: "" },
        { time: "10:00—18:00/闭园", title: "A版：香港迪士尼", meta: "成人一日票按日期约HK$669–939/人（约¥582–817），餐饮和行李寄存另计。若看完夜间表演，跨境返深时间会明显变晚。", maps: "https://www.google.com/maps/search/?api=1&query=Hong+Kong+Disneyland" },
        { time: "09:45—12:00", title: "B版：山顶缆车＋太平山", meta: "缆车往返约HK$116/人（约¥101）；缆车＋428观景台约HK$182（约¥158）。可只买缆车并使用免费观景区域。", maps: "https://www.google.com/maps/search/?api=1&query=Peak+Tram+Hong+Kong" },
        { time: "12:15—16:30", title: "B版：中环城市漫游", meta: "中环午餐、大馆、半山扶梯、PMQ与叮叮车按体力取舍。", maps: "https://www.google.com/maps/search/?api=1&query=Tai+Kwun+Hong+Kong" },
        { time: "傍晚/晚上", title: "返回深圳南山", meta: "市区版优先经香港西九龙高铁至福田；迪士尼版根据是否看夜间表演选择高铁或24小时口岸方案。", maps: "" }
      ]
    },
    {
      id: "return-day",
      date: "2026-08-09",
      displayDate: "8月9日",
      city: "shenzhen",
      title: "分组返程",
      summary: "两人高铁、两人飞机。",
      events: [
        { time: "全天", title: "按返程方式分别出发", meta: "具体高铁车次、航班、机场和出发时间待补充；深圳住宿应结合四人返程交通选择。", maps: "" }
      ]
    }
  ],

  flights: [
    { title: "北京组｜HU7995", detail: "7月26日18:55 北京首都T2 → 23:00 曼谷素万那普；3人；每人托运行李1件23kg。" },
    { title: "成都组｜3U3937", detail: "7月26日22:05 成都天府T1 → 7月27日00:10 曼谷素万那普；1人。" },
    { title: "全员｜VZ316", detail: "7月30日22:00 曼谷素万那普MAIN → 23:35 普吉国际机场D。" },
    { title: "全员｜TR659", detail: "8月3日09:20 普吉国际机场I → 12:45 新加坡樟宜T1。" },
    { title: "全员｜HU748", detail: "8月5日12:05 新加坡樟宜T4 → 15:40 海口美兰T2。" },
    { title: "全员｜HU7027", detail: "8月5日21:35 海口美兰T2 → 23:10 深圳宝安T3。" },
    { title: "8月9日返程", detail: "两人高铁、两人飞机；具体车次、航班和时间待补充。" }
  ],

  hotels: [
    { title: "曼谷｜Ratchathewi 整套房源", detail: "7月26日14:00入住，7月30日12:00退房；4位房客；位置约为127 Soi Phetchaburi 3。" },
    { title: "普吉岛｜Proud Phuket, Naiyang Beach", detail: "7月30日入住、7月31日退房；高级池景房。" },
    { title: "普吉岛｜Sawasdee Village", detail: "7月31日入住、8月3日退房；卡巴纳套房（直通泳池）。" },
    { title: "新加坡｜Hotel Waterloo Singapore", detail: "8月3日15:00后入住、8月5日12:00前退房；2间高级双人床房，共2晚。" },
    { title: "深圳南山区｜8月5日—8月7日", detail: "连续住2晚；方便从蛇口往返澳门。具体酒店待预订。" },
    { title: "香港｜8月7日—8月8日", detail: "只住1晚；优先比较佐敦、柯士甸、西九龙站附近。" },
    { title: "深圳南山区｜8月8日—8月9日", detail: "住1晚；可考虑与前两晚同一家酒店，或根据8月9日返程交通选择。" }
  ],

  checklist: [
    {
      category: "证件与入境",
      items: [
        "检查四人护照有效期",
        "检查港澳通行证以及香港、澳门签注",
        "临近出发核对泰国、新加坡最新入境要求",
        "购买覆盖海岛活动的旅行保险"
      ]
    },
    {
      category: "待预订住宿",
      items: [
        "预订8月5日至7日深圳南山区酒店",
        "预订8月7日香港酒店一晚",
        "预订8月8日深圳南山区酒店",
        "与 Sawasdee Village 沟通8月3日清晨退房和早餐打包"
      ]
    },
    {
      category: "活动与门票",
      items: [
        "购买皇帝岛＋珊瑚岛套餐并确认卡塔接送、上岛费和退改",
        "购买老牌 Phuket Shooting Range 套餐并核对地址、枪型、发数与拍照规则",
        "完成曼谷、新加坡和香港三项投票",
        "决定是否购买新加坡花穹＋云雾林双馆票",
        "选择迪士尼后再购买门票并预约入园日期"
      ]
    },
    {
      category: "跨境交通",
      items: [
        "购买8月6日蛇口→澳门外港船票",
        "购买8月6日氹仔→深圳机场码头船票",
        "确定8月7日深圳湾入港交通",
        "根据香港投票结果确定8月8日晚返深方式"
      ]
    },
    {
      category: "通信与支付",
      items: [
        "选择电话卡或跨境流量包",
        "准备可境外使用的银行卡",
        "准备适量泰铢、新币、港币和澳门币",
        "下载并登录地图、打车、轮渡和铁路应用"
      ]
    },
    {
      category: "行李与健康",
      items: [
        "准备防晒、雨具、防水袋和晕船药",
        "准备转换插头和充电设备",
        "准备常用药品",
        "核对各航段行李额度",
        "射击当天携带订单要求的有效身份证件且不得饮酒"
      ]
    }
  ]
};
