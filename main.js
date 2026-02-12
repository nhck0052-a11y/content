class FateResult extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                padding: 1rem;
                border: 1px dashed #0f0;
                border-radius: 10px;
                margin-top: 2rem;
                text-align: center;
                color: #0f0;
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

document.getElementById('extract-button').addEventListener('click', () => {
    const name = document.getElementById('name-input').value;
    if (name) {
        const fates = [
            "You will become the first human to successfully teleport through a man-made wormhole.",
            "Your consciousness will be uploaded to the galactic network, achieving digital immortality.",
            "You will discover a new form of life on a distant exoplanet.",
            "You will invent a device that can translate the thoughts of animals into human language.",
            "You will be elected as the first ambassador to an alien civilization.",
            "You will pioneer the use of quantum entanglement for instantaneous communication across galaxies.",
            "You will lead the first mission to colonize a planet outside of our solar system."
        ];
        const randomIndex = Math.floor(Math.random() * fates.length);
        const fate = fates[randomIndex];
        let resultContainer = document.getElementById('result-container');
        resultContainer.innerHTML = '';
        const fateResult = document.createElement('fate-result');
        resultContainer.appendChild(fateResult);
        fateResult.displayFate(`${name}, your fate is: ${fate}`);
    }
});
