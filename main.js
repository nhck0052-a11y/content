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

    displayFate(fate) {
        const existingP = this.shadowRoot.querySelector('p');
        if (existingP) {
            this.shadowRoot.removeChild(existingP);
        }

        const p = document.createElement('p');
        this.shadowRoot.appendChild(p);
        let i = 0;
        const typeWriter = () => {
            if (i < fate.length) {
                p.textContent += fate.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        typeWriter();
    }
}

customElements.define('fate-result', FateResult);

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(theme) {
    // Add glitch effect
    body.classList.add('glitch-effect');
    setTimeout(() => {
        body.classList.remove('glitch-effect');
    }, 300); // Animation duration is 0.3s

    if (theme === 'light') {
        body.classList.add('light-mode');
        themeToggle.textContent = '🌙'; // Moon emoji for dark mode
    } else {
        body.classList.remove('light-mode');
        themeToggle.textContent = '🌞'; // Sun emoji for light mode
    }
    localStorage.setItem('theme', theme);
}

// Load theme preference from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme('dark'); // Always default to dark theme if no preference is saved
}


themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
});

// Language Toggle Logic
const langToggle = document.getElementById('lang-toggle');

const translations = {
    'en': {
        app_title: "2150 Quantum Data Fate Extractor",
        main_title: "2150 Quantum Data Fate Extractor",
        tagline: "Enter your name to extract your fate from the quantum realm.",
        name_input_placeholder: "Enter your name",
        extract_button_text: "Extract Fate",
        fate_prefix: (name) => `${name}, your fate is: `,
        fates: [
            "You will become the first human to successfully teleport through a man-made wormhole.",
            "Your consciousness will be uploaded to the galactic network, achieving digital immortality.",
            "You will discover a new form of life on a distant exoplanet.",
            "You will invent a device that can translate the thoughts of animals into human language.",
            "You will be elected as the first ambassador to an alien civilization.",
            "You will pioneer the use of quantum entanglement for instantaneous communication across galaxies.",
            "You will lead the first mission to colonize a planet outside of our solar system."
        ]
    },
    'ko': {
        app_title: "2150 양자 데이터 운명 추출기",
        main_title: "2150 양자 데이터 운명 추출기",
        tagline: "양자 영역에서 당신의 운명을 추출하려면 이름을 입력하세요.",
        name_input_placeholder: "이름을 입력하세요",
        extract_button_text: "운명 추출",
        fate_prefix: (name) => `${name}님, 당신의 운명은: `,
        fates: [
            "당신은 인공 웜홀을 통해 순간 이동에 성공한 최초의 인간이 될 것입니다.",
            "당신의 의식은 은하계 네트워크에 업로드되어 디지털 불멸을 얻을 것입니다.",
            "당신은 머나먼 외계 행성에서 새로운 형태의 생명체를 발견할 것입니다.",
            "당신은 동물의 생각을 인간의 언어로 번역할 수 있는 장치를 발명할 것입니다.",
            "당신은 외계 문명의 첫 번째 대사로 선출될 것입니다.",
            "당신은 은하계를 가로지르는 즉각적인 통신을 위해 양자 얽힘을 사용하는 선구자가 될 것입니다.",
            "당신은 우리 태양계 밖의 행성을 식민지화하기 위한 첫 번째 임무를 이끌 것입니다."
        ]
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'BUTTON') {
                element.textContent = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    // Update title separately as it's not a direct child
    document.title = translations[lang]['app_title'];
    langToggle.textContent = lang === 'en' ? '🇰🇷' : '🇬🇧'; // Toggle button text
    localStorage.setItem('language', lang);
}

// Load language preference from localStorage
const savedLanguage = localStorage.getItem('language');
if (savedLanguage) {
    setLanguage(savedLanguage);
} else {
    setLanguage('en'); // Default to English
}

langToggle.addEventListener('click', () => {
    const currentLang = localStorage.getItem('language') || 'en';
    const newLang = currentLang === 'en' ? 'ko' : 'en';
    setLanguage(newLang);
});


document.getElementById('extract-button').addEventListener('click', () => {
    const name = document.getElementById('name-input').value;
    if (name) {
        const currentLang = localStorage.getItem('language') || 'en';
        const fates = translations[currentLang].fates;
        const randomIndex = Math.floor(Math.random() * fates.length);
        const fate = fates[randomIndex];
        let resultContainer = document.getElementById('result-container');
        resultContainer.innerHTML = '';
        const fateResult = document.createElement('fate-result');
        resultContainer.appendChild(fateResult);
        fateResult.displayFate(translations[currentLang].fate_prefix(name) + fate);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Pixel Character Movement Logic
    const pixelCharacters = document.querySelectorAll('.pixel-character');
    const characterStates = [];

    pixelCharacters.forEach((char) => {
        // 초기 위치를 화면 내에서 랜덤하게 설정
        const initialX = Math.random() * (window.innerWidth - char.offsetWidth);
        const initialY = Math.random() * (window.innerHeight - char.offsetHeight);

        char.style.left = `${initialX}px`;
        char.style.top = `${initialY}px`;

        characterStates.push({
            element: char,
            x: initialX,
            y: initialY,
            vx: (Math.random() - 0.5) * 1, // 우주에 떠다니는 느낌을 위해 속도 감소 (-0.5 ~ 0.5 범위)
            vy: (Math.random() - 0.5) * 1, // 우주에 떠다니는 느낌을 위해 속도 감소 (-0.5 ~ 0.5 범위)
            width: char.offsetWidth,
            height: char.offsetHeight,
        });
    });

    function animateCharacters() {
        if (body.classList.contains('light-mode')) {
            // 라이트 모드일 때는 움직이지 않음
            // 캐릭터들의 마지막 위치를 고정시키고, 다시 다크모드로 돌아왔을 때 부드럽게 움직이도록 처리할 수도 있지만,
            // 여기서는 단순히 움직임을 중지
            requestAnimationFrame(animateCharacters);
            return;
        }

        characterStates.forEach((charState, i) => {
            // 위치 업데이트
            charState.x += charState.vx;
            charState.y += charState.vy;

            // 경계 충돌 감지 및 방향 전환
            if (charState.x + charState.width > window.innerWidth || charState.x < 0) {
                charState.vx *= -1; // X 방향 반전
                // 경계에 부딪혔을 때 이미지가 화면 밖으로 나가지 않도록 조정
                if (charState.x < 0) charState.x = 0;
                if (charState.x + charState.width > window.innerWidth) charState.x = window.innerWidth - charState.width;
                applyGlitchEffect(charState.element);
            }
            if (charState.y + charState.height > window.innerHeight || charState.y < 0) {
                charState.vy *= -1; // Y 방향 반전
                // 경계에 부딪혔을 때 이미지가 화면 밖으로 나가지 않도록 조정
                if (charState.y < 0) charState.y = 0;
                if (charState.y + charState.height > window.innerHeight) charState.y = window.innerHeight - charState.height;
                applyGlitchEffect(charState.element);
            }

            // 캐릭터-캐릭터 간 충돌 감지
            for (let j = i + 1; j < characterStates.length; j++) {
                const otherCharState = characterStates[j];

                // AABB 충돌 감지
                if (charState.x < otherCharState.x + otherCharState.width &&
                    charState.x + charState.width > otherCharState.x &&
                    charState.y < otherCharState.y + otherCharState.height &&
                    charState.y + charState.height > otherCharState.y) {

                    // 충돌 발생!
                    // 각 캐릭터의 방향 반전
                    charState.vx *= -1;
                    charState.vy *= -1;
                    otherCharState.vx *= -1;
                    otherCharState.vy *= -1;

                    // Glitch Effect 적용
                    applyGlitchEffect(charState.element);
                    applyGlitchEffect(otherCharState.element);

                    // 겹침 방지를 위해 약간 밀어내기 (간단한 처리)
                    // 실제 물리 엔진처럼 정확하게 처리하려면 복잡해지므로, 여기서는 단순히 방향 전환만으로 충분
                }
            }

            // 새로운 위치 적용
            charState.element.style.left = `${charState.x}px`;
            charState.element.style.top = `${charState.y}px`;
        });

        requestAnimationFrame(animateCharacters);
    }

    function applyGlitchEffect(element) {
        element.classList.add('glitch-effect');
        setTimeout(() => {
            element.classList.remove('glitch-effect');
        }, 300); // Glitch 애니메이션 지속 시간 (0.3s)
    }

    // 미래 시간 계산 및 표시 로직
    const futureTimeSpan = document.getElementById('future-time');
    // 2150년 3월 1일 3시 1분 0초 (UTC 기준 - 정확한 시작 시점을 위해 Z 사용)
    const initialStartDate = new Date('2150-03-01T03:01:00Z');
    let elapsedSecondsFromInitial = 0; // 초기 시작 시점으로부터 경과한 가상 초

    // 페이지 로드 시 initialStartDate와 현재 시간의 차이를 계산하여 elapsedSecondsFromInitial 초기화
    // 이는 페이지 새로고침 시에도 시간이 0부터 시작하지 않고 이어서 증가하도록 함
    const now = new Date();
    const diffSecondsAtLoad = Math.floor((now.getTime() - initialStartDate.getTime()) / 1000);
    if (diffSecondsAtLoad > 0) {
        elapsedSecondsFromInitial = diffSecondsAtLoad;
    }


    function updateFutureTime() {
        if (body.classList.contains('light-mode')) {
            futureTimeSpan.style.display = 'none'; // 라이트 모드에서는 숨김
            return;
        } else {
            futureTimeSpan.style.display = 'inline'; // 다크 모드에서는 표시
        }

        // elapsedSecondsFromInitial를 1초마다 증가
        elapsedSecondsFromInitial++;

        // 이제 elapsedSecondsFromInitial을 기반으로 시간 계산
        const totalSeconds = elapsedSecondsFromInitial;
        const seconds = totalSeconds % 60;
        const totalMinutes = Math.floor(totalSeconds / 60);
        const minutes = totalMinutes % 60;
        const totalHours = Math.floor(totalMinutes / 60);
        const hours = totalHours % 24;
        const totalDays = Math.floor(totalHours / 24);
        const days = totalDays % 365; // 대략적인 연도 계산을 위해 365일 기준으로
        const years = Math.floor(totalDays / 365);

        futureTimeSpan.textContent = `2150년 ${years}년 ${days}일 ${String(hours).padStart(2, '0')}시 ${String(minutes).padStart(2, '0')}분 ${String(seconds).padStart(2, '0')}초`;
    }

    // 1초마다 업데이트
    setInterval(updateFutureTime, 1000);
    // 초기 호출
    updateFutureTime();

    // 애니메이션 시작
    requestAnimationFrame(animateCharacters);
});

