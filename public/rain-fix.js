document.addEventListener('DOMContentLoaded', function () {
  function enforceRainControlsStyles() {
    var rainControls = document.querySelector('.rain-controls');
    if (!rainControls) return;

    var isMobile = window.innerWidth <= 767;

    // Always needed for correct stacking
    rainControls.style.zIndex       = '2147483647';
    rainControls.style.transform    = 'translateZ(0)';
    rainControls.style.pointerEvents = 'auto';
    rainControls.style.position     = 'fixed';

    if (isMobile) {
      // Let CSS media query control mobile appearance
      rainControls.style.background = '';
      rainControls.style.border     = '';
      rainControls.style.boxShadow  = '';
      rainControls.style.bottom     = '';
      rainControls.style.right      = '';
    } else {
      // Desktop: enforce appearance
      rainControls.style.bottom    = '24px';
      rainControls.style.right     = '24px';
      rainControls.style.background = 'rgba(0, 0, 0, 0.95)';
      rainControls.style.border    = '1px solid rgba(255, 215, 0, 0.55)';
      rainControls.style.boxShadow = '0 0 20px rgba(255,215,0,0.18), 0 0 40px rgba(0,0,0,0.9), inset 0 0 15px rgba(255,215,0,0.03)';
    }
  }

  enforceRainControlsStyles();
  setInterval(enforceRainControlsStyles, 1000);
  document.addEventListener('scroll', enforceRainControlsStyles);
  document.addEventListener('click',  enforceRainControlsStyles);
});
