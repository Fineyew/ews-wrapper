const enabledToggle = document.getElementById('enabledToggle');
const darkToggle = document.getElementById('darkModeToggle');

chrome.storage.local.get(['enabled', 'darkMode'], (data) => {
  enabledToggle.checked = data.enabled ?? true;
  darkToggle.checked = data.darkMode ?? false;
});

enabledToggle.addEventListener('change', () => {
  chrome.storage.local.set({ enabled: enabledToggle.checked });
});

darkToggle.addEventListener('change', () => {
  chrome.storage.local.set({ darkMode: darkToggle.checked });
});
