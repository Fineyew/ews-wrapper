const layoutStyleId = 'ews-wrapper-style';
const darkStyleId = 'ews-wrapper-dark-style';

function addStylesheet(id, css) {
  let style = document.getElementById(id);
  if (!style) {
    style = document.createElement('style');
    style.id = id;
    style.textContent = css;
    document.head.appendChild(style);
  } else {
    style.textContent = css;
  }
}

function removeStylesheet(id) {
  const style = document.getElementById(id);
  if (style) style.remove();
}

function applyAllStyles(enabled, darkMode) {
  if (!enabled) {
    removeStylesheet(layoutStyleId);
    removeStylesheet(darkStyleId);
    return;
  }

  addStylesheet(layoutStyleId, mainStyles);
  if (darkMode) {
    addStylesheet(darkStyleId, darkStyles);
  } else {
    removeStylesheet(darkStyleId);
  }
}

chrome.storage.local.get(['enabled', 'darkMode'], (res) => {
  applyAllStyles(res.enabled ?? true, res.darkMode ?? false);
});

chrome.storage.onChanged.addListener((changes) => {
  chrome.storage.local.get(['enabled', 'darkMode'], (res) => {
    applyAllStyles(res.enabled ?? true, res.darkMode ?? false);
  });
});

const mainStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

  html, body {
    min-height: 100vh !important;
    height: 100% !important;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #00c3ff, #742dd2) !important;
    font-family: 'Orbitron', sans-serif !important;
  }

  /* Remove original logo image (top left) */
  img[src*="CompanyLogo"],
  td[style*="Images/form-header-left"],
  td[style*="Images/form-header-back"],
  td[style*="Images/form-header-right"],
  td[style*="Images/form-footer"] {
    display: none !important;
  }

  /* Fix white bar at bottom */
  body > table:last-of-type {
    display: none !important;
  }

  /* Clean up the top nav */
  table[width="100%"] td a {
    background-color: #008ab8 !important;
    color: #fff !important;
    padding: 8px 16px;
    border-radius: 12px;
    margin-right: 6px;
    font-size: 13px;
    text-decoration: none;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
  }

  table[width="100%"] td a:hover {
    background-color: #00709e !important;
  }

  /* Add centered banner title replacing old EWS header */
  table[width="100%"] td[colspan="6"]::before {
    content: "Employee Web Services for MIP";
    display: block;
    text-align: center;
    background-color: #00aacc;
    color: white;
    font-size: 18px;
    padding: 12px 24px;
    border-radius: 18px;
    font-weight: bold;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    margin: 16px auto;
    width: fit-content;
    font-family: 'Orbitron', sans-serif !important;
  }
`;

const darkStyles = `
  body {
    background: linear-gradient(135deg, #111, #333) !important;
  }

  table[width="100%"] td a {
    background-color: #00ffff !important;
    color: #111 !important;
  }

  table[width="100%"] td a:hover {
    background-color: #009999 !important;
  }

  table[width="100%"] td[colspan="6"]::before {
    background-color: #00ffff !important;
    color: #111 !important;
  }
`;
