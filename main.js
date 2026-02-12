const translations = {
    en: {
        app_title: "AI Coexistence Aptitude Tester",
        main_title: "AI Coexistence Aptitude Tester",
        tagline: "This tester analyzes which AI field humanity should choose to grow in 2150.",
        name_input_placeholder: "Enter your name",
        extract_button_text: "Extract Destiny",
        analysis_status_preparing: "Preparing analysis...",
        analysis_messages: [
            "Analyzing your neural patterns...",
            "Consulting the AI Oracle...",
            "Calculating future probabilities...",
            "Synthesizing your destiny with AI trends...",
            "Finalizing the prophecy..."
        ],
        fates: [
            "Your destiny is intertwined with AI in the realm of innovation. You will pioneer new forms of creative expression.",
            "You are destined to be a muse for AI, guiding its algorithmic processes to create masterpieces.",
            "Your path is in building the very infrastructure of AI. You will design the next generation of intelligent systems.",
            "You will engineer the perfect symbiotic relationship between humans and AI, creating a future of seamless integration.",
            "You possess the vision to integrate AI into global markets, leading ventures that redefine industries.",
            "Your knack for strategy will be amplified by AI, allowing you to optimize complex systems and drive innovation.",
            "Your empathy will be crucial in developing AI that understands and supports human well-being.",
            "You will unlock the secrets of the human mind with AI, fostering a new era of cognitive understanding.",
            "Your future with AI is bright and full of unexpected opportunities."
        ],
        fate_prefix: (name) => `Your AI destiny, ${name}: `,
        alert_message: "Please enter your name!"
    },
    ko: {
        app_title: "AI 공존 적성 검사기",
        main_title: "AI 공존 적성 검사기",
        tagline: "인류가 2150년 어떤 AI 분야를 선택해 성장시켜야 할지 분석해주는 검사기입니다.",
        name_input_placeholder: "이름을 입력하세요",
        extract_button_text: "운명 추출",
        analysis_status_preparing: "분석 준비 중...",
        analysis_messages: [
            "당신의 뉴럴 패턴을 분석 중...",
            "AI 오라클에게 자문을 구하는 중...",
            "미래 확률을 계산 중...",
            "당신의 운명을 AI 트렌드와 융합 중...",
            "예언을 최종 확정 중..."
        ],
        fates: [
            "당신은 AI와 함께 혁신적인 미래를 만들어갈 선구자가 될 것입니다.",
            "AI의 도움으로 당신의 잠재력을 최대한 발휘하고 위대한 업적을 달성할 것입니다.",
            "당신의 이름은 AI 역사에 길이 남을 것입니다.",
            "AI가 당신의 가장 든든한 조력자가 되어 성공의 길을 열어줄 것입니다.",
            "미지의 AI 세계를 탐험하며 놀라운 발견을 하게 될 것입니다."
        ],
        fate_prefix: (name) => `${name}님의 AI 운세: `,
        alert_message: "이름을 입력해주세요!"
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

    displayFate({ fate }) { // Simplified to only take fate
        this.shadowRoot.innerHTML = ''; // Clear previous content

        const fateP = document.createElement('p');
        fateP.textContent = fate;
        this.shadowRoot.appendChild(fateP);
    }
}

customElements.define('fate-result', FateResult);

const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle'); // Define langToggle here
const body = document.body;

function setTheme(theme) {
    body.classList.add('glitch-effect');
    setTimeout(() => {
        body.classList.remove('glitch-effect');
    }, 300);

    if (theme === 'light') {
        body.classList.add('light-mode');
        themeToggle.textContent = '🌙';
    } else {
        body.classList.remove('light-mode');
        themeToggle.textContent = '🌞';
    }
    localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme('dark'); // Default to dark mode
}

themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

function setLanguage(lang) {
    body.classList.add('glitch-effect');
    setTimeout(() => {
        body.classList.remove('glitch-effect');
    }, 300);

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

    if (lang === 'ko') {
        langToggle.textContent = '🇺🇸';
    } else {
        langToggle.textContent = '🇰🇷';
    }
}

const currentLang = localStorage.getItem('language') || 'ko'; // Default to Korean
setLanguage(currentLang);

langToggle.addEventListener('click', () => {
    const currentLang = localStorage.getItem('language') || 'ko'; // Read current language inside the event listener
    const newLang = currentLang === 'ko' ? 'en' : 'ko';
    setLanguage(newLang);
});

document.getElementById('extract-button').addEventListener('click', () => {
    const name = document.getElementById('name-input').value;
    const extractButton = document.getElementById('extract-button');
    const analysisStatus = document.getElementById('analysis-status');

    if (!name) {
        alert(translations[localStorage.getItem('language') || 'ko'].alert_message);
        return;
    }

    extractButton.disabled = true;
    analysisStatus.style.display = 'block';

    const lang = localStorage.getItem('language') || 'ko';
    const messages = translations[lang].analysis_messages;
    let messageIndex = 0;

    const analysisMessageInterval = setInterval(() => {
        analysisStatus.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    }, 1500);

    const fates = translations[lang].fates;
    const randomIndex = Math.floor(Math.random() * fates.length);
    const selectedFate = fates[randomIndex];

    let resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';
    const fateResult = document.createElement('fate-result');
    resultContainer.appendChild(fateResult);
    fateResult.displayFate({ fate: `${translations[lang].fate_prefix(name)}${selectedFate}` });

    const typingDuration = (selectedFate.length + name.length + translations[lang].fate_prefix(name).length) * 50;

    setTimeout(() => {
        extractButton.disabled = false;
        clearInterval(analysisMessageInterval);
        analysisStatus.style.display = 'none';
    }, typingDuration + 100);
});

document.addEventListener('DOMContentLoaded', () => {
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
