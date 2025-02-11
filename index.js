
const main = () => {
    let yesClickCount = 0;
    const phases = [
        {
            question: 'Will you be my valentine?',
            yesText: 'Yes',
            image: './assets/avocado.gif',
        },
        {
            question: 'Really?',
            yesText: 'Yes!',
            image: './assets/dancing.gif',
        },
        {
            question: 'Are you sure?',
            yesText: 'Yes!!',
            image: './assets/hoolah.gif',
        },
        {
            terminalPhase: true,
            question: 'Ripe Choice!',
            image: './assets/win.gif',
        },
    ];

    const question = document.getElementById('question');
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    const image = document.getElementById('image');
    const [body] = document.getElementsByClassName('body-love');

    const updateQuestion = () => {
        const phase = phases[yesClickCount];

        question.innerText = phase.question;
        yesButton.innerText = phase.yesText;
        image.src = phase.image;

        if (phase.terminalPhase) {
            yesButton.style.display = 'none';
            noButton.style.display = 'none';
        }
    };

    yesButton.addEventListener('click', () => {
        ++yesClickCount;
        if (yesClickCount < phases.length) {
            updateQuestion();
        }
    });

    noButton.addEventListener('click', () => {
        question.innerText = 'oh...';
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        body.removeAttribute('class', 'body-love');
        body.setAttribute('class', 'body-sad');
        image.src = './assets/sad.gif';
    });
};

main();
