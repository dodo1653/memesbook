const PDFDocument = require('pdfkit');
const fs = require('fs');

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 60;
const CONTENT_W = PAGE_W - 2 * MARGIN;

const MEMES = [
  { name: 'Pepe', symbol: 'PEPE', year: '2005', desc: 'The Frog That Launched Markets.' },
  { name: 'Doge', symbol: 'DOGE', year: '2013', desc: 'The Original Memecoin.' },
  { name: 'ChillGuy', symbol: 'CHILL', year: '2024', desc: 'The Aesthetic of Detachment.' },
  { name: '67', symbol: '67', year: '2024', desc: 'The Number of the Meme.' },
  { name: 'NEET', symbol: 'NEET', year: '2024', desc: 'The Anti-Work Ethic.' },
  { name: 'Wojak', symbol: 'WOJAK', year: '2010', desc: 'The Mirror of the Soul.' },
  { name: 'Shiba Inu', symbol: 'SHIB', year: '2020', desc: 'The Dogecoin Killer.' },
  { name: 'Bonk', symbol: 'BONK', year: '2023', desc: 'The First Solana Dog.' },
  { name: 'WIF', symbol: 'WIF', year: '2024', desc: 'Dog with Hat.' },
  { name: 'Mog', symbol: 'MOG', year: '2024', desc: 'The Mog Coin.' },
  { name: 'Brett', symbol: 'BRETT', year: '2024', desc: 'Pepe\'s Roommate.' },
  { name: 'Andy', symbol: 'ANDY', year: '2024', desc: 'Boys Club Resident.' },
  { name: 'Gigachad', symbol: 'GIGA', year: '2024', desc: 'Peak Masculinity.' },
  { name: 'Soyjak', symbol: 'SOY', year: '2024', desc: 'The Degraded Form.' },
  { name: 'Doomer', symbol: 'DOOM', year: '2024', desc: 'Cosmic Despair.' },
  { name: 'Bloomberg', symbol: 'BLOOM', year: '2024', desc: 'The Wake Up.' },
  { name: 'Pump.fun', symbol: 'PUMP', year: '2024', desc: 'The Platform.' },
  { name: 'Solana', symbol: 'SOL', year: '2020', desc: 'The Chain.' },
  { name: 'Toshi', symbol: 'TOSHI', year: '2024', desc: 'Coinbase\'s Cat.' },
  { name: 'Milady', symbol: 'MILADY', year: '2024', desc: 'The Aesthetic.' },
];

const CHAPTERS = [
  'The Dawn of the Meme Economy',
  'The First Specimens',
  'The Great Equalizer: Pump.fun',
  'The Anatomy of a Memecoin',
  'The Bonding Curve',
  'The Graduation',
  'The Community as Cathedral',
  'Memes as Financial Signal',
  'The Attention Economy',
  'The Psychology of the Degen',
  'The Art of the Rug Pull',
  'The History of On-Chain Culture',
  'The Philosophy of Value',
  'The Rituals of the Community',
  'The Taxonomy of Meme Archetypes',
  'The Economics of Belief',
  'The Network Effects of Culture',
  'The Liquidity of Meaning',
  'The Future of Financial Evolution',
  'The Verdict of History',
];

function drawPageBorder(doc) {
  doc.rect(MARGIN - 10, MARGIN - 10, PAGE_W - 2*MARGIN + 20, PAGE_H - 2*MARGIN + 20).strokeColor('#cccccc').lineWidth(0.5).stroke();
  doc.moveTo(MARGIN + 10, MARGIN + 20).lineTo(PAGE_W - MARGIN - 10, MARGIN + 20).strokeColor('#cccccc').lineWidth(0.3).stroke();
  doc.moveTo(MARGIN + 10, PAGE_H - MARGIN - 10).lineTo(PAGE_W - MARGIN - 10, PAGE_H - MARGIN - 10).strokeColor('#cccccc').lineWidth(0.3).stroke();
}

function addHeader(doc, title) {
  doc.fontSize(8).font('Helvetica-Oblique').fillColor('#888888');
  doc.text('The Great Meme Era', MARGIN + 20, MARGIN + 8);
  doc.text(title, PAGE_W - 2*MARGIN - 10, MARGIN + 8, { align: 'right', width: CONTENT_W - 30 });
}

function addPageNumber(doc, num) {
  doc.fontSize(8).font('Helvetica').fillColor('#888888');
  doc.text(String(num), PAGE_W - MARGIN - 30, PAGE_H - MARGIN + 5);
}

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: MARGIN, bottom: MARGIN + 20, left: MARGIN, right: MARGIN },
  info: {
    Title: 'The Great Meme Era: A Study of the Peak of Financial Evolution',
    Author: 'The Meme Book',
    Subject: 'Memecoin History and Culture',
  }
});

const output = fs.createWriteStream('memesbook.pdf');
doc.pipe(output);

// ===== COVER =====
doc.rect(0, 0, PAGE_W, PAGE_H).fill('#0a0a0a');
doc.fillColor('#ffffff').fontSize(32).font('Helvetica-Bold');
doc.text('THE GREAT MEME ERA', PAGE_W / 2, 200, { align: 'center' });
doc.fontSize(16).font('Helvetica-Oblique').fillColor('#aaaaaa');
doc.text('A Study of the Peak of Financial Evolution', PAGE_W / 2, 260, { align: 'center' });
doc.fontSize(10).font('Helvetica').fillColor('#888888');
doc.text('Verified on the Solana Blockchain', PAGE_W / 2, 320, { align: 'center' });
doc.fontSize(8).font('Courier').fillColor('#666666');
doc.text('CA: 9RgUjzFJ7sCRThEmPPLnCJZUwSQpFQvK3P4QN5yTpump', PAGE_W / 2, 345, { align: 'center' });
doc.fontSize(10).font('Helvetica').fillColor('#888888');
doc.text('Minted on Pump.fun', PAGE_W / 2, 370, { align: 'center' });
doc.fontSize(9).font('Helvetica-Oblique').fillColor('#555555');
doc.text('This On-Chain Historical Record', PAGE_W / 2, 410, { align: 'center' });
doc.text('The Meme Book • Anno Domini MMXXVI', PAGE_W / 2, 430, { align: 'center' });

// ===== FOREWORD =====
doc.addPage();
let pageNum = 0;
drawPageBorder(doc);
pageNum++;
addHeader(doc, 'Foreword');
addPageNumber(doc, pageNum);

doc.fontSize(18).font('Helvetica-Bold').fillColor('#000000');
doc.text('Foreword', MARGIN, 80);

doc.fontSize(9).font('Helvetica-Oblique').fillColor('#555555');
doc.text('"I simply cannot think of a scenario in which our memes aren\'t studied in the history books as the peak of financial evolution."', MARGIN, 115, { align: 'center', width: CONTENT_W });
doc.text('-- Pump.fun, The Founding Prophecy', MARGIN, 155, { align: 'center', width: CONTENT_W });

doc.fontSize(10).font('Helvetica').fillColor('#000000');
doc.text('This statement, issued in the early days of the Great Meme Era, now reads as prophecy fulfilled. What follows is an attempt to document, analyse and preserve the artefacts of this unprecedented chapter in human financial history.', MARGIN, 200, { align: 'justify', width: CONTENT_W, lineGap: 4 });
doc.text('The pages within constitute an on-chain historical record -- a testament to the moment when culture and capital merged into a single, immutable ledger entry. This archive is minted on Pump.fun and preserved on Solana. It is, by design, permanent.', MARGIN, 260, { align: 'justify', width: CONTENT_W, lineGap: 4 });

// ===== TABLE OF CONTENTS =====
doc.addPage();
drawPageBorder(doc);
pageNum++;
addHeader(doc, 'Table of Contents');
addPageNumber(doc, pageNum);

doc.fontSize(16).font('Helvetica-Bold').fillColor('#000000');
doc.text('Table of Contents', MARGIN, 80);

let tocY = 120;
CHAPTERS.forEach((ch, i) => {
  doc.fontSize(10).font('Helvetica').fillColor('#000000');
  doc.text(`${String(i + 1).padStart(2, '0')}. ${ch}`, MARGIN + 15, tocY);
  tocY += 18;
});

// ===== CONTENT PAGES =====
let currentMemeIdx = 0;

for (let p = 0; p < 390; p++) {
  doc.addPage();
  pageNum++;
  drawPageBorder(doc);

  const meme = MEMES[currentMemeIdx % MEMES.length];
  const chIdx = Math.floor(p / 20);
  const chapter = CHAPTERS[Math.min(chIdx, CHAPTERS.length - 1)];
  const chNum = Math.min(chIdx + 1, CHAPTERS.length);
  const title = `${chNum}. ${chapter}`;

  addHeader(doc, title);
  addPageNumber(doc, pageNum);

  // Chapter title
  doc.fontSize(14).font('Helvetica-Bold').fillColor('#000000');
  doc.text(title, MARGIN, 80);

  // Meme header
  doc.fontSize(9).font('Helvetica-Oblique').fillColor('#555555');
  doc.text(`Specimen: ${meme.name} ($${meme.symbol}) -- ${meme.year}`, MARGIN, 105);

  // Separator
  doc.moveTo(MARGIN, 118).lineTo(PAGE_W - MARGIN, 118).strokeColor('#cccccc').lineWidth(0.3).stroke();

  // Content
  doc.fontSize(10).font('Helvetica').fillColor('#000000');
  const paras = [
    `${meme.name} ($${meme.symbol}) emerged from the primordial soup of internet culture at a specific moment in time, carried by a wave of collective attention that no individual could have orchestrated. ${meme.desc} The token's creation was not a top-down decision but a bottom-emergent phenomenon -- a spontaneous coordination of belief around a shared symbol.`,
    `The market capitalisation of ${meme.symbol} at its peak represented not merely a price but a statement. It was the market saying: this matters. This is real. This is the future of value. In the context of the ${chapter.toLowerCase()}, ${meme.symbol} serves as a primary artefact for understanding how cultural resonance translates into economic value.`,
    `Sceptics argue that ${meme.symbol} has no utility, no revenue, no intrinsic value. They are correct on all counts. They have also missed the point entirely. The utility of ${meme.symbol} is its existence as a container of shared meaning. Its revenue is a category error. Its value is intrinsic because the collective has declared it so.`,
    `The community that formed around ${meme.symbol} was not a marketing accident but the primary product. The token was merely the excuse for the congregation. Every meme shared, every post liked, every conversation held was a contribution to the token's market capitalisation. In the Meme Economy, attention is the only scarce resource.`,
  ];

  const idx = p % paras.length;
  doc.text(paras[idx], MARGIN, 135, { align: 'justify', width: CONTENT_W, lineGap: 4 });

  const insightY = 290;
  doc.roundedRect(MARGIN, insightY, CONTENT_W, 55, 3).strokeColor('#cccccc').lineWidth(0.5).stroke();
  const insights = [
    `Future historians will study ${meme.symbol} not as a financial anomaly but as a cultural artefact.`,
    `The bonding curve that launched ${meme.symbol} measured collective belief in real time.`,
    `${meme.symbol} teaches us that value is a relationship between minds, not a property of objects.`,
    `What ${meme.symbol} achieved was not unique in form but unique in degree.`,
    `The ${meme.symbol} phenomenon reveals how early 21st century humans understood worth.`,
  ];
  doc.fontSize(9).font('Helvetica-Oblique').fillColor('#555555');
  doc.text(insights[p % insights.length], MARGIN + 15, insightY + 12, { align: 'center', width: CONTENT_W - 30, lineGap: 3 });

  const extraY = 370;
  doc.fontSize(10).font('Helvetica').fillColor('#000000');
  const extras = [
    `The ${chapter.toLowerCase()} provides the framework for understanding why ${meme.symbol} resonated at the scale it did. The conditions were never created; they were recognised. The Meme Economy rewards those who see what is already there.`,
    `In the study of financial evolution, ${meme.symbol} represents a significant adaptation. It is a species of value that thrives in the ecosystem of attention. Its survival depends not on fundamentals but on memetic fitness -- the ability to replicate, mutate, and survive across generations of internet users.`,
    `The ${chapter.toLowerCase()} reveals that ${meme.symbol} is not an isolated phenomenon but part of a broader pattern. Each memecoin is a data point in the emerging science of cultural finance. Together, they tell the story of how humanity learned to price meaning.`,
  ];
  doc.text(extras[p % extras.length], MARGIN, extraY, { align: 'justify', width: CONTENT_W, lineGap: 4 });

  currentMemeIdx++;
}

// ===== FINAL PAGE =====
doc.addPage();
pageNum++;
drawPageBorder(doc);
addHeader(doc, 'Colophon');
addPageNumber(doc, pageNum);

doc.fontSize(18).font('Helvetica-Bold').fillColor('#000000');
doc.text('Colophon', MARGIN, 80);

doc.fontSize(10).font('Helvetica').fillColor('#000000');
doc.text('What will future historians say about the Meme Economy?', MARGIN, 120, { align: 'justify', width: CONTENT_W });
doc.text('They will note that, for a brief period in the early 21st century, humanity discovered that value is not a property of objects but a property of relationships between humans. The blockchain merely made this visible.', MARGIN, 155, { align: 'justify', width: CONTENT_W });
doc.text('They will study the rise and fall of tokens as a window into collective psychology. They will map the migration of memes across communities as anthropologists map the migration of peoples.', MARGIN, 210, { align: 'justify', width: CONTENT_W });
doc.text('The memecoin era will be remembered not for its excesses but for its revelations. The greatest of these revelations was this: in a world of infinite information, the scarcest resource is meaning. And meaning, once recognised, will always find its price.', MARGIN, 265, { align: 'justify', width: CONTENT_W });

doc.fontSize(10).font('Helvetica-Oblique').fillColor('#555555');
doc.text('"The blockchain remembers what history forgets."', MARGIN, 340, { align: 'center', width: CONTENT_W });

doc.fontSize(9).font('Helvetica').fillColor('#666666');
doc.text('Contract Address: 9RgUjzFJ7sCRThEmPPLnCJZUwSQpFQvK3P4QN5yTpump', MARGIN, PAGE_H - 140, { align: 'center', width: CONTENT_W });
doc.text('Minted on Pump.fun  •  Preserved on Solana', MARGIN, PAGE_H - 120, { align: 'center', width: CONTENT_W });
doc.text('The Meme Book  •  Anno Domini MMXXVI', MARGIN, PAGE_H - 100, { align: 'center', width: CONTENT_W });

doc.end();

output.on('finish', () => {
  console.log(`PDF generated: memesbook.pdf (${pageNum} pages)`);
});

output.on('error', (err) => {
  console.error('Error:', err);
});
