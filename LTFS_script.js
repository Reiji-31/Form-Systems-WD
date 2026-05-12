/* ══════════════════════════════════════
   LTFS_script.js — Manila Zoo Feedback
══════════════════════════════════════ */


/* ══════════════════════════════════════
             TRANSLATIONS
══════════════════════════════════════ */


const TRANSLATIONS = {
  // Consent
  consent_lbl: {
    en:  "I agree to the collection and use of my feedback for the purpose of improving Manila Zoo's services in accordance with the Data Privacy Act of 2012.",
    fil: "Sumasang-ayon ako sa pangongolekta at paggamit ng aking feedback para sa layuning mapabuti ang mga serbisyo ng Manila Zoo alinsunod sa Data Privacy Act of 2012."
  },
  consent_alert: {
    en:  "Please agree to the consent and privacy terms to proceed.",
    fil: "Mangyaring sumang-ayon sa mga tuntunin ng pahintulot at pagkapribado upang makapagpatuloy."
  },


  // Header
  header_sub:   { en: 'Visitor Feedback',       fil: 'Feedback ng Bisita' },
  view_results: { en: 'View Results',            fil: 'Tingnan ang Resulta' },


  // Start page
  welcome_title: { en: 'Welcome to Manila Zoo',  fil: 'Maligayang Pagdating sa Manila Zoo' },
  welcome_sub: {
    en:  'Help us improve your experience! This quick 9-step survey takes about 2 minutes to complete.',
    fil: 'Tulungan kami na mapabuti ang inyong karanasan! Ang maikling 9-hakbang na survey na ito ay tatagal ng humigit-kumulang 2 minuto.'
  },
  start_btn:    { en: 'Start Survey →',          fil: 'Simulan ang Survey →' },


  // Shared
  step:         { en: 'Step',                    fil: 'Hakbang' },
  next_btn:     { en: 'Next →',                  fil: 'Susunod →' },
  submit_btn:   { en: 'Submit Feedback ✓',       fil: 'Isumite ang Feedback ✓' },


  // Step 1
  s1_title:         { en: 'Visitor Information',     fil: 'Impormasyon ng Bisita' },
  s1_sub:           { en: 'Tell us a little about yourself. All fields are optional.',
                       fil: 'Sabihin sa amin ang kaunti tungkol sa inyong sarili. Opsyonal ang lahat ng patlang.' },
  lbl_fullname:     { en: 'Full Name',               fil: 'Buong Pangalan' },
  ph_fullname:      { en: 'e.g. Maria Santos Reyes', fil: 'hal. Maria Santos Reyes' },
  lbl_age:          { en: 'Age',                     fil: 'Edad' },
  lbl_visit_date:   { en: 'Visit Date',              fil: 'Petsa ng Pagbisita' },
  lbl_address_section: { en: 'Address',              fil: 'Tirahan' },
  lbl_city:         { en: 'City / Province',         fil: 'Lungsod / Lalawigan' },
  lbl_municipality: { en: 'Municipality',            fil: 'Munisipalidad' },
  lbl_barangay:     { en: 'Barangay / Street',       fil: 'Barangay / Kalye' },
  ph_city:          { en: 'e.g. Manila',             fil: 'hal. Maynila' },
  ph_municipality:  { en: 'e.g. Ermita',             fil: 'hal. Ermita' },
  ph_barangay:      { en: 'e.g. Brgy. 663, Adriatico St.', fil: 'hal. Brgy. 663, Adriatico St.' },
  lbl_nationality:  { en: 'Nationality',             fil: 'Nasyonalidad' },
  nat_select:       { en: '— Select —',              fil: '— Pumili —' },
  nat_local:        { en: '🇵🇭 Local (Filipino)',    fil: '🇵🇭 Lokal (Pilipino)' },
  nat_foreign:      { en: '✈️ Foreign Tourist',      fil: '✈️ Dayuhang Turista' },
  lbl_visit:        { en: 'Visit Type',              fil: 'Uri ng Pagbisita' },
  vis_solo:         { en: 'Solo',                    fil: 'Mag-isa' },
  vis_family:       { en: 'With Family',             fil: 'Kasama ang Pamilya' },
  vis_friends:      { en: 'With Friends',            fil: 'Kasama ang mga Kaibigan' },
  vis_school:       { en: 'School Group',            fil: 'Grupo ng Paaralan' },
  vis_partner:      { en: 'With Partner',            fil: 'Kasama ang Kasosyo' },


  // Step 2
  s2_title:   { en: 'Staff & Service',         fil: 'Kawani at Serbisyo' },
  s2_sub:     { en: 'Rate your experience with Manila Zoo staff.',
                 fil: 'I-rate ang inyong karanasan sa mga kawani ng Manila Zoo.' },
  s2_help:    { en: 'Staff Helpfulness',       fil: 'Pagiging Matulungin ng Kawani' },
  s2_friend:  { en: 'Staff Friendliness & Professionalism', fil: 'Pagiging Magiliw at Propesyonal ng Kawani' },
  s2_ticket:  { en: 'Ticket & Entrance Process', fil: 'Proseso ng Tiket at Pasukan' },


  // Step 3
  s3_title:    { en: 'Cleanliness & Sanitation', fil: 'Kalinisan at Sanitasyon' },
  s3_sub:      { en: 'How clean and well-maintained was the zoo?',
                  fil: 'Gaano kalinisan at magandang pagpapanatili ang zoo?' },
  s3_clean:    { en: 'Overall Cleanliness',     fil: 'Pangkalahatang Kalinisan' },
  s3_rest:     { en: 'Restroom Condition',      fil: 'Kondisyon ng Palikuran' },
  s3_concerns: { en: 'Any specific cleanliness concerns?',
                  fil: 'Mayroon bang partikular na alalahanin sa kalinisan?' },
  cc1:         { en: 'Litter on pathways',      fil: 'Basura sa mga daanan' },
  cc2:         { en: 'Poor waste bin placement', fil: 'Masamang paglalagay ng basurahan' },
  cc3:         { en: 'Unpleasant odors',        fil: 'Hindi kasiya-siyang amoy' },
  cc4:         { en: 'No concerns — it was clean!', fil: 'Walang alalahanin — malinis ito!' },


  // Step 4
  s4_title:    { en: 'Facilities & Infrastructure', fil: 'Pasilidad at Imprastraktura' },
  s4_sub:      { en: "Rate the zoo's physical amenities and structures.",
                  fil: 'I-rate ang mga pisikal na amenidad at istraktura ng zoo.' },
  s4_path:     { en: 'Pathways & Walkways',     fil: 'Mga Landas at Daan' },
  s4_seat:     { en: 'Rest Areas & Seating',    fil: 'Lugar ng Pahinga at Upuan' },
  s4_amenities:{ en: 'Which amenities were available?', fil: 'Aling mga amenidad ang available?' },
  am1:         { en: '🚻 Restrooms',            fil: '🚻 Palikuran' },
  am2:         { en: '🅿️ Parking',              fil: '🅿️ Paradahan' },
  am3:         { en: '🧭 Tour Guides',           fil: '🧭 Mga Tour Guide' },
  am4:         { en: '🍴 Food Stalls',           fil: '🍴 Mga Tindahan ng Pagkain' },
  s4_improve:  { en: 'Which facilities need improvement?', fil: 'Aling mga pasilidad ang kailangang mapabuti?' },
  fc1:         { en: 'Food stalls / canteen',   fil: 'Tindahan ng pagkain / kantina' },
  fc2:         { en: 'Parking area',            fil: 'Lugar ng paradahan' },
  fc3:         { en: 'Signage & maps',          fil: 'Mga palatandaan at mapa' },
  fc4:         { en: 'Shade & shelter',         fil: 'Lilim at silungan' },


  // Step 5
  s5_title:   { en: 'Animal Habitats & Welfare', fil: 'Tirahan at Kapakanan ng mga Hayop' },
  s5_sub:     { en: 'How do you feel about the conditions for the animals?',
                 fil: 'Paano ninyo nararamdaman ang mga kondisyon para sa mga hayop?' },
  s5_enc:     { en: 'Enclosure Space & Quality', fil: 'Espasyo at Kalidad ng Kulungan' },
  s5_view:    { en: 'Animal Visibility & Viewing Experience', fil: 'Kakikitaan ng Hayop at Karanasan sa Panonood' },
  s5_welfare: { en: 'Overall animal welfare impression', fil: 'Pangkalahatang impresyon sa kapakanan ng hayop' },
  wf1:        { en: '😊 Well cared for',        fil: '😊 Maayos na inalagaan' },
  wf2:        { en: '😐 Adequate',              fil: '😐 Sapat' },
  wf3:        { en: '😟 Needs improvement',     fil: '😟 Kailangan ng pagpapabuti' },


  // Step 6
  s6_title:  { en: 'Accessibility & Inclusivity', fil: 'Aksesibilidad at Inklusibidad' },
  s6_sub:    { en: 'Is Manila Zoo welcoming to everyone?', fil: 'Ang Manila Zoo ba ay maligayang tanggap sa lahat?' },
  s6_nav:    { en: 'Ease of Navigation',      fil: 'Kaginhawaan ng Pag-navigate' },
  s6_avail:  { en: 'Were the following available and accessible?', fil: 'Ang mga sumusunod ba ay available at naa-access?' },
  ac1:       { en: 'Ramps for wheelchairs / strollers', fil: 'Ramp para sa wheelchair / stroller' },
  ac2:       { en: 'Clear directional signage', fil: 'Malinaw na mga palatandaan ng direksyon' },
  ac3:       { en: 'Multilingual information', fil: 'Impormasyon sa maraming wika' },
  ac4:       { en: 'Senior-friendly seating', fil: 'Upuan na pabor sa mga matatanda' },
  s6_with:   { en: 'Did you visit with any of the following?', fil: 'Bumisita ba kayo kasama ang alinman sa mga sumusunod?' },
  vw_child:  { en: 'Young children (under 6)', fil: 'Maliliit na bata (wala pang 6)' },
  vw_elder:  { en: 'Elderly family member',   fil: 'Matandang miyembro ng pamilya' },
  vw_pwd:    { en: 'Person with disability',  fil: 'Taong may kapansanan' },
  vw_none:   { en: 'None of the above',       fil: 'Wala sa mga nabanggit' },


  // Step 7
  s7_title:  { en: 'Education & Conservation', fil: 'Edukasyon at Konserbasyon' },
  s7_sub:    { en: 'How well does Manila Zoo inform and engage visitors?',
               fil: 'Gaano kahusay ang Manila Zoo sa pagbibigay ng impormasyon at pakikipag-ugnayan sa mga bisita?' },
  s7_info:   { en: 'Quality of Animal Information Boards', fil: 'Kalidad ng mga Information Board ng Hayop' },
  s7_edu:    { en: 'Educational Programs & Activities', fil: 'Mga Programang Pang-edukasyon at Aktibidad' },
  s7_aware:  { en: 'Did the visit increase your awareness of wildlife conservation?',
               fil: 'Nagpataas ba ang pagbisita ng inyong kamalayan sa pangangalaga ng kalikasan?' },
  aw1:       { en: 'Yes, definitely',         fil: 'Oo, tiyak' },
  aw2:       { en: 'Somewhat',                fil: 'Medyo' },
  aw3:       { en: 'Not really',              fil: 'Hindi naman' },


  // Step 8
  s8_title:  { en: 'Pricing & Value',         fil: 'Presyo at Halaga' },
  s8_sub:    { en: 'Was your visit worth the cost?', fil: 'Sulit ba ang inyong pagbisita sa gastos?' },
  s8_price:  { en: 'Admission Price — Value for Money', fil: 'Presyo ng Pasok — Sulit sa Halaga' },
  s8_food:   { en: 'How do you find the food & souvenir prices?',
               fil: 'Paano ninyo nakita ang mga presyo ng pagkain at souvenir?' },
  fp1:       { en: 'Very affordable',         fil: 'Napaka-abot-kaya' },
  fp2:       { en: 'Reasonable',              fil: 'Katamtaman' },
  fp3:       { en: 'Expensive',               fil: 'Mahal' },
  fp4:       { en: "Didn't purchase",         fil: 'Hindi bumili' },
  s8_nps:    { en: 'How likely are you to recommend Manila Zoo?',
               fil: 'Gaano ka-malamang na irerekomenda ninyo ang Manila Zoo?' },
  nps_low:   { en: 'Not at all likely',       fil: 'Hindi malamang' },
  nps_high:  { en: 'Extremely likely',        fil: 'Lubhang malamang' },


  // Step 9
  s9_title:   { en: 'Final Comments',          fil: 'Panghuling Komento' },
  s9_sub:     { en: 'Any additional thoughts, suggestions, or highlights from your visit?',
                fil: 'Mayroon bang karagdagang kaisipan, mungkahi, o highlights mula sa inyong pagbisita?' },
  s9_lbl:     { en: 'Your feedback',           fil: 'Ang inyong feedback' },
  ph_comment: { en: 'Tell us what you loved, what could be better, or anything else on your mind…',
                fil: 'Sabihin sa amin ang inyong nagustuhan, kung ano ang maaaring mapabuti, o anumang nasa isip ninyo…' },
  s9_again:   { en: 'Would you visit again?',  fil: 'Bibisita ba kayo muli?' },
  ag1:        { en: 'Yes, definitely!',        fil: 'Oo, tiyak!' },
  ag2:        { en: 'Maybe',                   fil: 'Marahil' },
  ag3:        { en: 'Probably not',            fil: 'Marahil hindi' },


  // Thank you page
  ty_title:         { en: 'Thank you!',       fil: 'Salamat!' },
  ty_sub:           { en: 'Thank you for helping Manila Zoo grow and improve. Your feedback is truly valued.',
                       fil: 'Maraming salamat sa pagtulong sa Manila Zoo na lumago at mapabuti. Ang inyong feedback ay talagang pinahahalagahan.' },
  view_results_btn: { en: 'View Results',     fil: 'Tingnan ang Resulta' },
  print_results_btn:{ en: '🖨️ Print Results', fil: '🖨️ I-print ang Resulta' },
  answer_again_btn: { en: 'Answer Again',     fil: 'Sumagot Ulit' },
};


let currentLang = 'en';


function applyLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    const translation = TRANSLATIONS[key];
    if (translation && translation[lang]) {
      el.textContent = translation[lang];
    }
  });


  document.querySelectorAll('[data-key-placeholder]').forEach(el => {
    const key = el.getAttribute('data-key-placeholder');
    const translation = TRANSLATIONS[key];
    if (translation && translation[lang]) {
      el.placeholder = translation[lang];
    }
  });


  if (lang === 'en') {
    document.getElementById('lang-icon').textContent  = '🇵🇭';
    document.getElementById('lang-label').textContent = 'Filipino';
  } else {
    document.getElementById('lang-icon').textContent  = '🇺🇸';
    document.getElementById('lang-label').textContent = 'English';
  }
}


document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = (currentLang === 'en') ? 'fil' : 'en';
  applyLanguage(currentLang);
});


/* ══════════════════════════════════════
        Text Size Adjustment
══════════════════════════════════════ */


let fontScale = 1.0;


function setFontScale(newScale) {
  fontScale = Math.min(1.3, Math.max(0.8, newScale));
  document.documentElement.style.setProperty('--font-scale', fontScale);
}


document.getElementById('size-down').addEventListener('click', () => setFontScale(fontScale - 0.1));
document.getElementById('size-up').addEventListener('click',   () => setFontScale(fontScale + 0.1));


/* ══════════════════════════════════════
              STATE
══════════════════════════════════════ */
let currentStep   = 'start';
let carouselIndex = 0;
const TOTAL_STEPS = 9;


/* ══════════════════════════════════════
         VALIDATION — TOAST HELPER
══════════════════════════════════════ */


/** Show a toast error message that auto-dismisses */
function showToast(msg) {
  const old = document.getElementById('validation-toast');
  if (old) old.remove();


  const toast = document.createElement('div');
  toast.id = 'validation-toast';
  toast.setAttribute('role', 'alert');
  toast.textContent = msg;
  Object.assign(toast.style, {
    position:     'fixed',
    bottom:       '90px',
    left:         '50%',
    transform:    'translateX(-50%)',
    background:   '#b91c1c',
    color:        '#fff',
    padding:      '12px 22px',
    borderRadius: '10px',
    fontSize:     'calc(14px * var(--font-scale))',
    fontWeight:   '600',
    boxShadow:    '0 4px 18px rgba(0,0,0,0.25)',
    zIndex:       '99999',
    maxWidth:     '90vw',
    textAlign:    'center',
    animation:    'toastIn 0.25s ease',
  });
  document.body.appendChild(toast);


  if (!document.getElementById('toast-keyframes')) {
    const style = document.createElement('style');
    style.id = 'toast-keyframes';
    style.textContent = `
      @keyframes toastIn  { from { opacity:0; transform:translateX(-50%) translateY(10px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }
      @keyframes toastOut { from { opacity:1; } to { opacity:0; } }
    `;
    document.head.appendChild(style);
  }


  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}


/* ══════════════════════════════════════
     INPUT VALIDATION — per field
══════════════════════════════════════ */


function sanitiseText(inputEl) {
  inputEl.addEventListener('blur', () => {
    inputEl.value = inputEl.value.trim();
  });
  inputEl.addEventListener('input', () => {
    if (/^\d+$/.test(inputEl.value)) {
      inputEl.value = '';
      showToast('Please enter a valid text value — numbers are not accepted here.');
    }
  });
}


function enforceAge() {
  const el = document.getElementById('v-age');
  el.addEventListener('input', () => {
    el.value = el.value.replace(/[^0-9]/g, '');
    const v = parseInt(el.value, 10);
    if (el.value !== '' && (isNaN(v) || v < 1)) {
      el.value = '';
      showToast('Age must be a positive number (1–120).');
    } else if (v > 120) {
      el.value = 120;
      showToast('Please enter a realistic age (1–120).');
    }
  });
  el.addEventListener('blur', () => {
    const v = parseInt(el.value, 10);
    if (!isNaN(v) && (v < 1 || v > 120)) {
      el.value = '';
      showToast('Age must be between 1 and 120.');
    }
  });
  el.addEventListener('keydown', (e) => {
    if (['-', '+', 'e', 'E', '.'].includes(e.key)) e.preventDefault();
  });
}


function enforceVisitDate() {
  const el = document.getElementById('v-visit-date');
  const today = new Date().toISOString().split('T')[0];
  el.setAttribute('max', today);
  el.addEventListener('change', () => {
    if (el.value > today) {
      el.value = today;
      showToast('Visit date cannot be in the future.');
    }
  });
}


function attachTextValidation() {
  ['v-fullname','v-city','v-municipality','v-barangay']
    .forEach(id => {
      const el = document.getElementById(id);
      if (el) sanitiseText(el);
    });
}


/* ══════════════════════════════════════
     STEP VALIDATION — required checks
══════════════════════════════════════ */


function validateStep(step) {
  switch (step) {
    case 1: {
      const nat = document.getElementById('v-nationality').value;
      if (!nat) {
        showToast('Please select your Nationality before continuing.');
        return false;
      }
      const visitType = document.querySelector('input[name="visit"]:checked');
      if (!visitType) {
        showToast('Please select your Visit Type before continuing.');
        return false;
      }
      const ageEl = document.getElementById('v-age');
      if (ageEl.value !== '') {
        const v = parseInt(ageEl.value, 10);
        if (isNaN(v) || v < 1 || v > 120) {
          showToast('Please enter a valid age (1–120), or leave it blank.');
          ageEl.focus();
          return false;
        }
      }
      return true;
    }


    case 2: {
      if (!document.querySelector('input[name="help"]:checked')) {
        showToast('Please rate Staff Helpfulness before continuing.');
        return false;
      }
      if (!document.querySelector('input[name="friend"]:checked')) {
        showToast('Please rate Staff Friendliness & Professionalism before continuing.');
        return false;
      }
      if (!document.querySelector('input[name="ticket"]:checked')) {
        showToast('Please rate the Ticket & Entrance Process before continuing.');
        return false;
      }
      return true;
    }


    case 3: {
      if (!document.querySelector('input[name="clean"]:checked')) {
        showToast('Please rate Overall Cleanliness before continuing.');
        return false;
      }
      if (!document.querySelector('input[name="rest"]:checked')) {
        showToast('Please rate the Restroom Condition before continuing.');
        return false;
      }
      if (!document.querySelector('input[name="clean_concern"]:checked')) {
        showToast('Please select at least one cleanliness concern (or "No concerns") before continuing.');
        return false;
      }
      return true;
    }


    case 4: {
      if (!document.querySelector('input[name="path"]:checked')) {
        showToast('Please rate Pathways & Walkways before continuing.');
        return false;
      }
      if (!document.querySelector('input[name="seat"]:checked')) {
        showToast('Please rate Rest Areas & Seating before continuing.');
        return false;
      }
      if (!document.querySelector('input[name="amenity"]:checked')) {
        showToast('Please select at least one available amenity before continuing.');
        return false;
      }
      if (!document.querySelector('input[name="facility"]:checked')) {
        showToast('Please select at least one facility that needs improvement before continuing.');
        return false;
      }
      return true;
    }


    case 5: {
      if (!document.querySelector('input[name="enc"]:checked')) {
        showToast('Please rate Enclosure Space & Quality before continuing.');
        return false;
      }
      if (!document.querySelector('input[name="view"]:checked')) {
        showToast('Please rate Animal Visibility & Viewing Experience before continuing.');
        return false;
      }
      if (!document.querySelector('input[name="welfare"]:checked')) {
        showToast('Please select your overall animal welfare impression before continuing.');
        return false;
      }
      return true;
    }


    case 6: {
      if (!document.querySelector('input[name="nav"]:checked')) {
        showToast('Please rate Ease of Navigation before continuing.');
        return false;
      }
      if (!document.querySelector('input[name="access"]:checked')) {
        showToast('Please select at least one accessible feature before continuing.');
        return false;
      }
      if (!document.querySelector('input[name="visitwith"]:checked')) {
        showToast('Please indicate who you visited with before continuing.');
        return false;
      }
      return true;
    }


    case 7: {
      if (!document.querySelector('input[name="info"]:checked')) {
        showToast('Please rate the Quality of Animal Information Boards before continuing.');
        return false;
      }
      if (!document.querySelector('input[name="edu"]:checked')) {
        showToast('Please rate Educational Programs & Activities before continuing.');
        return false;
      }
      if (!document.querySelector('input[name="aware"]:checked')) {
        showToast('Please answer the conservation awareness question before continuing.');
        return false;
      }
      return true;
    }


    case 8: {
      if (!document.querySelector('input[name="price"]:checked')) {
        showToast('Please rate Admission Price value before continuing.');
        return false;
      }
      if (!document.querySelector('input[name="food_price"]:checked')) {
        showToast('Please rate Food & Souvenir prices before continuing.');
        return false;
      }
      if (!document.querySelector('input[name="nps"]:checked')) {
        showToast('Please select your likelihood to recommend Manila Zoo before continuing.');
        return false;
      }
      return true;
    }


    case 9: {
      if (!document.querySelector('input[name="again"]:checked')) {
        showToast('Please indicate whether you would visit again before submitting.');
        return false;
      }
      return true;
    }


    default:
      return true;
  }
}


/* ══════════════════════════════════════
             NAVIGATION
══════════════════════════════════════ */


// ── FIX 1: Consent checkbox validation ──
// Checks the consent checkbox and shows a styled toast (not a plain alert)
// before proceeding. The checkbox itself already exists in the HTML.
function startWithConsent() {
  const cb = document.getElementById('consent-check');
  if (!cb.checked) {
    // Highlight the consent row visually so the user notices it
    const container = document.getElementById('consent-container');
    if (container) {
      container.style.outline = '2px solid #b91c1c';
      container.style.borderRadius = '8px';
      container.style.padding = '6px';
      setTimeout(() => {
        container.style.outline = '';
        container.style.padding = '';
      }, 2500);
    }
    showToast(TRANSLATIONS.consent_alert[currentLang]);
    return;
  }
  goToStep(1);
}


function goToStep(step, skipValidation) {
  // Validate the CURRENT step before advancing
  if (!skipValidation && typeof currentStep === 'number' && step > currentStep) {
    if (!validateStep(currentStep)) return;
  }


  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = step === 'start'   ? '.page-start'
               : step === 'done'    ? '.page-done'
               : step === 'results' ? '.page-results'
               : `.page-step${step}`;
  document.querySelector(target).classList.add('active');
  currentStep = step;
  updateProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


function updateProgress() {
  const fill    = document.getElementById('progress-fill');
  const counter = document.getElementById('step-counter');
  const stepNum = parseInt(currentStep);
  if (!isNaN(stepNum)) {
    fill.style.width   = ((stepNum / TOTAL_STEPS) * 100) + '%';
    counter.textContent = `${stepNum} of ${TOTAL_STEPS}`;
  } else if (currentStep === 'start') {
    fill.style.width   = '0%';
    counter.textContent = '';
  } else if (currentStep === 'done') {
    fill.style.width   = '100%';
    counter.textContent = '';
  } else if (currentStep === 'results') {
    fill.style.width   = '100%';
    counter.textContent = 'Results';
  }
}


/* ══════════════════════════════════════
               CAROUSEL
══════════════════════════════════════ */
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


setInterval(() => setCarouselSlide((carouselIndex + 1) % 5), 4000);


/* ══════════════════════════════════════
                HELPERS
══════════════════════════════════════ */
function getVal(id) {
  const el = document.getElementById(id);
  return (el && el.value.trim()) ? el.value.trim() : '—';
}


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
  return d.toLocaleDateString('en-PH', {
    year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
}


/* ══════════════════════════════════════
                SUBMIT
══════════════════════════════════════ */
function submitSurvey() {
  if (!validateStep(9)) return;


  const fullName = getVal('v-fullname');


  const city         = getVal('v-city');
  const municipality = getVal('v-municipality');
  const barangay     = getVal('v-barangay');
  const addressParts = [barangay, municipality, city].filter(v => v !== '—');
  const fullAddress  = addressParts.length ? addressParts.join(', ') : '—';


  const entry = {
    no:          submissions.length + 1,
    date:        new Date(),
    fullName,
    age:         getVal('v-age'),
    visitDate:   getVal('v-visit-date'),
    nationality: getVal('v-nationality'),
    city, municipality, barangay, fullAddress,
    visit:       getRadio('visit'),
    help:        getRadio('help'),
    friend:      getRadio('friend'),
    ticket:      getRadio('ticket'),
    clean:       getRadio('clean'),
    rest:        getRadio('rest'),
    clean_concern: getChecked('clean_concern'),
    path:        getRadio('path'),
    seat:        getRadio('seat'),
    amenity:     getChecked('amenity'),
    facility:    getChecked('facility'),
    enc:         getRadio('enc'),
    view:        getRadio('view'),
    welfare:     getRadio('welfare'),
    nav:         getRadio('nav'),
    access:      getChecked('access'),
    visitwith:   getChecked('visitwith'),
    info:        getRadio('info'),
    edu:         getRadio('edu'),
    aware:       getRadio('aware'),
    price:       getRadio('price'),
    food_price:  getRadio('food_price'),
    nps:         getRadio('nps'),
    comment:     getVal('v-comment'),
    again:       getRadio('again'),
  };


  submissions.push(entry);
  goToStep('done', true);
}


/* ══════════════════════════════════════
           PRINT RESULTS
══════════════════════════════════════ */
function printResults() {
  renderResults();
  setTimeout(() => window.print(), 150);
}


/* ══════════════════════════════════════
             ANSWER AGAIN
══════════════════════════════════════ */
function answerAgain() {
  document.getElementById('survey-form').reset();
  currentStep = 'start';
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelector('.page-start').classList.add('active');
  updateProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* ══════════════════════════════════════
          BACK TO START PAGE
   ── FIX 2: Always returns to the start
   page, whether coming from the header
   "View Results" button or from the
   thank-you page after submitting.
══════════════════════════════════════ */
function backFromResults() {
  // Always go to the start page so the user can take the survey again.
  // The form is NOT reset here — if they want a fresh form they press
  // "Answer Again" on the thank-you page.
  goToStep('start', true);
}


/* ══════════════════════════════════════
               RESULTS
══════════════════════════════════════ */
const submissions = [];


function showResults() {
  renderResults();
  goToStep('results', true);
}


document.getElementById('view-results-btn').addEventListener('click', showResults);


function tableSection(id, num, title, headers, rows) {
  const noData   = submissions.length === 0;
  const bodyRows = noData
    ? `<tr><td colspan="${headers.length}" class="results-empty"><span>📋</span>No submissions yet.</td></tr>`
    : rows.map(r => `<tr>${r}</tr>`).join('');
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
  return `<td>${e.no}</td>
          <td>${e.fullName}</td>
          <td>${e.age}</td>
          <td>${e.nationality}</td>
          <td>${e.visit}</td>
          <td>${e.visitDate}</td>
          <td>${formatDate(e.date)}</td>`;
}


const baseHeaders = ['#', 'Full Name', 'Age', 'Nationality', 'Visit Type', 'Visit Date', 'Submitted'];


function renderResults() {
  const S = submissions;


  const sections = [
    tableSection('sec-profile', 1, 'Visitor Profile',
      [...baseHeaders, 'Address'],
      S.map(e => baseRow(e) + `<td>${e.fullAddress}</td>`)),


    tableSection('sec-service', 2, 'Staff & Service',
      [...baseHeaders, 'Staff Helpfulness', 'Friendliness', 'Ticket Process'],
      S.map(e => baseRow(e) +
        `<td><span class="star-display">${starsHTML(e.help)}</span></td>` +
        `<td><span class="star-display">${starsHTML(e.friend)}</span></td>` +
        `<td><span class="star-display">${starsHTML(e.ticket)}</span></td>`)),


    tableSection('sec-clean', 3, 'Cleanliness & Sanitation',
      [...baseHeaders, 'Overall Cleanliness', 'Restroom', 'Concerns'],
      S.map(e => baseRow(e) +
        `<td><span class="star-display">${starsHTML(e.clean)}</span></td>` +
        `<td><span class="star-display">${starsHTML(e.rest)}</span></td>` +
        `<td>${e.clean_concern}</td>`)),


    tableSection('sec-infra', 4, 'Facilities & Infrastructure',
      [...baseHeaders, 'Pathways', 'Rest Areas', 'Amenities Available', 'Needs Improvement'],
      S.map(e => baseRow(e) +
        `<td><span class="star-display">${starsHTML(e.path)}</span></td>` +
        `<td><span class="star-display">${starsHTML(e.seat)}</span></td>` +
        `<td>${e.amenity}</td>` +
        `<td>${e.facility}</td>`)),


    tableSection('sec-habitat', 5, 'Animal Habitats & Welfare',
      [...baseHeaders, 'Enclosure Quality', 'Viewing Experience', 'Welfare Impression'],
      S.map(e => baseRow(e) +
        `<td><span class="star-display">${starsHTML(e.enc)}</span></td>` +
        `<td><span class="star-display">${starsHTML(e.view)}</span></td>` +
        `<td>${e.welfare}</td>`)),


    tableSection('sec-access', 6, 'Accessibility & Inclusivity',
      [...baseHeaders, 'Navigation Ease', 'Accessible Features', 'Visited With'],
      S.map(e => baseRow(e) +
        `<td><span class="star-display">${starsHTML(e.nav)}</span></td>` +
        `<td>${e.access}</td>` +
        `<td>${e.visitwith}</td>`)),


    tableSection('sec-edu', 7, 'Education & Conservation',
      [...baseHeaders, 'Info Boards', 'Edu Programs', 'Conservation Awareness'],
      S.map(e => baseRow(e) +
        `<td><span class="star-display">${starsHTML(e.info)}</span></td>` +
        `<td><span class="star-display">${starsHTML(e.edu)}</span></td>` +
        `<td>${e.aware}</td>`)),


    tableSection('sec-price', 8, 'Pricing & Value',
      [...baseHeaders, 'Value for Money', 'Food & Souvenir Prices', 'Recommend (NPS)'],
      S.map(e => baseRow(e) +
        `<td><span class="star-display">${starsHTML(e.price)}</span></td>` +
        `<td>${e.food_price}</td>` +
        `<td>${e.nps}</td>`)),


    tableSection('sec-comments', 9, 'Final Comments',
      [...baseHeaders, 'Feedback', 'Visit Again?'],
      S.map(e => baseRow(e) +
        `<td>${e.comment}</td>` +
        `<td>${e.again}</td>`)),
  ];


  const navLinks = [
    ['sec-profile',  'Profile'],
    ['sec-service',  'Service'],
    ['sec-clean',    'Cleanliness'],
    ['sec-infra',    'Infrastructure'],
    ['sec-habitat',  'Habitats'],
    ['sec-access',   'Accessibility'],
    ['sec-edu',      'Education'],
    ['sec-price',    'Pricing'],
    ['sec-comments', 'Comments'],
  ];


  document.querySelector('.page-results').innerHTML = `
    <div class="results-nav">
      <div class="results-nav-inner">
        ${navLinks.map(([id, label], i) =>
          `<a href="#${id}" class="results-nav-link${i === 0 ? ' active' : ''}" data-target="${id}">${label}</a>`
        ).join('')}
      </div>
    </div>
    <div class="results-wrapper">
      <div class="results-actions">
        <button type="button" class="results-back" onclick="backFromResults()">Back to Start</button>
        <button type="button" class="results-print-btn" onclick="printResults()">🖨️ Print Results</button>
      </div>
      ${sections.join('')}
    </div>`;


  document.querySelectorAll('.results-nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector('#' + link.dataset.target)?.scrollIntoView({ behavior: 'smooth' });
      document.querySelectorAll('.results-nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });


  setTimeout(() => {
    const sectionEls = document.querySelectorAll('.results-section');
    const links      = document.querySelectorAll('.results-nav-link');
    const observer   = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          const active = [...links].find(l => l.dataset.target === entry.target.id);
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    sectionEls.forEach(s => observer.observe(s));
  }, 100);
}


/* ══════════════════════════════════════
                INIT
══════════════════════════════════════ */
attachTextValidation();
enforceAge();
enforceVisitDate();
updateProgress();



