import data from "./ProjectsData"
import Image from "next/image"
const Projects = () => {
    console.log(data)
    if(!data.length)return <h2>no projects</h2>
  return (
    <div className="bg-black px-6 py-16">
 
      <section id="work">

        <div className="flex flex-col md:flex-row  md:items-center justify-between  uppercase">

            <h1 className="text-5xl md:text-9xl text-white font-display ">the catalog</h1>
            <h4 className="text-gray-500 mt-3 md:mt-0 font-label">3 items / all hand-built</h4>
           
        </div>

        <div className="mt-8">
            {data.map((item)=>(
                <div key={item.id}
                className="py-6 border-y border-gray-800 grid grid-cols-1  md:grid-cols-[1fr_3fr_3fr] items-center hover:bg-zinc-950">
                    
                    {/* text */}
                    <div className="">
                        <h3 className=" font-label text-orange-600 text-xl font-bold">{item.id}</h3>
                    </div> 

                    <div className="text-white space-y-5 ">                       
                        <h3 className="text-white font-display text-5xl uppercase">{item.title}</h3>
                        <p className="text-gray-300 font-body text-lg">{item.discription}</p>
                    {/* stack */}

                        <div className="grid items-center w-fit grid-cols-2  md:grid-cols-3 gap-4 font-label">
                            {item.stack.map((s)=>(
                                <span key={s}
                                className="py-1 px-2 border border-gray-400 uppercase rounded-lg">
                                    {s}
                                </span>
                            ))}

                            <span className="py-1 px-2 border border-gray-400 uppercase rounded-lg">{item.categoris}</span>
                        </div>

                        {/* links */}    
                        <div className="flex items-center gap-6 font-label">
                                    
                            {item.links.map((l)=>(
                                <a key={l.id} href={l.href}
                                className= {`border-b border-gray-500 text-lg text-${l.color} font-bold capitalize`}
                                >{l.name}</a>
                            ))}
                        </div> 
                    </div>
                    {/* img */}
                    <div className=" mt-6 md:mt-0 text-white flex justify-center items-center ">
                        <Image 
                            className="w-68 rounded-xl"
                            src={item.img}
                            alt={item.title}
                            
                        />
                    </div>
                    

                </div>
            ))
            }
        </div>
        
      </section>

    </div>
  )
}

export default Projects
