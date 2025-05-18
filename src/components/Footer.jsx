import ElemesLogo from '../assets/image 55.png'; //

const Footer = () => {

  return (
    <div className="footer mt-20" id="contacts">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-6">
           <div className="logo">
                             <img src={ElemesLogo} alt="Elemes Logo" className="h-10 sm:h-12 mb-8" />
                             </div>
            <p className="text-gray-600">
              JL Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,<br />
              Kecamatan Setlahudi, Kota Jakarta Selatan,<br />
              Daerah Khusus Ibukota Jakarta 12950
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="text-gray-600">
              <li>Cupcake</li>
              <li>Pizza</li>
              <li>Kebab</li>
              <li>Salmon</li>
              <li>Doughnut</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="text-gray-600">
              <li>About Us</li>
              <li>FAQ</li>
              <li>Report Problem</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Get now free 50% discount for all products on your first order
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 border border-gray-300 rounded-l-lg flex-grow"
              />
              <button className="bg-[#8BAC3E] text-white p-2 rounded-r-lg">
                SEND
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row items-center justify-center">
          <p className="text-gray-600">
            © 2021 ELEMES ID. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;