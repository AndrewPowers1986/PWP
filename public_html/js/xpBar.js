let level = 0;
let currentXP = 0;

function nextLevelXP() {
    return (level + 1)*10
}

function XPToPercentage() {
    let decimal = currentXP/nextLevelXP();
    return (decimal * 100).toString() + "%";
}

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const xpBar = document.getElementById("xpBar");
const levelIndicator = document.getElementById("levelIndicator");
const toNextLevel = document.getElementById("toNextLevel");

nameInput.addEventListener('input', e => {
    currentXP++;
    levelUp();
});

emailInput.addEventListener('input', e => {
    currentXP++;
    levelUp();
});

messageInput.addEventListener('input', e => {
    currentXP++;
    levelUp();
});

function levelUp() {
    if(currentXP >= nextLevelXP()) {
        currentXP = 0;
        level++;
        levelIndicator.innerText = "Level " + level.toString();
    }
    xpBar.style.width = XPToPercentage();
    toNextLevel.innerText = (nextLevelXP() - currentXP).toString() + " to next level";
}