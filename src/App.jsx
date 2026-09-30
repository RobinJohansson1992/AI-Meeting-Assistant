import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "./App.css";

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
