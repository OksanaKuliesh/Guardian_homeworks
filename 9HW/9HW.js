const getRandomColour = () => {
    const maxRGBVal = 255
    const getRGBInt = () => {
        return Math.floor(Math.random() * Math.floor(maxRGBVal));
    };
    let red = getRGBInt();
    let green = getRGBInt();
    let blue = getRGBInt();
    let randColour = `rgb(${red}, ${green}, ${blue})`;
    return randColour;
}

const generateBlocks = () => {
    const appendBlocks = () => {
        const blocksNumber = 25;
        const mainSquare = document.getElementById('mainSquare');
        mainSquare.innerHTML = '';
        for (let i = 0; i < blocksNumber; i++) {
            const innerSquare = document.createElement('div');
            innerSquare.style.height = "50px";
            innerSquare.style.width = "50px";
            innerSquare.style.backgroundColor = getRandomColour();
            mainSquare.append(innerSquare);
        }
        return mainSquare;
    }
    return appendBlocks();
}

function generateBlocksInterval() {
    return setInterval(() => {
        generateBlocks();
    }, 1000);
}

generateBlocks();
generateBlocksInterval();