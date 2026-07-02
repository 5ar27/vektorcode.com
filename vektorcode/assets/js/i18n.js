/* ============================================================
   VEKTORCODE — i18n (sr / en)
   data-i18n       → textContent
   data-i18n-html  → innerHTML (dozvoljen <em>, <b>, <br>)
   data-i18n-ph    → placeholder
   ============================================================ */
(function () {
  const D = {
    /* ---------- meta ---------- */
    "meta.home.title": ["vektorcode — Sajt koji prodaje umesto vas | Izrada sajtova", "vektorcode — A website that sells for you | Web design & development"],
    "meta.home.desc": ["Pravimo brze, moderne sajtove koji donose upite i klijente. Vi date 2 sata, mi radimo sve ostalo. Prosečna isporuka 5 dana. Zakažite besplatnu analizu.", "We build fast, modern websites that bring you leads and clients. You give us 2 hours, we do the rest. Average delivery: 5 days. Book a free analysis."],
    "meta.projects.title": ["Naši projekti — vektorcode | Dizajn sajtova i aplikacija", "Our projects — vektorcode | Website & app design"],
    "meta.projects.desc": ["Pogledajte izbor naših dizajna: e-commerce sajtovi, mobilne aplikacije, editorial i prezentacioni sajtovi. Dizajn koji prodaje.", "Browse a selection of our designs: e-commerce websites, mobile apps, editorial and business sites. Design that sells."],
    "meta.process.title": ["Naš proces — vektorcode | Od ideje do sajta za 5 dana", "Our process — vektorcode | From idea to website in 5 days"],
    "meta.process.desc": ["Jednostavan proces u 3 koraka: brief, izrada, isporuka. Od vas tražimo najviše 2 sata. Prosečna isporuka sajta je 5 dana.", "A simple 3-step process: brief, build, launch. We need at most 2 hours of your time. Average delivery: 5 days."],
    "meta.contact.title": ["Besplatna analiza sajta — vektorcode | Kontakt", "Free website analysis — vektorcode | Contact"],
    "meta.contact.desc": ["Zakažite besplatnu analizu sajta. Popunite formu i javljamo se u roku od 24h sa konkretnim predlozima. Bez obaveze.", "Book a free website analysis. Fill in the form and we reply within 24h with concrete suggestions. No strings attached."],

    /* ---------- nav ---------- */
    "nav.home": ["Početna", "Home"],
    "nav.process": ["Proces", "Process"],
    "nav.projects": ["Projekti", "Projects"],
    "nav.cta": ["Besplatna analiza", "Free analysis"],
    "float.cta": ["Besplatna analiza →", "Free analysis →"],

    /* ---------- hero ---------- */
    "hero.badge": ["Trenutno primamo nove klijente", "Currently accepting new clients"],
    "hero.h1": ["Vaš posao je vrhunski. <em>Šteta što to niko ne vidi na internetu.</em>", "Your business is excellent. <em>A shame nobody sees it online.</em>"],
    "hero.lead": ["Pravimo sajtove koji rade kao vaš najbolji prodavac — privlače klijente, grade poverenje i pune vam kalendar. Vi date 2 sata, mi uradimo sve ostalo.", "We build websites that work like your best salesperson — attracting clients, building trust and filling your calendar. You give us 2 hours, we do everything else."],
    "hero.cta": ["Zakaži besplatnu analizu →", "Book a free analysis →"],
    "hero.note": ["Bez obaveze · odgovor za 24h", "No obligation · reply within 24h"],
    "hero.t1": ["dana prosečna isporuka", "days average delivery"],
    "hero.t2": ["vašeg vremena, ukupno", "of your time, in total"],
    "hero.t3": ["fiksna cena, bez iznenađenja", "fixed price, no surprises"],

    /* ---------- audit card ---------- */
    "audit.head": ["Besplatna analiza sajta", "Free website analysis"],
    "audit.live": ["uživo", "live"],
    "audit.lbl": ["Vaš trenutni sajt<br>(prosečan rezultat)", "Your current website<br>(average score)"],
    "audit.li1": ["Sporo se učitava — posetilac ode za 3 sekunde", "Slow to load — visitors leave in 3 seconds"],
    "audit.li2": ["Nejasna poruka — kupac ne zna šta da uradi", "Unclear message — buyers don't know what to do"],
    "audit.li3": ["Loš na telefonu — a 8/10 ljudi gleda baš tu", "Bad on mobile — where 8/10 people look first"],
    "audit.after": ["Posle naše izrade:", "After our rebuild:"],

    /* ---------- marquee ---------- */
    "mq.1": ["Izrada sajtova", "Web development"],
    "mq.2": ["Web dizajn", "Web design"],
    "mq.3": ["E-commerce", "E-commerce"],
    "mq.4": ["SEO optimizacija", "SEO optimization"],
    "mq.5": ["Redizajn", "Redesign"],
    "mq.6": ["Mobilne aplikacije", "Mobile apps"],

    /* ---------- problems ---------- */
    "prob.eyebrow": ["Zvuči poznato?", "Sound familiar?"],
    "prob.h2": ["Najbolji ste u svom poslu — a na internetu kao da ne postojite.", "You're the best at what you do — yet online, it's like you don't exist."],
    "prob.c1.tag": ["Svaki dan", "Every day"],
    "prob.c1.q": ["Slabiji konkurent je stalno pun.", "A weaker competitor is always fully booked."],
    "prob.c1.p": ["Ne zato što radi bolje od vas. Nego zato što ga ljudi prvo pronađu na Google-u — i ne traže dalje.", "Not because they do better work than you. But because people find them first on Google — and stop looking."],
    "prob.c2.tag": ["Bolna istina", "Painful truth"],
    "prob.c2.q": ["Preporuče vas — i baš tu se izgubi.", "You get referred — and that's exactly where it falls apart."],
    "prob.c2.p": ["Čovek vas izgugla, otvori zastareo sajt sa telefona, ne vidi jasno šta nudite, i ode kod nekog ko deluje pouzdanije.", "Someone googles you, opens an outdated site on their phone, can't see clearly what you offer, and goes to someone who looks more reliable."],
    "prob.c3.tag": ["Bačen novac", "Wasted money"],
    "prob.c3.q": ["Plaćate da vas vide, ali bez rezultata.", "You pay to be seen, but without results."],
    "prob.c3.p": ["Posetioci dođu sa Instagrama ili reklame, ne znaju gde da kliknu, i odu za par sekundi. Novac ode sa njima.", "Visitors arrive from Instagram or ads, don't know where to click, and leave within seconds. Your money leaves with them."],
    "prob.c4.tag": ["Tiha šteta", "Silent damage"],
    "prob.c4.q": ["Upiti stižu ređe nego što bi trebalo.", "Inquiries come in less often than they should."],
    "prob.c4.p": ["Za posao ovako dobar kao vaš, trebalo bi da ih bude mnogo više. Problem skoro nikad nije kvalitet — nego vidljivost.", "For a business as good as yours, there should be many more. The problem is almost never quality — it's visibility."],

    /* ---------- dark stats ---------- */
    "stats.eyebrow": ["Skrivena cena", "The hidden cost"],
    "stats.h2": ["Svaki dan vas ovo košta. Samo vam niko ne pošalje račun.", "This costs you every single day. You just never get the bill."],
    "stats.s1": ["Toliko posetiocu treba da odluči da li ostaje na vašem sajtu ili odlazi zauvek.", "That's how long a visitor needs to decide whether to stay on your site or leave forever."],
    "stats.s2": ["Ljudi vas gleda sa telefona. Ako tamo izgledate loše, izgubili ste ih pre nego što su videli ponudu.", "People view you on their phone. If you look bad there, you lost them before they saw your offer."],
    "stats.s3": ["Kupaca proverava sajt pre nego što vas kontaktira. Loš sajt = upit koji nikada nije ni stigao.", "Of buyers check your website before contacting you. A bad site = an inquiry that never arrived."],
    "stats.foot": ["Dobra vest? Sve ovo se popravlja — <span class=\"hl\">i lakše je nego što mislite.</span>", "The good news? All of this is fixable — <span class=\"hl\">and easier than you think.</span>"],

    /* ---------- guide ---------- */
    "guide.eyebrow": ["Razumemo vas", "We get it"],
    "guide.h2": ["Vi ste majstor svog zanata. Ne morate da budete i web programer.", "You're a master of your craft. You shouldn't have to be a web developer too."],
    "guide.p1b": ["Bez tehničkog žargona", "No tech jargon"],
    "guide.p1": ["Ne pričamo o pluginovima i hostingu. Pričamo o klijentima i rezultatima.", "We don't talk about plugins and hosting. We talk about clients and results."],
    "guide.p2b": ["Bez cimanja", "No hassle"],
    "guide.p2": ["Tražimo vam dva sata, jednom. Sve ostalo — tekst, dizajn, tehniku — radimo mi.", "We ask for two hours of your time, once. Everything else — copy, design, tech — is on us."],
    "guide.p3b": ["Bez rizika", "No risk"],
    "guide.p3": ["Jasna cena i rok na početku. Ono što dogovorimo, to i dobijete.", "Clear price and deadline up front. What we agree on is what you get."],
    "guide.q": ["„Ne treba mi lepši sajt.<br><em>Treba mi sajt koji prodaje umesto mene.</em>“", "“I don't need a prettier website.<br><em>I need a website that sells for me.</em>”"],

    /* ---------- transform ---------- */
    "tf.eyebrow": ["Zamislite ovako", "Picture this"],
    "tf.h2": ["Ponedeljak ujutru, za par nedelja.", "Monday morning, a few weeks from now."],
    "tf.i1b": ["Dva nova upita pre prve kafe.", "Two new inquiries before your first coffee."],
    "tf.i1": ["Novi klijenti koji su vas pronašli sami.", "New clients who found you on their own."],
    "tf.i2b": ["Inbox pun upita.", "An inbox full of inquiries."],
    "tf.i2": ["Ljudi koji su već videli šta nudite i žele baš vas.", "People who've already seen what you offer and want exactly you."],
    "tf.i3b": ["Kalendar se puni sam.", "Your calendar fills itself."],
    "tf.i3": ["Termini zakazani online, bez da ste mrdnuli prstom.", "Appointments booked online without you lifting a finger."],
    "tf.note": ["To nije san. To je sajt koji radi dok vi radite svoj posao.", "That's not a dream. That's a website working while you do your job."],
    "tf.cta": ["Hoću ovakav sajt →", "I want a site like this →"],
    "phone.day": ["Ponedeljak", "Monday"],
    "phone.n1b": ["Novi upit preko sajta", "New inquiry via website"],
    "phone.n1s": ["„Zanima me termin ove nedelje…“", "“I'd like an appointment this week…”"],
    "phone.n2b": ["Nova poruka sa sajta", "New message from the site"],
    "phone.n2s": ["„Treba mi vaša usluga, hitno…“", "“I need your service, urgently…”"],
    "phone.n3b": ["Termin zakazan online", "Appointment booked online"],
    "phone.n3s": ["Sreda, 14:00", "Wednesday, 2:00 PM"],
    "phone.n4b": ["Još jedan upit", "Another inquiry"],
    "phone.n4s": ["„Koliko košta…“", "“How much does it cost…”"],

    /* ---------- steps (home) ---------- */
    "steps.eyebrow": ["Kako dolazimo do toga", "How we get there"],
    "steps.h2": ["Tri koraka. Vaše vreme: 2 sata.", "Three steps. Your time: 2 hours."],
    "steps.1t": ["Brief", "Brief"],
    "steps.1p": ["Kratak razgovor do sat vremena. Ispričate nam šta radite i kome prodajete. To je sve što tražimo od vas.", "A short conversation, up to an hour. You tell us what you do and who you sell to. That's all we ask of you."],
    "steps.2t": ["Izrada", "Build"],
    "steps.2p": ["Pišemo, dizajniramo i programiramo. Vi se bavite svojim poslom — bez prekida i bez pitanja na svakih pet minuta.", "We write, design and develop. You run your business — no interruptions, no questions every five minutes."],
    "steps.3t": ["Isporuka", "Launch"],
    "steps.3p": ["Sajt je online, povezan i spreman da donosi upite. Pokažemo vam kako da sami menjate osnovne stvari.", "Your site is live, connected and ready to bring inquiries. We show you how to edit the basics yourself."],
    "steps.pill": ["Ceo proces od vas traži <b>najviše 2 sata.</b>", "The whole process takes <b>at most 2 hours</b> of your time."],

    /* ---------- work (home) ---------- */
    "work.eyebrow": ["Naš rad", "Our work"],
    "work.h2": ["Dizajn koji prodaje — pogledajte sami.", "Design that sells — see for yourself."],
    "work.p": ["Izbor iz našeg portfolija: e-commerce, mobilne aplikacije i prezentacioni sajtovi.", "A selection from our portfolio: e-commerce, mobile apps and business websites."],
    "work.f1": ["E-commerce", "E-commerce"],
    "work.f2": ["Mobilna aplikacija", "Mobile app"],
    "work.f3": ["Editorial sajt", "Editorial website"],
    "work.more": ["Pogledaj sve projekte →", "View all projects →"],
    "testi.p": ["„Sve što sam uradio je da objasnim čime se bavim i šta želim da sajt postigne. Uz njihovo savetovanje smo brzo došli do jasne slike, a sve tehničke odluke su preuzeli oni — nijednom me nisu opteretili pitanjima u koja se ne razumem. Rekao sam šta hoću, i tačno to sam dobio.“", "“All I did was explain what I do and what I wanted the website to achieve. With their guidance we quickly got to a clear picture, and they took over every technical decision — never once burdening me with questions outside my expertise. I said what I wanted, and that's exactly what I got.”"],
    "testi.who": ["— Vlasnik uslužnog biznisa", "— Service business owner"],

    /* ---------- why ---------- */
    "why.eyebrow": ["Zašto baš mi", "Why us"],
    "why.h2": ["Pravimo sajt koji donosi posao.", "We build websites that bring business."],
    "why.v1t": ["Brzina", "Speed"],
    "why.v1p": ["Sajt u proseku za 5 dana, ne za tri meseca. Dok drugi crtaju, vaš već radi.", "A website in 5 days on average, not three months. While others sketch, yours is already working."],
    "why.v2t": ["Nulto cimanje", "Zero hassle"],
    "why.v2p": ["Tražimo vam 2 sata. Sve ostalo radimo mi.", "We ask for 2 hours. We do everything else."],
    "why.v3t": ["Fokus na rezultat", "Focus on results"],
    "why.v3p": ["Svaki element ima cilj: upit ili prodaju.", "Every element has a goal: an inquiry or a sale."],
    "why.v4t": ["Bez iznenađenja", "No surprises"],
    "why.v4p": ["Cena s početka je cena na kraju. Tačka.", "The price at the start is the price at the end. Period."],

    /* ---------- final CTA ---------- */
    "cta.eyebrow": ["Poslednja stvar", "One last thing"],
    "cta.h2": ["Vaš sledeći klijent vas upravo traži na Google-u.", "Your next client is searching for you on Google right now."],
    "cta.p": ["Pitanje je samo — da li će pronaći vas ili konkurenciju? Saznajte tačno gde gubite klijente. Besplatno, za 48 sati.", "The only question is — will they find you or your competition? Find out exactly where you're losing clients. Free, within 48 hours."],
    "cta.btn": ["Zakaži besplatnu analizu →", "Book a free analysis →"],
    "cta.r1": ["Bez obaveze", "No obligation"],
    "cta.r2": ["Konkretan video za 48h", "A concrete video within 48h"],
    "cta.r3": ["Odgovor za 24h", "Reply within 24h"],

    /* ---------- footer ---------- */
    "foot.tagline": ["Sajtovi koji donose klijente. Dizajn, izrada i optimizacija — sve na jednom mestu.", "Websites that bring clients. Design, development and optimization — all in one place."],
    "foot.nav": ["Navigacija", "Navigation"],
    "foot.contact": ["Kontakt", "Contact"],
    "foot.rights": ["Sva prava zadržana.", "All rights reserved."],

    /* ---------- projects page ---------- */
    "prj.eyebrow": ["Naši projekti", "Our projects"],
    "prj.h1": ["Dizajn koji <em>prodaje.</em>", "Design that <em>sells.</em>"],
    "prj.p": ["Izbor iz našeg portfolija — sajtovi i aplikacije dizajnirani da izgledaju vrhunski i da donesu rezultat. Kliknite na sliku za uvećani prikaz.", "A selection from our portfolio — websites and apps designed to look world-class and deliver results. Click any image to enlarge."],
    "tag.web": ["Web dizajn", "Web design"],
    "tag.ecom": ["E-commerce", "E-commerce"],
    "tag.app": ["Mobilna aplikacija", "Mobile app"],
    "tag.uiux": ["UI/UX", "UI/UX"],
    "tag.editorial": ["Editorial", "Editorial"],
    "tag.landing": ["Landing stranica", "Landing page"],
    "tag.brand": ["Brendiranje", "Branding"],
    "prj.jbl.desc": ["Kompletan e-commerce koncept za premium audio brend — početna strana, shop, istaknuti proizvod i stranica proizvoda. Čist, moderan izgled koji stavlja proizvod u prvi plan.", "A complete e-commerce concept for a premium audio brand — homepage, shop, highlighted product and product page. A clean, modern look that puts the product front and center."],
    "prj.rolex.desc": ["Mobilna aplikacija za zakazivanje i pregled luksuznih satova. Elegancija brenda prenesena u svaki ekran — od rezervacije termina do detalja proizvoda.", "A mobile app for booking and browsing luxury watches. The brand's elegance carried into every screen — from appointment booking to product details."],
    "prj.porsche.desc": ["Editorial sajt posvećen istoriji legendarnog brenda — početna, o brendu i pretraga modela. Tipografija i ritam sadržaja u prvom planu.", "An editorial website dedicated to the history of a legendary brand — homepage, about and model search. Typography and content rhythm take the lead."],
    "prj.fitlife.desc": ["Fitness & nutrition platforma sa personalizovanim programima — od hero sekcije do registracije. Ilustracije i jasan tok vode korisnika do prijave.", "A fitness & nutrition platform with personalized programs — from hero section to sign-up. Illustrations and a clear flow guide the user to registration."],
    "prj.ice.desc": ["Razigran, šaren koncept za prodavnicu sladoleda — dizajn koji budi apetit i osmeh čim se stranica otvori.", "A playful, colorful concept for an ice cream store — a design that sparks appetite and a smile the moment the page opens."],
    "prj.fashion.desc": ["Beauty & fashion koncept sa naglaskom na vizuelni identitet i eleganciju — dizajn koji prati trendove modne industrije.", "A beauty & fashion concept focused on visual identity and elegance — design in step with fashion industry trends."],
    "prj.cta.h2": ["Želite ovakav sajt za svoj biznis?", "Want a website like this for your business?"],
    "prj.cta.p": ["Recite nam šta radite, a mi ćemo vam pokazati kako bi vaš sajt mogao da izgleda — i šta bi mogao da donese.", "Tell us what you do and we'll show you what your website could look like — and what it could bring you."],

    /* ---------- process page ---------- */
    "proc.eyebrow": ["Naš proces", "Our process"],
    "proc.h1": ["Od ideje do gotovog sajta — uz 2 sata vašeg vremena.", "From idea to finished website — with 2 hours of your time."],
    "proc.p": ["Proces je napravljen tako da vas ne opterećuje. Vi date osnovne informacije jednom, mi preuzimamo sve ostalo. Prosečna isporuka: 5 dana.", "The process is built not to burden you. You give us the basics once, we take over everything else. Average delivery: 5 days."],
    "proc.1p": ["Razgovor do 60 min, uživo ili online. Pitamo šta radite, kome prodajete i šta želite da posetilac uradi na sajtu.", "A conversation up to 60 minutes, in person or online. We ask what you do, who you sell to and what you want visitors to do on your site."],
    "proc.2p": ["Pišemo tekstove koji prodaju, dizajniramo u skladu sa brendom i programiramo brz, moderan sajt. Dobijate rundu izmena.", "We write copy that sells, design in line with your brand and build a fast, modern website. You get a round of revisions."],
    "proc.3p": ["Postavljamo online, povezujemo sa Google-om i mrežama, i držimo kratku obuku za samostalne izmene.", "We put it live, connect it to Google and your social channels, and give you a short training for making edits yourself."],
    "proc.pill": ["Ukupno vreme od vas: <b>najviše 2 sata.</b> Prosečna isporuka: <b>5 dana.</b>", "Total time from you: <b>at most 2 hours.</b> Average delivery: <b>5 days.</b>"],
    "incl.eyebrow": ["Šta je uključeno", "What's included"],
    "incl.h2": ["Sve u jednoj ceni", "Everything in one price"],
    "incl.1": ["Pisanje svih tekstova (copywriting)", "All copy written for you (copywriting)"],
    "incl.2": ["Moderan dizajn prilagođen brendu", "Modern design tailored to your brand"],
    "incl.3": ["Potpuno prilagođeno telefonu", "Fully mobile-optimized"],
    "incl.4": ["Brzo učitavanje i SEO optimizacija", "Fast loading and SEO optimization"],
    "incl.5": ["Kontakt forma i povezivanje sa mejlom", "Contact form connected to your email"],
    "incl.6": ["Google mapa i poslovni profil", "Google Maps and Business Profile"],
    "incl.7": ["Povezivanje sa Instagram / Facebook", "Instagram / Facebook integration"],
    "incl.8": ["Obuka za samostalne izmene", "Training for making edits yourself"],
    "faq.eyebrow": ["Česta pitanja", "FAQ"],
    "faq.h2": ["Ono što klijenti najčešće pitaju", "What clients ask most often"],
    "faq.q1": ["Koliko košta izrada sajta?", "How much does a website cost?"],
    "faq.a1": ["Većina poslovnih sajtova je u rangu 800–1.500 €. Tačnu cenu dobijate na početku — bez naknadnih iznenađenja.", "Most business websites fall in the €800–1,500 range. You get the exact price up front — no surprises later."],
    "faq.q2": ["Koliko zaista traje?", "How long does it really take?"],
    "faq.a2": ["Standardni poslovni sajt isporučujemo u proseku za 5 radnih dana od dobijanja materijala i vašeg pristanka na koncept.", "We deliver a standard business website in 5 working days on average, from receiving the materials and your approval of the concept."],
    "faq.q3": ["Moram li da imam tekstove i slike?", "Do I need to have copy and images ready?"],
    "faq.a3": ["Ne. Tekstove pišemo mi. Od vas treba samo logo i osnovne informacije; za fotografije predlažemo rešenja.", "No. We write the copy. All we need from you is a logo and basic information; for photos, we propose solutions."],
    "faq.q4": ["Mogu li sam da menjam sajt kasnije?", "Can I edit the website myself later?"],
    "faq.a4": ["Da. Platforma je laka za samostalno održavanje, uz kratku obuku. Za veće izmene smo tu i mi.", "Yes. The platform is easy to maintain yourself after a short training. For bigger changes, we're here too."],
    "proc.cta.eyebrow": ["Spremni?", "Ready?"],
    "proc.cta.h2": ["Krenimo od besplatne analize", "Let's start with a free analysis"],
    "proc.cta.p": ["Pokazaćemo vam tačno gde sajt gubi klijente i šta vredi popraviti.", "We'll show you exactly where your site loses clients and what's worth fixing."],
    "proc.cta.btn": ["Zakaži analizu →", "Book an analysis →"],

    /* ---------- contact page ---------- */
    "con.eyebrow": ["Kontakt", "Contact"],
    "con.h1": ["Zakažite besplatnu analizu sajta.", "Book a free website analysis."],
    "con.p": ["Popunite kratku formu — javljamo se u roku od 24h sa terminom i video analizom vašeg sajta.", "Fill in the short form — we reply within 24h with a time slot and a video analysis of your site."],
    "f.biz": ["Ime biznisa", "Business name"],
    "f.biz.ph": ["npr. Stomatologija Smile", "e.g. Smile Dental Clinic"],
    "f.email": ["Vaš email", "Your email"],
    "f.email.ph": ["ime@firma.com", "name@company.com"],
    "f.site": ["Vaš trenutni sajt (ako postoji)", "Your current website (if any)"],
    "f.site.ph": ["www.vassajt.com", "www.yoursite.com"],
    "f.prob": ["Glavni problem", "Main problem"],
    "f.prob.0": ["Izaberite…", "Choose…"],
    "f.prob.1": ["Sajt je star / izgleda loše", "My site is old / looks bad"],
    "f.prob.2": ["Nemam sajt, treba mi nov", "I don't have a site, I need a new one"],
    "f.prob.3": ["Sajt ne donosi upite", "My site doesn't bring inquiries"],
    "f.prob.4": ["Slabo me vide na Google-u", "I'm barely visible on Google"],
    "f.bud": ["Okviran budžet", "Approximate budget"],
    "f.bud.0": ["Izaberite…", "Choose…"],
    "f.bud.1": ["do 800 €", "up to €800"],
    "f.bud.2": ["800 – 1.500 €", "€800 – €1,500"],
    "f.bud.3": ["1.500 € i više", "€1,500 and above"],
    "f.bud.4": ["Nisam siguran/na", "Not sure yet"],
    "f.msg": ["Poruka (opciono)", "Message (optional)"],
    "f.msg.ph": ["Recite nam ukratko šta želite da postignete.", "Tell us briefly what you want to achieve."],
    "f.send": ["Pošalji zahtev za analizu", "Send analysis request"],
    "f.sending": ["Šalje se…", "Sending…"],
    "f.ok": ["✓ Hvala! Vaš zahtev je stigao. Javljamo se u roku od 24h na email koji ste ostavili.", "✓ Thank you! Your request has been received. We'll reply within 24h to the email you provided."],
    "f.err": ["Došlo je do greške pri slanju. Pišite nam direktno na office@vektorcode.com", "Something went wrong. Please email us directly at office@vektorcode.com"],
    "info.email": ["Email", "Email"],
    "info.email.s": ["Odgovaramo u roku od 24h", "We reply within 24h"],
    "info.ig": ["Instagram", "Instagram"],
    "info.ig.s": ["Zapratite nas za novosti i radove", "Follow us for news and work"],
    "next.b": ["Šta se dešava posle?", "What happens next?"],
    "next.1": ["1 — Javimo se i dogovorimo kratak termin", "1 — We get in touch and schedule a short call"],
    "next.2": ["2 — Snimimo video analizu vašeg sajta", "2 — We record a video analysis of your site"],
    "next.3": ["3 — Dobijate jasan predlog i cenu — vi odlučujete", "3 — You get a clear proposal and price — you decide"]
  };

  const LS_KEY = "vc-lang";

  function apply(lang) {
    const i = lang === "en" ? 1 : 0;
    document.documentElement.lang = lang === "en" ? "en" : "sr";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const v = D[el.dataset.i18n]; if (v) el.textContent = v[i];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const v = D[el.dataset.i18nHtml]; if (v) el.innerHTML = v[i];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
      const v = D[el.dataset.i18nPh]; if (v) el.placeholder = v[i];
    });
    const page = document.body.dataset.page;
    if (page) {
      const t = D["meta." + page + ".title"], d = D["meta." + page + ".desc"];
      if (t) document.title = t[i];
      if (d) { const m = document.querySelector('meta[name="description"]'); if (m) m.content = d[i]; }
    }
    document.querySelectorAll(".lang-switch button").forEach(b =>
      b.classList.toggle("on", b.dataset.lang === lang));
    window.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  function setLang(lang) {
    try { localStorage.setItem(LS_KEY, lang); } catch (e) {}
    apply(lang);
  }

  let saved = "sr";
  try { saved = localStorage.getItem(LS_KEY) || "sr"; } catch (e) {}

  window.VC_I18N = { setLang, get lang() { return document.documentElement.lang === "en" ? "en" : "sr"; }, dict: D };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang-switch button").forEach(b =>
      b.addEventListener("click", () => setLang(b.dataset.lang)));
    if (saved !== "sr") apply(saved);
    else document.querySelectorAll(".lang-switch button").forEach(b =>
      b.classList.toggle("on", b.dataset.lang === "sr"));
  });
})();
