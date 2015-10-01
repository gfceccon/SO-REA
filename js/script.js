function rotateDisk(oImg) {

        // rotate around canvas center
        cx = canvas.getWidth() / 2,
        cy = canvas.getHeight() / 2,

        // speed of rotation slows down for further planets
        duration = (planetIndex + 1) * rotationSpeed,

        // randomize starting angle to avoid planets starting on one line
        startAngle = fabric.util.getRandomInt(-180, 0),
        endAngle = startAngle + 359;

    (function animate() {

      fabric.util.animate({
        startValue: startAngle,
        endValue: endAngle,
        duration: duration,

        // linear movement
        easing: function(t, b, c, d) { return c*t/d + b; },

        onChange: function(angle) {
          angle = fabric.util.degreesToRadians(angle);

          var x = cx + radius * Math.cos(angle);
          var y = cy + radius * Math.sin(angle);

          oImg.set({ left: x, top: y }).setCoords();

          // only render once
          if (planetIndex === totalPlanets - 1) {
            canvas.renderAll();
          }
        },
        onComplete: animate
      });
    })();
  }
  
