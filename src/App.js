import "./App.css";
import CatNav from "./Components/CatNav";
import MainComponent from "./Components/MainComponent";
import TopNav from "./Components/TopNav";
// import Form from "./Components/Formik/Form";
// import Corousel from "./Components/Simple Projects/Corousel";
// import Accordion from "./Components/Simple Projects/Accordion";
// import QuoteGen from "./Components/Simple Projects/QuoteGen";
// import ShopList from "./Components/Simple Projects/ShopList";
// import UserSearch from "./Components/Simple Projects/UserSearch";

function App() {
  return (
    <div className="App">
      <TopNav />
      {/* <Form /> */}
      {/* <Corousel />/ */}
      {/* <Accordion /> */}
      {/* <QuoteGen /> */}
      {/* <ShopList /> */}
      {/* <UserSearch /> */}
      <CatNav />
      <MainComponent />
    </div>
  );
}

export default App;
