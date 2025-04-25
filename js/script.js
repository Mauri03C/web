// Animaciones con clase .fade-in
window.addEventListener('load', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.animationPlayState = 'running';
  });
});

window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      el.style.animationPlayState = 'running';
    }
  });
});

// Efecto de hover en el contenedor
document.querySelectorAll('.container').forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'scale(1.02)';
  });
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'scale(1)';
  });
});

// Partículas interactivas
tsParticles.load("particles-bg", {
  background: {
    color: {
      value: "transparent"
    }
  },
  fullScreen: {
    enable: true,
    zIndex: 0
  },
  particles: {
    number: {
      value: 60
    },
    color: {
      value: "#b5b8f2"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.3
    },
    size: {
      value: 2
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      outModes: "out"
    },
    links: {
      enable: true,
      distance: 120,
      color: "#b5b8f2",
      opacity: 0.2,
      width: 1
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 150,
        links: {
          opacity: 0.4
        }
      }
    }
  }
});

console.log("Mi pagina");
