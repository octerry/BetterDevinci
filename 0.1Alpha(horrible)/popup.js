document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("changeColor").addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const cssUrl = chrome.runtime.getURL('styles.css');
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: insertCssLink,
                args: [cssUrl]
            })
        })
    })
})

function insertCssLink(cssUrl) {
    if (document.querySelector('link[data-injected-by="better-devinci"]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssUrl;
    link.setAttribute('data-injected-by', 'better-devinci');
    (document.head || document.documentElement).appendChild(link);
}