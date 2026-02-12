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
