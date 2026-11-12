const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: `Se em 2049 a inteligência artificial pudesse identificar emoções humanas, como você utilizaria essa tecnologia?`,
    alternativas: [
      {
        texto: "Permitiria que a IA analisasse todas as minhas emoções.",
        afirmacao: "Refletiu sobre como a inteligência artificial pode influenciar a compreensão das emoções humanas."
      },
      {
        texto: "Utilizaria a tecnologia apenas como uma ferramenta de apoio.",
        afirmacao: "Reconhece que a tecnologia pode ajudar a compreender emoções, mas respeita a individualidade humana."
      }
    ]
  },
  {
    enunciado: `Se a IA pudesse criar leis e regras para a sociedade, qual seria sua escolha?`,
    alternativas: [
      {
        texto: "Deixaria a inteligência artificial decidir tudo.",
        afirmacao: "Percebeu que a inteligência artificial pode participar de transformações importantes na sociedade."
      },
      {
        texto: "Defenderia que as decisões fossem tomadas por pessoas com apoio tecnológico.",
        afirmacao: "Valoriza a responsabilidade humana e a participação social nas decisões coletivas."
      }
    ]
  },
  {
    enunciado: `Imagine que em 2049 os carros não precisem mais de motoristas. O que você pensa sobre isso?`,
    alternativas: [
      {
        texto: "Acreditaria que essa inovação tornaria o trânsito perfeito.",
        afirmacao: "Reconhece o potencial da automação para transformar a mobilidade urbana."
      },
      {
        texto: "Acreditaria que ainda seriam necessários cuidados e fiscalização.",
        afirmacao: "Compreende que toda inovação tecnológica precisa de segurança, responsabilidade e supervisão."
      }
    ]
  },
  {
    enunciado: `Se você pudesse utilizar uma IA para aprender qualquer habilidade, o que faria?`,
    alternativas: [
      {
        texto: "Deixaria a IA fazer todas as atividades por mim.",
        afirmacao: "Refletiu sobre os limites da dependência tecnológica no desenvolvimento de novas habilidades."
      },
      {
        texto: "Utilizaria a IA para aprender e desenvolver minhas próprias capacidades.",
        afirmacao: "Valoriza o conhecimento e utiliza a tecnologia como instrumento de aprendizagem."
      }
    ]
  },
  {
    enunciado: `Como você reagiria se descobrisse que seus dados pessoais estão sendo utilizados por uma inteligência artificial?`,
    alternativas: [
      {
        texto: "Não me preocuparia com o uso dos meus dados.",
        afirmacao: "Percebeu que o compartilhamento de dados envolve questões importantes de privacidade."
      },
      {
        texto: "Procuraria saber como meus dados estão sendo utilizados.",
        afirmacao: "Reconhece a importância da proteção de dados e da privacidade no ambiente digital."
      }
    ]
  },
  {
    enunciado: `Se hospitais utilizassem inteligência artificial para auxiliar nos diagnósticos, qual seria sua opinião?`,
    alternativas: [
      {
        texto: "Confiaria exclusivamente nos diagnósticos realizados pela IA.",
        afirmacao: "Reconhece o potencial da inteligência artificial para contribuir com os avanços da saúde."
      },
      {
        texto: "Defenderia que os profissionais de saúde supervisionassem os resultados.",
        afirmacao: "Compreende que a tecnologia pode auxiliar os profissionais, sem substituir a avaliação humana."
      }
    ]
  },
  {
    enunciado: `Estamos em 2049 e você pode escolher como a inteligência artificial fará parte do mundo. Qual seria sua decisão?`,
    alternativas: [
      {
        texto: "Um mundo em que a tecnologia tenha prioridade sobre as necessidades humanas.",
        afirmacao: "Refletiu sobre os riscos de colocar o desenvolvimento tecnológico acima das necessidades da humanidade."
      },
      {
        texto: "Um mundo em que a tecnologia contribua para uma sociedade mais justa e desenvolvida.",
        afirmacao: "Defende o uso consciente da inteligência artificial para construir um futuro melhor para todos."
      }
    ]
  }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  const perguntaAtual = perguntas[atual];

  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";

  mostraAlternativas(perguntaAtual);
}

function mostraAlternativas(perguntaAtual) {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");

    botaoAlternativa.textContent = alternativa.texto;

    botaoAlternativa.addEventListener("click", () => {
      respostaSelecionada(alternativa);
    });

    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(alternativa) {
  historiaFinal += alternativa.afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
