import puppeteer from "puppeteer";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = resolve(__dirname, "..", "anothermee-deck.pdf");
const TARGET_URL =
  process.env.DECK_URL || "https://liam-kp.github.io/anothermee-pitch/";
const WIDTH = 1920;
const HEIGHT = 1080;

console.log("Launching headless Chrome…");
const browser = await puppeteer.launch({ headless: "new" });

try {
  const page = await browser.newPage();
  await page.setViewport({ width: WIDTH, height: HEIGHT });

  console.log(`Navigating to ${TARGET_URL}`);
  await page.goto(TARGET_URL, {
    waitUntil: "networkidle0",
    timeout: 90000,
  });

  // Scroll through the whole page so whileInView animations fire
  await page.evaluate(async () => {
    const step = window.innerHeight;
    const total = document.documentElement.scrollHeight;
    for (let y = 0; y <= total; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 250));
    }
    window.scrollTo(0, 0);
  });

  // Let LiveDemo's animated sequence play out
  await new Promise((r) => setTimeout(r, 4000));

  // Print CSS: one section per page, fixed 1920x1080, black bg
  await page.addStyleTag({
    content: `
      @page { size: ${WIDTH}px ${HEIGHT}px; margin: 0; }
      html, body {
        background: #080808 !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      section {
        width: ${WIDTH}px !important;
        height: ${HEIGHT}px !important;
        min-height: ${HEIGHT}px !important;
        max-height: ${HEIGHT}px !important;
        overflow: hidden !important;
        page-break-after: always !important;
        break-after: page !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }
      section:last-child {
        page-break-after: auto !important;
        break-after: auto !important;
      }
    `,
  });

  await page.emulateMediaType("print");

  console.log("Generating PDF…");
  await page.pdf({
    path: OUT_PATH,
    width: `${WIDTH}px`,
    height: `${HEIGHT}px`,
    printBackground: true,
    preferCSSPageSize: true,
  });

  console.log(`✓ PDF saved to ${OUT_PATH}`);
} finally {
  await browser.close();
}
