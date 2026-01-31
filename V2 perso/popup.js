const toggle = document.getElementsByClassName('tgl-skewed')[0];

const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
toggle.checked = isDarkMode();

function update() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "CHANGE_TRUC",
            value: toggle.checked
        });
    });

    console.log(toggle.checked)
    if (toggle.checked) {
        document.body.style.backgroundColor = '#121212';
    } else {
        document.body.style.backgroundColor = '#eeeeee';
    }
}

update();

toggle.addEventListener('click', function() {
    update()
})