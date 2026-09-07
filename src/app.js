const WHATSAPP = '9647706077321';

const services = [
  {category:'مدرسي',name:'ملصقات مدرسية بصور شخصية',desc:'صورة شخصية بزي وثيمة خاصة لكل مادة',size:'A4',qty:10,price:1000,image:'./public/assets/service-school-stickers.jpg',segments:['students'],featured:true,badge:'الأكثر طلبًا'},
  {category:'مدرسي',name:'ملصقات مزخرفة بقص خاص',desc:'أشكال متنوعة مناسبة للقص بجهاز كاميو',size:'A4',qty:10,price:1000,image:'./public/assets/service-cut-stickers.jpg',segments:['students'],badge:'للمدارس'},
  {category:'مدرسي',name:'جدول الحصص المدرسية',desc:'جدول مخصص بالاسم والصورة الشخصية والألوان والرسوم',size:'A3',qty:1,price:3000,image:'./public/assets/service-schedule.jpg',segments:['students'],featured:true,badge:'الأكثر طلبًا'},
  {category:'مدرسي',name:'نشرة مدرسية',desc:'شرح وخارطة ذهنية لأي مادة وأي مرحلة دراسية',size:'A3',qty:1,price:3000,image:'./public/assets/service-newsletter.jpg',segments:['teachers','students'],badge:'للمعلمين'},
  {category:'مدرسي',name:'دفتر مذكرات شخصية',desc:'دفتر مذكرات بالصورة الشخصية والاسم',size:'A5',qty:20,price:1500,image:'./public/assets/service-notebook.jpg',segments:['students'],featured:true,badge:'الأكثر طلبًا'},
  {category:'هدايا',name:'صور أطفال ورقية للمغامرات',desc:'تصميم لعبة ورق بصور شخصية غامرة بالخيال',size:'A4',qty:10,price:1000,image:'./public/assets/service-adventures.jpg',segments:['gifts'],badge:'هدية شخصية'},
  {category:'هدايا',name:'مجلة أطفال مصورة',desc:'محتوى وصور وتخطيط؛ عدد الصفحات حسب الطلب',size:'A4',qty:16,price:10000,image:'./public/assets/service-magazine.jpg',segments:['gifts'],badge:'مناسبات'},
  {category:'عائلي',name:'تحسين وترميم الصور',desc:'تحسين الإضاءة والألوان والوضوح',size:'A3',qty:1,price:10000,image:'./public/assets/service-restoration.jpg',segments:['photos','gifts'],featured:true,badge:'قبل / بعد'},
  {category:'صور',name:'صورة شخصية بخلفية بيضاء',desc:'بورتريه استوديو مع تعديل الإضاءة والزي',size:'A6',qty:8,price:3000,image:'./public/assets/service-studio-portrait.jpg',segments:['photos'],badge:'استوديو'},
  {category:'هدايا',name:'لوحة بورتريه شخصية',desc:'رسم حسب الطلب: فحم أو ألوان أو أكريليك',size:'A4',qty:1,price:5000,image:'./public/assets/service-art-portrait.jpg',segments:['photos','gifts'],featured:true,badge:'هدية شخصية'},
  {category:'هدايا',name:'تحويل صورة إلى أنمي ثلاثي الأبعاد',desc:'تحويل صورة طفلك إلى شخصية غامرة بالخيال لأجمل الذكريات',size:'A4',qty:1,price:5000,image:'./public/assets/service-anime-3d.jpg',segments:['photos','gifts'],badge:'3D'},
  {category:'هدايا',name:'دمج الشخصية في عالم خيالي',desc:'تصميم لوحة مغامرة من عالم الخيال مع باركود لتشغيل فيديو',size:'A4',qty:1,price:5000,image:'./public/assets/service-fantasy-world.jpg',segments:['photos','gifts'],badge:'مغامرة'},
  {category:'هدايا',name:'بورتريه بأسلوب قلم الرصاص',desc:'لوحة مرسومة بالفحم وأقلام الرصاص على ورق سكتش',size:'A4',qty:1,price:5000,image:'./public/assets/service-pencil-portrait.jpg',segments:['photos','gifts'],badge:'بورتريه'},
  {category:'هدايا',name:'بورتريه بأسلوب الأقلام الملونة الخشب',desc:'رسم بورتريه بأقلام الخشب الملونة',size:'A4',qty:1,price:5000,image:'./public/assets/service-colored-portrait.jpg',segments:['photos','gifts'],badge:'بورتريه'},
  {category:'هدايا',name:'بورتريه بأسلوب زيتي أو أكريليك',desc:'لوحة رقمية بملمس فرشاة وألوان أكريليك',size:'A4',qty:1,price:5000,image:'./public/assets/service-oil-portrait.jpg',segments:['photos','gifts'],badge:'بورتريه'},
  {category:'أطفال',name:'لوحة بيانات مولود',desc:'صورة واسم وتاريخ ووزن وطول الطفل لتخليد ذكرى جميلة',size:'A4',qty:1,price:5000,image:'./public/assets/service-baby-board.jpg',segments:['gifts'],badge:'مواليد'},
  {category:'تجاري',name:'بوستر إعلاني للسوشيال ميديا',desc:'تصميم مخصص للنشر على المنصات',size:'A4',qty:10,price:5000,image:'./public/assets/service-social-poster.jpg',segments:['business'],featured:true,badge:'للأعمال'},
  {category:'تجاري',name:'مطوية ثلاثية',desc:'وجهان وستة أعمدة',size:'A4',qty:50,price:5000,image:'./public/assets/service-trifold.jpg',segments:['business','institutions'],badge:'للأعمال'},
  {category:'تجاري',name:'دفتر وصولات',desc:'دفتر وصولات ملون عادي أو مكربن، 100 ورقة',size:'A5',qty:10,price:25000,image:'./public/assets/service-receipt.jpg',segments:['business','institutions'],badge:'للأعمال'},
  {category:'مدرسي',name:'بروش دبوس بنز',desc:'صورة شخصية أو لوكو',size:'4 S',qty:1,price:1500,image:'./public/assets/service-badge.jpg',segments:['students','gifts','institutions'],badge:'تخصيص'},
  {category:'عائلي',name:'بطاقة زفاف',desc:'بطاقات دعوة زفاف أو مناسبة بطباعة ملونة',size:'A6',qty:50,price:10000,image:'./public/assets/service-wedding.jpg',segments:['gifts'],badge:'مناسبات'},
  {category:'مدرسي',name:'شهادة التخرج',desc:'صورة شخصية على بورد أو إطار مع الدرجات',size:'A4',qty:1,price:5000,image:'./public/assets/service-graduation.jpg',segments:['students','gifts'],badge:'تخرج'},
  {category:'مدرسي',name:'شهادة درجات',desc:'كارت شهادة بتصميم خاص للمدرسة',size:'A4',qty:100,price:40000,image:'./public/assets/service-grades.jpg',segments:['students','institutions'],badge:'للمدارس'},
  {category:'تجاري',name:'بطاقة مخبز',desc:'كارتات كبس عظم',size:'A7',qty:100,price:15000,image:'./public/assets/service-bakery-card.jpg',segments:['business'],badge:'للأعمال'},
  {category:'هدايا',name:'طباعة أسماء',desc:'قص فينيل حراري وتثبيته بواسطة المكواة العادية',size:'A6',qty:1,price:3000,image:'./public/assets/service-name-print.jpg',segments:['gifts'],badge:'تخصيص'},
  {category:'تجاري',name:'كرت شخصي',desc:'تصميم وطباعة حسب الطلب',size:'A7',qty:100,price:5000,image:'./public/assets/service-business-card.jpg',segments:['business'],badge:'للأعمال'},
  {category:'تجاري',name:'لوحات مكتبية',desc:'لوحات الأسماء التعريفية',size:'A7',qty:1,price:5000,image:'./public/assets/service-office-sign.jpg',segments:['business','institutions'],badge:'مؤسسات'},
  {category:'تجاري',name:'بطاقة التموين',desc:'طباعة بطاقة التموين عاج أو أي مستمسكات أخرى',size:'A7',qty:1,price:5000,image:'./public/assets/service-ration-card.jpg',segments:['business'],badge:'طباعة'},
  {category:'مؤسسات',name:'درع كرستال',desc:'تصميم وطباعة دروع الكرستال',size:'A5',qty:1,price:15000,image:'./public/assets/service-crystal-shield.jpg',segments:['institutions','gifts'],badge:'مؤسسات'},
  {category:'مؤسسات',name:'مجلة',desc:'إنتاج المحتوى والتصميم والطباعة',size:'A4',qty:40,price:'يحدد حسب العمل',image:'./public/assets/service-institution-magazine.jpg',segments:['institutions'],quoteOnly:true,badge:'عرض سعر'},
  {category:'مدارس',name:'شهادة تقديرية',desc:'تصميم وطباعة شهادات التقدير',size:'A4',qty:1,price:500,image:'./public/assets/service-appreciation-certificate.jpg',segments:['teachers','institutions'],badge:'للمدارس'},
  {category:'مؤسسات',name:'تصميم لوكو',desc:'تصميم لوكو خاص بمؤسستك مع هوية بصرية متكاملة',size:'A4',qty:1,price:25000,image:'./public/assets/service-logo-design.jpg',segments:['business','institutions'],featured:true,badge:'للأعمال'},
  {category:'مدارس',name:'الرؤية والأهداف',desc:'تصميم وطباعة على بورد خشب',size:'A3',qty:1,price:10000,image:'./public/assets/service-vision-board.jpg',segments:['institutions'],badge:'للمدارس'},
  {category:'هدايا',name:'تقويم',desc:'تقويم بصورة شخصية أو لوكو المؤسسة',size:'A3',qty:1,price:3000,image:'./public/assets/service-calendar.jpg',segments:['gifts','institutions'],badge:'تخصيص'},
  {category:'مؤسسات',name:'سجل',desc:'سجل مخطط ومطبوع حسب الطلب',size:'A4',qty:1,price:5000,image:'./public/assets/service-register.jpg',segments:['teachers','institutions'],badge:'مؤسسات'},
  {category:'مؤسسات',name:'فايل',desc:'فايل تسجيل للمدارس والمؤسسات حسب الطلب',size:'A3',qty:50,price:30000,image:'./public/assets/service-school-folder.jpg',segments:['institutions'],featured:true,badge:'طلبات بالجملة'},
  {category:'مؤسسات',name:'تنظيم إداريات',desc:'مجموعة السجلات المطلوبة في عمل منظمات المجتمع المدني',size:'A4',qty:100,price:'حسب الكمية',image:'./public/assets/service-register.jpg',segments:['institutions'],quoteOnly:true,badge:'عرض سعر'},
  {category:'تجاري',name:'فينيل أسطح',desc:'تصميم وقص عبارات ولوكوهات فينيل الأسطح',size:'حسب الطلب',qty:null,price:'حسب الحجم',image:'./public/assets/business-print.jpg',segments:['business','institutions'],quoteOnly:true,badge:'حسب المقاس'}
];

const paths = [
  {id:'students',icon:'fa-book-open',title:'الطلاب والمدرسة',desc:'ملصقات، جداول، دفاتر، تخرج وشهادات',cta:'تصفح منتجات المدرسة'},
  {id:'teachers',icon:'fa-chalkboard-user',title:'المعلمون',desc:'نشرات، شهادات، سجلات ووسائل مدرسية',cta:'اعرض خدمات المعلمين'},
  {id:'photos',icon:'fa-camera-retro',title:'الصور والبورتريه',desc:'ترميم، استوديو، رصاص، ألوان و3D',cta:'أرسل صورتك'},
  {id:'gifts',icon:'fa-gift',title:'الهدايا والمناسبات',desc:'تقويم، دعوات، مجلات، لوحات وتخصيص',cta:'اصنع هدية شخصية'},
  {id:'business',icon:'fa-briefcase',title:'المشاريع والأعمال',desc:'لوكو، كروت، بوسترات، مطويات ومطبوعات',cta:'ابدأ هوية مشروعك'},
  {id:'institutions',icon:'fa-building-columns',title:'المدارس والمؤسسات',desc:'دروع، مجلات، فايلات، سجلات وشهادات',cta:'اطلب عرض سعر'}
];

const packages = [
  {name:'Student Pack',ar:'باقة الطالب',icon:'fa-graduation-cap',items:['ملصقات مدرسية','دفتر مذكرات','جدول حصص'],audience:'الطلاب والأسر',goal:'مجموعة مدرسية متناسقة بدل شراء كل قطعة منفردة.'},
  {name:'Teacher Pack',ar:'باقة المعلم',icon:'fa-person-chalkboard',items:['نشرة / إنفوجرافيك','بوستر تعليمي','غلاف ورقة عمل'],audience:'المعلمون',goal:'تحويل موضوع الدرس إلى مجموعة بصرية جاهزة.'},
  {name:'Portrait Pack',ar:'باقة الصور',icon:'fa-image-portrait',items:['ترميم صورة','صورة استوديو','بورتريه فني'],audience:'الأفراد والهدايا',goal:'أكثر من معالجة فنية لنفس الصورة أو المناسبة.'},
  {name:'Small Business Starter',ar:'باقة المشروع',icon:'fa-store',items:['تصميم لوكو','كرت شخصي','5 منشورات سوشيال'],audience:'المشاريع الصغيرة',goal:'بداية هوية وتسويق بصري موحد للمشروع.'},
  {name:'School Admin Pack',ar:'باقة إدارة المدرسة',icon:'fa-school',items:['شهادات','فايل','سجل','لوحة رؤية وأهداف'],audience:'المدارس',goal:'مجموعة مطبوعات إدارية موحدة للمدرسة.'}
];

const showcases = [
  {name:'تحسين وترميم الصور',eyebrow:'Transformation',text:'خدمة مرئية مثالية لعرض التحول من الصورة القديمة إلى نسخة محسنة.',image:'./public/assets/service-restoration.jpg'},
  {name:'ملصقات مدرسية بصور شخصية',eyebrow:'School Season',text:'منتج سريع الفهم بصريًا ومناسب للموسم الدراسي والباقات.',image:'./public/assets/service-school-stickers.jpg'},
  {name:'تصميم لوكو',eyebrow:'Business Identity',text:'بوابة واضحة من تصميم شعار واحد إلى هوية ومطبوعات متكاملة.',image:'./public/assets/service-logo-design.jpg'}
];

const state = {segment:'all',query:''};
let activeService = null;
const $ = (sel,scope=document) => scope.querySelector(sel);
const $$ = (sel,scope=document) => [...scope.querySelectorAll(sel)];
const money = value => typeof value === 'number' ? `${value.toLocaleString('ar-IQ')} د.ع` : value;
const qtyLabel = qty => qty === null || qty === undefined || qty === '' ? 'حسب الطلب' : qty.toLocaleString('ar-IQ');
const waUrl = text => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
const segmentTitle = id => paths.find(p=>p.id===id)?.title || 'خدمة مخصصة';

function serviceMessage(s){
  const price = money(s.price);
  return `مرحباً، أريد طلب خدمة: ${s.name}\nالسعر الظاهر: ${price}\nالمقاس: ${s.size}\nالعدد: ${qtyLabel(s.qty)}\nأرغب بإرسال الصورة/الفكرة والتفاصيل الآن.`;
}
function packageMessage(p){return `مرحباً، أنا مهتم بـ ${p.ar} (${p.name}). أرجو إرسال التفاصيل والسعر النهائي حسب طلبي.`;}
function serviceByName(name){return services.find(s=>s.name===name);}

function renderPaths(){
  $('#pathGrid').innerHTML = paths.map(p=>`<article class="path-card reveal" data-segment="${p.id}" tabindex="0"><span class="path-icon"><i class="fa-solid ${p.icon}" aria-hidden="true"></i></span><h3>${p.title}</h3><p>${p.desc}</p><button type="button">${p.cta}<i class="fa-solid fa-arrow-left" aria-hidden="true"></i></button></article>`).join('');
  $$('.path-card').forEach(card=>{
    const activate=()=>{setSegment(card.dataset.segment);$('#services').scrollIntoView({behavior:reducedMotion()?'auto':'smooth'});};
    card.addEventListener('click',activate);
    card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activate();}});
  });
}

function renderBest(){
  const featured = services.filter(s=>s.featured).slice(0,8);
  $('#bestGrid').innerHTML = featured.map((s,i)=>serviceCard(s,i,'best-card')).join('');
  bindServiceCards($('#bestGrid'));
}

function renderShowcase(){
  $('#showcaseGrid').innerHTML = showcases.map((item,i)=>`<article class="showcase-card reveal"><img src="${item.image}" alt="${item.name}" width="700" height="520" loading="lazy"><div class="showcase-overlay"><span>${item.eyebrow}</span><h3>${item.name}</h3><p>${item.text}</p><button class="showcase-order" type="button" data-name="${item.name}">اطلب هذه الخدمة <i class="fa-solid fa-arrow-left" aria-hidden="true"></i></button></div><span class="showcase-index">0${i+1}</span></article>`).join('');
  $$('.showcase-order').forEach(btn=>btn.addEventListener('click',e=>{e.stopPropagation();const s=serviceByName(btn.dataset.name);if(s)openModal(s);}));
}

function renderPackages(){
  $('#packageGrid').innerHTML=packages.map((p,i)=>`<article class="package-card reveal"><div class="package-top"><span class="package-icon"><i class="fa-solid ${p.icon}" aria-hidden="true"></i></span><span class="package-number">0${i+1}</span></div><p class="package-en">${p.name}</p><h3>${p.ar}</h3><ul>${p.items.map(x=>`<li><i class="fa-solid fa-check" aria-hidden="true"></i>${x}</li>`).join('')}</ul><div class="package-meta"><span>${p.audience}</span><p>${p.goal}</p></div><a class="package-wa" href="${waUrl(packageMessage(p))}" target="_blank" rel="noreferrer"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> اطلب تفاصيل الباقة</a></article>`).join('');
}

function renderFilters(){
  const chips=[{id:'all',title:'كل الخدمات'},...paths.map(({id,title})=>({id,title}))];
  $('#filterChips').innerHTML=chips.map(c=>`<button type="button" class="filter-chip ${state.segment===c.id?'active':''}" data-segment="${c.id}">${c.title}</button>`).join('');
  $$('.filter-chip').forEach(btn=>btn.addEventListener('click',()=>setSegment(btn.dataset.segment)));
}

function setSegment(segment){
  state.segment=segment;
  renderFilters();
  renderServices();
}

function filteredServices(){
  const q=state.query.trim().toLowerCase();
  return services.filter(s=>{
    const segmentOk=state.segment==='all'||s.segments.includes(state.segment);
    const text=`${s.name} ${s.desc} ${s.category} ${s.size}`.toLowerCase();
    return segmentOk && (!q || text.includes(q));
  });
}

function serviceCard(s,i,extra=''){
  const priceClass=s.quoteOnly?'quote':'fixed';
  return `<article class="service-card ${extra} reveal" data-name="${s.name}" tabindex="0" style="--delay:${Math.min(i*28,280)}ms"><div class="service-media"><img src="${s.image}" alt="${s.name}" width="640" height="480" loading="lazy"><span class="service-badge">${s.badge||s.category}</span></div><div class="service-body"><div class="service-meta"><span>${segmentTitle(s.segments[0])}</span><span>${s.size}</span></div><h3>${s.name}</h3><p>${s.desc}</p><div class="service-footer"><div class="service-price ${priceClass}"><small>${s.quoteOnly?'التسعير':'السعر المدرج'}</small><strong>${money(s.price)}</strong><span>العدد: ${qtyLabel(s.qty)}</span></div><a class="quick-wa" href="${waUrl(serviceMessage(s))}" target="_blank" rel="noreferrer" aria-label="طلب ${s.name} عبر واتساب"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></a></div></div></article>`;
}

function bindServiceCards(scope){
  $$('.service-card',scope).forEach(card=>{
    const open=()=>{const s=serviceByName(card.dataset.name);if(s)openModal(s);};
    card.addEventListener('click',e=>{if(e.target.closest('a,button'))return;open();});
    card.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&!e.target.closest('a,button')){e.preventDefault();open();}});
  });
}

function renderServices(){
  const list=filteredServices();
  $('#resultCount').textContent=`${list.length.toLocaleString('ar-IQ')} من ${services.length.toLocaleString('ar-IQ')} خدمة`;
  $('#emptyState').hidden=list.length>0;
  $('#serviceGrid').innerHTML=list.map((s,i)=>serviceCard(s,i)).join('');
  bindServiceCards($('#serviceGrid'));
}

function openModal(s){
  activeService=s;
  $('#modalImage').src=s.image;
  $('#modalImage').alt=s.name;
  $('#modalSegment').textContent=segmentTitle(s.segments[0]);
  $('#modalBadge').textContent=s.badge||s.category;
  $('#modalTitle').textContent=s.name;
  $('#modalDesc').textContent=s.desc;
  $('#modalSize').textContent=s.size;
  $('#modalQty').textContent=qtyLabel(s.qty);
  $('#modalPrice').textContent=money(s.price);
  $('#modalWhatsapp').href=waUrl(serviceMessage(s));
  const modal=$('#modal');modal.classList.add('open');modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  $('.modal-close').focus();
}
function closeModal(){const modal=$('#modal');modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');activeService=null;}

async function shareActiveService(){
  if(!activeService)return;
  const text=`${activeService.name} — ${money(activeService.price)} | MOUTAZ GROUP`;
  const url=location.href.split('#')[0]+'#services';
  try{
    if(navigator.share){await navigator.share({title:activeService.name,text,url});}
    else if(navigator.clipboard){await navigator.clipboard.writeText(`${text}\n${url}`);showToast('تم نسخ تفاصيل الخدمة والرابط');}
    else{showToast('المشاركة غير متاحة في هذا المتصفح');}
  }catch(err){if(err?.name!=='AbortError')showToast('تعذر فتح المشاركة');}
}

function showToast(message){const toast=$('#toast');toast.textContent=message;toast.classList.add('show');clearTimeout(showToast.t);showToast.t=setTimeout(()=>toast.classList.remove('show'),2200);}
function reducedMotion(){return window.matchMedia('(prefers-reduced-motion: reduce)').matches;}
function initReveal(){if(reducedMotion())return;const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target);}}),{threshold:.08});$$('.reveal').forEach(el=>io.observe(el));}

function initNav(){
  const btn=$('.menu-toggle'),nav=$('#mainNav');
  btn.addEventListener('click',()=>{const open=nav.classList.toggle('show');btn.setAttribute('aria-expanded',String(open));btn.setAttribute('aria-label',open?'إغلاق القائمة':'فتح القائمة');btn.innerHTML=`<i class="fa-solid ${open?'fa-xmark':'fa-bars'}" aria-hidden="true"></i>`;});
  $$('#mainNav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('show');btn.setAttribute('aria-expanded','false');}));
}

function initEvents(){
  $('#search').addEventListener('input',e=>{state.query=e.target.value;renderServices();});
  $('.modal-close').addEventListener('click',closeModal);
  $('#modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#modal').classList.contains('open'))closeModal();});
  $('#shareService').addEventListener('click',shareActiveService);
  $('#backToTop').addEventListener('click',()=>scrollTo({top:0,behavior:reducedMotion()?'auto':'smooth'}));
  addEventListener('scroll',()=>$('#backToTop').classList.toggle('show',scrollY>700),{passive:true});
}

function init(){
  renderPaths();renderBest();renderShowcase();renderPackages();renderFilters();renderServices();
  initNav();initEvents();initReveal();
  $('#year').textContent=new Date().getFullYear();
  console.info(`MOUTAZ GROUP: ${services.length} services loaded`);
}
init();
