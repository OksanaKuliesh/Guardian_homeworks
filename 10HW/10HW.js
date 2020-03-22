function makeSound(e) {
    let code = e.keyCode ? e.keyCode : this.getAttribute("data-key");
    let activeKey = document.querySelector('.key[data-key="' + code + '"]');
    let activeAudio = document.querySelector('audio[data-key="' + code + '"]');
    if (!activeAudio) return;
    activeAudio.currentTime = 0;
    activeAudio.play();
    if (!activeKey) return;
    activeKey.classList.add('active');
}

document.addEventListener('keydown', makeSound);

let allKeys = document.querySelectorAll(".key");

allKeys.forEach(function (key) {
    key.addEventListener('click', makeSound);
})

allKeys.forEach(function (key) {
    key.addEventListener('transitionend', function (e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('active');
    });
});

let sound = null;
document.addEventListener('play', e => {
        if (sound && sound != e.target) {
            sound.pause();
        }
        sound = e.target;
    },
    true
);