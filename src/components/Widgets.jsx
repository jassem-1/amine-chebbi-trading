import Section from "./Section";

import TradingWidget from "./CalculateWidget";
import TradingViewWidget from "./TradingView";

const Widgets = () => (
  <Section  id="widgets">
    <div className="container flex  gap-16 justify-center items-center pt-6 md:pb-10 ">
      
<TradingWidget />
<TradingViewWidget />

    </div>
  </Section>
);

export default Widgets;
