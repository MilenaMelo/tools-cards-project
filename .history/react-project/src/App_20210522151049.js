import './App.css';

import supervisorIcon from "./img/030-search.png"
import teamBuilderIcon from "./img/002-homepage.png"
import karmaIcon from "./img/009-idea.png"
import calculatorIcon from "./img/045-software.png"

function Card({ cardInfo }) {

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
          <div>
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
