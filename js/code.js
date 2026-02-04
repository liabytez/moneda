function play() {
    const playerSelection = document.getElementById("select").value
    const coin = document.getElementById("coin").value
    const result = document.getElementById("result").value

    if (playerSelection === "") {
        result.innerHTML = "Select a side"
    }

    coin.src = assets/spin.gif
    result.innerHTML = "Flipping coin..."



}