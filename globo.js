/* ========================= */
/* ELEMENTOS */
/* ========================= */

const music = document.getElementById("bgmusic");
const modal = document.getElementById("videoModal");
const openBtn = document.getElementById("openVideo");
const closeBtn = document.getElementById("closeVideo");
const video = document.getElementById("birthdayVideo");
const flame = document.querySelector(".flame");

/* ========================= */
/* MUSICA */
/* ========================= */

function startMusic(){

    if(music && music.paused){

        music.volume = 0.35;

        music.play().catch(()=>{});

    }

}

/* detectar cualquier interacción válida */

document.addEventListener("touchstart", startMusic, { once:true });
document.addEventListener("click", startMusic, { once:true });
document.addEventListener("keydown", startMusic, { once:true });

/* ========================= */
/* ABRIR VIDEO */
/* ========================= */

openBtn.addEventListener("click", () => {

  if (music) {
    music.pause();
  }

  modal.style.display = "flex";

  if (video) {
    video.currentTime = 0;
    video.play().catch(()=>{});
  }

});

/* ========================= */
/* CERRAR VIDEO */
/* ========================= */

closeBtn.addEventListener("click", () => {

  modal.style.display = "none";

  if (video) {
    video.pause();
    video.currentTime = 0;
  }

  if (music) {
    music.play().catch(()=>{});
  }

});

/* ========================= */
/* GLOBOS EXPLOTAN */
/* ========================= */

document.querySelectorAll(".balloon").forEach((balloon) => {

  balloon.addEventListener("click", function(){

    explodeConfetti(this);

    this.style.opacity = "0";

  });

});

/* ========================= */
/* CONFETTI */
/* ========================= */

function explodeConfetti(element){

  const rect = element.getBoundingClientRect();

  const colors = [
    "#ffcc00",
    "#ff6b81",
    "#6bc5ff",
    "#7bed9f",
    "#ffa502",
    "#e056fd"
  ];

  for(let i=0;i<25;i++){

    const conf = document.createElement("div");

    conf.style.position="fixed";
    conf.style.width="8px";
    conf.style.height="8px";

    conf.style.background = colors[Math.floor(Math.random()*colors.length)];

    conf.style.left = rect.left + "px";
    conf.style.top = rect.top + "px";

    conf.style.borderRadius="50%";

    document.body.appendChild(conf);

    const x = (Math.random()-0.5)*300;
    const y = Math.random()*300;

    conf.animate(
    [
        {transform:"translate(0,0)",opacity:1},
        {transform:`translate(${x}px,${y}px)`,opacity:0}
    ],
    {
        duration:1200,
        easing:"ease-out"
    });

    setTimeout(()=>conf.remove(),1200);

  }

}

/* ========================= */
/* APAGAR VELA */
/* ========================= */

if (flame) {

  function apagarVela(){

    /* apagar llama */

    flame.style.animation="none";
    flame.style.opacity="0";

    /* humo */

    const smoke=document.createElement("div");

    smoke.className="smoke";

    const rect=flame.getBoundingClientRect();

    smoke.style.left=rect.left+"px";
    smoke.style.top=rect.top+"px";

    document.body.appendChild(smoke);

    setTimeout(()=>smoke.remove(),2000);

    /* explosión de confeti */

    explodeConfetti(flame);

  }

  flame.addEventListener("click", apagarVela);
  flame.addEventListener("touchstart", apagarVela);

}
