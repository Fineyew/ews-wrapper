chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'getSettings') {
    chrome.storage.local.get(['darkMode'], (data) => {
      sendResponse(data);
    });
    return true; // Keep message channel open for async response
  }

  if (request.type === 'setSetting') {
    chrome.storage.local.set({ [request.key]: request.value }, () => {
      sendResponse({ success: true });
    });
    return true;
  }
});
