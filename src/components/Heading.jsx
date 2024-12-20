import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className}text-black  max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <TagLine className="mb-4 text-black md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2 text-black">{title}</h2>}
      {text && <p className="body-2 mt-4 text-black">{text}</p>}
    </div>
  );
};

export default Heading;
