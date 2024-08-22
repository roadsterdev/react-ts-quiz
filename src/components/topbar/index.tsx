import back from "../../assets/back.svg";

interface TopbarProps {
  currentStep: number;
  totalSteps: number;
  handlePrev: () => void;
}

const Topbar = ({ currentStep, totalSteps, handlePrev }: TopbarProps) => {
  return (
    <div className="flex items-end justify-between text-gray-100 font-semibold">
      <button className="flex gap-2 items-center" onClick={handlePrev}>
        <img src={back} alt="" />
        <span>Back</span>
      </button>
      <div className="">GOALS</div>
      <div className="">{`${currentStep}/${totalSteps}`}</div>
    </div>
  );
};

export default Topbar;
