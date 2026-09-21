const surpriseButton = document.getElementById("surpriseButton");
const surprise = document.getElementById("surprise");

surpriseButton.addEventListener("click", showSurprise);

function showSurprise() {
    surprise.classList.toggle("hidden");

    if (surprise.classList.contains("hidden")) {
        surpriseButton.textContent = "Hay algo más… 🐱";
    } else {
        surpriseButton.textContent = "Ahora ya lo viste 💛";
    }
}
