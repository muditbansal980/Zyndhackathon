import Navbar from "./components/navbar"
import Home from "./components/Home"
import CheckEligibility from "./components/checkeligibility"
import Benefits from "./components/Benefits"
import MyApplications from "./components/MyApplications"
import Profile from "./components/Profile"
import InterpretLaw from "./components/InterpretLaw"
import Footer from "./components/Footer"
import Signup from "./Signup"
import Onboarding from "./components2/onboarding"
import Login from "./components2/Login";
// import Searchbox from "./components/Searchbox"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/Home",
      element: <><Navbar /><Home /><Footer /></>
    },
    {
      path: "/CheckEligibility",
      element: <> <Navbar /><CheckEligibility /><Footer /></>
    },
    {
      path: "/Benefits",
      element: <> <Navbar />< Benefits /><Footer /></>
    },
    {
      path: "/MyApplications",
      element: <><Navbar /> <MyApplications /><Footer /></>
    },
    {
      path: "/Profile",
      element: <><Navbar /><Profile /><Footer /></>
    },
    {
      path: "/InterpretLaw",
      element: <><Navbar /><InterpretLaw /><Footer /></>
    },
    {
      path: "/signup",
      element: <> <Signup /></>
    },
    {
      path: "/",
      element: <> <Onboarding /></>
    },
    {
      path:"/Login",
      element: <> <Login /></>
    }
  ])
  return (
    <div className="App bg-linear-to-r from-gray-800 via-blue-700 to-gray-900 max-[2000px]:w-[100vw] max-w-[2000px] h-[100vh] overflow-x-hidden flex flex-col jusitfy-center items-center">
      {/* <Searchbox /> */}

      <RouterProvider router={router} />
    </div>
  )
}
export default App;