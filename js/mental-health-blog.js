const articles = [
    {
        id: 1,
        title: "Entendendo a Ansiedade",
        content: "A ansiedade é uma resposta natural do corpo ao estresse, mas quando se torna excessiva pode afetar nossa qualidade de vida. Aprenda a identificar os sinais e descobrir maneiras saudáveis de lidar com a ansiedade no dia a dia.",
        image: "../assets/img/mental-health-blog/ansiedade.jpg",
        tags: ["ansiedade", "saúde mental", "bem-estar"],
    },
    {
        id: 2,
        title: "Depressão: Sinais e Tratamentos",
        content: "A depressão é mais do que apenas tristeza. É uma condição médica séria que afeta milhões de pessoas. Conheça os principais sintomas e as diferentes abordagens de tratamento disponíveis atualmente.",
        image: "../assets/img/mental-health-blog/depressao.jpg",
        tags: ["depressão", "tratamento", "saúde mental"],
    },
    {
        id: 3,
        title: "Práticas de Autocuidado",
        content: "O autocuidado é fundamental para manter uma boa saúde mental. Descubra práticas simples e efetivas que você pode incorporar em sua rotina diária para melhorar seu bem-estar emocional e qualidade de vida.",
        image: "../assets/img/mental-health-blog/auto-ajuda.jpg",
        tags: ["autocuidado", "bem-estar", "rotina"],
    },
    {
        id: 4,
        title: "Mindfulness e Meditação",
        content: "Aprenda como a prática regular de mindfulness e meditação pode ajudar a reduzir o estresse, melhorar o foco e promover uma maior sensação de paz interior e equilíbrio emocional.",
        image: "../assets/img/mental-health-blog/meditacao.jpg",
        tags: ["mindfulness", "meditação", "equilíbrio"],
    },
    {
        id: 5,
        title: "Sono e Saúde Mental",
        content: "Descubra a importante relação entre sono de qualidade e saúde mental. Aprenda dicas práticas para melhorar seus hábitos de sono e consequentemente seu bem-estar emocional.",
        image: "../assets/img/mental-health-blog/sono e saude mental.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 6,
        title: "Estilo de Vida Saudável",
        content: " Manter um estilo de vida saudável é essencial para promover a saúde mental e o bem-estar geral. Descubra como pequenas mudanças em sua rotina diária podem fazer uma grande diferença em sua qualidade de vida.",
        image: "../assets/img/mental-health-blog/vida saudavel.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },

    {
        id: 7,
        title: "Síndrome do Pânico",
        content: " A síndrome do pânico é um transtorno de ansiedade caracterizado por crises de medo intenso e incontrolável. Conheça os sintomas, causas e tratamentos disponíveis para lidar com essa condição.",
        image: "../assets/img/mental-health-blog/sindrome de panico.avif",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 8,
        title: "Transtorno Bipolar",
        content: "O transtorno bipolar é uma condição mental caracterizada por mudanças extremas de humor, que vão de episódios de mania a episódios de depressão. Saiba mais sobre os sintomas, diagnóstico e tratamento do transtorno bipolar.",
        image: "../assets/img/mental-health-blog/transtorno bipolar.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 9,
        title: "TOC (Transtorno Obsessivo-Compulsivo)",
        content: "O transtorno obsessivo-compulsivo (TOC) é um transtorno de ansiedade caracterizado por pensamentos obsessivos e comportamentos compulsivos. Descubra os sintomas, causas e tratamentos disponíveis para o TOC.",
        image: "../assets/img/mental-health-blog/TOC.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },

    {
        id: 10,
        title: "TDAH em adultos e crianças",
        content: "O transtorno de déficit de atenção e hiperatividade (TDAH) é uma condição neurobiológica que afeta crianças e adultos. Conheça os sintomas, diagnóstico e tratamento do TDAH para melhorar a qualidade de vida.",
        image: "../assets/img/mental-health-blog/TDAH.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 11,
        title: "Insônia e outros distúrbios do sono",
        content: "A insônia e outros distúrbios do sono podem ter um impacto significativo na saúde mental e no bem-estar geral. Descubra as causas, sintomas e tratamentos disponíveis para melhorar a qualidade do sono.",
        image: "../assets/img/mental-health-blog/insonia.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 12,
        title: "Transtornos alimentares",
        content: "Os transtornos alimentares são condições sérias que afetam a saúde física e mental de milhões de pessoas em todo o mundo. Conheça os diferentes tipos de transtornos alimentares, seus sintomas e tratamentos disponíveis.",
        image: "../assets/img/mental-health-blog/transtorno alimentar.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 13,
        title: "Estresse pós-traumático",
        content: "O estresse pós-traumático (TEPT) é um transtorno de ansiedade que pode se desenvolver após a exposição a um evento traumático. Saiba mais sobre os sintomas, diagnóstico e tratamento do TEPT.",
        image: "../assets/img/mental-health-blog/estresse.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },

    {
        id: 14,
        title: "Burnout",
        content: "O burnout é um tipo de estresse ocupacional crônico que pode afetar a saúde mental e o bem-estar geral. Descubra os sintomas, causas e estratégias de prevenção do burnout para manter um equilíbrio saudável entre trabalho e vida pessoal.",
        image: "../assets/img/mental-health-blog/Burnout.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 15,
        title: "Técnicas de respiração para ansiedade",
        content: "Aprenda técnicas de respiração simples e eficazes para reduzir a ansiedade, acalmar a mente e promover uma sensação de relaxamento e bem-estar.",
        image: "../assets/img/mental-health-blog/respiracao.avif",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 16,
        title: "Exercícios físicos e bem-estar mental",
        content: "A prática regular de exercícios físicos pode ter um impacto positivo na saúde mental, ajudando a reduzir o estresse, melhorar o humor e promover uma maior sensação de bem-estar. Descubra os benefícios dos exercícios para a saúde mental.",
        image: "../assets/img/mental-health-blog/exercicios fisicos.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 17,
        title: "Limites saudáveis nos relacionamentos",
        content: "Estabelecer limites saudáveis nos relacionamentos é essencial para manter a saúde mental e o bem-estar emocional. Aprenda a definir limites claros e a comunicá-los de forma eficaz para promover relacionamentos saudáveis e satisfatórios.",
        image: "../assets/img/mental-health-blog/limites no relacionamento.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 18,
        title: "Gerenciamento do estresse",
        content: "O estresse é uma parte natural da vida, mas quando se torna crônico pode afetar negativamente a saúde mental e o bem-estar geral. Descubra estratégias eficazes de gerenciamento do estresse para lidar com os desafios do dia a dia e promover uma maior sensação de calma e equilíbrio.",
        image: "../assets/img/mental-health-blog/gerenciando estress.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 19,
        title: "Técnicas de meditação para iniciantes",
        content: "A meditação é uma prática antiga que pode ajudar a acalmar a mente, reduzir o estresse e promover uma maior sensação de paz interior. Aprenda técnicas simples de meditação para iniciantes e descubra os benefícios dessa prática para a saúde mental e o bem-estar emocional.",
        image: "../assets/img/mental-health-blog/meditacao para iniciantes.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 20,
        title: "Journaling terapêutico",
        content: "O journaling terapêutico é uma prática de escrita que pode ajudar a processar emoções, reduzir o estresse e promover uma maior clareza mental. Descubra os benefícios do journaling terapêutico e aprenda a incorporar essa prática em sua rotina diária para melhorar a saúde mental e o bem-estar emocional.",
        image: "../assets/img/mental-health-blog/Journaling .jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 21,
        title: "Como ajudar alguém com depressão",
        content: "A depressão é uma condição séria que afeta milhões de pessoas em todo o mundo. Se você conhece alguém que está lutando contra a depressão, é importante oferecer apoio e compreensão. Descubra maneiras eficazes de ajudar alguém com depressão e promover sua recuperação.",
        image: "../assets/img/mental-health-blog/depressao ajuda.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 22,
        title: "Comunicação não-violenta",
        content: "A comunicação não-violenta é uma abordagem empática e eficaz para se comunicar de forma clara e respeitosa. Aprenda os princípios básicos da comunicação não-violenta e descubra como aplicá-los em seus relacionamentos para promover uma maior compreensão e conexão com os outros.",
        image: "../assets/img/mental-health-blog/comunicacao.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 23,
        title: "Relacionamentos tóxicos",
        content: "Os relacionamentos tóxicos podem ter um impacto negativo na saúde mental e no bem-estar emocional. Descubra os sinais de um relacionamento tóxico e aprenda a estabelecer limites saudáveis para proteger sua saúde mental e promover relacionamentos mais saudáveis e satisfatórios.",
        image: "../assets/img/mental-health-blog/relacionamentos.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 24,
        title: "Inteligência emocional",
        content: "A inteligência emocional é a capacidade de reconhecer, compreender e gerenciar as próprias emoções, bem como as emoções dos outros. Descubra a importância da inteligência emocional para a saúde mental e o bem-estar emocional e aprenda a desenvolver suas habilidades emocionais para promover relacionamentos mais saudáveis e satisfatórios.",
        image: "../assets/img/mental-health-blog/inteligencia emucional.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 25,
        title: "Habilidades sociais",
        content: "As habilidades sociais são essenciais para construir relacionamentos saudáveis e satisfatórios. Aprenda a desenvolver suas habilidades sociais e aprimorar sua capacidade de se comunicar, colaborar e interagir com os outros de forma eficaz e respeitosa.",
        image: "../assets/img/mental-health-blog/hablidades social.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 26,
        title: "Como lidar com conflitos familiares",
        content: "Os conflitos familiares são uma parte natural da vida, mas podem ser desafiadores e estressantes. Descubra estratégias eficazes para lidar com conflitos familiares de forma saudável e construtiva, promovendo uma maior compreensão, respeito e harmonia dentro da família.",
        image: "../assets/img/mental-health-blog/conflito familiares.avif",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 27,
        title: "Estabelecendo limites saudáveis",
        content: "Estabelecer limites saudáveis é essencial para proteger sua saúde mental e promover relacionamentos mais saudáveis e satisfatórios. Aprenda a definir limites claros e a comunicá-los de forma eficaz para proteger sua saúde emocional e promover seu bem-estar geral.",
        image: "../assets/img/mental-health-blog/limites social.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 28,
        title: "Superando traumas de relacionamentos",
        content: "Superar traumas de relacionamentos pode ser um processo desafiador, mas é possível com o tempo, esforço e apoio adequado. Descubra estratégias eficazes para lidar com traumas de relacionamentos passados e promover sua cura emocional e bem-estar geral.",
        image: "../assets/img/mental-health-blog/trauma de relacionamento.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },

    {
        id: 29,
        title: "Equilíbrio entre trabalho e vida pessoal",
        content: "Encontrar um equilíbrio saudável entre trabalho e vida pessoal é essencial para proteger sua saúde mental e promover seu bem-estar geral. Descubra estratégias eficazes para gerenciar o estresse, evitar o burnout e promover um equilíbrio saudável entre suas responsabilidades profissionais e pessoais.",
        image: "../assets/img/mental-health-blog/vida e trabalho.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },

    {
        id: 30,
        title: "Lidando com estresse no trabalho",
        content: "O estresse no trabalho é uma realidade para muitas pessoas, mas é importante aprender a lidar com ele de forma saudável e eficaz. Descubra estratégias práticas para gerenciar o estresse no trabalho, promover sua saúde mental e bem-estar geral e manter um equilíbrio saudável entre vida profissional e pessoal.",
        image: "../assets/img/mental-health-blog/estress no trabalho.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },
    {
        id: 31,
        title: "Síndrome do Impostor",
        content: "A síndrome do impostor é um fenômeno psicológico que afeta muitas pessoas, levando-as a duvidar de suas conquistas e habilidades. Descubra como superar a síndrome do impostor, reconhecer seu próprio valor e promover uma maior autoconfiança e autoestima.",
        image: "../assets/img/mental-health-blog/sindrome do impostor.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },

    {
        id: 32,
        title: "Ansiedade social no ambiente profissional",
        content: "A ansiedade social no ambiente profissional pode ser desafiadora, mas é possível superá-la com estratégias eficazes. Descubra como lidar com a ansiedade social no trabalho, promover sua autoconfiança e bem-estar emocional e construir relacionamentos profissionais saudáveis e satisfatórios.",
        image: "../assets/img/mental-health-blog/ansiedade no trabalho.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },


    {
        id: 33,
        title: "Como pedir ajuda no trabalho",
        content: "Pedir ajuda no trabalho pode ser desafiador, mas é essencial para proteger sua saúde mental e promover seu bem-estar geral. Descubra estratégias eficazes para pedir ajuda no trabalho, promover uma cultura de apoio e colaboração e construir relacionamentos profissionais saudáveis e produtivos.",
        image: "../assets/img/mental-health-blog/pedir ajuda no trabalho.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    },

    {
        id: 34,
        title: "Produtividade sem burnout",
        content: "A produtividade é importante, mas não deve vir às custas de sua saúde mental e bem-estar geral. Descubra estratégias eficazes para manter a produtividade sem burnout, gerenciar o estresse e promover um equilíbrio saudável entre trabalho e vida pessoal.",
        image: "../assets/img/mental-health-blog/Produtividade sem burnout.jpg",
        tags: ["sono", "descanso", "saúde mental"],
    }
    
];

function displayArticles(articlesToShow = articles) {
    const articlesContainer = document.getElementById('articles');
    
    if (articlesToShow.length === 0) {
        articlesContainer.innerHTML = '<div class="no-results">Nenhum artigo encontrado</div>';
        return;
    }

    articlesContainer.innerHTML = articlesToShow.map(article => `
        <div class="card" onclick="showFullArticle(${article.id})">
            <img src="${article.image}" alt="${article.title}" class="card-image">
            <div class="card-content">
                <h2>${article.title}</h2>
                <p>${article.content}</p>
               
            </div>
        </div>
    `).join('');
}

{/* <div class="tags">
${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
</div> */}

function searchArticles(query) {
    return articles.filter(article => {
        const searchTerms = query.toLowerCase();
        return article.title.toLowerCase().includes(searchTerms) ||
               article.content.toLowerCase().includes(searchTerms) ||
               article.tags.some(tag => tag.toLowerCase().includes(searchTerms));
    });
}

function showFullArticle(id) {
    const article = articles.find(a => a.id === id);
    if (article) {
         
        // Aqui você pode implementar a lógica para mostrar o artigo completo
        // Por exemplo, abrir em uma nova página ou em um modal
        // Você pode usar um modal ou redirecionar para uma página de detalhes
        openArticle(id);
        // window.location.href = `article.html?id=${id}`;
        

    }
}

document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value;
    const filteredArticles = query ? searchArticles(query) : articles;
    displayArticles(filteredArticles);
});


function openArticle(articleId) {
 
   switch (articleId) {
        case 1:
            window.location.href = "../pages/blog-pages/ansiedade.html";
            break;
        case 2:
            window.location.href = "../pages/blog-pages/depresao.html";
            break;
        case 3:
            window.location.href = "../pages/blog-pages/autocuidado.html";
            break;
        case 4:
            window.location.href = "../pages/blog-pages/mindfulness.html";
            break;
        case 5:
            window.location.href = "../pages/blog-pages/sonosaudemental.html";
            break;
        case 6:
            window.location.href = "../pages/blog-pages/estilodevida.html";
            break;
        case 7:
            window.location.href = "../pages/blog-pages/sindromepanico.html";
            break;
        case 8:
            window.location.href = "../pages/blog-pages/transtornobipolar.html";
            break;
        case 9:
            window.location.href = "../pages/blog-pages/Transtorno Obsessivo-Compulsivo.html";
            break;
        case 10:
            window.location.href = "../pages/blog-pages/tdah-em-adultos-e-crianças.html";
            break;
        case 11:
            window.location.href = "../pages/blog-pages/Insônia-e-outros distúrbios-do-sono.html";
            break;
        case 12:
            window.location.href = "../pages/blog-pages/transtorno-alimentar.html";
            break;
        case 13:
            window.location.href = "../pages/blog-pages/estresse-pós-traumático.html";
            break;
        case 14:
            window.location.href = "../pages/blog-pages/burnout.html";
            break;
        case 15:
            window.location.href = "../pages/blog-pages/tecnicas-de-respiracao.html";
            break;
        case 16:
            window.location.href = "../pages/blog-pages/exercícios-físicos-e-bem-estar-mental.html";
            break;
        case 17:
            window.location.href = "../pages/blog-pages/Limites-Saudáveis-nos-Relacionamentos.html";
            break;
        case 18:
            window.location.href = "../pages/blog-pages/gerenciamento-do-estresse.html";
            break;
        case 19:
            window.location.href = "../pages/blog-pages/técnicas-de-Meditação-para-Iniciantes.html";
            break;
        case 20:
            window.location.href = "../pages/blog-pages/journaling-terapêutico.html";
            break;
        case 21:
            window.location.href = "../pages/blog-pages/como-ajudar-alguém-com-depressão.html";
            break;
        case 22:
            window.location.href = "../pages/blog-pages/comunicacao-nao-violenta.html";
            break;
        case 23:
            window.location.href = "../pages/blog-pages/relacionamentos-toxicos.html";
            break;
        case 24:
            window.location.href = "../pages/blog-pages/inteligencia-emocional.html";
            break;
        case 25:
            window.location.href = "../pages/blog-pages/habilidades-sociais.html";
            break;
        case 26:
            window.location.href = "../pages/blog-pages/conflitos-familiares.html";
            break;
        case 27:
            window.location.href = "../pages/blog-pages/estabelecendo-limites-saudaveis.html";
            break;
        case 28:
            window.location.href = "../pages/blog-pages/superando-traumas-de-relacionamentos.html";
            break;
        case 29:
            window.location.href = "../pages/blog-pages/equilibrio-entre-trabalho-e-vida-pessoal.html";
            break;
        case 30:
            window.location.href = "../pages/blog-pages/lidando-com-estresse-no-trabalho.html";
            break;
        case 31:
            window.location.href = "../pages/blog-pages/sindrome-do-impostor.html";
            break;
        case 32:
            window.location.href = "../pages/blog-pages/ansiedade-social-no-ambiente-profissional.html";
            break;
        case 33:
            window.location.href = "../pages/blog-pages/como-pedir-ajuda-no-trabalho.html";
            break;
        case 34:
            window.location.href = "../pages/blog-pages/produtividade-sem-burnout.html";
            break;
        default:
            alert("Artigo não encontrado.");
    }
}
// Inicializar o blog com todos os artigos
displayArticles();