function loadLanguage(lang) {
  fetch("languages.json")
    .then(response => response.json())
    .then(translations => {
      const texts = translations[lang];

      // Textelemente auf der Webseite aktualisieren
      document.getElementById("nav-home").textContent = texts.home;
      document.getElementById("nav-about").textContent = texts.about_us;
      document.getElementById("nav-services").textContent = texts.services;
      document.getElementById("nav-contact").textContent = texts.contact;
      document.getElementById("header-slogan").textContent = texts.header_slogan;
      document.getElementById("about-text").textContent = texts.about_text;
    })
    .catch(error => {
      console.error("Fehler beim Laden der Sprache:", error);
    });
}

// Event Listener für den Sprachwechsel
document.getElementById("language-select").addEventListener("change", (event) => {
  loadLanguage(event.target.value);
});

// Standardmäßig auf Deutsch setzen
loadLanguage("de");
