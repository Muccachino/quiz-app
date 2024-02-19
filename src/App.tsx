
import { useState } from 'react'
import './App.css'
import QuestionsList from './components/QuestionsList'
import QuestionsProvider from './components/QuestionsProvider'
import StartPage from './components/StartPage';
import EditQuestions from './components/EditQuestions';

function App() {
  const [startVisible, setStartVisible] = useState(true);
  const [gameVisible, setGameVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false) 

  const startGame = () => {
    setStartVisible(false);
    setGameVisible(true)
  }

  const editGame = () => {
    setStartVisible(false)
    setEditVisible(true)
  }

  const editToStart = () => {
    setStartVisible(true)
    setEditVisible(false)
  }

  return (
    <>
      <h1 style={{textAlign: "center"}}>Quiz</h1>
      {startVisible && <StartPage onStart={startGame} onEdit={editGame}/>}
      <QuestionsProvider>
        {gameVisible && <QuestionsList/>}
        {editVisible && <EditQuestions backToStart={editToStart}/>}

      </QuestionsProvider>
      
    </>
    )
}

export default App
