/* Responsa — language toggle.
   English lives in the HTML itself, so the page reads correctly with JS off and
   search engines index real content. Hungarian is applied over it from here.

   Strings are inserted with innerHTML because a few of them carry inline markup
   (<strong>, <code>, <a>). That is safe here and only here: every string below is
   authored in this file. Never feed user input through this. */

const STRINGS = {
  hu: {
    "skip": "Ugrás a tartalomra",
    "nav.cta": "Kezdjük el",

    /* ---------- hero ---------- */
    "hero.h1a": "Minden Google-értékelésre válasz — ",
    "hero.h1b": "a te hangodon",
    "hero.sub": "Megtanuljuk, hogyan beszélsz a vendégeiddel, és megírjuk a választ minden új értékelésre. Nélküled semmi nem megy ki.",
    "hero.cta": "Kezdjük el",
    "hero.mini": "Jelszó nélkül. Tulajdonosi jog nélkül. A beállítás két kattintás.",
    "chip.new": "Új értékelés",
    "chip.ok": "Válasz jóváhagyva",

    /* ---------- how it works ---------- */
    "how.eyebrow": "Hogyan működik",
    "how.h2": "Három lépés, egyszer. Utána megy magától.",
    "how.s1.h": "Hozzáadsz kezelőként",
    "how.s1.p": "Két kattintás a Google-profilodon. A válaszoláshoz a kezelői szerep is elég — jelszót és tulajdonosi jogot soha nem kérünk.",
    "how.s1.link": "Mutatjuk lépésről lépésre",
    "how.s2.h": "Megtanuljuk a hangodat",
    "how.s2.p": "Átnézzük a korábbi válaszaidat és a kínálatodat: mit árulsz, hogy hívod, hogyan köszönsz, hogyan búcsúzol.",
    "how.s3.h": "Te hagysz jóvá minden választ",
    "how.s3.p": "Minden piszkozat hozzád kerül először. Egy koppintás, és kint van a Google-on. Nélküled semmi nem jelenik meg.",

    /* ---------- why it matters ---------- */
    "why.eyebrow": "Miért számít",
    "why.h2": "A válasz nem udvariasság. Forgalom.",
    "why.lede": "A vendég elolvassa, mit írtál vissza másoknak, mielőtt eldönti, hova üljön be. És a Google is olvassa.",
    "why.st1": "ennyien várják el, hogy egy vállalkozás válaszoljon az értékelésükre.",
    "why.src1": "BrightLocal, 1141 amerikai fogyasztó, 2024",
    "why.st2": "mondja, hogy szívesebben választ olyan helyet, amelyik minden értékelésre válaszol.",
    "why.src2": "BrightLocal, 1002 amerikai fogyasztó, 2026",
    "why.st3": "egy héten belül vár választ az értékelésére.",
    "why.callout1": "A Google beleszámítja az értékeléseidet abba, mennyire számítasz ismertnek — és egyértelműen kimondja, hogy",
    "why.callout2": " „a pozitív értékelések és a segítőkész válaszok segíthetnek kitűnni\".",
    "why.callout3": " Ha a válasz néven nevezi, mit rendelt a vendég, azzal bizonyítod, hogy tényleg elolvastad.",
    "why.calloutsrc": "Google Cégprofil Súgó",

    /* ---------- social proof (real Hungarian reviews) ---------- */
    "proof.eyebrow": "Akikkel dolgozunk",
    "proof.h2": "Két szegedi hely, minden nap.",
    "proof.p1.loc": "Szeged · étterem",
    "proof.p1.review": "„Nagyon finom bagelek, hangulatos hely és extra kedves kiszolgálás. Mindenkinek szívből ajánlom!\"",
    "proof.p1.who": "Gábor V. · 2026. július",
    "proof.replylabel": "A választ a Responsa írta",
    "proof.p1.reply": "Kedves Gábor! 😊 Köszönjük szépen a sok jó szót és főleg az ajánlást, ez nagyon jólesett az egész csapatnak! Nyáron ugorj be a limitált Bagel Burgerünkért is. Reméljük, hamarosan újra látunk! 🥯✨",
    "proof.p2.loc": "Szeged · étterem",
    "proof.p2.review": "„Legjobb hely egy gyors kajára, az itt dolgozó emberek kedvesek és aranyosak, nagyon ajánlom 🔥🔥\"",
    "proof.p2.who": "Bence H. · 2026. május",
    "proof.p2.reply": "Kedves Bence! 😊 Köszönjük szépen a kedves szavakat! Örülünk, hogy nálunk találtad meg a legjobb gyors kaját. Legközelebb a Chicky Shroomot is kóstold meg! Ha erre jársz, ugorj be bátran! 🔥🍝",

    /* ---------- pricing ---------- */
    "price.eyebrow": "Árak",
    "price.h2": "Minden helyhez más mennyiségű értékelés érkezik.",
    "price.lede": "Ezért inkább helyre szabott árat adunk, mint hogy kiírjunk egy számot, ami senkire nem igaz. Írd meg, hol vagy, és még azon a héten küldünk árat.",
    "price.cta": "Kérek árajánlatot",

    /* ---------- form ---------- */
    "form.eyebrow": "Kezdjük el",
    "form.h2": "Nézzük meg a profilodat.",
    "form.lede": "Az első néhány választ még fizetés előtt megírjuk. Ha nem tetszik, ennyi volt.",
    "form.placeholder": "Ide kerül a Tally űrlap — még várunk az azonosítóra.",

    /* ---------- footer ---------- */
    "footer.copy": "© 2026 Responsa · Szeged",
    "footer.guide": "Útmutató",
    "footer.privacy": "Adatkezelés",
    "footer.contact": "Kapcsolat",

    /* ---------- guide ---------- */
    "guide.back": "← Vissza a főoldalra",
    "guide.h1": "Így adsz hozzá minket a Google-profilodhoz",
    "guide.lede": "Két perc, jelszó nélkül, telepíteni sem kell semmit. Kezelői hozzáférést adsz nekünk, amit bármikor vissza is vehetsz.",

    "guide.pre.h": "Először: igényelted már a profilodat?",
    "guide.pre.p1": "Rengeteg vállalkozás úgy szerepel a Google Térképen, hogy a profilját soha senki nem igényelte. A Google létrehozta, de nem irányítja senki — vagyis válaszolni sem tud rá senki, mi sem. Ezt nézd meg legelőször.",
    "guide.pre.s1.h": "Keresd meg a helyet a Google Térképen",
    "guide.pre.s1.p": "A cég nevével és a várossal, ahogy egy vendég is keresné.",
    "guide.pre.s2.h": "Keresd a „Vállalkozás igénylése\" linket",
    "guide.pre.s2.p": "Ha látod, a profil még szabad. Kattints rá, majd a „Kezelés most\" gombra, és kövesd a Google ellenőrzési lépéseit. Az ellenőrzés eltarthat pár napig, úgyhogy érdemes most elindítani.",
    "guide.pre.s3.h": "Ha nem látod, minden rendben",
    "guide.pre.s3.p": "Ha nincs igénylési link, a profil már valakié. Ha ez a valaki te vagy, mehetsz tovább.",
    "guide.pre.warn.h": "Valaki más igényelte?",
    "guide.pre.warn.p": " Előfordul: egy régi kolléga, egy ügynökség, egy korábbi tulajdonos. A Google-nek pont erre van tulajdonjog-igénylési folyamata — lassú, de működik. Szólj, és végigvezetünk rajta.",

    "guide.add.h": "Utána: adj hozzá minket kezelőként",
    "guide.add.p1": "Ha teheted, számítógépről csináld — ott könnyebb megtalálni a menüpontokat, mint a mobilappban.",
    "guide.add.s1.h": "Nyisd meg a cégprofilodat",
    "guide.add.s1.p": "Keress rá a cég nevére úgy, hogy be vagy jelentkezve a profilt birtokló Google-fiókba, vagy nyisd meg a profilt a Térképen.",
    "guide.add.s2.h": "Menj a Továbbiak → Cégprofil beállításai → Felhasználók és hozzáférés menüpontra",
    "guide.add.s2.p": "Ezek a Google saját menüfeliratai.",
    "guide.shot": "Ide képernyőkép kerül",
    "guide.add.s3.h": "Kattints a bal felső „Hozzáadás\" gombra",
    "guide.add.s3.p": "Megnyílik egy panel, ami e-mail-címet kér.",
    "guide.add.s4.h": "Írd be a Responsa e-mail-címét",
    "guide.add.s4.p": "A pontos címet regisztrációkor küldjük — benne van az üdvözlő e-mailben, úgyhogy onnan másold ki, ne gépeld.",
    "guide.add.s5.h": "A „Hozzáférés\" alatt válaszd a „Kezelő\" szerepet",
    "guide.add.s5.p": "Kezelő, nem Tulajdonos. Nekünk ennyi elég, és így a profil végig a te kezedben marad.",
    "guide.add.s6.h": "Kattints a „Meghívás\" gombra",
    "guide.add.s6.p": "Mi elfogadjuk, és ezzel a beállítás kész. Pár napon belül jönnek az első válaszjavaslatok.",

    "guide.roles.h": "Mit tesz lehetővé a kezelői hozzáférés",
    "guide.roles.p1": "Legyünk őszinték: a Google Kezelő szerepe többet enged, mint pusztán a válaszolás. Így néz ki a valóság.",
    "guide.roles.th1": "Megteheti…",
    "guide.roles.th2": "Kezelő (mi)",
    "guide.roles.th3": "Tulajdonos (te)",
    "guide.roles.r1": "Válaszol az értékelésekre",
    "guide.roles.r2": "Szerkeszti az adatokat, nyitvatartást, képeket",
    "guide.roles.r3": "Hozzáad vagy eltávolít másokat",
    "guide.roles.r4": "Törli a profilt",
    "guide.roles.r5": "Visszavonja a hozzáférésünket",
    "guide.roles.p2": "Vagyis egy kezelő elvileg a cégadatokat is szerkeszthetné. <strong>Mi kizárólag az értékelésekre válaszolunk.</strong> A nyitvatartásodhoz, a képeidhez és a leírásodhoz nem nyúlunk, téged pedig nem tudunk eltávolítani és semmit nem tudunk törölni. A hozzáférésünket ugyanabban a menüben vonhatod vissza, ahol megadtad.",
    "guide.remove.h": "A hozzáférésünk visszavonása",
    "guide.remove.p": "Továbbiak → Cégprofil beállításai → Felhasználók és hozzáférés, kijelölöd a mi sorunkat, majd Eltávolítás. Azonnal érvénybe lép, és előtte nem kell szólnod nekünk.",

    "guide.faq.h": "Gyakori kérdések",
    "guide.faq.q1": "Kell nektek a Google-jelszavam?",
    "guide.faq.a1": "Nem, és soha senkinek ne add oda. A meghívás a Google saját jogosultsági rendszerén keresztül működik — a mi fiókunknak adsz hozzáférést, nem a tiédet osztod meg.",
    "guide.faq.q2": "Kimehet úgy válasz, hogy nem látom?",
    "guide.faq.a2": "Nem. Minden választ megírunk, elküldünk neked, és csak akkor kerül ki, ha jóváhagytad. Az egész folyamat erre épül.",
    "guide.faq.q3": "Mi van, ha nem tetszik egy válasz?",
    "guide.faq.a3": "Elutasítod, vagy megírod, mit változtassunk. A javításaid visszakerülnek abba, ahogy neked írunk, így ugyanaz a hiba nem jön elő kétszer.",
    "guide.faq.q4": "Bármikor abbahagyhatom?",
    "guide.faq.a4": "Igen. Visszavonod a kezelői hozzáférésünket, és kint vagyunk — nincs felmondási idő, nincs mit lemondani. A már kiment válaszok maradnak, mert azok a tieid.",
    "guide.help.h": "Elakadtál valahol?",
    "guide.help.p": " Írj nekünk, és egy hívás alatt együtt megcsináljuk. Ez a lépés akad el a leggyakrabban, és öt perc alatt megoldható.",
    "guide.help.link": "Írj nekünk",

    /* ---------- privacy ---------- */
    "priv.h1": "Adatkezelés",
    "priv.lede": "Mit gyűjtünk, miért van nálunk, ki lát még bele, és hogyan töröltetheted. Utoljára frissítve: 2026. július 19.",
    "priv.draft.h": "Piszkozat — jogász még nem nézte át.",
    "priv.draft.p": " Ez az oldal őszintén leírja, hogyan kezeljük az adatokat, de jogi szakember még nem ellenőrizte, és az üzemeltető cégadatai még helykitöltők. Mielőtt támaszkodsz rá, nézesd át.",
    "priv.who.h": "Kik vagyunk",
    "priv.who.p": "A Responsát a <code>[CÉGNÉV]</code> üzemelteti, <code>[SZÉKHELY]</code>, Magyarország. Bármi, ami ezen az oldalon szerepel: <code>[KAPCSOLATI E-MAIL]</code>. Az alább leírt adatok kezelője mi vagyunk.",

    "priv.what.h": "Milyen adatokat gyűjtünk",
    "priv.what.s1.h": "Amikor kitöltöd az űrlapot",
    "priv.what.s1.i1": "A neved, e-mail-címed, telefon- vagy WhatsApp-számod",
    "priv.what.s1.i2": "A céged neve és a Google Térkép-linkje",
    "priv.what.s1.i3": "Bármilyen étlap, árlista vagy szolgáltatásleírás, amit feltöltesz vagy belinkelsz",
    "priv.what.s1.i4": "A választott nyelved, és amit a stílusodról megírsz nekünk",
    "priv.what.s2.h": "Amikor már ügyfelünk vagy",
    "priv.what.s2.i1": "A Google-értékeléseid, benne az értékelő nyilvános megjelenített nevével, a csillagokkal és a szöveggel",
    "priv.what.s2.i2": "Az általunk írt válaszok, és hogy jóváhagytad vagy elutasítottad-e őket",
    "priv.what.s2.i3": "Napló arról, mit és mikor tettünk közzé",
    "priv.what.p1": "Nem használunk követő sütiket, nem futtatunk analitikát, és nincs hirdetési követő az oldalon. Az űrlapot a Tally ágyazza be, ami a saját működéséhez szükséges sütiket állítja be.",

    "priv.why.h": "Miért van nálunk",
    "priv.why.i1": "<strong>A szolgáltatás nyújtásához</strong> — az értékeléseid és a kínálatod nélkül nem tudunk a te hangodon írni. Jogalap: szerződés teljesítése.",
    "priv.why.i2": "<strong>Hogy elérjünk</strong> — a jóváhagyásra váró válaszok és a fiókod ügyében. Jogalap: szerződés teljesítése.",
    "priv.why.i3": "<strong>Hogy válaszoljunk a megkeresésedre</strong> — ha kitöltöd az űrlapot, de végül nem leszel ügyfél. Jogalap: jogos érdek, hogy válaszoljunk neked.",

    "priv.share.h": "Ki lát még bele",
    "priv.share.p1": "Az adataidat nem adjuk el, és hirdetési célra nem osztjuk meg. A szolgáltatás működtetéséhez viszont ezekre a szolgáltatókra támaszkodunk:",
    "priv.share.th1": "Szolgáltató",
    "priv.share.th2": "Mi jut el hozzá",
    "priv.share.r1": "Az értékeléseid és az általunk közzétett válaszok. A cégprofilodhoz kezelőként férünk hozzá.",
    "priv.share.r2": "Minden, amit az űrlapba beírsz, a feltöltött fájlokkal együtt.",
    "priv.share.r3n": "Google Gemini vagy Anthropic Claude",
    "priv.share.r3": "Az értékelés szövege és a stílusszabályaid, hogy elkészülhessen a válaszjavaslat. Ebben benne van az értékelő keresztneve is, ha megadta.",
    "priv.share.r4": "A jóváhagyásra küldött válaszjavaslatok.",
    "priv.ai.h": "Az MI-részről őszintén:",
    "priv.ai.p": " a vendégeid által írt értékelések szövege eljut egy nyelvi modellhez, hogy elkészüljön a válasz. Ezek az értékelések már amúgy is nyilvánosak a Google-on, de szerintünk jobb, ha ezt tudod, mint ha később derülne ki.",

    "priv.keep.h": "Meddig őrizzük",
    "priv.keep.i1": "Megkeresés, amiből nem lesz semmi: 12 hónapon belül töröljük.",
    "priv.keep.i2": "Ügyfél-elérhetőség és cégadatok: amíg ügyfelünk vagy, utána még 12 hónapig.",
    "priv.keep.i3": "A közzétett válaszok naplója: amíg együtt dolgozunk, mert ez akadályozza meg, hogy kétszer válaszoljunk ugyanarra az értékelésre.",
    "priv.keep.i4": "A Google-on már megjelent válaszok ott maradnak — a te cégprofilodhoz tartoznak, és csak te tudod eltávolítani őket.",

    "priv.rights.h": "A jogaid",
    "priv.rights.p1": "A GDPR alapján kérhetsz másolatot arról, amit rólad tárolunk, kérheted a helyesbítését, a törlését, vagy tiltakozhatsz a felhasználása ellen. Írj a <code>[KAPCSOLATI E-MAIL]</code> címre, és 30 napon belül válaszolunk.",
    "priv.rights.p2": "A Google-profilodhoz adott hozzáférésünket bármikor magad is visszavonhatod, anélkül hogy minket megkérdeznél — az <a href=\"guide.html\">útmutató</a> leírja, hogyan. Ezzel az adatkezelés azonnal megszűnik.",
    "priv.rights.link": "útmutató",
    "priv.rights.p3": "Ha úgy érzed, rosszul kezeltük az adataidat, panasszal fordulhatsz a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH).",

    "priv.sec.h": "Hogyan tároljuk",
    "priv.sec.p": "Az ügyféladatok egy általunk üzemeltetett szerveren, privát fájlban vannak, amit csak a szolgáltatást futtató fiók olvashat. A Google-jelszavadat nem tároljuk, mert soha nem is kapjuk meg — a hozzáférés a Google saját jogosultsági rendszerén át működik, és bármikor visszavonhatod."
  }
};

const STORAGE_KEY = "responsa.lang";

function applyLang(lang) {
  const dict = STRINGS[lang];
  const useSource = lang === "en" || !dict;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (useSource) {
      if (el.dataset.i18nSource !== undefined) el.innerHTML = el.dataset.i18nSource;
    } else {
      const val = dict[el.dataset.i18n];
      if (val !== undefined) el.innerHTML = val;
    }
  });

  document.documentElement.lang = useSource ? "en" : lang;
  document.querySelectorAll(".langtoggle button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === (useSource ? "en" : lang)));
  });
}

function initLang() {
  // Stash the English original before anything overwrites it.
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.dataset.i18nSource = el.innerHTML;
  });

  const saved = localStorage.getItem(STORAGE_KEY);
  applyLang(saved === "hu" ? "hu" : "en");

  document.querySelectorAll(".langtoggle button").forEach((btn) => {
    btn.addEventListener("click", () => {
      localStorage.setItem(STORAGE_KEY, btn.dataset.lang);
      applyLang(btn.dataset.lang);
    });
  });
}

document.addEventListener("DOMContentLoaded", initLang);
