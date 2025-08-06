 
const Contact = ({ scrollRef }) => {
  return (
    <div ref={scrollRef} className="contact w-full flex flex-col md:flex-row px-4 pb-6">
      <div className="w-full md:w-[45%] mt-4  md:pb-30">
        <h3 className="text-7xl md:text-[10rem] ">Let's</h3>
        <h3 className="text-7xl  md:text-[10rem] text-right mr-10 md:mr-0 leading-none ">Connect</h3>
      </div>
      <div className="w-full  md:w-[55%] ">
        <form className="flex flex-col mt-16 md:mt-32  md:ml-32 w-full md:w-2xl  space-y-8">
          <input
            type="text"
            placeholder="Name"
            className="border-b focus:outline-none "
          />

          <input
            type="email"
            placeholder="Email"
            className="border-b focus:outline-none"
          />

          <textarea
            type="text"
            placeholder="description"
            className="border-b focus:outline-none"
          />
          <div className="flex justify-end pr-2 w-full">
          <button type="submit" className="px-6 py-2 bg-[#777] rounded-full text-lg text-white w-fit">Submit</button>
            
           </div>
        </form>
      </div>
    </div>
  );
};

export default Contact