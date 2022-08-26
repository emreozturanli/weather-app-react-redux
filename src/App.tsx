import AppRouter from "./routes/AppRouter";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster/>
      <AppRouter />
    </div>
  );
}

export default App;
