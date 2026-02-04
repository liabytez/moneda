function play() {
    const playerSelection = document.getElementById("select").value
    const coin = document.getElementById("coin").value
    const result = document.getElementById("result").value

    if (playerSelection === "") {
        result.innerHTML = "Choose Heads or Tails"
        return
    }

    
}