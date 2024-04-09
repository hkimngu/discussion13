window.addEventListener("load", function() {
    document.querySelector("h1").classList.add("heading");
});

document.addEventListener("dblclick", function() {
    alert(new Date());
});

function toggleEmail() {
    document.querySelector("#toggle").classList.toggle("hidden");
};