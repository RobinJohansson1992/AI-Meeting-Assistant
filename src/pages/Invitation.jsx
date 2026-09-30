import Navbar from "../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  setInvitation,
  setLoading,
  setError,
} from "../reducers/meetingReducer";
import { createInvitation } from "../services/api";
import "./Pages.css";
import { useState } from "react";

function Invitation() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.meeting.invitation);
  const loading = useSelector((state) => state.meeting.loading);
  const error = useSelector((state) => state.meeting.error);

  const [title, setTitle] = useState("");
  const [week, setWeek] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleCreateInvitation = async () => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      const invitationData = {
        title: title,
        week: week,
        weekDay: weekDay,
        time: time,
        location: location,
        purpose: purpose,
      };
      const data = await createInvitation(invitationData);
      dispatch(setInvitation(data.result));
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
        <p>- Skapa inbjudan till möte</p>
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

          <label htmlFor="week">Vecka</label>
          <input
            id="week"
            type="number"
            value={week}
            onChange={(event) => setWeek(event.target.value)}
            placeholder="T.ex. 52"
          />

          <label htmlFor="weekDay">Veckodag</label>
          <input
            id="weekDay"
            type="text"
            value={weekDay}
            onChange={(event) => setWeekDay(event.target.value)}
            placeholder="T.ex. Måndag"
          />

          <label htmlFor="time">Tid</label>
          <input
            id="time"
            type="text"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            placeholder="T.ex. 13:00"
          />

          <label htmlFor="location">Plats</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="T.ex. Stora samlingssalen"
          />

          <label htmlFor="purpose">Syfte</label>
          <textarea
            className="agendaTextarea"
            id="purpose"
            value={purpose}
            onChange={(event) => setPurpose(event.target.value)}
            placeholder="Vad är syftet med mötet?"
          />

          <button
            className="generateBtn"
            onClick={handleCreateInvitation}
            disabled={
              loading ||
              title.trim().length === 0 ||
              purpose.trim().length === 0
            }
          >
            {loading ? "Skapar inbjudan..." : "Generera inbjudan"}
          </button>

          {error && <p>Fel: {error}</p>}
        </div>

        <div className="resultContainer">
          <h2>Genererad inbjudan:</h2>
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

export default Invitation;
