

import { setupWorker } from "msw";
import { handlers as serviceHandlers } from "./mocks/services";


const setupApp = async () => {
  setupWorker(...serviceHandlers).start();
};

if (process.env.NODE_ENV === "development") {
  setupApp();
}

function App() {
  return <h1>genAI</h1>
}

export default App
