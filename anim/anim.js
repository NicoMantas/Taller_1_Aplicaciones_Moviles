document.addEventListener("DOMContentLoaded", () => {

  const sonidoBici = new Howl({
    src: ['bici.mp3'],
    volume: 0.5
  });

  let iniciado = false;

  document.addEventListener("keydown", () => {
    if (Howler.ctx.state === "suspended") {
      Howler.ctx.resume();
    }
  }, { once: true });

  gsap.to("#nube", {
    x: 900,
    duration: 20,
    repeat: -1,
    ease: "linear"
  });

  gsap.to("#sol", {
    rotation: 360,
    transformOrigin: "50% 50%",
    repeat: -1,
    duration: 20,
    ease: "linear"
  });

  document.addEventListener("keydown", () => {

    if (!iniciado) {
      iniciado = true;

      sonidoBici.play();

      gsap.to("#bici", {
        left: 800,
        duration: 8,
        ease: "power1.inOut"
      });
    }

  });

});

