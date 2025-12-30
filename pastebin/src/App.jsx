import CreatePaste from "./components/CreatePaste";

const App = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Pastebin Lite</h2>
      <CreatePaste />
    </div>
  );
};

export default App;
