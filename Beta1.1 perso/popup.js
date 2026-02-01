// Coucou toi qui regarde dans le code
// 
// 
// /‾‾‾‾‾\ /‾‾‾‾‾] [‾‾‾‾‾‾‾‾] |‾‾‾‾‾] |‾‾‾‾‾\ |‾‾‾‾‾\ |‾| /‾/
// | |‾| | | |‾‾‾   ‾‾|  |‾‾  | |‾‾‾  |     | |     | | |/ /
// | | | | | |        |  |    |  ___] |     / |     / |  _/
// | |_| | | |___     |  |    | |___  | |\ \  | |\ \  | |
// \_____/ \_____]    |__|    |_____] |_| \_\ |_| \_\ |_|
// MADE ON EARTH BY HUMANS

const toggle1 = document.getElementById('checkbox');
const toggle2 = document.getElementById('checkbox2');
const nameInput = document.getElementById('nameInput');
let nameValue = 'Votre nom';
const colorInput = document.getElementById('colorInput');
let colorValue = '#363777';
const saveButton = document.getElementById('saveButton');

if (chrome.storage) {
    chrome.storage.local.get(["darkmodeEnabled", "nameValue", "colorValue"], (result) => {
        toggle1.checked = result.darkmodeEnabled;
        update()

        if (result.nameValue) {
            nameValue = result.nameValue;
            toggle2.checked = true;
            updateNameInput();
        } else {
            toggle2.checked = false;
            updateNameInput();
        };

        colorValue = result.colorValue;
        colorInput.value = result.colorValue;
    });
}


nameInput.disabled = !toggle2.checked

const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
toggle1.checked = isDarkMode();

function update() {
    updateNameInput()
    if (toggle1.checked) {
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
    }
}

update();

toggle1.addEventListener('click', function() {
    update()
})

toggle2.addEventListener('click', function() {
    nameInput.disabled = !toggle2.checked
    updateNameInput()
})

colorInput.addEventListener('change', function() {
    colorValue = colorInput.value;
})

saveButton.addEventListener('click', function() {
    let temp = ''
    if (toggle2.checked) { 
        temp = nameInput.value
    } else {
        temp = ''
    }

    if (chrome.storage) {
        chrome.storage.local.set({
            darkmodeEnabled: toggle1.checked,
            nameValue: temp,
            colorValue: colorValue,
        });
    }
})

function updateNameInput() {
    if (toggle2.checked) {
        if (toggle1.checked) {
            nameInput.style.backgroundColor = '#202020'
            nameInput.style.color = '#fff'
            nameInput.value = nameValue
        } else {
            nameInput.style.backgroundColor = '#e0e0e0'
            nameInput.style.color = '#000000'
            nameInput.value = nameValue
        }
    } else {
        if (toggle1.checked) {
            nameValue = nameInput.value
            nameInput.style.backgroundColor = '#121212'
            nameInput.style.color = '#4b4b4b'
            nameInput.value = '[nom masqué]'
        } else {
            nameValue = nameInput.value
            nameInput.style.backgroundColor = '#ffffff'
            nameInput.style.color = '#919191'
            nameInput.value = '[nom masqué]'
        }
    }
}