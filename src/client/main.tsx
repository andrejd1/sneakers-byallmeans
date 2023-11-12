import "./index.css";
import "./fonts/Boxing-Regular.otf";
import "./fonts/Excon-Medium.otf";
import "./fonts/Excon-Bold.otf";
import "./fonts/Excon-Regular.otf";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
