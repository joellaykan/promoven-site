class HeaderComponent extends HTMLElement {
    connectedCallback() {
    fetch('/resources/parts/header.html')
    .then(response => response.text())
    .then(html => {
        this.innerHTML = html;
    });
    }
}

customElements.define('header-component', HeaderComponent);

class FooterComponent extends HTMLElement {
    connectedCallback() {
    fetch('/resources/parts/footer.html')
    .then(response => response.text())
    .then(html => {
        this.innerHTML = html;
    });
    }
}

customElements.define('footer-component', FooterComponent);

// PORTFOLIO

function moveSlide(btn, direction) {
    const track = btn.parentElement.querySelector('.carousel-track');
    const images = track.querySelectorAll('img');
    const currentTransform = getComputedStyle(track).transform;
    let index = parseInt(track.dataset.index || 0);

    const total = images.length;
    index = (index + direction + total) % total;

    track.style.transform = `translateX(-${index * 100}%)`;
    track.dataset.index = index;
}