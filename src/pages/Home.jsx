import AssistantFeature from "../components/assistantFeature/AssistantFeature";
import "../App.css";

function Home() {
  return (
    <>
      <section className="mainApp">
        <div className="mainHeader">
          <h1>AI Mötesassistent</h1>
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
            description="Skapa en inbjudan till ett möte."
            to="/invitation"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
