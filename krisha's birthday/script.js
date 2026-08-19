// Scroll to birthday message
function scrollToMessage() {
    document.getElementById("message").scrollIntoView({
        behavior: "smooth"
    });
}


// Surprise button
function showSurprise() {

    const surprise = document.getElementById("surprise");

    surprise.classList.toggle("show");

    if (surprise.classList.contains("show")) {
        createConfetti();

        surprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}


// Floating hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️", "💕", "💗", "💖", "💘"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 15 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 3 + 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}


// Create hearts every 700ms
setInterval(createHeart, 700);


// Confetti effect
function createConfetti() {

    const symbols = ["❤️", "💗", "✨", "🎉", "🎀", "💕"];

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";

        confetti.style.zIndex = "2000";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration =
            Math.random() * 3 + 2;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "ease-in"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}