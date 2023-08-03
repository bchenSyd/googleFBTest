import { BrowserRouter, Routes, Route } from "react-router-dom";
import { setupWorker } from "msw";
import { HomePage } from "./pages";
import { handlers as serviceHandlers } from "./mocks/services";
import { RequireAuth } from "./auth";

const setupApp = async () => {
  setupWorker(...serviceHandlers).start();
};

if (process.env.NODE_ENV === "development") {
  setupApp();
}

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RequireAuth />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/profile"
          element={<pre>{sessionStorage.getItem("user")}</pre>}
        />
      </Route>
      <Route path="/help" element={<h1>help page</h1>} />
    </Routes>
  </BrowserRouter>
);

export default App;
