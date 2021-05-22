import './App.css';

import supervisorIcon from "./assets/002-homepage.svg"
import teamBuilderIcon from "./assets/030-search.svg"
import karmaIcon from "./assets/009-idea.svg"
import calculatorIcon from "./assets/045-software.svg"


function Card({ cardInfo }) {
  return (
    <div className="card">
      <div className="title">{cardInfo.title}</div>
      <div className="content">{cardInfo.content}</div>
      <img className="icon" src={cardInfo.icon} alt={cardInfo.cardHeader} />
    </div>
  )
}

function App() {

  const cards = [
    {
      title: "Supervisor",
      content: "Monitors activity to identify project roadblocks",
      icon: supervisorIcon
    },
    {
      title: "Team Builder",
      content: "Scans our talent network to create the optimal team for your project",
      icon: teamBuilderIcon
    },
    {
      title: "Karma",
      content: "Regularly evaluates our talent to ensure quality",
      icon: karmaIcon
    },
    {
      title: "Calculator",
      content: "Uses data from past projects to provide better delivery estimates",
      icon: calculatorIcon
    }
  ]

  return (
    <div>
      <body>
        <h1>Reliable, efficient delivery</h1>
        <h2>Powered by Technology</h2>
        <span>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</span>
        <div className="cards-info">
          <div className="card-1">
            <Card cardInfo={cards[0]} />
          </div>
          <div className="cards-middle-info">
            <div className="card-2">
              <Card cardInfo={cards[1]} />
            </div>
            <div className="card-3">
              <Card cardInfo={cards[2]} />
            </div>
          </div>
          <div className="card-4">
            <Card cardInfo={cards[3]} />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
