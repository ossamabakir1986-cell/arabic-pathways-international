(() => {
  const D = window.ARABIC_COURSE;
  const CFG = window.ARABIC_PATHWAYS_CONFIG || {};
  const KEY = 'arabic-pathways-international-state-v0.1';
  const PRODUCT_ID = 'arabic-international';
  const TTS_DB = 'arabic-pathways-tts-v1';
  const TTS_STORE = 'audio-v0.4.1';

  const REGIONS = {
    general:{en:'Arab world (general)',ar:'العالم العربي (عام)',city_en:'an Arab city',city_ar:'مدينة عربية',currency_en:'local currency',currency_ar:'العملة المحلية',building_en:'public building',building_ar:'مبنى عام',food_en:'local food',food_ar:'طعام محلي',nature_en:'local landscape',nature_ar:'البيئة المحلية'},
    syria:{en:'Syria',ar:'سوريا',city_en:'Damascus',city_ar:'دمشق',currency_en:'Syrian pound',currency_ar:'الليرة السورية',building_en:'traditional courtyard house',building_ar:'بيت دمشقي تقليدي',food_en:'olive and vegetable market',food_ar:'سوق الزيتون والخضروات',nature_en:'mountain and orchard',nature_ar:'جبل وبستان'},
    uae:{en:'United Arab Emirates',ar:'الإمارات العربية المتحدة',city_en:'Abu Dhabi',city_ar:'أبوظبي',currency_en:'UAE dirham',currency_ar:'الدرهم الإماراتي',building_en:'tower, villa and shopping centre',building_ar:'برج وفيلا ومركز تسوق',food_en:'date and fruit market',food_ar:'سوق التمور والفواكه',nature_en:'desert, mangrove and coast',nature_ar:'الصحراء والقرم والساحل'},
    egypt:{en:'Egypt',ar:'مصر',city_en:'Cairo',city_ar:'القاهرة',currency_en:'Egyptian pound',currency_ar:'الجنيه المصري',building_en:'apartment building and museum',building_ar:'عمارة سكنية ومتحف',food_en:'vegetable and bread market',food_ar:'سوق الخضروات والخبز',nature_en:'Nile valley and desert',nature_ar:'وادي النيل والصحراء'},
    saudi:{en:'Saudi Arabia',ar:'السعودية',city_en:'Riyadh',city_ar:'الرياض',currency_en:'Saudi riyal',currency_ar:'الريال السعودي',building_en:'villa, office tower and mosque',building_ar:'فيلا وبرج مكاتب ومسجد',food_en:'date and coffee shop',food_ar:'متجر التمور والقهوة',nature_en:'desert and mountain',nature_ar:'الصحراء والجبل'},
    jordan:{en:'Jordan',ar:'الأردن',city_en:'Amman',city_ar:'عمّان',currency_en:'Jordanian dinar',currency_ar:'الدينار الأردني',building_en:'stone apartment building',building_ar:'عمارة حجرية',food_en:'fruit and vegetable market',food_ar:'سوق الفواكه والخضروات',nature_en:'hills and valley',nature_ar:'التلال والوادي'},
    lebanon:{en:'Lebanon',ar:'لبنان',city_en:'Beirut',city_ar:'بيروت',currency_en:'Lebanese pound',currency_ar:'الليرة اللبنانية',building_en:'apartment building and seafront hotel',building_ar:'عمارة سكنية وفندق ساحلي',food_en:'bakery and produce market',food_ar:'مخبز وسوق خضار',nature_en:'coast and mountain',nature_ar:'الساحل والجبل'},
    qatar:{en:'Qatar',ar:'قطر',city_en:'Doha',city_ar:'الدوحة',currency_en:'Qatari riyal',currency_ar:'الريال القطري',building_en:'tower and cultural centre',building_ar:'برج ومركز ثقافي',food_en:'market and café',food_ar:'سوق ومقهى',nature_en:'coast and desert',nature_ar:'الساحل والصحراء'},
    kuwait:{en:'Kuwait',ar:'الكويت',city_en:'Kuwait City',city_ar:'مدينة الكويت',currency_en:'Kuwaiti dinar',currency_ar:'الدينار الكويتي',building_en:'residential tower and mall',building_ar:'برج سكني ومجمع تجاري',food_en:'fish and vegetable market',food_ar:'سوق السمك والخضروات',nature_en:'coast and desert',nature_ar:'الساحل والصحراء'},
    oman:{en:'Oman',ar:'عُمان',city_en:'Muscat',city_ar:'مسقط',currency_en:'Omani rial',currency_ar:'الريال العُماني',building_en:'low-rise house and fort',building_ar:'منزل منخفض وحصن',food_en:'date and fish market',food_ar:'سوق التمور والسمك',nature_en:'mountain, wadi and coast',nature_ar:'الجبل والوادي والساحل'},
    bahrain:{en:'Bahrain',ar:'البحرين',city_en:'Manama',city_ar:'المنامة',currency_en:'Bahraini dinar',currency_ar:'الدينار البحريني',building_en:'tower and traditional house',building_ar:'برج وبيت تقليدي',food_en:'market and café',food_ar:'سوق ومقهى',nature_en:'island coast',nature_ar:'ساحل الجزيرة'},
    iraq:{en:'Iraq',ar:'العراق',city_en:'Baghdad',city_ar:'بغداد',currency_en:'Iraqi dinar',currency_ar:'الدينار العراقي',building_en:'house, market and public building',building_ar:'بيت وسوق ومبنى عام',food_en:'date and vegetable market',food_ar:'سوق التمور والخضروات',nature_en:'river plain and palm grove',nature_ar:'السهل النهري وبستان النخيل'},
    morocco:{en:'Morocco',ar:'المغرب',city_en:'Rabat',city_ar:'الرباط',currency_en:'Moroccan dirham',currency_ar:'الدرهم المغربي',building_en:'apartment, riad and market',building_ar:'شقة ورياض وسوق',food_en:'fruit, spice and vegetable market',food_ar:'سوق الفواكه والتوابل والخضروات',nature_en:'coast, mountain and farmland',nature_ar:'الساحل والجبل والأرض الزراعية'}
  };

  const T = {
    en:{
      home:'Home',learn:'Learn',practice:'Practice',progress:'Progress',profile:'Profile',continue:'Continue learning',
      welcome:'Welcome',hero:'Learn Modern Standard Arabic from zero to advanced proficiency, with English support when you need it and regional examples that stay in MSA.',
      course:'Course',units:'units',lessons:'lessons',completed:'completed',aid:'English aid',region:'Regional context',
      roadmap:'Course roadmap',goal:'Lesson goal',understand:'Understand',review:'Review',use:'Use',what:'What is happening?',
      why:'Why does it matter?',howq:'How does it work?',examples:'Examples',practiceTitle:'Practice',correct:'Correct',incorrect:'Try again',
      speak:'Speak',write:'Write',reviewTitle:'Quick review',normal:'Listen',slow:'Careful pronunciation',settings:'Learning settings',
      interface:'Panel language',name:'Student name',save:'Save',start:'Start Arabic Pathways',onboard:'Set up your learning experience',
      aidChoice:'English learning aid',on:'On',off:'Off',contextHelp:'Regional context changes places, currencies and examples. It never changes the course into dialect.',
      aidHelp:'English is support, not the course language. You can switch it off as your Arabic grows.',journey:'A0–C2 course',
      next:'Next lesson',back:'Back',voiceLab:'Speaking lab',record:'Record',stop:'Stop',playMine:'Play my recording',aiCheck:'Check with AI',
      recordHint:'Listen first, record yourself, then compare. AI feedback focuses on intelligibility, language control and level-appropriate speaking—not laboratory phoneme scoring.',
      micReady:'Microphone ready.',micRecording:'Recording…',micSaved:'Recording saved.',micUnsupported:'Microphone recording needs localhost or HTTPS in a supported browser.',
      aiNotConnected:'AI checking is prepared but the gateway is not connected yet.',aiChecking:'Checking your Arabic…',aiError:'AI check could not be completed.',
      deviceVoice:'Device Arabic voice',geminiVoice:'Gemini Arabic voice',voiceStatus:'Voice system',gatewayReady:'Gateway URL configured',
      gatewayPending:'Local fallback mode',heard:'AI heard',pronunciation:'Pronunciation',nextStep:'Next step',regional:'Regional example',
      allLevels:'All levels',currentLevel:'Current level',currentUnit:'Current unit',coverage:'Topic coverage',of:'of',levelProgress:'Level progress',
      courseStats:'Full curriculum',ready:'Ready',aidLevel:'Aid at this level',cloud:'Pathways account & cloud sync',email:'Account email',pin:'Private sync PIN',connect:'Connect & save',syncNow:'Sync now',restore:'Restore on this device',lastSync:'Last sync',notConnected:'Not connected',openAdmin:'Open administration'
    },
    ar:{
      home:'الرئيسية',learn:'تعلّم',practice:'تدريب',progress:'التقدم',profile:'الملف الشخصي',continue:'تابع التعلّم',
      welcome:'مرحبًا',hero:'تعلّم العربية الفصحى الحديثة من الصفر حتى مستوى متقدم، مع دعم إنجليزي عند الحاجة وأمثلة إقليمية تبقى بالفصحى.',
      course:'الدورة',units:'وحدات',lessons:'دروس',completed:'مكتمل',aid:'الدعم بالإنجليزية',region:'السياق الإقليمي',
      roadmap:'خريطة الدورة',goal:'هدف الدرس',understand:'افهم',review:'راجع',use:'استخدم',what:'ما الذي يحدث؟',
      why:'لماذا هذا مهم؟',howq:'كيف يعمل؟',examples:'أمثلة',practiceTitle:'تدريب',correct:'صحيح',incorrect:'حاول مرة أخرى',
      speak:'تحدث',write:'اكتب',reviewTitle:'مراجعة سريعة',normal:'استمع',slow:'نطق تعليمي واضح',settings:'إعدادات التعلّم',
      interface:'لغة الواجهة',name:'اسم الطالب',save:'حفظ',start:'ابدأ Arabic Pathways',onboard:'جهّز تجربة التعلّم',
      aidChoice:'الدعم التعليمي بالإنجليزية',on:'تشغيل',off:'إيقاف',contextHelp:'يغيّر السياق الإقليمي الأماكن والعملات والأمثلة، ولا يحوّل الدورة إلى لهجة.',
      aidHelp:'الإنجليزية وسيلة مساعدة وليست لغة الدورة، ويمكن إيقافها مع تقدّمك.',journey:'الدورة الكاملة A0–C2',
      next:'الدرس التالي',back:'رجوع',voiceLab:'مختبر التحدث',record:'سجّل',stop:'إيقاف',playMine:'استمع إلى تسجيلي',aiCheck:'تحقق بالذكاء الاصطناعي',
      recordHint:'استمع أولًا ثم سجّل صوتك وقارن. يركّز التقييم على وضوح النطق والتحكم اللغوي المناسب للمستوى، وليس على قياس مخبري لكل صوت.',
      micReady:'الميكروفون جاهز.',micRecording:'جارٍ التسجيل…',micSaved:'تم حفظ التسجيل.',micUnsupported:'يحتاج التسجيل إلى localhost أو اتصال HTTPS ومتصفح مدعوم.',
      aiNotConnected:'ميزة التحقق بالذكاء الاصطناعي جاهزة، لكن البوابة غير مربوطة بعد.',aiChecking:'جارٍ تقييم العربية…',aiError:'تعذر إكمال التقييم بالذكاء الاصطناعي.',
      deviceVoice:'صوت الجهاز العربي',geminiVoice:'صوت Gemini العربي',voiceStatus:'نظام الصوت',gatewayReady:'رابط البوابة مهيأ',
      gatewayPending:'وضع الصوت الاحتياطي',heard:'سمع الذكاء الاصطناعي',pronunciation:'النطق',nextStep:'الخطوة التالية',regional:'مثال إقليمي',
      allLevels:'كل المستويات',currentLevel:'المستوى الحالي',currentUnit:'الوحدة الحالية',coverage:'تغطية الموضوعات',of:'من',levelProgress:'تقدم المستوى',
      courseStats:'المنهج الكامل',ready:'جاهز',aidLevel:'الدعم في هذا المستوى',cloud:'حساب Pathways والمزامنة السحابية',email:'البريد الإلكتروني للحساب',pin:'رمز المزامنة الخاص',connect:'ربط وحفظ',syncNow:'زامن الآن',restore:'استعادة على هذا الجهاز',lastSync:'آخر مزامنة',notConnected:'غير متصل',openAdmin:'فتح الإدارة'
    }
  };

  let state = load();
  let audioPlayer = null;
  let recorder = null;
  let recorderStream = null;
  let recorderChunks = [];
  let recordedBlob = null;
  let recordedUrl = '';
  const ttsCache = new Map();
  const ttsInflight = new Map();
  let syncTimer = null;

  function defaults(){
    return {view:'home',lang:'en',aid:true,region:'general',name:'',completed:[],currentLesson:'A0-U1-L1',
      selectedLevel:'A0',selectedUnit:'A0-U1',lessonStep:'learn',answers:{},studentId:'',profile:{email:''},
      sync:{enabled:false,email:'',auth:'',credential:'',lastSyncAt:null,lastStatus:'Not connected',pending:false},updatedAt:null};
  }
  function load(){
    try{
      const s=Object.assign(defaults(),JSON.parse(localStorage.getItem(KEY)||'{}'));
      if(!['en','ar'].includes(s.lang))s.lang='en';
      if(!D.levels[s.selectedLevel])s.selectedLevel='A0';
      if(!D.unitIndex[s.selectedUnit])s.selectedUnit=D.levels[s.selectedLevel].units[0].id;
      if(!D.lessonIndex[s.currentLesson])s.currentLesson='A0-U1-L1';
      if(!Array.isArray(s.completed))s.completed=[];
      s.profile=Object.assign({email:''},s.profile||{});
      s.sync=Object.assign(defaults().sync,s.sync||{});
      return s;
    }catch(e){ return defaults(); }
  }
  function save(){ state.updatedAt=new Date().toISOString();localStorage.setItem(KEY,JSON.stringify(state));queueCloudSync(); }
  const tr=k=>(T[state.lang]||T.en)[k]||T.en[k]||k;
  function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function setDir(){document.documentElement.lang=state.lang;document.documentElement.dir=state.lang==='ar'?'rtl':'ltr';}
  function gatewayConfigured(){return /^https:\/\/script\.google\.com\/macros\/s\/.+\/exec(?:\?.*)?$/i.test(String(CFG.gatewayUrl||'').trim());}
  function currentLesson(){return D.lessonIndex[state.currentLesson]||D.allLessons[0];}
  function currentUnit(){const l=currentLesson();return D.unitIndex[l.unitId]||D.unitIndex[state.selectedUnit]||D.allUnits[0];}
  function currentLevel(){return currentLesson().level||state.selectedLevel||'A0';}
  function arabicLevelFromLessonId_(id){const m=String(id||'').toUpperCase().match(/^(A0|A1|A2|B1|B2|C1|C2)/);return m?m[1]:'A0';}
  function currentArabicLevel_(){return arabicLevelFromLessonId_(state.currentLesson);}
  function unitTitle(u){return state.lang==='ar'?u.title_ar:u.title;}
  function lessonTitle(l){return state.lang==='ar'?(l.title_ar||l.title):l.title;}
  function aid(text){return state.aid&&text?`<div class="aid">🇬🇧 ${esc(text)}</div>`:'';}
  function region(){return REGIONS[state.region]||REGIONS.general;}
  function regionalize(s){
    const r=region(), arabic=state.lang==='ar';
    return String(s||'')
      .replaceAll('{city}',arabic?r.city_ar:r.city_en)
      .replaceAll('{currency}',arabic?r.currency_ar:r.currency_en)
      .replaceAll('{building}',arabic?r.building_ar:r.building_en)
      .replaceAll('{food}',arabic?r.food_ar:r.food_en)
      .replaceAll('{nature}',arabic?r.nature_ar:r.nature_en);
  }
  function levelDone(level){
    const ids=new Set(D.levels[level].units.flatMap(u=>u.lessons.map(l=>l.id)));
    return state.completed.filter(x=>ids.has(x)).length;
  }
  function unitDone(unit){return unit.lessons.filter(l=>state.completed.includes(l.id)).length;}
  function levelAid(level){return D.levels[level].aid||'';}

  function navBtn(view,label,icon){return `<button class="${state.view===view?'active':''}" data-nav="${view}">${icon} ${label}</button>`;}
  function shell(content){
    setDir();
    return `<div class="shell"><header class="topbar"><div class="brand"><div class="logo">ع</div><div class="brand-text">Arabic Pathways<small>International · MSA · A0–C2</small></div></div><nav class="nav">${navBtn('home',tr('home'),'⌂')}${navBtn('learn',tr('learn'),'▣')}${navBtn('practice',tr('practice'),'✦')}${navBtn('progress',tr('progress'),'◔')}${navBtn('profile',tr('profile'),'◉')}</nav><div class="spacer"></div><div class="lang-switch"><button data-lang="en" class="${state.lang==='en'?'active':''}">EN</button><button data-lang="ar" class="${state.lang==='ar'?'active':''}">ع</button></div><div class="avatar">${esc((state.name||'A')[0].toUpperCase())}</div></header><main class="main">${content}</main><div class="bottom-nav">${navBtn('home',tr('home'),'⌂')}${navBtn('learn',tr('learn'),'▣')}${navBtn('practice',tr('practice'),'✦')}${navBtn('progress',tr('progress'),'◔')}${navBtn('profile',tr('profile'),'◉')}</div></div>`;
  }

  function home(){
    const l=currentLesson(),u=currentUnit(),level=l.level;
    const overall=Math.round(state.completed.length/Math.max(1,D.stats.lessons)*100);
    const topics=['locations','buildings','colors','animals','food','drinks','plants','fruits','vegetables','daily activities','travel','health','technology','environment','work','education'];
    return shell(`<section class="hero"><div class="hero-grid"><div><div class="eyebrow">${tr('courseStats')} · ${D.stats.levels} ${tr('allLevels')} · ${D.stats.units} ${tr('units')} · ${D.stats.lessons} ${tr('lessons')}</div><h1>${tr('welcome')}${state.name?', '+esc(state.name):''}</h1><p>${tr('hero')}</p><div class="hero-actions"><button class="btn light" data-open-lesson="${l.id}">${tr('continue')} →</button><button class="btn ghost" data-nav="learn">${tr('roadmap')}</button></div></div><div class="hero-art"><div class="scene"><div class="bubble b1">${esc(level)} · ${esc(unitTitle(u))}</div><div class="arabic-big">${esc(l.art||'العربية')}</div><div class="bubble b2">${esc(region()[state.lang==='ar'?'ar':'en'])}</div></div></div></div></section>
      <div class="grid">
        <div class="card metric"><div class="eyebrow">${tr('completed')}</div><div class="num">${overall}%</div><p>${state.completed.length} ${tr('of')} ${D.stats.lessons}</p></div>
        <div class="card metric"><div class="eyebrow">${tr('currentLevel')}</div><div class="num">${level}</div><p>${esc(state.lang==='ar'?D.levels[level].name_ar:D.levels[level].name)}</p></div>
        <div class="card metric"><div class="eyebrow">${tr('aid')}</div><div class="num">${state.aid?'ON':'OFF'}</div><p>${esc(levelAid(level))}</p></div>
        <div class="card metric"><div class="eyebrow">${tr('voiceStatus')}</div><div class="num" style="font-size:20px">${gatewayConfigured()?tr('geminiVoice'):tr('deviceVoice')}</div><p>${gatewayConfigured()?tr('gatewayReady'):tr('gatewayPending')}</p></div>
        <div class="card wide"><h2>${level} · ${esc(unitTitle(u))}</h2><div class="arabic unit-ar-title">${esc(u.title_ar)}</div><p>${esc(u.subtitle)}</p><div class="lesson-row">${u.lessons.map((x,i)=>`<button class="lesson-chip" data-open-lesson="${x.id}">${i+1}. ${esc(lessonTitle(x))} ${state.completed.includes(x.id)?'✓':''}</button>`).join('')}</div></div>
        <div class="card side"><h3>${tr('coverage')}</h3><div class="topic-cloud">${topics.map(x=>`<span>${esc(x)}</span>`).join('')}</div><p>${tr('contextHelp')}</p></div>
      </div>`);
  }

  function learn(){
    const level=D.levels[state.selectedLevel]||D.levels.A0;
    return shell(`<div class="section-title"><div><h2>${tr('journey')}</h2><p>${D.stats.lessons} ${tr('lessons')} · ${D.stats.units} ${tr('units')}</p></div></div>
      <div class="level-tabs">${D.levelOrder.map(k=>`<button class="level-tab ${state.selectedLevel===k?'active':''}" data-level="${k}"><b>${k}</b><small>${esc(state.lang==='ar'?D.levels[k].name_ar:D.levels[k].name)}</small></button>`).join('')}</div>
      <div class="level-summary card"><div><div class="eyebrow">${state.selectedLevel}</div><h2>${esc(state.lang==='ar'?level.name_ar:level.name)}</h2><p>${esc(level.goal)}</p></div><div><b>${tr('aidLevel')}</b><p>${esc(levelAid(state.selectedLevel))}</p></div></div>
      <div class="unit-grid">${level.units.map(u=>`<article class="unit full-unit"><div class="count">${String(u.number).padStart(2,'0')}</div><div class="tag">${tr('ready')}</div><h3 class="arabic">${esc(u.title_ar)}</h3>${state.aid?`<p><b>${esc(u.title)}</b></p>`:''}<p>${esc(u.subtitle)}</p><div class="topic-cloud">${(u.tags||[]).map(x=>`<span>${esc(x)}</span>`).join('')}</div><div class="unit-progress"><span>${unitDone(u)}/5 ${tr('completed')}</span><div><i style="width:${unitDone(u)/5*100}%"></i></div></div><div class="lesson-row">${u.lessons.map((l,i)=>`<button class="lesson-chip" data-open-lesson="${l.id}">${i+1}. ${esc(lessonTitle(l))}${state.completed.includes(l.id)?' ✓':''}</button>`).join('')}</div></article>`).join('')}</div>`);
  }

  function practiceHub(){
    const unit=D.unitIndex[state.selectedUnit]||currentUnit();
    const qs=unit.lessons.flatMap(l=>(l.practice||[]).map((q,idx)=>({lesson:l.title,q,idx}))).slice(0,15);
    return shell(`<div class="section-title"><div><h2>${tr('practice')}</h2><p>${unit.level} · ${esc(unitTitle(unit))}</p></div></div>
      <div class="level-tabs compact">${D.levelOrder.map(k=>`<button class="level-tab ${unit.level===k?'active':''}" data-practice-level="${k}"><b>${k}</b></button>`).join('')}</div>
      <div class="unit-picker">${(D.levels[unit.level]||D.levels.A0).units.map(u=>`<button class="${u.id===unit.id?'active':''}" data-practice-unit="${u.id}">${u.number}. ${esc(unitTitle(u))}</button>`).join('')}</div>
      <div class="card">${qs.map((x,i)=>activity(x.q,`hub-${unit.id}-${i}`)).join('')}</div>`);
  }

  function progress(){
    const overall=Math.round(state.completed.length/Math.max(1,D.stats.lessons)*100);
    const level=D.levels[state.selectedLevel]||D.levels.A0;
    return shell(`<div class="section-title"><div><h2>${tr('progress')}</h2><p>${state.completed.length} ${tr('of')} ${D.stats.lessons} ${tr('completed')}</p></div></div>
      <div class="grid"><div class="card metric"><div class="num">${overall}%</div><p>${tr('course')}</p></div><div class="card wide"><h3>${tr('levelProgress')}</h3><div class="level-progress-list">${D.levelOrder.map(k=>{const d=levelDone(k),total=D.levels[k].units.length*5,p=Math.round(d/total*100);return `<button data-level="${k}" class="level-progress-row"><b>${k}</b><span>${esc(state.lang==='ar'?D.levels[k].name_ar:D.levels[k].name)}</span><div><i style="width:${p}%"></i></div><em>${d}/${total}</em></button>`;}).join('')}</div></div>
      <div class="card wide"><h3>${state.selectedLevel} · ${esc(state.lang==='ar'?level.name_ar:level.name)}</h3>${level.units.map(u=>`<div class="road-row"><b>${String(u.number).padStart(2,'0')}</b><span>${esc(unitTitle(u))}</span><span>${unitDone(u)}/5</span></div>`).join('')}</div></div>`);
  }

  function profile(){
    const regionOptions=Object.entries(REGIONS).map(([k,v])=>`<option value="${k}" ${state.region===k?'selected':''}>${esc(v[state.lang==='ar'?'ar':'en'])}</option>`).join('');
    const connected=Boolean(state.sync?.enabled&&(state.sync.auth||state.sync.credential));
    return shell(`<div class="section-title"><div><h2>${tr('profile')}</h2><p>${tr('settings')}</p></div></div><div class="profile-grid">
      <div class="card"><div class="form-group"><label>${tr('name')}</label><input id="p-name" value="${esc(state.name)}"></div><div class="form-group"><label>${tr('interface')}</label><select id="p-lang"><option value="en" ${state.lang==='en'?'selected':''}>English</option><option value="ar" ${state.lang==='ar'?'selected':''}>العربية</option></select></div><div class="form-group"><label>${tr('region')}</label><select id="p-region">${regionOptions}</select><small>${tr('contextHelp')}</small></div><div class="form-group"><label>${tr('aidChoice')}</label><select id="p-aid"><option value="on" ${state.aid?'selected':''}>${tr('on')}</option><option value="off" ${!state.aid?'selected':''}>${tr('off')}</option></select><small>${tr('aidHelp')}</small></div><button class="btn primary" id="save-profile">${tr('save')}</button></div>
      <div class="card"><h3>${tr('cloud')}</h3><p>${connected?`✓ ${state.sync.lastStatus||'Connected'}`:tr('notConnected')}</p><div class="form-group"><label>${tr('email')}</label><input id="sync-email" type="email" value="${esc(state.sync?.email||state.profile?.email||'')}" ${connected?'disabled':''}></div><div class="form-group"><label>${tr('pin')}</label><input id="sync-pin" type="password" minlength="6" autocomplete="current-password"></div><div class="cloud-actions"><button class="btn primary" id="connect-cloud">${tr('connect')}</button><button class="btn ghost" id="sync-cloud" ${connected?'':'disabled'}>${tr('syncNow')}</button><button class="btn ghost" id="restore-cloud">${tr('restore')}</button></div><small>${tr('lastSync')}: ${state.sync?.lastSyncAt?new Date(state.sync.lastSyncAt).toLocaleString():'—'}</small><hr><a class="btn ghost" href="admin/">${tr('openAdmin')}</a><hr><h3>${tr('voiceStatus')}</h3><div class="voice-status ${gatewayConfigured()?'online':'local'}"><span class="status-dot"></span><div><b>${gatewayConfigured()?tr('geminiVoice'):tr('deviceVoice')}</b><small>${gatewayConfigured()?tr('gatewayReady'):tr('gatewayPending')}</small></div></div><hr><h3>${tr('courseStats')}</h3><p><b>${D.stats.levels}</b> levels · <b>${D.stats.units}</b> units · <b>${D.stats.lessons}</b> lessons</p><p><b>Course language:</b> Modern Standard Arabic</p><p><b>Dialect teaching:</b> None. Regional context only.</p><p><b>English aid:</b> strongest at A0/A1 and progressively lighter at higher levels.</p></div>
    </div>`);
  }

  function lesson(id){
    const l=D.lessonIndex[id]||D.allLessons[0],u=D.unitIndex[l.unitId];
    state.currentLesson=l.id;state.selectedLevel=l.level;state.selectedUnit=l.unitId;save();
    const steps=['learn','understand','practice','use','review'];
    const labels={learn:tr('learn'),understand:tr('understand'),practice:tr('practice'),use:tr('use'),review:tr('review')};
    return shell(`<div class="lesson-shell"><button class="back" data-nav="learn">←</button><section class="lesson-head"><div><div class="eyebrow">${l.level} · Unit ${u.number} · Lesson ${l.id.split('-').pop().replace('L','')}</div><h1 class="arabic lesson-title-ar">${esc(l.title_ar||u.title_ar)}</h1>${state.aid?`<h2 class="aid-title">${esc(l.title)}</h2>`:''}<p>${esc(l.goal_ar||l.goal||'')}</p>${state.aid&&l.goal?aid(l.goal):''}<div class="topic-cloud">${(l.topics||u.tags||[]).map(x=>`<span>${esc(x)}</span>`).join('')}</div><div class="aid-toggle"><span>${tr('aid')}</span><span class="toggle ${state.aid?'on':''}" id="aid-toggle"></span></div></div><div class="lesson-art"><div class="letter-cloud">${esc(l.art||u.title_ar)}</div></div></section>
      <div class="lesson-steps">${steps.map((s,i)=>`<button class="step ${state.lessonStep===s?'active':''}" data-step="${s}"><small>${String(i+1).padStart(2,'0')}</small><strong>${labels[s]}</strong></button>`).join('')}</div>
      <section class="lesson-panel">${lessonPanel(l,state.lessonStep,u)}</section></div>`);
  }

  function arList(items){return `<div class="arabic box">${(items||[]).map(x=>`<div>${esc(x)}</div>`).join('')}</div>`;}
  function vocabularyGrid(items){return `<div class="vocab-grid">${(items||[]).map(x=>`<div class="vocab-item"><span class="arabic">${esc(x[0])}</span>${singleHearButton(x[0])}${state.aid?`<small>${esc(x[1])}</small>`:''}</div>`).join('')}</div>`;}
  function hearButtons(text){const careful=/^(A0|A1)$/.test(currentArabicLevel_());return `<span class="hear-group"><button class="hear" data-speak="${esc(text)}" data-speed="normal">🔊 ${tr('normal')}</button>${careful?`<button class="hear secondary" data-speak="${esc(text)}" data-speed="careful">🐢 ${tr('slow')}</button>`:''}</span>`;}
  function teachingTokens(text){
    const cleaned=String(text||'').trim().replace(/[—–|،,؛;]+/g,' ').replace(/\s+/g,' ');
    if(!cleaned)return [];
    const tokens=cleaned.split(' ').filter(Boolean),strip=t=>t.replace(/[\u064B-\u065F\u0670]/g,'');
    const valid=tokens.length>0&&tokens.every(t=>{const b=strip(t);return b.length===1&&/[\u0621-\u064A\u0671]/.test(b);});
    return valid?tokens:[];
  }
  const ARABIC_LETTER_NAMES={'ا':'أَلِف','أ':'هَمْزَة عَلَى أَلِف','إ':'هَمْزَة تَحْتَ أَلِف','آ':'أَلِف مَدَّة','ء':'هَمْزَة','ب':'بَاء','ت':'تَاء','ث':'ثَاء','ج':'جِيم','ح':'حَاء','خ':'خَاء','د':'دَال','ذ':'ذَال','ر':'رَاء','ز':'زَاي','س':'سِين','ش':'شِين','ص':'صَاد','ض':'ضَاد','ط':'طَاء','ظ':'ظَاء','ع':'عَيْن','غ':'غَيْن','ف':'فَاء','ق':'قَاف','ك':'كَاف','ل':'لَام','م':'مِيم','ن':'نُون','ه':'هَاء','و':'وَاو','ي':'يَاء','ى':'أَلِف مَقْصُورَة','ة':'تَاء مَرْبُوطَة'};
  function singleHearButton(text){return `<button class="hear single" data-speak="${esc(text)}" data-speed="normal" aria-label="Hear ${esc(text)}">🔊</button>`;}
  function soundTileGrid(text){
    const tokens=teachingTokens(text);if(tokens.length<2)return '';
    const strip=t=>t.replace(/[\u064B-\u065F\u0670]/g,''),has=t=>/[\u064B-\u065F\u0670]/.test(t);
    return `<div class="sound-tile-grid">${tokens.map(t=>{const b=strip(t),name=!has(t)&&ARABIC_LETTER_NAMES[b]?ARABIC_LETTER_NAMES[b]:'';return `<button class="sound-tile" data-speak="${esc(t)}" data-speed="normal"><span class="sound-symbol">${esc(t)}</span><span class="sound-caption">🔊 ${name?esc(name):'استمع'}</span></button>`;}).join('')}</div>`;
  }
  function regionalCard(l){
    const ar=regionalize(l.regional_ar||`طبّق هذا الدرس في {city} مستخدمًا {currency} عند الحاجة.`);
    const en=regionalize(l.regional_aid||`Apply this lesson in {city}, using {currency} when relevant.`);
    return `<div class="regional-card"><div class="eyebrow">${tr('regional')} · ${esc(region()[state.lang==='ar'?'ar':'en'])}</div><p class="arabic">${esc(ar)}</p>${aid(en)}</div>`;
  }

  function lessonPanel(l,step,u){
    if(step==='learn'){
      const intro=l.learn?.intro_ar||'';
      return `<h2>${tr('learn')}</h2>${teachingTokens(intro).length>1?soundTileGrid(intro):`<div class="arabic box" style="font-size:2rem">${esc(intro)} ${hearButtons(intro)}</div>`}${aid(l.learn?.intro_aid)}${vocabularyGrid(l.vocabulary||[])}
        ${arList(l.learn?.points_ar||[])}${state.aid?`<ul>${(l.learn?.points_aid||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}
        <div class="visual-flow">${(l.learn?.flow||[]).map(x=>`<div class="flow-card"><b>${esc(x[0])}</b><span>${esc(x[1])}</span></div>`).join('')}</div>${regionalCard(l)}`;
    }
    if(step==='understand'){
      const x=l.understand||{};
      const whatAr=x.what_ar||x.what||'',whyAr=x.why_ar||x.why||'',howAr=x.how_ar||x.how||'',noteAr=x.note_ar||x.note||'';
      return `<h2>${tr('understand')}</h2><h3>${tr('what')}</h3><p class="arabic expl-ar">${esc(whatAr)}</p>${aid(x.what_aid)}
        <h3>${tr('why')}</h3><div class="why"><p class="arabic expl-ar">${esc(whyAr)}</p>${aid(x.why_aid)}</div>
        <h3>${tr('howq')}</h3><p class="arabic expl-ar">${esc(howAr)}</p>${aid(x.how_aid)}
        <h3>${tr('examples')}</h3>${(x.examples||[]).map(e=>`<div class="activity example-sound"><div class="arabic" style="font-size:1.65rem">${esc(e[0])} ${teachingTokens(e[0]).length===1?singleHearButton(e[0]):hearButtons(e[0])}</div>${aid(e[1])}</div>`).join('')}
        <div class="note-ar">💡 <span class="arabic">${esc(noteAr)}</span>${aid(x.note_aid)}</div>`;
    }
    if(step==='practice')return `<h2>${tr('practiceTitle')}</h2>${(l.practice||[]).map((q,i)=>activity(q,`${l.id}-${i}`)).join('')}`;
    if(step==='use'){
      const writeAr=l.use?.write_ar||l.use?.write||'',writeAid=l.use?.write_aid||'';
      return `<h2>${tr('use')}</h2><h3>🗣 ${tr('speak')}</h3>${teachingTokens(l.use?.speak_ar||'').length>1?soundTileGrid(l.use.speak_ar):`<div class="arabic box" style="font-size:1.8rem">${esc(l.use?.speak_ar||'')} ${hearButtons(l.use?.speak_ar||'')}</div>`}${aid(l.use?.speak_aid)}${voiceLab(l)}
        <h3>✍️ ${tr('write')}</h3><div class="activity"><p class="arabic expl-ar">${esc(writeAr)}</p>${aid(writeAid)}</div>${regionalCard(l)}`;
    }
    const rev=l.review||[],revAid=l.review_aid||[];
    return `<h2>${tr('reviewTitle')}</h2><div class="roadmap">${rev.map((x,i)=>`<div class="road-row"><b>✓</b><span class="arabic">${esc(x)}</span><span>${state.aid&&revAid[i]?esc(revAid[i]):''}</span></div>`).join('')}</div>
      <div style="margin-top:20px;display:flex;gap:10px;flex-wrap:wrap"><button class="btn primary" data-complete="${l.id}">✓ ${tr('completed')}</button>${nextLesson(l)?`<button class="btn ghost" data-open-lesson="${nextLesson(l).id}">${tr('next')} →</button>`:''}</div>`;
  }

  function activity(q,key){
    const ans=state.answers[key],question=state.aid?(q.q_aid||q.q||q.q_ar):(q.q_ar||q.q||q.q_aid);
    return `<div class="activity"><b class="${state.aid?'':'arabic'}">${esc(question||'')}</b>${state.aid&&q.q_ar?`<div class="arabic activity-ar-q">${esc(q.q_ar)}</div>`:''}<div class="options">${(q.opts||[]).map((o,i)=>`<button class="option ${ans!==undefined?(i===q.a?'correct':(i===ans?'wrong':'')):''}" data-answer="${key}" data-index="${i}">${esc(o)}</button>`).join('')}</div>${ans!==undefined?`<div class="feedback">${ans===q.a?'✓ '+tr('correct'):'↻ '+tr('incorrect')}${state.aid&&q.hint_aid?` · ${esc(q.hint_aid)}`:''}</div>`:''}</div>`;
  }
  function nextLesson(l){const i=D.allLessons.findIndex(x=>x.id===l.id);return D.allLessons[i+1]||null;}

  function voiceLab(l){
    return `<div class="voice-lab" id="voice-lab" data-target="${esc(l.use?.speak_ar||'')}" data-lesson="${esc(l.id)}" data-level="${esc(l.level||arabicLevelFromLessonId_(l.id))}"><div class="voice-lab-head"><div><div class="eyebrow">AI + microphone · ${esc(l.level)}</div><h3>🎙 ${tr('voiceLab')}</h3></div><span class="voice-provider">${gatewayConfigured()?tr('geminiVoice'):tr('deviceVoice')}</span></div><p>${tr('recordHint')}</p><div class="voice-controls"><button class="btn record" id="record-start">● ${tr('record')}</button><button class="btn ghost" id="record-stop" disabled>■ ${tr('stop')}</button><button class="btn ghost" id="record-play" disabled>▶ ${tr('playMine')}</button><button class="btn ai" id="record-check" disabled>✦ ${tr('aiCheck')}</button></div><audio id="recording-audio" controls hidden></audio><div class="voice-message" id="voice-message">${gatewayConfigured()?tr('micReady'):tr('aiNotConnected')}</div><div id="voice-feedback"></div></div>`;
  }

  function onboarding(){
    const regionOptions=Object.entries(REGIONS).map(([k,v])=>`<option value="${k}">${esc(v.en)}</option>`).join('');
    return `<div class="modal-wrap"><div class="modal"><div class="onboard-art">ا · ب · ت</div><div class="eyebrow">Arabic Pathways — International · A0–C2</div><h2>${tr('onboard')}</h2><p>${tr('hero')}</p><div class="profile-grid"><div><div class="form-group"><label>${tr('name')}</label><input id="o-name" placeholder="Your name"></div><div class="form-group"><label>${tr('interface')}</label><select id="o-lang"><option value="en">English</option><option value="ar">العربية</option></select></div></div><div><div class="form-group"><label>${tr('region')}</label><select id="o-region">${regionOptions}</select><small>${tr('contextHelp')}</small></div><div class="form-group"><label>${tr('aidChoice')}</label><select id="o-aid"><option value="on">English aid ON</option><option value="off">English aid OFF</option></select><small>${tr('aidHelp')}</small></div></div></div><button class="btn primary" id="create-profile">${tr('start')}</button></div></div>`;
  }

  function render(){
    cleanupRecording(false);
    let c=state.view==='home'?home():state.view==='learn'?learn():state.view==='practice'?practiceHub():state.view==='progress'?progress():state.view==='profile'?profile():state.view==='lesson'?lesson(state.currentLesson):home();
    document.getElementById('app').innerHTML=c+(!state.name?onboarding():'');bind();
  }
  function bind(){
    document.querySelectorAll('[data-nav]').forEach(b=>b.onclick=()=>{state.view=b.dataset.nav;save();render();scrollTo(0,0);});
    document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{state.lang=b.dataset.lang;save();render();});
    document.querySelectorAll('[data-level]').forEach(b=>b.onclick=()=>{state.selectedLevel=b.dataset.level;state.selectedUnit=D.levels[state.selectedLevel].units[0].id;save();render();});
    document.querySelectorAll('[data-open-lesson]').forEach(b=>b.onclick=()=>{const l=D.lessonIndex[b.dataset.openLesson];state.currentLesson=l.id;state.selectedLevel=l.level;state.selectedUnit=l.unitId;state.lessonStep='learn';state.view='lesson';save();render();scrollTo(0,0);});
    document.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>{state.lessonStep=b.dataset.step;save();render();scrollTo(0,document.querySelector('.lesson-steps')?.offsetTop-90||0);});
    document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{state.answers[b.dataset.answer]=Number(b.dataset.index);save();render();});
    document.querySelectorAll('[data-speak]').forEach(b=>b.onclick=()=>speak(b.dataset.speak,b.dataset.speed||'normal',b));
    document.querySelectorAll('[data-complete]').forEach(b=>b.onclick=()=>{if(!state.completed.includes(b.dataset.complete))state.completed.push(b.dataset.complete);const nx=nextLesson(D.lessonIndex[b.dataset.complete]);if(nx){state.currentLesson=nx.id;state.selectedLevel=nx.level;state.selectedUnit=nx.unitId;}save();render();});
    document.querySelectorAll('[data-practice-unit]').forEach(b=>b.onclick=()=>{state.selectedUnit=b.dataset.practiceUnit;state.selectedLevel=D.unitIndex[state.selectedUnit].level;save();render();});
    document.querySelectorAll('[data-practice-level]').forEach(b=>b.onclick=()=>{state.selectedLevel=b.dataset.practiceLevel;state.selectedUnit=D.levels[state.selectedLevel].units[0].id;save();render();});
    const at=document.getElementById('aid-toggle');if(at)at.onclick=()=>{state.aid=!state.aid;save();render();};
    const sp=document.getElementById('save-profile');if(sp)sp.onclick=()=>{state.name=document.getElementById('p-name').value.trim()||state.name;state.lang=document.getElementById('p-lang').value;state.region=document.getElementById('p-region').value;state.aid=document.getElementById('p-aid').value==='on';save();render();};
    const cp=document.getElementById('create-profile');if(cp)cp.onclick=()=>{state.name=document.getElementById('o-name').value.trim()||'Student';state.lang=document.getElementById('o-lang').value;state.region=document.getElementById('o-region').value;state.aid=document.getElementById('o-aid').value==='on';save();render();};
    const cc=document.getElementById('connect-cloud');if(cc)cc.onclick=()=>cloudAction(cc,'connect');
    const sc=document.getElementById('sync-cloud');if(sc)sc.onclick=()=>cloudAction(sc,'save');
    const rc=document.getElementById('restore-cloud');if(rc)rc.onclick=()=>cloudAction(rc,'restore');
    bindRecorder();
  }

  function newStudentId(){return 'ap_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,10);}
  async function sha256(text){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(text));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');}
  async function accountKeys(email,pin){return{auth:await sha256(`EnglishPathways|${email}|${pin}`),credential:await sha256(`EnglishPathwaysPIN|${pin}`)}}
  function cloudBundle(){const clean=JSON.parse(JSON.stringify(state));clean.sync={...clean.sync,auth:'',credential:''};return{formatVersion:1,productId:PRODUCT_ID,courseVersion:'0.4.1',savedAt:new Date().toISOString(),state:clean};}
  async function postGatewayJson(payload){const requestId='ap_sync_'+Date.now()+'_'+Math.random().toString(36).slice(2);await fetch(String(CFG.gatewayUrl).trim(),{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({...payload,requestId})});return pollQueued(requestId,45000);}
  async function cloudSave(){if(!navigator.onLine||!state.sync?.enabled)throw Error('Offline');state.sync.lastStatus='Syncing…';localStorage.setItem(KEY,JSON.stringify(state));const r=await postGatewayJson({action:'productSyncSave',productId:PRODUCT_ID,studentId:state.studentId,email:state.sync.email,auth:state.sync.auth||'',credential:state.sync.credential||'',data:JSON.stringify(cloudBundle()),savedAt:state.updatedAt||new Date().toISOString()});if(!r?.ok)throw Error(r?.error||'Cloud save failed.');state.studentId=r.studentId||state.studentId;state.sync.lastSyncAt=new Date().toISOString();state.sync.lastStatus='Synced';state.sync.pending=false;localStorage.setItem(KEY,JSON.stringify(state));return r;}
  async function cloudLoad(email,auth,credential){const r=await jsonp({action:'productSyncLoad',productId:PRODUCT_ID,email,auth,credential},30000);if(!r?.ok)throw Error(r?.error||'No Arabic cloud progress found.');const data=typeof r.data==='string'?JSON.parse(r.data):r.data;if(!data?.state)throw Error('Cloud progress is incomplete.');const localUpdated=Date.parse(state.updatedAt||0),remoteUpdated=Date.parse(data.savedAt||data.state.updatedAt||0);if(localUpdated&&remoteUpdated&&localUpdated>remoteUpdated&&!confirm('This device has newer Arabic progress. Replace it with the older cloud copy?'))return false;localStorage.setItem(KEY+'-before-cloud-restore',JSON.stringify(state));state=Object.assign(defaults(),data.state);state.profile=Object.assign({email},state.profile||{});state.studentId=r.studentId||state.studentId||newStudentId();state.sync={...defaults().sync,...(state.sync||{}),enabled:true,email,auth,credential,lastSyncAt:new Date().toISOString(),lastStatus:'Restored',pending:false};localStorage.setItem(KEY,JSON.stringify(state));return true;}
  function queueCloudSync(){clearTimeout(syncTimer);if(!state.sync?.enabled)return;state.sync.pending=true;state.sync.lastStatus=navigator.onLine?'Changes waiting':'Sync pending';localStorage.setItem(KEY,JSON.stringify(state));syncTimer=setTimeout(()=>cloudSave().catch(()=>{state.sync.pending=true;state.sync.lastStatus='Sync pending';localStorage.setItem(KEY,JSON.stringify(state));}),8000);}
  async function cloudAction(button,mode){const old=button.textContent;button.disabled=true;button.textContent='…';try{const email=String(document.getElementById('sync-email')?.value||state.sync.email||'').trim().toLowerCase(),pin=String(document.getElementById('sync-pin')?.value||'');if(!email||pin.length<6)throw Error('Enter an email and a PIN of at least 6 characters.');const keys=await accountKeys(email,pin);if(mode==='restore'){if(await cloudLoad(email,keys.auth,keys.credential))render();return;}state.studentId=state.studentId||newStudentId();state.profile.email=email;state.sync={...state.sync,enabled:true,email,...keys,lastStatus:'Connecting…'};localStorage.setItem(KEY,JSON.stringify(state));await cloudSave();render();}catch(e){state.sync.lastStatus='Sync pending';localStorage.setItem(KEY,JSON.stringify(state));alert(e.message||e);button.disabled=false;button.textContent=old;}}

  function prepareTeachingSpeech(text){
    const original=String(text||'').trim();if(!original)return {spoken:'',chunks:[]};
    const cleaned=original.replace(/[—–|،,؛;]+/g,' ').replace(/\s+/g,' ').trim(),tokens=cleaned.split(' ').filter(Boolean),strip=t=>t.replace(/[\u064B-\u065F\u0670]/g,''),has=t=>/[\u064B-\u065F\u0670]/.test(t);
    const teachable=tokens.length>0&&tokens.every(t=>{const b=strip(t);return b.length===1&&/[\u0621-\u064A\u0671]/.test(b);});
    if(!teachable)return {spoken:original,chunks:[original]};
    const chunks=tokens.map(t=>{const b=strip(t);return !has(t)&&ARABIC_LETTER_NAMES[b]?ARABIC_LETTER_NAMES[b]:t;});
    return {spoken:chunks.join('. '),chunks};
  }
  async function speak(text,speed='normal',button){
    const label=button?button.innerHTML:'',teaching=prepareTeachingSpeech(text);
    if(button){button.disabled=true;button.classList.add('busy');button.innerHTML='…';}
    try{
      if(gatewayConfigured()){
        const level=currentArabicLevel_(),key=`v0.4.1|${level}|${speed}|${teaching.spoken}`;let url=ttsCache.get(key);
        if(!url){let blob=await ttsDbGet(key);if(!blob){let pending=ttsInflight.get(key);if(!pending){pending=(async()=>{const data=await jsonp({action:'arabicTts',text:teaching.spoken,mode:speed==='careful'?'slow':'normal',level},35000);if(!data||!data.ok||!data.audioBase64)throw new Error(data&&data.error||'No audio returned.');const b=audioBlobFromResponse(data);await ttsDbPut(key,b);return b;})();ttsInflight.set(key,pending);}try{blob=await pending;}finally{ttsInflight.delete(key);}}url=URL.createObjectURL(blob);ttsCache.set(key,url);}
        if(audioPlayer)audioPlayer.pause();audioPlayer=new Audio(url);await audioPlayer.play();return;
      }
      await fallbackSpeak(teaching.chunks,speed);
    }catch(err){console.warn('Arabic voice fallback:',err);try{await fallbackSpeak(teaching.chunks,speed);}catch(_){}}
    finally{if(button){button.disabled=false;button.classList.remove('busy');button.innerHTML=label;}}
  }
  function fallbackSpeak(chunks,speed){
    return new Promise(resolve=>{if(!('speechSynthesis'in window)){resolve();return;}window.speechSynthesis.cancel();const list=Array.isArray(chunks)&&chunks.length?chunks:[''],voices=window.speechSynthesis.getVoices(),arabic=voices.find(v=>/^ar[-_]/i.test(v.lang||''));let i=0;const gap=speed==='careful'?620:260;
      const next=()=>{if(i>=list.length){resolve();return;}const u=new SpeechSynthesisUtterance(list[i++]);u.lang='ar';u.rate=speed==='careful'?.5:.82;u.pitch=1;if(arabic)u.voice=arabic;u.onend=()=>setTimeout(next,gap);u.onerror=()=>setTimeout(next,gap);window.speechSynthesis.speak(u);};next();
    });
  }
  function jsonp(params,timeout=15000){
    return new Promise((resolve,reject)=>{if(!gatewayConfigured())return reject(new Error('Gateway is not configured.'));const cb='apcb_'+Date.now()+'_'+Math.random().toString(36).slice(2),script=document.createElement('script');let done=false;
      const finish=(fn,val)=>{if(done)return;done=true;clearTimeout(timer);delete window[cb];script.remove();fn(val);};window[cb]=data=>finish(resolve,data);const qs=new URLSearchParams(Object.assign({},params,{prefix:cb}));script.src=String(CFG.gatewayUrl).trim()+'?'+qs.toString();script.onerror=()=>finish(reject,new Error('Gateway request failed.'));const timer=setTimeout(()=>finish(reject,new Error('Gateway request timed out.')),timeout);document.head.appendChild(script);
    });
  }
  function audioBlobFromResponse(data){const mime=String(data.mimeType||'audio/L16').toLowerCase();if(mime.includes('l16')||mime.includes('pcm'))return pcm16ToWavBlob(data.audioBase64,Number(data.sampleRate||24000));const bytes=base64Bytes(data.audioBase64);return new Blob([bytes],{type:data.mimeType||'audio/mpeg'});}
  function ttsDb(){return new Promise((ok,no)=>{if(!window.indexedDB)return no(Error('IndexedDB unavailable'));const r=indexedDB.open(TTS_DB,1);r.onupgradeneeded=()=>{if(!r.result.objectStoreNames.contains(TTS_STORE))r.result.createObjectStore(TTS_STORE)};r.onsuccess=()=>ok(r.result);r.onerror=()=>no(r.error)})}
  async function ttsDbGet(k){try{const d=await ttsDb();return await new Promise((ok,no)=>{const r=d.transaction(TTS_STORE).objectStore(TTS_STORE).get(k);r.onsuccess=()=>ok(r.result||null);r.onerror=()=>no(r.error)})}catch(e){return null}}
  async function ttsDbPut(k,b){try{const d=await ttsDb();await new Promise((ok,no)=>{const t=d.transaction(TTS_STORE,'readwrite');t.objectStore(TTS_STORE).put(b,k);t.oncomplete=ok;t.onerror=()=>no(t.error)})}catch(e){}}
  function base64Bytes(b64){const raw=atob(b64),out=new Uint8Array(raw.length);for(let i=0;i<raw.length;i++)out[i]=raw.charCodeAt(i);return out;}
  function pcm16ToWavBlob(b64,sampleRate){const pcm=base64Bytes(b64),buffer=new ArrayBuffer(44+pcm.length),view=new DataView(buffer),write=(off,s)=>{for(let i=0;i<s.length;i++)view.setUint8(off+i,s.charCodeAt(i));};write(0,'RIFF');view.setUint32(4,36+pcm.length,true);write(8,'WAVE');write(12,'fmt ');view.setUint32(16,16,true);view.setUint16(20,1,true);view.setUint16(22,1,true);view.setUint32(24,sampleRate,true);view.setUint32(28,sampleRate*2,true);view.setUint16(32,2,true);view.setUint16(34,16,true);write(36,'data');view.setUint32(40,pcm.length,true);new Uint8Array(buffer,44).set(pcm);return new Blob([buffer],{type:'audio/wav'});}

  function bindRecorder(){
    const lab=document.getElementById('voice-lab');if(!lab)return;const start=document.getElementById('record-start'),stop=document.getElementById('record-stop'),play=document.getElementById('record-play'),check=document.getElementById('record-check');
    start.onclick=()=>startRecording(lab,start,stop,play,check);stop.onclick=()=>stopRecording(start,stop);play.onclick=()=>{const a=document.getElementById('recording-audio');if(a&&recordedUrl){a.hidden=false;a.play().catch(()=>{});}};check.onclick=()=>checkRecordingWithAI(lab,check);
  }
  async function startRecording(lab,start,stop,play,check){
    const msg=document.getElementById('voice-message'),feedback=document.getElementById('voice-feedback');if(feedback)feedback.innerHTML='';if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia||!window.MediaRecorder){if(msg)msg.textContent=tr('micUnsupported');return;}
    try{cleanupRecording(true);recorderStream=await navigator.mediaDevices.getUserMedia({audio:true});const preferred=['audio/webm;codecs=opus','audio/ogg;codecs=opus'],mime=preferred.find(x=>MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(x));recorder=new MediaRecorder(recorderStream,mime?{mimeType:mime}:undefined);recorderChunks=[];recorder.ondataavailable=e=>{if(e.data&&e.data.size)recorderChunks.push(e.data);};recorder.onstop=()=>{const type=recorder.mimeType||recorderChunks[0]?.type||'audio/webm';recordedBlob=new Blob(recorderChunks,{type});if(recordedUrl)URL.revokeObjectURL(recordedUrl);recordedUrl=URL.createObjectURL(recordedBlob);const audio=document.getElementById('recording-audio');if(audio){audio.src=recordedUrl;audio.hidden=false;}if(msg)msg.textContent=tr('micSaved');if(play)play.disabled=false;if(check)check.disabled=false;if(recorderStream){recorderStream.getTracks().forEach(t=>t.stop());recorderStream=null;}};recorder.start();start.disabled=true;stop.disabled=false;play.disabled=true;check.disabled=true;if(msg)msg.textContent=tr('micRecording');
    }catch(err){if(msg)msg.textContent=tr('micUnsupported');console.warn(err);}
  }
  function stopRecording(start,stop){if(recorder&&recorder.state==='recording')recorder.stop();if(start)start.disabled=false;if(stop)stop.disabled=true;}
  function cleanupRecording(preserveBlob){if(recorder&&recorder.state==='recording'){try{recorder.stop();}catch(e){}}if(recorderStream){recorderStream.getTracks().forEach(t=>t.stop());recorderStream=null;}recorder=null;recorderChunks=[];if(!preserveBlob){recordedBlob=null;if(recordedUrl){URL.revokeObjectURL(recordedUrl);recordedUrl='';}}}
  async function checkRecordingWithAI(lab,button){
    const msg=document.getElementById('voice-message'),feedback=document.getElementById('voice-feedback');if(!recordedBlob)return;if(!gatewayConfigured()){if(msg)msg.textContent=tr('aiNotConnected');return;}button.disabled=true;button.classList.add('busy');if(msg)msg.textContent=tr('aiChecking');if(feedback)feedback.innerHTML='';
    try{const b64=await blobBase64(recordedBlob),requestId='apv_'+Date.now()+'_'+Math.random().toString(36).slice(2,10);postToGateway({action:'gradeArabicVoice',requestId,audioBase64:b64,mimeType:recordedBlob.type||'audio/webm',level:(lab.dataset.level||currentArabicLevel_()),skill:'Pronunciation',task:'Complete the level-appropriate Arabic speaking task accurately and naturally.',targetText:lab.dataset.target||'',feedbackLanguage:state.lang});const result=await pollQueued(requestId,45000);if(!result||!result.ok||!result.grading)throw new Error(result&&result.error||'No grading returned.');showVoiceFeedback(result.grading,feedback);if(msg)msg.textContent='✓ '+tr('aiCheck');
    }catch(err){if(msg)msg.textContent=tr('aiError');console.warn(err);}finally{button.disabled=false;button.classList.remove('busy');}
  }
  function blobBase64(blob){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(String(r.result).split(',')[1]||'');r.onerror=reject;r.readAsDataURL(blob);});}
  function postToGateway(payload){const iframe=document.createElement('iframe'),name='ap_post_'+Date.now()+'_'+Math.random().toString(36).slice(2);iframe.name=name;iframe.hidden=true;const form=document.createElement('form');form.method='POST';form.action=String(CFG.gatewayUrl).trim();form.target=name;form.hidden=true;Object.entries(payload).forEach(([k,v])=>{const i=document.createElement('input');i.type='hidden';i.name=k;i.value=typeof v==='string'?v:JSON.stringify(v);form.appendChild(i);});document.body.append(iframe,form);form.submit();setTimeout(()=>{form.remove();iframe.remove();},8000);}
  async function pollQueued(requestId,timeout){const started=Date.now();while(Date.now()-started<timeout){await new Promise(r=>setTimeout(r,1200));const data=await jsonp({action:'result',requestId},10000);if(data.status==='ready')return data.result;if(data.status==='error')throw new Error(data.error||'AI grading failed.');}throw new Error('AI grading timed out.');}
  function showVoiceFeedback(g,el){if(!el)return;const english=state.lang==='en',heard=g.transcriptArabic||g.transcript||'',pron=english?(g.pronunciationEnglish||g.pronunciation||''):(g.pronunciationArabic||g.pronunciation||''),next=english?(g.feedbackEnglish||g.feedback||''):(g.feedbackArabic||g.feedback||''),score=Number.isFinite(Number(g.score))?`${g.score}/${g.maxScore||5}`:'';el.innerHTML=`<div class="voice-feedback"><div class="feedback-score">${esc(score)}</div>${heard?`<p><b>${tr('heard')}:</b> <span class="arabic">${esc(heard)}</span></p>`:''}${pron?`<p><b>${tr('pronunciation')}:</b> ${esc(pron)}</p>`:''}${next?`<p><b>${tr('nextStep')}:</b> ${esc(next)}</p>`:''}</div>`;}

  render();
  window.addEventListener('online',()=>{if(state.sync?.enabled&&state.sync?.pending)cloudSave().catch(()=>{});});
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&state.sync?.enabled&&state.sync?.pending)cloudSave().catch(()=>{});});
  if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('service-worker.js').catch(()=>{}));
})();
