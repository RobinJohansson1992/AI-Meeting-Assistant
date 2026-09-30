import Navbar from "../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setAgenda, setLoading, setError } from "../reducers/meetingReducer";
import { createAgenda } from "../services/api";
import "./Pages.css";
import { useState } from "react";

function Agenda() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.meeting.agenda);
  const loading = useSelector((state) => state.meeting.loading);
  const error = useSelector((state) => state.meeting.error);

  const [title, setTitle] = useState("");
  const [purpose, setPurpose] = useState("");
  const [durationInMinutes, setDurationInMinutes] = useState(60);

  const handleCreateAgenda = async () => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      const agendaData = {
        title: title,
        purpose: purpose,
        durationInMinutes: Number(durationInMinutes),
      };
      const data = await createAgenda(agendaData);
      dispatch(setAgenda(data.result));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <>
      <Navbar />
      <div className="pageHeader">
        <p>- Skapa mötesagenda</p>
      </div>
      <section className="pageWrapper">
        <div className="inputContainer">
          <label htmlFor="title">Titel</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="T.ex. projektmöte"
          />

          <label htmlFor="purpose">Syfte</label>
          <textarea
            className="agendaTextarea"
            id="purpose"
            value={purpose}
            onChange={(event) => setPurpose(event.target.value)}
            placeholder="Vad är syftet med mötet?"
          />

          <label htmlFor="duration">Längd i minuter</label>
          <input
            id="duration"
            type="number"
            min="1"
            value={durationInMinutes}
            onChange={(event) => setDurationInMinutes(event.target.value)}
          />

          <button
            className="generateBtn"
            onClick={handleCreateAgenda}
            disabled={
              loading ||
              title.trim().length === 0 ||
              purpose.trim().length === 0
            }
          >
            {loading ? "Skapar agenda..." : "Generera agenda"}
          </button>

          {error && <p>Fel: {error}</p>}
        </div>

        <div className="resultContainer">
          <h2>Genererad agenda:</h2>
          {result && (
            <div className="result">
              <p>{result}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Agenda;
