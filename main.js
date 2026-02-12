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
    setTheme('en'); // Default to English
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
    const analysisStatus = document.getElementById('analysis-status'); // Get reference to analysis status div

    if (!name || !interest) { // Validate both name and interest
        alert("이름과 관심 분야를 모두 입력/선택해주세요!");
        return;
    }

    // Disable button
    extractButton.disabled = true;

    // Show analysis status
    analysisStatus.style.display = 'block';
    // analysisStatus.classList.add('flow-text'); // REMOVED THIS LINE

    const currentLang = localStorage.getItem('language') || 'en';
    const messages = translations[currentLang].analysis_messages;
    let messageIndex = 0;

    // Start cycling through analysis messages
    const analysisMessageInterval = setInterval(() => {
        analysisStatus.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    }, 1500); // Change message every 1.5 seconds


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

    // Calculate typing effect duration
    const totalTextLength = formattedFate.length + selectedFateData.optimal_ai_partner.length + selectedFateData.future_career.length;
    const typingDuration = (totalTextLength * 50) + (2 * 500); // 50ms per char + 2 pauses for new lines

    // After typing effect is done, enable button and hide analysis status
    setTimeout(() => {
        extractButton.disabled = false;
        clearInterval(analysisMessageInterval); // Stop cycling messages
        analysisStatus.style.display = 'none';
        // analysisStatus.classList.remove('flow-text'); // REMOVED THIS LINE
    }, typingDuration + 100); // 100ms extra buffer
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
