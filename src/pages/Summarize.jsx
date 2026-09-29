import Navbar from "../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setNotes, setResult } from "../reducers/meetingReducer";
import { summarizeNotes } from "../services/api";
import "./Pages.css";

function Summarize() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.meeting.notes);
  const result = useSelector((state) => state.meeting.result);

  const handleNotesChange = (event) => {
    dispatch(setNotes(event.target.value));
  };

  const handleSummarize = async () => {
    const data = await summarizeNotes(notes);
    dispatch(setResult(data.result));
  };

  return (
    <main>
      <Navbar />
      <div className="pageHeader">
        <p>- Sammanfatta möte</p>
      </div>
      <section className="pageWrapper">
        <div className="inputContainer">
          <h2>Mötesanteckningar</h2>
          <textarea
            className="notes"
            value={notes}
            onChange={handleNotesChange}
            placeholder="Skriv ner mötesantekningarna här..."
          />

          <button className="generateBtn" onClick={handleSummarize}>
            Sammanfatta
          </button>
        </div>

        <div className="resultContainer">
          <h2>Sammanfattning</h2>
          {result && (
            <div className="result">
              <p>{result}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Summarize;
