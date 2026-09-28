import Navbar from "../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setNotes, setResult } from "../reducers/meetingReducer";
import { summarizeNotes } from "../services/api";

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

      <h1>Sammanfatta möte</h1>

      <textarea
        id="notes"
        value={notes}
        onChange={handleNotesChange}
        placeholder="Skriv ner mötesantekningarna här..."
      />

      <button onClick={handleSummarize}>Sammanfatta</button>

      {result && (
        <div>
          <h2>Sammanfattning</h2>
          <p>{result}</p>
        </div>
      )}
    </main>
  );
}

export default Summarize;
