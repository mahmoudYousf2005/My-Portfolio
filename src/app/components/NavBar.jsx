
const NavBar = () => {
    const nav = [
        {n:"01" , label:"work" , href:"#work"},
        {n:"02" , label:"about" , href:"#skills"},
        {n:"03" , label:"skills" , href:"#skills"},
        {n:"04" , label:"contact" , href:"#contact"},
    ]
  return (
    <div className="flex justify-between flex-col md:flex-row py-5 px-6 border-b-3 border-black">

        <div className="">
            
            <a className="font-display uppercase text-4xl">
            <span className="text-[#E03A10]">[</span> mahmoud yousef <span className="text-[#E03A10]">]</span></a>

        </div>


        <nav aria-label="Main" className="flex flex-wrap gap-x-7 gap-y-2">
            {nav.map((item) => (
                <a
                key={item.href}
                href={item.href}
                className="group flex min-h-11 items-center gap-2 font-label  font-bold "
                >
                <span className="border-b-[3px] border-transparent pb-0.5 text-[#E03A10] group-hover:border-[#E03A10] text-xl">
                    {item.n}
                </span>
                <span className="border-b-[3px] border-transparent pb-0.5 group-hover:border-[#E03A10] text-xl">
                    {item.label}
                </span>
                </a>
            ))}
        </nav>
      
    </div>
  )
}

export default NavBar