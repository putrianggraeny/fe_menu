import HomeImage from "../assets/Image.png";
import Cupcake from "../assets/Frame.png";
import Pizza from "../assets/pizza 1.png";
import Kebab from "../assets/kebab 1.png";
import Doughnut from "../assets/doughnut 1.png";
import Salmon from "../assets/salmon 1.png";
import PizzaPaper from "../assets/Mask Group.jpg"
import PizzaMeat from "../assets/Mask Group (1).jpg"
import DonerKebab from "../assets/Mask Group (2).jpg"
import SalmonRoll from "../assets/Mask Group (3).jpg"
import CupcakeChoco from "../assets/Mask Group.png"
import DoughnutMilk from "../assets/Mask Group (1).png"
import DoughnutPink from "../assets/Mask Group (2).png"
import KathiKebab from "../assets/Mask Group (3).png"

const Homepage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1  pt-32 items-center gap-20">
          <div className="box order-1 md:order-1">
            <h1 className="lg:text-6xl/tight text-3xl font-medium mb-7">
              <span className="font-semibold text-[#8BAC3E]">Good Food Us<br></br></span> <span className="font-semibold text-[#8BAC3E]">Good Mood</span> 
            </h1>
            <div className="md:hidden mb-7">
              <img 
                src={HomeImage} 
                alt="Home Image" 
                className="w-[250px] mx-auto" 
              />
            </div>
            <p className="text-base/8 mb-7 text-gray-500">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
            <a href="#" className="bg-[#8BAC3E] hover:bg-[#8BAC3F] transition-all py-2 px-4 text-white shadow rounded-full mr-3">
              Daftar Sekarang <i className="ri-eye-line- ms-1"></i>
            </a>
            <a href="#" className="font-semibold bg-gray-100 hover:bg-gray-300 transition-all py-2 px-4 text-black shadow rounded-full">
              Tentang Kami <i className="ri-eye-line- ms-1"></i>
            </a>
          </div>
          <div className="box hidden md:block order-2 md:order-2">
            <img 
              src={HomeImage} 
              alt="Home Image" 
              className="w-full mx-auto" 
            />
          </div>
        </div>

        <div className="promotions pt-32" id="promotions">
        <h1 className="text-left lg:text-5xl/tight text-3xl font-medium mb-2">Browser Our Category</h1>
        <p className="text-4xl font-semibold text-left text-[#8BAC3E] mb-12">Receipt</p>

          <div className="promotions-box flex overflow-x-auto gap-4 pb-6 hide-scrollbar">
            
          <div className="box bg-[#F0FEEB] rounded-lg shadow p-6 flex-shrink-0 w-[200px] hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <img 
              src={Cupcake}
              alt="Cupcake" 
              className="w-24 h-24 object-cover mb-4" 
            />
            <h3 className="text-xl font-bold text-gray-800">Cupcake</h3>
            <p className="text-gray-600 mt-4">22 items</p>
          </div>

          <div className="box bg-[#E6F3F5] rounded-lg shadow p-6 flex-shrink-0 w-[200px] hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <img 
              src={Pizza}
              alt="Pizza" 
              className="w-24 h-24 object-cover mb-4" 
            />
            <h3 className="text-xl font-bold text-gray-800">Pizza</h3>
            <p className="text-gray-600 mt-4">25 items</p>
          </div>
          <div className="box bg-[#EAEEFA] rounded-lg shadow p-6 flex-shrink-0 w-[200px] hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <img 
              src={Kebab}
              alt="Kebab" 
              className="w-24 h-24 object-cover mb-4" 
            />
            <h3 className="text-xl font-bold text-gray-800">Kebab</h3>
            <p className="text-gray-600 mt-4">12 items</p>
          </div>
          <div className="box bg-[#F9EEF3] rounded-lg shadow p-6 flex-shrink-0 w-[200px] hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <img 
              src={Salmon}
              alt="Salmon" 
              className="w-24 h-24 object-cover mb-4" 
            />
            <h3 className="text-xl font-bold text-gray-800">Salmon</h3>
            <p className="text-gray-600 mt-4">22 items</p>
          </div>
          <div className="box bg-[#F3F7D9] rounded-lg shadow p-6 flex-shrink-0 w-[200px] hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <img 
              src={Doughnut}
              alt="Doughnut" 
              className="w-24 h-24 object-cover rounded-full mb-4" 
            />
            <h3 className="text-xl font-bold text-gray-800">Doughnut</h3>
            <p className="text-gray-600 mt-4">11 items</p>
          </div>
        
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button className="bg-[#8BAC3E] hover:bg-[#8BAC3F] transition-all py-3 px-5 text-white rounded-full"> 
          <i className="bg-white rounded-full mr-2 ri-arrow-left-s-line text-xl text-[#8BAC3E]"></i>
            PREV
          </button>
          <button className="bg-[#8BAC3E] hover:bg-[#8BAC3F] transition-all py-3 px-5 text-white rounded-full"> 
            NEXT
            <i className="bg-white rounded-full ml-2 ri-arrow-right-s-line text-xl text-[#8BAC3E]"></i>
          </button>
        </div>
      </div>

        <div className="blogs pt-32" id="blogs">
        <h1 className="text-left lg:text-5xl/tight text-3xl font-medium mb-2">Browser Our Trending</h1>
        <p className="text-4xl font-semibold text-left text-[#8BAC3E] mb-12">Receipt</p>
        <div className="blogs-box pt-12 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">

        <div className="box bg-[#F0FEEB] rounded-lg shadow p-6 flex flex-col items-start text-left">
            <img 
              src={PizzaPaper} 
              alt="Pizza Paperoni" 
              className="w-25 h-25 object-cover mb-4 rounded-lg" 
            />
            <h3 className="text-xl font-bold text-gray-800">Pizza Paperoni</h3>
            <p className="text-[#8BAC3E] mt-2 font-semibold">Pizza</p>
            <p className="flex items-center gap-1">
              <i className="ri-star-fill text-yellow-400"></i>
              <i className="ri-star-fill text-yellow-400"></i>
              <i className="ri-star-fill text-yellow-400"></i>
              <i className="ri-star-fill text-yellow-400"></i>
              <i className="ri-star-line text-yellow-400"></i> 
            </p>
          </div>

          <div className="box bg-[#E6F3F5] rounded-lg shadow p-6 flex flex-col items-start text-left">
            <img 
              src={PizzaMeat}
              alt="Pizza Meat" 
              className="w-25 h-25 object-cover mb-4" 
            />
            <h3 className="text-xl font-bold text-gray-800">Pizza Meat</h3>
            <p className="text-[#8BAC3E] mt-2 font-semibold">Pizza</p>
            <p className="flex items-center gap-1">
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-line text-yellow-400"></i> 
            </p>          
          </div>

          <div className="box bg-[#EAEEFA] rounded-lg shadow p-6 flex flex-col items-start text-left">
            <img 
              src={DonerKebab}
              alt="Doner Kebab" 
              className="w-25 h-25 object-cover mb-4" 
            />
            <h3 className="text-xl font-bold text-gray-800">Doner Kebab</h3>
            <p className="text-[#8BAC3E] mt-2 font-semibold">Kebab</p>
            <p className="flex items-center gap-1">
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-line text-yellow-400"></i> 
            </p>          
          </div>

          <div className="box bg-[#F9EEF3] rounded-lg shadow p-6 flex flex-col items-start text-left">
            <img 
              src={SalmonRoll}
              alt="Salmon Roll" 
              className="w-25 h-25 object-cover mb-4" 
            />
            <h3 className="text-xl font-bold text-gray-800">Salmon Roll</h3>
            <p className="text-[#8BAC3E] mt-2 font-semibold">Salmon</p>
            <p className="flex items-center gap-1">
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-line text-yellow-400"></i> 
            </p>
          </div>

          <div className="box bg-[#F9FFF6] rounded-lg shadow p-6 flex flex-col items-start text-left">
            <img 
              src={CupcakeChoco}
              alt="Cupcake Choco" 
              className="w-25 h-25 object-cover mb-4" 
            />
            <h3 className="text-xl font-bold text-gray-800">Cupcake Choco</h3>
            <p className="text-[#8BAC3E] mt-2 font-semibold">Cupcake</p>
            <p className="flex items-center gap-1">
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-line text-yellow-400"></i> 
            </p>
          </div>

          <div className="box bg-[#F3F7D9] rounded-lg shadow p-6 flex flex-col items-start text-left">
            <img 
              src={DoughnutMilk}
              alt="Doughnut Milk" 
              className="w-25 h-25 object-cover mb-4" 
            />
            <h3 className="text-xl font-bold text-gray-800">Doughnut Milk</h3>
            <p className="text-[#8BAC3E] mt-2 font-semibold">Doughnut</p>
            <p className="flex items-center gap-1">
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-line text-yellow-400"></i> 
            </p>          
          </div>

          <div className="box bg-[#F3F7D9] rounded-lg shadow p-6 flex flex-col items-start text-left">
            <img 
              src={DoughnutPink}
              alt="Doughnut Pink" 
              className="w-25 h-25 object-cover mb-4" 
            />
            <h3 className="text-xl font-bold text-gray-800">Doughnut Pink</h3>
            <p className="text-[#8BAC3E] mt-2 font-semibold">Doughnut</p>
            <p className="flex items-center gap-1">
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-line text-yellow-400"></i> 
            </p>          
          </div>

          <div className="box bg-[#EAEEFA] rounded-lg shadow p-6 flex flex-col items-start text-left">
            <img 
              src={KathiKebab}
              alt="Kathi Kebab" 
              className="w-25 h-25 object-cover mb-4" 
            />
            <h3 className="text-xl font-bold text-gray-800">Kathi Kebab</h3>
            <p className="text-[#8BAC3E] mt-2 font-semibold">Kebab</p>
            <p className="flex items-center gap-1">
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-line text-yellow-400"></i> 
            </p>               
          </div>

          

        </div>

        </div>

      </div>
    </div>
  );
};

export default Homepage
