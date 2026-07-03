// 水浒传 - 三十六天罡星好汉数据
const HEROES = [
  {
    id: "song_jiang",
    name: "宋江",
    title: "及时雨",
    star: "天魁星",
    rank: 1,
    avatar: "🌧️",
    description: "郓城小吏，仗义疏财，闻名江湖。因杀阎婆惜而逃亡，后辗转上了梁山，成为梁山泊首领。",
    stats: { str: 60, int: 92, chr: 98, agi: 55, luck: 70 },
    story: [
      { type: "narration", text: "郓城县中，宋江身为押司，虽职位低微，却常以钱财救济江湖好汉，人称'及时雨'。" },
      { type: "dialogue", speaker: "宋江", text: "江湖兄弟，有难同当。这点银两，权当路费。" },
      { type: "narration", text: "一日，宋江私放晁盖等人智取生辰纲事发后，晁盖遣刘唐送来书信与黄金答谢。" },
      { type: "dialogue", speaker: "阎婆惜", text: "宋押司，这书信上写的什么？智取生辰纲...这可是杀头大罪！" },
      { type: "choice", text: "阎婆惜要挟报官，宋江当如何是好？", options: [
        { text: "好言相劝，请求归还书信", next: 5 },
        { text: "怒而杀之，夺回信物", next: 6 }
      ]},
      { type: "narration", text: "宋江好言相求，阎婆惜却变本加厉。情急之下，宋江拔刀...", speaker: "旁白" },
      { type: "narration", text: "宋江怒杀阎婆惜，自此开始了逃亡之路。先投柴进，再访花荣，几经波折。" },
      { type: "dialogue", speaker: "宋江", text: "天下之大，竟无容身之处...不如上梁山，与晁盖哥哥共图大事！" },
      { type: "narration", text: "宋江上了梁山，后因晁盖战死，被众人推为首领。他聚集一百单八将，竖起'替天行道'大旗。" },
      { type: "narration", text: "最终宋江接受招安，带领兄弟们南征北战，功成名就却也被奸臣所害，魂断蓼儿洼。" }
    ]
  },
  {
    id: "lu_junyi",
    name: "卢俊义",
    title: "玉麒麟",
    star: "天罡星",
    rank: 2,
    avatar: "🦁",
    description: "北京大名府首富，武艺超群，棍棒天下无双。被吴用设计骗上梁山。",
    stats: { str: 98, int: 65, chr: 80, agi: 70, luck: 45 },
    story: [
      { type: "narration", text: "大名府中，卢俊义家资万贯，武艺绝伦，人称'河北三绝'。" },
      { type: "dialogue", speaker: "卢俊义", text: "我卢某身长九尺，武艺超群，谁人敢来犯我？" },
      { type: "narration", text: "梁山为破曾头市，需要卢俊义这等高手。吴用扮作算命先生，来到卢府。" },
      { type: "dialogue", speaker: "吴用", text: "员外，百日内有血光之灾，须往东南一千里之外躲避。" },
      { type: "choice", text: "卢俊义是否听信算命先生之言？", options: [
        { text: "宁可信其有，前往避祸", next: 5 },
        { text: "不信邪说，留在府中", next: 6 }
      ]},
      { type: "narration", text: "卢俊义带领管家李固等人出行，途中被梁山好汉轮番截杀，最终被困梁山。" },
      { type: "narration", text: "吴用使反间计，让李固先回告发卢俊义私通梁山。卢俊义回家后身陷牢狱。" },
      { type: "narration", text: "梁山好汉大闹大名府，救出卢俊义。卢俊义感激众位兄弟情义，正式加入梁山。" },
      { type: "dialogue", speaker: "卢俊义", text: "卢某有眼不识泰山，今日方知梁山好汉真义气！" },
      { type: "narration", text: "卢俊义坐上了梁山第二把交椅，后随宋江招安，征辽、平方腊，最终却被人陷害，溺水而亡。" }
    ]
  },
  {
    id: "wu_yong",
    name: "吴用",
    title: "智多星",
    star: "天机星",
    rank: 3,
    avatar: "📜",
    description: "梁山军师，足智多谋，通晓文韬武略，人称'赛诸葛'。",
    stats: { str: 45, int: 98, chr: 75, agi: 60, luck: 80 },
    story: [
      { type: "narration", text: "山东济州郓城县东溪村，教书先生吴用，学富五车，智计过人。" },
      { type: "dialogue", speaker: "吴用", text: "晁盖哥哥，生辰纲乃不义之财，取之何妨？我有一计..." },
      { type: "narration", text: "吴用定下妙计，联络阮氏三雄、刘唐、公孙胜，七星聚义，智取生辰纲。" },
      { type: "narration", text: "事发后，吴用随晁盖上梁山。王伦不容，吴用又施激将法，让林冲火并王伦。" },
      { type: "dialogue", speaker: "吴用", text: "林教头，这等心胸狭隘之人，如何做得了山寨之主？" },
      { type: "narration", text: "晁盖死后，吴用辅佐宋江，设下无数妙计。三打祝家庄、大破高唐州、智取大名府..." },
      { type: "choice", text: "梁山日渐壮大，吴用主张如何发展？", options: [
        { text: "广纳贤才，壮大山寨", next: 7 },
        { text: "积蓄力量，等待招安", next: 7 }
      ]},
      { type: "narration", text: "吴用运筹帷幄，梁山聚齐一百单八将。招安后随军出征，宋江被害后，吴用自缢于楚州南门外。" }
    ]
  },
  {
    id: "gongsun_sheng",
    name: "公孙胜",
    title: "入云龙",
    star: "天闲星",
    rank: 4,
    avatar: "🐉",
    description: "道士出身，精通道法，能呼风唤雨，驾雾腾云。",
    stats: { str: 70, int: 88, chr: 70, agi: 75, luck: 85 },
    story: [
      { type: "narration", text: "蓟州九宫县二仙山，道士公孙胜修道多年，习得五雷天罡正法。" },
      { type: "dialogue", speaker: "公孙胜", text: "贫道不图富贵，只取生辰纲这等不义之财，散与百姓。" },
      { type: "narration", text: "公孙胜参与智取生辰纲后上梁山。他道法高强，多次在战斗中呼风唤雨，助梁山取胜。" },
      { type: "narration", text: "高唐州之战，高廉会使妖法，梁山连连失利。宋江派人请来公孙胜。" },
      { type: "dialogue", speaker: "公孙胜", text: "高廉妖法，不过尔尔。看我五雷天罡正法破之！" },
      { type: "narration", text: "公孙胜以正道法术大破高廉妖法，救出柴进，立下大功。" },
      { type: "narration", text: "平定淮西后，公孙胜思念老母，辞别宋江，回二仙山侍奉母亲，修习道术，善终。" }
    ]
  },
  {
    id: "guan_sheng",
    name: "关胜",
    title: "大刀",
    star: "天勇星",
    rank: 5,
    avatar: "🔪",
    description: "三国关羽后裔，使一口青龙偃月刀，有万夫不当之勇。",
    stats: { str: 96, int: 72, chr: 82, agi: 68, luck: 65 },
    story: [
      { type: "narration", text: "蒲东巡检关胜，乃汉末义勇武安王关羽嫡派子孙，生得面如重枣，唇若涂朱。" },
      { type: "dialogue", speaker: "关胜", text: "我祖上武圣关羽，威震华夏。关某不才，愿领兵剿灭梁山草寇！" },
      { type: "narration", text: "朝廷命关胜领兵征讨梁山。关胜武艺高强，连败梁山数将。" },
      { type: "narration", text: "吴用设下埋伏，派呼延灼诈降，引诱关胜中计。" },
      { type: "choice", text: "呼延灼来降，关胜是否相信？", options: [
        { text: "念其同为朝廷命官，信之", next: 5 },
        { text: "小心谨慎，按兵不动", next: 6 }
      ]},
      { type: "narration", text: "关胜中计被擒，宋江亲解其缚，以礼相待。关胜感其诚意，归降梁山。" },
      { type: "narration", text: "关胜虽起疑心，但孤军深入，终被梁山围困，无奈归降。" },
      { type: "dialogue", speaker: "关胜", text: "宋公明义气深重，关某愿效犬马之劳！" },
      { type: "narration", text: "关胜位列马军五虎将之首，南征北战，屡立战功，后在征方腊后病逝。" }
    ]
  },
  {
    id: "lin_chong",
    name: "林冲",
    title: "豹子头",
    star: "天雄星",
    rank: 6,
    avatar: "🐆",
    description: "八十万禁军教头，武艺高强，因高俅迫害而上梁山。",
    stats: { str: 95, int: 70, chr: 72, agi: 78, luck: 35 },
    story: [
      { type: "narration", text: "东京八十万禁军枪棒教头林冲，生得豹头环眼，燕颔虎须，人称'豹子头'。" },
      { type: "dialogue", speaker: "林冲", text: "我林冲一身武艺，只想安稳度日，教好枪棒，谁想..." },
      { type: "narration", text: "高衙内调戏林冲妻子，高俅设计陷害，将林冲刺配沧州。" },
      { type: "dialogue", speaker: "鲁智深", text: "林教头，两个公人想害你性命！洒家在野猪林救你！" },
      { type: "narration", text: "林冲被发配沧州，看守草料场。陆谦等人追来，欲放火烧死林冲。" },
      { type: "choice", text: "草料场火起，林冲该如何？", options: [
        { text: "冲入火中救人", next: 6 },
        { text: "躲过山神庙，看清真相", next: 7 }
      ]},
      { type: "narration", text: "林冲冒死救人，却中了埋伏，险些丧命。侥幸逃脱后，认清了高俅真面目。" },
      { type: "narration", text: "林冲在山神庙中，听见陆谦等人得意忘形，说出真相。怒火中烧，提枪而出！" },
      { type: "dialogue", speaker: "林冲", text: "奸贼！我林冲与你等无冤无仇，为何苦苦相逼！" },
      { type: "narration", text: "林冲雪夜上梁山，火并王伦，推举晁盖。后随宋江招安，征方腊后染病，留杭州六和寺养病，半年后病逝。" }
    ]
  },
  {
    id: "qin_ming",
    name: "秦明",
    title: "霹雳火",
    star: "天猛星",
    rank: 7,
    avatar: "🔥",
    description: "青州指挥司统制，性如烈火，使一条狼牙棒。",
    stats: { str: 93, int: 55, chr: 60, agi: 72, luck: 55 },
    story: [
      { type: "narration", text: "青州指挥司统制秦明，使一条狼牙棒，有万夫不当之勇，因性急如雷，人称'霹雳火'。" },
      { type: "dialogue", speaker: "秦明", text: "反贼！看我霹雳火的厉害！" },
      { type: "narration", text: "宋江攻打清风寨，秦明领兵来战。宋江爱惜秦明武艺，设计收服。" },
      { type: "narration", text: "宋江派人假扮秦明，在青州城外杀人放火。知府误以为真，杀了秦明全家。" },
      { type: "dialogue", speaker: "秦明", text: "我一家老小...宋江！你...你害得我好苦！" },
      { type: "choice", text: "家破人亡，秦明当如何？", options: [
        { text: "怒而复仇，与梁山决裂", next: 6 },
        { text: "无奈接受现实，归降梁山", next: 7 }
      ]},
      { type: "narration", text: "秦明与宋江大战一场，终被众好汉劝住。得知宋江也是为收服自己，无奈长叹。" },
      { type: "narration", text: "秦明思量再三，家已破，人亦死，回不得青州，只得归降梁山。" },
      { type: "dialogue", speaker: "秦明", text: "罢了罢了，秦某今日上山，只求日后多杀仇人！" },
      { type: "narration", text: "秦明位列马军五虎将第三，征方腊时被方杰所杀，英勇战死。" }
    ]
  },
  {
    id: "huyan_zhuo",
    name: "呼延灼",
    title: "双鞭",
    star: "天威星",
    rank: 8,
    avatar: "⛓️",
    description: "汝宁郡都统制，祖上开国功臣，使两条铜鞭，精通连环马阵。",
    stats: { str: 92, int: 75, chr: 78, agi: 70, luck: 60 },
    story: [
      { type: "narration", text: "汝宁郡都统制呼延灼，乃宋朝开国名将呼延赞嫡派子孙，使两条水磨八棱钢鞭。" },
      { type: "dialogue", speaker: "呼延灼", text: "我祖上呼延赞，辅佐太祖开国。呼延灼岂能让梁山草寇猖狂！" },
      { type: "narration", text: "呼延灼以连环马阵大破梁山。梁山节节败退，形势危急。" },
      { type: "narration", text: "吴用派时迁盗了呼延灼的宝马'踢雪乌骓'，又设计让徐宁上山，以大破连环马。" },
      { type: "dialogue", speaker: "呼延灼", text: "我的宝马！可恨！梁山贼寇，使出这等卑鄙手段！" },
      { type: "narration", text: "连环马被破，呼延灼兵败。逃亡途中，被宋江设计擒获。" },
      { type: "choice", text: "被擒之后，呼延灼如何选择？", options: [
        { text: "宁死不降，以死明志", next: 7 },
        { text: "感宋江义气，暂归山寨", next: 8 }
      ]},
      { type: "narration", text: "呼延灼假意归降，寻机逃脱。后被宋江真诚打动，真心归顺。" },
      { type: "narration", text: "呼延灼佩服宋江待人真诚，又见众兄弟义气深重，决心留在梁山。" },
      { type: "dialogue", speaker: "呼延灼", text: "公明哥哥如此相待，呼延灼肝脑涂地，在所不辞！" },
      { type: "narration", text: "呼延灼位列马军五虎将第四，后随宋江招安，平方腊后，在京城任职，善终。" }
    ]
  },
  {
    id: "hua_rong",
    name: "花荣",
    title: "小李广",
    star: "天英星",
    rank: 9,
    avatar: "🏹",
    description: "清风寨武知寨，箭术无双，百步穿杨，人称'小李广'。",
    stats: { str: 82, int: 72, chr: 80, agi: 92, luck: 75 },
    story: [
      { type: "narration", text: "清风寨武知寨花荣，眉飞入鬓，眼若星辰，箭术通神，人称'小李广'。" },
      { type: "dialogue", speaker: "花荣", text: "看我这一箭，射中雁阵第三只大雁的头部！" },
      { type: "narration", text: "宋江杀了阎婆惜后，投奔花荣。不料被清风寨文知寨刘高之妻陷害。" },
      { type: "dialogue", speaker: "刘高", text: "花荣私通贼寇，给我拿下！" },
      { type: "narration", text: "花荣为救宋江，与刘高反目。后被黄信设计擒获，与宋江一同押往青州。" },
      { type: "narration", text: "燕顺、王英、郑天寿等人半路劫囚，救出花荣与宋江。" },
      { type: "choice", text: "花荣是否回清风寨夺回职位？", options: [
        { text: "回去理论，讨回公道", next: 7 },
        { text: "随宋江上梁山，另谋出路", next: 8 }
      ]},
      { type: "narration", text: "花荣回清风寨理论，反被官兵追杀。走投无路，只得投奔梁山。" },
      { type: "narration", text: "花荣看清官场黑暗，决意随宋江上梁山，不再回头。" },
      { type: "dialogue", speaker: "花荣", text: "花某这身武艺，只卖给识货之人。宋哥哥，我跟你走！" },
      { type: "narration", text: "花荣成为梁山神箭手，屡立奇功。宋江被害后，花荣与吴用一同自缢于楚州。" }
    ]
  },
  {
    id: "chai_jin",
    name: "柴进",
    title: "小旋风",
    star: "天贵星",
    rank: 10,
    avatar: "🌪️",
    description: "后周皇族后裔，家中有太祖御赐丹书铁券，仗义疏财。",
    stats: { str: 68, int: 78, chr: 88, agi: 60, luck: 82 },
    story: [
      { type: "narration", text: "沧州横海郡，柴进乃后周世宗柴荣嫡派子孙，家中有太祖御赐丹书铁券，专好结交天下好汉。" },
      { type: "dialogue", speaker: "柴进", text: "诸位英雄远道而来，柴某蓬荜生辉。请！满饮此杯！" },
      { type: "narration", text: "林冲发配沧州时，曾得柴进款待。宋江、武松等也都受过柴进恩惠。" },
      { type: "narration", text: "高唐州知府高廉的妻舅殷天锡，要强占柴进叔父柴皇城的花园。" },
      { type: "dialogue", speaker: "殷天锡", text: "什么丹书铁券？我姐夫高知府就是王法！给我打！" },
      { type: "narration", text: "柴皇城被打死，柴进理论反被下狱。梁山好汉为救柴进，攻打高唐州。" },
      { type: "choice", text: "柴进狱中，该如何应对？", options: [
        { text: "亮出丹书铁券，据理力争", next: 7 },
        { text: "忍辱负重，等待救援", next: 8 }
      ]},
      { type: "narration", text: "高廉根本不认丹书铁券，柴进惨遭毒打。幸得梁山好汉及时攻破高唐州。" },
      { type: "narration", text: "柴进忍气吞声，终于等到梁山大军攻破城池，救他出狱。" },
      { type: "dialogue", speaker: "柴进", text: "多谢众位兄弟救命之恩！柴某愿与诸位同生共死！" },
      { type: "narration", text: "柴进上梁山后，掌管钱粮。招安后化名柯引，潜入方腊内部做内应，立下大功。后辞官回乡，善终。" }
    ]
  },
  {
    id: "li_ying",
    name: "李应",
    title: "扑天雕",
    star: "天富星",
    rank: 11,
    avatar: "🦅",
    description: "独龙岗李家庄庄主，使一条浑铁点钢枪，背藏五口飞刀。",
    stats: { str: 85, int: 76, chr: 75, agi: 80, luck: 72 },
    story: [
      { type: "narration", text: "独龙岗李家庄庄主李应，身长八尺，猿臂善射，背藏五口飞刀，人称'扑天雕'。" },
      { type: "dialogue", speaker: "李应", text: "我李应与祝家庄、扈家庄结盟，保得一方平安。" },
      { type: "narration", text: "时迁偷吃祝家庄报晓鸡被抓，杨雄、石秀投奔李应求救。" },
      { type: "dialogue", speaker: "李应", text: "我与祝家庄有盟约，此事好说。修书一封，祝家必会放人。" },
      { type: "narration", text: "祝家庄不但不放人，还羞辱李应。李应大怒，亲往祝家庄理论，被祝彪射伤臂膀。" },
      { type: "dialogue", speaker: "李应", text: "祝家小儿！我与你势不两立！" },
      { type: "narration", text: "梁山三打祝家庄，李应暗中相助。祝家庄破后，吴用设计将李应骗上梁山。" },
      { type: "choice", text: "李应被骗上梁山，该当如何？", options: [
        { text: "怒而离去，不受胁迫", next: 8 },
        { text: "见众人诚意，暂且留下", next: 9 }
      ]},
      { type: "narration", text: "李应起初大怒，但见宋江诚意相邀，且家眷已被接上山寨，只得留下。" },
      { type: "narration", text: "李应见梁山好汉个个义气，又得知祝家庄与官府勾结，便安心留在梁山。" },
      { type: "dialogue", speaker: "李应", text: "罢了，李应此生，就与兄弟们共进退了！" },
      { type: "narration", text: "李应与柴进共同掌管梁山钱粮。后随宋江招安，平定方腊后，辞官回乡，重做富豪，善终。" }
    ]
  },
  {
    id: "zhu_tong",
    name: "朱仝",
    title: "美髯公",
    star: "天满星",
    rank: 12,
    avatar: "🧔",
    description: "郓城县马兵都头，面如重枣，目若朗星，胡须及腹，似关公再世。",
    stats: { str: 88, int: 68, chr: 85, agi: 72, luck: 68 },
    story: [
      { type: "narration", text: "郓城县马兵都头朱仝，面如重枣，目若朗星，有一部虎须髯，长一尺五寸，人称'美髯公'。" },
      { type: "dialogue", speaker: "朱仝", text: "我朱仝在郓城县，虽为都头，却不愿为难好汉。" },
      { type: "narration", text: "朱仝曾私放晁盖、宋江。后因私放雷横，被判刺配沧州。" },
      { type: "dialogue", speaker: "朱仝", text: "雷横兄弟，你快走！我自有脱身之计。" },
      { type: "narration", text: "沧州知府见朱仝相貌不凡，让朱仝照看小衙内。宋江却想收朱仝上梁山。" },
      { type: "narration", text: "李逵奉命下山，趁朱仝不注意，一斧劈死小衙内，断朱仝后路。" },
      { type: "dialogue", speaker: "朱仝", text: "黑厮！我与你不共戴天！竟对一个孩子下手！" },
      { type: "choice", text: "朱仝怒极，要与李逵拼命，该如何收场？", options: [
        { text: "誓要斩杀李逵，为小衙内报仇", next: 8 },
        { text: "被众人劝住，无奈上梁山", next: 9 }
      ]},
      { type: "narration", text: "朱仝虽怒极，但宋江承诺让李逵赔罪，又感众兄弟情义，终留梁山。" },
      { type: "narration", text: "朱仝报仇无望，知府也不会再容他，走投无路，只得上了梁山。" },
      { type: "dialogue", speaker: "朱仝", text: "罢了，罢了。朱仝此生，便随哥哥们了。" },
      { type: "narration", text: "朱仝后随宋江招安，征方腊后授武节将军，官至太平军节度使，善终。" }
    ]
  },
  {
    id: "lu_zhishen",
    name: "鲁智深",
    title: "花和尚",
    star: "天孤星",
    rank: 13,
    avatar: "⚔️",
    description: "原名鲁达，渭州经略府提辖。三拳打死镇关西，出家为僧，豪爽仗义。",
    stats: { str: 97, int: 60, chr: 78, agi: 65, luck: 75 },
    story: [
      { type: "narration", text: "渭州经略府提辖鲁达，身长八尺，腰阔十围，性如烈火，专好打抱不平。" },
      { type: "dialogue", speaker: "鲁智深", text: "洒家听说镇关西郑屠欺压金翠莲父女，这还了得！" },
      { type: "narration", text: "鲁达找到郑屠，三拳将其打死。为避官司，出家五台山，法名智深。" },
      { type: "dialogue", speaker: "鲁智深", text: "你这厮诈死！洒家慢慢与你理会！" },
      { type: "narration", text: "鲁智深不守清规，醉打山门，被长老荐往东京大相国寺。" },
      { type: "narration", text: "在相国寺看守菜园，倒拔垂杨柳，结识林冲。后野猪林救林冲，护送其到沧州。" },
      { type: "dialogue", speaker: "鲁智深", text: "你两个公人，好生照看林教头。若让我知道你们害他，这把禅杖不认人！" },
      { type: "choice", text: "救林冲后，鲁智深被通缉，该往何处？", options: [
        { text: "回相国寺，向长老请罪", next: 8 },
        { text: "流落江湖，寻找安身之处", next: 9 }
      ]},
      { type: "narration", text: "鲁智深回相国寺，长老已无法庇护，赠其衣钵，令其远走。" },
      { type: "narration", text: "鲁智深流落江湖，后在二龙山落草，与杨志、武松共事。最终三山聚义，同上梁山。" },
      { type: "dialogue", speaker: "鲁智深", text: "哥哥们都在，洒家更待何时！上梁山去也！" },
      { type: "narration", text: "鲁智深征方腊后，在杭州六和寺闻潮信而圆寂，听潮而圆，见信而寂，功德圆满。" }
    ]
  },
  {
    id: "wu_song",
    name: "武松",
    title: "行者",
    star: "天伤星",
    rank: 14,
    avatar: "🐅",
    description: "清河县人，景阳冈打虎英雄，使一双戒刀，武艺绝伦。",
    stats: { str: 96, int: 65, chr: 75, agi: 88, luck: 70 },
    story: [
      { type: "narration", text: "清河县好汉武松，身长八尺，仪表堂堂，因斗殴逃亡，投奔沧州柴进。" },
      { type: "dialogue", speaker: "武松", text: "我武松飘零江湖，多亏柴大官人收留。如今要回清河县寻兄长。" },
      { type: "narration", text: "武松路过景阳冈，不听店家劝阻，连饮十八碗酒，上冈打虎。" },
      { type: "dialogue", speaker: "武松", text: "什么大虫！我武松怕了你不成！看拳！" },
      { type: "narration", text: "武松赤手空拳打死猛虎，成为阳谷县都头，与兄长武大郎团聚。" },
      { type: "narration", text: "潘金莲与西门庆通奸，毒杀武大郎。武松查明真相，斗杀西门庆，手刃潘金莲，为兄报仇。" },
      { type: "choice", text: "为兄报仇后，武松该当如何？", options: [
        { text: "自首投案，承担罪责", next: 7 },
        { text: "远走高飞，躲避追捕", next: 7 }
      ]},
      { type: "narration", text: "武松被刺配孟州。途中醉打蒋门神，帮施恩夺回快活林。后被张都监陷害。" },
      { type: "narration", text: "武松大闹飞云浦，血溅鸳鸯楼，杀张都监满门。后扮作行者，投奔二龙山。" },
      { type: "dialogue", speaker: "武松", text: "杀人者，打虎武松也！" },
      { type: "narration", text: "武松随二龙山众头上梁山。征方腊失去一臂，后在六和寺出家，享年八十，善终。" }
    ]
  },
  {
    id: "dong_ping",
    name: "董平",
    title: "双枪将",
    star: "天立星",
    rank: 15,
    avatar: "🔱",
    description: "东平府都监，使双枪，风流倜傥，人称'董一撞'。",
    stats: { str: 90, int: 60, chr: 82, agi: 85, luck: 55 },
    story: [
      { type: "narration", text: "东平府兵马都监董平，善使两条绿沉枪，风流倜傥，琴棋书画样样精通。" },
      { type: "dialogue", speaker: "董平", text: "我董平人称'双枪将'，东平府里谁人不知？" },
      { type: "narration", text: "宋江攻打东平府，董平出战，与梁山好汉大战数十回合不分胜负。" },
      { type: "narration", text: "董平爱慕东平府太守之女，多次求婚被拒，心中郁闷。" },
      { type: "dialogue", speaker: "董平", text: "程太守竟不允婚！待我破了梁山贼寇，看他还有何话说！" },
      { type: "narration", text: "董平追击梁山军，中了埋伏，被绊马索掀翻，生擒上山。" },
      { type: "choice", text: "被擒后，宋江亲解其缚，董平如何抉择？", options: [
        { text: "感其诚意，归降梁山", next: 7 },
        { text: "假意投降，伺机逃跑", next: 8 }
      ]},
      { type: "narration", text: "董平佩服宋江仁义，又见梁山好汉个个英雄，真心归降。" },
      { type: "narration", text: "董平假意归降，但梁山防守严密，难以逃脱，后真心归顺。" },
      { type: "narration", text: "董平为娶程小姐，引梁山攻破东平府，杀了程太守。后位列马军五虎将第五。征方腊时战死。" }
    ]
  },
  {
    id: "zhang_qing",
    name: "张清",
    title: "没羽箭",
    star: "天捷星",
    rank: 16,
    avatar: "🪨",
    description: "东昌府猛将，善使飞石，百发百中，连败梁山十五将。",
    stats: { str: 80, int: 70, chr: 75, agi: 94, luck: 78 },
    story: [
      { type: "narration", text: "东昌府猛将张清，善用飞石打人，百发百中，人称'没羽箭'。" },
      { type: "dialogue", speaker: "张清", text: "梁山贼寇，看我飞石厉害！" },
      { type: "narration", text: "宋江攻打东昌府，张清出城迎战。飞石连打梁山十五员大将，无人能敌。" },
      { type: "narration", text: "郝思文、徐宁、燕顺、韩滔、彭玘、宣赞...纷纷被张清飞石打伤。" },
      { type: "dialogue", speaker: "宋江", text: "此人飞石如此厉害，如何是好？" },
      { type: "narration", text: "吴用设下计策，引诱张清出城劫粮。张清中计，被林冲率铁骑逼入水中，被俘。" },
      { type: "choice", text: "张清被擒，众将欲杀之报仇，如何处置？", options: [
        { text: "宋江力排众议，亲解其缚", next: 7 },
        { text: "任凭众将处置", next: 7 }
      ]},
      { type: "narration", text: "宋江亲自为张清松绑，以礼相待。张清感动，归降梁山，并引荐兽医皇甫端。" },
      { type: "dialogue", speaker: "张清", text: "宋公明以德报怨，张清愿效犬马！" },
      { type: "narration", text: "张清娶梁山女将仇琼英。征方腊时，张清因枪陷树丛，被厉天闰刺死。" }
    ]
  },
  {
    id: "yang_zhi",
    name: "杨志",
    title: "青面兽",
    star: "天暗星",
    rank: 17,
    avatar: "😤",
    description: "三代将门之后，武侯杨令公之孙，面有青色胎记，善使朴刀。",
    stats: { str: 90, int: 72, chr: 65, agi: 75, luck: 30 },
    story: [
      { type: "narration", text: "三代将门之后杨志，武侯杨令公之孙，面有青色胎记，人称'青面兽'。" },
      { type: "dialogue", speaker: "杨志", text: "我杨志只想搏个封妻荫子，奈何命运多舛！" },
      { type: "narration", text: "杨志失陷花石纲，逃亡江湖。后遇大赦，回京谋求复职，却花光了钱财。" },
      { type: "narration", text: "杨志穷困潦倒，只得卖祖传宝刀。泼皮牛二无理取闹，杨志怒杀牛二。" },
      { type: "dialogue", speaker: "杨志", text: "你这泼皮，一再纠缠！好，我成全你！" },
      { type: "narration", text: "杨志被刺配大名府，幸得梁中书赏识，提拔为管军提辖使。" },
      { type: "narration", text: "梁中书命杨志护送生辰纲。杨志小心谨慎，却敌不过吴用智谋。" },
      { type: "choice", text: "生辰纲被劫，杨志该如何？", options: [
        { text: "回京请罪", next: 8 },
        { text: "流亡江湖", next: 9 }
      ]},
      { type: "narration", text: "杨志回京必死无疑，只得流落江湖。后与鲁智深占据二龙山，最终同上梁山。" },
      { type: "narration", text: "杨志思量再三，回去是死，不如暂避风头。后与鲁智深占据二龙山。" },
      { type: "narration", text: "杨志征方腊时，病倒丹徒县，未能参战，最终病逝。" }
    ]
  },
  {
    id: "xu_ning",
    name: "徐宁",
    title: "金枪手",
    star: "天佑星",
    rank: 18,
    avatar: "🎯",
    description: "东京金枪班教头，使一杆钩镰枪，家传宝甲赛唐猊。",
    stats: { str: 86, int: 72, chr: 70, agi: 80, luck: 65 },
    story: [
      { type: "narration", text: "东京金枪班教头徐宁，使一杆钩镰枪，家有祖传宝甲雁翎圈金甲，人称'金枪手'。" },
      { type: "dialogue", speaker: "徐宁", text: "我徐宁在京城当差，日子过得安稳，何曾想过会有今日？" },
      { type: "narration", text: "呼延灼以连环马攻打梁山，梁山束手无策。汤隆献计，说徐宁钩镰枪可破连环马。" },
      { type: "narration", text: "吴用派时迁盗了徐宁宝甲，汤隆假意邀徐宁追赶，一路引到梁山附近。" },
      { type: "dialogue", speaker: "徐宁", text: "我的宝甲！此乃祖传之物！无论如何也要追回！" },
      { type: "narration", text: "徐宁被蒙汗药麻翻，抬上梁山。醒来见宋江以礼相待，苦劝入伙。" },
      { type: "choice", text: "宝甲已失，家在梁山，徐宁如何抉择？", options: [
        { text: "宁死不从，要求下山", next: 7 },
        { text: "无奈之下，暂且留下", next: 8 }
      ]},
      { type: "narration", text: "徐宁起初不从，但宋江让人接来家眷，又教钩镰枪法大破连环马，终安心留下。" },
      { type: "narration", text: "徐宁见宋江诚意十足，且家眷已被接来，只得留下。后大破连环马，立下大功。" },
      { type: "dialogue", speaker: "徐宁", text: "罢了，徐宁此生便随哥哥们了。" },
      { type: "narration", text: "徐宁征方腊时，被毒箭射中脖颈，医治无效，死于杭州。" }
    ]
  }
];

// 继续添加第19-36位好汉
HEROES.push(
  {
    id: "suo_chao",
    name: "索超",
    title: "急先锋",
    star: "天空星",
    rank: 19,
    avatar: "⚡",
    description: "大名府留守司正牌军，使一柄金蘸斧，性急好战。",
    stats: { str: 91, int: 52, chr: 60, agi: 75, luck: 58 },
    story: [
      { type: "narration", text: "大名府留守司正牌军索超，使一柄金蘸斧，性急如雷，上阵当先，人称'急先锋'。" },
      { type: "dialogue", speaker: "索超", text: "大丈夫当建功立业，何惧一死！" },
      { type: "narration", text: "杨志与周谨比武，索超徒弟周谨落败。索超大怒，与杨志大战五十回合。" },
      { type: "dialogue", speaker: "索超", text: "杨志！敢伤我徒弟，看我金蘸斧！" },
      { type: "narration", text: "宋江攻打大名府，索超出战被擒。宋江亲解其缚，索超感其诚意归降。" },
      { type: "dialogue", speaker: "索超", text: "宋公明果然名不虚传，索超服了！" },
      { type: "narration", text: "索超后随宋江招安，征方腊时被石宝流星锤打死。" }
    ]
  },
  {
    id: "dai_zong",
    name: "戴宗",
    title: "神行太保",
    star: "天速星",
    rank: 20,
    avatar: "👟",
    description: "江州两院押牢节级，有道术神行法，日行八百里。",
    stats: { str: 55, int: 78, chr: 72, agi: 98, luck: 70 },
    story: [
      { type: "narration", text: "江州两院押牢节级戴宗，有道术神行法，将四片神行甲马拴在腿上，能日行八百里。" },
      { type: "dialogue", speaker: "戴宗", text: "我戴宗神行太保，一日能行八百里，谁人追得上我？" },
      { type: "narration", text: "宋江因题反诗被判死刑，戴宗奉命给蔡九知府父亲送信。" },
      { type: "narration", text: "吴用设计伪造回信，被黄文炳识破。戴宗与宋江一同被判斩首。" },
      { type: "dialogue", speaker: "李逵", text: "梁山好汉全伙在此！救公明哥哥和戴院长！" },
      { type: "narration", text: "梁山好汉劫法场，救出宋江与戴宗。戴宗感激救命之恩，正式加入梁山。" },
      { type: "narration", text: "戴宗专司梁山情报传递，神行法屡建奇功。征方腊后辞官，到泰安州岳庙陪堂出家，善终。" }
    ]
  },
  {
    id: "liu_tang",
    name: "刘唐",
    title: "赤发鬼",
    star: "天异星",
    rank: 21,
    avatar: "👹",
    description: "东潞州人，紫黑阔脸，鬓边有朱砂记，江湖好汉。",
    stats: { str: 88, int: 55, chr: 60, agi: 78, luck: 68 },
    story: [
      { type: "narration", text: "东潞州人氏刘唐，紫黑阔脸，鬓边一搭朱砂记，人称'赤发鬼'。" },
      { type: "dialogue", speaker: "刘唐", text: "我刘唐漂泊江湖，闻晁盖哥哥大名，特来相投！" },
      { type: "narration", text: "刘唐探知生辰纲消息，投奔晁盖，引出七星聚义。" },
      { type: "dialogue", speaker: "刘唐", text: "晁盖哥哥，梁中书搜刮十万贯金珠宝贝，此不义之财，取之何妨？" },
      { type: "narration", text: "刘唐参与智取生辰纲，后随晁盖上梁山。善使一把朴刀，作战勇猛。" },
      { type: "narration", text: "刘唐征方腊时，在杭州候潮门之战中被闸板压死。" }
    ]
  },
  {
    id: "li_kui",
    name: "李逵",
    title: "黑旋风",
    star: "天杀星",
    rank: 22,
    avatar: "🪓",
    description: "江州小牢子，使两把板斧，肤色黝黑，性如烈火，忠心耿耿。",
    stats: { str: 95, int: 30, chr: 55, agi: 70, luck: 72 },
    story: [
      { type: "narration", text: "江州小牢子李逵，黑熊般一身粗肉，铁牛似遍体顽皮，使两把板斧，人称'黑旋风'。" },
      { type: "dialogue", speaker: "李逵", text: "我铁牛最佩服宋哥哥！谁若敢动宋哥哥一根汗毛，我活劈了他！" },
      { type: "narration", text: "宋江初到江州，李逵因赌钱输光，向宋江借钱。宋江大方相赠，李逵从此死心塌地。" },
      { type: "narration", text: "宋江题反诗被判斩首，李逵孤身劫法场，两把板斧排头砍去，救出宋江。" },
      { type: "dialogue", speaker: "李逵", text: "不要慌！铁牛来也！杀！" },
      { type: "narration", text: "李逵上了梁山，成为宋江最忠诚的追随者。虽常惹祸，却勇猛无比。" },
      { type: "narration", text: "李逵回家接母，母亲被老虎所食。李逵怒杀四虎，为母报仇。" },
      { type: "choice", text: "李逵误信宋江强抢民女，要砍宋江，该如何？", options: [
        { text: "不问青红皂白，先砍了再说", next: 8 },
        { text: "先查明真相", next: 9 }
      ]},
      { type: "narration", text: "李逵怒火中烧，回山要砍宋江，后发现是有人冒充，负荆请罪。" },
      { type: "narration", text: "李逵虽鲁莽，但对宋江忠心耿耿，最终得知宋江被害，同饮毒酒，随宋江而死。" },
      { type: "dialogue", speaker: "李逵", text: "哥哥既去，铁牛活着还有什么意思！生时服侍哥哥，死了也只是哥哥部下一个小鬼！" }
    ]
  },
  {
    id: "shi_jin",
    name: "史进",
    title: "九纹龙",
    star: "天微星",
    rank: 23,
    avatar: "🐉",
    description: "华阴县史家庄少庄主，身上纹有九条青龙，使一条棒。",
    stats: { str: 89, int: 58, chr: 75, agi: 82, luck: 60 },
    story: [
      { type: "narration", text: "华阴县史家庄少庄主史进，肩臂胸膛纹有九条青龙，使一条棒，人称'九纹龙'。" },
      { type: "dialogue", speaker: "史进", text: "我史进拜王进为师，习得一身好武艺，谁人敢来犯我史家庄！" },
      { type: "narration", text: "史进与少华山朱武、陈达、杨春结交，被官府围捕，火烧史家庄，流落江湖。" },
      { type: "narration", text: "史进寻师不遇，在渭州结识鲁智深，二人意气相投。" },
      { type: "dialogue", speaker: "鲁智深", text: "史大郎好气概！洒家今日认得你了！" },
      { type: "narration", text: "史进后来上少华山落草，再随众人同上梁山。" },
      { type: "narration", text: "史进征方腊时，在昱岭关被庞万春射死，是梁山最先战死的天罡星之一。" }
    ]
  },
  {
    id: "mu_hong",
    name: "穆弘",
    title: "没遮拦",
    star: "天究星",
    rank: 24,
    avatar: "🛡️",
    description: "揭阳镇一霸，江州三霸之一，与其弟穆春称霸揭阳。",
    stats: { str: 86, int: 55, chr: 68, agi: 72, luck: 65 },
    story: [
      { type: "narration", text: "揭阳镇一霸穆弘，与其弟穆春称霸揭阳，人称'没遮拦'。" },
      { type: "dialogue", speaker: "穆弘", text: "揭阳镇一亩三分地，我穆家说了算！" },
      { type: "narration", text: "宋江发配江州，路过揭阳镇，得罪穆春。穆弘带人追杀宋江。" },
      { type: "narration", text: "宋江跳入浔阳江，被张横所救。穆弘追来，得知是及时雨宋江，大惊失色。" },
      { type: "dialogue", speaker: "穆弘", text: "原来是宋公明！穆某有眼不识泰山，万死莫赎！" },
      { type: "narration", text: "宋江题反诗被判死刑，穆弘参与劫法场，后随宋江上梁山。" },
      { type: "narration", text: "穆弘征方腊后，因病留在杭州，后病逝。" }
    ]
  },
  {
    id: "lei_heng",
    name: "雷横",
    title: "插翅虎",
    star: "天退星",
    rank: 25,
    avatar: "🐯",
    description: "郓城县步兵都头，使一把朴刀，膂力过人，能跳二三丈阔涧。",
    stats: { str: 87, int: 55, chr: 65, agi: 82, luck: 62 },
    story: [
      { type: "narration", text: "郓城县步兵都头雷横，使一把朴刀，膂力过人，能跳二三丈阔涧，人称'插翅虎'。" },
      { type: "dialogue", speaker: "雷横", text: "我雷横虽为都头，却最敬重江湖好汉。" },
      { type: "narration", text: "雷横与朱仝一同私放晁盖。后因打死知县城外白秀英，被判刺配。" },
      { type: "dialogue", speaker: "雷横", text: "这娼妓辱我母亲，不打死她，誓不为人！" },
      { type: "narration", text: "朱仝私放雷横，雷横上了梁山。后随宋江招安，征方腊时战死。" }
    ]
  },
  {
    id: "li_jun",
    name: "李俊",
    title: "混江龙",
    star: "天寿星",
    rank: 26,
    avatar: "🐲",
    description: "揭阳岭一霸，江州三霸之一，精通水性，能翻江倒海。",
    stats: { str: 88, int: 78, chr: 82, agi: 80, luck: 85 },
    story: [
      { type: "narration", text: "揭阳岭一霸李俊，精通水性，能翻江倒海，人称'混江龙'。" },
      { type: "dialogue", speaker: "李俊", text: "浔阳江上有我李俊，舟船往来，谁敢不给面子？" },
      { type: "narration", text: "宋江发配江州，路过揭阳岭，被李立麻翻。李俊及时赶到，救下宋江。" },
      { type: "dialogue", speaker: "李俊", text: "原来是宋公明哥哥！险些误了大事！" },
      { type: "narration", text: "李俊与童威、童猛兄弟，称霸揭阳岭。后参与劫法场，随宋江上梁山。" },
      { type: "narration", text: "李俊统领梁山水军，屡建奇功。征方腊后，诈称中风，与童威、童猛出海，成为暹罗国主。" }
    ]
  },
  {
    id: "ruan_xiaoer",
    name: "阮小二",
    title: "立地太岁",
    star: "天剑星",
    rank: 27,
    avatar: "⚓",
    description: "石碣村渔民，阮氏三雄老大，水性极佳，使一把浑铁点钢枪。",
    stats: { str: 87, int: 55, chr: 65, agi: 80, luck: 58 },
    story: [
      { type: "narration", text: "石碣村渔民阮小二，使一把浑铁点钢枪，水性极佳，人称'立地太岁'。" },
      { type: "dialogue", speaker: "阮小二", text: "我阮氏三雄，在这石碣湖打鱼为生，何曾怕过谁？" },
      { type: "narration", text: "吴用联络阮氏三雄，七星聚义智取生辰纲。阮小二与兄弟们踊跃参与。" },
      { type: "dialogue", speaker: "阮小二", text: "这等不义之财，不取白不取！小二第一个赞成！" },
      { type: "narration", text: "阮小二上梁山后，统领水军。征方腊时，在乌龙岭水军之战中，被敌军钩住船只，自刎而死。" }
    ]
  },
  {
    id: "zhang_heng",
    name: "张横",
    title: "船火儿",
    star: "天平星",
    rank: 28,
    avatar: "🔥",
    description: "浔阳江一霸，江州三霸之一，与其弟张顺称霸浔阳江面。",
    stats: { str: 85, int: 52, chr: 62, agi: 78, luck: 60 },
    story: [
      { type: "narration", text: "浔阳江一霸张横，专在江面上劫财，人称'船火儿'。" },
      { type: "dialogue", speaker: "张横", text: "我是浔阳江上的张横，要吃板刀面还是馄饨？" },
      { type: "narration", text: "宋江被穆弘追杀，跳入浔阳江，被张横所救。张横得知是宋江，大惊拜见。" },
      { type: "dialogue", speaker: "张横", text: "原来是及时雨宋公明！我张横有眼不识泰山！" },
      { type: "narration", text: "张横上梁山后，统领水军。征方腊时，在杭州染病，后病逝。" }
    ]
  },
  {
    id: "ruan_xiaowu",
    name: "阮小五",
    title: "短命二郎",
    star: "天罪星",
    rank: 29,
    avatar: "🌊",
    description: "石碣村渔民，阮氏三雄老二，浑号'短命二郎'，水性极佳。",
    stats: { str: 85, int: 55, chr: 62, agi: 82, luck: 55 },
    story: [
      { type: "narration", text: "石碣村渔民阮小五，浑号'短命二郎'，与哥哥阮小二、弟弟阮小七一同打鱼为生。" },
      { type: "dialogue", speaker: "阮小五", text: "人生一世，草生一秋，我们兄弟宁可快活一日，也不枉此生！" },
      { type: "narration", text: "吴用联络阮氏三雄智取生辰纲，阮小五与兄弟们一同参与。" },
      { type: "narration", text: "阮小五上梁山后，统领水军。征方腊时，在清溪县之战中被敌军的弩箭射死。" }
    ]
  },
  {
    id: "zhang_shun",
    name: "张顺",
    title: "浪里白条",
    star: "天损星",
    rank: 30,
    avatar: "🏊",
    description: "浔阳江一霸，张横之弟，水性天下第一，能在水底伏七日七夜。",
    stats: { str: 82, int: 68, chr: 72, agi: 96, luck: 65 },
    story: [
      { type: "narration", text: "浔阳江人张顺，浑身雪练也似白肉，能在水底伏得七日七夜，人称'浪里白条'。" },
      { type: "dialogue", speaker: "张顺", text: "我张顺水里来水里去，哪个敢与我比水性？" },
      { type: "narration", text: "李逵初到江边，与张顺争斗。张顺诱李逵上船，将其翻入水中，李逵被淹得半死。" },
      { type: "dialogue", speaker: "张顺", text: "黑厮！在岸上你厉害，在水里我是爷爷！" },
      { type: "narration", text: "张顺上梁山后，统领水军，屡建奇功。征方腊时，欲从水门潜入杭州城，被闸板压死。" },
      { type: "narration", text: "张顺死后魂魄附身哥哥张横，助梁山攻破杭州。后被追封为金华将军。" }
    ]
  },
  {
    id: "ruan_xiaoqi",
    name: "阮小七",
    title: "活阎罗",
    star: "天败星",
    rank: 31,
    avatar: "⚓",
    description: "石碣村渔民，阮氏三雄老幺，性情刚烈，人称'活阎罗'。",
    stats: { str: 84, int: 50, chr: 60, agi: 85, luck: 70 },
    story: [
      { type: "narration", text: "石碣村渔民阮小七，性情刚烈，人称'活阎罗'，是阮氏三雄中最小的弟弟。" },
      { type: "dialogue", speaker: "阮小七", text: "我阮小七一生任性，不服王法，只服哥哥们！" },
      { type: "narration", text: "阮小七参与智取生辰纲，上梁山后统领水军。" },
      { type: "narration", text: "阮小七性格豪爽，不拘小节。征方腊后，因穿过方腊的龙袍戏耍，被贬为庶民。" },
      { type: "dialogue", speaker: "阮小七", text: "龙袍穿了便穿了，有什么大不了！回家打鱼去也！" },
      { type: "narration", text: "阮小七回到石碣村，重操旧业，与母亲一起打鱼为生，享年六十，善终。" }
    ]
  },
  {
    id: "yang_xiong",
    name: "杨雄",
    title: "病关索",
    star: "天牢星",
    rank: 32,
    avatar: "⛓️",
    description: "蓟州两院押狱兼刽子手，面色微黄，似患病态，使一把朴刀。",
    stats: { str: 85, int: 58, chr: 60, agi: 72, luck: 55 },
    story: [
      { type: "narration", text: "蓟州两院押狱兼刽子手杨雄，面色微黄，人称'病关索'。" },
      { type: "dialogue", speaker: "杨雄", text: "我杨雄虽为刽子手，却最敬重好汉。" },
      { type: "narration", text: "杨雄妻子潘巧云与和尚裴如海通奸，被石秀发现。杨雄怒杀潘巧云。" },
      { type: "dialogue", speaker: "杨雄", text: "贱人！我待你不薄，你竟敢背着我偷人！" },
      { type: "narration", text: "杨雄与石秀杀了潘巧云后，走投无路，与时迁一同投奔梁山。" },
      { type: "narration", text: "杨雄征方腊时，在昱岭关之战中，被乱箭射死。" }
    ]
  },
  {
    id: "shi_xiu",
    name: "石秀",
    title: "拼命三郎",
    star: "天慧星",
    rank: 33,
    avatar: "🔥",
    description: "金陵建康府人，因好打抱不平，人称'拼命三郎'。",
    stats: { str: 88, int: 72, chr: 68, agi: 85, luck: 65 },
    story: [
      { type: "narration", text: "金陵建康府人石秀，平生性直，路见不平，便要去相助，人称'拼命三郎'。" },
      { type: "dialogue", speaker: "石秀", text: "我石秀平生最恨不公之事，拼了命也要管！" },
      { type: "narration", text: "石秀在蓟州卖柴，结识杨雄，二人结为兄弟。" },
      { type: "narration", text: "石秀发现杨雄妻子潘巧云与裴如海通奸，告知杨雄。杨雄不信，石秀设计让杨雄看清真相。" },
      { type: "dialogue", speaker: "石秀", text: "哥哥不信，我自去杀了那奸夫淫妇！" },
      { type: "narration", text: "石秀独劫法场救卢俊义，虽不成功，其勇可见。后随宋江上梁山。" },
      { type: "narration", text: "石秀征方腊时，在昱岭关之战中，与史进一同被庞万春射死。" }
    ]
  },
  {
    id: "xie_zhen",
    name: "解珍",
    title: "两头蛇",
    star: "天暴星",
    rank: 34,
    avatar: "🐍",
    description: "登州猎户，使一把浑铁点钢叉，与其弟解宝并称登州第一猎户。",
    stats: { str: 86, int: 50, chr: 55, agi: 82, luck: 50 },
    story: [
      { type: "narration", text: "登州猎户解珍，使一把浑铁点钢叉，人称'两头蛇'，与弟弟解宝是登州第一猎户。" },
      { type: "dialogue", speaker: "解珍", text: "我兄弟二人，登州山中猛兽，哪个不是我们手中亡魂？" },
      { type: "narration", text: "解珍、解宝射杀猛虎，落入毛太公后园。毛太公贪功，诬陷二人偷虎。" },
      { type: "dialogue", speaker: "解珍", text: "毛太公！明明是我们射杀的虎，你竟敢贪功害命！" },
      { type: "narration", text: "顾大嫂、孙新等人劫狱救出解珍、解宝，众人一同上梁山。" },
      { type: "narration", text: "解珍征方腊时，在乌龙岭之战中，被敌军钩住，从悬崖上摔下身亡。" }
    ]
  },
  {
    id: "xie_bao",
    name: "解宝",
    title: "双尾蝎",
    star: "天哭星",
    rank: 35,
    avatar: "🦂",
    description: "登州猎户，解珍之弟，使一把浑铁点钢叉，人称'双尾蝎'。",
    stats: { str: 85, int: 50, chr: 55, agi: 80, luck: 50 },
    story: [
      { type: "narration", text: "登州猎户解宝，使一把浑铁点钢叉，人称'双尾蝎'，与哥哥解珍并称登州第一猎户。" },
      { type: "dialogue", speaker: "解宝", text: "我兄弟二人，登州山中猛兽，哪个不是我们手中亡魂？" },
      { type: "narration", text: "解宝与哥哥射杀猛虎，被毛太公私吞功劳，诬陷下狱。" },
      { type: "narration", text: "众人劫狱救出解氏兄弟，一同上梁山。解宝作战勇猛，善爬山越岭。" },
      { type: "narration", text: "解宝征方腊时，在乌龙岭之战中，与哥哥解珍一同摔下悬崖身亡。" }
    ]
  },
  {
    id: "yan_qing",
    name: "燕青",
    title: "浪子",
    star: "天巧星",
    rank: 36,
    avatar: "🎸",
    description: "卢俊义心腹家仆，文武双全，精通音律，善相扑，人称'浪子燕青'。",
    stats: { str: 82, int: 88, chr: 95, agi: 94, luck: 90 },
    story: [
      { type: "narration", text: "卢俊义心腹家仆燕青，遍体花绣，文武双全，精通音律，善相扑弩箭，人称'浪子'。" },
      { type: "dialogue", speaker: "燕青", text: "我燕青虽为家仆，却也是条好汉。主人待我如子，我以命相报。" },
      { type: "narration", text: "卢俊义被吴用骗上梁山，李固与贾氏霸占家产。燕青被赶出卢府，沦为乞丐。" },
      { type: "dialogue", speaker: "燕青", text: "李固！你这忘恩负义之徒！我燕青定要救主人出来！" },
      { type: "narration", text: "燕青求助于梁山，众好汉大闹大名府，救出卢俊义。燕青也随之上了梁山。" },
      { type: "narration", text: "燕青多才多艺，在东京结交李师师，为宋江招安牵线搭桥。" },
      { type: "choice", text: "征方腊后，燕青看出朝廷不会放过梁山众人，他该如何？", options: [
        { text: "劝卢俊义一同离去", next: 7 },
        { text: "独自挑着珠宝，悄然离去", next: 8 }
      ]},
      { type: "narration", text: "燕青苦劝卢俊义离去，卢俊义不听。燕青只得独自离去，不知所踪。" },
      { type: "narration", text: "燕青留下书信，挑着一担珠宝，悄然离去，是梁山好汉中结局最好的几人之一。" },
      { type: "dialogue", speaker: "燕青", text: "主人不听我言，燕青只得自寻出路。隐姓埋名，逍遥江湖去也！" }
    ]
  }
);
