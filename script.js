const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".nav-btn");
const pageButtons = document.querySelectorAll("[data-page]");

const courseGrid = document.getElementById("courseGrid");
const lessonGrid = document.getElementById("lessonGrid");
const lessonSearch = document.getElementById("lessonSearch");
const lessonFilter = document.getElementById("lessonFilter");

const missionEyebrow = document.getElementById("missionEyebrow");
const missionTitle = document.getElementById("missionTitle");
const missionSubtitle = document.getElementById("missionSubtitle");
const totalXpEl = document.getElementById("totalXp");
const currentLevelEl = document.getElementById("currentLevel");
const maxLevelEl = document.getElementById("maxLevel");
const courseProgressText = document.getElementById("courseProgressText");
const courseProgressFill = document.getElementById("courseProgressFill");

const taskTag = document.getElementById("taskTag");
const difficultyTag = document.getElementById("difficultyTag");
const taskName = document.getElementById("taskName");
const taskInfo = document.getElementById("taskInfo");
const taskExample = document.getElementById("taskExample");
const hintText = document.getElementById("hintText");
const levelRoadmap = document.getElementById("levelRoadmap");

const zeroExplain = document.getElementById("zeroExplain");
const codeExplain = document.getElementById("codeExplain");
const conceptList = document.getElementById("conceptList");

const editorFileName = document.getElementById("editorFileName");
const codeInput = document.getElementById("codeInput");
const lineNumbers = document.getElementById("lineNumbers");
const messageBox = document.getElementById("messageBox");

const checkBtn = document.getElementById("checkBtn");
const starterBtn = document.getElementById("starterBtn");
const solutionBtn = document.getElementById("solutionBtn");
const nextLevelBtn = document.getElementById("nextLevelBtn");
const hintBtn = document.getElementById("hintBtn");
const backToAcademyBtn = document.getElementById("backToAcademyBtn");
const resetAllBtn = document.getElementById("resetAllBtn");

const authOpenBtn = document.getElementById("authOpenBtn");
const authModal = document.getElementById("authModal");
const authCloseBtn = document.getElementById("authCloseBtn");
const authTabs = document.querySelectorAll(".auth-tab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const authMessage = document.getElementById("authMessage");
const accountName = document.getElementById("accountName");
const accountInfo = document.getElementById("accountInfo");
const syncBtn = document.getElementById("syncBtn");
const logoutBtn = document.getElementById("logoutBtn");
const rewardsArea = document.getElementById("rewardsArea");

const mentorAdvice = document.getElementById("mentorAdvice");
const selfChecklist = document.getElementById("selfChecklist");
const openGuideBtn = document.getElementById("openGuideBtn");
const guideModal = document.getElementById("guideModal");
const guideCloseBtn = document.getElementById("guideCloseBtn");
const guideStartBtn = document.getElementById("guideStartBtn");
const dailyGoalText = document.getElementById("dailyGoalText");

const previewFrame = document.getElementById("previewFrame");
const worldTitle = document.getElementById("worldTitle");
const worldCount = document.getElementById("worldCount");
const worldArea = document.getElementById("worldArea");

const previewTabs = document.querySelectorAll(".preview-tab");
const lessonPreviewWrap = document.getElementById("lessonPreviewWrap");
const livePreviewWrap = document.getElementById("livePreviewWrap");
const worldPreviewWrap = document.getElementById("worldPreviewWrap");

const profileXp = document.getElementById("profileXp");
const rankName = document.getElementById("rankName");
const badgesArea = document.getElementById("badgesArea");
const profileStats = document.getElementById("profileStats");

const toast = document.getElementById("toast");
const confettiLayer = document.getElementById("confettiLayer");
const copyModal = document.getElementById("copyModal");
const copyModalBtn = document.getElementById("copyModalBtn");
const typingCode = document.getElementById("typingCode");

const STORAGE_KEY = "codegame_academy_ultra_progress_v1";
const difficultyLevels = ["Başlanğıc", "Asan", "Orta", "Çətin", "Pro"];

const courses = [
  {
    id: "html",
    name: "HTML",
    icon: "🌐",
    color: "#45caff",
    file: "index.html",
    title: "Veb Şəhər Qurucusu",
    subtitle: "HTML teqləri ilə saytın skeletini və şəhər obyektlərini qur.",
    world: "HTML şəhəri",
    badge: "HTML Qurucu",
    description: "HTML saytın skeletidir. Başlıq, mətn, şəkil, link və formalar HTML ilə yaradılır.",
    lessons: [
      {
        title: "HTML nədir?",
        text: "HTML veb səhifənin quruluşunu yaradır. Brauzer HTML teqlərini oxuyur və istifadəçiyə başlıq, mətn, şəkil, link kimi elementləri göstərir.",
        code: "<h1>Salam</h1>\n<p>Bu mənim ilk səhifəmdir.</p>"
      },
      {
        title: "Teq nədir?",
        text: "Teq brauzerə elementin növünü bildirir. Məsələn, <h1> böyük başlıq, <p> isə paraqraf deməkdir.",
        code: "<h1>Başlıq</h1>\n<p>Paraqraf mətni</p>"
      }
    ],
    tasks: [
      {
        name: "Ev tik",
        info: "Böyük başlıq yarat və içində “Evim” yaz.",
        example: "<h1>Evim</h1>",
        starter: "<h1></h1>",
        solution: "<h1>Evim</h1>",
        hint: "Böyük başlıq üçün <h1> teqindən istifadə et.",
        zero: "HTML-də hər şey elementlərdən ibarətdir. Element adətən açılış teqi, mətn və bağlanış teqindən ibarət olur.",
        explain: "<h1> teqi səhifədə ən böyük başlığı göstərir. Burada brauzer “Evim” sözünü böyük başlıq kimi göstərir.",
        concepts: ["HTML", "teq", "başlıq", "açılış/bağlanış"],
        object: ["🏠", "Ev", "linear-gradient(135deg, #ffe45c, #ff9b42)"],
        check: (code) => /<h1>\s*Evim\s*<\/h1>/i.test(code)
      },
      {
        name: "Məktəb əlavə et",
        info: "Paraqraf yarat və içində “Məktəb” yaz.",
        example: "<p>Məktəb</p>",
        starter: "<p></p>",
        solution: "<p>Məktəb</p>",
        hint: "Paraqraf üçün <p> teqindən istifadə olunur.",
        zero: "Paraqraf səhifədə adi mətn göstərmək üçündür. Başlıqdan fərqli olaraq daha kiçik və oxunaqlı olur.",
        explain: "<p> teqi “Məktəb” sözünü normal mətn kimi göstərir.",
        concepts: ["paraqraf", "mətn", "p teqi"],
        object: ["🏫", "Məktəb", "linear-gradient(135deg, #45caff, #b0f2ff)"],
        check: (code) => /<p>\s*Məktəb\s*<\/p>/i.test(code)
      },
      {
        name: "Park şəkli",
        info: "Şəkil teqi yaz. src və alt atributları olsun.",
        example: '<img src="park.png" alt="Park">',
        starter: '<img src="" alt="">',
        solution: '<img src="park.png" alt="Park">',
        hint: "Şəkil üçün <img>, mənbə üçün src, izah üçün alt istifadə edilir.",
        zero: "Atribut element haqqında əlavə məlumat verir. src şəklin yerini, alt isə şəkil açılmadıqda izahını bildirir.",
        explain: "<img> səhifəyə şəkil əlavə edir. src brauzerə şəklin harada olduğunu deyir, alt isə əlçatanlıq üçün izah verir.",
        concepts: ["img", "src", "alt", "atribut"],
        object: ["🖼️", "Şəkil", "linear-gradient(135deg, #43ff9d, #d8ff70)"],
        check: (code) => /<img\s+[^>]*src\s*=\s*["'][^"']+["'][^>]*alt\s*=\s*["'][^"']+["'][^>]*>/i.test(code)
      },
      {
        name: "Mağaza linki",
        info: "Link yarat və içində “Mağazaya keç” yaz.",
        example: '<a href="#">Mağazaya keç</a>',
        starter: '<a href="#"></a>',
        solution: '<a href="#">Mağazaya keç</a>',
        hint: "Link üçün <a href='...'>...</a> yazılır.",
        zero: "Link istifadəçini başqa səhifəyə və ya bölməyə aparır. href linkin ünvanını saxlayır.",
        explain: "<a> kliklənən keçid yaradır. href=\"#\" hələlik boş/demo keçid deməkdir.",
        concepts: ["link", "a teqi", "href", "keçid"],
        object: ["🏪", "Mağaza", "linear-gradient(135deg, #ff4ecd, #ffb2e8)"],
        check: (code) => /<a\s+[^>]*href\s*=\s*["'][^"']*["'][^>]*>\s*Mağazaya keç\s*<\/a>/i.test(code)
      },
      {
        name: "Qeydiyyat forması",
        info: "Sadə input və button olan forma yarat.",
        example: "<form>\n  <input>\n  <button>Göndər</button>\n</form>",
        starter: "<form>\n  \n</form>",
        solution: "<form>\n  <input placeholder=\"Adın\">\n  <button>Göndər</button>\n</form>",
        hint: "Formanın içində ən azı <input> və <button> olmalıdır.",
        zero: "Formalar istifadəçidən məlumat almaq üçündür. Məsələn ad, email və ya mesaj.",
        explain: "<form> məlumat toplama sahəsidir. <input> yazı sahəsi, <button> isə göndərmə düyməsidir.",
        concepts: ["form", "input", "button", "istifadəçi məlumatı"],
        object: ["📝", "Forma", "linear-gradient(135deg, #9b5cff, #c7a6ff)"],
        check: (code) => /<form[\s\S]*<input[\s\S]*<button[\s\S]*Göndər[\s\S]*<\/button>[\s\S]*<\/form>/i.test(code)
      }
    ]
  },
  {
    id: "css",
    name: "CSS",
    icon: "🎨",
    color: "#ff4ecd",
    file: "style.css",
    title: "Stil Sehrbazı",
    subtitle: "Rəng, ölçü, radius və animasiya ilə obyektləri gözəlləşdir.",
    world: "Dizayn studiyası",
    badge: "CSS Sehrbazı",
    description: "CSS dizayn üçündür. Rəng, ölçü, düzülüş və animasiyalar CSS ilə verilir.",
    lessons: [
      {
        title: "CSS nədir?",
        text: "CSS HTML elementlərini gözəlləşdirir. Rəng, ölçü, məsafə, fon və animasiya kimi görünüş qaydaları CSS ilə yazılır.",
        code: "h1 {\n  color: blue;\n}"
      },
      {
        title: "Property nədir?",
        text: "CSS qaydası property və value-dan ibarətdir. Məsələn color property-dir, red isə onun dəyəridir.",
        code: "p {\n  color: red;\n  font-size: 20px;\n}"
      }
    ],
    tasks: [
      {
        name: "Yaşıl kart",
        info: "Kartın fon rəngini yaşıl et.",
        example: "background-color: green;",
        starter: "background-color: ;",
        solution: "background-color: green;",
        hint: "Fon rəngi background-color ilə verilir.",
        zero: "CSS-də dizayn qaydası property və value formasında yazılır: property: value;",
        explain: "background-color elementi arxa fon rənginə boyayır. green yaşıl rəng deməkdir.",
        concepts: ["CSS", "property", "value", "fon rəngi"],
        object: ["🟩", "Fon", "linear-gradient(135deg, #43ff9d, #d8ff70)"],
        check: (code) => /background-color\s*:\s*(green|#008000|rgb\s*\(\s*0\s*,\s*128\s*,\s*0\s*\))\s*;?/i.test(code)
      },
      {
        name: "Yumru düymə",
        info: "Düyməni yumru etmək üçün border-radius ver.",
        example: "border-radius: 20px;",
        starter: "border-radius: ;",
        solution: "border-radius: 20px;",
        hint: "Kənarları yumrultmaq üçün border-radius istifadə olunur.",
        zero: "Elementin küncləri normalda iti olur. border-radius onları yumruldur.",
        explain: "border-radius: 20px; elementin künclərini 20 piksel qədər yumru edir.",
        concepts: ["border-radius", "px", "künc", "dizayn"],
        object: ["🔘", "Radius", "linear-gradient(135deg, #45caff, #b0f2ff)"],
        check: (code) => /border-radius\s*:\s*(1[0-9]|[2-9][0-9])px\s*;?/i.test(code)
      },
      {
        name: "Böyük başlıq",
        info: "Yazı ölçüsünü ən azı 32px et.",
        example: "font-size: 36px;",
        starter: "font-size: ;",
        solution: "font-size: 36px;",
        hint: "Yazı ölçüsü font-size ilə idarə olunur.",
        zero: "font-size yazının ölçüsünü dəyişir. px piksel deməkdir.",
        explain: "font-size: 36px; yazını böyük göstərir və istifadəçinin diqqətini çəkir.",
        concepts: ["font-size", "piksel", "yazı ölçüsü"],
        object: ["🔠", "Ölçü", "linear-gradient(135deg, #ffe45c, #ff9b42)"],
        check: (code) => /font-size\s*:\s*(3[2-9]|[4-9][0-9]|[1-9][0-9]{2,})px\s*;?/i.test(code)
      },
      {
        name: "Mərkəzləşdir",
        info: "Flex istifadə et və elementi mərkəzə gətir.",
        example: "display: flex;\njustify-content: center;\nalign-items: center;",
        starter: "display: ;\njustify-content: ;\nalign-items: ;",
        solution: "display: flex;\njustify-content: center;\nalign-items: center;",
        hint: "Flex-də üfüqi mərkəz justify-content, şaquli mərkəz align-items ilə edilir.",
        zero: "Flex elementləri rahat düzmək üçündür. Xüsusilə mərkəzləşdirməkdə çox istifadə edilir.",
        explain: "display:flex flex sistemi açır. justify-content üfüqi, align-items şaquli mərkəzləşdirir.",
        concepts: ["flex", "justify-content", "align-items", "layout"],
        object: ["🎯", "Flex", "linear-gradient(135deg, #ff4ecd, #ffb2e8)"],
        check: (code) =>
          /display\s*:\s*flex\s*;?/i.test(code) &&
          /justify-content\s*:\s*center\s*;?/i.test(code) &&
          /align-items\s*:\s*center\s*;?/i.test(code)
      },
      {
        name: "Hover effekti",
        info: "Hover zamanı transform ilə böyümə effekti yaz.",
        example: ".card:hover { transform: scale(1.1); }",
        starter: ".card:hover {\n  \n}",
        solution: ".card:hover {\n  transform: scale(1.1);\n}",
        hint: ":hover istifadəçi üzərinə gəldikdə işləyir.",
        zero: "Hover istifadəçi elementi siçanla üzərinə gətirəndə işə düşən vəziyyətdir.",
        explain: "transform: scale(1.1) elementi 10% böyüdür və oyun effekti yaradır.",
        concepts: [":hover", "transform", "scale", "animasiya"],
        object: ["✨", "Hover", "linear-gradient(135deg, #9b5cff, #c7a6ff)"],
        check: (code) => /:hover[\s\S]*transform\s*:\s*scale\s*\(\s*1\.[0-9]+\s*\)/i.test(code)
      }
    ]
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "⚡",
    color: "#ffe45c",
    file: "script.js",
    title: "Robot Məntiq Missiyası",
    subtitle: "Dəyişən, şərt, dövr və funksiya ilə robotu idarə et.",
    world: "Robot laboratoriyası",
    badge: "JS Robot Ustası",
    description: "JavaScript sayta hərəkət və məntiq verir. Düymələr, oyun qaydaları və interaktivlik JS ilə yazılır.",
    lessons: [
      {
        title: "JavaScript nədir?",
        text: "JavaScript veb səhifəni canlı edir. Düyməyə klik, oyun xalı, animasiya və şərtlər JavaScript ilə idarə olunur.",
        code: "let score = 0;\nscore = score + 10;"
      },
      {
        title: "Dəyişən nədir?",
        text: "Dəyişən məlumat saxlamaq üçündür. Məsələn xal, ad, yaş və ya oyun səviyyəsi dəyişəndə saxlanıla bilər.",
        code: "let name = \"Ayan\";\nlet level = 1;"
      }
    ],
    tasks: [
      {
        name: "Robot adı",
        info: "robotName adlı dəyişən yarat və dəyərini “CodeBot” et.",
        example: 'let robotName = "CodeBot";',
        starter: "let robotName = ;",
        solution: 'let robotName = "CodeBot";',
        hint: "Dəyişən yaratmaq üçün let istifadə et.",
        zero: "Dəyişən məlumat saxlayan qutudur. Ona ad verirsən və içində dəyər saxlayırsan.",
        explain: "let robotName = \"CodeBot\"; robotName adlı dəyişəndə CodeBot mətnini saxlayır.",
        concepts: ["let", "dəyişən", "string", "dəyər"],
        object: ["🤖", "Robot", "linear-gradient(135deg, #ffe45c, #ff9b42)"],
        check: (code) => /(let|const|var)\s+robotName\s*=\s*["']CodeBot["']\s*;?/i.test(code)
      },
      {
        name: "Enerji yoxlaması",
        info: "energy 50-dən böyükdürsə console.log ilə “Hazır” yaz.",
        example: 'if (energy > 50) { console.log("Hazır"); }',
        starter: "let energy = 80;\nif () {\n  \n}",
        solution: 'let energy = 80;\nif (energy > 50) {\n  console.log("Hazır");\n}',
        hint: "Şərt üçün if (...) { ... } yazılır.",
        zero: "if şərt yoxlayır. Şərt doğrudursa fiqurlu mötərizənin içindəki kod işləyir.",
        explain: "energy > 50 robotun enerjisinin kifayət edib-etmədiyini yoxlayır.",
        concepts: ["if", "şərt", "müqayisə", "console.log"],
        object: ["🔋", "Enerji", "linear-gradient(135deg, #43ff9d, #d8ff70)"],
        check: (code) => /if\s*\(\s*energy\s*>\s*50\s*\)[\s\S]*console\.log\s*\(\s*["']Hazır["']\s*\)/i.test(code)
      },
      {
        name: "3 addım get",
        info: "for dövrü ilə 3 dəfə “Addım” yazdır.",
        example: 'for (let i = 0; i < 3; i++) { console.log("Addım"); }',
        starter: "for (let i = 0; i < ; i++) {\n  \n}",
        solution: 'for (let i = 0; i < 3; i++) {\n  console.log("Addım");\n}',
        hint: "Dövr üçün for başlanğıc, şərt və artım hissələrindən ibarətdir.",
        zero: "Dövr eyni işi təkrar-təkrar görmək üçündür.",
        explain: "for dövrü i-ni 0-dan başlayır, i < 3 olduğu müddətdə işləyir və hər dəfə i-ni 1 artırır.",
        concepts: ["for", "dövr", "təkrar", "i++"],
        object: ["👣", "Addım", "linear-gradient(135deg, #45caff, #b0f2ff)"],
        check: (code) => /for\s*\([^)]*i\s*<\s*3[^)]*\)[\s\S]*console\.log\s*\(\s*["']Addım["']\s*\)/i.test(code)
      },
      {
        name: "Toplama funksiyası",
        info: "sum adlı funksiya yarat, a və b qəbul edib cəmini qaytarsın.",
        example: "function sum(a, b) { return a + b; }",
        starter: "function sum(a, b) {\n  \n}",
        solution: "function sum(a, b) {\n  return a + b;\n}",
        hint: "Funksiya daxilində nəticə qaytarmaq üçün return istifadə olunur.",
        zero: "Funksiya müəyyən işi görən kod blokudur. Bir dəfə yazılır, sonra dəfələrlə çağırıla bilir.",
        explain: "sum(a,b) iki ədəd alır və return ilə onların cəmini geri qaytarır.",
        concepts: ["function", "parametr", "return", "toplama"],
        object: ["➕", "Funksiya", "linear-gradient(135deg, #ff4ecd, #ffb2e8)"],
        check: (code) => /function\s+sum\s*\(\s*a\s*,\s*b\s*\)[\s\S]*return\s+a\s*\+\s*b\s*;?/i.test(code)
      },
      {
        name: "Massiv missiyası",
        info: "colors massivində ən azı 3 rəng saxla.",
        example: 'let colors = ["red", "green", "blue"];',
        starter: "let colors = [];",
        solution: 'let colors = ["red", "green", "blue"];',
        hint: "Massiv kvadrat mötərizə ilə yaradılır: [ ... ]",
        zero: "Massiv bir dəyişənin içində bir neçə dəyər saxlamaq üçündür.",
        explain: "colors massivində üç rəng saxlanır. Sonra bu rəngləri oyun, menyu və dizaynda istifadə etmək olar.",
        concepts: ["array", "massiv", "list", "dəyərlər"],
        object: ["🌈", "Massiv", "linear-gradient(135deg, #9b5cff, #c7a6ff)"],
        check: (code) => /(let|const|var)\s+colors\s*=\s*\[[^\]]+,[^\]]+,[^\]]+\]\s*;?/i.test(code)
      }
    ]
  },
  {
    id: "python",
    name: "Python",
    icon: "🐍",
    color: "#43ff9d",
    file: "main.py",
    title: "Python Xəzinə Macərası",
    subtitle: "Sadə Python kodları ilə xəzinə xəritəsini tamamla.",
    world: "Xəzinə adası",
    badge: "Python Kəşfiyyatçısı",
    description: "Python sadə sintaksisə malikdir və məntiq, süni intellekt, avtomatlaşdırma üçün çox istifadə olunur.",
    lessons: [
      {
        title: "Python nədir?",
        text: "Python oxunaqlı və başlanğıc üçün rahat proqramlaşdırma dilidir. Sadə yazılışı ilə məntiqi tez öyrədir.",
        code: "print(\"Salam\")"
      },
      {
        title: "print nə edir?",
        text: "print ekrana məlumat çıxarır. İlk proqramlarda nəticəni görmək üçün ən çox istifadə olunan əmrlərdən biridir.",
        code: "print(\"Mən kod yazıram\")"
      }
    ],
    tasks: [
      {
        name: "Salam de",
        info: "print ilə “Salam, Python!” yazdır.",
        example: 'print("Salam, Python!")',
        starter: "print()",
        solution: 'print("Salam, Python!")',
        hint: "Ekrana yazdırmaq üçün print() istifadə edilir.",
        zero: "Python-da ekrana söz yazdırmaq üçün print istifadə edilir.",
        explain: "print(\"Salam, Python!\") mətni ekrana çıxarır.",
        concepts: ["print", "mətn", "çıxış"],
        object: ["🗺️", "Xəritə", "linear-gradient(135deg, #ffe45c, #ff9b42)"],
        check: (code) => /print\s*\(\s*["']Salam,\s*Python!["']\s*\)/i.test(code)
      },
      {
        name: "Xəzinə sayı",
        info: "treasure adlı dəyişən yarat və dəyərini 10 et.",
        example: "treasure = 10",
        starter: "treasure = ",
        solution: "treasure = 10",
        hint: "Python-da dəyişən yaratmaq üçün sadəcə ad = dəyər yazılır.",
        zero: "Dəyişən məlumat saxlamaq üçündür. Python-da let və ya int yazmağa ehtiyac yoxdur.",
        explain: "treasure = 10 xəzinə sayını 10 olaraq saxlayır.",
        concepts: ["dəyişən", "ədəd", "assignment"],
        object: ["💰", "Xəzinə", "linear-gradient(135deg, #43ff9d, #d8ff70)"],
        check: (code) => /treasure\s*=\s*10\b/i.test(code)
      },
      {
        name: "Qapı şərti",
        info: "key True-dursa “Qapı açıldı” yazdır.",
        example: 'if key:\n    print("Qapı açıldı")',
        starter: "key = True\nif key:\n    ",
        solution: 'key = True\nif key:\n    print("Qapı açıldı")',
        hint: "Python-da if-dən sonra iki nöqtə qoyulur və iç kod boşluqla yazılır.",
        zero: "if şərt yoxlayır. Python-da kod blokları boşluqla ayrılır.",
        explain: "key True olduqda if içindəki print işləyir və qapı açıldı mesajı çıxır.",
        concepts: ["if", "True", "indentation", "şərt"],
        object: ["🗝️", "Açar", "linear-gradient(135deg, #45caff, #b0f2ff)"],
        check: (code) => /if\s+key\s*:\s*[\r\n]+[\s\t]*print\s*\(\s*["']Qapı açıldı["']\s*\)/i.test(code)
      },
      {
        name: "3 ada gəz",
        info: "for dövrü ilə range(3) istifadə et.",
        example: "for i in range(3):\n    print(i)",
        starter: "for i in range():\n    ",
        solution: "for i in range(3):\n    print(i)",
        hint: "range(3) 0, 1, 2 qiymətlərini verir.",
        zero: "for dövrü təkrar əməliyyatlar üçündür.",
        explain: "range(3) üç dəfə dövr yaradır və i 0,1,2 qiymətlərini alır.",
        concepts: ["for", "range", "dövr", "təkrar"],
        object: ["🏝️", "Ada", "linear-gradient(135deg, #ff4ecd, #ffb2e8)"],
        check: (code) => /for\s+\w+\s+in\s+range\s*\(\s*3\s*\)\s*:/i.test(code)
      },
      {
        name: "Bonus funksiyası",
        info: "bonus adlı funksiya yarat və x + 5 qaytar.",
        example: "def bonus(x):\n    return x + 5",
        starter: "def bonus(x):\n    ",
        solution: "def bonus(x):\n    return x + 5",
        hint: "Python-da funksiya def ilə yaradılır.",
        zero: "Funksiya bir işi təkrar istifadə üçün paketləyir.",
        explain: "bonus(x) x dəyərini qəbul edir və ona 5 əlavə edib qaytarır.",
        concepts: ["def", "funksiya", "return", "parametr"],
        object: ["🏆", "Bonus", "linear-gradient(135deg, #9b5cff, #c7a6ff)"],
        check: (code) => /def\s+bonus\s*\(\s*x\s*\)\s*:\s*[\r\n]+[\s\t]*return\s+x\s*\+\s*5/i.test(code)
      }
    ]
  },
  {
    id: "cpp",
    name: "C++",
    icon: "💎",
    color: "#45caff",
    file: "main.cpp",
    title: "Algoritm Arenası",
    subtitle: "C++ ilə sürətli düşün, alqoritmləri tamamla.",
    world: "Algoritm arenası",
    badge: "C++ Döyüşçüsü",
    description: "C++ sürətli və güclü dildir. Olimpiada, oyun motorları və sistem proqramlaşdırmada geniş istifadə olunur.",
    lessons: [
      {
        title: "C++ nədir?",
        text: "C++ performanslı proqramlaşdırma dilidir. Sürətli hesablama və alqoritmlər üçün çox uyğundur.",
        code: "#include <iostream>\nusing namespace std;\nint main() {\n  cout << \"Salam\";\n}"
      },
      {
        title: "cout nə edir?",
        text: "cout ekrana məlumat çıxarır. C++-da yazını göstərmək üçün cout << istifadə olunur.",
        code: "cout << \"Salam C++\";"
      }
    ],
    tasks: [
      {
        name: "Ekrana yaz",
        info: 'cout ilə "Salam C++" yazdır.',
        example: 'cout << "Salam C++";',
        starter: 'cout << ;',
        solution: 'cout << "Salam C++";',
        hint: "C++-da ekrana yazmaq üçün cout << istifadə edilir.",
        zero: "C++-da ekrana nəticə çıxarmaq üçün cout istifadə olunur.",
        explain: "cout << \"Salam C++\"; mətni ekrana göndərir.",
        concepts: ["cout", "çıxış", "string"],
        object: ["📢", "Çıxış", "linear-gradient(135deg, #ffe45c, #ff9b42)"],
        check: (code) => /cout\s*<<\s*["']Salam\s*C\+\+["']\s*;?/i.test(code)
      },
      {
        name: "Tam ədəd",
        info: "score adlı int dəyişəni yarat və 100 ver.",
        example: "int score = 100;",
        starter: "int score = ;",
        solution: "int score = 100;",
        hint: "Tam ədəd dəyişəni int ilə yaradılır.",
        zero: "C++-da dəyişən tip göstərilməklə yaradılır. int tam ədəd tipidir.",
        explain: "int score = 100; score adlı tam ədəd dəyişənində 100 saxlayır.",
        concepts: ["int", "dəyişən", "tip", "ədəd"],
        object: ["💯", "Score", "linear-gradient(135deg, #43ff9d, #d8ff70)"],
        check: (code) => /int\s+score\s*=\s*100\s*;?/i.test(code)
      },
      {
        name: "Şərt yoxla",
        info: "score 50-dən böyükdürsə cout ilə “Qazandın” yaz.",
        example: 'if (score > 50) { cout << "Qazandın"; }',
        starter: "if () {\n  \n}",
        solution: 'if (score > 50) {\n  cout << "Qazandın";\n}',
        hint: "if-in içində şərt, fiqurlu mötərizənin içində əmrlər yazılır.",
        zero: "Şərtlər proqramın qərar verməsini təmin edir.",
        explain: "score > 50 doğru olarsa Qazandın mesajı ekrana çıxır.",
        concepts: ["if", "şərt", "müqayisə", "cout"],
        object: ["⚔️", "Şərt", "linear-gradient(135deg, #45caff, #b0f2ff)"],
        check: (code) => /if\s*\(\s*score\s*>\s*50\s*\)[\s\S]*cout\s*<<\s*["']Qazandın["']/i.test(code)
      },
      {
        name: "Dövr qur",
        info: "for dövrü ilə i-ni 0-dan 4-ə qədər artır.",
        example: "for (int i = 0; i < 5; i++)",
        starter: "for (int i = 0; i < ; i++) {\n  \n}",
        solution: "for (int i = 0; i < 5; i++) {\n  cout << i;\n}",
        hint: "for (başlanğıc; şərt; artım) formasında yazılır.",
        zero: "Dövr eyni kodu bir neçə dəfə işlətmək üçündür.",
        explain: "for dövrü i 5-dən kiçik olduğu müddətdə işləyir və hər addımda i-ni artırır.",
        concepts: ["for", "i++", "dövr", "təkrar"],
        object: ["🔁", "Dövr", "linear-gradient(135deg, #ff4ecd, #ffb2e8)"],
        check: (code) => /for\s*\(\s*int\s+i\s*=\s*0\s*;\s*i\s*<\s*5\s*;\s*i\+\+\s*\)/i.test(code)
      },
      {
        name: "Vektor yarat",
        info: "numbers adlı vector<int> yarat.",
        example: "vector<int> numbers = {1, 2, 3};",
        starter: "vector<int> numbers = {};",
        solution: "vector<int> numbers = {1, 2, 3};",
        hint: "Vektor üçün vector<int> numbers yazılır.",
        zero: "Vektor bir neçə dəyəri siyahı kimi saxlamaq üçündür.",
        explain: "vector<int> numbers tam ədədlərdən ibarət siyahı yaradır.",
        concepts: ["vector", "siyahı", "int", "collection"],
        object: ["📦", "Vektor", "linear-gradient(135deg, #9b5cff, #c7a6ff)"],
        check: (code) => /vector\s*<\s*int\s*>\s+numbers\s*=\s*\{[^}]+\}\s*;?/i.test(code)
      }
    ]
  },
  {
    id: "csharp",
    name: "C#",
    icon: "🟣",
    color: "#9b5cff",
    file: "Program.cs",
    title: "Obyekt Fabriki",
    subtitle: "C# ilə dəyişən, metod və class anlayışını öyrən.",
    world: "Obyekt fabriki",
    badge: "C# Memarı",
    description: "C# tətbiq, oyun və backend hazırlamaq üçün istifadə olunan güclü dildir.",
    lessons: [
      {
        title: "C# nədir?",
        text: "C# Microsoft ekosistemində çox istifadə olunan dildir. Oyunlar, masaüstü proqramlar, backend və tətbiqlər hazırlamaq olur.",
        code: "Console.WriteLine(\"Salam C#\");"
      },
      {
        title: "Class nədir?",
        text: "Class obyektlər üçün şablondur. Məsələn Student class-ı şagird obyektləri yaratmaq üçün istifadə oluna bilər.",
        code: "class Student {\n  public string Name;\n}"
      }
    ],
    tasks: [
      {
        name: "Mesaj yaz",
        info: 'Console.WriteLine ilə "Salam C#" yaz.',
        example: 'Console.WriteLine("Salam C#");',
        starter: "Console.WriteLine();",
        solution: 'Console.WriteLine("Salam C#");',
        hint: "C#-da ekrana yazmaq üçün Console.WriteLine istifadə olunur.",
        zero: "Console.WriteLine ekrana məlumat çıxarır.",
        explain: "Console.WriteLine(\"Salam C#\"); mətni konsolda göstərir.",
        concepts: ["Console.WriteLine", "çıxış", "string"],
        object: ["📺", "Konsol", "linear-gradient(135deg, #ffe45c, #ff9b42)"],
        check: (code) => /Console\.WriteLine\s*\(\s*["']Salam\s*C#["']\s*\)\s*;?/i.test(code)
      },
      {
        name: "Ad dəyişəni",
        info: 'string name yarat və "Ayan" dəyəri ver.',
        example: 'string name = "Ayan";',
        starter: "string name = ;",
        solution: 'string name = "Ayan";',
        hint: "Mətn dəyişəni string tipi ilə yaradılır.",
        zero: "C#-da dəyişən yaratmaq üçün tip yazılır. string mətn tipi deməkdir.",
        explain: "string name = \"Ayan\"; name dəyişənində Ayan mətnini saxlayır.",
        concepts: ["string", "dəyişən", "tip", "mətn"],
        object: ["🏷️", "Name", "linear-gradient(135deg, #43ff9d, #d8ff70)"],
        check: (code) => /string\s+name\s*=\s*["']Ayan["']\s*;?/i.test(code)
      },
      {
        name: "Yaş şərti",
        info: "age 12-dən böyükdürsə “Uyğundur” yazdır.",
        example: 'if (age > 12) { Console.WriteLine("Uyğundur"); }',
        starter: "if () {\n  \n}",
        solution: 'if (age > 12) {\n  Console.WriteLine("Uyğundur");\n}',
        hint: "Şərt üçün if (şərt) { ... } istifadə olunur.",
        zero: "if proqramın qərar verməsinə imkan yaradır.",
        explain: "age > 12 doğru olduqda Uyğundur mətni ekrana çıxır.",
        concepts: ["if", "şərt", "müqayisə"],
        object: ["✅", "Şərt", "linear-gradient(135deg, #45caff, #b0f2ff)"],
        check: (code) => /if\s*\(\s*age\s*>\s*12\s*\)[\s\S]*Console\.WriteLine\s*\(\s*["']Uyğundur["']\s*\)/i.test(code)
      },
      {
        name: "Metod yarat",
        info: "Hello adlı static void metod yarat.",
        example: "static void Hello() { }",
        starter: "static void Hello() {\n  \n}",
        solution: 'static void Hello() {\n  Console.WriteLine("Hello");\n}',
        hint: "C# metodları tip, ad və mötərizələrlə yazılır.",
        zero: "Metod müəyyən işi görən kod blokudur.",
        explain: "static void Hello() Hello adlı metod yaradır. void metodun nəticə qaytarmadığını göstərir.",
        concepts: ["method", "static", "void", "funksiya"],
        object: ["🧩", "Metod", "linear-gradient(135deg, #ff4ecd, #ffb2e8)"],
        check: (code) => /static\s+void\s+Hello\s*\(\s*\)\s*\{/i.test(code)
      },
      {
        name: "Class yarat",
        info: "Student adlı class yarat.",
        example: "class Student { }",
        starter: "class  {\n  \n}",
        solution: "class Student {\n  public string Name;\n}",
        hint: "Class yaratmaq üçün class Student { } yazılır.",
        zero: "Class obyekt yaratmaq üçün plan və ya şablondur.",
        explain: "class Student şagird obyektləri üçün struktur yaradır.",
        concepts: ["class", "object", "OOP", "şablon"],
        object: ["🏛️", "Class", "linear-gradient(135deg, #9b5cff, #c7a6ff)"],
        check: (code) => /class\s+Student\s*\{/i.test(code)
      }
    ]
  }
];

let state = {
  activeCourseId: "html",
  totalXp: 0,
  progress: {},
  daily: {
    date: "",
    completedToday: 0
  },
  settings: {
    guideSeen: false
  }
};

let currentUser = null;
let csrfToken = null;

const rewardTiers = [
  { xp: 100, icon: "🌱", title: "İlk addım", desc: "İlk 100 XP qazandın" },
  { xp: 500, icon: "🔥", title: "Gənc Developer", desc: "Kod yazmağa isinirsən" },
  { xp: 1200, icon: "⚔️", title: "Kod Döyüşçüsü", desc: "Artıq ciddi tapşırıqlar keçirsən" },
  { xp: 2500, icon: "🚀", title: "Pro Macəraçı", desc: "Bir neçə kursda güclü nəticə" },
  { xp: 4000, icon: "👑", title: "Senior Kod Ustası", desc: "Platformanın ustası oldun" }
];

let syncTimer = null;
let syncInFlight = false;
let lastSyncedSnapshot = "";
let pendingSyncAfterFlight = false;
let waitingForNextLevel = false;

courses.forEach((course) => {
  state.progress[course.id] = { completed: 0, xp: 0, badgeEarned: false };
});

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  queueProgressSync();
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    state = {
      ...state,
      ...parsed,
      progress: {
        ...state.progress,
        ...(parsed.progress || {})
      }
    };

    courses.forEach((course) => {
      if (!state.progress[course.id]) {
        state.progress[course.id] = { completed: 0, xp: 0, badgeEarned: false };
      }
    });
  } catch (error) {
    console.warn("Yaddaş oxunmadı:", error);
  }
}

function getCourse(id = state.activeCourseId) {
  return courses.find((course) => course.id === id) || courses[0];
}


function requireLoginForMission(actionText = "Missiya bölməsinə keçmək üçün əvvəlcə giriş et və ya qeydiyyatdan keç.") {
  if (currentUser) return true;

  openAuthModal("register");
  showAuthMessage(actionText, "err");
  showToast("Dərs etmək üçün hesab lazımdır 🔐");
  return false;
}

function showPage(pageId) {
  if (pageId === "mission" && !requireLoginForMission()) {
    return;
  }

  pages.forEach((page) => page.classList.remove("active-page"));

  const target = document.getElementById(pageId);
  if (!target) return;

  target.classList.add("active-page");

  navButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.page === pageId);
  });

  if (authOpenBtn) {
    authOpenBtn.classList.toggle("active-profile", currentUser && pageId === "profile");
  }

  if (pageId === "academy") renderCourses();
  if (pageId === "library") renderLessons();
  if (pageId === "mission") renderMission();
  if (pageId === "profile") renderProfile();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

pageButtons.forEach((btn) => {
  btn.addEventListener("click", () => showPage(btn.dataset.page));
});


async function apiFetch(url, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {})
  };

  if (csrfToken) {
    headers["X-CSRF-Token"] = csrfToken;
  }

  const response = await fetch(url, {
    ...options,
    headers,
    credentials: "same-origin"
  });

  let data = {};
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(data.error || "Sorğu uğursuz oldu");
  }

  return data;
}

async function loadCsrfToken() {
  try {
    const data = await apiFetch("/api/auth/csrf", { method: "GET" });
    csrfToken = data.csrfToken;
  } catch (error) {
    console.warn("CSRF token alınmadı:", error.message);
  }
}

async function loadCurrentUser() {
  try {
    const data = await apiFetch("/api/auth/me", { method: "GET" });
    currentUser = data.user || null;

    if (data.progress) {
      state = mergeServerProgress(state, data.progress);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      lastSyncedSnapshot = getProgressSnapshot();
    }
  } catch {
    currentUser = null;
  }

  renderAccount();
}

function mergeServerProgress(localState, serverProgress) {
  if (!serverProgress || !serverProgress.progress) return localState;

  const merged = {
    ...localState,
    activeCourseId: serverProgress.activeCourseId || localState.activeCourseId,
    totalXp: Math.max(Number(localState.totalXp) || 0, Number(serverProgress.totalXp) || 0),
    progress: {
      ...localState.progress
    }
  };

  courses.forEach((course) => {
    const local = localState.progress[course.id] || { completed: 0, xp: 0, badgeEarned: false };
    const remote = serverProgress.progress[course.id] || { completed: 0, xp: 0, badgeEarned: false };

    merged.progress[course.id] = {
      completed: Math.max(Number(local.completed) || 0, Number(remote.completed) || 0),
      xp: Math.max(Number(local.xp) || 0, Number(remote.xp) || 0),
      badgeEarned: Boolean(local.badgeEarned || remote.badgeEarned)
    };
  });

  return merged;
}

function renderAccount() {
  if (currentUser) {
    accountName.textContent = `Salam, ${currentUser.name}`;
    accountInfo.textContent = `${currentUser.email} · Progress avtomatik real-time sync olunur`;
    authOpenBtn.textContent = "Profil";
    authOpenBtn.classList.add("profile-mode");
    authOpenBtn.setAttribute("aria-label", "Profil səhifəsinə keç");
    logoutBtn.style.display = "inline-flex";
    syncBtn.style.display = "none";
  } else {
    accountName.textContent = "Qonaq rejimi";
    accountInfo.textContent = "Progress brauzerdə saxlanır. Hesab açsan, database-də avtomatik sync olunacaq.";
    authOpenBtn.textContent = "Giriş / Qeydiyyat";
    authOpenBtn.classList.remove("profile-mode");
    authOpenBtn.setAttribute("aria-label", "Giriş və qeydiyyat pəncərəsini aç");
    logoutBtn.style.display = "none";
    syncBtn.style.display = "inline-flex";
  }
}

function openAuthModal(mode = "login") {
  authModal.classList.add("show");
  authModal.setAttribute("aria-hidden", "false");
  switchAuthTab(mode);
}

function closeAuthModal() {
  authModal.classList.remove("show");
  authModal.setAttribute("aria-hidden", "true");
  authMessage.textContent = "";
  authMessage.className = "auth-message";
}

function switchAuthTab(mode) {
  authTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.authTab === mode));
  loginForm.classList.toggle("active-auth-form", mode === "login");
  registerForm.classList.toggle("active-auth-form", mode === "register");
}

function showAuthMessage(text, type = "") {
  authMessage.textContent = text;
  authMessage.className = `auth-message ${type}`;
}

async function registerUser(event) {
  event.preventDefault();

  try {
    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value;

    const data = await apiFetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password })
    });

    currentUser = data.user;
    showAuthMessage("Qeydiyyat tamamlandı. Progress database-ə yazılır...", "ok");
    await syncProgressNow({ silent: true });
    lastSyncedSnapshot = getProgressSnapshot();
    renderAccount();
    renderProfile();
    setTimeout(closeAuthModal, 900);
    showToast("Hesab yaradıldı və giriş edildi 🔐");
  } catch (error) {
    showAuthMessage(error.message, "err");
  }
}

async function loginUser(event) {
  event.preventDefault();

  try {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const data = await apiFetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });

    currentUser = data.user;
    if (data.progress) {
      state = mergeServerProgress(state, data.progress);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      lastSyncedSnapshot = getProgressSnapshot();
    }

    renderAccount();
    renderCourses();
    renderMission();
    renderProfile();

    showAuthMessage("Giriş uğurludur.", "ok");
    setTimeout(closeAuthModal, 700);
    showToast("Giriş edildi ✅");
  } catch (error) {
    showAuthMessage(error.message, "err");
  }
}

async function logoutUser() {
  try {
    await apiFetch("/api/auth/logout", { method: "POST", body: JSON.stringify({}) });
  } catch {}

  currentUser = null;
  lastSyncedSnapshot = "";
  renderAccount();
  showToast("Hesabdan çıxış edildi");
}

function getProgressSnapshot() {
  return JSON.stringify({
    activeCourseId: state.activeCourseId,
    totalXp: state.totalXp,
    progress: state.progress
  });
}

function queueProgressSync(delay = 450) {
  if (!currentUser) return;

  clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    syncProgressNow({ silent: true }).catch((error) => {
      console.warn("Avtomatik sync alınmadı:", error.message);
    });
  }, delay);
}

async function syncProgressNow(options = {}) {
  const silent = Boolean(options.silent);

  if (!currentUser) {
    if (!silent) {
      openAuthModal("register");
      showAuthMessage("Progressi database-də saxlamaq üçün əvvəlcə hesab yarat və ya giriş et.", "err");
    }
    return;
  }

  const snapshot = getProgressSnapshot();

  if (snapshot === lastSyncedSnapshot) {
    if (!silent) showToast("Progress artıq yenidir ✅");
    return;
  }

  if (syncInFlight) {
    pendingSyncAfterFlight = true;
    return;
  }

  syncInFlight = true;
  accountInfo.textContent = `${currentUser.email} · Sync edilir...`;

  try {
    await apiFetch("/api/progress", {
      method: "PUT",
      body: snapshot
    });

    lastSyncedSnapshot = snapshot;
    accountInfo.textContent = `${currentUser.email} · Progress avtomatik real-time sync olunur`;

    if (!silent) {
      showToast("Progress database-də yeniləndi ✅");
    }
  } finally {
    syncInFlight = false;

    if (pendingSyncAfterFlight) {
      pendingSyncAfterFlight = false;
      queueProgressSync(150);
    }
  }
}



function ensureStateShape() {
  state.daily = state.daily || { date: "", completedToday: 0 };
  state.settings = state.settings || { guideSeen: false, focusMode: false };

  const today = new Date().toISOString().slice(0, 10);
  if (state.daily.date !== today) {
    state.daily = {
      date: today,
      completedToday: 0
    };
  }
}

function updateDailyGoal() {
  if (!dailyGoalText) return;

  const done = state.daily?.completedToday || 0;
  if (done <= 0) {
    dailyGoalText.textContent = "1 tapşırıq tamamla";
  } else if (done === 1) {
    dailyGoalText.textContent = "Əla! İndi 3 tapşırığa çat";
  } else if (done < 3) {
    dailyGoalText.textContent = `${done}/3 tapşırıq tamamlandı`;
  } else {
    dailyGoalText.textContent = "Bugünkü məqsəd tamamlandı 🎉";
  }
}

function markDailyProgress() {
  ensureStateShape();
  state.daily.completedToday += 1;

  if (state.daily.completedToday === 1) {
    state.totalXp += 25;
    showToast("Gündəlik məqsəd başladı: +25 XP 🌱");
  }

  if (state.daily.completedToday === 3) {
    state.totalXp += 75;
    showToast("Gündəlik bonus: +75 XP 🎁");
  }

  updateDailyGoal();
}

function renderCourses() {
  courseGrid.innerHTML = "";

  courses.forEach((course) => {
    const progress = state.progress[course.id];
    const percent = Math.round((progress.completed / course.tasks.length) * 100);

    const card = document.createElement("article");
    card.className = `course-card ${currentUser ? "logged-ready" : ""}`;
    card.style.setProperty("--course-glow", hexToGlow(course.color));
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="course-icon">${course.icon}</div>
      <h3>${course.name}</h3>
      <p>${course.description}</p>
      <div class="level-row">
        ${difficultyLevels.map((level, index) => `<span class="level-chip">${index < progress.completed ? "✅" : "⬜"} ${level}</span>`).join("")}
      </div>
      <div class="course-meta">
        <span>${course.tasks.length} səviyyə</span>
        <span>${progress.xp} XP</span>
        ${progress.badgeEarned ? `<span>🏅 Badge</span>` : ""}
      </div>
      <div class="course-progress">
        <small>${percent}% tamamlanıb</small>
        <div class="mini-track">
          <div class="mini-fill" style="width:${percent}%"></div>
        </div>
      </div>
    `;

    const open = () => {
      if (!requireLoginForMission(`${course.name} dərsinə başlamaq üçün əvvəlcə qeydiyyatdan keç və ya giriş et.`)) {
        return;
      }

      state.activeCourseId = course.id;
      saveState();
      showPage("mission");
      switchPreview("lesson");
      showToast(`${course.name} missiyası açıldı 🎮`);
    };

    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });

    courseGrid.appendChild(card);
  });
}

function setupLessonFilter() {
  lessonFilter.innerHTML = `<option value="all">Bütün dillər</option>`;
  courses.forEach((course) => {
    const option = document.createElement("option");
    option.value = course.id;
    option.textContent = `${course.icon} ${course.name}`;
    lessonFilter.appendChild(option);
  });
}

function renderLessons() {
  const query = (lessonSearch.value || "").toLowerCase().trim();
  const filter = lessonFilter.value || "all";
  lessonGrid.innerHTML = "";

  const items = [];

  courses.forEach((course) => {
    if (filter !== "all" && course.id !== filter) return;

    course.lessons.forEach((lesson) => {
      items.push({
        course,
        title: lesson.title,
        text: lesson.text,
        code: lesson.code
      });
    });

    course.tasks.forEach((task, index) => {
      items.push({
        course,
        title: `${difficultyLevels[index]}: ${task.name}`,
        text: `${task.zero} ${task.explain}`,
        code: task.solution
      });
    });
  });

  const filtered = items.filter((item) => {
    const haystack = `${item.course.name} ${item.title} ${item.text} ${item.code}`.toLowerCase();
    return !query || haystack.includes(query);
  });

  if (filtered.length === 0) {
    lessonGrid.innerHTML = `<div class="lesson-card"><h3>Nəticə tapılmadı</h3><p>Başqa sözlə axtar: məsələn HTML, if, funksiya, CSS.</p></div>`;
    return;
  }

  filtered.forEach((item) => {
    const card = document.createElement("article");
    card.className = "lesson-card";
    card.innerHTML = `
      <span class="lesson-chip">${item.course.icon} ${item.course.name}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
      <code class="lesson-code">${escapeHtml(item.code)}</code>
    `;
    lessonGrid.appendChild(card);
  });
}

lessonSearch.addEventListener("input", renderLessons);
lessonFilter.addEventListener("change", renderLessons);


function setNextMode(isWaiting) {
  waitingForNextLevel = isWaiting;

  if (!nextLevelBtn || !checkBtn) return;

  nextLevelBtn.classList.toggle("show", isWaiting);
  checkBtn.disabled = isWaiting;
  checkBtn.classList.toggle("locked-after-success", isWaiting);
}

function goNextLevel() {
  setNextMode(false);
  codeInput.value = "";
  switchPreview("lesson");
  renderMission();
}

function renderMission() {
  setNextMode(false);
  const course = getCourse();
  const progress = state.progress[course.id];
  const completed = Math.min(progress.completed, course.tasks.length);
  const isComplete = completed >= course.tasks.length;
  const currentIndex = isComplete ? course.tasks.length - 1 : completed;
  const task = course.tasks[currentIndex];

  missionEyebrow.textContent = `${course.name} missiyası`;
  missionTitle.textContent = `${course.icon} ${course.title}`;
  missionSubtitle.textContent = course.subtitle;
  totalXpEl.textContent = state.totalXp;
  currentLevelEl.textContent = isComplete ? course.tasks.length : completed + 1;
  maxLevelEl.textContent = course.tasks.length;

  const percent = Math.round((completed / course.tasks.length) * 100);
  courseProgressText.textContent = `${percent}%`;
  courseProgressFill.style.width = `${percent}%`;

  taskTag.textContent = course.name;
  taskTag.style.background = course.color;
  difficultyTag.textContent = isComplete ? "Tamamlandı" : difficultyLevels[currentIndex];
  taskName.textContent = isComplete ? "Missiya tamamlandı!" : task.name;
  taskInfo.textContent = isComplete
    ? "Bu kursu tamamlamısan. İstəsən başqa kurs seç və yeni macəraya başla."
    : task.info;
  taskExample.textContent = isComplete ? `${course.badge} badge qazandın 🏅` : task.example;
  hintText.textContent = "";
  editorFileName.textContent = course.file;

  zeroExplain.textContent = isComplete ? "Bu kursun bütün əsas mərhələlərini tamamlamısan." : task.zero;
  codeExplain.textContent = isComplete ? "Növbəti kursda yeni anlayışları səviyyə-səviyyə öyrənə bilərsən." : task.explain;
  conceptList.innerHTML = "";
  (isComplete ? ["kurs tamamlandı", "badge", "XP"] : task.concepts).forEach((concept) => {
    const span = document.createElement("span");
    span.textContent = concept;
    conceptList.appendChild(span);
  });

  renderMentorPanel(course, task, isComplete);

  if (isComplete) {
    codeInput.value = `🎉 ${course.name} kursu tamamlandı!\n🏅 Badge: ${course.badge}`;
    showMessage("Bu kurs tamamlanıb. Yeni kurs seçərək davam edə bilərsən. 🏆", "success");
  } else {
    codeInput.value = "";
    showMessage("Əvvəl izahı oxu, sonra kodu yaz və cavabı yoxla ✨", "");
  }

  renderRoadmap(course, completed);
  renderWorld(course, completed);
  updateLineNumbers();
  updatePreview();
}


function renderMentorPanel(course, task, isComplete) {
  if (!mentorAdvice || !selfChecklist) return;

  if (isComplete) {
    mentorAdvice.textContent = "Bu kursu bitirdin. İndi başqa kurs seç və biliklərini genişləndir.";
    selfChecklist.innerHTML = `
      <li class="done">Kursu tamamladım</li>
      <li class="done">Badge qazandım</li>
      <li class="done">Növbəti kursa hazıram</li>
    `;
    return;
  }

  const adviceMap = {
    html: "HTML-də məqsəd səhifənin skeletini qurmaqdır. Teqin harada açılıb harada bağlandığına diqqət et.",
    css: "CSS-də məqsəd görünüşü dəyişməkdir. Hər sətirdə property, iki nöqtə, dəyər və nöqtəli vergül düşün.",
    javascript: "JavaScript-də məqsəd məntiq qurmaqdır. Dəyişən, şərt və funksiya proqramın beynidir.",
    python: "Python-da boşluqlar çox önəmlidir. if, for və def-dən sonra iç kodu boşluqla yaz.",
    cpp: "C++-da tip və nöqtəli vergül vacibdir. Kiçik sintaksis səhvlərinə diqqət et.",
    csharp: "C#-da böyük-kiçik hərf fərqlidir. Console.WriteLine və class yazılışına diqqət et."
  };

  mentorAdvice.textContent = adviceMap[course.id] || "Kodu tələsmədən yaz, əvvəl məntiqi anla.";

  const items = [
    "Tapşırıqda istənilən sözü düzgün yazdım",
    "Açılış və bağlanış işarələrini yoxladım",
    "Nəticənin nə göstərməli olduğunu başa düşdüm"
  ];

  selfChecklist.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderRoadmap(course, completed) {
  levelRoadmap.innerHTML = "";

  course.tasks.forEach((task, index) => {
    const li = document.createElement("li");
    const done = index < completed;

    li.className = done ? "done" : "";
    li.innerHTML = `
      <span>${done ? "✅" : index === completed ? "🎯" : "⬜"}</span>
      <span>${difficultyLevels[index]} — ${task.object[0]} ${task.name}</span>
    `;

    levelRoadmap.appendChild(li);
  });
}

function renderWorld(course, completed) {
  worldTitle.textContent = course.world;
  worldCount.textContent = `${completed}/${course.tasks.length}`;
  worldArea.innerHTML = "";

  if (completed === 0) {
    worldArea.innerHTML = `<div class="empty-world">Tapşırıq keçdikcə obyektlər burada görünəcək.</div>`;
    return;
  }

  course.tasks.slice(0, completed).forEach((task, index) => {
    const obj = document.createElement("div");
    obj.className = "world-object";
    obj.innerHTML = createRealWorldObject(course, task, index);
    worldArea.appendChild(obj);
  });
}

function createRealWorldObject(course, task, index) {
  const label = escapeHtml(task.object[1]);
  const emoji = escapeHtml(task.object[0]);

  if (course.id === "html" && index === 0) {
    return `
      <div class="real-building real-house" aria-label="Realistik ev">
        <div class="ground"></div>
        <div class="chimney"></div>
        <div class="roof"></div>
        <div class="base"></div>
        <div class="window left"></div>
        <div class="window right"></div>
        <div class="door"></div>
        <div class="label">${label}</div>
      </div>
    `;
  }

  if (course.id === "html" && index === 1) {
    return `
      <div class="real-building real-school" aria-label="Realistik məktəb">
        <div class="roof"></div>
        <div class="base"></div>
        <div class="window left"></div>
        <div class="window right"></div>
        <div class="door"></div>
        <div class="label">${label}</div>
      </div>
    `;
  }

  if ((course.id === "html" && index === 2) || task.object[1].toLowerCase().includes("park")) {
    return `
      <div class="real-building real-park" aria-label="Realistik park">
        <div class="tree one"></div>
        <div class="tree two"></div>
        <div class="trunk one"></div>
        <div class="trunk two"></div>
        <div class="ground"></div>
        <div class="label">${label}</div>
      </div>
    `;
  }

  return `
    <div class="real-building real-generic" aria-label="${label}">
      <div class="base"></div>
      <div class="symbol">${emoji}</div>
      <div class="label">${label}</div>
    </div>
  `;
}


function updateCourseHeaderAfterSuccess(course, completed) {
  totalXpEl.textContent = state.totalXp;

  const percent = Math.round((completed / course.tasks.length) * 100);
  courseProgressText.textContent = `${percent}%`;
  courseProgressFill.style.width = `${percent}%`;
  currentLevelEl.textContent = Math.min(completed + 1, course.tasks.length);
}

function checkAnswer() {
  const course = getCourse();
  const progress = state.progress[course.id];

  if (progress.completed >= course.tasks.length) {
    showToast("Bu kurs artıq tamamlanıb 🏆");
    return;
  }

  const task = course.tasks[progress.completed];
  const code = codeInput.value.trim();

  if (!code) {
    showMessage("Əvvəlcə kod yazmalısan. Boş cavab qəbul olunmur 💡", "error");
    return;
  }

  if (!task.check(code)) {
    showMessage("Yenidən yoxla! Kodda kiçik səhv var. İpucudan və “Kod nə edir?” bölməsindən istifadə et 💡", "error");
    showToast("Yenidən yoxla 💡");
    return;
  }

  const levelBonus = 100 + progress.completed * 25;
  progress.completed += 1;
  progress.xp += levelBonus;
  state.totalXp += levelBonus;

  if (progress.completed >= course.tasks.length && !progress.badgeEarned) {
    progress.badgeEarned = true;
    state.totalXp += 250;
    progress.xp += 250;
    showToast(`Təbriklər! ${course.badge} badge qazandın 🏅`);
  } else {
    showToast(`Əla! +${levelBonus} XP qazandın 🎉`);
  }

  markDailyProgress();
  saveState();
  launchConfetti();

  const completedNow = progress.completed;
  renderWorld(course, completedNow);
  updateCourseHeaderAfterSuccess(course, completedNow);

  showMessage("Təbriklər! Nəticəni sağ tərəfdə gör. Hazır olanda növbəti səviyyəyə keç 🎉", "success");
  switchPreview("live");
  updatePreview();
  setNextMode(true);
}

function fillStarter() {
  if (waitingForNextLevel) {
    showToast("Əvvəl nəticəyə bax, sonra növbəti səviyyəyə keç 😊");
    return;
  }

  const course = getCourse();
  const progress = state.progress[course.id];

  if (progress.completed >= course.tasks.length) return;

  codeInput.value = course.tasks[progress.completed].starter;
  updateLineNumbers();
  updatePreview();
  codeInput.focus();
}

function showSolution() {
  if (waitingForNextLevel) {
    showToast("Əvvəl nəticəyə bax, sonra növbəti səviyyəyə keç 😊");
    return;
  }

  const course = getCourse();
  const progress = state.progress[course.id];

  if (progress.completed >= course.tasks.length) return;

  codeInput.value = course.tasks[progress.completed].solution;
  updateLineNumbers();
  updatePreview();
  showMessage("Həll nümunəsi göstərildi. Oxu, anla, sonra cavabı yoxla.", "info");
}

function showHint() {
  const course = getCourse();
  const progress = state.progress[course.id];

  if (progress.completed >= course.tasks.length) {
    hintText.textContent = "Bu missiya tamamlanıb 🏆";
    return;
  }

  hintText.textContent = course.tasks[progress.completed].hint;
}

function updatePreview() {
  const course = getCourse();
  const progress = state.progress[course.id];
  const code = codeInput.value;

  if (progress.completed >= course.tasks.length) {
    previewFrame.srcdoc = completePreview(course);
    return;
  }

  if (course.id === "html") {
    previewFrame.srcdoc = htmlPreview(code);
    return;
  }

  if (course.id === "css") {
    previewFrame.srcdoc = cssPreview(code);
    return;
  }

  previewFrame.srcdoc = codePreview(course, code);
}

function htmlPreview(code) {
  const safeCode = prepareHtmlForPreview(code);

  return `
    <!DOCTYPE html>
    <html lang="az">
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          margin: 0;
          padding: 24px;
          font-family: Arial, sans-serif;
          color: #17172a;
          background: linear-gradient(135deg, #eaf8ff, #ffffff);
        }
        h1, h2 { color: #7a35ff; }
        a {
          color: #ff4ecd;
          font-weight: 800;
        }
        img {
          max-width: 190px;
          min-height: 120px;
          padding: 12px;
          border-radius: 18px;
          background: #dfffee;
          border: 3px solid #43ff9d;
          object-fit: cover;
        }
        .preview-note {
          padding: 12px 14px;
          margin-bottom: 14px;
          border-radius: 16px;
          background: #fff7c5;
          border: 2px solid #ffe45c;
          color: #17172a;
          font-weight: 800;
        }
        .visual-img-card {
          width: min(250px, 100%);
          min-height: 178px;
          display: grid;
          place-items: center;
          gap: 8px;
          padding: 16px;
          margin: 12px 0;
          border-radius: 22px;
          text-align: center;
          color: #17172a;
          background: linear-gradient(135deg, #dfffee, #eaf8ff);
          border: 3px solid #43ff9d;
          box-shadow: 0 14px 30px rgba(0,0,0,0.14);
          cursor: pointer;
        }
        .visual-img-card .mountain {
          width: 140px;
          height: 88px;
          border-radius: 16px;
          background:
            radial-gradient(circle at 72% 24%, #ffe45c 0 12px, transparent 13px),
            linear-gradient(135deg, transparent 45%, #43ff9d 46% 70%, transparent 71%),
            linear-gradient(45deg, transparent 38%, #45caff 39% 70%, transparent 71%),
            linear-gradient(135deg, #b9efff, #ffffff);
          border: 2px solid rgba(0,0,0,0.08);
        }
        .visual-img-card strong {
          color: #7a35ff;
        }
        .visual-img-card input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }
        .alt-note {
          display: none;
          margin-top: 8px;
          padding: 8px 10px;
          border-radius: 14px;
          background: #ffe45c;
          font-weight: 800;
          word-break: break-word;
        }
        .visual-img-card input:checked ~ .alt-note {
          display: block;
        }
        .visual-img-card small {
          color: #4f5170;
          font-weight: 700;
        }
        button {
          padding: 12px 18px;
          border: 0;
          border-radius: 14px;
          color: white;
          background: linear-gradient(135deg, #ff4ecd, #45caff);
          font-weight: 800;
        }
        input:not([type="checkbox"]) {
          padding: 12px;
          border-radius: 12px;
          border: 2px solid #9b5cff;
        }
      </style>
    </head>
    <body>
      ${safeCode || "<p>Kod yazanda nəticə burada görünəcək...</p>"}
    </body>
    </html>
  `;
}

function prepareHtmlForPreview(code) {
  if (!code) return "";

  let safeCode = sanitizeStudentHtml(code);
  let imageIndex = 0;

  safeCode = safeCode.replace(/<img\b([^>]*)>/gi, (match, attrs) => {
    imageIndex += 1;
    const src = extractHtmlAttribute(attrs, "src") || "src yazılmayıb";
    const alt = extractHtmlAttribute(attrs, "alt") || "alt yazılmayıb";

    return createVisualImageCard(src, alt, imageIndex);
  });

  return safeCode;
}

function sanitizeStudentHtml(code) {
  return String(code)
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/\son\w+\s*=\s*(["']).*?\1/gi, "")
    .replace(/\son\w+\s*=\s*[^\s>]+/gi, "")
    .replace(/javascript\s*:/gi, "");
}

function extractHtmlAttribute(attrs, name) {
  const quoted = new RegExp(`${name}\\s*=\\s*(["'])(.*?)\\1`, "i").exec(attrs);
  if (quoted) return quoted[2].trim();

  const unquoted = new RegExp(`${name}\\s*=\\s*([^\\s>]+)`, "i").exec(attrs);
  if (unquoted) return unquoted[1].trim();

  return "";
}

function createVisualImageCard(src, alt, index) {
  const safeSrc = escapeHtml(src);
  const safeAlt = escapeHtml(alt);

  return `
    <label class="visual-img-card" for="imgAltToggle${index}">
      <input id="imgAltToggle${index}" type="checkbox">
      <div class="mountain"></div>
      <strong>Şəkil elementi</strong>
      <span>src: ${safeSrc}</span>
      <small>Üstünə kliklə, alt mətni gör</small>
      <div class="alt-note">alt: ${safeAlt}</div>
    </label>
  `;
}

function cssPreview(code) {
  const css = code.includes("{") && code.includes("}") ? code : `.demo-card { ${code} }`;

  return `
    <!DOCTYPE html>
    <html lang="az">
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          margin: 0;
          min-height: 100vh;
          display: grid;
          place-items: center;
          font-family: Arial, sans-serif;
          background: #f7f5ff;
        }
        .demo-card {
          width: 230px;
          height: 160px;
          display: grid;
          place-items: center;
          border: 3px dashed #7a35ff;
          border-radius: 18px;
          color: #17172a;
          font-size: 24px;
          font-weight: 900;
          transition: 0.25s ease;
        }
        ${css}
      </style>
    </head>
    <body>
      <div class="demo-card card">CSS obyekt 🎨</div>
    </body>
    </html>
  `;
}

function codePreview(course, code) {
  const escaped = escapeHtml(code || "Kod yazanda burada simulyasiya görünəcək...");
  const theme = course.color;

  return `
    <!DOCTYPE html>
    <html lang="az">
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          margin: 0;
          min-height: 100vh;
          padding: 22px;
          color: white;
          background: linear-gradient(135deg, #101124, #1e1e2f);
          font-family: Arial, sans-serif;
        }
        .sim {
          border-radius: 20px;
          padding: 18px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
        }
        h2 { color: ${theme}; }
        pre {
          white-space: pre-wrap;
          color: #43ff9d;
          background: rgba(0,0,0,0.28);
          padding: 14px;
          border-radius: 16px;
          line-height: 1.55;
        }
      </style>
    </head>
    <body>
      <div class="sim">
        <h2>${course.icon} ${course.name} simulyatoru</h2>
        <p>Bu bölmədə kodun məntiqi yoxlanılır. Real compiler növbəti böyük versiyada əlavə oluna bilər.</p>
        <pre>${escaped}</pre>
      </div>
    </body>
    </html>
  `;
}

function completePreview(course) {
  return `
    <!DOCTYPE html>
    <html lang="az">
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          margin: 0;
          min-height: 100vh;
          display: grid;
          place-items: center;
          text-align: center;
          color: #111427;
          background: linear-gradient(135deg, #43ff9d, #ffe45c);
          font-family: Arial, sans-serif;
        }
        h1 { font-size: 34px; }
      </style>
    </head>
    <body>
      <div>
        <h1>${course.icon} ${course.name} tamamlandı!</h1>
        <p>Badge qazandın: ${course.badge} 🏅</p>
      </div>
    </body>
    </html>
  `;
}

function renderProfile() {
  profileXp.textContent = state.totalXp;
  rankName.textContent = getRank(state.totalXp);
  renderRewards();

  badgesArea.innerHTML = "";
  const earned = courses.filter((course) => state.progress[course.id].badgeEarned);

  if (earned.length === 0) {
    badgesArea.innerHTML = `<div class="badge-empty">Hələ badge yoxdur. Bir kursu tamamla və ilk badge-ni qazan.</div>`;
  } else {
    earned.forEach((course) => {
      const item = document.createElement("div");
      item.className = "badge-item";
      item.textContent = `🏅 ${course.badge}`;
      badgesArea.appendChild(item);
    });
  }

  profileStats.innerHTML = "";
  courses.forEach((course) => {
    const progress = state.progress[course.id];
    const percent = Math.round((progress.completed / course.tasks.length) * 100);

    const row = document.createElement("div");
    row.className = "stat-row";
    row.innerHTML = `<span>${course.icon} ${course.name}</span><b>${percent}% / ${progress.xp} XP</b>`;
    profileStats.appendChild(row);
  });
}


function renderRewards() {
  if (!rewardsArea) return;

  rewardsArea.innerHTML = "";

  rewardTiers.forEach((reward) => {
    const unlocked = state.totalXp >= reward.xp;
    const item = document.createElement("div");
    item.className = `reward-item ${unlocked ? "unlocked" : ""}`;
    item.innerHTML = `
      <div class="reward-icon">${reward.icon}</div>
      <h4>${reward.title}</h4>
      <p>${reward.desc}</p>
      <span class="reward-status">${unlocked ? "Açıldı" : `${reward.xp - state.totalXp} XP qalıb`}</span>
    `;
    rewardsArea.appendChild(item);
  });
}


function getRank(xp) {
  if (xp >= 4000) return "Senior Kod Ustası";
  if (xp >= 2500) return "Proqramlaşdırma Qəhrəmanı";
  if (xp >= 1200) return "Orta Səviyyə Kodçu";
  if (xp >= 500) return "Gənc Developer";
  return "Başlanğıc Kodçu";
}

function resetAll() {
  const confirmed = confirm("Bütün XP, səviyyə və badge-lər silinsin?");
  if (!confirmed) return;

  localStorage.removeItem(STORAGE_KEY);
  state = {
    activeCourseId: "html",
    totalXp: 0,
    progress: {},
    daily: {
      date: new Date().toISOString().slice(0, 10),
      completedToday: 0
    },
    settings: {
      guideSeen: false
    }
  };

  courses.forEach((course) => {
    state.progress[course.id] = { completed: 0, xp: 0, badgeEarned: false };
  });

  saveState();
  renderProfile();
  renderCourses();
  renderMission();
  if (currentUser) {
    syncProgressNow().catch(() => {});
  }
  showToast("Bütün irəliləyiş sıfırlandı 🔄");
}

function showMessage(text, type = "") {
  messageBox.textContent = text;
  messageBox.className = `message-box ${type}`;
}

function updateLineNumbers() {
  const lines = codeInput.value.split("\n").length || 1;
  lineNumbers.textContent = Array.from({ length: lines }, (_, index) => index + 1).join("\n");
}

function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

function launchConfetti() {
  const colors = ["#43ff9d", "#45caff", "#ff4ecd", "#ffe45c", "#9b5cff"];

  for (let i = 0; i < 75; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.35}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    confettiLayer.appendChild(piece);

    setTimeout(() => piece.remove(), 1700);
  }
}

function switchPreview(tabName) {
  previewTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.preview === tabName);
  });

  lessonPreviewWrap.classList.toggle("active-preview", tabName === "lesson");
  livePreviewWrap.classList.toggle("active-preview", tabName === "live");
  worldPreviewWrap.classList.toggle("active-preview", tabName === "world");
}

previewTabs.forEach((tab) => {
  tab.addEventListener("click", () => switchPreview(tab.dataset.preview));
});

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function hexToGlow(hex) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, 0.18)`;
}

function typeHeroCode() {
  const text = `<CodeGame Academy Ultra>\n  0-dan izah ✅\n  Səviyyəli tapşırıqlar ✅\n  Kod nə edir? ✅\n  XP + Badge ✅\n  HTML CSS JS Python C++ C# ✅\n</CodeGame>`;
  let index = 0;

  const timer = setInterval(() => {
    typingCode.textContent = text.slice(0, index);
    index += 1;

    if (index > text.length) clearInterval(timer);
  }, 34);
}

codeInput.addEventListener("input", () => {
  updateLineNumbers();
  updatePreview();
});

codeInput.addEventListener("scroll", () => {
  lineNumbers.scrollTop = codeInput.scrollTop;
});

codeInput.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    event.preventDefault();

    const start = codeInput.selectionStart;
    const end = codeInput.selectionEnd;

    codeInput.value =
      codeInput.value.substring(0, start) +
      "  " +
      codeInput.value.substring(end);

    codeInput.selectionStart = codeInput.selectionEnd = start + 2;

    updateLineNumbers();
    updatePreview();
  }
});


function openGuideModal() {
  guideModal.classList.add("show");
  guideModal.setAttribute("aria-hidden", "false");
}

function closeGuideModal() {
  guideModal.classList.remove("show");
  guideModal.setAttribute("aria-hidden", "true");
  state.settings = state.settings || {};
  state.settings.guideSeen = true;
  saveState();
}

function applySavedSettings() {
  ensureStateShape();
  updateDailyGoal();
}

checkBtn.addEventListener("click", checkAnswer);
starterBtn.addEventListener("click", fillStarter);
solutionBtn.addEventListener("click", showSolution);
nextLevelBtn.addEventListener("click", goNextLevel);
hintBtn.addEventListener("click", showHint);
backToAcademyBtn.addEventListener("click", () => showPage("academy"));
resetAllBtn.addEventListener("click", resetAll);
openGuideBtn.addEventListener("click", openGuideModal);
guideCloseBtn.addEventListener("click", closeGuideModal);
guideStartBtn.addEventListener("click", () => {
  closeGuideModal();
  showPage("academy");
});
guideModal.addEventListener("click", (event) => {
  if (event.target === guideModal) closeGuideModal();
});

authOpenBtn.addEventListener("click", () => {
  if (currentUser) {
    showPage("profile");
    return;
  }

  openAuthModal("login");
});
authCloseBtn.addEventListener("click", closeAuthModal);
authModal.addEventListener("click", (event) => {
  if (event.target === authModal) closeAuthModal();
});

authTabs.forEach((tab) => {
  tab.addEventListener("click", () => switchAuthTab(tab.dataset.authTab));
});

loginForm.addEventListener("submit", loginUser);
registerForm.addEventListener("submit", registerUser);
logoutBtn.addEventListener("click", logoutUser);
syncBtn.addEventListener("click", () => syncProgressNow().catch((error) => showToast(error.message)));


function showCopyGuard() {
  showToast("Kopyalama əvəzinə özün yazmağa çalış 😊");
  if (!copyModal) return;

  copyModal.classList.add("show");
  copyModal.setAttribute("aria-hidden", "false");
}

function hideCopyGuard() {
  if (!copyModal) return;

  copyModal.classList.remove("show");
  copyModal.setAttribute("aria-hidden", "true");
}

function isCopyProtectedElement(element) {
  if (!element) return false;

  return Boolean(
    element.closest("#codeInput") ||
    element.closest(".lesson-code") ||
    element.closest(".example-box") ||
    element.closest(".editor") ||
    element.closest(".learn-card") ||
    element.closest(".task-card")
  );
}

document.addEventListener("copy", (event) => {
  if (isCopyProtectedElement(event.target) || window.getSelection().toString().trim()) {
    event.preventDefault();
    showCopyGuard();
  }
});

document.addEventListener("cut", (event) => {
  if (isCopyProtectedElement(event.target)) {
    event.preventDefault();
    showCopyGuard();
  }
});

document.addEventListener("contextmenu", (event) => {
  if (isCopyProtectedElement(event.target)) {
    event.preventDefault();
    showCopyGuard();
  }
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if ((event.ctrlKey || event.metaKey) && (key === "c" || key === "x")) {
    if (isCopyProtectedElement(document.activeElement) || window.getSelection().toString().trim()) {
      event.preventDefault();
      showCopyGuard();
    }
  }
});

if (copyModalBtn) {
  copyModalBtn.addEventListener("click", hideCopyGuard);
}

if (copyModal) {
  copyModal.addEventListener("click", (event) => {
    if (event.target === copyModal) hideCopyGuard();
  });
}



window.addEventListener("online", () => {
  if (currentUser) queueProgressSync(100);
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden" && currentUser) {
    syncProgressNow({ silent: true }).catch(() => {});
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  loadState();
  ensureStateShape();
  applySavedSettings();
  setupLessonFilter();
  currentUser = null; // Statik MVP: backend sorğusu yoxdur.
  renderAccount();
  renderCourses();
  renderLessons();
  renderMission();
  renderProfile();
  updateDailyGoal();
  typeHeroCode();

  // First-use guide opens only on user request.
});
