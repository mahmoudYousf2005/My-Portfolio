

const Contact = () => {
  return (
    <section id="contact" className="bg-orange-700">

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]  px-8 py-12 ">
        {/* text */}
        <div className=" ">
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase">let&apos;s build</h1>
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase">something good</h1>

          <p className="text-xl mt-4 font-label">Have an idea, a project, or an opportunity?</p>
          <p className="text-xl font-label">Tell me about it, I&apos;d Love to hear from you.</p>

          <h2 className="px-3 py-1.5 border uppercase w-fit text-xl rounded-lg mt-4 font-semibold">open to freelance projects</h2>

          <div className="flex gap-4 mt-4">
            <a href="" className="font-semibold border-b"
            >GitHub</a>
            <a href=""  className="font-semibold border-b"
            >LinkedIn</a>
            <a href=""  className="font-semibold border-b"
            >mahmoudyoseef2005@gmail.com</a>
          </div>
        </div>

        {/* form */}
        <div className="bg-white rounded-xl mt-6 md:mt-0 p-5 border-2">
          <h1 className="font-display text-4xl uppercase">get in touch</h1>

          <form action="">
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">

              <div className="">
                <label htmlFor="" className=" capitalize block ">your name</label>
                <input type="text" placeholder="Enter your name" className="border text-lg w-full placeholder:text-sm px-2 py-1 rounded-lg outline-none"/>
              </div>
              <div className="">
                <label htmlFor="" className=" capitalize block ">email <address></address></label>
                <input type="text" placeholder="you@example.com" className="border  text-lg w-full placeholder:text-sm px-2 py-1 rounded-lg outline-none "/>
              </div>
            </div>

            <div className="mt-2">
              <label htmlFor="" className="capitalize block">subject</label>
              <select name="subject" className="w-full border border-gray-700 py-1 px-2 rounded-lg text-gray-700 outline-none">
                <option value="" disabled selected>Select a subject</option>
                <option value="new-project" >New Project</option>
                <option value="freelance-opportunity" >Freelance Opportunity</option>
                <option value="website-redesign" >Website Redesign</option>
                <option value="collaboration" >Collaboration</option>
                <option value="job-opportunit" >Job Opportunity</option>
                <option value="other" >Other</option>
              </select>
            </div>

            <div className="mt-2">
              <label htmlFor="" className="capitalize block">message</label>
              <textarea name="" id="" className="border w-full outline-none "></textarea>
            </div>
            <button className=" uppercase bg-black text-white rounded-lg w-full py-2 cursor-pointer mt-2 ">send message</button>

          </form>
        </div>

      </div>

      <div className="p-6 border-t ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h3 className=" uppercase font-semibold font-label">mahmoud yousef - frontend developer</h3>
          <h3 className=" uppercase font-semibold font-label">2026. designed & built with care.</h3>
        </div>
      </div>

    </section>
  )
}

export default Contact
