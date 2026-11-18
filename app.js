
document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.querySelector("textarea");
  const button = document.querySelector("button");
  const chat = document.querySelector(".chat");

  if (!textarea || !button || !chat) {
    console.error("Chat-Elemente wurden nicht gefunden.");
    return;
  }

  const response = document.createElement("div");

  response.style.marginTop = "18px";
  response.style.padding = "15px";
  response.style.borderRadius = "12px";
  response.style.background = "#252735";
  response.style.color = "#d7d8e2";
  response.style.lineHeight = "1.6";
  response.style.display = "none";

  chat.appendChild(response);

  button.onclick = () => {
    const question = textarea.value.trim();

    if (!question) {
      response.textContent =
        "Bitte beschreibe zuerst dein Roblox-Projekt.";
      response.style.display = "block";
      return;
    }

    response.textContent =
      "Deine Anfrage wurde erfolgreich erfasst: " +
      question +
      " | Die Verbindung zur echten Roblox-KI wird noch eingerichtet.";

    response.style.display = "block";
  };

  textarea.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      button.click();
    }
  });

  console.log("Roblox KI Developer Chat ist bereit!");
});
