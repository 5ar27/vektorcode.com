/**
 * VEKTORCODE — Google Apps Script za kontakt formu
 * ------------------------------------------------
 * Šta radi: svaki popunjen upit sa sajta upisuje u Google Sheet
 * i odmah šalje email notifikaciju na office@vektorcode.com.
 *
 * Kompletno uputstvo za postavljanje: UPUTSTVO.md (korak 2)
 */

const SHEET_NAME = "Upiti";
const NOTIFY_EMAIL = "office@vektorcode.com";

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};

    // 1) Upis u tabelu
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Datum", "Ime biznisa", "Email", "Sajt", "Problem", "Budžet", "Poruka", "Jezik", "Stranica"]);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([
      new Date(),
      p.business || "",
      p.email || "",
      p.website || "",
      p.problem || "",
      p.budget || "",
      p.message || "",
      p.lang || "",
      p.page || ""
    ]);

    // 2) Email notifikacija
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: "🔔 Novi upit sa sajta — " + (p.business || "nepoznat biznis"),
      htmlBody:
        "<h2 style='font-family:sans-serif'>Novi zahtev za besplatnu analizu</h2>" +
        "<table style='font-family:sans-serif;font-size:14px;border-collapse:collapse'>" +
        row("Ime biznisa", p.business) +
        row("Email", p.email) +
        row("Trenutni sajt", p.website) +
        row("Glavni problem", p.problem) +
        row("Budžet", p.budget) +
        row("Poruka", p.message) +
        row("Jezik forme", p.lang) +
        "</table>" +
        "<p style='font-family:sans-serif;font-size:12px;color:#888'>Upit je automatski upisan i u Google Sheet.</p>"
    });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function row(label, value) {
  return "<tr><td style='padding:6px 14px 6px 0;color:#888'>" + label +
         "</td><td style='padding:6px 0'><b>" + (value || "—") + "</b></td></tr>";
}
