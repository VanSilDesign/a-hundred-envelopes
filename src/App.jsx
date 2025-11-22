import EnvelopesHistory from "./components/Envelopes/EnvelopeHistory.jsx";
import EnvelopesContainer from "./components/Envelopes/EnvelopesContainer.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <EnvelopesContainer />
        <EnvelopesHistory />
      </main>
    </>
  );
}

export default App;
