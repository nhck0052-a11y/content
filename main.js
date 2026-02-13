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
        analysis_report_title: "NEO-SEOUL AGENT ID CARD",
        synergy_score_label: "AI Job Suitability:",
        home_button_text: "Reboot System",
        download_button_text: "Issue Official ID",
        pdf_button_text: "Download Tactical Log (16:9 PDF)",
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
            job: "Assigned Class",
            comment: "System Prophecy",
            origin: "Quantum Thesis"
        },
        quantum_logic: {
            blood: { A: "High-precision Stable Wave", B: "Anomalous Creative Wave", O: "Radiant Diffusion Wave", AB: "Dual Resonance Analysis Wave" },
            gender: { M: "Vector Breakthrough Energy", F: "Matrix Connection Energy", N: "Superposition Hybrid Energy" },
            mbti: { NT: "Strategic Thinking Circuit", NF: "Empathy Neural Net", SJ: "Data Archiving Instinct", SP: "Real-time Response Sensor" },
            keywords: { A: "Precision", B: "Freedom", O: "Affinity", AB: "Cool-headedness", M: "Power", F: "Connectivity", N: "Flexibility", NT: "Command", NF: "Empathy", SJ: "Management", SP: "Adaptability" },
            jobs: { 'NT+A+M': 'Interstellar Highway Design Supervisor', 'NF+B+F': 'Endangered Alien Psychologist', 'SP+AB+M': 'Android Black Market Mechanic', 'SJ+O+F': 'Galactic Data Security Deputy Director', 'default': 'Inter-dimensional Resource Manager' }
        },
        deep_analysis_title: "OFFICIAL SUITABILITY REPORT",
        close_button: "Return to Main",
        share_btn: "📡 SHARE",
        click_hint: "Click here to view analysis summary and share! ↓"
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
        download_button_text: "시민증 정식 발급",
        pdf_button_text: "전술 보고서 PDF 저장 (16:9)",
        analysis_status_preparing: "생체 양자 필드 동기화 중...",
        please_wait: "잠시만 기다려주세요 ...",
        analysis_report_title: "네오-서울 요원 시민증 (QH-NPM)",
        synergy_score_label: "AI 직업 적합도:",
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
            job: "할당 직업 클래스",
            comment: "시스템 예언",
            origin: "양자 논문 출처"
        },
        quantum_logic: {
            blood: { A: "고정밀 안정 파동", B: "변칙적 창의 파동", O: "방사형 확산 파동", AB: "이중 공명 분석 파동" },
            gender: { M: "직진성 돌파 에너지", F: "네트워크 연결 에너지", N: "중첩 상태 하이브리드 에너지" },
            mbti: { NT: "전략적 사고 회로", NF: "공감각 뉴런망", SJ: "데이터 보존 본능", SP: "실시간 반응 센서" },
            keywords: { A: "정밀함", B: "자유로움", O: "친화력", AB: "냉철함", M: "돌파력", F: "연결성", N: "유연성", NT: "지휘력", NF: "공감 능력", SJ: "관리력", SP: "적응력" },
            jobs: { 'NT+A+M': '행성 간 고속도로 설계 총괄자', 'NF+B+F': '멸종 위기 외계 생물 심리 치료사', 'SP+AB+M': '안드로이드 암시장 수리공', 'SJ+O+F': '은하 연합 데이터 보안 아카이브 부국장', 'default': '차원 간 자원 관리 전문가' }
        },
        deep_analysis_title: "정식 직업 적합도 보고서",
        close_button: "시민증으로 돌아가기",
        share_btn: "📡 공유",
        click_hint: "이곳을 클릭하여 분석근거 요약을 확인하고 공유해보세요! ↓"
    }
};

let lastInputs = null;
let cyberTime = new Date(2150, 2, 1, 0, 0, 0);

class FateResult extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    getStyle() {
        return `
            :host { display: block; padding: 2px; background: var(--border-color); border-radius: 8px; box-shadow: 0 0 30px var(--box-shadow-color); margin-top: 1.5rem; overflow: hidden; position: relative; }
            .id-card { background: #000; color: #0f0; padding: 1.5rem; border-radius: 6px; font-family: 'DungGeunMo', monospace; position: relative; border: 2px solid rgba(0, 255, 0, 0.2); }
            .card-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f0; padding-bottom: 0.8rem; margin-bottom: 1rem; }
            .card-title { font-size: 1rem; font-weight: bold; color: #0f0; }
            .agent-photo { width: 80px; height: 80px; border: 2px solid #0f0; float: right; margin-left: 1rem; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; font-size: 2rem; }
            .section { margin-bottom: 1.2rem; clear: both; }
            .label { color: #0f0; font-size: 0.75rem; text-transform: uppercase; margin-bottom: 0.3rem; display: block; opacity: 0.7; }
            .content { font-size: 1rem; line-height: 1.4; color: #0f0; }
            .job-highlight { color: #ff0; font-size: 1.2rem; font-weight: bold; text-shadow: 0 0 5px #ff0; }
            .synergy-box { margin-top: 1.5rem; }
            .bar-container { width: 100%; height: 20px; border: 1px solid #0f0; background: rgba(0,0,0,0.4); position: relative; }
            .bar-fill { height: 100%; background: #0f0; width: 0%; }
            .bar-text { position: absolute; width: 100%; text-align: center; top: 0; font-size: 0.8rem; line-height: 20px; color: #fff; mix-blend-mode: difference; }
            
            .hint-container { margin-top: 2rem; text-align: center; animation: bounce 1.5s infinite; }
            .hint-text { color: #ffff00; font-size: 0.8rem; text-shadow: 0 0 5px rgba(255, 255, 0, 0.5); margin-bottom: 0.5rem; display: block; }
            @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }

            .download-btn { width: 100%; padding: 0.8rem; background: #030; color: #0f0; border: 2px solid #0f0; cursor: pointer; font-family: 'DungGeunMo', monospace; border-radius: 4px; font-size: 1rem; }
            .download-btn:hover { background: #0f0; color: #000; }
            
            #reasoning-modal { display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #000; z-index: 100; padding: 1.5rem; box-sizing: border-box; flex-direction: column; overflow-y: auto; color: #0f0; }
            .modal-active { display: flex !important; animation: slideUp 0.4s ease-out; }
            @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
            .reasoning-text { font-size: 0.85rem; line-height: 1.6; white-space: pre-wrap; margin-top: 1rem; border-top: 1px solid rgba(0,255,0,0.2); padding-top: 1rem; color: #0f0; }
            .summary-info { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; padding: 0.8rem; border: 1px solid #0f0; background: rgba(0,255,0,0.05); }
            
            /* PDF Notebook Style (16:9) */
            #pdf-export-wrapper { 
                width: 1280px; 
                height: 720px; 
                background: #0a0a0a; 
                display: flex; 
                padding: 40px; 
                box-sizing: border-box; 
                gap: 40px; 
                position: absolute; 
                left: -9999px; 
                border: 12px solid #1a1a1a;
                border-radius: 20px;
                background-image: 
                    linear-gradient(rgba(0, 255, 0, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 255, 0, 0.05) 1px, transparent 1px);
                background-size: 30px 30px; /* 디지털 눈금 종이 느낌 */
            }
            .pdf-page { 
                flex: 1; 
                display: flex; 
                flex-direction: column; 
                background: rgba(0, 20, 0, 0.8);
                border: 2px solid #0f0;
                border-radius: 10px;
                padding: 30px;
                position: relative;
                box-shadow: 0 0 20px rgba(0, 255, 0, 0.1);
            }
            .pdf-fold {
                position: absolute;
                left: 50%;
                top: 0;
                width: 2px;
                height: 100%;
                background: linear-gradient(to bottom, transparent, rgba(0, 255, 0, 0.3), transparent);
                transform: translateX(-50%);
            }
            .confidential-stamp {
                position: absolute;
                bottom: 20px;
                right: 20px;
                border: 3px solid #f00;
                color: #f00;
                padding: 5px 15px;
                font-size: 1.2rem;
                font-weight: bold;
                transform: rotate(-15deg);
                opacity: 0.6;
                border-radius: 5px;
                pointer-events: none;
            }
        `;
    }
    displayFate(data) {
        const lang = localStorage.getItem('language') || 'ko';
        this.shadowRoot.innerHTML = `
            <style>${this.getStyle()}</style>
            
            <div class="id-card" id="main-card">
                <div class="card-header"><div class="card-title">${translations[lang].analysis_report_title}</div></div>
                <div class="agent-photo">👤</div>
                <div class="section"><span class="label">AGENT NAME</span><div class="content">${lastInputs.name}</div></div>
                <div class="section"><span class="label">${translations[lang].labels.job}</span><div class="content job-highlight">${data.job}</div></div>
                <div class="synergy-box">
                    <span class="label">${translations[lang].synergy_score_label}</span>
                    <div class="bar-container"><div class="bar-fill" id="id-bar"></div><div class="bar-text" id="id-score">0%</div></div>
                </div>
                <div class="hint-container">
                    <span class="hint-text">${translations[lang].click_hint}</span>
                    <button class="download-btn" id="open-reasoning">${translations[lang].download_button_text}</button>
                </div>
            </div>
            
            <div id="reasoning-modal">
                <div class="card-header"><div class="card-title">${translations[lang].deep_analysis_title}</div></div>
                <div class="summary-info">
                    <div style="font-size: 1.5rem;">👤</div>
                    <div><div style="font-size: 0.9rem; font-weight: bold; color:#0f0;">${lastInputs.name} 요원</div><div style="font-size: 0.75rem; color: #ff0;">${data.job}</div></div>
                </div>
                <div class="reasoning-text" id="reasoning-content"></div>
                <div style="margin-top: auto;">
                    <button class="download-btn" style="background:#050" id="download-pdf">${translations[lang].pdf_button_text}</button>
                    <button class="download-btn" style="margin-top:0.5rem" id="close-reasoning">${translations[lang].close_button}</button>
                </div>
            </div>

            <!-- PDF 전용 16:9 통합 공책 디자인 (숨김) -->
            <div id="pdf-export-wrapper">
                <div class="pdf-fold"></div>
                <div class="pdf-page">
                    <div class="card-header"><div class="card-title" style="font-size:1.5rem;">[ AGENT ID: ${lastInputs.name} ]</div></div>
                    <div style="margin-top:20px; display:flex; gap:20px;">
                        <div style="width:150px; height:150px; border:3px solid #0f0; display:flex; align-items:center; justify-content:center; font-size:4rem;">👤</div>
                        <div>
                            <div class="section"><span class="label">ASSIGNED CLASS</span><div class="job-highlight" style="font-size:2rem;">${data.job}</div></div>
                            <div class="section"><span class="label">SYNC RATE</span><div style="font-size:1.8rem; color:#0f0;">${data.score}%</div></div>
                        </div>
                    </div>
                    <div style="margin-top:auto; font-size:0.9rem; line-height:1.6; border-top:1px solid #0f0; padding-top:20px;">
                        ${data.analysis}
                    </div>
                    <div class="confidential-stamp">NEO-SEOUL</div>
                </div>
                <div class="pdf-page">
                    <div class="card-header"><div class="card-title" style="font-size:1.5rem;">[ TACTICAL ANALYSIS ]</div></div>
                    <div class="reasoning-text" style="font-size:1.1rem; border:none;" id="pdf-reasoning-text"></div>
                    <div style="margin-top:auto; font-size:0.8rem; opacity:0.6; color:#0f0; border-top:1px dashed #0f0; padding-top:10px;">
                        Bio-Quantum Logic Sync: COMPLETE <br>
                        Reference: DNA Mapping Vol.12, Neo-Seoul Quantum Lab
                    </div>
                    <div class="confidential-stamp" style="border-color:#0f0; color:#0f0; right:auto; left:20px;">VERIFIED</div>
                </div>
            </div>
        `;
        this.animateSynergy(data.score);
        this.setupModal(data);
    }
    setupModal(data) {
        const modal = this.shadowRoot.getElementById('reasoning-modal');
        const openBtn = this.shadowRoot.getElementById('open-reasoning');
        const closeBtn = this.shadowRoot.getElementById('close-reasoning');
        const pdfBtn = this.shadowRoot.getElementById('download-pdf');
        const content = this.shadowRoot.getElementById('reasoning-content');
        const pdfText = this.shadowRoot.getElementById('pdf-reasoning-text');
        const lang = localStorage.getItem('language') || 'ko';
        const mbtiGroup = lastInputs.mbti.includes('N') && lastInputs.mbti.includes('T') ? 'NT' : lastInputs.mbti.includes('N') && lastInputs.mbti.includes('F') ? 'NF' : lastInputs.mbti.includes('S') && lastInputs.mbti.includes('J') ? 'SJ' : 'SP';
        const l = translations[lang].quantum_logic;
        const reason = lang === 'ko' ? `분석 결과, 귀하의 생체 에너지 유닛(${lastInputs.blood}형)은 ${l.blood[lastInputs.blood]} 특성을 띄고 있으며, 이는 ${l.mbti[mbtiGroup]} 사고 회로와 만났을 때 가장 안정적인 양자 도약을 발생시킵니다. \n\n특히 '${data.job}' 클래스에 필요한 ${l.keywords[lastInputs.gender]} 에너지가 귀하의 프로토콜과 98.2% 일치함을 확인했습니다. 2150년 시뮬레이션에서 AI 파트너와의 높은 공명 지수가 보장됩니다.` : `Analysis shows that your bio-unit (Type ${lastInputs.blood}) combined with the ${l.mbti[mbtiGroup]} circuit creates the most stable quantum leaps. \n\nThe ${l.keywords[lastInputs.gender]} energy for the '${data.job}' class matches your protocol by 98.2%. High resonance with AI partners is guaranteed.`;
        
        openBtn.onclick = () => { modal.classList.add('modal-active'); content.textContent = reason; pdfText.textContent = reason; };
        closeBtn.onclick = () => { modal.classList.remove('modal-active'); };
        
        pdfBtn.onclick = () => {
            const element = this.shadowRoot.getElementById('pdf-export-wrapper');
            const opt = { 
                margin: 0, filename: `NeoSeoul_Log_${lastInputs.name}.pdf`, 
                image: { type: 'jpeg', quality: 1 }, 
                html2canvas: { scale: 1.5, backgroundColor: '#000', useCORS: true }, 
                jsPDF: { unit: 'px', format: [1280, 720], orientation: 'landscape' } 
            };
            html2pdf().set(opt).from(element).save();
        };
    }
    animateSynergy(targetScore) {
        const bar = this.shadowRoot.getElementById('id-bar');
        const scoreEl = this.shadowRoot.getElementById('id-score');
        let current = 0;
        const interval = setInterval(() => {
            if (current < targetScore) { current++; if (bar) bar.style.width = `${current}%`; if (scoreEl) scoreEl.textContent = `${current}%`; }
            else { clearInterval(interval); this.dispatchEvent(new CustomEvent('report-finished')); }
        }, 30);
    }
}
customElements.define('fate-result', FateResult);

const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const shareToggle = document.getElementById('share-toggle');
const shareMenu = document.getElementById('share-menu');

shareToggle.addEventListener('click', () => shareMenu.classList.toggle('collapsed'));

function setTheme(theme) {
    if (theme === 'light') { body.classList.add('light-mode'); themeToggle.textContent = '[ DARK ]'; }
    else { body.classList.remove('light-mode'); themeToggle.textContent = '[ LIGHT ]'; }
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
    shareToggle.textContent = translations[lang].share_btn;
    langToggle.textContent = lang === 'ko' ? '[ EN ]' : '[ KO ]';
}
setLanguage(localStorage.getItem('language') || 'ko');
langToggle.addEventListener('click', () => {
    body.classList.add('glitch-effect');
    setTimeout(() => body.classList.remove('glitch-effect'), 300);
    setLanguage(localStorage.getItem('language') === 'ko' ? 'en' : 'ko');
});

document.getElementById('extract-button').addEventListener('click', () => {
    const inputs = { name: document.getElementById('name-input').value, mbti: document.getElementById('mbti-select').value, blood: document.getElementById('blood-select').value, gender: document.getElementById('gender-select').value, age: document.getElementById('age-select').value, interest: document.getElementById('interest-select').value };
    const lang = localStorage.getItem('language') || 'ko';
    if (!Object.values(inputs).every(v => v)) { alert(translations[lang].alert_message); return; }
    lastInputs = inputs;
    const btn = document.getElementById('extract-button');
    const status = document.getElementById('analysis-status');
    const inputCont = document.querySelector('.input-container');
    const resCont = document.getElementById('result-container');
    btn.disabled = true;
    status.textContent = translations[lang].please_wait;
    status.style.display = 'block';
    setTimeout(() => {
        inputCont.style.display = 'none'; status.style.display = 'none'; resCont.innerHTML = '';
        const report = document.createElement('fate-result'); resCont.appendChild(report);
        report.displayFate(generateFate(inputs.mbti, inputs.blood, inputs.gender));
        const homeCont = document.getElementById('global-home-button-container');
        homeCont.innerHTML = `<button class="home-button-global" onclick="location.reload()">${translations[lang].home_button_text}</button>`;
    }, 2000);
});

function generateFate(mbtiStr, blood, gender) {
    const lang = localStorage.getItem('language') || 'ko';
    const mbtiGroup = mbtiStr.includes('N') && mbtiStr.includes('T') ? 'NT' : mbtiStr.includes('N') && mbtiStr.includes('F') ? 'NF' : mbtiStr.includes('S') && mbtiStr.includes('J') ? 'SJ' : 'SP';
    const l = translations[lang].quantum_logic;
    const analysis = lang === 'ko' ? `${l.blood[blood]}와 ${l.gender[gender]}가 ${l.mbti[mbtiGroup]}에 동기화되었습니다.` : `${l.blood[blood]} and ${l.gender[gender]} are synchronized with the ${l.mbti[mbtiGroup]}.`;
    const job = l.jobs[`${mbtiGroup}+${blood}+${gender}`] || l.jobs['default'];
    return { analysis, job, score: Math.floor(Math.random() * 30) + 70 };
}

function triggerGlitch(el) { el.classList.add('char-glitch'); setTimeout(() => el.classList.remove('char-glitch'), 300); }

function initCharacters() {
    const chars = document.querySelectorAll('.pixel-character, .light-pixel-character');
    const states = [];
    chars.forEach(char => {
        const x = Math.random() * (window.innerWidth - 60), y = Math.random() * (window.innerHeight - 60);
        char.style.left = `${x}px`; char.style.top = `${y}px`;
        states.push({ element: char, x, y, vx: (Math.random() - 0.5) * 3, vy: (Math.random() - 0.5) * 3 });
    });
    function animate() {
        states.forEach(s1 => {
            s1.x += s1.vx; s1.y += s1.vy;
            if (s1.x + 60 > window.innerWidth || s1.x < 0) { s1.vx *= -1; triggerGlitch(s1.element); }
            if (s1.y + 60 > window.innerHeight || s1.y < 0) { s1.vy *= -1; triggerGlitch(s1.element); }
            s1.element.style.left = `${s1.x}px`; s1.element.style.top = `${s1.y}px`;
        });
        requestAnimationFrame(animate);
    }
    animate();
}
window.addEventListener('load', initCharacters);

function updateTime() {
    cyberTime.setSeconds(cyberTime.getSeconds() + 1);
    const el = document.getElementById('future-time');
    if (el) {
        const y = cyberTime.getFullYear(), m = String(cyberTime.getMonth() + 1).padStart(2, '0'), d = String(cyberTime.getDate()).padStart(2, '0');
        const hh = String(cyberTime.getHours()).padStart(2, '0'), mm = String(cyberTime.getMinutes()).padStart(2, '0'), ss = String(cyberTime.getSeconds()).padStart(2, '0');
        el.textContent = `2150 ERA - ${y}-${m}-${d} ${hh}:${mm}:${ss}`;
    }
}
setInterval(updateTime, 1000); updateTime();
