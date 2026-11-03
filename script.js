/* =================================
   DEFAULT DATA
================================= */

const defaultData = {

    mode: "birthday",

    name: "Nama Dia",

    birthdayTitle: "Happy Birthday!",

    invitationTitle: "You're Invited",

    message:
        "Semoga hari ini menjadi salah satu hari terbaik dalam hidupmu. Semoga semua hal baik datang kepadamu.",

    date: "",

    time: "",

    location: "",

    theme: "purple",

    background: "gradient"

};


/* =================================
   CURRENT DATA
================================= */

let data = {
    ...defaultData
};


/* =================================
   GET ELEMENTS
================================= */

const modeButtons =
    document.querySelectorAll(".mode-btn");

const nameInput =
    document.getElementById("nameInput");

const titleInput =
    document.getElementById("titleInput");

const messageInput =
    document.getElementById("messageInput");

const dateInput =
    document.getElementById("dateInput");

const timeInput =
    document.getElementById("timeInput");

const locationInput =
    document.getElementById("locationInput");

const themeInput =
    document.getElementById("themeInput");

const backgroundInput =
    document.getElementById("backgroundInput");

const preview =
    document.getElementById("preview");

const birthdayPreview =
    document.getElementById("birthdayPreview");

const invitationPreview =
    document.getElementById("invitationPreview");

const modeLabel =
    document.getElementById("modeLabel");

const previewTitle =
    document.getElementById("previewTitle");

const previewName =
    document.getElementById("previewName");

const previewMessage =
    document.getElementById("previewMessage");

const invitationTitle =
    document.getElementById("invitationTitle");

const invitationName =
    document.getElementById("invitationName");

const previewDate =
    document.getElementById("previewDate");

const previewTime =
    document.getElementById("previewTime");

const previewLocation =
    document.getElementById("previewLocation");

const invitationMessage =
    document.getElementById("invitationMessage");

const invitationFields =
    document.querySelector(".invitation-fields");

const surpriseModal =
    document.getElementById("surpriseModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalMessage =
    document.getElementById("modalMessage");

const gift =
    document.getElementById("gift");

const surpriseBtn =
    document.getElementById("surpriseBtn");

const closeModal =
    document.getElementById("closeModal");

const modalCloseButton =
    document.getElementById("modalCloseButton");

const saveBtn =
    document.getElementById("saveBtn");

const resetBtn =
    document.getElementById("resetBtn");

const toast =
    document.getElementById("toast");


/* =================================
   UPDATE PREVIEW
================================= */

function updatePreview() {

    /*
     * Birthday
     */

    previewTitle.textContent =
        data.birthdayTitle;

    previewName.textContent =
        data.name;

    previewMessage.textContent =
        data.message;


    /*
     * Invitation
     */

    invitationTitle.textContent =
        data.invitationTitle;

    invitationName.textContent =
        data.name;

    invitationMessage.textContent =
        data.message;


    /*
     * Date
     */

    if (data.date) {

        const date =
            new Date(data.date + "T00:00:00");

        previewDate.textContent =
            date.toLocaleDateString(
                "id-ID",
                {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                }
            );

    } else {

        previewDate.textContent =
            "Belum ditentukan";

    }


    /*
     * Time
     */

    previewTime.textContent =
        data.time || "Belum ditentukan";


    /*
     * Location
     */

    previewLocation.textContent =
        data.location || "Belum ditentukan";


    /*
     * Theme
     */

    preview.className =
        `preview theme-${data.theme} background-${data.background}`;


    /*
     * Mode
     */

    if (data.mode === "birthday") {

        birthdayPreview.classList.remove("hidden");

        invitationPreview.classList.add("hidden");

        modeLabel.textContent =
            "Birthday";

        invitationFields.style.display =
            "block";

    } else {

        birthdayPreview.classList.add("hidden");

        invitationPreview.classList.remove("hidden");

        modeLabel.textContent =
            "Invitation";

        invitationFields.style.display =
            "block";

    }

}


/* =================================
   INPUT LISTENERS
================================= */

nameInput.addEventListener(
    "input",
    function () {

        data.name =
            this.value || "Nama Dia";

        updatePreview();

    }
);


titleInput.addEventListener(
    "input",
    function () {

        if (data.mode === "birthday") {

            data.birthdayTitle =
                this.value || "Happy Birthday!";

        } else {

            data.invitationTitle =
                this.value || "You're Invited";

        }

        updatePreview();

    }
);


messageInput.addEventListener(
    "input",
    function () {

        data.message =
            this.value;

        updatePreview();

    }
);


dateInput.addEventListener(
    "change",
    function () {

        data.date =
            this.value;

        updatePreview();

    }
);


timeInput.addEventListener(
    "change",
    function () {

        data.time =
            this.value;

        updatePreview();

    }
);


locationInput.addEventListener(
    "input",
    function () {

        data.location =
            this.value;

        updatePreview();

    }
);


themeInput.addEventListener(
    "change",
    function () {

        data.theme =
            this.value;

        updatePreview();

    }
);


backgroundInput.addEventListener(
    "change",
    function () {

        data.background =
            this.value;

        updatePreview();

    }
);


/* =================================
   MODE SWITCH
================================= */

modeButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            function () {

                modeButtons.forEach(
                    btn => {
                        btn.classList.remove("active");
                    }
                );

                this.classList.add("active");

                data.mode =
                    this.dataset.mode;


                /*
                 * Update title input
                 */

                if (data.mode === "birthday") {

                    titleInput.value =
                        data.birthdayTitle;

                } else {

                    titleInput.value =
                        data.invitationTitle;

                }


                updatePreview();

            }
        );

    }
);


/* =================================
   SURPRISE
================================= */

function openSurprise() {

    modalTitle.textContent =
        data.mode === "birthday"
            ? `Happy Birthday, ${data.name}!`
            : `You're Invited, ${data.name}!`;


    modalMessage.textContent =
        data.message;


    surpriseModal.classList.remove(
        "hidden"
    );

}


/* =================================
   CLOSE MODAL
================================= */

function closeSurprise() {

    surpriseModal.classList.add(
        "hidden"
    );

}


/* =================================
   SURPRISE BUTTON
================================= */

surpriseBtn.addEventListener(
    "click",
    openSurprise
);


closeModal.addEventListener(
    "click",
    closeSurprise
);


modalCloseButton.addEventListener(
    "click",
    closeSurprise
);


surpriseModal.addEventListener(
    "click",
    function (event) {

        if (event.target === surpriseModal) {

            closeSurprise();

        }

    }
);


/* =================================
   GIFT CLICK
================================= */

gift.addEventListener(
    "click",
    function () {

        this.textContent = "🎉";

        openSurprise();


        setTimeout(
            () => {

                this.textContent = "🎁";

            },
            1200
        );

    }
);


/* =================================
   SAVE
================================= */

saveBtn.addEventListener(
    "click",
    function () {

        localStorage.setItem(
            "wishcraft-project",
            JSON.stringify(data)
        );

        showToast(
            "Project berhasil disimpan!"
        );

    }
);


/* =================================
   LOAD
================================= */

function loadProject() {

    const saved =
        localStorage.getItem(
            "wishcraft-project"
        );


    if (!saved) {

        fillInputs();

        updatePreview();

        return;

    }


    try {

        data = {
            ...defaultData,
            ...JSON.parse(saved)
        };

    } catch {

        data = {
            ...defaultData
        };

    }


    fillInputs();

    updatePreview();

}


/* =================================
   FILL INPUTS
================================= */

function fillInputs() {

    nameInput.value =
        data.name;

    titleInput.value =
        data.mode === "birthday"
            ? data.birthdayTitle
            : data.invitationTitle;

    messageInput.value =
        data.message;

    dateInput.value =
        data.date;

    timeInput.value =
        data.time;

    locationInput.value =
        data.location;

    themeInput.value =
        data.theme;

    backgroundInput.value =
        data.background;


    /*
     * Update active mode button
     */

    modeButtons.forEach(
        button => {

            button.classList.toggle(
                "active",
                button.dataset.mode === data.mode
            );

        }
    );

}


/* =================================
   RESET
================================= */

resetBtn.addEventListener(
    "click",
    function () {

        const confirmed =
            confirm(
                "Reset semua customisasi?"
            );


        if (!confirmed) {

            return;

        }


        data = {
            ...defaultData
        };


        localStorage.removeItem(
            "wishcraft-project"
        );


        fillInputs();

        updatePreview();

        showToast(
            "Project dikembalikan ke default."
        );

    }
);


/* =================================
   TOAST
================================= */

function showToast(message) {

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );


    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );

        },
        2200
    );

}


/* =================================
   START APP
================================= */

loadProject();