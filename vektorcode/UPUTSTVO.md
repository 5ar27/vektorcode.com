# vektorcode.com — uputstvo za postavljanje

Ovaj folder je kompletan, spreman sajt. Tri stvari treba da uradite ručno:
**(1)** okačite na GitHub i povežete sa Vercel-om, **(2)** povežete formu sa
Google Sheets-om, **(3)** prijavite sajt na Google Search Console.

---

## 1. Objavljivanje na Vercel (preko GitHub-a)

1. Napravite novi repozitorijum na [github.com](https://github.com/new) (npr. `vektorcode`).
2. Otpremite **ceo sadržaj ovog foldera** u repozitorijum (možete i prevlačenjem
   fajlova na GitHub stranici: *Add file → Upload files*).
3. Na [vercel.com](https://vercel.com) → *Add New → Project* → izaberite taj repozitorijum.
4. Framework preset: **Other** (statičan sajt, ništa se ne podešava) → *Deploy*.
5. U podešavanjima projekta (*Settings → Domains*) dodajte domen `vektorcode.com`
   i pratite uputstvo za DNS.

> Fajl `vercel.json` je već podešen: čisti URL-ovi (`/projects` umesto
> `/projects.html`), keširanje slika i sigurnosna zaglavlja.

---

## 2. Povezivanje forme sa Google Sheets + email notifikacija

Forma na kontakt stranici upisuje svaki upit u vašu Google tabelu i **odmah vam
šalje email na office@vektorcode.com**. Podešava se jednom, za ~5 minuta:

1. Otvorite [sheets.google.com](https://sheets.google.com) i napravite novu tabelu,
   nazovite je npr. **„vektorcode — upiti sa sajta"**.
2. U tabeli: **Extensions → Apps Script**.
3. Obrišite sve što piše u editoru i nalepite kompletan sadržaj fajla
   **`google-apps-script.gs`** (nalazi se u ovom folderu). Sačuvajte (💾).
4. Kliknite **Deploy → New deployment**:
   - tip: **Web app**
   - *Execute as:* **Me**
   - *Who has access:* **Anyone**
   - → **Deploy**. Odobrite dozvole kada Google pita (Advanced → Go to project).
5. Kopirajte dobijeni **Web app URL** (počinje sa `https://script.google.com/macros/s/...`).
6. Otvorite fajl **`assets/js/main.js`** i na samom vrhu nalepite URL:

   ```js
   const SHEETS_ENDPOINT = "https://script.google.com/macros/s/VAŠ-URL/exec";
   ```

7. Sačuvajte i otpremite izmenu na GitHub — Vercel automatski objavi novu verziju.

**Rezultat:** svaki upit → novi red u tabeli + email notifikacija na
office@vektorcode.com (sa svim podacima iz forme).

> Dok URL nije podešen, forma ima rezervni režim: otvara korisnikov email program
> sa popunjenom porukom ka office@vektorcode.com, tako da nijedan upit ne propada.

---

## 3. SEO — šta je već ugrađeno i šta još treba

**Ugrađeno u kod (ne dirati):**
- Jedinstven `title` + `meta description` + ključne reči za svaku stranicu, na oba jezika
- Open Graph + Twitter kartice (lepa slika kad se sajt podeli na mrežama — `assets/img/og.jpg`)
- Strukturirani podaci (Schema.org JSON-LD): `ProfessionalService`, `WebSite`,
  `FAQPage` (proces), `CollectionPage` (projekti), `ContactPage`
- `sitemap.xml` + `robots.txt`
- Kanonski URL-ovi, semantički HTML, `alt` opisi na svim slikama
- Optimizovane slike (sa ~90MB na ~3.5MB), lazy-loading, keširanje na Vercel-u

**Uradite jednom kad sajt bude na domenu:**
1. [Google Search Console](https://search.google.com/search-console) → dodajte
   `vektorcode.com` → verifikujte preko DNS-a → pošaljite `sitemap.xml`.
2. Napravite [Google Business Profile](https://business.google.com) — besplatno,
   ogroman uticaj na lokalnu pretragu.
3. U Instagram bio stavite link ka sajtu (i obrnuto — već je povezano).
4. Objavljujte s vremena na vreme: svaki novi projekat dodajte na stranicu
   *Projekti* — Google voli sajtove koji se ažuriraju.
5. (Opciono) Dodajte [Vercel Analytics](https://vercel.com/analytics) ili Google
   Analytics 4 za praćenje poseta.

---

## 4. Struktura sajta

```
index.html          — početna
projects.html       — naši projekti (galerija sa lightbox-om)
process.html        — proces + česta pitanja
contact.html        — forma za besplatnu analizu
assets/css/         — stilovi
assets/js/i18n.js   — svi tekstovi na srpskom i engleskom
assets/js/main.js   — animacije + forma (ovde ide Google Sheets URL)
assets/projects/    — slike projekata (JPEG, optimizovane)
assets/img/         — logo (favicon.svg) i OG slika
google-apps-script.gs — kod za Google Sheets (kopira se u Apps Script)
vercel.json, robots.txt, sitemap.xml — konfiguracija i SEO
```

## 5. Česte izmene

- **Dodavanje projekta:** ubacite sliku u `assets/projects/` (JPEG, širina ~1400px)
  i kopirajte jedan `<section class="case">` blok u `projects.html`.
- **Izmena teksta:** svi tekstovi (SR i EN) su u `assets/js/i18n.js` — izmena na
  jednom mestu važi svuda. Srpski tekst stoji i u HTML-u kao podrazumevani.
- **Jezik:** sajt pamti izbor jezika posetioca (SR/EN prekidač u meniju).

## 6. Lokalni pregled (pre objavljivanja)

U Terminal-u, iz ovog foldera:

```bash
python3 -m http.server 8000
```

pa otvorite `http://localhost:8000` u pregledaču.
