function openForm() {
    if (document.getElementById("chat").style.display == "block") {
        document.getElementById("chat").style.display = "none";
    }
    else {
        document.getElementById("chat").style.display = "block";
    }
}

function closeForm() {
    document.getElementById("chat").style.display = "none";
}