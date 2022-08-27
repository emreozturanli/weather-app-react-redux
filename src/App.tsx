import AppRouter from "./routes/AppRouter";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster/>
      <AppRouter />
    </>
  );
}

export default App;
