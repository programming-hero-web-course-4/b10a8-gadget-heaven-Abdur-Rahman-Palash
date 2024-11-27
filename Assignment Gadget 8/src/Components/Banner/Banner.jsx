import { useNavigate } from "react-router-dom";


const Banner = () => {
    const navigate = useNavigate();
    const goToDashBoard =()=>{
        navigate("/dashboard")
    }
    return (
        <div className="text-center bg-[#9538E2] mb-80 h-[400px] relative  w-11/12 mx-auto p-10 ">
            <h1 className="text-md lg:text-5xl font-extrabold text-white">Upgrade Your Tech <br /> Accessorize with <br /> Gadget Heaven Accessories</h1> 
           <p className="text-[12px] text-sm text-white">Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
           <button onClick={goToDashBoard } className="btn rounded-full text-[#9538E2]">Shop Now</button>
           <div className="absolute lg:ml-[240px] top-72">
        <img className="max-w-4xl h-96 mx-auto rounded-lg" src="./src/assets/banner.jpg" alt="" />
       </div>
            </div>
        
    );
};

export default Banner;