import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage("en")} className="px-2 py-1 bg-gray-200 rounded">
        EN
      </button>
      <button onClick={() => changeLanguage("fr")} className="px-2 py-1 bg-gray-200 rounded">
        FR
      </button>
      <button onClick={() => changeLanguage("ar")} className="px-2 py-1 bg-gray-200 rounded">
        AR
      </button>
    </div>
  );
};

export default LanguageSelector;
