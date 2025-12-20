// public/rain-fix.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Rain Fix loaded - Ensuring controls are always on top');
    
    function enforceRainControlsStyles() {
        const rainControls = document.querySelector('.rain-controls');
        if (rainControls) {
            // Estilos forzados para máxima prioridad
            rainControls.style.zIndex = '2147483647';
            rainControls.style.transform = 'translateZ(0)';
            rainControls.style.pointerEvents = 'auto';
            rainControls.style.position = 'fixed';
            rainControls.style.bottom = '20px';
            rainControls.style.right = '20px';
            
            // Asegurar visibilidad
            rainControls.style.background = 'rgba(10, 10, 30, 0.95)';
            rainControls.style.border = '2px solid rgba(255, 204, 0, 0.5)';
            rainControls.style.boxShadow = '0 0 20px rgba(255, 204, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.5)';
        }
    }

    // Ejecutar inmediatamente
    enforceRainControlsStyles();
    
    // Ejecutar cada segundo para prevenir que otros estilos lo sobrescriban
    setInterval(enforceRainControlsStyles, 1000);
    
    // También ejecutar después de interacciones y animaciones
    document.addEventListener('scroll', enforceRainControlsStyles);
    document.addEventListener('click', enforceRainControlsStyles);
    document.addEventListener('mousemove', enforceRainControlsStyles);
});