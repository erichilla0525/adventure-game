const gametitle = document.getElementById('game-title');
gametitle.textContent = 'Mystery of Uldua';

let currentState = 0;

function renderQuestion(){
    const question = document.getElementById('question');
    const answers = document.getElementById('answers');
    const image = document.getElementById('Uldua-creature');

    question.textContent = '';
    answers.textContent = '';

    image.style.display = 'none';

    switch(currentState){
        case 0:
            question.textContent = 'You enter Uldua, and meet Thorim, Thunder Protector. Choose from these options.';
            image.src = "Uldua.png";
            image.style.display = 'block';
            addAnswerButton('Run Away', 1);
            addAnswerButton('Fight With Thorim', 2)
            break;

        case 1:
            question.textContent = 'You lost the chance to gain the power, game is over.';
            addAnswerButton('Restart The Game', 0);
            break;
        case 2:
            question.textContent = 'You defeated Thorim, Thunder Protector. You gained his thunder power.';
            image.src = "Thorim.png";
            image.style.display = 'block';
            addAnswerButton('Keep Going', 3)
            
            break;

        case 3:
            question.textContent = 'You meet Hodir, Ice Protector. Choose from these options.';
            addAnswerButton('Run Away', 1);
            addAnswerButton('Fight with Hodir', 4);
            break;

        case 4:
            question.textContent = 'You defeated Hodir, Ice Protector. You gained his ice power.';
            image.src = "Hodir.png";
            image.style.display = 'block';
            addAnswerButton('Keep Going', 5)
            break;

        case 5:
            question.textContent = 'You meet Freya, Life Protector. Choose from these options.';
            addAnswerButton('Run Away', 1);
            addAnswerButton('Fight with Freya', 6);
            break;

        case 6:
            question.textContent = 'You defeated Freya, Life Protector. You gained her life power.';
            image.src = "Freya.png";
            image.style.display = 'block';
            addAnswerButton('Keep Going', 7);
            break;

        case 7:
            question.textContent = 'You gained the trinity of power from protectors, choose your destiny the Oracle: Yogg-Saron, Hope End.';
            addAnswerButton('Choose to face the Oracle: Yogg-Saron, Hope End.', 8);
            addAnswerButton('Surrender to the Oracle: Yogg-Saron, Hope End.', 9);
            break;

        case 8:
            question.textContent = 'You defeated the Oracle: Yogg-Saron, Hope End. Uldua is saved by you.'
            image.src = "Yogg.png";
            image.style.display = 'block';
            addAnswerButton('Restart', 0)
            break

        case 9:
            question.textContent = 'You are corrupted by Yogg-Saron and been transformed as an Faceless, forever serving the Oracle: Yogg-Saron, Hope End.'
            image.src = "Faceless.png";
            image.style.display = 'block';
            addAnswerButton('Restart', 0)
            break
    }
}

function addAnswerButton(text,nextState) {
    const button = document.createElement('button');
    button.textContent = text;
    button.onclick = function() {
        currentState = nextState;
        renderQuestion();
    };
    document.getElementById('answers').appendChild(button);
}

window.onload = renderQuestion;