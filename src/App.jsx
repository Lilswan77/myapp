import Nav from "./Components/Nav";

const App = () => {
  return (
    <div className="bg-black h-screen ">
      <Nav />
      <div className="overflow-x-auto flex justify-center items-center h-screen">
        <div className="flex-none w-96 h-96 border border-white"></div>
        <div className="flex-none w-96 h-96 border border-white"></div>
        <div className="flex-none w-96 h-96 border border-white"></div>
        <div className="flex-none w-96 h-96 border border-white"></div>
        <div className="flex-none w-96 h-96 border border-white"></div>
        <div className="flex-none w-96 h-96 border border-white"></div>
      </div>
      </div>
  );
};

export default App;
