window.tripData = {
  title: "四人亚洲之旅",
  subtitle: "2026年7月26日—8月9日 · 曼谷 → 普吉岛 → 新加坡 → 深圳 · 澳门 · 香港",
  members: ["北京组1", "北京组2", "北京组3", "成都组1"],
  startDate: "2026-07-26",
  lastUpdated: "2026-07-16",

  travelerGroups: [
    {
      title: "北京出发组",
      count: 3,
      flight: "东方航空 MU2071",
      route: "北京大兴 → 曼谷素万那普",
      timing: "7月26日 21:05 → 7月27日 01:00（当地时间）"
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
      title: "8月5日至9日为暂定方案",
      detail: "目前按“深圳住两晚—澳门一日往返—香港住一晚游两日—返回深圳—分组返程”录入，具体酒店、口岸、船班和返程时间尚未确定。"
    },
    {
      title: "澳门往返方式待确定",
      detail: "暂按8月6日从深圳往返澳门规划，优先考虑从蛇口乘船；最终需要结合酒店位置、船班和票价决定。"
    },
    {
      title: "香港只住8月7日一晚",
      detail: "8月7日带行李进入香港，8月8日退房后把行李寄存在酒店，晚上取行李并返回深圳。香港住宿区域暂未确定。"
    },
    {
      title: "8月9日分组返程",
      detail: "两人计划乘高铁、两人计划乘飞机。8月8日晚深圳住宿由你结合四人的具体返程时间自行选择。"
    }
  ],

  cities: [
    {
      id: "bangkok",
      name: "曼谷",
      englishName: "Bangkok",
      dates: "7月27日—7月30日",
      status: "航班与住宿已录入",
      guide: [
        "两组分别于7月27日00:10和01:00抵达素万那普机场，可直接前往同一处房源集合。",
        "曼谷房源位于 Ratchathewi / Phetchaburi 一带，适合结合轨道交通规划市区行程。",
        "7月30日12:00退房、22:00飞普吉岛，需要提前解决行李寄存。"
      ]
    },
    {
      id: "phuket",
      name: "普吉岛",
      englishName: "Phuket",
      dates: "7月30日深夜—8月3日清晨",
      status: "航班与住宿已录入",
      guide: [
        "7月30日晚先住机场附近的 Proud Phuket，7月31日再转到卡塔区域 Sawasdee Village。",
        "普吉岛酒店订单已确认无房间数量问题。",
        "8月3日09:20为国际航班，需要从卡塔区域提前安排清晨送机。"
      ]
    },
    {
      id: "singapore",
      name: "新加坡",
      englishName: "Singapore",
      dates: "8月3日—8月5日",
      status: "航班与酒店已录入",
      guide: [
        "8月3日12:45抵达樟宜T1，酒店15:00后入住。",
        "住宿位于 Waterloo Street，适合规划市中心与滨海湾区域。",
        "8月5日12:05从樟宜T4起飞，上午需提前退房前往机场。"
      ]
    },
    {
      id: "shenzhen",
      name: "深圳",
      englishName: "Shenzhen",
      dates: "8月5日晚—8月7日；8月8日晚—8月9日",
      status: "住宿待选择",
      guide: [
        "8月5日23:10抵达深圳，当晚直接入住深圳。",
        "8月6日以深圳为基地往返澳门，8月7日上午退房并前往香港。",
        "8月8日晚从香港返回深圳，8月9日两人高铁、两人飞机各自返家。"
      ]
    },
    {
      id: "macau",
      name: "澳门",
      englishName: "Macau",
      dates: "8月6日一日往返",
      status: "路线待细化",
      guide: [
        "暂定从深圳往返，不在澳门住宿。",
        "可按“澳门半岛历史城区—官也街—路氹酒店区”的顺序游览。",
        "具体船班、码头、过关时间和返程时间需要临近出行时确认。"
      ]
    },
    {
      id: "hongkong",
      name: "香港",
      englishName: "Hong Kong",
      dates: "8月7日—8月8日",
      status: "一晚两日方案",
      guide: [
        "8月7日从深圳进入香港并住宿一晚，8月8日晚返回深圳。",
        "第一天适合安排维港、中环和太平山等经典路线。",
        "第二天可安排九龙街区、西九龙或购物路线，退房后将行李寄存在酒店。"
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
      summary: "三人从北京出发，一人从成都出发。",
      events: [
        {
          time: "21:05",
          title: "北京组：MU2071 起飞",
          meta: "北京大兴 → 曼谷素万那普；预计7月27日01:00抵达。",
          maps: ""
        },
        {
          time: "22:05",
          title: "成都组：3U3937 起飞",
          meta: "成都天府T1 → 曼谷素万那普；预计7月27日00:10抵达。",
          maps: ""
        }
      ]
    },
    {
      id: "bangkok-arrival",
      date: "2026-07-27",
      displayDate: "7月27日",
      city: "bangkok",
      title: "抵达曼谷并集合",
      summary: "两组落地时间相差约50分钟。",
      events: [
        {
          time: "00:10",
          title: "成都组抵达曼谷",
          meta: "抵达素万那普机场，办理入境并等待北京组。",
          maps: ""
        },
        {
          time: "01:00",
          title: "北京组抵达曼谷",
          meta: "四人会合后，共同前往 Ratchathewi / Phetchaburi 一带的整套房源。",
          maps: ""
        },
        {
          time: "凌晨",
          title: "入住曼谷房源",
          meta: "房源已从7月26日14:00起预订，可避免凌晨到达后无法入住。",
          maps: "https://www.google.com/maps/search/?api=1&query=127+Soi+Phetchaburi+3+Bangkok"
        }
      ]
    },
    {
      id: "bangkok-day1",
      date: "2026-07-27",
      displayDate: "7月27日",
      city: "bangkok",
      title: "曼谷游玩日 1",
      summary: "凌晨到达，建议上午充分休息，下午再开始活动。",
      events: [
        { time: "上午", title: "休息与补给", meta: "不安排早起项目，处理电话卡、换汇和便利店采购。", maps: "" },
        { time: "下午", title: "待规划", meta: "适合安排距离住宿较近、节奏较轻松的街区或商圈。", maps: "" },
        { time: "晚上", title: "待规划", meta: "可安排夜市、按摩或夜景。", maps: "" }
      ]
    },
    {
      id: "bangkok-day2",
      date: "2026-07-28",
      displayDate: "7月28日",
      city: "bangkok",
      title: "曼谷完整游玩日 2",
      summary: "可安排一组核心文化景点。",
      events: [
        { time: "全天", title: "待规划", meta: "后续按大皇宫/郑王庙、商圈、夜市等区域组合。", maps: "" }
      ]
    },
    {
      id: "bangkok-day3",
      date: "2026-07-29",
      displayDate: "7月29日",
      city: "bangkok",
      title: "曼谷完整游玩日 3",
      summary: "可安排购物、城市体验或近郊项目。",
      events: [
        { time: "全天", title: "待规划", meta: "结合四个人偏好选择主线和备选方案。", maps: "" }
      ]
    },
    {
      id: "bangkok-to-phuket",
      date: "2026-07-30",
      displayDate: "7月30日",
      city: "bangkok",
      title: "曼谷 → 普吉岛",
      summary: "白天仍可游玩，晚上飞往普吉岛。",
      events: [
        { time: "12:00前", title: "曼谷房源退房", meta: "当天航班较晚，需要提前安排约半天的行李寄存。", maps: "" },
        { time: "白天", title: "曼谷最后半日", meta: "建议安排便于取行李、前往机场的活动。", maps: "" },
        { time: "22:00", title: "VZ316 起飞", meta: "曼谷素万那普 MAIN → 普吉国际机场 D。", maps: "" },
        { time: "23:35", title: "抵达普吉岛", meta: "落地后前往机场附近的 Proud Phuket, Naiyang Beach。", maps: "https://www.google.com/maps/search/?api=1&query=Proud+Phuket+Naiyang+Beach" }
      ]
    },
    {
      id: "phuket-transfer",
      date: "2026-07-31",
      displayDate: "7月31日",
      city: "phuket",
      title: "机场附近酒店 → 卡塔酒店",
      summary: "更换酒店并进入主要度假区域。",
      events: [
        { time: "上午", title: "Proud Phuket 早餐与休息", meta: "退房前在奈扬海滩/机场附近休息。", maps: "" },
        { time: "12:00前", title: "退房", meta: "从奈扬海滩/机场附近前往卡塔区域。", maps: "" },
        { time: "15:00后", title: "入住 Sawasdee Village", meta: "卡巴纳套房（直通泳池）；酒店位于卡塔区域。", maps: "https://www.google.com/maps/search/?api=1&query=Sawasdee+Village+Phuket" },
        { time: "下午/晚上", title: "待规划", meta: "适合安排卡塔海滩、按摩、周边晚餐等轻松项目。", maps: "" }
      ]
    },
    {
      id: "phuket-day2",
      date: "2026-08-01",
      displayDate: "8月1日",
      city: "phuket",
      title: "普吉岛完整游玩日 2",
      summary: "适合安排跳岛或其他全天核心项目。",
      events: [
        { time: "全天", title: "待规划", meta: "后续根据天气、码头接送范围和个人偏好选择。", maps: "" }
      ]
    },
    {
      id: "phuket-day3",
      date: "2026-08-02",
      displayDate: "8月2日",
      city: "phuket",
      title: "普吉岛完整游玩日 3",
      summary: "建议强度适中，为次日早班机预留体力。",
      events: [
        { time: "白天", title: "待规划", meta: "可安排老城区、观景点、海滩或半日活动。", maps: "" },
        { time: "晚上", title: "整理行李与确认送机", meta: "核对清晨退房、车辆到达时间和普吉机场航站楼。", maps: "" }
      ]
    },
    {
      id: "phuket-to-singapore",
      date: "2026-08-03",
      displayDate: "8月3日",
      city: "phuket",
      title: "普吉岛 → 新加坡",
      summary: "早班国际航班，需清晨从卡塔出发。",
      events: [
        { time: "清晨", title: "退房并前往普吉机场", meta: "酒店并非24小时前台，需提前沟通早退房；具体出发时间待确认。", maps: "" },
        { time: "09:20", title: "TR659 起飞", meta: "普吉国际机场 I → 新加坡樟宜 T1。", maps: "" },
        { time: "12:45", title: "抵达新加坡", meta: "办理入境、取行李后前往 Waterloo Street。", maps: "" },
        { time: "15:00后", title: "入住 Hotel Waterloo Singapore", meta: "地址：78 Waterloo Street；已订2间房、共2晚。", maps: "https://www.google.com/maps/search/?api=1&query=78+Waterloo+Street+Singapore" }
      ]
    },
    {
      id: "singapore-day",
      date: "2026-08-04",
      displayDate: "8月4日",
      city: "singapore",
      title: "新加坡完整游玩日",
      summary: "唯一完整游玩日，需要明确主线取舍。",
      events: [
        { time: "全天", title: "待规划", meta: "滨海湾、圣淘沙/环球影城、城市文化路线之间需要做取舍。", maps: "" }
      ]
    },
    {
      id: "singapore-to-shenzhen",
      date: "2026-08-05",
      displayDate: "8月5日",
      city: "shenzhen",
      title: "新加坡 → 海口 → 深圳",
      summary: "当晚抵达深圳并住宿。",
      events: [
        { time: "上午", title: "早餐、退房并前往樟宜T4", meta: "为12:05航班提前离开酒店。", maps: "" },
        { time: "12:05", title: "HU748 起飞", meta: "新加坡樟宜T4 → 海口美兰T2；15:40抵达。", maps: "" },
        { time: "21:35", title: "HU7027 起飞", meta: "海口美兰T2 → 深圳宝安T3。", maps: "" },
        { time: "23:10", title: "抵达深圳", meta: "取行李后前往深圳酒店；酒店由你后续选择。", maps: "" }
      ]
    },
    {
      id: "macau-day-trip",
      date: "2026-08-06",
      displayDate: "8月6日",
      city: "macau",
      title: "深圳 ↔ 澳门一日游",
      summary: "暂定不更换酒店，当天从深圳往返。",
      events: [
        { time: "早上", title: "从深圳前往澳门", meta: "暂优先考虑蛇口乘船，具体码头和班次待确定。", maps: "" },
        { time: "上午", title: "澳门半岛经典路线", meta: "可安排大三巴、恋爱巷、议事亭前地和老城区午餐。", maps: "" },
        { time: "下午", title: "氹仔与路氹", meta: "可安排官也街、龙环葡韵及路氹酒店区。", maps: "" },
        { time: "晚上", title: "返回深圳", meta: "返回8月5日入住的同一家深圳酒店。", maps: "" }
      ]
    },
    {
      id: "shenzhen-to-hongkong",
      date: "2026-08-07",
      displayDate: "8月7日",
      city: "hongkong",
      title: "深圳 → 香港经典路线",
      summary: "进入香港并住宿一晚。",
      events: [
        { time: "上午", title: "深圳酒店退房并前往香港", meta: "携带全部行李，具体口岸和交通方式待确定。", maps: "" },
        { time: "中午前后", title: "香港酒店寄存行李", meta: "住宿区域暂定优先考虑佐敦、油麻地或旺角等性价比较高区域。", maps: "" },
        { time: "下午", title: "维港与港岛经典路线", meta: "可安排尖沙咀、星光大道、天星小轮、中环和大馆/半山扶梯。", maps: "" },
        { time: "傍晚/晚上", title: "太平山或维港夜景", meta: "具体顺序根据预约、天气和体力调整。", maps: "" }
      ]
    },
    {
      id: "hongkong-to-shenzhen",
      date: "2026-08-08",
      displayDate: "8月8日",
      city: "hongkong",
      title: "香港第二日 → 返回深圳",
      summary: "退房后寄存行李，晚上返回深圳。",
      events: [
        { time: "上午", title: "退房并寄存行李", meta: "全天只携带随身物品游玩。", maps: "" },
        { time: "白天", title: "九龙或城市街区路线", meta: "可安排旺角、油麻地、深水埗、西九龙或购物路线。", maps: "" },
        { time: "晚上", title: "取行李并返回深圳", meta: "可优先研究经皇岗口岸的晚间跨境交通，最终方案待确认。", maps: "" },
        { time: "夜间", title: "入住深圳酒店", meta: "住宿位置由你结合次日两人高铁、两人飞机的时间选择。", maps: "" }
      ]
    },
    {
      id: "return-home",
      date: "2026-08-09",
      displayDate: "8月9日",
      city: "shenzhen",
      title: "分组返程",
      summary: "两人高铁、两人飞机，各自回家。",
      events: [
        { time: "待定", title: "高铁组返程", meta: "车站、车次和出发时间待补充。", maps: "" },
        { time: "待定", title: "飞机组返程", meta: "机场、航班和出发时间待补充。", maps: "" }
      ]
    }
  ],

  flights: [
    {
      title: "北京组｜MU2071",
      detail: "7月26日 21:05 北京大兴 → 7月27日 01:00 曼谷素万那普；3人。"
    },
    {
      title: "成都组｜3U3937",
      detail: "7月26日 22:05 成都天府T1 → 7月27日 00:10 曼谷素万那普；1人。"
    },
    {
      title: "全员｜VZ316",
      detail: "7月30日 22:00 曼谷素万那普 MAIN → 23:35 普吉国际机场 D。"
    },
    {
      title: "全员｜TR659",
      detail: "8月3日 09:20 普吉国际机场 I → 12:45 新加坡樟宜 T1。"
    },
    {
      title: "全员｜HU748",
      detail: "8月5日 12:05 新加坡樟宜 T4 → 15:40 海口美兰 T2。"
    },
    {
      title: "全员｜HU7027",
      detail: "8月5日 21:35 海口美兰 T2 → 23:10 深圳宝安 T3。"
    },
    {
      title: "8月9日返程",
      detail: "两人高铁、两人飞机；具体车次、航班和时间待补充。"
    }
  ],

  hotels: [
    {
      title: "曼谷｜Ratchathewi 整套房源",
      detail: "7月26日14:00入住，7月30日12:00退房；4位房客；位置约为 127 Soi Phetchaburi 3。"
    },
    {
      title: "普吉岛｜Proud Phuket, Naiyang Beach",
      detail: "7月30日入住、7月31日退房；高级池景房。房间数量已确认无误。"
    },
    {
      title: "普吉岛｜Sawasdee Village",
      detail: "7月31日入住、8月3日退房；卡巴纳套房（直通泳池）。房间数量已确认无误。"
    },
    {
      title: "新加坡｜Hotel Waterloo Singapore",
      detail: "8月3日15:00后入住、8月5日12:00前退房；2间高级双人床房，共2晚。"
    },
    {
      title: "深圳｜8月5日—8月7日",
      detail: "连续住2晚，便于8月6日往返澳门；具体酒店与区域由你选择。"
    },
    {
      title: "香港｜8月7日—8月8日",
      detail: "只住1晚；可优先比较佐敦、油麻地、旺角等区域的价格与交通。"
    },
    {
      title: "深圳｜8月8日—8月9日",
      detail: "住1晚；具体区域结合8月9日两人高铁、两人飞机的时间决定。"
    }
  ],

  checklist: [
    {
      category: "证件与入境",
      items: [
        "检查四人护照有效期",
        "检查四人港澳通行证及香港、澳门签注",
        "核对泰国与新加坡最新入境要求",
        "购买旅行保险"
      ]
    },
    {
      category: "住宿安排",
      items: [
        "预订8月5日至7日深圳酒店",
        "预订8月7日香港酒店一晚",
        "预订8月8日深圳酒店一晚",
        "与 Sawasdee Village 沟通8月3日清晨退房"
      ]
    },
    {
      category: "跨境交通",
      items: [
        "确定8月6日深圳往返澳门的船班或其他交通",
        "购买澳门往返票",
        "确定8月7日深圳进入香港的口岸与交通",
        "确定8月8日晚香港返回深圳的交通"
      ]
    },
    {
      category: "通信与支付",
      items: [
        "选择电话卡或跨境流量包",
        "准备可境外使用的银行卡",
        "准备适量泰铢、新币、港币和澳门币",
        "下载并登录常用打车与地图应用"
      ]
    },
    {
      category: "行李与健康",
      items: [
        "准备防晒、雨具和防水袋",
        "准备转换插头和充电设备",
        "准备常用药品",
        "核对各航段行李额度"
      ]
    },
    {
      category: "行程与返程",
      items: [
        "确定曼谷三天的核心路线",
        "确定普吉岛跳岛或其他核心项目",
        "确定新加坡唯一完整日的主线",
        "补充8月9日两张高铁票和两张机票"
      ]
    }
  ]
};
