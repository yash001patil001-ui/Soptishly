// --- SERVICE WORKER REGISTRATION (KEEP THIS FOR PWA) ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registered for Soptishly!'))
            .catch(err => console.log('Service Worker registration failed: ', err));
    });
}
// ---------------------------------------------------------
