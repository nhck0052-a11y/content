const translations = {
    en: {
        app_title: "2150 AI Survival Simulation",
        main_title: "[2150 Survival Simulation] Find Your AI Partner.",
        tagline: "In a world ruled by AI, will you dominate or coexist? Analyze your tendencies to match the optimal 22nd-century career and partner (AI).",
        name_input_placeholder: "Enter ID (Name)",
        mbti_placeholder: "Neural Archetype (MBTI)",
        age_placeholder: "Service Cycle (Age)",
        gender_placeholder: "Gender Protocol",
        blood_placeholder: "Fuel System (Blood)",
        interest_select_placeholder: "Select Core Interest",
        extract_button_text: "Extract Destiny",
        analysis_status_preparing: "Synchronizing Data...",
        interest_map: {
            art: "Art",
            engineering: "Engineering",
            business: "Business",
            psychology: "Psychology"
        },
        synergy_score_label: "Synergy Index:",
        home_button_text: "Reboot System",
        optimal_ai_partner_label: "Matched AI Unit",
        future_career_label: "Future Resource Role",
        alert_message: "Please synchronize all biological data protocols!",
        gender_m: "XY Protocol",
        gender_f: "XX Protocol",
        gender_n: "Non-Binary Code"
    },
    ko: {
        app_title: "2150 AI 생존 시뮬레이션",
        main_title: "[2150년 생존 시뮬레이션] 당신의 AI 파트너를 찾아드립니다.",
        tagline: "AI가 지배하는 세상, 당신은 지배할 것인가, 공존할 것인가? 당신의 성향을 분석해 22세기 최적의 직업과 파트너(AI)를 매칭해 드립니다.",
        name_input_placeholder: "이름(ID)을 입력하세요",
        mbti_placeholder: "뉴럴 아키타입 (MBTI)",
        age_placeholder: "가동 연한 (나이)",
        gender_placeholder: "성별 프로토콜",
        blood_placeholder: "에너지 유닛 (혈액형)",
        interest_select_placeholder: "핵심 관심 분야 선택",
        extract_button_text: "운명 추출",
        home_button_text: "시스템 재부팅",
        analysis_status_preparing: "데이터 동기화 중...",
        interest_map: {
            art: "예술",
            engineering: "공학",
            business: "경영",
            psychology: "심리"
        },
        synergy_score_label: "시너지 지수:",
        optimal_ai_partner_label: "매칭 AI 유닛",
        future_career_label: "미래 자원 역할",
        alert_message: "모든 생체 데이터 프로토콜을 입력해주세요!",
        gender_m: "XY 프로토콜",
        gender_f: "XX 프로토콜",
        gender_n: "논바이너리 코드"
    }
};

class FateResult extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                padding: 1rem;
                border: 1px dashed var(--border-color);
                border-radius: 10px;
                margin-top: 2rem;
                text-align: center;
                color: var(--text-color);
            }
        `;
        this.shadowRoot.appendChild(style);
    }

    displayFate({ fate, optimal_ai_partner, future_career, synergy_score }) {
        this.shadowRoot.innerHTML = ''; 
        const lang = localStorage.getItem('language') || 'ko';

        const fateP = document.createElement('p');
        const partnerP = document.createElement('p');
        const careerP = document.createElement('p');

        this.shadowRoot.appendChild(fateP);
        this.shadowRoot.appendChild(partnerP);
        this.shadowRoot.appendChild(careerP);

        let fullText = [
            fate,
            `\n${translations[lang].optimal_ai_partner_label}: ${optimal_ai_partner}`,
            `\n${translations[lang].future_career_label}: ${future_career}`
        ];
        let targetElements = [fateP, partnerP, careerP];

        let currentTextIndex = 0;
        let charIndex = 0;

        const typeWriter = () => {
            if (currentTextIndex < fullText.length) {
                if (charIndex < fullText[currentTextIndex].length) {
                    targetElements[currentTextIndex].textContent += fullText[currentTextIndex].charAt(charIndex);
                    charIndex++;
                    setTimeout(typeWriter, 30);
                } else {
                    currentTextIndex++;
                    charIndex = 0;
                    setTimeout(typeWriter, 500);
                }
            } else {
                const synergyContainer = document.getElementById('synergy-container');
                const synergyScoreEl = document.getElementById('synergy-score');
                const healthBar = document.querySelector('.health-bar');

                if (synergyContainer && synergyScoreEl && healthBar) {
                    synergyContainer.style.display = 'block';
                    let currentScore = 0;
                    const interval = setInterval(() => {
                        if (currentScore < synergy_score) {
                            currentScore++;
                            healthBar.style.width = `${currentScore}%`;
                            synergyScoreEl.textContent = `${translations[lang].synergy_score_label} ${currentScore}%`;
                        } else {
                            clearInterval(interval);
                            const globalHomeButtonContainer = document.getElementById('global-home-button-container');
                            if (globalHomeButtonContainer) {
                                globalHomeButtonContainer.innerHTML = '';
                                const globalHomeButton = document.createElement('button');
                                globalHomeButton.classList.add('home-button-global');
                                globalHomeButton.textContent = translations[lang].home_button_text;
                                globalHomeButton.addEventListener('click', () => {
                                    location.reload();
                                });
                                globalHomeButtonContainer.appendChild(globalHomeButton);
                            }
                        }
                    }, 30);
                }
            }
        };
        typeWriter();
    }
}

customElements.define('fate-result', FateResult);

const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const body = document.body;

function setTheme(theme) {
    body.classList.add('glitch-effect');
    setTimeout(() => { body.classList.remove('glitch-effect'); }, 300);

    if (theme === 'light') {
        body.classList.add('light-mode');
        themeToggle.textContent = '[ DARK ]';
    } else {
        body.classList.remove('light-mode');
        themeToggle.textContent = '[ LIGHT ]';
    }
    localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme || 'dark');

themeToggle.addEventListener('click', () => {
    const newTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
    setTheme(newTheme);
});

function setLanguage(lang) {
    localStorage.setItem('language', lang);

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    const selects = ['interest-select', 'mbti-select', 'age-select', 'gender-select', 'blood-select'];
    selects.forEach(id => {
        const select = document.getElementById(id);
        if (select) {
            Array.from(select.options).forEach(option => {
                if (option.value === '') {
                    const placeholderKey = id.replace('-', '_') + '_placeholder';
                    if (translations[lang][placeholderKey]) option.textContent = translations[lang][placeholderKey];
                } else {
                    const key = option.dataset.key;
                    if (key && translations[lang][key]) option.textContent = translations[lang][key];
                }
            });
        }
    });

    if (lang === 'ko') langToggle.textContent = '[ EN ]';
    else langToggle.textContent = '[ KO ]';
}

const initialLang = localStorage.getItem('language') || 'ko';
setLanguage(initialLang);

langToggle.addEventListener('click', () => {
    body.classList.add('glitch-effect');
    setTimeout(() => { body.classList.remove('glitch-effect'); }, 300);
    const newLang = localStorage.getItem('language') === 'ko' ? 'en' : 'ko';
    setLanguage(newLang);
});

document.getElementById('extract-button').addEventListener('click', () => {
    const fields = ['name-input', 'mbti-select', 'age-select', 'gender-select', 'blood-select', 'interest-select'];
    const values = {};
    let allFilled = true;

    fields.forEach(id => {
        const el = document.getElementById(id);
        values[id] = el.value;
        if (!el.value) allFilled = false;
    });

    if (!allFilled) {
        alert(translations[localStorage.getItem('language') || 'ko'].alert_message);
        return;
    }

    body.classList.add('glitch-effect');
    setTimeout(() => { body.classList.remove('glitch-effect'); }, 300);

    const extractButton = document.getElementById('extract-button');
    const analysisStatus = document.getElementById('analysis-status');
    extractButton.disabled = true;
    analysisStatus.style.display = 'block';

    const lang = localStorage.getItem('language') || 'ko';
    const interestFates = translations[lang].fates[values['interest-select']] || translations[lang].fates["default"];
    const selectedFateData = interestFates[Math.floor(Math.random() * interestFates.length)];

    let resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';
    const fateResult = document.createElement('fate-result');
    resultContainer.appendChild(fateResult);
    fateResult.displayFate({
        fate: `${translations[lang].fate_prefix(values['name-input'], values['interest-select'])}${selectedFateData.fate}`,
        optimal_ai_partner: selectedFateData.optimal_ai_partner,
        future_career: selectedFateData.future_career,
        synergy_score: selectedFateData.synergy_score
    });

    setTimeout(() => {
        extractButton.disabled = false;
        analysisStatus.style.display = 'none';
    }, 3000);
});

function applyGlitchEffect(element) {
    element.classList.add('glitch-effect');
    setTimeout(() => { element.classList.remove('glitch-effect'); }, 400);
}

function initCharacters() {
    const pixelCharacters = document.querySelectorAll('.pixel-character, .light-pixel-character');
    const characterStates = [];

    pixelCharacters.forEach((char) => {
        const width = char.offsetWidth || 60;
        const height = char.offsetHeight || 60;
        const initialX = Math.random() * (window.innerWidth - width);
        const initialY = Math.random() * (window.innerHeight - height);

        char.style.left = `${initialX}px`;
        char.style.top = `${initialY}px`;

        characterStates.push({
            element: char,
            x: initialX, y: initialY,
            vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2,
            width, height,
        });
    });

    function animateCharacters() {
        characterStates.forEach((charState, i) => {
            charState.x += charState.vx;
            charState.y += charState.vy;

            if (charState.x + charState.width > window.innerWidth || charState.x < 0) {
                charState.vx *= -1;
                applyGlitchEffect(charState.element);
            }
            if (charState.y + charState.height > window.innerHeight || charState.y < 0) {
                charState.vy *= -1;
                applyGlitchEffect(charState.element);
            }

            charState.element.style.left = `${charState.x}px`;
            charState.element.style.top = `${charState.y}px`;
        });
        requestAnimationFrame(animateCharacters);
    }
    animateCharacters();
}

window.addEventListener('load', initCharacters);

function updateFutureTime() {
    const futureTimeElement = document.getElementById('future-time');
    if (futureTimeElement) {
        const now = new Date();
        const futureDate = new Date(now.getFullYear() + 126, now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
        const year = futureDate.getFullYear();
        const month = String(futureDate.getMonth() + 1).padStart(2, '0');
        const day = String(futureDate.getDate()).padStart(2, '0');
        const hours = String(futureDate.getHours()).padStart(2, '0');
        const minutes = String(futureDate.getMinutes()).padStart(2, '0');
        const seconds = String(futureDate.getSeconds()).padStart(2, '0');
        futureTimeElement.textContent = `2150 CYBERNETIC ERA - ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
}
setInterval(updateFutureTime, 1000);
updateFutureTime();
