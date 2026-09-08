function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}

function reveal(card) {
    card.querySelector("p").textContent = "Because you make me feel appreciated and safe. 💚";
}
