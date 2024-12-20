import JoinForm from "./Form";

const Contact = () => {
  return (
    <div id="join" className="container flex flex-col justify-center items-center mx-auto p-8 pt-24">
      <h1 className="text-2xl text-black font-bold mb-8">Join Our Groups</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form for Crypto Group */}
        <div>
          <JoinForm groupType="crypto" />
        </div>

        {/* Form for Forex Group */}
        <div>
          <JoinForm groupType="forex" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
