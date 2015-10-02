(function() {
  fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';

  var canvas = this.__canvas = new fabric.Canvas('canvas', {
    hoverCursor: 'pointer',
    selection: false,
    perPixelTargetFind: true,
    targetFindTolerance: 5
  });

  // load sprite with planets
  fabric.Image.fromURL('images/hard_disk.png', function(disk) {
    disk.originX = disk.originY = 'center';
	  disk.left = disk.top = 300;
	  canvas.add(disk);
    diskRotate(disk);
  });

  function diskRotate(oImg) {
    var duration = 10000;
    
    $( "#selector" ).slider({
      min: 5000,
      max: 15000,
      value: 10000,
      slide: function( event, ui ) {
        $( "duration" ).val( "$" + ui.value );
      }
    });

    (function animate() {

      fabric.util.animate({
        startValue: 0,
        endValue: 360,
        duration: duration,

        // linear movement
        easing: function(t, b, c, d) { return c*t/d + b; },

        onChange: function(angle) {

          oImg.setAngle(angle);

          canvas.renderAll();
        },
        onComplete: animate
      });
    })();
  }

})();