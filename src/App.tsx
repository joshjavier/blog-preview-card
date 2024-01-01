import './App.css';
import Card from './components/Card';
import sampleBlog from './data';

function App() {
  return (
    <main>
      <h1 className="visually-hidden">Blog Preview Card</h1>
      <Card item={sampleBlog} />
    </main>
  );
}

export default App;
