chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "CHANGE_TRUC") {
    darkMode = message.value

    updateDarkmode()
  }
});

// On vérifie sur le darkmode est activé sur le navigateur
const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
var darkMode = isDarkMode()

// On récupère tout sur la page
const all = document.getElementsByTagName("*");

// On récupère les boutons à gauches
const leftButtons = document.getElementsByClassName('accordion-toggle');
const leftImages = [];
const leftSources = [
    chrome.runtime.getURL('sources/house.svg'),
    chrome.runtime.getURL('sources/help.svg'),
    chrome.runtime.getURL('sources/windows.svg'),
    chrome.runtime.getURL('sources/computer.svg'),
    chrome.runtime.getURL('sources/book.svg'),
    chrome.runtime.getURL('sources/virus.svg'),
    chrome.runtime.getURL('sources/report.svg'),
    chrome.runtime.getURL('sources/brain.svg'),
    chrome.runtime.getURL('sources/star.svg'),
    chrome.runtime.getURL('sources/light-bulb.svg'),
    chrome.runtime.getURL('sources/heart.svg'),
    chrome.runtime.getURL('sources/printer.svg'),
    chrome.runtime.getURL('sources/door.svg'),
    chrome.runtime.getURL('sources/flag.svg')
]

for (element of leftButtons) { // On descends dans les enfants pour aller chercher les icons
    leftImages.push(element.children[0])
    console.log(leftImages)
}

for (let i = 0; i < leftSources.length; i++) {
    leftImages[i].src = leftSources[i]
}

function clearBorders(node) {
    if (!node || !node.style) return;
    try {
        node.style.setProperty('border', '0', 'important');
    } catch (e) {}
    node.style.borderStyle = 'none';
    node.style.borderWidth = '0';
    node.style.borderColor = 'transparent';
    node.style.outline = 'none';
    node.style.boxShadow = 'none';
}

function updateDarkmode() {
    if (darkMode) {
        enableDarkmode()
    }
}

function enableDarkmode() {
    colorDarkmode();
}

function colorDarkmode() {
    for (const element of all) {
        let el = element;
        let bg = getComputedStyle(el).backgroundColor;

        if (el.classList[0] != 'slide_title') {
            el.style.color = '#fff'
        }

        while ((bg === '' || bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)') && el.parentElement) {
            el = el.parentElement;
            bg = getComputedStyle(el).backgroundColor;
        }

        if (bg) {
            if (bg == 'rgb(0, 61, 102)') {
                element.style.backgroundColor = '#363777';
            }

            if (bg == 'rgb(204, 229, 255)') {
                element.style.backgroundColor = '#6179a7';
            }

            if (bg == 'rgb(209, 236, 241)') {
                element.style.backgroundColor = '#6179a7';
            }

            if (bg == 'rgb(217, 233, 255)') {
                element.style.backgroundColor = '#6197a7';
            }

            if (bg == 'rgb(223, 240, 216)') {
                element.style.backgroundColor = '#4a7948';
            }

            if (bg == 'rgb(212, 237, 218)') {
                element.style.backgroundColor = '#4a7948';
            }

            if (bg == 'rgb(255, 243, 205)') {
                element.style.backgroundColor = '#6e6935';
            }

            if (bg == 'rgb(249, 246, 158)') {
                element.style.backgroundColor = '#63583c';
            }
            
            if (bg == 'rgb(255, 249, 215)') {
                element.style.backgroundColor = '#68432e'
            }

            if (bg == 'rgb(255, 235, 232)') {
                element.style.backgroundColor = '#7e2929';
            }



            if (bg == 'rgb(238, 238, 238)') {
                element.style.backgroundColor = '#1f1f1f';
            }

            if (bg == 'rgb(250, 251, 251)') {
                element.style.backgroundColor = '#131313';
            }

            if (bg == 'rgb(250, 250, 250)') {
                element.style.backgroundColor = '#131313';
            }

            if (bg == 'rgb(252, 252, 252)') {
                element.style.backgroundColor = '#131313';
            }
            
            if (bg == 'rgb(233, 234, 237)') {
                element.style.backgroundColor = '#080808';
            }

            if (bg == 'rgb(240, 241, 246)') {
                element.style.backgroundColor = '#222222';
            }

            if (bg == 'rgb(240, 248, 255)') {
                element.style.backgroundColor = '#070707';
            }

            if (bg == 'rgb(236, 239, 246)') {
                element.style.backgroundColor = '#070707';
            }

            if (bg == 'rgb(229, 229, 229)') {
                element.style.backgroundColor = '#292929';
            }

            if (bg == 'rgb(241, 244, 245)') {
                element.style.backgroundColor = '#080808';
            }

            if (bg == 'rgb(212, 212, 212)') {
                element.style.backgroundColor = '#292929';
            }

            if (bg == 'rgb(242, 242, 242)') {
                element.style.backgroundColor = '#0a0a0a';
            }

            if (bg == 'rgb(247, 247, 247)') {
                element.style.backgroundColor = '#0a0a0a';
            }

            if (bg == 'rgb(249, 249, 249)') {
                element.style.backgroundColor = '#0a0a0a';
            }

            if (bg == 'rgb(248, 201, 196)') {
                element.style.backgroundColor = '#531313'
            }

            if (bg == 'rgb(248, 249, 250)') {
                element.style.backgroundColor = '#1d1d1d'
            }

            if (bg == 'rgb(229, 231, 238)') {
                element.style.backgroundColor = ''
            }

            if (bg == 'rgb(243, 244, 245)') {
                element.style.backgroundColor = '#1d1d1d'
            }

            if (bg == 'rgb(245, 245, 245)') {
                element.style.backgroundColor = '#000'
            }

            if (bg == 'rgba(243, 244, 245, 0.4)') {
                element.style.backgroundColor = '#00000060'
            }

            if (bg == 'rgba(255, 255, 255, 0.9)') {
                element.style.backgroundColor = '#000000E0'
            }

            if (bg == 'rgb(255, 255, 255)') {
                element.style.backgroundColor = '#101010';
            }
        }
    }
}

// window.addEventListener("resize", function() {
// })

const BD_TEXT_ID = 'bd-global-text-white';
(function insertGlobalTextWhite(){
    if (document.getElementById(BD_TEXT_ID)) return;
    const s = document.createElement('style');
    s.id = BD_TEXT_ID;
    s.textContent = `
        *:not(.slide_title)::before, *:not(.slide_title)::after {
            color: #ffffff !important; -webkit-text-fill-color: #ffffff !important;
        }

        svg text, svg tspan {
            fill: #ffffff !important;
        }
    `;
    try { (document.head || document.documentElement).appendChild(s); } catch (e) {}
})();

updateDarkmode()