
const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-14 px-8 gap-6 ">

        <div className="font-display">

            <h1 className="text-6xl md:text-9xl font-bold uppercase">
                i build <br /> the part <br />
                <span className="text-orange-600">you click.</span>
            </h1>

        </div>

        <div className="flex items-center justify-center md:justify-end mt-12 md:mt-0 mr-0 md:mr-10 ">

            <div className=" border border-black w-80 h-72 bg-orange-600 shadow-[8px_8px_0_black] rotate-8 p-5 ">

                <div className="mx-auto w-5 h-5 rounded-full bg-white"></div>

                <h4 className="font-label uppercase my-5 font-bold text-lg">frontend developer</h4>
                <h2 className="uppercase font-display font-bold text-3xl mb-4">[ mahmoud yousef ]</h2>
                <hr className=""/>
                <p className="mt-5 font-semibold capitalize font-label">next.js & react</p>
                <p className="font-semibold capitalize font-label">supabase integration</p>
                <p className="font-semibold capitalize font-label">responsive UI development</p>
            </div>

        </div>

    </div>
  )
}

export default Hero
