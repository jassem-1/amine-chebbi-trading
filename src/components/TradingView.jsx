import { useEffect } from "react";

const TradingViewWidget = () => {
  useEffect(() => {
    // Dynamically add the script for the TradingView widget
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      isTransparent: false,
      width: "400",
      height: "550",
      locale: "en",
      importanceFilter: "-1,0,1",
      countryFilter: "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu",
    });

    // Append the script to the widget container
    const container = document.querySelector(".tradingview-widget-container__widget");
    if (container) {
      container.innerHTML = ""; // Clear previous content if any
      container.appendChild(script);
    }

    return () => {
      // Cleanup the script to avoid memory leaks
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;
