let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("musicaMama", {
    events: {
      'onReady': function () {
        // Listo para comandos
      }
    }
  });
}

function toggleCarta() {
  const contenedor = document.getElementById("contenedor");
  contenedor.classList.toggle("abierto");

  const corazonesCont = document.getElementById("corazones");

  if (contenedor.classList.contains("abierto")) {
    if (player) {
      player.seekTo(0);
      player.playVideo();
    }

    document.getElementById("mensaje").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("mensaje").style.animation = "aparecer 2s ease forwards";
    }, 500);

    for (let i = 0; i < 30; i++) {
      const corazon = document.createElement("div");
      corazon.className = "corazon";
      corazon.style.left = "50%";
      corazon.style.top = "60%";
      corazon.style.animationDuration = 3 + Math.random() * 3 + "s";
      corazon.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg) scale(${Math.random() + 0.5})`;
      corazonesCont.appendChild(corazon);
      setTimeout(() => corazon.remove(), 6000);
    }

    iniciarPetalosInternos();
  } else {
    if (player) {
      player.pauseVideo();
    }
  }
}

const floresCont = document.getElementById("flores");
for (let i = 0; i < 40; i++) {
  const flor = document.createElement("div");
  flor.className = "flor";
  flor.style.left = Math.random() * 100 + "vw";
  flor.style.top = -10 + "px";
  flor.style.animationDuration = 5 + Math.random() * 5 + "s";
  flor.style.background = `hsl(${Math.random() * 360}, 70%, 85%)`;
  floresCont.appendChild(flor);
}

function iniciarPetalosInternos() {
  const petalosInternos = document.getElementById("petalosInternos");
  setInterval(() => {
    const petalo = document.createElement("div");
    petalo.className = "petalo-interno";
    petalo.style.left = Math.random() * 100 + "%";
    petalo.style.top = "-10px";
    petalo.style.animationDuration = 4 + Math.random() * 2 + "s";
    petalosInternos.appendChild(petalo);
    setTimeout(() => petalo.remove(), 7000);
  }, 300);
}
