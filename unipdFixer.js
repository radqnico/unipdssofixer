let inputUser = document.getElementById("j_username_js");
let inputRadioProf = document.getElementById("radio1");
let inputRadioStudenti = document.getElementById("radio2");

chrome.storage.sync.get("defaultUser", ({ defaultUser }) => {
    setTimeout(() => {
        inputUser.value = defaultUser;
    }, 200);
});

chrome.storage.sync.get("defaultType", ({ defaultType }) => {
    setTimeout(() => {
        if (defaultType == "studenti") {
            inputRadioProf.checked = false;
            inputRadioStudenti.checked = true;
        }
        if (defaultType == "prof") {
            inputRadioProf.checked = true;
            inputRadioStudenti.checked = false;
        }
    }, 200);
});