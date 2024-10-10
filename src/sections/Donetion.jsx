
import Donation0 from '../assets/images/donation0.jpg'

function Donetion() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto px-4 max-w-[1320px] mt-12 md:mt-24 items-center">
      <div>
        <h2 className="text-[35px] md:text-[45px] leading-[45px] md:leading-[55px] font-bold text-[#121212] font-inter mb-5 max-w-[492px]">Their lives depend on your donation</h2>
      <p className="text-[16px] md:text-[18px] font-normal font-poppins leading-[28px] text-[#707070] max-w-[482px] ">Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>
      <p className="text-[16px] md:text-[18px] font-normal font-poppins leading-[28px] text-[#707070] max-w-[482px] mt-5">Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset.</p>
      <button className="w-56 h-14 bg-[#FF5959] text-xl font-semibold  text-white mt-8 rounded-md">How to Contribute?</button>
      </div>
      <div>
        <img src={Donation0} className="w-full rounded-md" alt="img" />
      </div>
      
    </div>
  )
}

export default Donetion