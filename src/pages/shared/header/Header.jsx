import NavBar from "../navBar/NavBar";

import Image from "../../../assets/1.jpg";

const Header = () => {
  return (
    <div className="bg-[#07332F] ">
      <NavBar />

      <div className="grid md:grid-cols-2 justify-between text-white md:px-6 gap-4 p-2 md:pt-10 md:pb-28">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">
            Your Best Medical <br /> Help Center
          </h1>
          <p className="w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            vitae doloribus consequuntur ea modi ut ratione ullam, voluptate
            quasi odio voluptatibus recusandae debitis blanditiis, accusantium
            nemo sit deserunt inventore? Laborum.
          </p>
          <button
            type="submit"
            className="bg-amber-400 rounded-md px-4 py-1 text-white"
          >
            All service
          </button>
        </div>

        <div className="bg-[#07332F] h-56">
          <div className="transform -skew-x-6 relative">
            <img
              src={Image}
              alt=""
              className="w-1/3 md:h-52 h-32 transform -skew-x-6 border-4 border-white absolute md:top-8 left-12 top-5"
            />
          </div>

          <div className="transform -skew-x-6 relative z-10">
            <img
              src={Image}
              alt=""
              className="w-1/3 md:h-52 h-32 transform -skew-x-6 border-4 border-white absolute md:left-32 md:top-36 left-24 top-20"
            />
          </div>

          <div className="transform -skew-x-6 relative z-20">
            <img
              src={Image}
              alt=""
              className="w-1/3 md:h-52 h-32 transform -skew-x-6 border-4 border-white absolute md:left-60 left-44"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
