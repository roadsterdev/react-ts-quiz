import { QuizProvider } from "./context/QuizContext";
import QuestionRenderer from "./components/QuestionRenderer";

import "./App.css";

function App() {
  return (
    <QuizProvider>
      <div className="App">
        <div className="w-full h-40 bg-pink"></div>
        <QuestionRenderer />
      </div>
    </QuizProvider>
  );
}

export default App;
