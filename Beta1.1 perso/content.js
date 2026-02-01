// Coucou toi qui regarde dans le code
// 
// 
// /‾‾‾‾‾\ /‾‾‾‾‾] [‾‾‾‾‾‾‾‾] |‾‾‾‾‾] |‾‾‾‾‾\ |‾‾‾‾‾\ |‾| /‾/
// | |‾| | | |‾‾‾   ‾‾|  |‾‾  | |‾‾‾  |     | |     | | |/ /
// | | | | | |        |  |    |  ___] |     / |     / |  _/
// | |_| | | |___     |  |    | |___  | |\ \  | |\ \  | |
// \_____/ \_____]    |__|    |_____] |_| \_\ |_| \_\ |_|
// MADE ON EARTH BY HUMANS

// On vérifie sur le darkmode est activé sur le navigateur
const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
var darkMode = isDarkMode()


// On récupère l'image de profil
const profilAvatar = document.getElementsByClassName('avatar')[0];

if (profilAvatar) { profilAvatar.src = chrome.runtime.getURL('sources/profil.svg') }

// On récupère les choix de l'utilisateur
let nameValue = '';
let colorValue = '#363777';

if (chrome.storage) {
    chrome.storage.local.get(["darkmodeEnabled", "nameValue", "colorValue"], (result) => {
        if (darkMode) { // On récupère les choix si ils existent
            if (darkMode != result.darkmodeEnabled) {
                darkMode = result.darkmodeEnabled;
            }
            nameValue = result.nameValue;
            colorValue = result.colorValue;
            updateUserPreferences()
        } else { // Sinon on les défini nous même
            chrome.storage.local.set({
                darkmodeEnabled: darkMode,
                nameValue: profilAvatar.alt,
                colorValue: '#363777',
            });
        }
        colorDarkmode()
        insertGlobalTextWhite()
    });
}

// MYDEVINCI
// CHANGER LES IMAGES
// On récupère les boutons à gauches
let leftButtons = document.getElementsByClassName('accordion-toggle');
if (leftButtons.length == 0) {
    const leftParent = document.getElementsByClassName('nav-link')
    if (leftParent.length != 0) {
        leftButtons = [];
        for (const element of leftParent) {
            leftButtons.push(element.children[0]);
        }
    }
}
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
}

for (let i = 0; i < leftSources.length; i++) {
    if (leftImages && leftImages[i]) {
        leftImages[i].src = leftSources[i]
    }
}

// On récupère le logo devinci sur la page de connexion
const logoLogin = document.getElementsByClassName('form-login')[0]
if (logoLogin) {
    const logoDevinci = logoLogin.children[0].children[0];
    
    logoDevinci.src = chrome.runtime.getURL('sources/logoConnexion.png')
    logoDevinci.style.width = '150px'
    logoDevinci.style.height = '116px'
}
const logoDevinciADFS = document.getElementById('companyLogo')
if (logoDevinciADFS) {
    logoDevinciADFS.src = chrome.runtime.getURL('sources/logoConnexion.png');
    logoDevinciADFS.style.width = '150px'
    logoDevinciADFS.style.height = '116px'
}

// On récupère le bouton relevé de présence
const presenceButton = document.getElementsByClassName('breadcrumb')[0];
if (presenceButton) {
    const presenceChild = presenceButton.children[ presenceButton.children.length - 1 ];
    if (presenceChild) {
        let presenceImg = presenceChild.children[0];
        if (presenceImg) {
            presenceImg = presenceImg.children[0];

            if (presenceImg) { presenceImg.src = chrome.runtime.getURL('sources/clock.svg') }

            if (presenceButton) { presenceButton.style.borderBottom = 'none' };
        }
    }
}

// On récupère le logo devinci commun
const commonLogo = document.getElementsByClassName('navbar-brand-logo img-responsive hidden-xs-down');
if (commonLogo) {
    for (const element of commonLogo) {
        element.src = chrome.runtime.getURL('sources/logoCommon.png')
    }
}

// On récupère le bouton avec le drapeau du langage
const languageButton = document.getElementsByClassName('dropdown-toggle')[0];
let languageImg = null;
if (languageButton) {
    languageImg = languageButton.children[0];
}

if (languageImg) {
    languageImg.src = chrome.runtime.getURL('sources/flagFrench.svg');
    languageImg.style.width = '20px';
    languageImg.style.height = '15px';
};

// Retirer le fond au logo de l'école
const bgSchoolLogo = document.getElementsByClassName('schoole_pastil')[0];

if (bgSchoolLogo) {
    bgSchoolLogo.style.border = "none";
    bgSchoolLogo.style.backgroundColor = "transparent";
};

// Cadriage bordure de la page des salles
const tableSalles = document.getElementsByClassName('table table-condensed table-bordered')[0];

if (tableSalles) { tableSalles.style.border = '#1px solid #000' };

// Fond stylisé du header warning
const headerWarning = document.getElementsByClassName('alert-warning')[0];

if (headerWarning) { 
    headerWarning.style.borderRadius = '10px' 
    headerWarning.style.border = '1px #c98667 solid'
};


// DVL
// Changer des border
// Récupérer la barre de recherche
const searchBar = document.getElementById('searchinput-697f8b3acea9a697f8b3ac5a053');

if (searchBar) {
    searchBar.style.borderColor = '#fff'
}

// Changer les couleurs des petits éléments de recherche
const moduleElements = document.getElementsByClassName('text-muted muted d-flex flex-wrap');

for (element of moduleElements) {
    element.style.backgroundColor = '#000'
}



// CHANGER LES COULEURS
// On récupère tout sur la page
const all = document.getElementsByTagName("*");

function updateUserPreferences() {
    const helloText = document.getElementsByClassName('devinci-plugin-title')[0];
    const mainColorElements = document.getElementsByClassName('mainColorElement')
    const userParent = document.getElementsByClassName('user')[0]
    let username = null;
    if (userParent) {
        username = userParent.children[1];
    }
    const username2 = document.getElementsByClassName('navbar-inner-title')[0];

    for (element of mainColorElements) {
        element.style.backgroundColor = colorValue;
    }

    if (username) { username.textContent = nameValue };
    if (username2) { username2.textContent = nameValue };

    if (helloText) {
        const helloSpan = helloText.children[0];

        helloSpan.textContent = `Bienvenue ${nameValue} !`
    }
}

function colorDarkmode() {
    for (const element of all) {
        let el = element;
        let bg = getComputedStyle(el).backgroundColor;

        if (el.classList[0] != 'slide_title' && darkMode) {
            el.style.color = '#fff'
        }

        while ((bg === '' || bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)') && el.parentElement) {
            el = el.parentElement;
            bg = getComputedStyle(el).backgroundColor;
        }

        if (bg) {
            if (bg == 'rgb(0, 61, 102)' || bg == 'rgb(59, 89, 152)' || bg == 'rgb(38, 114, 236)') {
                element.classList.add('mainColorElement')
                element.style.backgroundColor = colorValue;
            }

            if (bg == 'rgb(204, 229, 255)' || bg == 'rgb(209, 236, 241)' || bg == 'rgb(217, 233, 255)') {
                if (darkMode) {
                    element.style.backgroundColor = '#6179a7';
                } else {
                    element.style.backgroundColor = '#7dabff';
                }
            }

            if (bg == 'rgb(223, 240, 216)' || bg == 'rgb(212, 237, 218)') {
                if (darkMode) {
                    element.style.backgroundColor = '#4a7948';
                } else {
                    element.style.backgroundColor = '#c8ffc6';
                }
            }

            if (bg == 'rgb(255, 243, 205)') {
                if (darkMode) {
                    element.style.backgroundColor = '#6e6935';
                } else {
                    element.style.backgroundColor = '#fffac0';
                }
            }

            if (bg == 'rgb(249, 246, 158)') {
                if (darkMode) {
                    element.style.backgroundColor = '#63583c';
                } else {
                    element.style.backgroundColor = '#ffefc5';
                }
            } 
            
            if (bg == 'rgb(255, 249, 215)') {
                if (darkMode) {
                    element.style.backgroundColor = '#68432e';
                } else {
                    element.style.backgroundColor = '#ffddca';
                }
            }

            if (bg == 'rgb(255, 235, 232)') {
                if (darkMode) {
                    element.style.backgroundColor = '#7e2929';
                } else {
                    element.style.backgroundColor = '#ffc5c5';
                }
            }

            if (bg == 'rgb(248, 201, 196)') {
                if (darkMode) {
                    element.style.backgroundColor = '#531313'
                } else {
                    element.style.backgroundColor = '#ffbfbf'
                }
            }



            if (bg == 'rgb(229, 229, 229)' || bg == 'rgb(238, 238, 238)' || bg == 'rgb(228, 234, 236)') {
                if (darkMode) {
                    element.style.backgroundColor = '#1f1f1f';
                }
            }

            if (bg == 'rgb(250, 251, 251)' || bg == 'rgb(250, 250, 250)' || bg == 'rgb(252, 252, 252)') {
                if (darkMode) {
                    element.style.backgroundColor = '#131313';
                }
            }

            if (bg == 'rgb(233, 234, 237)' || bg == 'rgb(240, 241, 246)' || bg == 'rgb(241, 244, 245)') {
                if (darkMode) {
                    element.style.backgroundColor = '#080808';
                }
            }

            if (bg == 'rgb(240, 248, 255)' || bg == 'rgb(236, 239, 246)') {
                if (darkMode) {
                    element.style.backgroundColor = '#070707';
                }
            }

            if (bg == 'rgb(229, 229, 229)' || bg == 'rgb(212, 212, 212)') {
                if (darkMode) {
                    element.style.backgroundColor = '#292929';
                }
            }

            if (bg == 'rgb(242, 242, 242)' || bg == 'rgb(247, 247, 247)' || bg == 'rgb(249, 249, 249)') {
                if (darkMode) {
                    element.style.backgroundColor = '#0a0a0a';
                }
            }

            if (bg == 'rgb(248, 249, 250)' || bg == 'rgb(229, 231, 238)' || bg == 'rgb(243, 244, 245)' || bg == 'rgb(245, 245, 245)') {
                if (darkMode) {
                    element.style.backgroundColor = '#1d1d1d'
                }
            }

            if (bg == 'rgba(243, 244, 245, 0.4)') {
                if (darkMode) {
                    element.style.backgroundColor = '#00000060'
                }
            }

            if (bg == 'rgba(255, 255, 255, 0.9)') {
                if (darkMode) {
                    element.style.backgroundColor = '#000000E0'
                }
            }

            if (bg == 'rgb(255, 255, 255)') {
                if (darkMode) {
                    element.style.backgroundColor = '#101010';
                }
            }
        }
    }
    console.log('jy suis')
}

// window.addEventListener("resize", function() {
// })

const BD_TEXT_ID = 'bd-global-text-white';
function insertGlobalTextWhite(){
    if (document.getElementById(BD_TEXT_ID)) return;
    const s = document.createElement('style');
    s.id = BD_TEXT_ID;
    if (darkMode) {
        s.textContent = `
            *:not(.slide_title)::before, *:not(.slide_title)::after {
                color: #ffffff !important; -webkit-text-fill-color: #ffffff !important;
            }

            svg text, svg tspan {
                fill: #ffffff !important;
            }
        `;
    }
    try { (document.head || document.documentElement).appendChild(s); } catch (e) {}
};

// Surcharge des arrière-plans et images des pseudo-éléments (::before / ::after)
const BD_PSEUDO_ID = 'bd-pseudo-bg';
(function insertPseudoBgOverride(){
    if (document.getElementById(BD_PSEUDO_ID)) return;
    const s = document.createElement('style');
    s.id = BD_PSEUDO_ID;
    s.textContent = `
        /* Forcer le fond des pseudo-éléments et désactiver images/ombres/transitions */
        *:not(.slide_title)::before, *:not(.slide_title)::after {
            background: inherit !important;
            background-color: inherit !important;
            background-image: none !important;
            box-shadow: none !important;
            border: none !important;
            transition: none !important;
            -webkit-transition: none !important;
            mix-blend-mode: normal !important;
        }

        /* Si des pseudo-éléments utilisent des SVG/text, on force aussi */
        *:not(.slide_title)::before svg, *:not(.slide_title)::after svg {
            fill: currentColor !important;
        }

        .oldTechnology::before,
        .oldTechnology::after {
            background-color: black !important;
            background: black !important;
        }
    `;
    try { (document.head || document.documentElement).appendChild(s); } catch (e) {}

    // Fonction pour injecter le même style dans un ShadowRoot
    function addStyleToShadow(shadowRoot) {
        try {
            if (!shadowRoot) return;
            if (shadowRoot.querySelector && shadowRoot.querySelector('#' + BD_PSEUDO_ID)) return;
            const ss = document.createElement('style');
            ss.id = BD_PSEUDO_ID;
            ss.textContent = s.textContent;
            shadowRoot.appendChild(ss);
        } catch (e) {}
    }

    // Injecter dans les shadow roots existants
    document.querySelectorAll('*').forEach(el => {
        if (el.shadowRoot) addStyleToShadow(el.shadowRoot);
    });

    // Observer pour les nouveaux éléments / shadow roots dynamiques
    const mo = new MutationObserver(muts => {
        for (const m of muts) {
            for (const n of (m.addedNodes || [])) {
                try {
                    if (n.nodeType === 1) {
                        if (n.shadowRoot) addStyleToShadow(n.shadowRoot);
                        // aussi injecter si des enfants avec shadowRoot apparaissent
                        n.querySelectorAll && n.querySelectorAll('*').forEach(c => { if (c.shadowRoot) addStyleToShadow(c.shadowRoot); });
                    }
                } catch (e) {}
            }
        }
    });
    try { mo.observe(document.documentElement || document, { childList: true, subtree: true }); } catch (e) {}

})();