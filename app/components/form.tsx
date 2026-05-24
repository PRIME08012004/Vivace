

export default function ContactUsForm(){


    return(
    <>
    <div className="bg-black w-full h-3/4 rounded-4xl text-white p-16 flex flex-col">

    <h1 className="font-medium text-4xl pb-10 ">Any Queries ?</h1>
        <div className="flex flex-col gap-10">
               
    <input
      type="text"
      placeholder="First Name"
      className="bg-transparent outline-none border-b-2 border-white pb-2 text-white placeholder:text-gray-400 focus:border-cal-brown transition-colors"
    />

    <input
      type="text"
      placeholder="Last Name"
      className="bg-transparent outline-none border-b-2 border-white pb-2 text-white placeholder:text-gray-400 focus:border-cal-brown transition-colors"
    />
     <input
      type="text"
      placeholder="Phone Number"
      className="bg-transparent outline-none border-b-2 border-white pb-2 text-white placeholder:text-gray-400 focus:border-cal-brown transition-colors"
    />
     <input
      type="text"
      placeholder="Email"
      className="bg-transparent outline-none border-b-2 border-white pb-2 text-white placeholder:text-gray-400 focus:border-cal-brown transition-colors"
    />
    <button className="text-black bg-white p-2  self-start rounded-full">Send Query</button>
        </div>
            
    </div>
    
    
    </>
    
    )
}
