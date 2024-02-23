// import CaseOne from "./Pages/CaseOne/CaseOne";
import CaseTwo from "./Pages/CaseTwo/CaseTwo";
import CounterContext from "./context/CounterContext";

const App = () => {
  return (
    <>
      <CounterContext>
        <CaseTwo />
      </CounterContext>
      {/* <CaseOne /> */}
    </>
  );
};

export default App;
