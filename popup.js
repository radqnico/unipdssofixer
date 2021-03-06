function readyFuntion() {

    console.log("Ready");
    let inputUser = $("#input_username");
    let inputTypeStudenti = $("#default_radio_studenti");
    let inputTypeProf = $("#default_radio_prof");

    chrome.storage.sync.get("defaultUser", ({ defaultUser }) => {
        if (defaultUser) {
            inputUser.val(defaultUser);
        }
    });

    chrome.storage.sync.get("defaultType", ({ defaultType }) => {
        if (defaultType == "studenti") {
            inputTypeStudenti.prop("checked", true);
            inputTypeProf.prop("checked", false);
        } else if (defaultType == "prof") {
            inputTypeStudenti.prop("checked", false);
            inputTypeProf.prop("checked", true);
        }
    });

    inputUser.change(function() {
        let defaultUser = inputUser.val();
        chrome.storage.sync.set({ defaultUser });
        console.log("Changed username to " + defaultUser);
    });
    $('input[type=radio][name=default_radio]').change(function() {
        chrome.storage.sync.set({ defaultType: this.value });
        console.log("Changed type to " + this.value);
    });
}

$(document).ready(readyFuntion);