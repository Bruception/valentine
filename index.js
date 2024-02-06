
const main = () => {
    let yesClickCount = 0;
    const phases = [
        {
            question: 'Will you be my valentine?',
            yesText: 'Yes',
            kittyImage: './assets/kitty.gif',
        },
        {
            question: 'Really?',
            yesText: 'Yes!',
            kittyImage: './assets/kitty-blush.gif',
        },
        {
            question: 'Are you sure?',
            yesText: 'Yes!!',
            kittyImage: './assets/kitty-love.gif',
        },
        {
            question: 'Do you love me?',
            yesText: 'YES!!!',
            kittyImage: './assets/kitty-question.gif',
        },
        {
            terminalPhase: true,
            question: 'I love you!',
            kittyImage: './assets/kitty-love-you.gif',
        },
    ];

    const question = document.getElementById('question');
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    const kittyImage = document.getElementById('kitty-image');
    const [body] = document.getElementsByClassName('body-love');

    const updateQuestion = () => {
        const phase = phases[yesClickCount];

        question.innerText = phase.question;
        yesButton.innerText = phase.yesText;
        kittyImage.src = phase.kittyImage;

        if (phase.terminalPhase) {
            yesButton.style.display = 'none';
            noButton.style.display = 'none';
        }
    };

    yesButton.addEventListener('click', () => {
        yesClickCount++;
        if (yesClickCount < phases.length) {
            updateQuestion();
        }
    });

    noButton.addEventListener('click', () => {
        question.innerText = 'oh... ok :(';
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        body.removeAttribute('class', 'body-love');
        body.setAttribute('class', 'body-sad');
        kittyImage.src = './assets/kitty-sad.gif';
    });
};

main();
