const gametitle = document.getElementById('game-title');
gametitle.textContent = 'Mystery of Uldua';

let currentState = 0;

function renderQuestion(){
    const question = document.getElementById('question');
    const answers = document.getElementById('answers');

    question.textContent = '';
    answers.textContent = '';

    switch(currentState){
        case 0:
            question.textContent = 'You meet Thorim, the Thunder Protector. Choose from these options.';
            addAnswerButton('Run Away', 1);
            addAnswerButton('Fight With Thorim', 2)
            break;

        case 1:
            question.textContent = 'You lost the chance to gain the power, game over.';
            addAnswerButton('Restart The Game', 0);
            break;
        case 2:
            question.textContent = 'You defeated Thorim, the Thunder Protector. You gain his thunder power.';
            addAnswerButton('Keep Going', 3)
            break;

        case 3:
            question.textContent = 'You meet Hodir, the Ice Protector. Choose from these options.';
            addAnswerButton('Run Away', 1);
            addAnswerButton('Fight with Hodir', 4);
            break;

        case 4:
            question.textContent = 'You defeated Hodir, the Ice Protector. You gain his ice power.';
            addAnswerButton('Keep Going', 5)
            break;

        case 5:
            question.textContent = 'You meet Freya, the Life Protector. Choose from these options.';
            addAnswerButton('Run Away', 1);
            addAnswerButton('Fight with Freya', 6);
            break;

        case 6:
            question.textContent = 'You defeated Freya, the Life Protector. You gain her life power.';
            addAnswerButton('Keep Going', 7);
            break;

        case 7:
            question.textContent = 'You gained the trinity of power from protectors, choose your destiny the Oracle: Yogg-Saron, Hope End.';
            addAnswerButton('Choose to face the Oracle: Yogg-Saron, Hope End.', 8);
            addAnswerButton('Surrender to the Oracle: Yogg-Saron, Hope End.', 9);
            break;

        case 8:
            question.textContent = 'You defeated the Oracle: Yogg-Saron, Hope End. Uldua is saved by you.'
            addAnswerButton('Restart', 0)
            break

        case 9:
            question.textContent = 'You are corrupted by Yogg-Saron and been transformed as an Faceless, forever serving the Oracle: Yogg-Saron, Hope End.'
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