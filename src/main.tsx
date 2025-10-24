import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/components/Theme-provider.tsx"
createRoot(document.getElementById("root")!).render(
  <ThemeProvider>                      
  <Provider store={store}>
    <App />
  </Provider>
  </ThemeProvider>
);
 