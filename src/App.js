import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./component/Routes/Routes";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
