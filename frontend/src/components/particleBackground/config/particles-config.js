export const particlesConfig = {
    background: {
      color: "#140f23"
    },
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: {
          enable: true,
          mode: "repulse",
          parallax: { enable: false, force: 60, smooth: 10 }
        },
        resize: true
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 }
      }
    },
    particles: {
      color: { value: "#241a38" },
      move: {
        direction: "none",
        enable: true,
        outModes: "out",
        random: false,
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 1000
        },
        value: 80
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 4 }
      }
    }
  }