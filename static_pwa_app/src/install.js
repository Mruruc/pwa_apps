let deferredPrompt;
const installButton = document.getElementById("installButton");

installButton.style.display = "none";

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installButton.style.display = "block";
});

installButton.addEventListener("click", async () => {
  installButton.style.display = "none";
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`User ${outcome} the install prompt`);
  deferredPrompt = null;
});

window.addEventListener("appinstalled", () => {
  console.log("PWA was installed");
});
