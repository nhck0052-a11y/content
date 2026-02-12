const translations = {
    en: {
        app_title: "2150 AI Survival Simulation",
        main_title: "[2150 Survival Simulation] Find Your AI Partner.",
        tagline: "In a world ruled by AI, will you dominate or coexist? Analyze your tendencies to match the optimal 22nd-century career and partner (AI).",
        name_input_placeholder: "Enter ID (Name)",
        mbti_placeholder: "MBTI",
        age_placeholder: "Service Cycle (Age)",
        gender_placeholder: "Gender Protocol",
        blood_placeholder: "Fuel System (Blood)",
        interest_select_placeholder: "Select Core Interest",
        extract_button_text: "Extract Destiny",
        analysis_status_preparing: "Synchronizing Bio-Quantum Field...",
        please_wait: "Analyzing Data... Please wait...",
        analysis_report_title: "BIO-QUANTUM ANALYSIS REPORT",
        synergy_score_label: "Quantum Resonance Index:",
        home_button_text: "Reboot System",
        alert_message: "Please synchronize all biological data protocols!",
        gender_m: "XY (Man)",
        gender_f: "XX (Woman)",
        gender_n: "Non-Binary Code",
        age_10: "10s (Generation Beta)",
        age_20: "20s (Neural Pioneers)",
        age_30: "30s (Cyber Settlers)",
        age_40: "40s (Legacy Humans)",
        age_50: "50+ (Ancient Data)",
        blood_a: "Type A (Stable)",
        blood_b: "Type B (Flux)",
        blood_ab: "Type AB (Dual)",
        blood_o: "Type O (Radiant)",
        interest_art: "Art",
        interest_engineering: "Engineering",
        interest_business: "Business",
        interest_psychology: "Psychology",
        labels: {
            analysis: "Field Analysis",
            job: "Recommended Class",
            comment: "System Prophecy"
        }
    },
    ko: {
        app_title: "2150 AI 생존 시뮬레이션",
        main_title: "[2150년 생존 시뮬레이션] 당신의 AI 파트너를 찾아드립니다.",
        tagline: "AI가 지배하는 세상, 당신은 지배할 것인가, 공존할 것인가? 당신의 성향을 분석해 22세기 최적의 직업과 파트너(AI)를 매칭해 드립니다.",
        name_input_placeholder: "이름(ID)을 입력하세요",
        mbti_placeholder: "MBTI",
        age_placeholder: "가동 연한 (나이)",
        gender_placeholder: "성별 프로토콜",
        blood_placeholder: "에너지 유닛 (혈액형)",
        interest_select_placeholder: "핵심 관심 분야 선택",
        extract_button_text: "운명 추출",
        home_button_text: "시스템 재부팅",
        analysis_status_preparing: "생체 양자 필드 동기화 중...",
        please_wait: "잠시만 기다려주세요 ...",
        analysis_report_title: "생체 양자 분석 리포트 (QH-NPM)",
        synergy_score_label: "양자 공명 지수:",
        alert_message: "모든 생체 데이터 프로토콜을 입력해주세요!",
        gender_m: "XY (남자)",
        gender_f: "XX (여자)",
        gender_n: "논바이너리 코드",
        age_10: "10대 (베타 세대)",
        age_20: "20대 (뉴럴 개척자)",
        age_30: "30대 (사이버 정착민)",
        age_40: "40대 (레거시 휴먼)",
        age_50: "50대 이상 (고대 데이터)",
        blood_a: "A형 (안정형)",
        blood_b: "B형 (변동형)",
        blood_ab: "AB형 (이중형)",
        blood_o: "O형 (방사형)",
        interest_art: "예술",
        interest_engineering: "공학",
        interest_business: "경영",
        interest_psychology: "심리",
        labels: {
            analysis: "필드 분석",
            job: "권장 직업 클래스",
            comment: "시스템 예언"
        }
    }
};

// Dr. Seo's QH-NPM Model Logic Data
const QUANTUM_LOGIC = {
    blood: {
        A: { trait: { ko: "고정밀 안정 파동", en: "High-precision Stable Wave" }, keyword: { ko: "정밀함", en: "Precision" } },
        B: { trait: { ko: "변칙적 창의 파동", en: "Anomalous Creative Wave" }, keyword: { ko: "자유로움", en: "Freedom" } },
        O: { trait: { ko: "방사형 확산 파동", en: "Radiant Diffusion Wave" }, keyword: { ko: "친화력", en: "Affinity" } },
        AB: { trait: { ko: "이중 공명 분석 파동", en: "Dual Resonance Analysis Wave" }, keyword: { ko: "냉철함", en: "Cool-headedness" } }
    },
    gender: {
        M: { trait: { ko: "직진성 돌파 에너지", en: "Vector Breakthrough Energy" }, keyword: { ko: "돌파력", en: "Power" } },
        F: { trait: { ko: "네트워크 연결 에너지", en: "Matrix Connection Energy" }, keyword: { ko: "연결성", en: "Connectivity" } },
        N: { trait: { ko: "중첩 상태 하이브리드 에너지", en: "Superposition Hybrid Energy" }, keyword: { ko: "유연성", en: "Flexibility" } }
    },
    mbti: {
        NT: { protocol: { ko: "전략적 사고 회로", en: "Strategic Thinking Circuit" }, keyword: { ko: "지휘력", en: "Command" } },
        NF: { protocol: { ko: "공감각 뉴런망", en: "Empathy Neural Net" }, keyword: { ko: "공감 능력", en: "Empathy" } },
        SJ: { protocol: { ko: "데이터 보존 본능", en: "Data Archiving Instinct" }, keyword: { ko: "관리력", en: "Management" } },
        SP: { protocol: { ko: "실시간 반응 센서", en: "Real-time Response Sensor" }, keyword: { ko: "적응력", en: "Adaptability" } }
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
                padding: 2rem;
                border: 2px solid var(--border-color);
                border-radius: 15px;
                background: var(--report-bg);
                color: var(--report-text);
                font-family: 'DungGeunMo', monospace;
                text-align: left;
                box-shadow: 0 0 30px var(--box-shadow-color);
                animation: scanline 6s linear infinite;
            }
            .report-header { border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; margin-bottom: 1.5rem; text-align: center; }
            .report-title { font-size: 1.4rem; color: var(--report-text); text-shadow: 0 0 10px var(--box-shadow-color); }
            .section { margin-bottom: 1.2rem; }
            .label { color: #888; font-size: 0.8rem; text-transform: uppercase; margin-bottom: 0.3rem; display: block; }
            .content { font-size: 1.1rem; line-height: 1.5; color: var(--report-text); }
            .job-highlight { color: var(--job-color); font-size: 1.3rem; font-weight: bold; }
            .comment { font-style: italic; border-top: 1px dashed #444; padding-top: 1rem; margin-top: 1rem; }
        `;
        this.shadowRoot.appendChild(style);
    }

    displayFate(data) {
        const lang = localStorage.getItem('language') || 'ko';
        this.shadowRoot.innerHTML = `
            <style>${this.shadowRoot.querySelector('style').textContent}</style>
            <div class="report-header">
                <div class="report-title">${translations[lang].analysis_report_title}</div>
                <div style="font-size: 0.7rem; color: #666; margin-top: 0.5rem;">Neo-Seoul Bio-Quantum Lab / Dr. Seo</div>
            </div>
            <div class="section">
                <span class="label">${translations[lang].labels.analysis}</span>
                <div class="content" id="analysis-text"></div>
            </div>
            <div class="section">
                <span class="label">${translations[lang].labels.job}</span>
                <div class="content job-highlight" id="job-text"></div>
            </div>
            <div class="section">
                <span class="label">${translations[lang].labels.comment}</span>
                <div class="content comment" id="comment-text"></div>
            </div>
        `;

        this.typeEffect('analysis-text', data.analysis, 20, () => {
            this.typeEffect('job-text', data.job, 40, () => {
                this.typeEffect('comment-text', data.comment, 30, () => {
                    this.dispatchEvent(new CustomEvent('report-finished'));
                });
            });
        });
    }

    typeEffect(id, text, speed, callback) {
        const el = this.shadowRoot.getElementById(id);
        if (!el) return;
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                if (callback) callback();
            }
        }, speed);
    }
}

customElements.define('fate-result', FateResult);

const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');

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

setTheme(localStorage.getItem('theme') || 'dark');
themeToggle.addEventListener('click', () => setTheme(body.classList.contains('light-mode') ? 'dark' : 'light'));

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT') el.placeholder = translations[lang][key];
            else el.textContent = translations[lang][key];
        }
    });
    
    // Select options translation
    const selects = ['interest-select', 'mbti-select', 'age-select', 'gender-select', 'blood-select'];
    selects.forEach(id => {
        const select = document.getElementById(id);
        if (select) {
            Array.from(select.options).forEach(opt => {
                const key = opt.dataset.key;
                if (key && translations[lang][key]) {
                    opt.textContent = translations[lang][key];
                } else if (opt.value === '') {
                    const pk = id.replace('-', '_') + '_placeholder';
                    if (translations[lang][pk]) opt.textContent = translations[lang][pk];
                }
            });
        }
    });
    langToggle.textContent = lang === 'ko' ? '[ EN ]' : '[ KO ]';
}

setLanguage(localStorage.getItem('language') || 'ko');
langToggle.addEventListener('click', () => {
    body.classList.add('glitch-effect');
    setTimeout(() => { body.classList.remove('glitch-effect'); }, 300);
    setLanguage(localStorage.getItem('language') === 'ko' ? 'en' : 'ko');
});

function generateFate(mbtiStr, blood, gender) {
    const lang = localStorage.getItem('language') || 'ko';
    const mbtiGroup = mbtiStr.includes('N') && mbtiStr.includes('T') ? 'NT' :
                      mbtiStr.includes('N') && mbtiStr.includes('F') ? 'NF' :
                      mbtiStr.includes('S') && mbtiStr.includes('J') ? 'SJ' : 'SP';

    const bData = QUANTUM_LOGIC.blood[blood];
    const gData = QUANTUM_LOGIC.gender[gender];
    const mData = QUANTUM_LOGIC.mbti[mbtiGroup];

    const analysis = lang === 'ko' ? 
        `${bData.trait.ko}와 ${gData.trait.ko}가 ${mData.protocol.ko}에 동기화되었습니다.` :
        `${bData.trait.en} and ${gData.trait.en} are synchronized with the ${mData.protocol.en}.`;

    const jobs = {
        ko: {
            'NT+A+M': '행성 간 고속도로 설계 총괄자',
            'NF+B+F': '멸종 위기 외계 생물 심리 치료사',
            'SP+AB+M': '안드로이드 암시장 수리공',
            'SJ+O+F': '은하 연합 데이터 보안 아카이브 부국장',
            'NT+B+M': '테라포밍 엔진 최적화 아키텍트',
            'NF+A+F': '뉴럴 링크 공감 프로토콜 개발자',
            'default': '차원 간 자원 관리 전문가'
        },
        en: {
            'NT+A+M': 'Interstellar Highway Design Supervisor',
            'NF+B+F': 'Endangered Alien Psychologist',
            'SP+AB+M': 'Android Black Market Mechanic',
            'SJ+O+F': 'Galactic Data Security Deputy Director',
            'default': 'Inter-dimensional Resource Manager'
        }
    };

    const key = `${mbtiGroup}+${blood}+${gender}`;
    const job = jobs[lang][key] || jobs[lang]['default'];

    const comments = {
        ko: `"${bData.keyword.ko}의 파동이 ${gData.keyword.ko}과 ${mData.keyword.ko}을 만나 2150년의 거대한 운명의 흐름을 결정지었습니다."`,
        en: `"Your quantum wave of ${bData.keyword.en} combined with ${gData.keyword.en} and ${mData.keyword.en} has defined your destiny in 2150."`
    };

    return { analysis, job, comment: comments[lang], score: Math.floor(Math.random() * 30) + 70 };
}

document.getElementById('extract-button').addEventListener('click', () => {
    const inputs = {
        name: document.getElementById('name-input').value,
        mbti: document.getElementById('mbti-select').value,
        blood: document.getElementById('blood-select').value,
        gender: document.getElementById('gender-select').value,
        age: document.getElementById('age-select').value,
        interest: document.getElementById('interest-select').value
    };

    const lang = localStorage.getItem('language') || 'ko';
    if (!Object.values(inputs).every(v => v)) {
        alert(translations[lang].alert_message);
        return;
    }

    const extractButton = document.getElementById('extract-button');
    const analysisStatus = document.getElementById('analysis-status');
    const inputContainer = document.querySelector('.input-container');
    const resultContainer = document.getElementById('result-container');

    extractButton.disabled = true;
    analysisStatus.textContent = translations[lang].please_wait;
    analysisStatus.style.display = 'block';

    setTimeout(() => {
        inputContainer.style.display = 'none';
        analysisStatus.style.display = 'none';
        
        const fateData = generateFate(inputs.mbti, inputs.blood, inputs.gender);
        resultContainer.innerHTML = '';
        const report = document.createElement('fate-result');
        resultContainer.appendChild(report);
        report.displayFate(fateData);
        
        report.addEventListener('report-finished', () => {
            const synergyContainer = document.getElementById('synergy-container');
            const synergyScoreEl = document.getElementById('synergy-score');
            const healthBar = document.querySelector('.health-bar');

            synergyContainer.style.display = 'block';
            let currentScore = 0;
            const interval = setInterval(() => {
                if (currentScore < fateData.score) {
                    currentScore++;
                    healthBar.style.width = `${currentScore}%`;
                    synergyScoreEl.textContent = `${translations[lang].synergy_score_label} ${currentScore}%`;
                } else {
                    clearInterval(interval);
                    showHomeButton();
                }
            }, 30);
        });
    }, 2000);
});

function showHomeButton() {
    const lang = localStorage.getItem('language') || 'ko';
    const container = document.getElementById('global-home-button-container');
    container.innerHTML = `<button class="home-button-global" onclick="location.reload()">${translations[lang].home_button_text}</button>`;
}

function initCharacters() {
    const chars = document.querySelectorAll('.pixel-character, .light-pixel-character');
    const states = [];
    chars.forEach(char => {
        const w = char.offsetWidth || 60, h = char.offsetHeight || 60;
        const x = Math.random() * (window.innerWidth - w), y = Math.random() * (window.innerHeight - h);
        char.style.left = `${x}px`; char.style.top = `${y}px`;
        states.push({ element: char, x, y, vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2, width: w, height: h });
    });
    function animate() {
        states.forEach(s => {
            s.x += s.vx; s.y += s.vy;
            if (s.x + s.width > window.innerWidth || s.x < 0) s.vx *= -1;
            if (s.y + s.height > window.innerHeight || s.y < 0) s.vy *= -1;
            s.element.style.left = `${s.x}px`; s.element.style.top = `${s.y}px`;
        });
        requestAnimationFrame(animate);
    }
    animate();
}
window.addEventListener('load', initCharacters);

function updateTime() {
    const now = new Date();
    const f = new Date(now.getFullYear() + 126, now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
    const futureTimeElement = document.getElementById('future-time');
    if (futureTimeElement) {
        futureTimeElement.textContent = `2150 CYBERNETIC ERA - ${f.getFullYear()}-${String(f.getMonth()+1).padStart(2,'0')}-${String(f.getDate()).padStart(2,'0')} ${String(f.getHours()).padStart(2,'0')}:${String(f.getMinutes()).padStart(2,'0')}:${String(f.getSeconds()).padStart(2,'0')}`;
    }
}
setInterval(updateTime, 1000); updateTime();
