
/* =====================================
              TRANSLATIONS
====================================== */

const TRANSLATIONS = {
  // Consent additions
  consent_lbl: { 
    en: "I agree to the collection and use of my feedback for the purpose of improving Manila Zoo's services in accordance with the Data Privacy Act of 2012.", 
    fil: "Sumasang-ayon ako sa pangongolekta at paggamit ng aking feedback para sa layuning mapabuti ang mga serbisyo ng Manila Zoo alinsunod sa Data Privacy Act of 2012." 
  },
  consent_alert: { 
    en: "Please agree to the consent and privacy terms to proceed.", 
    fil: "Mangyaring sumang-ayon sa mga tuntunin ng pahintulot at pagkapribado upang makapagpatuloy." 
  },
  
  // Header
  header_sub:   { en: 'Visitor Feedback',       fil: 'Feedback ng Bisita' },
  view_results: { en: 'View Results',            fil: 'Tingnan ang Resulta' },

  // Start page
  welcome_title: { en: 'Welcome to Manila Zoo',  fil: 'Maligayang Pagdating sa Manila Zoo' },
  welcome_sub:   {
    en:  'Help us improve your experience! This quick 9-step survey takes about 2 minutes to complete.',
    fil: 'Tulungan kami na mapabuti ang inyong karanasan! Ang maikling 9-hakbang na survey na ito ay tatagal ng humigit-kumulang 2 minuto.'
  },
  start_btn:    { en: 'Start Survey →',          fil: 'Simulan ang Survey →' },

  // Shared
  step:         { en: 'Step',                    fil: 'Hakbang' },
  next_btn:     { en: 'Next →',                  fil: 'Susunod →' },
  submit_btn:   { en: 'Submit Feedback ✓',       fil: 'Isumite ang Feedback ✓' },

  // Step 1
  s1_title:     { en: 'Visitor Information',     fil: 'Impormasyon ng Bisita' },
  s1_sub:       { en: 'Tell us a little about yourself. All fields are optional.',
    fil: 'Sabihin sa amin ang kaunti tungkol sa inyong sarili. Opsyonal ang lahat ng patlang.' },
  lbl_name:     { en: 'Name',                    fil: 'Pangalan' },
  lbl_age:      { en: 'Age',                     fil: 'Edad' },
  lbl_vtype:    { en: 'Visitor Type',            fil: 'Uri ng Bisita' },
  lbl_visit:    { en: 'Visit Type',              fil: 'Uri ng Pagbisita' },
  ph_name:      { en: 'e.g. Maria',              fil: 'hal. Maria' },
  vt_local:     { en: 'Local',                   fil: 'Lokal' },
  vt_foreign:   { en: 'Foreign Tourist',         fil: 'Dayuhang Turista' },
  vis_solo:     { en: 'Solo',                    fil: 'Mag-isa' },
  vis_family:   { en: 'With Family',             fil: 'Kasama ang Pamilya' },
  vis_friends:  { en: 'With Friends',            fil: 'Kasama ang mga Kaibigan' },
  vis_school:   { en: 'School Group',            fil: 'Grupo ng Paaralan' },
  vis_partner:  { en: 'With Partner',            fil: 'Kasama ang Kasosyo' },

  // Step 2
  s2_title:     { en: 'Staff & Service',         fil: 'Kawani at Serbisyo' },
  s2_sub:       { en: 'Rate your experience with Manila Zoo staff.', 
    fil: 'I-rate ang inyong karanasan sa mga kawani ng Manila Zoo.' },
  s2_help:      { en: 'Staff Helpfulness',       fil: 'Pagiging Matulungin ng Kawani' },
  s2_friend:    { en: 'Staff Friendliness & Professionalism', fil: 'Pagiging Magiliw at Propesyonal ng Kawani' },
  s2_ticket:    { en: 'Ticket & Entrance Process', fil: 'Proseso ng Tiket at Pasukan' },

  // Step 3
  s3_title:     { en: 'Cleanliness & Sanitation', fil: 'Kalinisan at Sanitasyon' },
  s3_sub:       { en: 'How clean and well-maintained was the zoo?', 
    fil: 'Gaano kalinisan at magandang pagpapanatili ang zoo?' },
  s3_clean:     { en: 'Overall Cleanliness',     fil: 'Pangkalahatang Kalinisan' },
  s3_rest:      { en: 'Restroom Condition',      fil: 'Kondisyon ng Palikuran' },
  s3_concerns:  { en: 'Any specific cleanliness concerns?', 
    fil: 'Mayroon bang partikular na alalahanin sa kalinisan?' },
  cc1:          { en: 'Litter on pathways',      fil: 'Basura sa mga daanan' },
  cc2:          { en: 'Poor waste bin placement', fil: 'Masamang paglalagay ng basurahan' },
  cc3:          { en: 'Unpleasant odors',        fil: 'Hindi kasiya-siyang amoy' },
  cc4:          { en: 'No concerns — it was clean!', fil: 'Walang alalahanin — malinis ito!' },

  // Step 4
  s4_title:     { en: 'Facilities & Infrastructure', fil: 'Pasilidad at Imprastraktura' },
  s4_sub:       { en: "Rate the zoo's physical amenities and structures.", 
    fil: 'I-rate ang mga pisikal na amenidad at istraktura ng zoo.' },
  s4_path:      { en: 'Pathways & Walkways',     fil: 'Mga Landas at Daan' },
  s4_seat:      { en: 'Rest Areas & Seating',    fil: 'Lugar ng Pahinga at Upuan' },
  s4_improve:   { en: 'Which facilities need improvement?', fil: 'Aling mga pasilidad ang kailangang mapabuti?' },
  fc1:          { en: 'Food stalls / canteen',   fil: 'Tindahan ng pagkain / kantina' },
  fc2:          { en: 'Parking area',            fil: 'Lugar ng paradahan' },
  fc3:          { en: 'Signage & maps',          fil: 'Mga palatandaan at mapa' },
  fc4:          { en: 'Shade & shelter',         fil: 'Lilim at silungan' },

  // Step 5
  s5_title:     { en: 'Animal Habitats & Welfare', fil: 'Tirahan at Kapakanan ng mga Hayop' },
  s5_sub:       { en: 'How do you feel about the conditions for the animals?', 
    fil: 'Paano ninyo nararamdaman ang mga kondisyon para sa mga hayop?' },
  s5_enc:       { en: 'Enclosure Space & Quality', fil: 'Espasyo at Kalidad ng Kulungan' },
  s5_view:      { en: 'Animal Visibility & Viewing Experience', fil: 'Kakikitaan ng Hayop at Karanasan sa Panonood' },
  s5_welfare:   { en: 'Overall animal welfare impression', fil: 'Pangkalahatang impresyon sa kapakanan ng hayop' },
  wf1:          { en: '😊 Well cared for',          fil: '😊 Maayos na inalagaan' },
  wf2:          { en: '😐 Adequate',                fil: '😐 Sapat' },
  wf3:          { en: '😟 Needs improvement',       fil: '😟 Kailangan ng pagpapabuti' },

  // Step 6
  s6_title:     { en: 'Accessibility & Inclusivity', fil: 'Aksesibilidad at Inklusibidad' },
  s6_sub:       { en: 'Is Manila Zoo welcoming to everyone?', fil: 'Ang Manila Zoo ba ay maligayang tanggap sa lahat?' },
  s6_nav:       { en: 'Ease of Navigation',      fil: 'Kaginhawaan ng Pag-navigate' },
  s6_avail:     { en: 'Were the following available and accessible?', fil: 'Ang mga sumusunod ba ay available at naa-access?' },
  ac1:          { en: 'Ramps for wheelchairs / strollers', fil: 'Ramp para sa wheelchair / stroller' },
  ac2:          { en: 'Clear directional signage', fil: 'Malinaw na mga palatandaan ng direksyon' },
  ac3:          { en: 'Multilingual information', fil: 'Impormasyon sa maraming wika' },
  ac4:          { en: 'Senior-friendly seating', fil: 'Upuan na pabor sa mga matatanda' },
  s6_with:      { en: 'Did you visit with any of the following?', fil: 'Bumisita ba kayo kasama ang alinman sa mga sumusunod?' },
  vw1:          { en: 'Young children (under 6)', fil: 'Maliliit na bata (wala pang 6)' },
  vw2:          { en: 'Elderly family member',   fil: 'Matandang miyembro ng pamilya' },
  vw3:          { en: 'Person with disability',  fil: 'Taong may kapansanan' },
  vw4:          { en: 'None of the above',       fil: 'Wala sa mga nabanggit' },

  // Step 7
  s7_title:     { en: 'Education & Conservation', fil: 'Edukasyon at Konserbasyon' },
  s7_sub:       { en: 'How well does Manila Zoo inform and engage visitors?', 
    fil: 'Gaano kahusay ang Manila Zoo sa pagbibigay ng impormasyon at pakikipag-ugnayan sa mga bisita?' },
  s7_info:      { en: 'Quality of Animal Information Boards', fil: 'Kalidad ng mga Information Board ng Hayop' },
  s7_edu:       { en: 'Educational Programs & Activities', fil: 'Mga Programang Pang-edukasyon at Aktibidad' },
  s7_aware:     { en: 'Did the visit increase your awareness of wildlife conservation?', 
    fil: 'Nagpataas ba ang pagbisita ng inyong kamalayan sa pangangalaga ng kalikasan?' },
  aw1:          { en: 'Yes, definitely',         fil: 'Oo, tiyak' },
  aw2:          { en: 'Somewhat',                fil: 'Medyo' },
  aw3:          { en: 'Not really',              fil: 'Hindi naman' },

  // Step 8
  s8_title:     { en: 'Pricing & Value',         fil: 'Presyo at Halaga' },
  s8_sub:       { en: 'Was your visit worth the cost?', fil: 'Sulit ba ang inyong pagbisita sa gastos?' },
  s8_price:     { en: 'Admission Price — Value for Money', fil: 'Presyo ng Pasok — Sulit sa Halaga' },
  s8_food:      { en: 'How do you find the food & souvenir prices?', 
    fil: 'Paano ninyo nakita ang mga presyo ng pagkain at souvenir?' },
  fp1:          { en: 'Very affordable',         fil: 'Napaka-abot-kaya' },
  fp2:          { en: 'Reasonable',              fil: 'Katamtaman' },
  fp3:          { en: 'Expensive',               fil: 'Mahal' },
  fp4:          { en: "Didn't purchase",         fil: 'Hindi bumili' },
  s8_nps:       { en: 'How likely are you to recommend Manila Zoo?', 
    fil: 'Gaano ka-malamang na irerekomenda ninyo ang Manila Zoo?' },
  nps_low:      { en: 'Not at all likely',       fil: 'Hindi malamang' },
  nps_high:     { en: 'Extremely likely',        fil: 'Lubhang malamang' },

  // Step 9
  s9_title:     { en: 'Final Comments',          fil: 'Panghuling Komento' },
  s9_sub:       { en: 'Any additional thoughts, suggestions, or highlights from your visit?', 
    fil: 'Mayroon bang karagdagang kaisipan, mungkahi, o highlights mula sa inyong pagbisita?' },
  s9_lbl:       { en: 'Your feedback',           fil: 'Ang inyong feedback' },
  ph_comment:   { en: 'Tell us what you loved, what could be better, or anything else on your mind…', 
    fil: 'Sabihin sa amin ang inyong nagustuhan, kung ano ang maaaring mapabuti, o anumang nasa isip ninyo…' },
  s9_again:     { en: 'Would you visit again?',  fil: 'Bibisita ba kayo muli?' },
  ag1:          { en: 'Yes, definitely!',        fil: 'Oo, tiyak!' },
  ag2:          { en: 'Maybe',                   fil: 'Marahil' },
  ag3:          { en: 'Probably not',            fil: 'Marahil hindi' },

  // Thank you page
  ty_title:     { en: 'Thank you!',                fil: 'Salamat!' },
  ty_sub:       { en: 'Thank you for helping Manila Zoo grow and improve. Your feedback is truly valued.', 
    fil: 'Maraming salamat sa pagtulong sa Manila Zoo na lumago at mapabuti. Ang inyong feedback ay talagang pinahahalagahan.' },
  view_results_btn: { en: 'View Results',          fil: 'Tingnan ang Resulta' },
  answer_again_btn: { en: 'Answer Again',          fil: 'Sumagot Ulit' },
};

let currentLang = 'en'; // starts in English

function applyLanguage(lang) {
  // Loop through every element that has a data-key attribute
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    const translation = TRANSLATIONS[key];

    // Only update if we have a translation for this key
    if (translation && translation[lang]) {
      el.textContent = translation[lang];
    }
  });

  // Handle placeholder attributes separately (inputs/textareas)
  document.querySelectorAll('[data-key-placeholder]').forEach(el => {
    const key = el.getAttribute('data-key-placeholder');
    const translation = TRANSLATIONS[key];
    if (translation && translation[lang]) {
      el.placeholder = translation[lang];
    }
  });

  // Update the toggle button to show what it will switch TO
  if (lang === 'en') {
    document.getElementById('lang-icon').textContent  = '🇺🇸';
    document.getElementById('lang-label').textContent = 'English';
  } else {
    document.getElementById('lang-icon').textContent  = '🇵🇭';
    document.getElementById('lang-label').textContent = 'Filipino';
  }
}

// When the language button is clicked, flip between en and fil
document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = (currentLang === 'en') ? 'fil' : 'en';
  applyLanguage(currentLang);
});

/* =====================================
          TEXT SIZE ADJUSTMENTS
====================================== */

let fontScale = 1.0; // default scale (1 = normal)

function setFontScale(newScale) {
  // Clamp: don't go below 0.8 (too small) or above 1.3 (too big)
  fontScale = Math.min(1.3, Math.max(0.8, newScale));

  // Apply the scale as a CSS variable — all font sizes in the CSS
  // use calc(Xpx * var(--font-scale)) so they all update at once
  document.documentElement.style.setProperty('--font-scale', fontScale);
}

document.getElementById('size-down').addEventListener('click', () => setFontScale(fontScale - 0.1));
document.getElementById('size-up').addEventListener('click',   () => setFontScale(fontScale + 0.1));

/* =====================================
                STATE
====================================== */
  let currentStep = 'start';
  let carouselIndex = 0;
  const TOTAL_STEPS = 9;

/* =====================================
              NAVIGATION
====================================== */
function startWithConsent() {
    const cb = document.getElementById('consent-check');
    
    // If the user hasn't checked the box, show an error and highlight the box
    if (!cb.checked) {
        alert(TRANSLATIONS.consent_alert[currentLang]);
  
        return; // Stops the function from proceeding to Step 1
    }
    
    // If checked, proceed normally
    goToStep(1);
}

function goToStep(step) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // Show target
    const target = step === 'start' ? '.page-start'
                    : step === 'done'  ? '.page-done'
                    : step === 'results' ? '.page-results'
                    : `.page-step${step}`;
    document.querySelector(target).classList.add('active');
    currentStep = step;
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgress() {
    const fill = document.getElementById('progress-fill');
    const counter = document.getElementById('step-counter');
    const stepNum = parseInt(currentStep);
    if (!isNaN(stepNum)) {
        fill.style.width = ((stepNum / TOTAL_STEPS) * 100) + '%';
        counter.textContent = `${stepNum} of ${TOTAL_STEPS}`;
    } else if (currentStep === 'start') {
        fill.style.width = '0%';
        counter.textContent = '';
    } else if (currentStep === 'done') {
        fill.style.width = '100%';
        counter.textContent = '';
    } else if (currentStep === 'results') {
        fill.style.width = '100%';
        counter.textContent = 'Results';
    }
}
 
/* =====================================
            CAROUSEL (IMAGES)
====================================== */
function setCarouselSlide(idx) {
    carouselIndex = idx;
    document.getElementById('carousel-track').style.transform = `translateX(-${idx * 20}%)`;
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === idx);
    });
}

document.querySelectorAll('.carousel-dot').forEach(dot => {
dot.addEventListener('click', () => setCarouselSlide(+dot.dataset.slide));
});

// Auto-advance carousel
setInterval(() => setCarouselSlide((carouselIndex + 1) % 5), 4000);

/* =====================================
               HELPERS
====================================== */
function getRadio(name) {
    const el = document.querySelector(`input[name="${name}"]:checked`);
    return el ? el.value : '—';
}

function getChecked(name) {
    const checked = [...document.querySelectorAll(`input[name="${name}"]:checked`)];
    return checked.length ? checked.map(c => c.value).join(', ') : '—';
}

function starsHTML(val) {
    if (val === '—') return '<span style="color:var(--muted)">—</span>';
    const n = parseInt(val);
    return '★'.repeat(n) + '<span class="star-empty">' + '★'.repeat(5 - n) + '</span>';
}

function formatDate(d) {
    return d.toLocaleDateString('en-PH', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

/* =====================================
                SUBMIT
====================================== */
function submitSurvey() {
    const entry = {
        no: submissions.length + 1,
        date: new Date(),
        name: document.getElementById('v-name').value.trim() || '—',
        age:  document.getElementById('v-age').value || '—',
        vtype: getRadio('vtype'),
        visit: getRadio('visit'),
        // Service
        help:   getRadio('help'),
        friend: getRadio('friend'),
        ticket: getRadio('ticket'),
        // Cleanliness
        clean:  getRadio('clean'),
        rest:   getRadio('rest'),
        clean_concern: getChecked('clean_concern'),
        // Infrastructure
        path: getRadio('path'),
        seat: getRadio('seat'),
        facility: getChecked('facility'),
        // Habitats
        enc:    getRadio('enc'),
        view:   getRadio('view'),
        welfare: getRadio('welfare'),
        // Accessibility
        nav:    getRadio('nav'),
        access: getChecked('access'),
        visitwith: getChecked('visitwith'),
        // Education
        info:  getRadio('info'),
        edu:   getRadio('edu'),
        aware: getRadio('aware'),
        // Pricing
        price:      getRadio('price'),
        food_price: getRadio('food_price'),
        nps:        getRadio('nps'),
        // Comments
        comment: document.getElementById('v-comment').value.trim() || '—',
        again:   getRadio('again'),
    };
    submissions.push(entry);
    goToStep('done');
}

/* =====================================
            ANSWER AGAIN
====================================== */
function answerAgain() {
    // 1. Clear all form inputs natively
    document.getElementById('survey-form').reset();

    // 2. Reset the state variable
    currentStep = 'start';

    // 3. Hide all pages and show the start page
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelector('.page-start').classList.add('active');

    // 4. Reset the progress UI
    updateProgress();

    // 5. Scroll back to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* =====================================
               RESULTS
====================================== */

const submissions = []; // In-memory store for submitted responses

function showResults() {
    renderResults();
    goToStep('results');
}

document.getElementById('view-results-btn').addEventListener('click', showResults);

function tableSection(id, num, title, headers, rows) {
    const noData = submissions.length === 0;
    const bodyRows = noData
        ? `<tr><td colspan="${headers.length}" class="results-empty"><span>📋</span>No submissions yet.</td></tr>`
        : rows.map((r, i) => `<tr>${r}</tr>`).join('');
    return `
        <div class="results-section" id="${id}">
        <div class="results-section-header">
            <div class="results-section-num">${num}</div>
            <div class="results-section-title">${title}</div>
        </div>
        <div class="results-table-wrap">
            <table class="results-table">
            <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
            <tbody>${bodyRows}</tbody>
            </table>
        </div>
        </div>`;
}

function baseRow(e) {
    return `<td>${e.no}</td><td>${e.name}</td><td>${e.age}</td><td>${e.vtype}</td><td>${e.visit}</td><td>${formatDate(e.date)}</td>`;
}
const baseHeaders = ['#', 'Name', 'Age', 'Visitor Type', 'Visit Type', 'Date'];

function renderResults() {
    const S = submissions;

    const sections = [
        tableSection('sec-profile', 1, 'Visitor Profile', baseHeaders,
        S.map(e => baseRow(e))),

        tableSection('sec-service', 2, 'Staff & Service', [...baseHeaders, 'Staff Helpfulness', 'Friendliness', 'Ticket Process'],
        S.map(e => baseRow(e) + `<td><span class="star-display">${starsHTML(e.help)}</span></td><td><span class="star-display">${starsHTML(e.friend)}</span></td><td><span class="star-display">${starsHTML(e.ticket)}</span></td>`)),

        tableSection('sec-clean', 3, 'Cleanliness & Sanitation', [...baseHeaders, 'Overall Cleanliness', 'Restroom', 'Concerns'],
        S.map(e => baseRow(e) + `<td><span class="star-display">${starsHTML(e.clean)}</span></td><td><span class="star-display">${starsHTML(e.rest)}</span></td><td>${e.clean_concern}</td>`)),

        tableSection('sec-infra', 4, 'Facilities & Infrastructure', [...baseHeaders, 'Pathways', 'Rest Areas', 'Needs Improvement'],
        S.map(e => baseRow(e) + `<td><span class="star-display">${starsHTML(e.path)}</span></td><td><span class="star-display">${starsHTML(e.seat)}</span></td><td>${e.facility}</td>`)),

        tableSection('sec-habitat', 5, 'Animal Habitats & Welfare', [...baseHeaders, 'Enclosure Quality', 'Viewing Experience', 'Welfare Impression'],
        S.map(e => baseRow(e) + `<td><span class="star-display">${starsHTML(e.enc)}</span></td><td><span class="star-display">${starsHTML(e.view)}</span></td><td>${e.welfare}</td>`)),

        tableSection('sec-access', 6, 'Accessibility & Inclusivity', [...baseHeaders, 'Navigation Ease', 'Accessible Features', 'Visited With'],
        S.map(e => baseRow(e) + `<td><span class="star-display">${starsHTML(e.nav)}</span></td><td>${e.access}</td><td>${e.visitwith}</td>`)),

        tableSection('sec-edu', 7, 'Education & Conservation', [...baseHeaders, 'Info Boards', 'Edu Programs', 'Conservation Awareness'],
        S.map(e => baseRow(e) + `<td><span class="star-display">${starsHTML(e.info)}</span></td><td><span class="star-display">${starsHTML(e.edu)}</span></td><td>${e.aware}</td>`)),

        tableSection('sec-price', 8, 'Pricing & Value', [...baseHeaders, 'Value for Money', 'Food & Souvenir Prices', 'Recommend (NPS)'],
        S.map(e => baseRow(e) + `<td><span class="star-display">${starsHTML(e.price)}</span></td><td>${e.food_price}</td><td>${e.nps}</td>`)),

        tableSection('sec-comments', 9, 'Final Comments', [...baseHeaders, 'Feedback', 'Visit Again?'],
        S.map(e => baseRow(e) + `<td>${e.comment}</td><td>${e.again}</td>`)),
    ];

    const navLinks = [
        ['sec-profile','Profile'],['sec-service','Service'],['sec-clean','Cleanliness'],
        ['sec-infra','Infrastructure'],['sec-habitat','Habitats'],['sec-access','Accessibility'],
        ['sec-edu','Education'],['sec-price','Pricing'],['sec-comments','Comments']
    ];

    // Puts the navLinks/sections to the HTML
    document.querySelector('.page-results').innerHTML = `
        <div class="results-nav">
        <div class="results-nav-inner">
            ${navLinks.map(([id, label], i) => `<a href="#${id}" class="results-nav-link${i===0?' active':''}" data-target="${id}">${label}</a>`).join('')}
        </div>
        </div>
        <div class="results-wrapper">
        <button type="button" class="results-back" onclick="answerAgain()">Back to Survey</button>
        ${sections.join('')}
        </div>`;

    // Nav link click — smooth scroll + active state
    document.querySelectorAll('.results-nav-link').forEach(link => {
        link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('#' + link.dataset.target)?.scrollIntoView({ behavior: 'smooth' });
        document.querySelectorAll('.results-nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        });
    });

    // Intersection observer to update active nav as user scrolls
    setTimeout(() => {
        const sections = document.querySelectorAll('.results-section');
        const links = document.querySelectorAll('.results-nav-link');
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            links.forEach(l => l.classList.remove('active'));
            const active = [...links].find(l => l.dataset.target === entry.target.id);
            if (active) active.classList.add('active');
            }
        });
        }, { rootMargin: '-30% 0px -60% 0px' });
        sections.forEach(s => observer.observe(s));
    }, 100);
}



/* ── Init ── */
updateProgress();