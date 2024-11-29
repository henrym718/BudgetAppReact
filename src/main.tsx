import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/index.tsx";
import { ServiceProvider } from "./pages/home/store/ServiceStore.tsx";
import { BudgetProvider } from "./pages/budget/strore/BudgetStore.tsx";

createRoot(document.getElementById("root")!).render(
  <ServiceProvider>
    <BudgetProvider>
      <RouterProvider router={router} />
    </BudgetProvider>
  </ServiceProvider>
);
