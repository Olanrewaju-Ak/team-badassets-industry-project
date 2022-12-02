import "./App.scss";
import Header from "./components/header/Header";
import LeftSidebar from "./components/left-sidebar/LeftSidebar";
import Main from "./components/main/Main";
import { Routes, Route, Outlet } from "react-router-dom";
import OverView from "./components/overview/OverView";
import RightSidebar from "./components/right-sidebar/RightSidebar";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <LeftSidebar />
        <Main />
        <RightSidebar />
        <Outlet />
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/overview" element={<OverView />} />
      </Routes>
    </>
  );
}

export default App;
