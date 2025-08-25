"use client";
import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    if (!document.querySelector("#google-translate-script")) {
      const addScript = document.createElement("script");
      addScript.id = "google-translate-script";
      addScript.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2";
      document.body.appendChild(addScript);
    }

    (window as any).googleTranslateElementInit2 = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element2"
      );
    };
  }, []);

  return (
    <div
      id="google_translate_element2"
      className="mt-3 flex justify-center md:justify-start"
    ></div>
  );
};

export default GoogleTranslate;
