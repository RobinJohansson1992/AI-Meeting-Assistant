import Navbar from "../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setLoading,
  setNotes,
  setSummary,
} from "../reducers/meetingReducer";
import { summarizeNotes } from "../services/api";
import "./Pages.css";

function Summarize() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.meeting.notes);
  const result = useSelector((state) => state.meeting.summary);
  const loading = useSelector((state) => state.meeting.loading);
  const error = useSelector((state) => state.meeting.error);

  const handleNotesChange = (event) => {
    dispatch(setNotes(event.target.value));
  };

  const handleSummarize = async () => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      const data = await summarizeNotes(notes);
      dispatch(setSummary(data.result));
    } catch (error) {
      dispatch(setLoading(false));
    } finally {
      dispatch(setLoading(false));
    }
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

          <button
            className="generateBtn"
            onClick={handleSummarize}
            disabled={loading || notes.trim().length === 0}
          >
            {loading ? "Sammanfattar..." : "Sammanfatta"}
          </button>

          {error && <p>Fel: {error}</p>}
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
