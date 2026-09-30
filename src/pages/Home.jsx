import AssistantFeature from "../components/assistantFeature/AssistantFeature";
import "../App.css";
import Navbar from "../components/navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <section className="mainApp">
        <div className="mainHeader">
          <h1>Välkommen!</h1>
          <p>- Vad vill du ha hjälp med idag?</p>
        </div>
        <div className="featuresContainer">
          <AssistantFeature
            title="Sammanfatta"
            description="Sammanfatta dina mötesanteckningar."
            to="/summarize"
          />

          <AssistantFeature
            title="Skapa agenda"
            description="Skapa en tydlig agenda för ditt möte."
            to="/agenda"
          />

          <AssistantFeature
            title="Skapa inbjudan"
            description="Skapa en professionell inbjudan till ett möte."
            to="/invitation"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
