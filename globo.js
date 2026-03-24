/* ========================= */
/* ELEMENTOS */
/* ========================= */

const music = document.getElementById("bgmusic");
const modal = document.getElementById("videoModal");
const openBtn = document.getElementById("openVideo");
const closeBtn = document.getElementById("closeVideo");
const video = document.getElementById("birthdayVideo");

/* ========================= */
/* MUSICA */
/* ========================= */

/* ========================= */
/* ACTIVAR MUSICA AL PRIMER TOQUE */
/* ========================= */

document.addEventListener("pointerdown", startMusic, { once: true });

function startMusic(){

    if(music){

        music.volume = 0.35;

        music.play().catch(()=>{});

    }

}
/*
window.addEventListener("load", () => {
  if (music) {
    music.volume = 0.35;
    music.play().catch(() => {});
  }
});*/

/* ========================= */
/* ABRIR VIDEO */
/* ========================= */

openBtn.addEventListener("click", () => {
  /* detener música */
  if (music) {
    music.pause();
  }

  /* mostrar modal */
  modal.style.display = "flex";

  /* iniciar video */
  if (video) {
    video.currentTime = 0;
    video.play().catch(() => {});
  }
});

/* ========================= */
/* CERRAR VIDEO */
/* ========================= */

closeBtn.addEventListener("click", () => {
  /* ocultar modal */
  modal.style.display = "none";

  /* detener video */
  if (video) {
    video.pause();
    video.currentTime = 0;
  }

  /* reanudar música */
  if (music) {
    music.play().catch(() => {});
  }
});

/* ========================= */
/* GLOBOS EXPLOTAN */
/* ========================= */

document.querySelectorAll(".balloon").forEach((balloon) => {
  balloon.addEventListener("click", function () {
    explodeConfetti(this);
    this.style.opacity = "0";
  });
});

/* ========================= */
/* CONFETTI */
/* ========================= */

function explodeConfetti(element) {
  const rect = element.getBoundingClientRect();

  const colors = [
    "#ffcc00",
    "#ff6b81",
    "#6bc5ff",
    "#7bed9f",
    "#ffa502",
    "#e056fd",
  ];

  for (let i = 0; i < 25; i++) {
    const conf = document.createElement("div");

    conf.style.position = "fixed";
    conf.style.width = "8px";
    conf.style.height = "8px";

    conf.style.background = colors[Math.floor(Math.random() * colors.length)];

    conf.style.left = rect.left + "px";
    conf.style.top = rect.top + "px";

    conf.style.borderRadius = "50%";

    document.body.appendChild(conf);

    const x = (Math.random() - 0.5) * 300;
    const y = Math.random() * 300;

    conf.animate(
      [
        { transform: "translate(0,0)", opacity: 1 },
        { transform: `translate(${x}px,${y}px)`, opacity: 0 },
      ],
      {
        duration: 1200,
        easing: "ease-out",
      },
    );

    setTimeout(() => conf.remove(), 1200);
  }
}
