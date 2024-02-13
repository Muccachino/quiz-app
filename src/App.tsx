
import './App.css'
import QuestionsList from './components/QuestionsList'
import QuestionsProvider from './components/QuestionsProvider'

function App() {
  return (
    <>
      <h1>Quiz</h1>
      <QuestionsProvider>
        <QuestionsList/>
      </QuestionsProvider>
      
    </>
    )
}

export default App
