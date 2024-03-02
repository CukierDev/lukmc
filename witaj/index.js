function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function start() {
    await delay(1000)
    document.getElementById("intro_text").innerHTML += "NOWA"
    await delay(500)
    document.getElementById("intro_text").innerHTML += " ERA"
    await delay(500)
    document.getElementById("intro_text").innerHTML += " POLSKIEGO"
    await delay(500)
    document.getElementById("intro_text").innerHTML += " MINECRAFTA"
}

start()