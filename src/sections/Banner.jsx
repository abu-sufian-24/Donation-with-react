

function Banner() {
  return (
    <div className="text-center bg-[url('./assets/images/1.jpg')] bg-cover bg-center  relative h-screen md:h-screen">
      <div className="py-40 absolute inset-0 bg-gradient-to-b from-[#121212] to-[#121212]/0 opacity-90">
         <h1 className="text-[35px] md:text-[65px] font-bold font-inter leading-[45px] md:leading-[80px] max-w-[826px] m-auto mb-5 text-white">Let’s Help Those Who Are More In Need</h1>
      <p className=" px-4 text-[18px] font-normal font-poppins leading-[28px] max-w-[691px] m-auto text-[#fff]">Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>
      <button className="w-40 h-14 bg-[#FF5959] text-xl font-semibold  text-white mt-8 rounded-md">Donate Now</button>
      </div>
     
    </div>
  )
}

export default Banner