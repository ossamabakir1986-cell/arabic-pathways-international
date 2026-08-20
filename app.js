(() => {
  const D = window.ARABIC_COURSE;
  const CFG = window.ARABIC_PATHWAYS_CONFIG || {};
  const KEY = 'arabic-pathways-international-state-v0.1';
  const REGIONS = {
    general:{en:'Arab world (general)',ar:'العالم العربي (عام)'},
    syria:{en:'Syria',ar:'سوريا'},uae:{en:'United Arab Emirates',ar:'الإمارات العربية المتحدة'},
    egypt:{en:'Egypt',ar:'مصر'},saudi:{en:'Saudi Arabia',ar:'السعودية'},jordan:{en:'Jordan',ar:'الأردن'},
    lebanon:{en:'Lebanon',ar:'لبنان'},qatar:{en:'Qatar',ar:'قطر'},kuwait:{en:'Kuwait',ar:'الكويت'},
    oman:{en:'Oman',ar:'عُمان'},bahrain:{en:'Bahrain',ar:'البحرين'},iraq:{en:'Iraq',ar:'العراق'},morocco:{en:'Morocco',ar:'المغرب'}
  };
  const T = {
    en:{home:'Home',learn:'Learn',practice:'Practice',progress:'Progress',profile:'Profile',continue:'Continue learning',starter:'Absolute Beginner',welcome:'Welcome',hero:'Learn Modern Standard Arabic from zero, with clear English support and examples adapted to your study environment.',unit:'Current unit',lessons:'lessons',completed:'completed',aid:'English aid',region:'Regional context',roadmap:'Course roadmap',ready:'Ready',planned:'Planned',goal:'Lesson goal',situation:'Situation',how:'How Arabic works',say:'What you can say/read',use:'Use it',understand:'Understand',review:'Review',what:'What is happening?',why:'Why does it matter?',howq:'How does it work?',examples:'Examples',practiceTitle:'Practice',check:'Check',correct:'Correct',incorrect:'Try again',speak:'Speak',write:'Write',reviewTitle:'Quick review',hear:'Hear Arabic',normal:'Normal',slow:'Slow',settings:'Learning settings',interface:'Panel language',name:'Student name',save:'Save',create:'Create profile',start:'Start Arabic Pathways',onboard:'Set up your learning experience',aidChoice:'English learning aid',on:'On',off:'Off',contextHelp:'This changes examples, cities, currencies and situations later in the course. The course itself remains Modern Standard Arabic, not dialect.',aidHelp:'English aid explains Arabic when you need it. The Arabic lesson itself remains Arabic.',journey:'A0 foundation roadmap',prototype:'Starter prototype — Unit 1 complete',next:'Next lesson',back:'Back',voiceLab:'Speaking lab',record:'Record',stop:'Stop',playMine:'Play my recording',aiCheck:'Check with AI',recordHint:'Listen first, record yourself, then compare. AI feedback focuses on intelligibility and clear target-sound problems—not laboratory phoneme scoring.',micReady:'Microphone ready.',micRecording:'Recording…',micSaved:'Recording saved.',micUnsupported:'Microphone recording needs localhost or HTTPS in a supported browser.',aiNotConnected:'AI checking is prepared but the gateway is not connected yet.',aiChecking:'Checking your Arabic…',aiError:'AI check could not be completed.',deviceVoice:'Temporary local Arabic voice',geminiVoice:'Gemini Arabic voice',voiceStatus:'Voice system',gatewayReady:'Gateway URL configured',gatewayPending:'Local mode — Gemini gateway not connected',heard:'AI heard',pronunciation:'Pronunciation',nextStep:'Next step'},
    ar:{home:'الرئيسية',learn:'تعلّم',practice:'تدريب',progress:'التقدم',profile:'الملف الشخصي',continue:'تابع التعلّم',starter:'مبتدئ من الصفر',welcome:'مرحبًا',hero:'تعلّم العربية الفصحى الحديثة من الصفر، مع دعم إنجليزي واضح وأمثلة تتناسب مع بيئة دراستك.',unit:'الوحدة الحالية',lessons:'دروس',completed:'مكتمل',aid:'الدعم بالإنجليزية',region:'السياق الإقليمي',roadmap:'خريطة الدورة',ready:'جاهز',planned:'مخطط',goal:'هدف الدرس',situation:'الموقف',how:'كيف تعمل العربية',say:'ما الذي يمكنك قوله/قراءته',use:'استخدمه',understand:'افهم',review:'راجع',what:'ما الذي يحدث؟',why:'لماذا هذا مهم؟',howq:'كيف يعمل؟',examples:'أمثلة',practiceTitle:'تدريب',check:'تحقق',correct:'صحيح',incorrect:'حاول مرة أخرى',speak:'تحدث',write:'اكتب',reviewTitle:'مراجعة سريعة',hear:'استمع للعربية',normal:'عادي',slow:'ببطء',settings:'إعدادات التعلّم',interface:'لغة الواجهة',name:'اسم الطالب',save:'حفظ',create:'إنشاء الملف',start:'ابدأ Arabic Pathways',onboard:'جهّز تجربة التعلّم',aidChoice:'الدعم التعليمي بالإنجليزية',on:'تشغيل',off:'إيقاف',contextHelp:'يؤثر هذا الاختيار في الأمثلة والمدن والعملات والمواقف لاحقًا. تبقى الدورة بالعربية الفصحى الحديثة وليست باللهجة.',aidHelp:'يشرح الدعم الإنجليزي العربية عند الحاجة، بينما يبقى محتوى الدرس الأساسي بالعربية.',journey:'خريطة تأسيس A0',prototype:'نموذج أولي — الوحدة الأولى مكتملة',next:'الدرس التالي',back:'رجوع',voiceLab:'مختبر التحدث',record:'سجّل',stop:'إيقاف',playMine:'استمع إلى تسجيلي',aiCheck:'تحقق بالذكاء الاصطناعي',recordHint:'استمع أولًا ثم سجّل صوتك وقارن. يركز تقييم الذكاء الاصطناعي على وضوح النطق والمشكلات المسموعة بوضوح، وليس على قياس مخبري لكل صوت.',micReady:'الميكروفون جاهز.',micRecording:'جارٍ التسجيل…',micSaved:'تم حفظ التسجيل.',micUnsupported:'يحتاج التسجيل إلى localhost أو اتصال HTTPS ومتصفح مدعوم.',aiNotConnected:'ميزة التحقق بالذكاء الاصطناعي جاهزة، لكن بوابة Gemini لم تُربط بعد.',aiChecking:'جارٍ تقييم العربية…',aiError:'تعذر إكمال التقييم بالذكاء الاصطناعي.',deviceVoice:'صوت عربي محلي مؤقت',geminiVoice:'صوت Gemini العربي',voiceStatus:'نظام الصوت',gatewayReady:'تم إعداد رابط البوابة',gatewayPending:'الوضع المحلي — بوابة Gemini غير مربوطة',heard:'سمع الذكاء الاصطناعي',pronunciation:'النطق',nextStep:'الخطوة التالية'}
  };

  let state = load();
  let audioPlayer = null;
  let recorder = null;
  let recorderStream = null;
  let recorderChunks = [];
  let recordedBlob = null;
  let recordedUrl = '';
  const ttsCache = new Map();

  function load(){
    try{
      const s = Object.assign({view:'home',lang:'en',aid:true,region:'general',name:'',completed:[],currentLesson:'A0-U1-L1',lessonStep:'learn',answers:{}}, JSON.parse(localStorage.getItem(KEY)||'{}'));
      if(!['en','ar'].includes(s.lang)) s.lang='en';
      return s;
    }catch(e){
      return {view:'home',lang:'en',aid:true,region:'general',name:'',completed:[],currentLesson:'A0-U1-L1',lessonStep:'learn',answers:{}};
    }
  }
  function save(){ localStorage.setItem(KEY,JSON.stringify(state)); }
  const tr = k => (T[state.lang]||T.en)[k] || T.en[k] || k;
  function esc(s=''){ return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function setDir(){ document.documentElement.lang=state.lang; document.documentElement.dir=state.lang==='ar'?'rtl':'ltr'; }
  function gatewayConfigured(){ return /^https:\/\/script\.google\.com\/macros\/s\/.+\/exec(?:\?.*)?$/i.test(String(CFG.gatewayUrl||'').trim()); }

  function navBtn(view,label,icon){ return `<button class="${state.view===view?'active':''}" data-nav="${view}">${icon} ${label}</button>`; }
  function shell(content){
    setDir();
    return `<div class="shell"><header class="topbar"><div class="brand"><div class="logo">ع</div><div class="brand-text">Arabic Pathways<small>International · MSA</small></div></div><nav class="nav">${navBtn('home',tr('home'),'⌂')}${navBtn('learn',tr('learn'),'▣')}${navBtn('practice',tr('practice'),'✦')}${navBtn('progress',tr('progress'),'◔')}${navBtn('profile',tr('profile'),'◉')}</nav><div class="spacer"></div><div class="lang-switch"><button data-lang="en" class="${state.lang==='en'?'active':''}">EN</button><button data-lang="ar" class="${state.lang==='ar'?'active':''}">ع</button></div><div class="avatar">${esc((state.name||'A')[0].toUpperCase())}</div></header><main class="main">${content}</main><div class="bottom-nav">${navBtn('home',tr('home'),'⌂')}${navBtn('learn',tr('learn'),'▣')}${navBtn('practice',tr('practice'),'✦')}${navBtn('progress',tr('progress'),'◔')}${navBtn('profile',tr('profile'),'◉')}</div></div>`;
  }
  function home(){
    const done=state.completed.length;
    return shell(`<section class="hero"><div class="hero-grid"><div><div class="eyebrow">${tr('starter')} · A0</div><h1>${tr('welcome')}${state.name?', '+esc(state.name):''}</h1><p>${tr('hero')}</p><div class="hero-actions"><button class="btn light" data-open-lesson="${state.currentLesson}">${tr('continue')} →</button><button class="btn ghost" data-nav="learn">${tr('roadmap')}</button></div></div><div class="hero-art"><div class="scene"><div class="bubble b1">Hello → مرحبًا</div><div class="arabic-big">أ ب ت</div><div class="bubble b2">${esc(REGIONS[state.region][state.lang])}</div></div></div></div></section><div class="grid"><div class="card metric"><div class="eyebrow">${tr('completed')}</div><div class="num">${done}/5</div><p>Unit 1</p></div><div class="card metric"><div class="eyebrow">${tr('aid')}</div><div class="num">${state.aid?'ON':'OFF'}</div><p>English support</p></div><div class="card metric"><div class="eyebrow">${tr('voiceStatus')}</div><div class="num" style="font-size:22px">${gatewayConfigured()?tr('geminiVoice'):tr('deviceVoice')}</div><p>${gatewayConfigured()?tr('gatewayReady'):tr('gatewayPending')}</p></div><div class="card metric"><div class="eyebrow">A0</div><div class="num">1</div><p>${tr('unit')}</p></div><div class="card wide"><h2>${tr('unit')}: ${esc(D.unit.title)}</h2><p>${esc(D.unit.subtitle)}</p><div class="lesson-row">${D.unit.lessons.map((l,i)=>`<button class="lesson-chip" data-open-lesson="${l.id}">${i+1}. ${esc(l.title)} ${state.completed.includes(l.id)?'✓':''}</button>`).join('')}</div></div><div class="card side"><h3>${tr('prototype')}</h3><p>${tr('contextHelp')}</p></div></div>`);
  }
  function learn(){ return shell(`<div class="section-title"><div><h2>${tr('journey')}</h2><p>${tr('prototype')}</p></div></div><div class="unit-grid">${D.roadmap.map((r,i)=>`<article class="unit"><div class="count">${String(i+1).padStart(2,'0')}</div><div class="tag">${r[3]==='ready'?tr('ready'):tr('planned')}</div><h3>${esc(r[1])}</h3><p>${esc(r[2])}</p>${i===0?`<div class="lesson-row">${D.unit.lessons.map((l,j)=>`<button class="lesson-chip" data-open-lesson="${l.id}">${j+1}. ${esc(l.title)}</button>`).join('')}</div>`:''}</article>`).join('')}</div>`); }
  function practiceHub(){ const qs=D.unit.lessons.flatMap(l=>l.practice.map((q,idx)=>({lesson:l.title,q,idx}))).slice(0,12); return shell(`<div class="section-title"><div><h2>${tr('practice')}</h2><p>Mixed A0 · Unit 1 retrieval</p></div></div><div class="card">${qs.map((x,i)=>activity(x.q,`hub-${i}`)).join('')}</div>`); }
  function progress(){
    const pct=Math.round(state.completed.length/5*100);
    return shell(`<div class="section-title"><div><h2>${tr('progress')}</h2><p>A0 · Unit 1</p></div></div><div class="grid"><div class="card metric"><div class="num">${pct}%</div><p>${tr('completed')}</p></div><div class="card metric"><div class="num">${state.completed.length}</div><p>${tr('lessons')}</p></div><div class="card wide"><h3>Unit 1</h3>${D.unit.lessons.map((l,i)=>`<div class="road-row"><b>${String(i+1).padStart(2,'0')}</b><span>${esc(l.title)}</span><span class="status ${state.completed.includes(l.id)?'':'planned'}">${state.completed.includes(l.id)?'✓ '+tr('completed'):tr('ready')}</span></div>`).join('')}</div></div>`);
  }
  function profile(){
    const regionOptions=Object.entries(REGIONS).map(([k,v])=>`<option value="${k}" ${state.region===k?'selected':''}>${esc(v[state.lang])}</option>`).join('');
    return shell(`<div class="section-title"><div><h2>${tr('profile')}</h2><p>${tr('settings')}</p></div></div><div class="profile-grid"><div class="card"><div class="form-group"><label>${tr('name')}</label><input id="p-name" value="${esc(state.name)}"></div><div class="form-group"><label>${tr('interface')}</label><select id="p-lang"><option value="en" ${state.lang==='en'?'selected':''}>English</option><option value="ar" ${state.lang==='ar'?'selected':''}>العربية</option></select></div><div class="form-group"><label>${tr('region')}</label><select id="p-region">${regionOptions}</select><small>${tr('contextHelp')}</small></div><div class="form-group"><label>${tr('aidChoice')}</label><select id="p-aid"><option value="on" ${state.aid?'selected':''}>${tr('on')}</option><option value="off" ${!state.aid?'selected':''}>${tr('off')}</option></select><small>${tr('aidHelp')}</small></div><button class="btn primary" id="save-profile">${tr('save')}</button></div><div class="card"><h3>${tr('voiceStatus')}</h3><div class="voice-status ${gatewayConfigured()?'online':'local'}"><span class="status-dot"></span><div><b>${gatewayConfigured()?tr('geminiVoice'):tr('deviceVoice')}</b><small>${gatewayConfigured()?tr('gatewayReady'):tr('gatewayPending')}</small></div></div><p>${gatewayConfigured()?'Normal/slow lesson audio will use the secure Gemini TTS gateway. Device speech remains as a fallback.':'The app is safe to test locally now. Add the existing Apps Script /exec URL to config.js later to activate Gemini TTS and AI pronunciation checks.'}</p><hr><h3>Course identity</h3><p><b>Course language:</b> Modern Standard Arabic</p><p><b>Dialect:</b> None — regional choice changes context only.</p><p><b>Current build:</b> A0 Unit 1 complete; full roadmap defined.</p><p><b>Learning principle:</b> Arabic first, English support on demand, transliteration temporary.</p></div></div>`);
  }
  function lesson(id){
    const l=D.unit.lessons.find(x=>x.id===id)||D.unit.lessons[0];
    state.currentLesson=l.id; save();
    const steps=['learn','understand','practice','use','review'];
    const labels={learn:tr('learn'),understand:tr('understand'),practice:tr('practice'),use:tr('use'),review:tr('review')};
    return shell(`<div class="lesson-shell"><button class="back" data-nav="learn">←</button><section class="lesson-head"><div><div class="eyebrow">A0 · Unit 1 · ${l.id.split('-').pop()}</div><h1>${esc(l.title)}</h1><p>${esc(l.subtitle)}</p><p><b>${tr('goal')}:</b> ${esc(l.goal)}</p><div class="aid-toggle"><span>${tr('aid')}</span><span class="toggle ${state.aid?'on':''}" id="aid-toggle"></span></div></div><div class="lesson-art"><div class="letter-cloud">${esc(l.art)}</div></div></section><div class="lesson-steps">${steps.map((s,i)=>`<button class="step ${state.lessonStep===s?'active':''}" data-step="${s}"><small>${String(i+1).padStart(2,'0')}</small><strong>${labels[s]}</strong></button>`).join('')}</div><section class="lesson-panel">${lessonPanel(l,state.lessonStep)}</section></div>`);
  }
  function aid(text){ return state.aid?`<div class="aid">🇬🇧 ${esc(text)}</div>`:''; }
  function arList(items){ return `<div class="arabic box">${items.map(x=>`<div>${esc(x)}</div>`).join('')}</div>`; }
  function hearButtons(text){
    return `<span class="hear-group"><button class="hear" data-speak="${esc(text)}" data-speed="normal">🔊 ${tr('normal')}</button><button class="hear secondary" data-speak="${esc(text)}" data-speed="slow">🐢 ${tr('slow')}</button></span>`;
  }
  function teachingTokens(text){
    const cleaned=String(text||'').trim().replace(/[—–|،,؛;]+/g,' ').replace(/\s+/g,' ');
    if(!cleaned) return [];
    const tokens=cleaned.split(' ').filter(Boolean);
    const stripMarks=t=>t.replace(/[\u064B-\u065F\u0670]/g,'');
    const valid=tokens.length>0 && tokens.every(t=>{
      const base=stripMarks(t);
      return base.length===1 && /[\u0621-\u064A\u0671]/.test(base);
    });
    return valid?tokens:[];
  }
  function singleHearButton(text){
    return `<button class="hear single" data-speak="${esc(text)}" data-speed="normal" aria-label="Hear ${esc(text)}">🔊</button>`;
  }
  function soundTileGrid(text){
    const tokens=teachingTokens(text);
    if(tokens.length<2) return '';
    const stripMarks=t=>t.replace(/[\u064B-\u065F\u0670]/g,'');
    const hasMarks=t=>/[\u064B-\u065F\u0670]/.test(t);
    return `<div class="sound-tile-grid">${tokens.map(t=>{
      const base=stripMarks(t);
      const name=!hasMarks(t)&&ARABIC_LETTER_NAMES[base]?ARABIC_LETTER_NAMES[base]:'';
      return `<button class="sound-tile" data-speak="${esc(t)}" data-speed="normal"><span class="sound-symbol">${esc(t)}</span><span class="sound-caption">🔊 ${name?esc(name):'استمع'}</span></button>`;
    }).join('')}</div>`;
  }
  function teachingAudioBlock(text){
    const tiles=soundTileGrid(text);
    if(tiles) return tiles;
    return `<div class="arabic box" style="font-size:2rem">${esc(text)} ${singleHearButton(text)}</div>`;
  }
  function voiceLab(l){
    return `<div class="voice-lab" id="voice-lab" data-target="${esc(l.use.speak_ar)}" data-lesson="${esc(l.id)}"><div class="voice-lab-head"><div><div class="eyebrow">AI + microphone</div><h3>🎙 ${tr('voiceLab')}</h3></div><span class="voice-provider">${gatewayConfigured()?tr('geminiVoice'):tr('deviceVoice')}</span></div><p>${tr('recordHint')}</p><div class="voice-controls"><button class="btn record" id="record-start">● ${tr('record')}</button><button class="btn ghost" id="record-stop" disabled>■ ${tr('stop')}</button><button class="btn ghost" id="record-play" disabled>▶ ${tr('playMine')}</button><button class="btn ai" id="record-check" disabled>✦ ${tr('aiCheck')}</button></div><audio id="recording-audio" controls hidden></audio><div class="voice-message" id="voice-message">${gatewayConfigured()?tr('micReady'):tr('aiNotConnected')}</div><div id="voice-feedback"></div></div>`;
  }
  function lessonPanel(l,step){
    if(step==='learn') return `<h2>${tr('learn')}</h2>${teachingTokens(l.learn.intro_ar).length>1?soundTileGrid(l.learn.intro_ar):`<div class="arabic box" style="font-size:2rem">${esc(l.learn.intro_ar)} ${hearButtons(l.learn.intro_ar)}</div>`}${aid(l.learn.intro_aid)}${arList(l.learn.points_ar)}${state.aid?`<ul>${l.learn.points_aid.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}<div class="visual-flow">${l.learn.flow.map(x=>`<div class="flow-card"><b>${esc(x[0])}</b><span>${esc(x[1])}</span></div>`).join('')}</div>`;
    if(step==='understand') return `<h2>${tr('understand')}</h2><h3>${tr('what')}</h3><p>${esc(l.understand.what)}</p><h3>${tr('why')}</h3><div class="why"><p>${esc(l.understand.why)}</p></div><h3>${tr('howq')}</h3><p>${esc(l.understand.how)}</p><h3>${tr('examples')}</h3>${l.understand.examples.map(e=>`<div class="activity example-sound"><div class="arabic" style="font-size:1.8rem">${esc(e[0])} ${teachingTokens(e[0]).length===1?singleHearButton(e[0]):hearButtons(e[0])}</div>${aid(e[1])}</div>`).join('')}<div class="aid">💡 ${esc(l.understand.note)}</div>`;
    if(step==='practice') return `<h2>${tr('practiceTitle')}</h2>${l.practice.map((q,i)=>activity(q,`${l.id}-${i}`)).join('')}`;
    if(step==='use') return `<h2>${tr('use')}</h2><h3>🗣 ${tr('speak')}</h3>${teachingTokens(l.use.speak_ar).length>1?soundTileGrid(l.use.speak_ar):`<div class="arabic box" style="font-size:1.8rem">${esc(l.use.speak_ar)} ${hearButtons(l.use.speak_ar)}</div>`}${aid(l.use.speak_aid)}${voiceLab(l)}<h3>✍️ ${tr('write')}</h3><div class="activity"><p>${esc(l.use.write)}</p></div>`;
    return `<h2>${tr('reviewTitle')}</h2><div class="roadmap">${l.review.map(x=>`<div class="road-row"><b>✓</b><span>${esc(x)}</span><span></span></div>`).join('')}</div><div style="margin-top:20px;display:flex;gap:10px;flex-wrap:wrap"><button class="btn primary" data-complete="${l.id}">✓ ${tr('completed')}</button>${nextLesson(l)?`<button class="btn ghost" data-open-lesson="${nextLesson(l).id}">${tr('next')} →</button>`:''}</div>`;
  }
  function activity(q,key){
    const ans=state.answers[key];
    return `<div class="activity"><b>${esc(q.q)}</b><div class="options">${q.opts.map((o,i)=>`<button class="option ${ans!==undefined?(i===q.a?'correct':(i===ans?'wrong':'')):''}" data-answer="${key}" data-index="${i}">${esc(o)}</button>`).join('')}</div>${ans!==undefined?`<div class="feedback">${ans===q.a?'✓ '+tr('correct'):'↻ '+tr('incorrect')}</div>`:''}</div>`;
  }
  function nextLesson(l){ const i=D.unit.lessons.findIndex(x=>x.id===l.id); return D.unit.lessons[i+1]||null; }
  function onboarding(){
    const regionOptions=Object.entries(REGIONS).map(([k,v])=>`<option value="${k}">${esc(v.en)}</option>`).join('');
    return `<div class="modal-wrap"><div class="modal"><div class="onboard-art">ا · ب · ت</div><div class="eyebrow">Arabic Pathways — International</div><h2>${tr('onboard')}</h2><p>${tr('hero')}</p><div class="profile-grid"><div><div class="form-group"><label>${tr('name')}</label><input id="o-name" placeholder="Your name"></div><div class="form-group"><label>${tr('interface')}</label><select id="o-lang"><option value="en">English</option><option value="ar">العربية</option></select></div></div><div><div class="form-group"><label>${tr('region')}</label><select id="o-region">${regionOptions}</select><small>${tr('contextHelp')}</small></div><div class="form-group"><label>${tr('aidChoice')}</label><select id="o-aid"><option value="on">English aid ON</option><option value="off">English aid OFF</option></select><small>${tr('aidHelp')}</small></div></div></div><button class="btn primary" id="create-profile">${tr('start')}</button></div></div>`;
  }
  function render(){
    cleanupRecording(false);
    let c=state.view==='home'?home():state.view==='learn'?learn():state.view==='practice'?practiceHub():state.view==='progress'?progress():state.view==='profile'?profile():state.view==='lesson'?lesson(state.currentLesson):home();
    document.getElementById('app').innerHTML=c+(!state.name?onboarding():'');
    bind();
  }
  function bind(){
    document.querySelectorAll('[data-nav]').forEach(b=>b.onclick=()=>{state.view=b.dataset.nav;save();render();scrollTo(0,0);});
    document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{state.lang=b.dataset.lang;save();render();});
    document.querySelectorAll('[data-open-lesson]').forEach(b=>b.onclick=()=>{state.currentLesson=b.dataset.openLesson;state.lessonStep='learn';state.view='lesson';save();render();scrollTo(0,0);});
    document.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>{state.lessonStep=b.dataset.step;save();render();scrollTo(0,document.querySelector('.lesson-steps')?.offsetTop-90||0);});
    document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{state.answers[b.dataset.answer]=Number(b.dataset.index);save();render();});
    document.querySelectorAll('[data-speak]').forEach(b=>b.onclick=()=>speak(b.dataset.speak,b.dataset.speed||'normal',b));
    document.querySelectorAll('[data-complete]').forEach(b=>b.onclick=()=>{if(!state.completed.includes(b.dataset.complete))state.completed.push(b.dataset.complete);save();render();});
    const at=document.getElementById('aid-toggle'); if(at) at.onclick=()=>{state.aid=!state.aid;save();render();};
    const sp=document.getElementById('save-profile'); if(sp) sp.onclick=()=>{state.name=document.getElementById('p-name').value.trim()||state.name;state.lang=document.getElementById('p-lang').value;state.region=document.getElementById('p-region').value;state.aid=document.getElementById('p-aid').value==='on';save();render();};
    const cp=document.getElementById('create-profile'); if(cp) cp.onclick=()=>{state.name=document.getElementById('o-name').value.trim()||'Student';state.lang=document.getElementById('o-lang').value;state.region=document.getElementById('o-region').value;state.aid=document.getElementById('o-aid').value==='on';save();render();};
    bindRecorder();
  }

  const ARABIC_LETTER_NAMES={
    'ا':'أَلِف','أ':'هَمْزَة عَلَى أَلِف','إ':'هَمْزَة تَحْتَ أَلِف','آ':'أَلِف مَدَّة','ء':'هَمْزَة',
    'ب':'بَاء','ت':'تَاء','ث':'ثَاء','ج':'جِيم','ح':'حَاء','خ':'خَاء','د':'دَال','ذ':'ذَال',
    'ر':'رَاء','ز':'زَاي','س':'سِين','ش':'شِين','ص':'صَاد','ض':'ضَاد','ط':'طَاء','ظ':'ظَاء',
    'ع':'عَيْن','غ':'غَيْن','ف':'فَاء','ق':'قَاف','ك':'كَاف','ل':'لَام','م':'مِيم','ن':'نُون',
    'ه':'هَاء','و':'وَاو','ي':'يَاء','ى':'أَلِف مَقْصُورَة','ة':'تَاء مَرْبُوطَة'
  };
  function prepareTeachingSpeech(text){
    const original=String(text||'').trim();
    if(!original) return {spoken:'',chunks:[]};
    const cleaned=original.replace(/[—–|،,؛;]+/g,' ').replace(/\s+/g,' ').trim();
    const tokens=cleaned.split(' ').filter(Boolean);
    const stripMarks=t=>t.replace(/[\u064B-\u065F\u0670]/g,'');
    const hasMarks=t=>/[\u064B-\u065F\u0670]/.test(t);
    const teachable=tokens.length>0 && tokens.every(t=>{const b=stripMarks(t);return b.length===1 && /[\u0621-\u064A\u0671]/.test(b)});
    if(!teachable) return {spoken:original,chunks:[original]};
    const chunks=tokens.map(t=>{
      const base=stripMarks(t);
      return !hasMarks(t) && ARABIC_LETTER_NAMES[base] ? ARABIC_LETTER_NAMES[base] : t;
    });
    return {spoken:chunks.join('. '),chunks};
  }
  async function speak(text,speed='normal',button){
    const label = button ? button.innerHTML : '';
    const teaching=prepareTeachingSpeech(text);
    if(button){ button.disabled=true; button.classList.add('busy'); button.innerHTML='…'; }
    try{
      if(gatewayConfigured()){
        const key=`${speed}|${teaching.spoken}`;
        let url=ttsCache.get(key);
        if(!url){
          const data=await jsonp({action:'arabicTts',text:teaching.spoken,mode:speed},35000);
          if(!data || !data.ok || !data.audioBase64) throw new Error(data&&data.error||'No audio returned.');
          url=audioUrlFromResponse(data);
          ttsCache.set(key,url);
        }
        if(audioPlayer) audioPlayer.pause();
        audioPlayer=new Audio(url);
        await audioPlayer.play();
        return;
      }
      await fallbackSpeak(teaching.chunks,speed);
    }catch(err){
      console.warn('Arabic voice fallback:',err);
      try{ await fallbackSpeak(teaching.chunks,speed); }catch(_){}
    }finally{
      if(button){ button.disabled=false; button.classList.remove('busy'); button.innerHTML=label; }
    }
  }
  function fallbackSpeak(chunks,speed){
    return new Promise(resolve=>{
      if(!('speechSynthesis' in window)){ resolve(); return; }
      window.speechSynthesis.cancel();
      const list=Array.isArray(chunks)&&chunks.length?chunks:[''];
      const voices=window.speechSynthesis.getVoices();
      const arabic=voices.find(v=>/^ar[-_]/i.test(v.lang||''));
      let i=0;
      const gap=speed==='slow'?520:260;
      const next=()=>{
        if(i>=list.length){ resolve(); return; }
        const u=new SpeechSynthesisUtterance(list[i++]);
        u.lang='ar'; u.rate=speed==='slow'?.58:.82; u.pitch=1;
        if(arabic) u.voice=arabic;
        u.onend=()=>setTimeout(next,gap);
        u.onerror=()=>setTimeout(next,gap);
        window.speechSynthesis.speak(u);
      };
      next();
    });
  }
  function jsonp(params,timeout=15000){
    return new Promise((resolve,reject)=>{
      if(!gatewayConfigured()) return reject(new Error('Gateway is not configured.'));
      const cb='apcb_'+Date.now()+'_'+Math.random().toString(36).slice(2);
      const script=document.createElement('script');
      let done=false;
      const finish=(fn,val)=>{if(done)return;done=true;clearTimeout(timer);delete window[cb];script.remove();fn(val);};
      window[cb]=data=>finish(resolve,data);
      const qs=new URLSearchParams(Object.assign({},params,{prefix:cb}));
      script.src=String(CFG.gatewayUrl).trim()+'?'+qs.toString();
      script.onerror=()=>finish(reject,new Error('Gateway request failed.'));
      const timer=setTimeout(()=>finish(reject,new Error('Gateway request timed out.')),timeout);
      document.head.appendChild(script);
    });
  }
  function audioUrlFromResponse(data){
    const mime=String(data.mimeType||'audio/L16').toLowerCase();
    if(mime.includes('l16')||mime.includes('pcm')) return URL.createObjectURL(pcm16ToWavBlob(data.audioBase64,Number(data.sampleRate||24000)));
    const bytes=base64Bytes(data.audioBase64);
    return URL.createObjectURL(new Blob([bytes],{type:data.mimeType||'audio/mpeg'}));
  }
  function base64Bytes(b64){ const raw=atob(b64); const out=new Uint8Array(raw.length); for(let i=0;i<raw.length;i++) out[i]=raw.charCodeAt(i); return out; }
  function pcm16ToWavBlob(b64,sampleRate){
    const pcm=base64Bytes(b64), buffer=new ArrayBuffer(44+pcm.length), view=new DataView(buffer);
    const write=(off,s)=>{for(let i=0;i<s.length;i++)view.setUint8(off+i,s.charCodeAt(i));};
    write(0,'RIFF'); view.setUint32(4,36+pcm.length,true); write(8,'WAVE'); write(12,'fmt '); view.setUint32(16,16,true); view.setUint16(20,1,true); view.setUint16(22,1,true); view.setUint32(24,sampleRate,true); view.setUint32(28,sampleRate*2,true); view.setUint16(32,2,true); view.setUint16(34,16,true); write(36,'data'); view.setUint32(40,pcm.length,true); new Uint8Array(buffer,44).set(pcm);
    return new Blob([buffer],{type:'audio/wav'});
  }

  function bindRecorder(){
    const lab=document.getElementById('voice-lab'); if(!lab) return;
    const start=document.getElementById('record-start'), stop=document.getElementById('record-stop'), play=document.getElementById('record-play'), check=document.getElementById('record-check');
    start.onclick=()=>startRecording(lab,start,stop,play,check);
    stop.onclick=()=>stopRecording(start,stop);
    play.onclick=()=>{const a=document.getElementById('recording-audio'); if(a&&recordedUrl){a.hidden=false;a.play().catch(()=>{});}};
    check.onclick=()=>checkRecordingWithAI(lab,check);
  }
  async function startRecording(lab,start,stop,play,check){
    const msg=document.getElementById('voice-message'), feedback=document.getElementById('voice-feedback');
    if(feedback) feedback.innerHTML='';
    if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia||!window.MediaRecorder){ if(msg)msg.textContent=tr('micUnsupported'); return; }
    try{
      cleanupRecording(true);
      recorderStream=await navigator.mediaDevices.getUserMedia({audio:true});
      const preferred=['audio/webm;codecs=opus','audio/ogg;codecs=opus'];
      const mime=preferred.find(x=>MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(x));
      recorder=new MediaRecorder(recorderStream,mime?{mimeType:mime}:undefined); recorderChunks=[];
      recorder.ondataavailable=e=>{if(e.data&&e.data.size)recorderChunks.push(e.data);};
      recorder.onstop=()=>{
        const type=recorder.mimeType||recorderChunks[0]?.type||'audio/webm';
        recordedBlob=new Blob(recorderChunks,{type});
        if(recordedUrl)URL.revokeObjectURL(recordedUrl); recordedUrl=URL.createObjectURL(recordedBlob);
        const audio=document.getElementById('recording-audio'); if(audio){audio.src=recordedUrl;audio.hidden=false;}
        if(msg)msg.textContent=tr('micSaved'); if(play)play.disabled=false; if(check)check.disabled=false;
        if(recorderStream){recorderStream.getTracks().forEach(t=>t.stop());recorderStream=null;}
      };
      recorder.start(); start.disabled=true; stop.disabled=false; play.disabled=true; check.disabled=true; if(msg)msg.textContent=tr('micRecording');
    }catch(err){ if(msg)msg.textContent=tr('micUnsupported'); console.warn(err); }
  }
  function stopRecording(start,stop){ if(recorder&&recorder.state==='recording')recorder.stop(); if(start)start.disabled=false; if(stop)stop.disabled=true; }
  function cleanupRecording(preserveBlob){
    if(recorder&&recorder.state==='recording'){try{recorder.stop();}catch(e){}}
    if(recorderStream){recorderStream.getTracks().forEach(t=>t.stop());recorderStream=null;}
    recorder=null; recorderChunks=[];
    if(!preserveBlob){recordedBlob=null;if(recordedUrl){URL.revokeObjectURL(recordedUrl);recordedUrl='';}}
  }
  async function checkRecordingWithAI(lab,button){
    const msg=document.getElementById('voice-message'), feedback=document.getElementById('voice-feedback');
    if(!recordedBlob) return;
    if(!gatewayConfigured()){ if(msg)msg.textContent=tr('aiNotConnected'); return; }
    button.disabled=true; button.classList.add('busy'); if(msg)msg.textContent=tr('aiChecking'); if(feedback)feedback.innerHTML='';
    try{
      const b64=await blobBase64(recordedBlob);
      const requestId='apv_'+Date.now()+'_'+Math.random().toString(36).slice(2,10);
      postToGateway({action:'gradeArabicVoice',requestId,audioBase64:b64,mimeType:recordedBlob.type||'audio/webm',level:'A0',skill:'Pronunciation',task:'Repeat the target Arabic accurately and naturally.',targetText:lab.dataset.target||'',feedbackLanguage:state.lang});
      const result=await pollQueued(requestId,45000);
      if(!result||!result.ok||!result.grading)throw new Error(result&&result.error||'No grading returned.');
      showVoiceFeedback(result.grading,feedback); if(msg)msg.textContent='✓ '+tr('aiCheck');
    }catch(err){ if(msg)msg.textContent=tr('aiError'); console.warn(err); }
    finally{button.disabled=false;button.classList.remove('busy');}
  }
  function blobBase64(blob){ return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(String(r.result).split(',')[1]||'');r.onerror=reject;r.readAsDataURL(blob);}); }
  function postToGateway(payload){
    const iframe=document.createElement('iframe'), name='ap_post_'+Date.now()+'_'+Math.random().toString(36).slice(2); iframe.name=name; iframe.hidden=true;
    const form=document.createElement('form'); form.method='POST';form.action=String(CFG.gatewayUrl).trim();form.target=name;form.hidden=true;
    Object.entries(payload).forEach(([k,v])=>{const i=document.createElement('input');i.type='hidden';i.name=k;i.value=typeof v==='string'?v:JSON.stringify(v);form.appendChild(i);});
    document.body.append(iframe,form); form.submit(); setTimeout(()=>{form.remove();iframe.remove();},8000);
  }
  async function pollQueued(requestId,timeout){
    const started=Date.now();
    while(Date.now()-started<timeout){
      await new Promise(r=>setTimeout(r,1200));
      const data=await jsonp({action:'result',requestId},10000);
      if(data.status==='ready')return data.result;
      if(data.status==='error')throw new Error(data.error||'AI grading failed.');
    }
    throw new Error('AI grading timed out.');
  }
  function showVoiceFeedback(g,el){
    if(!el)return;
    const english=state.lang==='en';
    const heard=g.transcriptArabic||g.transcript||'';
    const pron=english?(g.pronunciationEnglish||g.pronunciation||''):(g.pronunciationArabic||g.pronunciation||'');
    const next=english?(g.feedbackEnglish||g.feedback||''):(g.feedbackArabic||g.feedback||'');
    const score=Number.isFinite(Number(g.score))?`${g.score}/${g.maxScore||5}`:'';
    el.innerHTML=`<div class="voice-feedback"><div class="feedback-score">${esc(score)}</div>${heard?`<p><b>${tr('heard')}:</b> <span class="arabic">${esc(heard)}</span></p>`:''}${pron?`<p><b>${tr('pronunciation')}:</b> ${esc(pron)}</p>`:''}${next?`<p><b>${tr('nextStep')}:</b> ${esc(next)}</p>`:''}</div>`;
  }

  render();
  if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('service-worker.js').catch(()=>{}));
})();
