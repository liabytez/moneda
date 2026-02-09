let intervalReference

        function play() {
            // 0.- Leer el enunciado
            // 1.- Lanzar el Interval (animacion)
            // 2.- Lanzar el Timeout (parar animacion)
            // 3.- Mostrar texto de jugando...
            // 4.- Deshabilitar el botón de lanzar hasta que termina
            // 5.- Deshabilitar la opción de elegir
            const max = 15000
            const min = 10000
            const durationTimoutMiliseconds = Math.floor(Math.random() * (max - min + 1)) + min
            const timeAnimationMiliseconds = 200
            animationCoin()
            intervalReference = setInterval(animationCoin, timeAnimationMiliseconds)
            setTimeout(stopAnimation, durationTimoutMiliseconds)
            document.getElementById("result").innerHTML = "Jugando..."
            document.getElementById("playButton").disabled = true
            document.getElementById("option").disabled = true
        }

        function animationCoin() {
            // 1.- Mostrar cara
            // 2.- Mostrar cruz en la siguiente iteración
            // 3.- Mostrar cara en la siguiente iteración
            // 4.- Por lo tanto, ir intercambiando entre cara o cruz
            const image = document.getElementById("coin")
            const selectedImage = imagen.src.includes("Heads") ? "assets/heads.jpg" : "assets/tails.jpg"
            imagen.src = selectedImage
        }

        function stopAnimation() {
            // 1.- Parar el Interval (animacion)
            // 2.- Calcular el resultado (aleatorio + opcion)
            clearInterval(intervalReference)
            calculateResult()
        }

        function calculateResult() {
            // 1.- Un aleatorio de cara o cruz
            // 2.- Comparar con eleccion del jugador
            // 3.- Mostrar el resultado
            // 4.- Habilitar botón para volver a jugar
            // 5.- Habilitar la opción
            const result = Math.random() < 0.5 ? "Heads" : "Tails"
            const playerOption = document.getElementById("option")
            playerOption.disabled = false
            document.getElementById("coin").src = "assets/" + result + ".jpg"
            const text = document.getElementById("result")
            text.innerHTML = resultado === playerOption.value ? "You win !" : "You lose ..."
            document.getElementById("playButton").disabled = false
        }