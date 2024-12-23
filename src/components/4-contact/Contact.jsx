import AskQuestionForm from "../AskQuestioni";
import GroupCard from "../GroupCard";

const Contact = () => {
  return (
    <div id="join" className="container flex flex-col justify-center items-center mx-auto p-8 pt-24">
      <h1 className="text-2xl text-black font-bold mb-8">Join Our Groups</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form for Crypto Group */}
        <a href="/forex-group">
        <GroupCard groupName="Forex" />
        </a>

        {/* Form for Forex Group */}
        <a href="/crypto-group">
        <GroupCard groupName="Crypto" />
        </a>
       
      </div>
      <div className="w-full pt-4 flex justify-center items-center flex-col mt-16 border-t-2  border-gray-300">
      <h2 className="text-black text-xl w-1/3 text-center">You can submit your question and receive the answer directly in your email.</h2>
<AskQuestionForm />

        </div>
    </div>
  );
};

export default Contact;