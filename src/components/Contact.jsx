 
const Contact = ({ scrollRef }) => {
  return (
    <div ref={scrollRef} className="contact w-full flex ">
      <div className="w-[45%] mt-4 pb-30">
        <h3 className="text-[10rem] ">Let's</h3>
        <h3 className="text-[10rem] text-right leading-none ">Connect</h3>
      </div>
      <div className="w-[55%] ">
        <form className="flex flex-col  mt-32  ml-32 w-2xl  space-y-8">
          <input
            type="text"
            placeholder="Name"
            className="border-b focus:outline-none"
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
          <div className="flex justify-end w-full">
          <button type="submit" className="px-6 py-2 bg-[#777] rounded-full text-lg text-white w-fit">Submit</button>
            
           </div>
        </form>
      </div>
    </div>
  );
};

export default Contact