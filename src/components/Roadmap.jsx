import Heading from "./Heading";
import Section from "./Section";
import { roadmap } from "../constants";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container pt-6 md:pb-10 ">
      <Heading tag="Start your learning journey" title=" Tutorials and Explanations" />

      <div className="relative grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {

          return (
            <div
              className={`md:flex  p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-4  bg-n-8 rounded-[2.4375rem] overflow-hidden ">
             
                <div className="relative z-1">
                  <div className="mb-4 ">
                  {item.videoUrl && (
        <div className="mt-4 flex justify-center items-center">
          <video className="w-full rounded-lg" controls>
            <source src={item.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
                  </div>
                  <h4 className="tex-base mb-4">{item.title}</h4>
                  <p className="text-sm text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

    </div>
  </Section>
);

export default Roadmap;
