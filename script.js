
/* =========================
   AMBIL SEMUA HALAMAN
========================= */

const pages = document.querySelectorAll(".page");


/* =========================
   FUNGSI PINDAH HALAMAN
========================= */

function showPage(id) {

    pages.forEach(page => {

        page.classList.remove("active");

    });


    const target =
        document.getElementById(id);


    if (target) {

        target.classList.add("active");

    }

}


/* =========================
   OPENING
========================= */

const startButton =
    document.getElementById(
        "start-button"
    );


startButton.addEventListener(
    "click",
    () => {

        showPage("birthday");

        createConfetti();

    }
);


/* =========================
   PESAN
========================= */

const messageButton =
    document.getElementById(
        "message-button"
    );


messageButton.addEventListener(
    "click",
    () => {

        showPage("message");

    }
);


/* =========================
   GALERI
========================= */

const galleryButton =
    document.getElementById(
        "gallery-button"
    );


galleryButton.addEventListener(
    "click",
    () => {

        showPage("gallery");

    }
);


/* =========================
   FINAL SURPRISE
========================= */

const finalButton =
    document.getElementById(
        "final-button"
    );


finalButton.addEventListener(
    "click",
    () => {

        showPage("final");

        createConfetti();

    }
);


/* =========================
   REPLAY
========================= */

const replayButton =
    document.getElementById(
        "replay-button"
    );


replayButton.addEventListener(
    "click",
    () => {

        showPage("opening");

    }
);


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti-container"
        );


    const jumlah = 100;


    for (
        let i = 0;
        i < jumlah;
        i++
    ) {

        const confetti =
            document.createElement(
                "div"
            );


        confetti.classList.add(
            "confetti"
        );


        confetti.style.left =
            Math.random() * 100 + "%";


        confetti.style.background =
            getRandomColor();


        confetti.style.animationDuration =
            Math.random() * 2 + 2 + "s";


        confetti.style.animationDelay =
            Math.random() * 0.5 + "s";


        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        container.appendChild(
            confetti
        );


        setTimeout(
            () => {

                confetti.remove();

            },
            4000
        );

    }

}


/* =========================
   WARNA CONFETTI
========================= */

function getRandomColor() {

    const colors = [

        "#ff8fab",
        "#ffc8dd",
        "#cdb4db",
        "#a2d2ff",
        "#bde0fe",
        "#ffffff",
        "#ffd166"

    ];


    return colors[
        Math.floor(
            Math.random() *
            colors.length
        )
    ];

}


/* =========================
   KLIK HADIAH
========================= */

const gift =
    document.getElementById(
        "gift"
    );


gift.addEventListener(
    "click",
    () => {

        createConfetti();

        gift.textContent = "🎉";

    }
);