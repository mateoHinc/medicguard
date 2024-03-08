import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesHomePage.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

function Home() {
  return (
    <>
      <Sidebar />
      <Header />
      <Content />
    </>
  );
}

export default Home;
