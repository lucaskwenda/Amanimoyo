 // Base de dados com os conteúdos dos artigos
 const articleContents = {
    'ansiedade-social': {
        title: 'Como lidar com ansiedade social',
        author: 'Dr. Paulo Silva',
        date: '15 de Abril, 2025',
        tags: ['Ansiedade', 'Social', 'Terapia'],
        image: 'https://via.placeholder.com/800x400?text=Ansiedade+Social',
        content: `
            <p>A ansiedade social é um transtorno que afeta milhões de pessoas em todo o mundo. Caracteriza-se pelo medo intenso de situações sociais, onde a pessoa teme ser julgada, humilhada ou rejeitada pelos outros.</p>
            
            <h2>Sintomas comuns da ansiedade social</h2>
            <p>Os sintomas da ansiedade social podem ser físicos e emocionais. Entre os sintomas físicos estão o coração acelerado, sudorese, tremores, rubor facial, náuseas e tensão muscular. Já os sintomas emocionais incluem medo intenso de interações sociais, preocupação excessiva antes de eventos sociais, evitação de situações sociais, e autocrítica severa.</p>
            
            <h2>Estratégias para lidar com a ansiedade social</h2>
            <p>A ansiedade social pode ser tratada e existem várias estratégias que podem ajudar a gerenciá-la:</p>
            
            <p><strong>1. Terapia Cognitivo-Comportamental (TCC)</strong>: Esta abordagem terapêutica ajuda a identificar e desafiar pensamentos negativos e crenças disfuncionais que alimentam a ansiedade social. A TCC também inclui técnicas de exposição gradual às situações temidas.</p>
            
            <p><strong>2. Técnicas de respiração e relaxamento</strong>: Aprender a controlar a respiração e relaxar os músculos pode ajudar a reduzir os sintomas físicos da ansiedade. A respiração diafragmática e o relaxamento muscular progressivo são particularmente úteis.</p>
            
            <p><strong>3. Mindfulness</strong>: Práticas de atenção plena podem ajudar a pessoa a se ancorar no momento presente e a observar seus pensamentos ansiosos sem se identificar com eles.</p>
            
            <p><strong>4. Exposição gradual</strong>: Enfrentar gradualmente as situações sociais temidas, começando pelas menos desafiadoras, pode ajudar a reduzir a ansiedade ao longo do tempo.</p>
            
            <p><strong>5. Habilidades sociais</strong>: Desenvolver habilidades sociais como manter contato visual, iniciar conversas e expressar opiniões pode aumentar a confiança em situações sociais.</p>
            
            <h2>Quando buscar ajuda profissional</h2>
            <p>Se a ansiedade social estiver afetando significativamente sua qualidade de vida, relacionamentos ou desempenho no trabalho ou estudo, é importante buscar ajuda profissional. Um psicólogo ou psiquiatra pode avaliar seus sintomas e recomendar o tratamento mais adequado, que pode incluir psicoterapia, medicação ou uma combinação de ambos.</p>
            
            <p>Lembre-se: a ansiedade social é uma condição tratável e muitas pessoas conseguem superá-la com o apoio adequado. O primeiro passo é reconhecer o problema e buscar ajuda.</p>
        `,
        
    'exercicios-respiracao': {
        title: 'Exercícios de respiração para reduzir o estresse',
        author: 'Maria Oliveira',
        date: '10 de Abril, 2025',
        tags: ['Estresse', 'Respiração', 'Relaxamento'],
        image: 'https://via.placeholder.com/800x400?text=Exercícios+Respiração',
        content: `
            <p>A respiração é uma ferramenta poderosa para gerenciar o estresse e a ansiedade. Quando estamos estressados, nossa respiração tende a se tornar mais rápida e superficial, o que pode intensificar ainda mais os sintomas de estresse. Aprenda como usar exercícios respiratórios para acalmar a mente e relaxar o corpo.</p>
            
            <h2>Benefícios da respiração consciente</h2>
            <p>Os exercícios de respiração têm numerosos benefícios para a saúde física e mental, incluindo:</p>
            <p>- Redução dos níveis de cortisol (hormônio do estresse)<br>
            - Diminuição da frequência cardíaca e pressão arterial<br>
            - Melhora do foco e concentração<br>
            - Indução de um estado de relaxamento<br>
            - Redução da ansiedade e tensão muscular</p>
            
            <h2>Técnicas eficazes de respiração</h2>
            
            <p><strong>1. Respiração diafragmática (abdominal)</strong></p>
            <p>Esta técnica envolve respirar profundamente usando o diafragma, em vez de respirar superficialmente com o peito.</p>
            <p>Como praticar:</p>
            <p>- Sente-se confortavelmente ou deite-se<br>
            - Coloque uma mão no peito e outra no abdômen<br>
            - Inspire lentamente pelo nariz, permitindo que o abdômen se expanda (a mão sobre o abdômen deve se mover, enquanto a mão sobre o peito deve permanecer relativamente imóvel)<br>
            - Expire lentamente pela boca<br>
            - Repita por 5-10 minutos</p>
            
            <p><strong>2. Técnica 4-7-8</strong></p>
            <p>Desenvolvida pelo Dr. Andrew Weil, esta técnica funciona como um tranquilizante natural para o sistema nervoso.</p>
            <p>Como praticar:</p>
            <p>- Expire completamente pela boca, fazendo um som de "whoosh"<br>
            - Feche a boca e inspire silenciosamente pelo nariz contando até 4<br>
            - Prenda a respiração contando até 7<br>
            - Expire completamente pela boca, fazendo um som de "whoosh" e contando até 8<br>
            - Repita o ciclo três a quatro vezes</p>
            
            <p><strong>3. Respiração alternada pelas narinas</strong></p>
            <p>Esta técnica da yoga (Nadi Shodhana) ajuda a equilibrar os dois hemisférios do cérebro e promove um estado de calma.</p>
            <p>Como praticar:</p>
            <p>- Sente-se confortavelmente com a coluna ereta<br>
            - Use o polegar direito para fechar a narina direita<br>
            - Inspire lentamente pela narina esquerda<br>
            - No topo da inspiração, feche a narina esquerda com o dedo anelar e libere a narina direita<br>
            - Expire pela narina direita<br>
            - Inspire pela narina direita<br>
            - Feche a narina direita com o polegar e libere a narina esquerda<br>
            - Expire pela narina esquerda<br>
            - Continue alternando por 5-10 ciclos</p>
            
            <h2>Incorporando a respiração consciente no dia a dia</h2>
            <p>Para obter os máximos benefícios, pratique estes exercícios de respiração regularmente, mesmo quando não estiver estressado. Tente incorporá-los em sua rotina diária:</p>
            <p>- Ao acordar, antes de sair da cama<br>
            - Durante pequenas pausas no trabalho<br>
            - Antes de reuniões ou situações estressantes<br>
            - No trânsito (se não estiver dirigindo)<br>
            - Antes de dormir</p>
            
            <p>Com prática regular, você desenvolverá maior consciência da sua respiração e poderá utilizar estas técnicas automaticamente quando sentir os primeiros sinais de estresse ou ansiedade.</p>
        `,
    },
    }}