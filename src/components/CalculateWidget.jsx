import  { useEffect } from "react";

const TradingWidget = () => {
  useEffect(() => {
    // Dynamically load the widget script after the component mounts
    const script = document.createElement("script");
    script.src = "https://www.cashbackforex.com/Content/remote/remote-widgets.js";
    script.async = true;
    script.onload = () => {
      // Ensure the widget initialization runs after the script is loaded
      if (window.RemoteCalc) {
        window.RemoteCalc({
          Url: "https://www.cashbackforex.com",
          TopPaneStyle: "YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmYgMjAlLCAjZjVmNWY1IDQ1JSk7IGNvbG9yOiBibGFjazsgYm9yZGVyOiBzb2xpZCAxcHggI2FhYTsgYm9yZGVyLWJvdHRvbTogbm9uZTsg",
          BottomPaneStyle: "YmFja2dyb3VuZDogI2YzZjNmMzsgYm9yZGVyOiBzb2xpZCAxcHggI2FhYTsgY29sb3I6IGJsYWNrOw==",
          ButtonStyle: "YmFja2dyb3VuZDogIzM0MzU0MDsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiAyMHB4Ow==",
          TitleStyle: "dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==",
          TextboxStyle: "YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IGNvbG9yOiBibGFjazsgYm9yZGVyOiBzb2xpZCAxcHggI2FhYWFhYQ==",
          ContainerWidth: "665",
          HighlightColor: "#ffff00",
          IsDisplayTitle: false,
          IsShowChartLinks: true,
          IsShowEmbedButton: true,
          CompactType: "large",
          Calculator: "margin-calculator",
          ContainerId: "margin-calculator-553779",
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return <div className="w-full" id="margin-calculator-553779" />;
};

export default TradingWidget;
