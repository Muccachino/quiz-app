
import './App.css'
import InteractiveList from './components/QuestionsList'
import QuestionsProvider from './components/QuestionsProvider'

function App() {
  return (
    <>
      <h1>Quiz</h1>
      <QuestionsProvider>
        <InteractiveList/>
      </QuestionsProvider>
      
    </>
    )
}

export default App
