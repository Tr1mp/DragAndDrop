const item = document.querySelector(".item"),
      placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

placeholders.forEach(placeholder => {
    placeholder.addEventListener("dragover", dragover);
    placeholder.addEventListener("dragenter", dragenter);
    placeholder.addEventListener("dragleave", dragleave);
    placeholder.addEventListener("drop", dragdrop);
});

function dragstart(e) {
    e.target.classList.add("hold");
    setTimeout(() => {
        e.target.classList.add("hide");
    }, 0);
}

function dragend(e) {
    e.target.classList.remove("hide");
    e.target.classList.remove("hold");
}

function dragover(e) {
    e.preventDefault();
}

function dragenter(e) {
    e.target.classList.add("illumination");
    e.target.innerHTML = `<h3 class="bg">drop here</h3>`
}

function dragleave(e) {
    e.target.innerHTML = ``
    e.target.classList.remove("illumination");
}

function dragdrop(e) {
    e.target.innerHTML = ``
    e.target.classList.remove("illumination");
    e.target.append(item);
}
