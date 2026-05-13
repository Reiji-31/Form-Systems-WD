/* =====================================
              TRANSLATIONS
====================================== */




const translations = {
    en: {
        // General / Nav / Buttons
        req: "(Required)",
        nav_consent: "Consent", nav_profile: "Profile", nav_vax: "Vaccination", nav_symptoms: "Symptoms",
        nav_conditions: "Chronic Conditions", nav_other: "Other", nav_mental: "Mental Health", nav_submit: "Submit",
        btn_next: "Next", btn_back: "Back", btn_review: "Review & Submit", btn_confirm: "Confirm & Submit",
        btn_view_db: "View Results Database", btn_answer_again: "Answer Another Form", btn_back_form: "Back to Form",
       
        // Consent Card
        consent_header: "Consent & Privacy",
        consent_text: "This health monitoring form collects personal and medical information strictly for barangay health purposes. Your data will be kept confidential and used only by authorized Barangay Zone 63–64 health workers.",
        consent_check: "I have read and understood the privacy notice, and I give my consent to collect and process my health information.",




        // Step 1: Profile
        s1_header: "Step 1: Resident Profile",
        lbl_form_for: "Who is this form for?", opt_myself: "For myself", opt_someone: "For someone else",
        lbl_rel: "If for someone else, specify relationship",
        opt_guardian: "Guardian", opt_parent: "Parent", opt_child: "Child", opt_sibling: "Sibling", opt_spouse: "Spouse", opt_relative: "Relative", opt_others: "Other",
        lbl_rname: "Name of the Respondent (If for someone else)",
        r_name: "Name of respondent",
        lbl_name: "Full Name", ph_name: "Enter full name",
        lbl_age: "Age", ph_age: "Enter age",
        lbl_sex: "Sex", opt_male: "Male", opt_female: "Female",
        lbl_addr: "Address", ph_addr: "Enter address",
        lbl_contact: "Contact Number", ph_contact: "Enter contact number",
        opt_cellphone: "Cellphone", opt_telephone: "Telephone",
        lbl_civil: "Civil Status", opt_single: "Single", opt_married: "Married", opt_widowed: "Widowed", opt_separated: "Separated",


        resident_details: "Resident's Detail",
        address_details: "Address Details",
        present_address: "Present Address",




        // Step 2: Vax
        s2_header: "Step 2: Vaccination Records",
        lbl_covid: "COVID-19 Vaccination Status", opt_vax: "Vaccinated", opt_unvax: "Unvaccinated",
        lbl_annual_vax: "Received annual vaccines in the last 12 months? (Select all that apply)",
        opt_flu: "Flu (Influenza)", opt_pneumonia: "Pneumonia", opt_none: "None",
        lbl_vaxcard: "Physical VaxCard or VaxCert available?", opt_vaxcard: "VaxCard", opt_vaxcert: "VaxCert",
        lbl_upload_vax: "Upload VaxCard / VaxCert (if available)",




        // Step 3: Symptoms
        s3_header: "Step 3: Common Health Symptoms",
        lbl_symptoms: "In the past 14 days, have you experienced any of these symptoms? (Select all that apply)",
        opt_fever: "Fever / Flu", opt_cough: "Cough", opt_loss_smell: "Loss of Smell or Taste", opt_fatigue: "Fatigue",
        opt_headache: "Severe Headache", opt_covid_like: "COVID-like Symptoms", opt_rashes: "Rashes", opt_diarrhea: "Diarrhea",
        ph_others: "If others, please specify",
        lbl_duration: "If checked, how long have these symptoms been present?",
        opt_1_3: "1-3 days", opt_4_7: "4-7 days", opt_more_1_week: "More than a week",
        lbl_meds: "Have you taken any medication for these symptoms?", opt_yes: "Yes", opt_no: "No",
        lbl_meds_taken: "If yes, what medication did you take?", ph_meds: "Enter medication name(s)",
        lbl_household_size: "How many people currently live in your home?", ph_number: "Enter number",
        lbl_household_sick: "Are any other members of your household currently experiencing illness or severe symptoms?",
        opt_no_healthy: "No, everyone is healthy",
        lbl_sick_details: "If yes, please specify their symptoms:", ph_symptoms: "Enter symptoms",




        // Step 4: Chronic
        s4_header: "Step 4: Chronic Conditions & Maintenance",
        lbl_chronic: "Are you currently diagnosed with any of the following chronic conditions? (Select all that apply)",
        opt_hyper: "Hypertension (High Blood Pressure)", opt_diabetes: "Diabetes (High Blood Sugar)", opt_asthma: "Asthma / Respiratory Disease",
        opt_heart: "Heart Disease", opt_tb: "Tuberculosis (TB)",
        lbl_maintenance: "If diagnosed, are you currently taking maintenance medication regularly?",
        opt_supply: "Yes, I have supply", opt_running_out: "Yes, but I'm running out", opt_stopped: "No, I stopped taking",




        // Step 5: Other Conditions
        s5_header: "Step 5: Other Conditions", s5_header_small: "(Only if Applicable)",
        lbl_maternal: "Maternal Health Care", lbl_maternal_small: "(For females ages 15–49)",
        lbl_preg: "Are you currently pregnant, or have you given birth in the last 6 months?",
        opt_preg_now: "Yes, currently pregnant", opt_preg_recent: "Yes, recently gave birth",
        lbl_prenatal: "If pregnant, have you been attending regular prenatal check-ups at the health center?",
        opt_reg: "Yes, regularly", opt_missed: "Yes, missed a few", opt_not_yet: "No, I haven't gone yet",
        lbl_danger: "Did you experience any danger signs recently (e.g., severe bleeding, extreme swelling, severe headache)?",
        lbl_geriatric: "Geriatric Care", lbl_geriatric_small: "(For senior citizens, ages 60 and above)",
        lbl_assist: "Do you require physical assistance with daily activities (e.g., bathing, eating, walking)?",
        opt_indep: "Fully independent", opt_some_assist: "Need some assistance", opt_dependent: "Fully dependent / Bedridden",
        lbl_age_diff: "Are you experiencing any of the following age-related difficulties? (Select all that apply)",
        opt_joint: "Severe joint pain / Arthritis", opt_vision: "Vision loss / Cataracts", opt_hearing: "Hearing Difficulty", opt_memory: "Memory loss / Confusion",
        lbl_senior_id: "Do you have an active Senior Citizen ID for medicine discounts?",
        opt_need_assist_id: "No, need assistance applying", opt_lost_id: "Lost my ID",




        // Step 6: Mental
        s6_header: "Step 6: Mental Health & Wellbeing", s6_header_small: "(Optional)",
        lbl_mental_diag: "Has a doctor or psychiatrist formally diagnosed you with a mental health or neurological condition?",
        opt_prefer_not: "Prefer not to answer",
        lbl_mental_med: "If yes, are you currently taking prescribed maintenance medication for this condition?",
        opt_enough: "Yes, and I have enough supply", opt_need_refill: "Yes, but I need assistance getting refills",
        lbl_psych: "Would you like discreet psychological support?",
        opt_contact_me: "Yes, please contact me", opt_im_okay: "No, I am okay",




        // Step 7: Submit
        s7_header: "Step 7: Submit",
        lbl_notes: "Additional Health Notes", ph_notes: "Enter any additional health information or concerns...",
        lbl_emerg_name: "Emergency Contact Person", ph_emerg_name: "Enter emergency contact name",
        lbl_emerg_num: "Emergency Contact Number", ph_emerg_num: "Enter emergency contact number",
        lbl_confirm: "I confirm that all information provided in this form is true and accurate to the best of my knowledge.",




        // Summary & Success Screens
        summary_header: "Summary of Your Answers", summary_desc: "Please review your responses below before final submission.",
        th_section: "Section", th_question: "Question", th_answer: "Answer",
        success_header: "Submission Successful", success_h2: "Thank you!", success_p: "Your health monitoring data has been securely recorded."
    },




    fil: {
        // General / Nav / Buttons
        req: "(Kailangan)",
        nav_consent: "Pahintulot", nav_profile: "Profile", nav_vax: "Bakuna", nav_symptoms: "Sintomas",
        nav_conditions: "Kronikong Kondisyon", nav_other: "Iba pa", nav_mental: "Kalusugang Pangkaisipan", nav_submit: "Isumite",
        btn_next: "Susunod", btn_back: "Bumalik", btn_review: "Suriin at Isumite", btn_confirm: "Kumpirmahin at Isumite",
        btn_view_db: "Tingnan ang Database", btn_answer_again: "Sumagot ng Panibagong Form", btn_back_form: "Bumalik sa Form",




        // Consent Card
        consent_header: "Pahintulot at Pagkapribado",
        consent_text: "Ang form na ito ay nangongolekta ng personal at medikal na impormasyon para lamang sa mga layuning pangkalusugan ng barangay. Ang iyong datos ay pananatilihing kumpidensyal at gagamitin lamang ng mga awtorisadong health workers ng Barangay Zone 63-64.",
        consent_check: "Nabasa at naunawaan ko ang abiso sa pagkapribado, at nagbibigay ako ng pahintulot na kolektahin at iproseso ang aking impormasyong pangkalusugan.",




        // Step 1: Profile
        s1_header: "Hakbang 1: Profile ng Residente",
        lbl_form_for: "Para kanino ang form na ito?", opt_myself: "Para sa sarili ko", opt_someone: "Para sa iba",
        lbl_rel: "Kung para sa iba, tukuyin ang relasyon",
        opt_guardian: "Tagapag-alaga", opt_parent: "Magulang", opt_child: "Anak", opt_sibling: "Kapatid", opt_spouse: "Asawa", opt_relative: "Kamag-anak", opt_others: "Iba pa",
        lbl_rname: 'Pangalan ng Sumasagot (Kung pinili ay "Para sa iba")',
        r_name: "Ilagay ang pangalan ng sumasagot",
        lbl_name: "Buong Pangalan", ph_name: "Ilagay ang buong pangalan",
        lbl_age: "Edad", ph_age: "Ilagay ang edad",
        lbl_sex: "Kasarian", opt_male: "Lalaki", opt_female: "Babae",
        lbl_addr: "Address", ph_addr: "Ilagay ang address",
        lbl_contact: "Numero ng Telepono", ph_contact: "Ilagay ang numero",
        opt_cellphone: "Numero ng cellphone", opt_telephone: "Numero ng landline",
        lbl_civil: "Katayuang Sibil", opt_single: "Walang asawa", opt_married: "May asawa", opt_widowed: "Balo", opt_separated: "Hiwalay",


        resident_details: "Detalye ng Residente",
        address_details: "Detalye ng Tirahan",
        present_address: "Kasalukuyang Tirahan",


        // Step 2: Vax
        s2_header: "Hakbang 2: Rekord ng Bakuna",
        lbl_covid: "Katayuan ng Bakuna sa COVID-19", opt_vax: "Bakunado", opt_unvax: "Hindi Bakunado",
        lbl_annual_vax: "Nakatanggap ba ng taunang bakuna sa nakalipas na 12 buwan? (Piliin lahat ng naaangkop)",
        opt_flu: "Flu (Trangkaso)", opt_pneumonia: "Pneumonia (Pulmonya)", opt_none: "Wala",
        lbl_vaxcard: "May pisikal na VaxCard o VaxCert?", opt_vaxcard: "VaxCard", opt_vaxcert: "VaxCert",
        lbl_upload_vax: "I-upload ang VaxCard / VaxCert (kung mayroon)",




        // Step 3: Symptoms
        s3_header: "Hakbang 3: Karaniwang Sintomas",
        lbl_symptoms: "Sa nakalipas na 14 na araw, nakaranas ka ba ng alinman sa mga sintomas na ito? (Piliin lahat ng naaangkop)",
        opt_fever: "Lagnat / Trangkaso", opt_cough: "Ubo", opt_loss_smell: "Kawalan ng Pang-amoy/Panlasa", opt_fatigue: "Labis na Pagkapagod",
        opt_headache: "Matinding Sakit ng Ulo", opt_covid_like: "Mga Sintomas tulad ng COVID", opt_rashes: "Rashes / Pangangati", opt_diarrhea: "Pagtatae",
        ph_others: "Kung iba pa, mangyaring tukuyin",
        lbl_duration: "Kung may tsek, gaano katagal na ang mga sintomas na ito?",
        opt_1_3: "1-3 araw", opt_4_7: "4-7 araw", opt_more_1_week: "Higit sa isang linggo",
        lbl_meds: "Uminom ka ba ng anumang gamot para sa mga sintomas na ito?", opt_yes: "Oo", opt_no: "Hindi",
        lbl_meds_taken: "Kung oo, anong gamot ang ininom mo?", ph_meds: "Ilagay ang pangalan ng gamot",
        lbl_household_size: "Ilang tao ang nakatira sa iyong bahay?", ph_number: "Ilagay ang bilang",
        lbl_household_sick: "Mayroon bang ibang miyembro sa bahay ang nakakaranas ng sakit o malalang sintomas?",
        opt_no_healthy: "Hindi, malusog ang lahat",
        lbl_sick_details: "Kung oo, tukuyin ang kanilang sintomas:", ph_symptoms: "Ilagay ang mga sintomas",




        // Step 4: Chronic
        s4_header: "Hakbang 4: Malalang Kondisyon",
        lbl_chronic: "Ikaw ba ay na-diagnose ng alinman sa mga sumusunod na malalang kondisyon? (Piliin lahat ng naaangkop)",
        opt_hyper: "Hypertension (Mataas na Presyon)", opt_diabetes: "Diabetes (Mataas na Asukal)", opt_asthma: "Hika / Sakit sa Palahingahan",
        opt_heart: "Sakit sa Puso", opt_tb: "Tuberculosis (TB)",
        lbl_maintenance: "Kung na-diagnose, umiinom ka ba ng maintenance na gamot nang regular?",
        opt_supply: "Oo, may suplay ako", opt_running_out: "Oo, pero nauubusan na", opt_stopped: "Hindi, itinigil ko na",




        // Step 5: Other Conditions
        s5_header: "Hakbang 5: Iba pang Kondisyon", s5_header_small: "(Kung Naaangkop Lamang)",
        lbl_maternal: "Pangangalaga sa Ina", lbl_maternal_small: "(Para sa mga babaeng edad 15-49)",
        lbl_preg: "Kasalukuyan ka bang buntis, o nanganak sa nakalipas na 6 na buwan?",
        opt_preg_now: "Oo, kasalukuyang buntis", opt_preg_recent: "Oo, kailan lang nanganak",
        lbl_prenatal: "Kung buntis, dumadalo ka ba sa regular na prenatal check-up sa health center?",
        opt_reg: "Oo, nang regular", opt_missed: "Oo, pero naka-miss ng ilan", opt_not_yet: "Hindi, hindi pa ako nakapunta",
        lbl_danger: "Nakaranas ka ba ng anumang panganib kamakailan (hal., matinding pagdurugo, matinding sakit ng ulo)?",
        lbl_geriatric: "Pangangalaga sa Matatanda", lbl_geriatric_small: "(Para sa mga edad 60 pataas)",
        lbl_assist: "Kailangan mo ba ng pisikal na tulong sa mga pang-araw-araw na gawain (hal., pagligo, pagkain, paglalakad)?",
        opt_indep: "Kaya ang sarili", opt_some_assist: "Kailangan ng kaunting tulong", opt_dependent: "Umaasa sa iba / Nakaratay",
        lbl_age_diff: "Nakakaranas ka ba ng alinman sa mga sumusunod na paghihirap? (Piliin lahat ng naaangkop)",
        opt_joint: "Matinding pananakit ng kasukasuan", opt_vision: "Malabong paningin / Katarata", opt_hearing: "Hirap sa pandinig", opt_memory: "Pagkalimot / Pagkalito",
        lbl_senior_id: "Mayroon ka bang aktibong Senior Citizen ID para sa diskwento sa gamot?",
        opt_need_assist_id: "Hindi, kailangan ng tulong sa pag-apply", opt_lost_id: "Nawala ang aking ID",




        // Step 6: Mental
        s6_header: "Hakbang 6: Kalusugang Pangkaisipan", s6_header_small: "(Opsyonal)",
        lbl_mental_diag: "Pormal ka bang na-diagnose ng doktor ng kondisyon sa kalusugang pangkaisipan o neurological?",
        opt_prefer_not: "Mas pinipiling huwag sagutin",
        lbl_mental_med: "Kung oo, umiinom ka ba ng iniresetang maintenance na gamot para dito?",
        opt_enough: "Oo, at may sapat akong suplay", opt_need_refill: "Oo, pero kailangan ng tulong para kumuha ng refill",
        lbl_psych: "Gusto mo ba ng patagong sikolohikal na suporta?",
        opt_contact_me: "Oo, mangyaring kontakin ako", opt_im_okay: "Hindi, ayos lang ako",




        // Step 7: Submit
        s7_header: "Hakbang 7: Isumite",
        lbl_notes: "Karagdagang Tala sa Kalusugan", ph_notes: "Ilagay ang anumang karagdagang impormasyon o alalahanin...",
        lbl_emerg_name: "Taong Kokontakin sa Oras ng Emergency", ph_emerg_name: "Ilagay ang pangalan",
        lbl_emerg_num: "Numero ng Kokontakin sa Oras ng Emergency", ph_emerg_num: "Ilagay ang numero",
        lbl_confirm: "Kinukumpirma ko na ang lahat ng impormasyong ibinigay ko ay totoo at tumpak sa abot ng aking kaalaman.",




        // Summary & Success Screens
        summary_header: "Buod ng Iyong mga Sagot", summary_desc: "Mangyaring suriin ang iyong mga sagot sa ibaba bago ang pinal na pagsusumite.",
        th_section: "Seksyon", th_question: "Tanong", th_answer: "Sagot",
        success_header: "Matagumpay na Naisumite", success_h2: "Salamat!", success_p: "Ligtas na naitala ang iyong datos sa pagsubaybay sa kalusugan."
    }
};




// Function to switch language
function changeLanguage(langCode) {
    const elements = document.querySelectorAll('[data-i18n]');
   
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
       
        if (translations[langCode] && translations[langCode][key]) {
            // If the element is an input or textarea with a placeholder, translate the placeholder
            if (el.hasAttribute('placeholder')) {
                el.setAttribute('placeholder', translations[langCode][key]);
            } else {
                // Otherwise, translate the normal text
                el.innerText = translations[langCode][key];
            }
        }
    });
}




// Attach listener to the language dropdown
document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langToggle');


    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }
});




/* =====================================
       TOGGLE SETTINGS WIDGET
====================================== */
function toggleControls() {
    const controls = document.getElementById('floatingControls');
    const icon = document.getElementById('toggleIcon');
   
    // Toggle the 'collapsed' class on and off
    controls.classList.toggle('collapsed');
   
    // Change the icon based on whether it is collapsed or not
    if (controls.classList.contains('collapsed')) {
        icon.innerHTML = '&#43;'; // Plus sign
    } else {
        icon.innerHTML = '&minus;'; // Minus sign
    }
}




/* =====================================
          TEXT SIZE ADJUSTMENTS
====================================== */
let baseFontSize = 16;
function changeTextSize(stepChange) {
    baseFontSize += (stepChange * 2); // Increases/decreases by 2px
    if(baseFontSize < 12) baseFontSize = 12; // Min size limit
    if(baseFontSize > 26) baseFontSize = 26; // Max size limit
    document.body.style.fontSize = baseFontSize + 'px';
}




/* =====================================
         NAVIGATION & VALIDATION
====================================== */
let currentStep = 0;
function getCards() {
    return document.querySelectorAll('#healthForm .card');
}


function showStep(index) {
    const formCards = document.querySelectorAll('#healthForm .card');
    const navSteps = document.querySelectorAll('.progress-nav .step');


    formCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) card.classList.add('active');
    });


    navSteps.forEach((step, i) => {
        step.classList.remove('active');
        if (i === index) step.classList.add('active');
    });


    currentStep = index;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}




// Checks required Checkboxes
function requireCheckboxGroup(card, name, message) {
    var group = card.querySelectorAll('input[name="' + name + '"]');
    if (!group.length) return true;
    var checked = Array.from(group).some(cb => cb.checked);
    if (!checked) {
        alert(message);
        return false;
    }
    return true;
}




function isStepValid() {
    var formCards = document.querySelectorAll('#healthForm .card');
    var card = formCards[currentStep];


    // --- Native HTML5 Validation ---
    var inputs = card.querySelectorAll("input, select, textarea");
    for (let input of inputs) {
        if (!input.checkValidity()) {
            input.reportValidity();
            return false;
        }
    }


    // Skip validation for optional cards (if needed)
    if (card.id === "other-card" || card.id === "mental-card") {
        return true;
    }


    // Checkbox validation
    if (!requireCheckboxGroup(card, "annual_vax", "Please select at least one vaccine option.")) return false;
    if (!requireCheckboxGroup(card, "symptoms", "Please select at least one symptom option.")) return false;
    if (!requireCheckboxGroup(card, "chronic", "Please select at least one chronic condition option.")) return false;


    // Emergency contact validation (submit step)
    if (card.id === "submit-card") {
        var name = card.querySelector('[name="emergency_contact_name"]');
        var number = card.querySelector('[name="emergency_contact_number"]');


        if (!name.value.trim()) {
            alert("Please enter emergency contact person.");
            name.focus();
            return false;
        }


        if (!number.value.trim()) {
            alert("Please enter emergency contact number.");
            number.focus();
            return false;
        }
    }


    // Validate "Others (Please Specify)" for Symptoms
    const otherSymptomChecked = card.querySelector('input[name="symptoms"][value="Others"]')?.checked;
    const otherSymptomText = card.querySelector('input[name="symptoms_other_details"]');

    if (otherSymptomChecked && (!otherSymptomText.value || otherSymptomText.value.trim() === '')) {
        alert("Please specify your other symptoms.");
        otherSymptomText.classList.add('error-highlight');
        otherSymptomText.focus();
        return false;
    }

    // Validate "Others (Please Specify)" for Chronic Conditions
    const otherChronicChecked = card.querySelector('input[name="chronic"][value="Others"]')?.checked;
    const otherChronicText = card.querySelector('input[name="chronic_other_details"]');

    if (otherChronicChecked && (!otherChronicText.value || otherChronicText.value.trim() === '')) {
        alert("Please specify your other chronic condition.");
        otherChronicText.classList.add('error-highlight');
        otherChronicText.focus();
        return false;
    }

    // Validate "Others (Please Specify)" for Vaccination Records
    const otherVaxChecked = card.querySelector('input[name="annual_vax"][value="Other"]')?.checked;
    const otherVaxText = card.querySelector('input[name="vax_other_details"]');
    
    if (otherVaxChecked && (!otherVaxText.value || otherVaxText.value.trim() === '')) {
        alert("Please specify your other Annual Vaccination.");
        otherChronicText.classList.add('error-highlight');
        otherChronicText.focus();
        return false;
    }

    // ===============================
    // CONTACT NUMBER VALIDATION
    // ===============================
    // ===============================
    const contactType = card.querySelector('[name="contact_type"]');
    const contactInput = card.querySelector('[name="contact_number"]');


    if (contactInput) {
        const value = contactInput.value.trim();


        // 1. STRICT NUMBERS ONLY (blocks letters/symbols)
        if (!/^[0-9]+$/.test(value)) {
            alert("Contact number must contain numbers only (no letters or symbols).");
            contactInput.focus();
            return false;
        }


        // 2. LENGTH VALIDATION
        if (contactType) {
            if (contactType.value === "mobile") {
                if (value.length !== 10) {
                    alert("Cellphone number must be exactly 10 digits.");
                    contactInput.focus();
                    return false;
                }
            }


            if (contactType.value === "landline") {
                if (value.length !== 8) {
                    alert("Telephone number must be exactly 8 digits.");
                    contactInput.focus();
                    return false;
                }
            }
        }
    }
    // ===============================
    // NAME VALIDATION (ON NEXT STEP)
    // ===============================
    
    // 1. Validate respondent names if the form is for "Someone Else"
    const formFor = card.querySelector('[name="form_for"]');
    if (formFor && formFor.value === "Someone Else") {
        const rLname = card.querySelector('[name="respondent_lname"]');
        const rFname = card.querySelector('[name="respondent_fname"]');
        
        if (rLname && !validateNameField(rLname, "Respondent Last Name", true)) return false;
        if (rFname && !validateNameField(rFname, "Respondent First Name", false)) return false;
    }

    // 2. Validate full names
    const fLname = card.querySelector('[name="full_lname"]');
    const fFname = card.querySelector('[name="full_fname"]');
    const fMi = card.querySelector('[name="full_mi"]');
    
    if (fLname && !validateNameField(fLname, "Last Name", true)) return false;
    if (fFname && !validateNameField(fFname, "First Name", false)) return false;
    
    if (fMi && fMi.value.trim()) {
        if (!/^[\p{L}\s]{1,2}$/u.test(fMi.value.trim())) {
            alert("Middle Initial must be 1–2 letters only.");
            fMi.focus();
            return false;
        }
    }

    return true; 
}


function toggleContactPrefix() {
    const type = document.querySelector('[name="contact_type"]').value;
    const prefix = document.getElementById('contactPrefix');


    if (type === "mobile") {
        prefix.innerText = "+63 ";
    } else {
        prefix.innerText = "02 ";
    }
}

function validateContactLive() {
    const type = document.querySelector('[name="contact_type"]').value;
    const input = document.querySelector('[name="contact_number"]');


    if (!input) return;


    if (type === "mobile") {
        input.maxLength = 10;
        input.placeholder = "10-digit mobile number";
    } else {
        input.maxLength = 8;
        input.placeholder = "8-digit landline number";
    }
}


// ===============================
// REAL-TIME INPUT RESTRICTIONS
// ===============================
document.addEventListener("input", function (e) {
    // 1. Restrict Contact Number to digits only
    if (e.target.name === "contact_number") {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }
    
    // 2. Restrict Name fields to remove any digits (0-9) instantly
    const nameFields = [
        "respondent_lname", "respondent_fname", "respondent_mi", "respondent_suffix", 
        "full_lname", "full_fname", "full_mi", "full_suffix"
    ];
    
    if (nameFields.includes(e.target.name)) {
        e.target.value = e.target.value.replace(/[0-9]/g, "");
    }
});

// ===============================
// NAME VALIDATION HELPERS
// ===============================
function isAlphabetOnly(value) {
    return /^[\p{L}\s'-]+$/u.test(value);
}

function hasAbbreviation(value) {
    return /\b[\p{L}]{1,3}\.\b/u.test(value) || value.includes(".");
}

function validateNameField(input, label, allowDot = false) {
    const value = input.value.trim();
    if (!value) return true;

    if (!isAlphabetOnly(value)) {
        alert(label + " must contain letters only (no numbers).");
        input.focus();
        return false;
    }

    if (!allowDot && hasAbbreviation(value)) {
        alert(label + " must be written in full (no abbreviations like 'Ma.' or 'Jo.').");
        input.focus();
        return false;
    }
    return true;
}

// ===============================
// NAVIGATION FUNCTIONS
// ===============================
// (Your function nextStep() should be immediately below here)
function nextStep() {
    const cards = getCards();


    if (!isStepValid()) return;


    if (currentStep < cards.length - 1) {
        showStep(currentStep + 1);
    }
}



function prevStep() {
    if (currentStep > 0) {
        showStep(currentStep - 1);
    }
}




/* =====================================
   DATA COLLECTION HELPER FUNCTIONS
====================================== */
function getCheckboxes(name) {
    var checked = document.querySelectorAll('input[name="' + name + '"]:checked');
    return checked.length ? Array.from(checked).map(c => c.parentElement.innerText.trim()).join(', ') : '—';
}




function getVal(name) {
    var el = document.querySelector('[name="' + name + '"]');
    return el && el.value.trim() ? el.value.trim() : '—';
}




function addRow(tbody, section, question, answer) {
    var tr = document.createElement('tr');
    tr.innerHTML = `<td>${section}</td><td>${question}</td><td>${answer}</td>`;
    tbody.appendChild(tr);
}




/* =====================================
   STEP 7: BUILD SUMMARY TABLE
====================================== */
function buildSummary() {
    var tbody = document.getElementById('summary-body');
    tbody.innerHTML = ''; // Clear previous entries

    // Step 1: Profile (Core Identifiers)
    if (getVal('form_for') === 'Someone Else') {
        addRow(tbody, 'Profile', 'Relationship', getVal('relationship'));
        addRow(tbody, 'Profile', 'Respondent Name', `${getVal('respondent_lname')}, ${getVal('respondent_fname')} ${getVal('respondent_mi')} ${getVal('respondent_suffix')}`);
    }
    addRow(
        tbody,
        'Profile',
        'Name',
        `${getVal('full_lname')}, ${getVal('full_fname')} ${getVal('full_mi')}`
    );
    addRow(tbody, 'Profile', 'Age', getVal('age'));
    addRow(tbody, 'Profile', 'Contact Number', getVal('contact_number'));


    // Step 2: Vaccination (Primary Status)
    addRow(tbody, 'Vaccination', 'COVID-19 Status', getVal('covid_vax_status'));


    // Step 3: Symptoms (Core Symptoms)
    let symptomText = getCheckboxes('symptoms');
    if (getVal('symptoms_other_details') !== '—') {
        symptomText += ` (${getVal('symptoms_other_details')})`;
    }
    addRow(tbody, 'Symptoms', 'Reported Symptoms', symptomText);


    // Step 4: Conditions (Core Conditions)
    let chronicText = getCheckboxes('chronic');
    if (getVal('chronic_other_details') !== '—') {
        chronicText += ` (${getVal('chronic_other_details')})`;
    }
    addRow(tbody, 'Chronic Conditions', 'Chronic Conditions', chronicText);


    // Step 7: Emergency (Crucial for Health Forms)
    addRow(tbody, 'Emergency', 'Contact Person', getVal('emergency_contact_name'));
    addRow(tbody, 'Emergency', 'Contact Number', getVal('emergency_contact_number'));
}




/* =====================================
   CHECKBOX LOGIC (NONE vs OTHERS)
====================================== */
function setupNoneExclusive(name) {
    var boxes = document.querySelectorAll('input[name="' + name + '"]');
    boxes.forEach(box => {
        box.addEventListener('change', () => {
            if (box.value === "none" && box.checked) {
                boxes.forEach(b => b.checked = (b === box));
            } else if (box.checked) {
                var none = document.querySelector(`input[name="${name}"][value="none"]`);
                if (none) none.checked = false;
            }
        });
    });
}


/* =====================================
     TOGGLE DISABLED TEXT INPUTS
====================================== */
function setupOthersToggle() {
    // Define the checkbox group names, the specific "Others" value, and the target text input
    const mappings = [
        { groupName: 'annual_vax', triggerValue: 'Other', targetInput: 'vax_other_details' },
        { groupName: 'symptoms', triggerValue: 'Others', targetInput: 'symptoms_other_details' },
        { groupName: 'chronic', triggerValue: 'Others', targetInput: 'chronic_other_details' }
    ];

    mappings.forEach(map => {
        const checkboxes = document.querySelectorAll(`input[name="${map.groupName}"]`);
        const textInput = document.querySelector(`input[name="${map.targetInput}"]`);

        if (textInput) {
            checkboxes.forEach(cb => {
                cb.addEventListener('change', () => {
                    // Check if the specific "Others" checkbox in this group is currently checked
                    const othersCheckbox = document.querySelector(`input[name="${map.groupName}"][value="${map.triggerValue}"]`);
                    
                    if (othersCheckbox && othersCheckbox.checked) {
                        // Enable it
                        textInput.disabled = false;
                        textInput.classList.remove('disabled-field');
                    } else {
                        // Disable it and clear any typed text
                        textInput.disabled = true;
                        textInput.classList.add('disabled-field');
                        textInput.value = ''; 
                    }
                });
            });
        }
    });
}


/* =====================================
     TOGGLE DEPENDENT FIELDS (NONE)
====================================== */
function setupDependentFields() {
    // Define the rules: If 'groupName' has 'noneValue' checked, disable the 'targets'
    const rules = [
        {
            groupName: 'symptoms',
            noneValue: 'none',
            targets: ['symptom_duration', 'has_taken_medication', 'medication_taken']
        },
        {
            groupName: 'chronic',
            noneValue: 'none',
            targets: ['maintenance_med_status']
        }
    ];

    rules.forEach(rule => {
        const checkboxes = document.querySelectorAll(`input[name="${rule.groupName}"]`);
        
        checkboxes.forEach(cb => {
            cb.addEventListener('change', () => {
                // Check if the "None" checkbox in this specific group is currently checked
                const noneCheckbox = document.querySelector(`input[name="${rule.groupName}"][value="${rule.noneValue}"]`);
                const isNoneChecked = noneCheckbox && noneCheckbox.checked;

                // Loop through all the follow-up questions and disable/enable them
                rule.targets.forEach(targetName => {
                    const targetEl = document.querySelector(`[name="${targetName}"]`);
                    if (targetEl) {
                        if (isNoneChecked) {
                            targetEl.disabled = true;
                            targetEl.classList.add('disabled-field'); // Turns it gray
                            targetEl.value = ""; // Instantly clears any previous answers
                        } else {
                            targetEl.disabled = false;
                            targetEl.classList.remove('disabled-field'); // Returns to normal
                        }
                    }
                });
            });
        });
    });
}

// For Someone Toggle (Disabling other inputs)
var formFor = document.querySelector('[name="form_for"]');
var relationship = document.querySelector('[name="relationship"]');
var respondentLname = document.querySelector('[name="respondent_lname"]');
var respondentFname = document.querySelector('[name="respondent_fname"]');
var respondentMi = document.querySelector('[name="respondent_mi"]');




function toggleForSomeone() {
    if (!formFor) return;


    const fields = [
        'respondent_lname',
        'respondent_fname',
        'respondent_mi',
        'respondent_suffix'
    ];


    const isMyself = formFor.value === "Myself";


    fields.forEach(name => {
        const el = document.querySelector(`[name="${name}"]`);
        if (!el) return;


        if (isMyself) {
            el.value = "";
            el.disabled = true;
            el.classList.add("disabled-field");
        } else {
            el.disabled = false;
            el.classList.remove("disabled-field");
        }
    });


    // relationship stays your existing logic
    if (relationship) {
        if (isMyself) {
            relationship.value = "";
            relationship.disabled = true;
            relationship.classList.add("disabled-field");
        } else {
            relationship.disabled = false;
            relationship.classList.remove("disabled-field");
        }
    }
}


formFor.addEventListener("change", toggleForSomeone);
toggleForSomeone();
setupOthersToggle();
setupDependentFields();

['annual_vax', 'symptoms', 'chronic', 'geriatric_difficulties'].forEach(setupNoneExclusive);

// Initialize form
showStep(0);




/* =====================================
     FINAL SUBMIT & RESULTS
====================================== */
const submissions = []; // In-memory store for submitted responses




// Helper to format the submission date
function formatDate(date) {
    if (!date) return '—';
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}




async function finalSubmit() {
    if (!confirm('Are you sure you want to submit this health monitoring form?')) return;

    // Grab the uploaded file
    const fileInput = document.querySelector('[name="vax_document"]');
    const uploadedFile = fileInput.files[0];
    const fileBase64 = await getFileBase64(uploadedFile);

    // 1. Gather EVERY piece of data for the detailed database
    const entry = {
        id: submissions.length + 1,
        date: new Date(),
       
        // Basic Info
        form_for: getVal('form_for'),
        relationship: getVal('relationship'),
        res_name: `${getVal('respondent_lname')}, ${getVal('respondent_fname')} ${getVal('respondent_mi')}`,
        name: `${getVal('full_lname')}, ${getVal('full_fname')} ${getVal('full_mi')}`,
        age: getVal('age'), // Note: Ensure you have an age input in your HTML!
        sex: getVal('sex'),
        address: `${getVal('unit_no')} ${getVal('street')} Brgy ${getVal('barangay')}`,
        contact: getVal('contact_number'),
        civil: getVal('civil_status'),
       
        // Vaccination
        vax_status: getVal('covid_vax_status'),
        annual_vax: getCheckboxes('annual_vax'),
        vax_doc: getVal('vaxcard_available'),
        vax_file: fileBase64, // File Upload for Vaccination
       
        // Symptoms
        symptoms: getCheckboxes('symptoms') + (getVal('symptoms_other_details') !== '—' ? ' (' + getVal('symptoms_other_details') + ')' : ''),
        duration: getVal('symptom_duration'),
        meds_taken: getVal('has_taken_medication') === 'Yes' ? getVal('medication_taken') : 'No',
        household_size: getVal('household_members'),
        household_sick: getVal('household_sick') === 'Yes' ? getVal('household_sick_details') : 'Healthy',
       
        // Chronic
        chronic: getCheckboxes('chronic') + (getVal('chronic_other_details') !== '—' ? ' (' + getVal('chronic_other_details') + ')' : ''),
        maintenance: getVal('maintenance_med_status'),
       
        // Other (Maternal/Geriatric)
        pregnancy: getVal('pregnancy_status'),
        prenatal: getVal('prenatal_checkup'),
        danger_signs: getVal('danger_signs'),
        geriatric: getCheckboxes('geriatric_difficulties'),
        physical: getVal('physical_assistance'),
        senior_id: getVal('senior_id'),
       
        // Mental Health
        mental_diag: getVal('mental_diagnosis'),
        mental_meds: getVal('mental_med_status'),
        psych_support: getVal('psychological_support'),
       
        // Final Notes
        notes: getVal('additional_notes'),
        emergency_name: getVal('emergency_contact_name'),
        emergency_num: getVal('emergency_contact_number')
    };

    // 2. Save it to our array
    submissions.push(entry);

    // 3. Hide the form and navigation bar
    document.getElementById('healthForm').style.display = 'none';
    document.getElementById('main-nav').style.display = 'none';

    // 4. Show success screen
    document.getElementById('success-card').classList.add('active');
}


function viewDatabase() {
    // 1. Swap Screens
    document.getElementById('success-card').classList.remove('active');
    document.getElementById('database-card').classList.add('active');
    document.getElementById('total-count').innerText = submissions.length;


    // 2. Setup the Base Rows and Headers
    const S = submissions;
    const baseHeaders = ['#', 'For Who', 'Respondent Name', 'Relationship', 'Name', 'Age', 'Date'];
   
    function baseRow(e) {
        return `<td>${e.id}</td><td>${e.form_for}</td><td>${e.res_name}</td><td>${e.relationship}</td><td>${e.name}</td><td>${e.age}</td><td>${formatDate(e.date)}</td>`;
    }


    // 3. Section Generator Helper
    function tableSection(id, num, title, headers, rows) {
        const noData = submissions.length === 0;
        const bodyRows = noData
            ? `<tr><td colspan="${headers.length}" style="text-align:center; padding: 20px;">No submissions yet.</td></tr>`
            : rows.map((r) => `<tr>${r}</tr>`).join('');
        return `
            <div class="results-section" id="${id}">
                <div class="results-section-header">
                    <span class="results-section-num">${num}</span> ${title}
                </div>
                <div class="table-responsive">
                    <table class="database-table">
                        <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
                        <tbody>${bodyRows}</tbody>
                    </table>
                </div>
            </div>`;
    }




    // 4. Build Individual Sections
    const sectionsHTML = [
        tableSection('sec-profile', 1, 'Full Profile Details',
            [...baseHeaders, 'Sex', 'Address', 'Contact', 'Civil Status'],
            S.map(e => baseRow(e) + `<td>${e.sex}</td><td>${e.address}</td><td>${e.contact}</td><td>${e.civil}</td>`)),




        tableSection('sec-vax', 2, 'Vaccination Records',
            [...baseHeaders, 'COVID Status', 'Annual Vaccines', 'Vax Document', 'Uploaded File'],
            S.map(e => {
                // If a file was uploaded, create a button. Otherwise, show "None".
                const fileBtn = e.vax_file ? `
                    <button type="button" class="view-img-btn no-print" onclick="openDocumentModal(${e.id})">View File</button>
                    <span class="print-only-text">✅ Attached</span>
                    ` : 'None';
                return baseRow(e) + `<td>${e.vax_status}</td><td>${e.annual_vax}</td><td>${e.vax_doc}</td><td style="text-align:center;">${fileBtn}</td>`;
            })),



        tableSection('sec-symptoms', 3, 'Symptoms & Household',
            [...baseHeaders, 'Symptoms', 'Duration', 'Meds Taken', 'Household Size', 'Household Sick Status'],
            S.map(e => baseRow(e) + `<td>${e.symptoms}</td><td>${e.duration}</td><td>${e.meds_taken}</td><td>${e.household_size}</td><td>${e.household_sick}</td>`)),




        tableSection('sec-chronic', 4, 'Chronic & Maintenance',
            [...baseHeaders, 'Diagnosed Conditions', 'Maintenance Meds Status'],
            S.map(e => baseRow(e) + `<td>${e.chronic}</td><td>${e.maintenance}</td>`)),




        tableSection('sec-other', 5, 'Maternal & Geriatric',
            [...baseHeaders, 'Pregnancy Status', 'Prenatal', 'Danger Signs', 'Geriatric Issues', 'Physical Assist', 'Senior ID'],
            S.map(e => baseRow(e) + `<td>${e.pregnancy}</td><td>${e.prenatal}</td><td>${e.danger_signs}</td><td>${e.geriatric}</td><td>${e.physical}</td><td>${e.senior_id}</td>`)),




        tableSection('sec-mental', 6, 'Mental Health',
            [...baseHeaders, 'Diagnosis', 'Maintenance Meds', 'Psych Support'],
            S.map(e => baseRow(e) + `<td>${e.mental_diag}</td><td>${e.mental_meds}</td><td>${e.psych_support}</td>`)),




        tableSection('sec-emergency', 7, 'Notes & Emergency',
            [...baseHeaders, 'Additional Notes', 'Emergency Name', 'Emergency Number'],
            S.map(e => baseRow(e) + `<td>${e.notes}</td><td>${e.emergency_name}</td><td>${e.emergency_num}</td>`)),
    ];




    // 5. Build the Navigation Bar
    const navLinks = [
        ['sec-profile','Profile'],['sec-vax','Vaccination'],['sec-symptoms','Symptoms'],
        ['sec-chronic','Chronic'],['sec-other','Maternal/Geriatric'],['sec-mental','Mental Health'],
        ['sec-emergency','Notes & Emergency']
    ];




    const navHTML = `
        <div class="results-nav">
            ${navLinks.map(([id, label], i) => `<a href="#${id}" class="results-nav-link">${label}</a>`).join('')}
        </div>
    `;




    // 6. Inject into the DOM
    document.getElementById('database-container').innerHTML = navHTML + sectionsHTML.join('');
}




/* =====================================
            ANSWER AGAIN
====================================== */

function answerAgain() {
    document.getElementById('healthForm').reset();
    toggleForSomeone();
    document.getElementById('success-card').classList.remove('active');
    document.getElementById('database-card').classList.remove('active');
    document.getElementById('healthForm').style.display = 'block';
    document.getElementById('main-nav').style.display = 'flex';
    showStep(0);
}

/* =====================================
           PRINT RESULTS
====================================== */
function printResults() {
    // Adds a 150ms delay to ensure all DOM elements and images are loaded before printing
    setTimeout(() => window.print(), 150);
}


/* =====================================
           DOCUMENT VIEWER LOGIC
====================================== */
// Converts uploaded file to Base64 so it can be saved in memory
function getFileBase64(file) {
    return new Promise((resolve, reject) => {
        if (!file) {
            resolve(null);
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

function openDocumentModal(submissionId) {
    const submission = submissions.find(s => s.id === submissionId);
    if (submission && submission.vax_file) {
        document.getElementById('modalViewer').src = submission.vax_file;
        document.getElementById('documentModal').classList.add('active');
    }
}

function closeDocumentModal() {
    document.getElementById('documentModal').classList.remove('active');
    document.getElementById('modalViewer').src = ""; // Clear it out
}


