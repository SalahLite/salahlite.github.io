// translations.js - Salah Lite Official Website i18n Data
const translations = {
  en: {
    dir: "ltr",
    site: {
      name: "Salah Lite",
      slogan: "Simple. Private. Offline.",
      tagline: "A minimalist prayer companion for your Mac menu bar — accurate, private, and always available.",
      getStarted: "Get on the App Store — $1.99",
      ctaDesc: "No accounts. No permissions. No internet. Just your prayer times.",
      ctaTitle: "Start Praying with Peace of Mind",
      language: "Language"
    },
    features: [
      {
        icon: "clock",
        title: "Precise Prayer Times",
        desc: "Powered by the Adhan algorithm with multiple calculation methods (MWL, Umm al-Qura, ISNA, Egypt, etc.) — accurate for any location on Earth.",
        detail: "Supports Hanafi & Shafii Asr calculation, auto-recommended based on your region."
      },
      {
        icon: "shield",
        title: "100% Offline & Private",
        desc: "No data collection, no tracking, no internet required. Everything runs locally on your Mac.",
        detail: "Zero network requests. Your location data never leaves your device."
      },
      {
        icon: "menu",
        title: "Menu Bar Native",
        desc: "Lives quietly in your menu bar. One click to see next prayer, countdown, and Qibla direction.",
        detail: "Lightweight — under 5 MB. Never interrupts your workflow."
      },
      {
        icon: "widget",
        title: "macOS Widgets",
        desc: "Place prayer times right on your desktop or Lock Screen with native macOS widgets.",
        detail: "Multiple sizes, real-time updates, no app launch needed."
      },
      {
        icon: "globe",
        title: "8 Languages + RTL",
        desc: "English, 中文, العربية, Bahasa, Türkçe, Français, Deutsch, and more — with full right-to-left layout support.",
        detail: "Auto-detected from your system language. Switch anytime in settings."
      },
      {
        icon: "search",
        title: "250+ City Database",
        desc: "Built-in city search with coordinates for 50+ countries — no GPS required.",
        detail: "Quick search by name, with offline fallback if location services are disabled."
      }
    ],
    widgets: {
      title: "Always Visible, Never in the Way",
      subtitle: "Native macOS widgets keep prayer times one glance away.",
      desc: "Pin prayer times to your desktop, Notification Center, or Lock Screen. Choose from multiple widget sizes — all update in real-time without opening the app.",
      features: [
        "Desktop widget — see today's full schedule at a glance",
        "Lock Screen widget — check times without unlocking",
        "Small & medium sizes — fits any layout",
        "Live countdown to next prayer"
      ]
    },
    languages: {
      title: "Your Language, Your Direction",
      subtitle: "8 languages, fully localized — including right-to-left layouts.",
      desc: "Salah Lite automatically matches your system language. Arabic, Persian, and Urdu users enjoy complete RTL (right-to-left) interface mirroring — every label, every layout, perfectly adapted.",
      list: [
        { name: "English", code: "EN", rtl: false },
        { name: "中文", code: "ZH", rtl: false },
        { name: "العربية", code: "AR", rtl: true },
        { name: "Bahasa Indonesia", code: "ID", rtl: false },
        { name: "Türkçe", code: "TR", rtl: false },
        { name: "Français", code: "FR", rtl: false },
        { name: "Deutsch", code: "DE", rtl: false },
        { name: "اردو", code: "UR", rtl: true }
      ]
    },
    screenshots: {
      title: "Clean Interface, Zero Distraction",
      desc: "Every pixel serves a purpose. No onboarding, no ads, no clutter."
    },
    privacy: {
      title: "Privacy Policy",
      intro: "Salah Lite is a privacy-first application. We do not collect, store, or transmit any personal data.",
      data: "Data Collection",
      dataDesc: "We do not collect any personal data. All prayer time calculations are performed locally on your device.",
      location: "Location Services",
      locationDesc: "The app may request access to your location to calculate accurate prayer times. This data is never transmitted to any server.",
      updates: "Policy Updates",
      updatesDesc: "This policy may be updated from time to time. The current version is always available on this page.",
      contact: "Contact",
      contactDesc: "If you have any questions about this policy, please contact us at salahlite@gmail.com."
    },
    footer: {
      rights: "© 2025 Salah Lite. All rights reserved.",
      privacy: "Privacy Policy",
      made: "Built with ❤️ for the global Muslim community"
    }
  },
  zh: {
    dir: "ltr",
    site: {
      name: "轻礼拜",
      slogan: "简单。隐私。离线。",
      tagline: "Mac 菜单栏中的极简祈祷伴侣 — 精准、私密、随时可用。",
      getStarted: "前往 App Store 购买 — $1.99",
      ctaDesc: "无需注册账号，无需额外权限，无需联网 — 只有你的祈祷时间。",
      ctaTitle: "安心礼拜，从这里开始",
      language: "语言"
    },
    features: [
      {
        icon: "clock",
        title: "精准祈祷时间",
        desc: "基于 Adhan 算法，支持多种计算方法（MWL、Umm al-Qura、ISNA、埃及等）— 全球任何地点都精准。",
        detail: "支持 Hanafi 和 Shafii 两种 Asr 时间计算，根据所在地区自动推荐。"
      },
      {
        icon: "shield",
        title: "100% 离线隐私",
        desc: "不收集数据、不追踪、无需联网。所有计算都在你的 Mac 上完成。",
        detail: "零网络请求。你的位置数据永远不会离开设备。"
      },
      {
        icon: "menu",
        title: "菜单栏原生",
        desc: "安静地驻留在菜单栏。一键查看下一次祈祷倒计时和朝向。",
        detail: "极轻量 — 不足 5 MB。从不会打断你的工作。"
      },
      {
        icon: "widget",
        title: "macOS 小组件",
        desc: "通过原生 macOS 小组件，将祈祷时间直接放在桌面或锁屏界面上。",
        detail: "多种尺寸，实时更新，无需打开应用。"
      },
      {
        icon: "globe",
        title: "8 种语言 + RTL",
        desc: "English、中文、العربية、Bahasa、Türkçe、Français、Deutsch 等 — 完整的从右到左布局支持。",
        detail: "自动跟随系统语言，随时在设置中切换。"
      },
      {
        icon: "search",
        title: "250+ 城市数据库",
        desc: "内置 50+ 个国家的城市搜索 — 无需 GPS 也能精准定位。",
        detail: "按城市名称快速搜索，关闭定位服务时自动回退。"
      }
    ],
    widgets: {
      title: "始终可见，从不打扰",
      subtitle: "原生 macOS 小组件，祈祷时间一目了然。",
      desc: "将祈祷时间固定在桌面、通知中心或锁屏界面。提供多种小组件尺寸 — 全部实时更新，无需打开应用。",
      features: [
        "桌面小组件 — 一眼查看全天祈祷时间表",
        "锁屏小组件 — 不解锁也能快速查看",
        "小号和中型尺寸 — 适配任何布局",
        "距离下次祈祷实时倒计时"
      ]
    },
    languages: {
      title: "你的语言，你的方向",
      subtitle: "8 种语言，完全本地化 — 包括从右到左布局。",
      desc: "Salah Lite 自动匹配你的系统语言。阿拉伯语、波斯语、乌尔都语用户享受完整的 RTL（从右到左）界面翻转 — 每个标签、每个布局都完美适配。",
      list: [
        { name: "English", code: "EN", rtl: false },
        { name: "中文", code: "ZH", rtl: false },
        { name: "العربية", code: "AR", rtl: true },
        { name: "Bahasa Indonesia", code: "ID", rtl: false },
        { name: "Türkçe", code: "TR", rtl: false },
        { name: "Français", code: "FR", rtl: false },
        { name: "Deutsch", code: "DE", rtl: false },
        { name: "اردو", code: "UR", rtl: true }
      ]
    },
    screenshots: {
      title: "干净界面，零干扰",
      desc: "每个像素都有用途。没有引导页、没有广告、没有杂乱。"
    },
    privacy: {
      title: "隐私政策",
      intro: "Salah Lite（轻礼拜）是一款隐私优先的应用。我们不收集、存储或传输任何个人数据。",
      data: "数据收集",
      dataDesc: "我们不收集任何个人数据。所有祈祷时间计算均在设备本地完成。",
      location: "定位服务",
      locationDesc: "应用可能会请求访问您的位置以计算准确的祈祷时间。这些数据永远不会传输到任何服务器。",
      updates: "政策更新",
      updatesDesc: "本政策可能不时更新。最新版本始终在此页面提供。",
      contact: "联系我们",
      contactDesc: "如果您对本政策有任何疑问，请联系我们：salahlite@gmail.com。"
    },
    footer: {
      rights: "© 2025 Salah Lite。保留所有权利。",
      privacy: "隐私政策",
      made: "为全球穆斯林社群 ❤️ 打造"
    }
  },
  ar: {
    dir: "rtl",
    site: {
      name: "صلاتك لايت",
      slogan: "بسيط. خاص. بدون إنترنت.",
      tagline: "رفيق الصلاة البسيط لشريط قائمة جهاز ماك — دقيق، خاص، ومتاح دائماً.",
      getStarted: "احصل عليه من App Store — $1.99",
      ctaDesc: "بلا حسابات. بلا صلاحيات. بلا إنترنت. مجرد أوقات صلاتك فقط.",
      ctaTitle: "ابدأ صلاتك وقلبك مطمئن",
      language: "اللغة"
    },
    features: [
      {
        icon: "clock",
        title: "أوقات صلاة دقيقة",
        desc: "يعتمد على خوارزمية الأذان مع طرق حساب متعددة (MWL، Umm al-Qura، ISNA، مصر، إلخ) — دقيق في أي مكان على الأرض.",
        detail: "يدعم حساب العصر للطريقتين الحنفي والشافعي، موصى به تلقائياً حسب منطقتك."
      },
      {
        icon: "shield",
        title: "خصوصية تامة وبدون إنترنت",
        desc: "لا يجمع البيانات، لا يتتبع، لا يتطلب الإنترنت. كل شيء يعمل محلياً على جهاز ماك الخاص بك.",
        detail: "صفر طلبات شبكة. بيانات موقعك لا تغادر جهازك أبداً."
      },
      {
        icon: "menu",
        title: "شريط القائمة الأصلي",
        desc: "يعيش بهدوء في شريط القائمة. بنقرة واحدة لمعرفة الوقت المتبقي للصلاة التالية واتجاه القبلة.",
        detail: "خفيف للغاية — أقل من 5 ميغابايت. لا يقطع عملك أبداً."
      },
      {
        icon: "widget",
        title: "أدوات macOS",
        desc: "ضع أوقات الصلاة مباشرة على سطح المكتب أو شاشة القفل باستخدام أدوات macOS الأصلية.",
        detail: "أحجام متعددة، تحديثات فورية، دون الحاجة لفتح التطبيق."
      },
      {
        icon: "globe",
        title: "8 لغات + دعم اليمين لليسار",
        desc: "الإنجليزية، 中文، العربية، Bahasa، Türkçe، Français، Deutsch، والمزيد — مع دعم كامل لتخطيط اليمين لليسار.",
        detail: "يكتشف تلقائياً لغة نظامك. يمكنك التبديل في أي وقت من الإعدادات."
      },
      {
        icon: "search",
        title: "قاعدة بيانات 250+ مدينة",
        desc: "بحث مدمج عن المدن مع إحداثيات لأكثر من 50 دولة — لا يتطلب GPS.",
        detail: "بحث سريع بالاسم، مع بديل دون اتصال عند تعطيل خدمات الموقع."
      }
    ],
    widgets: {
      title: "دائماً مرئي، أبداً لا يزعج",
      subtitle: "أدوات macOS الأصلية تبقي أوقات الصلاة في لمحة واحدة.",
      desc: "ثبّت أوقات الصلاة على سطح المكتب أو مركز الإشعارات أو شاشة القفل. اختر من أحجام متعددة — كلها تحدّث في الوقت الفعلي دون فتح التطبيق.",
      features: [
        "أداة سطح المكتب — جدول اليوم كامل بنظرة واحدة",
        "أداة شاشة القفل — تحقق من الأوقات دون فتح القفل",
        "أحجام صغيرة ومتوسطة — تناسب أي تخطيط",
        "عد تنازلي مباشر للصلاة القادمة"
      ]
    },
    languages: {
      title: "لغتك، اتجاهك",
      subtitle: "8 لغات، مترجمة بالكامل — بما في ذلك تخطيطات اليمين لليسار.",
      desc: "يطابق صلاتك لايت لغة نظامك تلقائياً. مستخدمو العربية والفارسية والأردية يتمتعون بواجهة كاملة من اليمين لليسار — كل تسمية، كل تخطيط، متكيف بشكل مثالي.",
      list: [
        { name: "English", code: "EN", rtl: false },
        { name: "中文", code: "ZH", rtl: false },
        { name: "العربية", code: "AR", rtl: true },
        { name: "Bahasa Indonesia", code: "ID", rtl: false },
        { name: "Türkçe", code: "TR", rtl: false },
        { name: "Français", code: "FR", rtl: false },
        { name: "Deutsch", code: "DE", rtl: false },
        { name: "اردو", code: "UR", rtl: true }
      ]
    },
    screenshots: {
      title: "واجهة نظيفة، بدون تشتيت",
      desc: "كل بكسل له هدف. لا صفحة بداية، لا إعلانات، لا فوضى."
    },
    privacy: {
      title: "سياسة الخصوصية",
      intro: "صلاتك لايت هو تطبيق يركز على الخصوصية. لا نجمع أو نخزن أو ننقل أي بيانات شخصية.",
      data: "جمع البيانات",
      dataDesc: "لا نجمع أي بيانات شخصية. يتم إجراء جميع حسابات أوقات الصلاة محلياً على جهازك.",
      location: "خدمات الموقع",
      locationDesc: "قد يطلب التطبيق الوصول إلى موقعك لحساب أوقات الصلاة بدقة. لا يتم نقل هذه البيانات إلى أي خادم.",
      updates: "تحديثات السياسة",
      updatesDesc: "قد يتم تحديث هذه السياسة من وقت لآخر. الإصدار الحالي متاح دائماً في هذه الصفحة.",
      contact: "اتصل بنا",
      contactDesc: "إذا كانت لديك أي أسئلة حول هذه السياسة، يرجى الاتصال بنا على salahlite@gmail.com."
    },
    footer: {
      rights: "© 2025 صلاتك لايت. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      made: "بُني بـ ❤️ للمجتمع المسلم العالمي"
    }
  }
};
