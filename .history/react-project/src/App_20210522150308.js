import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <body>
        <h1>Reliable, efficient delivery</h1>
        <h2>Powered by Technology</h2>
        <span>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</span>
        <div className="cards-area">
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
