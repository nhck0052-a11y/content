const translations = {
    en: {
        app_title: "AI Coexistence Aptitude Tester",
        main_title: "AI Coexistence Aptitude Tester",
        tagline: "This tester analyzes which AI field humanity should choose to grow in 2150.",
        name_input_placeholder: "Enter your name",
        interest_select_placeholder: "Select your interest",
        extract_button_text: "Extract Destiny",
        analysis_status_preparing: "Preparing analysis...",
        analysis_messages: [
            "Analyzing your neural patterns...",
            "Consulting the AI Oracle...",
            "Calculating future probabilities...",
            "Synthesizing your destiny with AI trends...",
            "Finalizing the prophecy..."
        ],
        fates: {
            art: [
                { fate: "Your destiny is intertwined with AI in the realm of art. You will pioneer new forms of creative expression.", optimal_ai_partner: "Creative AI (e.g., GANs, Style Transfer AI)", future_career: "AI Art Director, Digital Curator", synergy_score: 85 },
                { fate: "You are destined to be a muse for AI artists, guiding their algorithmic brushes to create masterpieces.", optimal_ai_partner: "Generative AI, Interactive Art AI", future_career: "AI Art Collaborator, Experiential Artist", synergy_score: 92 }
            ],
            engineering: [
                { fate: "Your path is in building the very infrastructure of AI. You will design the next generation of intelligent systems.", optimal_ai_partner: "Quantum AI, Neuromorphic Computing AI", future_career: "AI Systems Architect, Robotics Engineer", synergy_score: 95 },
                { fate: "You will engineer the perfect symbiotic relationship between humans and AI, creating a future of seamless integration.", optimal_ai_partner: "Human-AI Interface AI, Autonomous System AI", future_career: "AI Integration Specialist, Bio-AI Engineer", synergy_score: 88 }
            ],
            business: [
                { fate: "You possess the vision to integrate AI into global markets, leading ventures that redefine industries.", optimal_ai_partner: "Predictive Analytics AI, Economic Simulation AI", future_career: "AI Business Strategist, Automated Market Analyst", synergy_score: 80 },
                { fate: "Your knack for strategy will be amplified by AI, allowing you to optimize complex systems and drive innovation.", optimal_ai_partner: "Optimization AI, Supply Chain AI", future_career: "AI-driven Entrepreneur, Smart Logistics Manager", synergy_score: 87 }
            ],
            psychology: [
                { fate: "Your empathy will be crucial in developing AI that understands and supports human well-being.", optimal_ai_partner: "Emotional Intelligence AI, Therapeutic AI", future_career: "AI Empathy Designer, Digital Therapist", synergy_score: 90 },
                { fate: "You will unlock the secrets of the human mind with AI, fostering a new era of cognitive understanding.", optimal_ai_partner: "Cognitive AI, Behavioral Analysis AI", future_career: "AI-Assisted Psychologist, Neuro-AI Researcher", synergy_score: 82 }
            ],
            default: [
                { fate: "Your future with AI is bright and full of unexpected opportunities.", optimal_ai_partner: "Adaptive Learning AI", future_career: "AI Opportunity Seeker", synergy_score: 75 }
            ]
        },
        fate_prefix: (name, interest) => `Your AI destiny in ${translations.en.interest_map[interest] || interest} field, ${name}: `,
        alert_message: "Please enter your name and select your interest!",
        interest_map: {
            art: "Art",
            engineering: "Engineering",
            business: "Business",
            psychology: "Psychology"
        },
        synergy_score_label: "Synergy Score:",
        home_button_text: "Home",
        optimal_ai_partner_label: "Optimal AI Partner",
        future_career_label: "Future Career"
    },
    ko: {
        app_title: "AI 공존 적성 검사기",
        main_title: "AI 공존 적성 검사기",
        tagline: "인류가 2150년 어떤 AI 분야를 선택해 성장시켜야 할지 분석해주는 검사기입니다.",
        name_input_placeholder: "이름을 입력하세요",
        interest_select_placeholder: "관심 분야 선택",
        extract_button_text: "운명 추출",
        home_button_text: "홈",
        analysis_status_preparing: "분석 준비 중...",
        analysis_messages: [
            "당신의 뉴럴 패턴을 분석 중...",
            "AI 오라클에게 자문을 구하는 중...",
            "미래 확률을 계산 중...",
            "당신의 운명을 AI 트렌드와 융합 중...",
            "예언을 최종 확정 중..."
        ],
        fates: {
            art: [
                { fate: "당신의 운명은 예술 분야에서 AI와 얽혀 있습니다. 새로운 형태의 창의적 표현을 개척할 것입니다.", optimal_ai_partner: "창작 AI (예: GANs, 스타일 전이 AI)", future_career: "AI 아트 디렉터, 디지털 큐레이터", synergy_score: 85 },
                { fate: "당신은 AI 예술가들의 뮤즈가 되어, 그들의 알고리즘 붓이 걸작을 만들도록 이끌 것입니다.", optimal_ai_partner: "생성 AI, 인터랙티브 아트 AI", future_career: "AI 아트 협업자, 체험 예술가", synergy_score: 92 }
            ],
            engineering: [
                { fate: "당신의 길은 AI의 인프라를 구축하는 것입니다. 다음 세대의 지능형 시스템을 설계할 것입니다.", optimal_ai_partner: "양자 AI, 뉴로모픽 컴퓨팅 AI", future_career: "AI 시스템 설계자, 로봇 공학자", synergy_score: 95 },
                { fate: "당신은 인간과 AI 간의 완벽한 공생 관계를 설계하여, 끊김 없는 통합의 미래를 창조할 것입니다.", optimal_ai_partner: "인간-AI 인터페이스 AI, 자율 시스템 AI", future_career: "AI 통합 전문가, 바이오-AI 엔지니어", synergy_score: 88 }
            ],
            business: [
                { fate: "당신은 AI를 글로벌 시장에 통합하여 산업을 재정의하는 벤처를 이끌 비전을 가지고 있습니다.", optimal_ai_partner: "예측 분석 AI, 경제 시뮬레이션 AI", future_career: "AI 비즈니스 전략가, 자동화 시장 분석가", synergy_score: 80 },
                { fate: "당신의 전략적인 재능은 AI에 의해 증폭되어, 복잡한 시스템을 최적화하고 혁신을 주도할 것입니다.", optimal_ai_partner: "최적화 AI, 공급망 AI", future_career: "AI 기반 기업가, 스마트 물류 관리자", synergy_score: 87 }
            ],
            psychology: [
                { fate: "당신의 공감 능력은 인간의 웰빙을 이해하고 지원하는 AI를 개발하는 데 중요할 것입니다.", optimal_ai_partner: "감성 지능 AI, 치료 AI", future_career: "AI 공감 디자이너, 디지털 치료사", synergy_score: 90 },
                { fate: "당신은 AI와 함께 인간 마음의 비밀을 밝혀내어, 인지 이해의 새로운 시대를 열 것입니다.", optimal_ai_partner: "인지 AI, 행동 분석 AI", future_career: "AI 보조 심리학자, 신경-AI 연구원", synergy_score: 82 }
            ],
            default: [
                { fate: "AI와 함께하는 당신의 미래는 밝고 예상치 못한 기회로 가득할 것입니다.", optimal_ai_partner: "적응형 학습 AI", future_career: "AI 기회 탐색가", synergy_score: 75 }
            ]
        },
        fate_prefix: (name, interest) => `${name}님의 ${translations.ko.interest_map[interest] || interest} 분야 AI 운세: `,
        alert_message: "이름과 관심 분야를 모두 입력/선택해주세요!",
        interest_map: {
            art: "예술",
            engineering: "공학",
            business: "경영",
            psychology: "심리"
        },
        synergy_score_label: "시너지 지수:",
        home_button_text: "홈",
        optimal_ai_partner_label: "최적 AI 파트너",
        future_career_label: "미래 직업"
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
                border: 1px dashed var(--border-color); /* Use CSS variable */
                border-radius: 10px;
                margin-top: 2rem;
                text-align: center;
                color: var(--text-color); /* Use CSS variable */
            }
        `;
        this.shadowRoot.appendChild(style);
    }

    displayFate({ fate, optimal_ai_partner, future_career, synergy_score }) {
        this.shadowRoot.innerHTML = ''; // Clear previous content

        const fateP = document.createElement('p');
        const partnerP = document.createElement('p');
        const careerP = document.createElement('p');

        this.shadowRoot.appendChild(fateP);
        this.shadowRoot.appendChild(partnerP);
        this.shadowRoot.appendChild(careerP);

        let fullText = [
            fate,
            `\n${translations[localStorage.getItem('language') || 'ko'].optimal_ai_partner_label}: ${optimal_ai_partner}`,
            `\n${translations[localStorage.getItem('language') || 'ko'].future_career_label}: ${future_career}`
        ];
        let targetElements = [fateP, partnerP, careerP]; // 각 텍스트가 들어갈 요소

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
                    if (currentTextIndex < fullText.length) { // 다음 텍스트가 있다면 줄바꿈 추가
                         targetElements[currentTextIndex].textContent = ''; // 다음 요소 초기화
                    }
                    setTimeout(typeWriter, 500); // Pause before typing next section
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
                            synergyScoreEl.textContent = `${translations[localStorage.getItem('language') || 'ko'].synergy_score_label} ${currentScore}%`;
                        } else {
                            clearInterval(interval);
                            healthBar.style.width = `${synergy_score}%`;
                            synergyScoreEl.textContent = `${translations[localStorage.getItem('language') || 'ko'].synergy_score_label} ${synergy_score}%`;
                            
                            const globalHomeButtonContainer = document.getElementById('global-home-button-container');
                            if (globalHomeButtonContainer) {
                                globalHomeButtonContainer.innerHTML = '';
                                const globalHomeButton = document.createElement('button');
                                globalHomeButton.classList.add('home-button-global');
                                globalHomeButton.textContent = translations[localStorage.getItem('language') || 'ko'].home_button_text;
                                globalHomeButton.addEventListener('click', () => {
                                    location.reload();
                                });
                                globalHomeButtonContainer.appendChild(globalHomeButton);
                            }
                        }
                    }, 50);
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
    setTimeout(() => {
        body.classList.remove('glitch-effect');
    }, 300);

    const pixelArtContainer = document.getElementById('pixel-art-container');
    if (theme === 'light') {
        body.classList.add('light-mode');
        themeToggle.textContent = '🌙';
        if (pixelArtContainer) pixelArtContainer.style.display = 'none';
    } else {
        body.classList.remove('light-mode');
        themeToggle.textContent = '🌞';
        if (pixelArtContainer) pixelArtContainer.style.display = 'flex';
    }
    localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme('dark');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

function setLanguage(lang) {
    localStorage.setItem('language', lang);

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'OPTION' && element.value === '') { // Add this for placeholder option
                element.textContent = translations[lang][key];
            }else {
                element.textContent = translations[lang][key];
            }
        }
    });

    const interestSelect = document.getElementById('interest-select');
    if (interestSelect) {
        Array.from(interestSelect.options).forEach(option => {
            if (option.value !== '') {
                option.textContent = translations[lang].interest_map[option.value];
            }
        });
    }

    const globalHomeButton = document.querySelector('#global-home-button-container .home-button-global');
    if (globalHomeButton) {
        globalHomeButton.textContent = translations[lang].home_button_text;
    }


    if (lang === 'ko') {
        langToggle.textContent = '🇺🇸';
    } else {
        langToggle.textContent = '🇰🇷';
    }
}

function updateInterestOptions(lang) {
    const interestSelect = document.getElementById('interest-select');
    if (interestSelect) {
        Array.from(interestSelect.options).forEach(option => {
            if (option.value !== '') {
                option.remove();
            }
        });

        const interestMap = translations[lang].interest_map;
        for (const key in interestMap) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = interestMap[key];
            interestSelect.appendChild(option);
        }
    }
}

const initialLang = localStorage.getItem('language') || 'ko';
setLanguage(initialLang);
updateInterestOptions(initialLang);

langToggle.addEventListener('click', () => {
    const currentLang = localStorage.getItem('language') || 'ko';
    const newLang = currentLang === 'ko' ? 'en' : 'ko';
    setLanguage(newLang);
    updateInterestOptions(newLang);
});

document.getElementById('extract-button').addEventListener('click', () => {
    const synergyContainer = document.getElementById('synergy-container');
    if(synergyContainer) {
        synergyContainer.style.display = 'none';
    }

    const name = document.getElementById('name-input').value;
    const interest = document.getElementById('interest-select').value;
    const extractButton = document.getElementById('extract-button');
    const analysisStatus = document.getElementById('analysis-status');

    if (!name || !interest) {
        alert(translations[localStorage.getItem('language') || 'ko'].alert_message);
        return;
    }

    extractButton.disabled = true;
    analysisStatus.style.display = 'block';
    analysisStatus.textContent = '';

    const lang = localStorage.getItem('language') || 'ko';

    const interestFates = translations[lang].fates[interest] || translations[lang].fates["default"];
    const randomIndex = Math.floor(Math.random() * interestFates.length);
    const selectedFateData = interestFates[randomIndex];

    let resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';
    const fateResult = document.createElement('fate-result');
    resultContainer.appendChild(fateResult);
    fateResult.displayFate({
        fate: `${translations[lang].fate_prefix(name, interest)}${selectedFateData.fate}`,
        optimal_ai_partner: selectedFateData.optimal_ai_partner,
        future_career: selectedFateData.future_career,
        synergy_score: selectedFateData.synergy_score
    });

    const totalTextLength = (selectedFateData.fate.length + selectedFateData.optimal_ai_partner.length + selectedFateData.future_career.length + translations[lang].fate_prefix(name, interest).length);
    const typingDuration = (totalTextLength * 30) + (3 * 500);

    setTimeout(() => {
        extractButton.disabled = false;
        analysisStatus.style.display = 'none';
    }, typingDuration + 100);
});

function createPixelArt() {
    const pixelArtContainer = document.getElementById('pixel-art-container');
    const art = [
        "              g g g",
        "             g g g g",
        "            g g g g g",
        "           g g g g g g",
        "          g g g g g g g",
        "         g g g g g g g g",
        "        g g g g g g g g g",
        "       g g g g g g g g g g",
        "      g g g g g g g g g g g",
        "     g g g g g g g g g g g g",
        "    g g g g g g g g g g g g g",
        "           g g g",
        "           g g g",
        "           g g g",
        " ggggggggggggggggggggggggggggggggggggggggg",
        "g g g g g g g g g g g g g g g g g g g g g",
    ];

    art.forEach(rowStr => {
        const row = document.createElement('div');
        row.classList.add('pixel-row');
        for (const char of rowStr) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            if (char === 'g') {
                pixel.classList.add('g');
            }
            row.appendChild(pixel);
        }
        pixelArtContainer.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createPixelArt();
    const analysisStatus = document.getElementById('analysis-status');
    analysisStatus.style.display = 'none';

    const pixelCharacters = document.querySelectorAll('.pixel-character');
    const characterStates = [];

    pixelCharacters.forEach((char) => {
        const initialX = Math.random() * (window.innerWidth - char.offsetWidth);
        const initialY = Math.random() * (window.innerHeight - char.offsetHeight);

        char.style.left = `${initialX}px`;
        char.style.top = `${initialY}px`;

        characterStates.push({
            element: char,
            x: initialX,
            y: initialY,
            vx: (Math.random() - 0.5) * 1,
            vy: (Math.random() - 0.5) * 1,
            width: char.offsetWidth,
            height: char.offsetHeight,
        });
    });

    function animateCharacters() {
        if (body.classList.contains('light-mode')) {
            requestAnimationFrame(animateCharacters);
            return;
        }

        characterStates.forEach((charState, i) => {
            charState.x += charState.vx;
            charState.y += charState.vy;

            if (charState.x + charState.width > window.innerWidth || charState.x < 0) {
                charState.vx *= -1;
                if (charState.x < 0) charState.x = 0;
                if (charState.x + charState.width > window.innerWidth) charState.x = window.innerWidth - charState.width;
                applyGlitchEffect(charState.element);
            }
            if (charState.y + charState.height > window.innerHeight || charState.y < 0) {
                charState.vy *= -1;
                if (charState.y < 0) charState.y = 0;
                if (charState.y + charState.height > window.innerHeight) charState.y = window.innerHeight - charState.height;
                applyGlitchEffect(charState.element);
            }

            for (let j = i + 1; j < characterStates.length; j++) {
                const otherCharState = characterStates[j];

                if (charState.x < otherCharState.x + otherCharState.width &&
                    charState.x + charState.width > otherCharState.x &&
                    charState.y < otherCharState.y + otherCharState.height &&
                    charState.y + charState.height > otherCharState.y) {

                    charState.vx *= -1;
                    charState.vy *= -1;
                    otherCharState.vx *= -1;
                    otherCharState.vy *= -1;

                    applyGlitchEffect(charState.element);
                    applyGlitchEffect(otherCharState.element);
                }
            }
            charState.element.style.left = `${charState.x}px`;
            charState.element.style.top = `${charState.y}px`;
        });
        requestAnimationFrame(animateCharacters);
    }

    function applyGlitchEffect(element) {
        element.classList.add('glitch-effect');
        setTimeout(() => {
            element.classList.remove('glitch-effect');
        }, 300);
    }

    const futureTimeSpan = document.getElementById('future-time');
    const initialStartDate = new Date('2150-03-01T03:01:00Z');
    let elapsedSecondsFromInitial = 0;

    const now = new Date();
    const diffSecondsAtLoad = Math.floor((now.getTime() - initialStartDate.getTime()) / 1000);
    if (diffSecondsAtLoad >= 0) {
        elapsedSecondsFromInitial = diffSecondsAtLoad;
    }
    if (elapsedSecondsFromInitial === 0) {
        elapsedSecondsFromInitial = 1;
    }

    function updateFutureTime() {
        if (body.classList.contains('light-mode')) {
            futureTimeSpan.style.display = 'none';
            return;
        } else {
            futureTimeSpan.style.display = 'inline';
        }

        const totalSeconds = elapsedSecondsFromInitial;
        const seconds = totalSeconds % 60;
        const totalMinutes = Math.floor(totalSeconds / 60);
        const minutes = totalMinutes % 60;
        const totalHours = Math.floor(totalMinutes / 60);
        const hours = totalHours % 24;
        const totalDays = Math.floor(totalHours / 24);
        const days = totalDays % 365;
        const years = Math.floor(totalDays / 365);

        let timeText = `2150년 3월 1일`;
        if (years > 0) {
            timeText += ` ${years}년`;
        }
        if (days > 0) {
            timeText += ` ${days}일`;
        }
        timeText += ` ${String(hours).padStart(2, '0')}시 ${String(minutes).padStart(2, '0')}분 ${String(seconds).padStart(2, '0')}초`;

        futureTimeSpan.textContent = timeText;
        elapsedSecondsFromInitial++;
    }

    setInterval(updateFutureTime, 1000);
    updateFutureTime();

    requestAnimationFrame(animateCharacters);
});