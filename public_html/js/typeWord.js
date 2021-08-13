

async function typeWord () {
    let wordElement = document.getElementById('AP_title');
    let word = "Andrew K. Powers";

    for(let i = 0; i < word.length; i++) {
        wordElement.innerHTML += word[i];
        console.log(word[i]);
        await sleep(500);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

typeWord();