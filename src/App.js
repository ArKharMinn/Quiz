import { useEffect, useState } from 'react';
import './App.css';
import { api } from './Api/Api';
import Home from './components/Home';

function App() {
  const [quiz, setQuiz] = useState([])
  const [indexQuiz, setindexQuiz] = useState(0)
  const [score, setScore] = useState(null);

  const fetchData = async () => {
    const res = await api.get('/quizzes')
    setQuiz(res.data)
  };

  const clickEvent = (answer, correct) => {
    if (indexQuiz !==  quiz.length || indexQuiz <  quiz.length) {
      setindexQuiz(indexQuiz+1)
      if (answer === correct) {
      setScore(score + 1)
    } 
    }
    
  }

  const myscoreBtn = () => {
   setQuiz([])
    console.log(score);
  }

  const resetBtn = () => {
    setindexQuiz(0)
    setScore(0)
  }
  
  useEffect(() => {
    fetchData();
    setScore(score);
    setindexQuiz(indexQuiz)
    
  }, []);
  return (
    <div className="App">
      <Home quiz={quiz[indexQuiz]} length={quiz} resetBtn={resetBtn} score={score}
        clickEvent={clickEvent} indexQuiz={indexQuiz} myscoreBtn={myscoreBtn } />
    </div>
  );
}

export default App;
