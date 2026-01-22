const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2021-09-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到YimooRuaの博客|质量工程师的成长之路', url: 'notion.yimoo.top' },
    { title: 'PDCA 循环是计划 - 执行 - 检查 - 处理的持续改进闭环。', url: 'notion.yimoorua.top'},
    { title: '零缺陷核心是一次做对，拒绝 “差不多” 的质量容忍。', url: 'notion.yimoorua.top'},
    { title: '质量三不原则：不接受、不制造、不流出不良品。', url: 'notion.yimoorua.top'},
    { title: '质量是设计出来的，而非检验和返工弥补的。', url: 'notion.yimoorua.top'},
    { title: 'PPM 是百万产品中的不良品数，衡量制程不良水平。', url: 'notion.yimoorua.top'},
    { title: 'CPK 是实际过程能力指数，反映制程中心偏移后的管控能力。', url: 'notion.yimoorua.top'},
    { title: 'CP 是潜在过程能力指数，仅反映制程离散程度。', url: 'notion.yimoorua.top'},
    { title: '良率是合格产品数占总生产数的百分比，核心制程指标。', url: 'notion.yimoorua.top'},
    { title: '直通率是产品无返工一次通过所有工序的比例。', url: 'notion.yimoorua.top'},
    { title: '客户投诉率是投诉次数占客户订单 / 交付数的比例。', url: 'notion.yimoorua.top'},
    { title: 'DPPM 是每百万机会的缺陷数，适配多缺陷产品测量。', url: 'notion.yimoorua.top'},
    { title: 'Cmk 是设备能力指数，验证设备本身的加工能力。', url: 'notion.yimoorua.top'},
    { title: 'APQP 是产品质量先期策划，贯穿产品从设计到量产的全流程。', url: 'notion.yimoorua.top'},
    { title: 'PPAP 是生产件批准程序，验证量产能力与设计 / 规范的一致性。', url: 'notion.yimoorua.top'},
    { title: 'FMEA 是潜在失效模式与效应分析，事前识别风险并制定预防措施。', url: 'notion.yimoorua.top'},
    { title: 'SPC 是统计过程控制，用数据监控制程，区分普通 / 特殊原因变异。', url: 'notion.yimoorua.top'},
    { title: 'MSA 是测量系统分析，验证测量设备 / 方法的准确性和重复性。', url: 'notion.yimoorua.top'},
    { title: 'MSA 核心评价指标：偏倚、线性、重复性、再现性、稳定性。', url: 'notion.yimoorua.top'},
    { title: 'GRR 是重复性和再现性的综合值，衡量测量系统变异。', url: 'notion.yimoorua.top'},
    { title: 'GRR＜10% 测量系统可接受，10%-30% 条件可接受，＞30% 不可接受。', url: 'notion.yimoorua.top'},
    { title: '偏倚是测量结果与真值的平均偏差，反映测量准确性。', url: 'notion.yimoorua.top'},
    { title: '稳定性是测量系统随时间的变异情况，验证长期可靠性。', url: 'notion.yimoorua.top'},
    { title: 'MSA 样本需覆盖制程实际变异范围，避免样本单一。', url: 'notion.yimoorua.top'},
    { title: '计量型控制图常用：Xbar-R（均值 - 极差）、Xbar-S（均值 - 标准差）。', url: 'notion.yimoorua.top'},
    { title: '计数型控制图常用：P（不合格品率）、C（缺陷数）、U（单位缺陷数）。', url: 'notion.yimoorua.top'},
    { title: '普通原因变异是制程固有变异，需系统性改进才能消除。', url: 'notion.yimoorua.top'},
    { title: '特殊原因变异是偶发变异，需立即找到根源并消除。', url: 'notion.yimoorua.top'},
    { title: 'CPK≥1.67 表示制程能力充足，处于优级管控状态。', url: 'notion.yimoorua.top'},
    { title: '1.33≤CPK＜1.67 表示制程能力良好，可正常生产。', url: 'notion.yimoorua.top'},
    { title: '1≤CPK＜1.33 表示制程能力一般，需加强管控。', url: 'notion.yimoorua.top'},
    { title: 'CPK＜1 表示制程能力不足，存在批量不良风险。', url: 'notion.yimoorua.top'},
    { title: '过程能力分析的前提是制程稳定（SPC 无判异）、数据正态分布。', url: 'notion.yimoorua.top'},
    { title: '制程中心偏移是 CPK＜CP 的唯一原因，需调整制程参数纠偏。', url: 'notion.yimoorua.top'},
    { title: '8D 报告是团队导向的问题解决方法，共 8 个核心步骤加 1 个 D0 准备。', url: 'notion.yimoorua.top'},
    { title: '5Why 是通过连续追问 “为什么”，找到问题的根本原因。', url: 'notion.yimoorua.top'},
    { title: '鱼骨图（因果图）结合 5M1E，梳理问题的所有潜在原因。', url: 'notion.yimoorua.top'},
    { title: '柏拉图（帕累托图）遵循二八原则，识别 80% 问题的 20% 关键原因。', url: 'notion.yimoorua.top'},
    { title: '直方图用于展示数据分布，判断是否正态、是否存在偏移。', url: 'notion.yimoorua.top'},
    { title: '散点图用于分析两个变量之间的相关性（正相关 / 负相关 / 无相关）。', url: 'notion.yimoorua.top'},
    { title: '5W2H 是明确问题的工具：何事、何地、何时、何人、为何、如何做、做到何种程度。', url: 'notion.yimoorua.top'},
    { title: '8D 的核心是永久纠正措施，而非临时围堵措施。', url: 'notion.yimoorua.top'},
    { title: '管理评审是最高管理者主导，评审体系的适宜性、充分性、有效性。', url: 'notion.yimoorua.top'},
    { title: '纠正措施是针对问题根本原因制定，防止问题再次发生。', url: 'notion.yimoorua.top'},
    { title: '预防措施是针对潜在问题制定，防止问题首次发生。', url: 'notion.yimoorua.top'},
    { title: '首件检验是批量生产前对首件产品的检验，防止批量不良。', url: 'notion.yimoorua.top'},
    { title: '巡检是 IPQC 核心工作，按规定频次对工序、参数、产品进行检查。', url: 'notion.yimoorua.top'},
    { title: '不合格品处理流程：标识 - 隔离 - 评审 - 处置（返工 / 返修 / 报废 / 特采）。', url: 'notion.yimoorua.top'},
    { title: '特采是特殊情况下的不合格品放行，需经授权并明确后续追溯要求。', url: 'notion.yimoorua.top'},
    { title: '质量成本分四大类：预防成本、鉴定成本、内部损失成本、外部损失成本。', url: 'notion.yimoorua.top'},
    { title: '预防成本是为预防不良发生的投入，如培训、FMEA、设备维护。', url: 'notion.yimoorua.top'},
    { title: '鉴定成本是为检验 / 验证质量的投入，如检验员、检测设备、实验费用。', url: 'notion.yimoorua.top'},
    { title: '内部损失成本是产品出厂前的不良损失，如返工、返修、报废。', url: 'notion.yimoorua.top'},
    { title: '外部损失成本是产品出厂后的不良损失，如退货、索赔、客户投诉处理。', url: 'notion.yimoorua.top'},
    { title: '质量管理的核心是增加预防 / 鉴定成本，降低内 / 外部损失成本，实现总质量成本最优。', url: 'notion.yimoorua.top'}
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '分享知识',
  HEO_HERO_TITLE_2: '与思维认知',
  HEO_HERO_TITLE_3: 'NOTION.YIMOO.TOP',
  HEO_HERO_TITLE_4: '',
  HEO_HERO_TITLE_5: '',
  HEO_HERO_TITLE_LINK: 'notion.yimoo.top',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随便逛逛',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  HEO_HERO_CATEGORY_2: { title: '热门文章', url: '/tag/热门文章' },
  HEO_HERO_CATEGORY_3: { title: '面试指南', url: '/tag/面试指南' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '🤝 专修交互与设计',
    '🏃 脚踏实地行动派',
    '🏠 智能家居小能手',
    '🤖️ 数码科技爱好者',
    '🧱 团队小组发动机'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://github.com/tangly1024',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://www.tangly1024.com',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp',
      color_1: '#989bf8',
      title_2: 'Sketch',
      img_2: '/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'FinalCutPro',
      img_1: '/images/heo/20233e777652412247dd57fd9b48cf997c01070702.webp',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Swift',
      img_1: '/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp',
      color_1: '#eb6840',
      title_2: 'Principle',
      img_2: '/images/heo/2023f76570d2770c8e84801f7e107cd911b5073202.webp',
      color_2: '#8f55ba'
    },
    {
      title_1: 'illustrator',
      img_1: '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp',
      color_1: '#f29e39',
      title_2: 'CSS3',
      img_2: '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/images/heo/202372b4d760fd8a497d442140c295655426070302.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: '/images/heo/20231ca53fa0b09a3ff1df89acd7515e9516173302.webp',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_NOT_BY_AI: false, // 显示非AI写作
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
