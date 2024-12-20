import { useEffect } from "react";

const TranslateWidget = () => {
  useEffect(() => {
    // Check if the script already exists
    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.type = "text/javascript";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);

      // Attach the Google Translate initialization function to the window object
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en", // Default page language
            includedLanguages: "en,fr,ar", // Restrict to English, French, and Arabic
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE, // Optional: Simple dropdown UI
          },
          "google_translate_element" // The ID of the container where the widget will appear
        );
      };
    } else {
      // If script already exists, call the init function
      if (window.googleTranslateElementInit) {
        window.googleTranslateElementInit();
      }
    }
  }, []);

  return <div id="google_translate_element"></div>; // Widget container
};

export default TranslateWidget;
