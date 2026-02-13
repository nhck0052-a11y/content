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
        },
        quantum_logic: {
            blood: {
                A: "High-precision Stable Wave",
                B: "Anomalous Creative Wave",
                O: "Radiant Diffusion Wave",
                AB: "Dual Resonance Analysis Wave"
            },
            gender: {
                M: "Vector Breakthrough Energy",
                F: "Matrix Connection Energy",
                N: "Superposition Hybrid Energy"
            },
            mbti: {
                NT: "Strategic Thinking Circuit",
                NF: "Empathy Neural Net",
                SJ: "Data Archiving Instinct",
                SP: "Real-time Response Sensor"
            },
            keywords: {
                A: "Precision", B: "Freedom", O: "Affinity", AB: "Cool-headedness",
                M: "Power", F: "Connectivity", N: "Flexibility",
                NT: "Command", NF: "Empathy", SJ: "Management", SP: "Adaptability"
            },
            jobs: {
                'NT+A+M': 'Interstellar Highway Design Supervisor',
                'NF+B+F': 'Endangered Alien Psychologist',
                'SP+AB+M': 'Android Black Market Mechanic',
                'SJ+O+F': 'Galactic Data Security Deputy Director',
                'default': 'Inter-dimensional Resource Manager'
            }
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
        },
        quantum_logic: {
            blood: {
                A: "고정밀 안정 파동",
                B: "변칙적 창의 파동",
                O: "방사형 확산 파동",
                AB: "이중 공명 분석 파동"
            },
            gender: {
                M: "직진성 돌파 에너지",
                F: "네트워크 연결 에너지",
                N: "중첩 상태 하이브리드 에너지"
            },
            mbti: {
                NT: "전략적 사고 회로",
                NF: "공감각 뉴런망",
                SJ: "데이터 보존 본능",
                SP: "실시간 반응 센서"
            },
            keywords: {
                A: "정밀함", B: "자유로움", O: "친화력", AB: "냉철함",
                M: "돌파력", F: "연결성", N: "유연성",
                NT: "지휘력", NF: "공감 능력", SJ: "관리력", SP: "적응력"
            },
            jobs: {
                'NT+A+M': '행성 간 고속도로 설계 총괄자',
                'NF+B+F': '멸종 위기 외계 생물 심리 치료사',
                'SP+AB+M': '안드로이드 암시장 수리공',
                'SJ+O+F': '은하 연합 데이터 보안 아카이브 부국장',
                'default': '차원 간 자원 관리 전문가'
            }
        }
    }
};

let lastInputs = null;
let currentResonanceScore = 0;
let cyberTime = new Date(2150, 2, 1, 0, 0, 0); // 2150년 3월 1일 00:00:00

class FateResult extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                padding: 1.2rem;
                border: 2px solid var(--border-color);
                border-radius: 12px;
                background: var(--report-bg);
                color: var(--report-text);
                font-family: 'DungGeunMo', monospace;
                text-align: left;
                box-shadow: 0 0 20px var(--box-shadow-color);
                animation: scanline 6s linear infinite;
                margin-top: 1rem;
            }
            .report-header { border-bottom: 1px solid var(--border-color); padding-bottom: 0.8rem; margin-bottom: 1rem; text-align: center; }
            .report-title { font-size: 1.1rem; color: var(--report-text); text-shadow: 0 0 8px var(--box-shadow-color); }
            .section { margin-bottom: 1rem; }
            .label { color: #888; font-size: 0.7rem; text-transform: uppercase; margin-bottom: 0.2rem; display: block; }
            .content { font-size: 0.95rem; line-height: 1.4; color: var(--report-text); }
            .job-highlight { color: var(--job-color); font-size: 1.1rem; font-weight: bold; }
            .comment { font-style: italic; border-top: 1px dashed #444; padding-top: 0.8rem; margin-top: 0.8rem; font-size: 0.9rem; }
            
            /* Synergy inside box */
            #box-synergy-container { margin-top: 1.2rem; display: none; padding-top: 1rem; border-top: 1px solid var(--border-color); }
            #box-synergy-score { font-size: 1rem; margin-bottom: 0.5rem; text-align: center; }
            .box-health-bar-container { width: 100%; height: 14px; border: 1px solid var(--border-color); background: rgba(0,0,0,0.3); }
            .box-health-bar { width: 0%; height: 100%; background: var(--border-color); transition: width 0.05s linear; }
        `;
        this.shadowRoot.appendChild(style);
    }

    updateLanguage() {
        if (!lastInputs) return;
        const fateData = generateFate(lastInputs.mbti, lastInputs.blood, lastInputs.gender);
        this.renderContent(fateData, false);
        const synergyBox = this.shadowRoot.getElementById('box-synergy-container');
        if (synergyBox && synergyBox.style.display === 'block') {
            const lang = localStorage.getItem('language') || 'ko';
            this.shadowRoot.getElementById('box-synergy-score').textContent = `${translations[lang].synergy_score_label} ${currentResonanceScore}%`;
        }
    }

    displayFate(data) {
        this.renderContent(data, true);
    }

    renderContent(data, useTypewriter) {
        const lang = localStorage.getItem('language') || 'ko';
        this.shadowRoot.innerHTML = `
            <style>${this.shadowRoot.querySelector('style').textContent}</style>
            <div class="report-header">
                <div class="report-title">${translations[lang].analysis_report_title}</div>
                <div style="font-size: 0.7rem; color: #666; margin-top: 0.5rem;">Neo-Seoul Bio-Quantum Lab / Dr. Seo</div>
            </div>
            <div class="section">
                <span class="label">${translations[lang].labels.analysis}</span>
                <div class="content" id="analysis-text">${useTypewriter ? '' : data.analysis}</div>
            </div>
            <div class="section">
                <span class="label">${translations[lang].labels.job}</span>
                <div class="content job-highlight" id="job-text">${useTypewriter ? '' : data.job}</div>
            </div>
            <div class="section">
                <span class="label">${translations[lang].labels.comment}</span>
                <div class="content comment" id="comment-text">${useTypewriter ? '' : data.comment}</div>
            </div>
            <div id="box-synergy-container">
                <div id="box-synergy-score">${translations[lang].synergy_score_label} 0%</div>
                <div class="box-health-bar-container"><div class="box-health-bar" id="box-bar"></div></div>
            </div>
        `;

        if (useTypewriter) {
            this.typeEffect('analysis-text', data.analysis, 20, () => {
                this.typeEffect('job-text', data.job, 40, () => {
                    this.typeEffect('comment-text', data.comment, 30, () => {
                        this.animateSynergy(data.score);
                    });
                });
            });
        } else {
            this.shadowRoot.getElementById('box-synergy-container').style.display = 'block';
            this.shadowRoot.getElementById('box-bar').style.width = `${currentResonanceScore}%`;
        }
    }

    animateSynergy(targetScore) {
        const container = this.shadowRoot.getElementById('box-synergy-container');
        const scoreEl = this.shadowRoot.getElementById('box-synergy-score');
        const bar = this.shadowRoot.getElementById('box-bar');
        const lang = localStorage.getItem('language') || 'ko';
        
        container.style.display = 'block';
        currentResonanceScore = 0;
        const interval = setInterval(() => {
            if (currentResonanceScore < targetScore) {
                currentResonanceScore++;
                bar.style.width = `${currentResonanceScore}%`;
                scoreEl.textContent = `${translations[lang].synergy_score_label} ${currentResonanceScore}%`;
            } else {
                clearInterval(interval);
                this.dispatchEvent(new CustomEvent('report-finished'));
            }
        }, 30);
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

    const report = document.querySelector('fate-result');
    if (report) report.updateLanguage();

    const analysisStatus = document.getElementById('analysis-status');
    if (analysisStatus && analysisStatus.style.display !== 'none') {
        analysisStatus.textContent = translations[lang].please_wait;
    }

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

    const l = translations[lang].quantum_logic;
    const analysis = lang === 'ko' ? 
        `${l.blood[blood]}와 ${l.gender[gender]}가 ${l.mbti[mbtiGroup]}에 동기화되었습니다.` :
        `${l.blood[blood]} and ${l.gender[gender]} are synchronized with the ${l.mbti[mbtiGroup]}.`;

    const key = `${mbtiGroup}+${blood}+${gender}`;
    const job = l.jobs[key] || l.jobs['default'];

    const comment = lang === 'ko' ? 
        `"${l.keywords[blood]}의 파동이 ${l.keywords[gender]}과 ${l.keywords[mbtiGroup]}을 만나 2150년의 거대한 운명의 흐름을 결정지었습니다."` :
        `"Your quantum wave of ${l.keywords[blood]} combined with ${l.keywords[gender]} and ${l.keywords[mbtiGroup]} has defined your destiny in 2150."`;

    return { analysis, job, comment, score: Math.floor(Math.random() * 30) + 70 };
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

    lastInputs = inputs;
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
            showHomeButton();
        });
    }, 2000);
});

function showHomeButton() {
    const lang = localStorage.getItem('language') || 'ko';
    const container = document.getElementById('global-home-button-container');
    container.innerHTML = `<button class="home-button-global" data-key="home_button_text" onclick="location.reload()">${translations[lang].home_button_text}</button>`;
}

function triggerGlitch(el) {
    el.classList.add('char-glitch');
    setTimeout(() => el.classList.remove('char-glitch'), 300);
}

function initCharacters() {
    const chars = document.querySelectorAll('.pixel-character, .light-pixel-character');
    const states = [];
    chars.forEach(char => {
        const w = char.offsetWidth || 60, h = char.offsetHeight || 60;
        const x = Math.random() * (window.innerWidth - w), y = Math.random() * (window.innerHeight - h);
        char.style.left = `${x}px`; char.style.top = `${y}px`;
        states.push({ element: char, x, y, vx: (Math.random() - 0.5) * 3, vy: (Math.random() - 0.5) * 3, width: w, height: h });
    });

    function animate() {
        for (let i = 0; i < states.length; i++) {
            let s1 = states[i];
            s1.x += s1.vx; s1.y += s1.vy;

            if (s1.x + s1.width > window.innerWidth || s1.x < 0) {
                s1.vx *= -1;
                triggerGlitch(s1.element);
            }
            if (s1.y + s1.height > window.innerHeight || s1.y < 0) {
                s1.vy *= -1;
                triggerGlitch(s1.element);
            }

            for (let j = i + 1; j < states.length; j++) {
                let s2 = states[j];
                const dx = (s1.x + s1.width/2) - (s2.x + s2.width/2);
                const dy = (s1.y + s1.height/2) - (s2.y + s2.height/2);
                const distance = Math.sqrt(dx * dx + dy * dy);
                const minDist = (s1.width + s2.width) / 2.5;

                if (distance < minDist) {
                    s1.vx *= -1; s1.vy *= -1;
                    s2.vx *= -1; s2.vy *= -1;
                    triggerGlitch(s1.element);
                    triggerGlitch(s2.element);
                }
            }

            s1.element.style.left = `${s1.x}px`;
            s1.element.style.top = `${s1.y}px`;
        }
        requestAnimationFrame(animate);
    }
    animate();
}
window.addEventListener('load', initCharacters);

function updateTime() {
    cyberTime.setSeconds(cyberTime.getSeconds() + 1);
    const futureTimeElement = document.getElementById('future-time');
    if (futureTimeElement) {
        const y = cyberTime.getFullYear();
        const m = String(cyberTime.getMonth() + 1).padStart(2, '0');
        const d = String(cyberTime.getDate()).padStart(2, '0');
        const hh = String(cyberTime.getHours()).padStart(2, '0');
        const mm = String(cyberTime.getMinutes()).padStart(2, '0');
        const ss = String(cyberTime.getSeconds()).padStart(2, '0');
        futureTimeElement.textContent = `2150 CYBERNETIC ERA - ${y}-${m}-${d} ${hh}:${mm}:${ss}`;
    }
}
setInterval(updateTime, 1000); updateTime();
