const API_URL = "https://localhost:7283/api/ai";

export async function summarizeNotes(notes) {
  const response = await fetch(`${API_URL}/summarize`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      notes: notes,
    }),
  });

  if (!response.ok) {
    throw new Error("Något gick fel...");
  }

  return await response.json();
}

export async function createAgenda(agendaData) {
  const response = await fetch(`${API_URL}/agenda`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(agendaData),
  });

  if (!response.ok) {
    throw new Error("Något gick fel...");
  }

  return await response.json();
}

export async function createInvitation(invitationData) {
  const response = await fetch(`${API_URL}/invitation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(invitationData),
  });

  if (!response.ok) {
    throw new Error("Något gick fel...");
  }

  return await response.json();
}
