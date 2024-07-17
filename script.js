const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao sair da aula de programação, você descobre uma nova linguagem de programação que promete revolucionar o desenvolvimento de software, permitindo criar aplicativos complexos de forma mais rápida e eficiente. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é incrível!",
                afirmacao: "Ficou empolgado com o potencial dessa nova linguagem na área de programação."
            },
            {
                texto: "Isso é um pouco intimidador!",
                afirmacao: "Inicialmente sentiu-se desafiado pelas novas possibilidades e complexidades dessa linguagem."
            }
        ]
    },
    {
        enunciado: "Com a descoberta dessa nova linguagem de programação, um professor renomado de programação da escola decide oferecer uma série de aulas avançadas sobre ela. Ao final de uma aula, ele pede que você escreva um relatório sobre como essa linguagem está impactando o desenvolvimento de software. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para encontrar exemplos avançados e explicações claras no relatório.",
                afirmacao: "Conseguiu usar a IA para acessar informações detalhadas sobre a nova linguagem de programação."
            },
            {
                texto: "Escreve o relatório com base nas suas próprias experiências com a linguagem e em pesquisas convencionais sobre o tema.",
                afirmacao: "Sentiu mais conforto em confiar em suas próprias habilidades de programação para escrever o relatório."
            }
        ]
    },
    {
        enunciado: "Após completar o relatório, o professor realiza uma discussão em grupo para entender como foi a pesquisa e escrita. Nessa conversa, discute-se o impacto dessa nova linguagem no futuro da programação. Como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que essa nova linguagem pode abrir novas oportunidades de desenvolvimento e aprimorar a eficiência dos programadores.",
                afirmacao: "Está impulsionando a inovação na programação com tecnologia avançada e busca novos caminhos profissionais nesse campo."
            },
            {
                texto: "Preocupa-se com os programadores que podem ser substituídos por ferramentas automáticas e defende a importância de capacitar os desenvolvedores humanos.",
                afirmacao: "Sua preocupação com a preservação das habilidades de programação humanas tradicionais motivou a iniciar um grupo de estudos sobre ética na automação de software."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisa criar um projeto de software que represente suas ideias sobre o uso dessa nova linguagem. E agora?",
        alternativas: [
            {
                texto: "Desenvolver um projeto utilizando conceitos avançados e técnicas modernas de programação.",
                afirmacao: "Observou que muitos programadores ainda preferem técnicas de programação manual e decidiu compartilhar conhecimentos sobre a nova linguagem com abordagens tradicionais."
            },
            {
                texto: "Desenvolver um projeto utilizando ferramentas de automação avançadas.",
                afirmacao: "Acelerou o processo de desenvolvimento de software utilizando ferramentas automatizadas e agora ensina técnicas de programação utilizando essas ferramentas."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto em grupo de ciência da computação para entregar na semana seguinte, mas está um pouco atrasado e um membro do grupo decidiu usar um programa de IA para ajudar. O problema é que o projeto está praticamente igual ao que a IA produziu. O que você faz?",
        alternativas: [
            {
                texto: "Escrever instruções para o programa de IA é uma forma de contribuir com o projeto, então não há problema em usar o código gerado inteiramente pela IA.",
                afirmacao: "Infelizmente começou a depender demais da IA para todas as tarefas relacionadas à programação."
            },
            {
                texto: "O programa de IA pode ser muito avançado, mas é necessário revisar o projeto para garantir que reflita suas próprias perspectivas e conhecimentos sobre ciência da computação.",
                afirmacao: "Percebeu que a IA gera código com base em algoritmos e que é essencial revisar e complementar com perspectivas pessoais para garantir a qualidade do projeto."
            }
        ]
    },
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();