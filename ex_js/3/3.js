function btnClick(event) {
    alert(event.target.value + "clicked!")
}

document.getElementById("b2").onclick = function(event) { alert(event.target.value) }