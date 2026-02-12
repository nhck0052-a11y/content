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

    displayFate({ fate, optimal_ai_partner, future_career }) {
        this.shadowRoot.innerHTML = ''; // Clear previous content

        const fateP = document.createElement('p');
        const partnerP = document.createElement('p');
        const careerP = document.createElement('p');

        this.shadowRoot.appendChild(fateP);
        this.shadowRoot.appendChild(partnerP);
        this.shadowRoot.appendChild(careerP);

        let fullText = [
            fate,
            `\n최적의 AI 파트너: ${optimal_ai_partner}`,
            `\n미래 직업: ${future_career}`
        ];
        let currentTextIndex = 0;
        let charIndex = 0;

        const typeWriter = () => {
            if (currentTextIndex < fullText.length) {
                if (charIndex < fullText[currentTextIndex].length) {
                    let targetElement;
                    if (currentTextIndex === 0) {
                        targetElement = fateP;
                    } else if (currentTextIndex === 1) {
                        targetElement = partnerP;
                    } else {
                        targetElement = careerP;
                    }
                    targetElement.textContent += fullText[currentTextIndex].charAt(charIndex);
                    charIndex++;
                    setTimeout(typeWriter, 50);
                } else {
                    currentTextIndex++;
                    charIndex = 0;
                    setTimeout(typeWriter, 500); // Pause before typing next section
                }
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
        app_title: "AI Coexistence Aptitude Test",
        main_title: "AI Coexistence Aptitude Test",
        tagline: "This test analyzes which AI field humanity should choose to grow with by 2150.",
        name_input_placeholder: "Enter your name",
        interest_select_placeholder: "Select your interest",
        extract_button_text: "Analyze Aptitude",
        fate_prefix: (name, interest) => `${name}, your optimal AI field for coexistence is ${interest}: `,
        fates: {
            "art": [
                {
                    fate: "You will pioneer AI-driven generative art, creating new forms of human-AI collaboration in creative fields.",
                    optimal_ai_partner: "Creativity AI (e.g., DeepDream, DALL-E variants)",
                    future_career: "AI-Enhanced Generative Artist"
                },
                {
                    fate: "Your work will integrate AI to preserve and evolve cultural heritage, making it accessible to future generations.",
                    optimal_ai_partner: "Cultural Preservation AI (e.g., historical data analysis, restoration AI)",
                    future_career: "AI-Driven Cultural Archivist"
                }
            ],
            "engineering": [
                {
                    fate: "You will lead the development of ethical AI systems, ensuring their safe and beneficial integration into society.",
                    optimal_ai_partner: "Ethics & Compliance AI (e.g., AI bias detection, regulatory AI)",
                    future_career: "AI Ethics Engineer"
                },
                {
                    fate: "Your innovations will enable AI to solve complex global challenges, from climate change to resource management.",
                    optimal_ai_partner: "Global Impact AI (e.g., climate modeling AI, resource optimization AI)",
                    future_career: "AI Solutions Architect for Global Challenges"
                }
            ],
            "business": [
                {
                    fate: "You will revolutionize industries by implementing AI-powered strategies that promote sustainable growth and human well-being.",
                    optimal_ai_partner: "Sustainable Business AI (e.g., market trend prediction, ethical supply chain AI)",
                    future_career: "AI-Driven Business Strategist"
                },
                {
                    fate: "Your leadership will establish new economic models where AI optimizes productivity while maximizing human potential.",
                    optimal_ai_partner: "Human Potential Optimization AI (e.g., personalized learning AI, workforce management AI)",
                    future_career: "AI-Integrated Economic Model Designer"
                }
            ],
            "psychology": [
                {
                    fate: "You will design AI companions that enhance human mental health and emotional well-being, fostering deeper human-AI bonds.",
                    optimal_ai_partner: "Empathy & Wellness AI (e.g., therapeutic chatbots, emotional support AI)",
                    future_career: "AI-Assisted Mental Health Specialist"
                },
                {
                    fate: "Your research will unlock new insights into human consciousness through AI, leading to a profound understanding of ourselves.",
                    optimal_ai_partner: "Consciousness Research AI (e.g., neurological data analysis, cognitive modeling AI)",
                    future_career: "AI-Powered Cognitive Scientist"
                }
            ],
            "default": [
                {
                    fate: "You will contribute to the harmonious integration of AI into daily life, making technology a true partner for humanity.",
                    optimal_ai_partner: "General Coexistence AI (e.g., smart home AI, personal assistant AI)",
                    future_career: "AI Integration Consultant"
                },
                {
                    fate: "Your vision will guide the next generation in understanding and leveraging AI for a brighter collective future.",
                    optimal_ai_partner: "Educational AI (e.g., personalized tutor AI, knowledge sharing AI)",
                    future_career: "AI Literacy Educator"
                }
            ]
        }
    },
    'ko': {
        app_title: "AI 공존 적성 검사기",
        main_title: "AI 공존 적성 검사기",
        tagline: "인류가 2150년 어떤 AI 분야를 선택해 성장시켜야 할지 분석해주는 검사기입니다.",
        name_input_placeholder: "이름을 입력하세요",
        interest_select_placeholder: "관심 분야 선택",
        extract_button_text: "적성 분석",
        fate_prefix: (name, interest) => `${name}님, ${interest} 분야에서 당신의 AI 공존 최적 적성은: `,
        fates: {
            "art": [
                {
                    fate: "당신은 AI 기반 생성 예술을 개척하여 창의적인 분야에서 인간-AI 협업의 새로운 형태를 창조할 것입니다.",
                    optimal_ai_partner: "창의성 AI (예: DeepDream, DALL-E 변형)",
                    future_career: "AI 강화 생성 예술가"
                },
                {
                    fate: "당신의 작업은 AI를 통합하여 문화 유산을 보존하고 발전시켜 미래 세대가 접근할 수 있도록 할 것입니다.",
                    optimal_ai_partner: "문화 보존 AI (예: 역사 데이터 분석, 복원 AI)",
                    future_career: "AI 기반 문화 기록 보관인"
                }
            ],
            "engineering": [
                {
                    fate: "당신은 윤리적인 AI 시스템 개발을 주도하여 사회에 안전하고 유익한 통합을 보장할 것입니다.",
                    optimal_ai_partner: "윤리 및 규정 준수 AI (예: AI 편향 감지, 규제 AI)",
                    future_career: "AI 윤리 엔지니어"
                },
                {
                    fate: "당신의 혁신은 AI가 기후 변화에서 자원 관리에 이르기까지 복잡한 글로벌 문제를 해결할 수 있도록 할 것입니다.",
                    optimal_ai_partner: "글로벌 영향 AI (예: 기후 모델링 AI, 자원 최적화 AI)",
                    future_career: "글로벌 과제 AI 솔루션 설계자"
                }
            ],
            "business": [
                {
                    fate: "당신은 지속 가능한 성장과 인간 복지를 촉진하는 AI 기반 전략을 구현하여 산업을 혁신할 것입니다.",
                    optimal_ai_partner: "지속 가능한 비즈니스 AI (예: 시장 동향 예측, 윤리적 공급망 AI)",
                    future_career: "AI 기반 비즈니스 전략가"
                },
                {
                    fate: "당신의 리더십은 AI가 생산성을 최적화하는 동시에 인간의 잠재력을 극대화하는 새로운 경제 모델을 구축할 것입니다.",
                    optimal_ai_partner: "인간 잠재력 최적화 AI (예: 개인화된 학습 AI, 인력 관리 AI)",
                    future_career: "AI 통합 경제 모델 디자이너"
                }
            ],
            "psychology": [
                {
                    fate: "당신은 인간의 정신 건강과 정서적 웰빙을 향상시키는 AI 동반자를 설계하여 인간-AI 관계를 심화시킬 것입니다.",
                    optimal_ai_partner: "공감 및 웰빙 AI (예: 치료 챗봇, 정서적 지원 AI)",
                    future_career: "AI 보조 정신 건강 전문가"
                },
                {
                    fate: "당신의 연구는 AI를 통해 인간 의식에 대한 새로운 통찰력을 열어 우리 자신에 대한 심오한 이해로 이끌 것입니다.",
                    optimal_ai_partner: "의식 연구 AI (예: 신경학적 데이터 분석, 인지 모델링 AI)",
                    future_career: "AI 기반 인지 과학자"
                }
            ],
            "default": [
                {
                    fate: "당신은 AI의 일상 생활 통합에 기여하여 기술을 인류의 진정한 파트너로 만들 것입니다.",
                    optimal_ai_partner: "일반 공존 AI (예: 스마트 홈 AI, 개인 비서 AI)",
                    future_career: "AI 통합 컨설턴트"
                },
                {
                    fate: "당신의 비전은 더 밝은 공동의 미래를 위해 AI를 이해하고 활용하는 다음 세대를 이끌 것입니다.",
                    optimal_ai_partner: "교육 AI (예: 개인화된 튜터 AI, 지식 공유 AI)",
                    future_career: "AI 리터러시 교육자"
                }
            ]
        }
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
            } else if (element.tagName === 'SELECT' && key === 'interest_select_placeholder') {
                 // Update the default selected option text
                const defaultOption = element.querySelector('option[disabled][selected]');
                if (defaultOption) {
                    defaultOption.textContent = translations[lang][key];
                }
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
    const interest = document.getElementById('interest-select').value; // Get selected interest
    const extractButton = document.getElementById('extract-button');

    if (!name || !interest) { // Validate both name and interest
        alert("이름과 관심 분야를 모두 입력/선택해주세요!");
        return;
    }

    // 버튼 비활성화
    extractButton.disabled = true;

    const currentLang = localStorage.getItem('language') || 'en';
    const interestFates = translations[currentLang].fates[interest] || translations[currentLang].fates["default"];
    const randomIndex = Math.floor(Math.random() * interestFates.length);
    const selectedFateData = interestFates[randomIndex]; // This will be an object

    const formattedFate = translations[currentLang].fate_prefix(name, interest) + selectedFateData.fate;

    let resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';
    const fateResult = document.createElement('fate-result');
    resultContainer.appendChild(fateResult);
    fateResult.displayFate({
        fate: formattedFate,
        optimal_ai_partner: selectedFateData.optimal_ai_partner,
        future_career: selectedFateData.future_career
    });

    // 타이핑 효과가 끝나는 시간 계산
    const typingDuration = (formattedFate.length + selectedFateData.optimal_ai_partner.length + selectedFateData.future_career.length + 50) * 50; // Estimate based on total text length

    // 타이핑 효과 완료 후 버튼 활성화
    setTimeout(() => {
        extractButton.disabled = false;
    }, typingDuration + 100); // 100ms 여유 시간 추가
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
    if (diffSecondsAtLoad >= 0) { // 0초 이상이면 초기화
        elapsedSecondsFromInitial = diffSecondsAtLoad;
    }
    // 카운트를 1초부터 시작하기 위해, 만약 elapsedSecondsFromInitial이 0이라면 1로 시작
    if (elapsedSecondsFromInitial === 0) {
        elapsedSecondsFromInitial = 1;
    }


    function updateFutureTime() {
        if (body.classList.contains('light-mode')) {
            futureTimeSpan.style.display = 'none'; // 라이트 모드에서는 숨김
            return;
        } else {
            futureTimeSpan.style.display = 'inline'; // 다크 모드에서는 표시
        }

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

        let timeText = `2150년 3월 1일`; // "2150년 3월 1일"은 항상 표시
        if (years > 0) {
            timeText += ` ${years}년`;
        }
        if (days > 0) {
            timeText += ` ${days}일`;
        }
        timeText += ` ${String(hours).padStart(2, '0')}시 ${String(minutes).padStart(2, '0')}분 ${String(seconds).padStart(2, '0')}초`;

        futureTimeSpan.textContent = timeText;

        // elapsedSecondsFromInitial를 1초마다 증가 (다음 틱을 위해)
        elapsedSecondsFromInitial++;
    }

    // 1초마다 업데이트
    setInterval(updateFutureTime, 1000);
    // 초기 호출
    updateFutureTime();

    // 애니메이션 시작
    requestAnimationFrame(animateCharacters);
});
