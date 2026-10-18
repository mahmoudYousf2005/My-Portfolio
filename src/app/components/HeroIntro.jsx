
const HeroIntro = () => {
  return (
    <div className="p-10 border-y-3 border-black grid grid-cols-1 md:grid-cols-2 gap-8"> 

        {/* Text */}
        <div className="">
            <p className="text-lg font-semibold font-body">
                Hi, I&apos;m Mahmoud Yousef. I build reaponsive web <br />
                experiences, e-commerse platform, and <br />
                dashboards using React and Next.js.
            </p>
        </div>


        {/* button */}
        <div className="flex flex-col md:flex-row justify-end md:items-center gap-6 mt-8 md:mt-0 font-label">
            <button className="py-3 text-white bg-black w-3/6 text-lg font-bold capitalize cursor-pointer">browse the catalog</button>
            <button className="border-3 py-3 capitalize font-bold text-lg w-2/6 cursor-pointer">hire me</button>
        </div>

    </div>
  )
}

export default HeroIntro
