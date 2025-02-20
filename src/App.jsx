import React from "react";
<<<<<<< HEAD

const App = () => {
  return (
    <div className="text-8xl w-full h-screen bg-zinc-800 text-white">App</div>
=======
import MainLayout from "./layouts/main-layout";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  return (
    <div>
      <MainLayout />
      <Dashboard />
    </div>
>>>>>>> a8ab0b9 (Re-added all project files (layout completed))
  );
};

export default App;
