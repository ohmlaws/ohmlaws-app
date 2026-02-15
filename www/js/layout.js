// --- 1. SVG ICONS ---
const icons = {
    menu: `<svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`,
    // Moon for Light Mode (Click to go Dark)
    moon: `<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>`,
    // Sun for Dark Mode (Click to go Light)
    sun: `<svg viewBox="0 0 24 24"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/></svg>`,
    home: `<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
    book: `<svg viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>`,
    tag: `<svg viewBox="0 0 24 24"><path d="M20 10V3h-7L4.5 11.5a1 1 0 0 0 0 1.4l5.6 5.6a1 1 0 0 0 1.4 0L20 10zM12 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>`,
    archive: `<svg viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5z"/></svg>`,
    user: `<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
    question: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>`
};

// --- 2. THEME LOGIC ---

// Check storage immediately to prevent "flash" of wrong color
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

function toggleTheme() {
    const body = document.body;
    const toggleBtn = document.getElementById("themeBtn");
    
    // Toggle Class
    body.classList.toggle("light-mode");
    
    // Save preference and Update Icon
    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        toggleBtn.innerHTML = icons.moon; // Show moon to go back to dark
    } else {
        localStorage.setItem("theme", "dark");
        toggleBtn.innerHTML = icons.sun; // Show sun to go back to light
    }
}

// --- 3. HTML COMPONENTS ---

const HeaderHTML = `
    <header>
        <button class="menu-btn" onclick="toggleSidebar()">${icons.menu}</button>
        <div class="header-title">OhmLaws</div>
        
        <div class="theme-toggle" id="themeBtn" onclick="toggleTheme()">
            ${document.body.classList.contains('light-mode') ? icons.moon : icons.sun}
        </div>
    </header>
    <div class="overlay" onclick="toggleSidebar()"></div>
`;

const SidebarHTML = `
    <div class="sidebar" id="appSidebar">
        <div class="sidebar-header">
            <div class="sidebar-logo">
                <img src="assets/avatar.png" alt="Logo">
            </div>
            <div class="sidebar-title">OhmLaws</div>
            <div class="sidebar-subtitle">Electrify your learning</div>
        </div>
        <div class="nav-links">
            <a href="index.html" class="nav-item"> <div class="nav-icon">${icons.home}</div> HOME </a>
            <a href="firstyear.html" class="nav-item"> <div class="nav-icon">${icons.book}</div> FIRST YEAR </a>
            <a href="secondyear.html" class="nav-item"> <div class="nav-icon">${icons.book}</div> SECOND YEAR </a>
            <a href="privacy-policy.html" class="nav-item"> <div class="nav-icon">${icons.user}</div> PRIVACY POLICY </a>
           
        </div>
        <div class="sidebar-footer">
            <div>Made with 🧡 by Roni</div> 
        </div>
    </div>
`;

const FooterHTML = `
    <footer>
        &copy; 2026 <a href="https://ohmlaws.github.io" style="color:#ff7300">Ohmlaws</a>. All rights reserved.
    </footer>
`;

// --- 4. INJECT & LAYOUT ---

function loadLayout() {
    // Inject content
    document.body.insertAdjacentHTML('afterbegin', SidebarHTML + HeaderHTML);
    document.body.insertAdjacentHTML('beforeend', FooterHTML);

    // Highlight active page
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll(".nav-item");
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Fix SVG sizes
    document.querySelectorAll('svg').forEach(svg => {
        svg.style.width = '24px';
        svg.style.height = '24px';
        svg.style.fill = 'currentColor';
    });
}

function toggleSidebar() {
    const sidebar = document.getElementById("appSidebar");
    const overlay = document.querySelector(".overlay");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}

(function() {
    var viewport = document.querySelector('meta[name="viewport"]');
    
    if (!viewport) {
        viewport = document.createElement('meta');
        viewport.name = "viewport";
        document.head.appendChild(viewport);
    }

    viewport.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
})();
// Run Layout
loadLayout();
