import logo from "@/assets/logo-good.png";
 

export default function Navbar() {
 


  return ( 
    <div className="w-full border  flex items-center  justify-center px-2 ">
      <div className="w-full max-w-6xl h-16 flex items-center justify-between px-4 md:px-8 py-0 rounded-2xl ">
        
       
        <div className="h-full py-2 cursor-pointer">
          <img src={logo} alt="logo" className="h-full object-contain" />
        </div>

       
   

      </div>
    </div>
  );
}