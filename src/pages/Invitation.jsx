import Navbar from "../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setInvitation } from "../reducers/meetingReducer";
import { createInvitation } from "../services/api";
import "./Pages.css";
import { useState } from "react";

function Invitation() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.meeting.invitation);

  const [title, setTitle] = useState();
  const [week, setWeek] = useState();
  const [weekDay, setWeekDay] = useState();
  const [location, setLocation] = useState();
  const [purpose, setPurpose] = useState();

  const handleCreateInvitation = async () => {
    const invitationData = {
      title: title,
      week: week,
      weekDay: weekDay,
      location: location,
      purpose: purpose,
    };
    const data = await createInvitation(invitationData);
    dispatch(setInvitation(data.result));
  };
  return (
    <main>
      <Navbar />
      <div className="pageHeader">
        <p>- Skapa inbjudan till möte</p>
      </div>
      <section className="pageWrapper">
        <div className="inputContainer">
          <h2>Information:</h2>
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

          <button className="generateBtn" onClick={handleCreateInvitation}>
            Generera inbjudan
          </button>
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
    </main>
  );
}

export default Invitation;
