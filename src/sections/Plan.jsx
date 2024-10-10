

function Plan() {
  return (
    <div className=" mt-12 md:mt-32">
      <div className="text-center">
       <h1 className="text-[35px] md:text-[45px] font-bold text-[#121212] font-inter mb-5">Our Donate Plan</h1>
      <p className="px-4 text-[18px] md:text-[18px] font-normal font-poppins leading-[28px] max-w-[691px] m-auto">Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3   mx-auto px-4 max-w-[1320px] mt-12">
        
        <div className="bg-[rgba(7,15,16,0.1)] p-[60px_0px_48px_23px] rounded-md">
           <i className="fas fa-bowl-rice text-[40px]"></i>
          <h3 className="text-[24px] font-bold text-[#121212] font-poppins my-5">Food for a family</h3>
          <p className="text-[16px] font-normal font-poppins leading-[28px] max-w-[315px] text-[#707070] ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
        <div className="bg-[rgba(255,89,89,0.10)] p-[60px_0px_48px_23px] rounded-md">
           <i className="fas fa-people-roof text-[40px]"></i>
          <h3 className="text-[24px] font-bold text-[#121212] font-poppins my-5">Shelter for a family</h3>
          <p className="text-[16px] font-normal font-poppins leading-[28px] max-w-[315px] text-[#707070]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
        <div className="bg-[#FFF4D6] p-[60px_0px_48px_23px] rounded-md">
           <i className="fas fa-book-reader text-[40px]"></i>
          <h3 className="text-[24px] font-bold text-[#121212] font-poppins my-5">Education for a child</h3>
          <p className="text-[16px] font-normal font-poppins leading-[28px] max-w-[315px] text-[#707070]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
      </div>
     
    </div>
  )
}

export default Plan