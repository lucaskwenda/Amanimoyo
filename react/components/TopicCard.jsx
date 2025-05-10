// Create a TopicCard component
const TopicCard = ({ topic }) => {
    return (
      <div>
        <div className="image">
          <img src={topic.image} alt={topic.alt} />
        </div>
        <h2>{topic.title}</h2>
        <p>{topic.description}</p>
        <span className="btn-ver-mais"></span>
      </div>
    );
  };
  
  // Use the TopicCard component multiple times
  const topics = [
    {
      image: "./assets/img/imagens/ansiedade.jpg",
      alt: "jovem sofrendo de ansiedade",
      title: "Ansiedade",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae iste ullam! Quis assumenda provident at atque quos susci",
    },
    {
      image: "./assets/img/imagens/depressao.jpg",
      alt: "mulher sofrendo depressão",
      title: "Depressão",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae iste ullam! Quis assumenda provident at atque quos susci",
    },
    // Add more topics as needed
  ];
  
  // Get the container element where you want to render the TopicCard components
  const container = document.querySelector(".explore-topicos");
  
  // Render the TopicCard components multiple times
  topics.forEach((topic) => {
    const topicCard = ReactDOM.createRoot(container, { topic });
    topicCardo.render(<TopicCard topic={topic} />);
    container.appendChild(topicCard);
  });