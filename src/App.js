import logo from "./img/logo.png";
import A from "./img/1.png";
import B from "./img/2.png";
import C from "./img/3.png";
import D from "./img/4.png";
import baner from "./img/baner.png";
import play from "./img/Button-play.png";
import square from "./img/square.png";
import circ from "./img/cirk.png";
import circ2 from "./img/cirk2.png";
import PLUS from "./img/PLUS.png";
import deux from "./img/2circle.png";
import LeftS from "./img/Left-swich.png";
import ReftS from "./img/ReftS.png";
import circle from "./img/circle.png";
import profil from "./img/profil2.png";
import profil2 from "./img/profils3.png";
import carre from "./img/sqare.png";
import bars from "./img/varg.png";
import "./App.css";

function App() {
  return (
    <div className="w-full flex flex-col items-center bg-[#161616] ">
      <div className="container">
        {/*navigation */}
        <nav class="dark:bg-gray-900">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a class="flex items-center space-x-3 rtl:space-x-reverse my-2">
              <img src={logo}></img>
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                class="text-[#FFAD60] border-[#FFAD60] border my-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
              >
                Contact Us
              </button>
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                class="my-2 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 md:p-0 text-white  rounded md:bg-transparent  md:hover:text-blue-700 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="relatve barner-box px-4 text-white flex flex-wrap items-center mx-auto p-4  justify-around text-center">
          <div className="relative h-[400px] ims ">
            <img className="mb-10" src={A}></img>
            <img className="left-8 absolute  bottom-[-14px] " src={B}></img>
          </div>
          <div className="box mt-[100px]  ">
            <div className="text-[72px] font-bold baner-title ">
              Make your<br></br>
              <span className="text-[#96CEB4] ">Platform </span>Perfect
            </div>
            <p className="my-10">
              we are a design studio that has completed various projects in the
              <br></br>
              field of technology to perfection.
            </p>
            <button
              type="button"
              class="text-[#ffffff] bold  bg-[#4C40F7]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
            >
              Contact Us
            </button>
          </div>
          <div className="h-[400px] relative">
            <img className="mb-10" src={C}></img>
            <img className="left-8 absolute  bottom-[-20px]" src={D}></img>
          </div>
        </div>
      </div>
      <div className="w-full pb-36 bg-[url('./img/bg1.png')] px-3 bg-no-repeat bg-left-top">
        <div className="w-full flex flex-col  items-center">
          <div className="container">
            <div className="text-[#FFFFFF]  flex flex-wrap items-center justify-around  mx-auto p-4 my-20">
              <div className="text-[60px] font-bold baner-title2 ">
                why should choose us ?
              </div>
              <div className="text-[20px] ">
                Let's see what makes you have to choose us, <br></br> it's all
                in this video.
              </div>
            </div>
            <div className="w-full  flex items-center justify-center relative ">
              <img src={baner} className=""></img>
              <img
                className="absolute cursor-pointer play-img"
                src={play}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  bg-[url('./img/bg2.png')] bg-no-repeat bg-right-bottom px-4 ">
        <div className="w-full flex justify-center">
          <div className="container  flex justify-around flex-wrap">
            <div className="my-10">
              <div className="text-white  service-offer text-[70px] font-bold">
                What services <br></br> do we offer ?
              </div>
              <div className="text-white  my-10">
                These are some of the services that you will get if <br></br>
                you cooperate with us, of course there are many <br></br>
                more.
              </div>
              <div className="text-[#96CEB4] capitalize underline">
                <a src>see more</a>
              </div>
            </div>
            <div className=" my-10 bg-[url('./img/bg2.png')] bg-no-repeat bg-center	p-[100px]">
              <div className="cards grid gap-2 grid-cols-1 md:gap-4 md:grid-cols-2 ">
                <div className="card mt-[10px] mr-[20px]">
                  <div className="mb-[40px]">
                    <img src={square}></img>
                  </div>
                  <div className="mb-[18px] font-bold text-[#FFAD60] capitalize">
                    Content Strategy
                  </div>
                  <div className="text-[#FFFFFF]">
                    All our content marketing <br></br> service packages include
                    <br></br>a custom content strategy
                  </div>
                </div>
                <div className="card mt-[10px] mr-[20px]">
                  <div className="mb-[40px]">
                    <img src={square}></img>
                  </div>
                  <div className="mb-[18px] font-bold text-[#FFAD60] capitalize">
                    Content Strategy
                  </div>
                  <div className="text-[#FFFFFF]">
                    All our content marketing <br></br> service packages include
                    <br></br>a custom content strategy
                  </div>
                </div>
                <div className="card mt-[10px] mr-[20px]">
                  <div className="mb-4">
                    <img src={square}></img>
                  </div>
                  <div className="mb-[18px] font-bold text-[#FFAD60] capitalize">
                    Content Strategy
                  </div>
                  <div className="text-[#ffffff]">
                    All our content marketing <br></br> service packages include
                    <br></br>a custom content strategy
                  </div>
                </div>

                <div className="card mt-[10px] mr-[20px]">
                  <div className="mb-[40px]">
                    <img src={square}></img>
                  </div>
                  <div className="mb-[18px] font-bold text-[#FFAD60] capitalize">
                    Content Strategy
                  </div>
                  <div className="text-[#FFFFFF]">
                    All our content marketing <br></br> service packages include
                    <br></br>a custom content strategy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container relative">
        <div className="absolute right-0">
          <img src={carre}></img>
        </div>
        <div className="absolute top-[-200px]">
          <img src={bars}></img>
        </div>
        <div className="title  flex flex-col justify-center items-center py-20">
          <h1 className=" my-[20px] text-[#FFAD60] text-[18px] uppercase">
            Testimonials
          </h1>
          <h2 className="pl-3 my-[20px] text-[#fff] text-[42px] font-bold">
            Our Client Reviews
          </h2>
          <div className="box-testimonial flex justify-center items-center flex-wrap">
            <div className="Left-swich cursor-pointer">
              <img src={LeftS}></img>
            </div>
            <div className="mx-3 my-8 card bg-white w-[314px] flex justify-center items-center flex-col text-center rounded-lg">
              <div className="bg-white  relative p-2 rounded-full bottom-7 shadow-2xl">
                <img src={circle}></img>
              </div>
              <div>
                <span>Ms Elvy</span> <br></br>
                investment company
              </div>
              <div className="p-5">
                “Investment is quite important in this era, and because of you I
                was able to create a corporate system for my own investment”
              </div>
            </div>

            <div className="mx-3 my-8 card bg-white w-[314px] flex justify-center items-center flex-col text-center rounded-lg flex-wrap">
              <div className="bg-white  relative p-2 rounded-full bottom-7 shadow-2xl">
                <img src={profil}></img>
              </div>
              <div>
                <span>Mpok Ina</span> <br></br>
                Karyawan Swasta
              </div>
              <div className="p-9">
                “Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“
              </div>
            </div>

            <div className="mx-3 my-8 card bg-white w-[314px] flex justify-center items-center flex-col text-center rounded-lg">
              <div className="bg-white  relative p-2 rounded-full bottom-7 shadow-2xl">
                <img src={profil2}></img>
              </div>
              <div>
                <span>Mr Jorce</span> <br></br>
                Retail Company
              </div>
              <div className="p-5">
                “thank you for realizing the idea and highly recommend it for
                those of you who want to create a system”
              </div>
            </div>
            <div className="Left-swich cursor-pointer">
              <img src={ReftS}></img>
            </div>
          </div>
        </div>
      </div>
      {/* #region Body */}
      <div className="container">
        <div className="relative p-7">
          <div className="absolute">
            <img
              src={deux}
              className="relative z-40  right-[53px] bottom-[50px]"
            ></img>
          </div>
          <div
            className="contactUse  p-2 rounded-lg card-rouded flex justify-center items-center bg-white relative border   my-5 py-[200px]
          "
          >
            <div className="send bg-[#747DEF] p-3 rounded-full absolute top-[-13px] right-[-13px]">
              <i class="fa-solid fa-paper-plane text-[35px] text-white"></i>
            </div>
            <div className="absolute left-20 bottom-0">
              <img className="w-[500px] " src={circ}></img>
            </div>
            <div className="form flex justify-center items-center flex-col text-center">
              <div className="font-bold text-[30px] my-6">
                subscribe to get informatin , latest news and other <br></br>{" "}
                interesting offers about agency
              </div>
              <form className="flex flex-wrap justify-center items-center z-40">
                <div className="border-[#1D1B1B] border py-[15px] px-[50px] mx-[24px] rounded max-w-full flex items-center justify-between">
                  <i class="fa-regular fa-envelope mr-8"></i>
                  <input
                    className=" outline-none border-none w-[90%] "
                    placeholder="Your e-mail"
                  ></input>
                </div>
                <button
                  type="submit"
                  className="bg-[#FFAD60] text-white rounded p-4 capitalize my-4"
                >
                  subscribe
                </button>
              </form>
            </div>
            <div className="absolute right-0 top-0 ">
              <img src={circ2}></img>
            </div>

            <div className="absolute bottom-[-100px] right-[-28px]">
              <img src={PLUS}></img>
            </div>
          </div>
        </div>
      </div>
      {/* #endregion */}
      {/*je suis ici sur le footer*/}
      <nav class="dark:bg-gray-900  w-full mt-[200px] mb-[70px]">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo}></img>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <p className="text-white"> © 2020 Agency, All Rights Reserved</p>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center  justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 md:p-0 text-white  rounded md:bg-transparent  md:hover:text-blue-700 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
