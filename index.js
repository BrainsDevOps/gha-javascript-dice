const core = require('@actions/core');
const github = require('@actions/github');

function tirada() {
    return Math.floor(Math.random()*6)+1;
}

try {
    // Obtemer la información del evento que disparó el flujo de trabajo
    const payloadEvento = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`Payload evento: ${payloadEvento}`);
    const numeroDados = core.getInput('numero-dados');
    core.notice(`Vamos a tirar ${numeroDados} dados.`);
    core.setOutput("dado1", tirada());
    if('dos'===numeroDados) {
    core.setOutput("dado2", tirada());
    }
} catch(error) {
    core.setFailed(error.message);
}