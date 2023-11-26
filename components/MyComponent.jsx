import Image from "next/image";
import * as React from "react";
import { FaLinkedin,FaFacebook} from "react-icons/fa";
import { Carousel } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function MyComponent(props) {
  return (
    <div className=" bg-white flex flex-col  w-full sm:w-screen sm:m-0">
      <div className="z-[1] flex items-stretch  justify-between gap-5 mt-1.5 w-full self-start sm:flex-wrap">
        <div className="   items-start flex gap-5 mt-1 w-full h-full   self-start">
          <div className="flex w-1/2 ">
            <Image
              loading="lazy"
              src="/LOGO.png"
              width={200}
              height={50}
              alt="log"
              className="aspect-[2.79] object-contain object-center w-[170px]  overflow-hidden shrink-0 max-w-full"
            />
          </div>
          <div className="w-1/2 flex h-full justify-center items-center gap-5 sm:h-12">
            <div className="flex h-full justify-self  items-center  sm:hidden float-right">
              <Image
                loading="lazy"
                src="/location.png"
                width={200}
                height={50}
                alt="log"
                className="aspect-[0.85] object-contain object-center 
                w-[17px] overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
              <div className="text-black text-xs font-medium leading-4 self-stretch grow shrink basis-auto ">
                SHARQ AL HIRAH TECH. <br />
                CONT Muweilah commercial, Sharjah, UAE <br />
                PO BOX:- 61189
                <br />
              </div>
            </div>
            <div className="flex w-1/2 h-full justify-center  items-center">
              <div className="flex ">
                <Image
                  loading="lazy"
                  src="/call.png"
                  width={200}
                  height={50}
                  alt="log"
                  className="aspect-[0.94]  object-contain  object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
                <p className="text-black text-center w-full text-xs font-medium leading-6 self-center my-auto">
                  +97165357381
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center bg-red-black-purple items-stretch self-stretch flex w-full flex-col max-md:max-w-full bg-red-600 ">
        <div className="flex-col  justify-center items-center overflow-hidden relative flex min-h-[786px] w-full px-5 py-12 max-md:max-w-full">
          <Image
            loading="lazy"
            src="/herobag.jpg"
            width={2000}
            height={500}
            alt="log"
            className="absolute  h-full w-full object-cover opacity-20 object-center inset-0"
          />
          <div className="relative w-full max-w-screen-xl mt-20 mb-32 max-md:max-w-full max-md:my-10">
            <div className=" grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5   max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
                <div className="items-stretch self-stretch relative flex grow flex-col max-md:max-w-full max-md:mt-10">
                  <div className=" text-6xl md:text-3xl font-  text-white font-bold leading-[54px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                    10 years of experience in Steel Warehouse construction and
                    Poultry Farm projects
                  </div>
                  <div className="text-stone-300 text-justify text-base leading-5 mt-12 max-md:max-w-full max-md:mt-10">
                    Sharq Al Hirah Tech. Cont, established in 2012 in the UAE,
                    is led by Managing Director Mr. Pillai Sethunath, who brings
                    over 10 years of experience in steel warehouse construction
                    and poultry farm projects. The company serves as a certified
                    equipment installation team for LAE Cuxhaven throughout the
                    GCC. Specializing in poultry equipment installation, they
                    have worked with various brands such as Jansen, Techno,
                    Salmet, Big Dutchman, and Chore Time. Sharq Al Hirah has
                    successfully collaborated on numerous steel warehouse
                    projects with companies like Fabtech Steel, SIABCO, EBS, and
                    Kirby, showcasing a diverse range of
                    expertise in their field.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch rounded-full  ml-5 max-md:w-full max-md:ml-0">
                <Image
                  loading="lazy"
                  src="/hero.jpg"
                  width={1000}
                  height={500}
                  alt="log"
                  className="aspect-[1.46] object-contain object-center rounded-3xl w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-zinc-900 text-opacity-80 font-popinsmd text-center text-4xl font-medium leading-6 tracking-wider self-center whitespace-nowrap mt-9">
        Trusted By
      </div>
      <div className="self-center w-full flex justify-center max-w-full mt-10 px-5 max-md:mt-10">
        <div className="gap-5 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-center max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch  max-md:w-full max-md:ml-0">
            <Image
              loading="lazy"
              src="/Lae.png"
              width={200}
              height={50}
              alt="log"
              className="aspect-[2.84] object-contain object-center  overflow-hidden shrink-0 max-w-full grow mt-20 max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0">
            <Image
              loading="lazy"
              src="/cropped-IFFCO-logo-new.png"
              width={200}
              height={50}
              alt="log"
              className="aspect-[3.33] object-contain object-center  overflow-hidden grow mt-12 max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch  ml-5 max-md:w-full max-md:ml-0">
            <Image
              loading="lazy"
              src="/logo_1 (1).png"
              width={200}
              height={50}
              alt="log"
              className="aspect-[1.07] object-contain object-center overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
            />
          </div>
          {/* <div className="flex flex-col items-stretch  ml-5 max-md:w-full max-md:ml-0">
            <Image
              loading="lazy"
              src="/logo_1 (1).png"
              width={200}
              height={50}
              alt="log"
              className="aspect-[1.07] object-contain object-center overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
            />
          </div> */}
        </div>
      </div>
      <motion.div className="self-center w-full mt-16 pl-4 pr-3.5 pb-12 max-md:max-w-full max-md:mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >        <div className="gap-5 flex max-md:flex-col-1 max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col mt-7 max-md:mt-10">
              <div className="text-4xl font-semibold leading-6 tracking-[2.1px] bg-clip-text self-stretch whitespace-nowrap">
                FEATURE
              </div>
              <div className="text-violet-950 text-5xl font-semibold  sm:text-lg leading-[54px] self-stretch mt-20 max-md:mt-10">
                We have Expertise
                <br /> on
              </div>
              <div className="text-white text-lg md:text-xs font-medium  whitespace-nowrap  bg-red rounded-md w-[153px] max-w-full mt-20 px-5 md:px-1 py-5 md:py-1 max-md:mt-10">
              Contact US
            </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch  ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-end max-md:max-w-full max-md:mt-10">
              <div className="gap-5 grid grid-cols-2 sm:grid-cols-1 max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch  max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col  items-stretch mt-40 max-md:mt-10">
                    <Image
                      loading="lazy"
                      src="/5.jpg"
                      width={500}
                      height={50}
                      alt="log"
                      className="aspect-[1.89] object-contain object-center  w-full overflow-hidden"
                    />
                    <div className="text-violet-950 font- text-2xl sm:text-sm font-semibold leading-9 mt-2">
                      Poultry farm projects
                      <br />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch  ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-stretch max-md:mt-10">
                    <Image
                      loading="lazy"
                      src="/4.jpg"
                      width={500}
                      height={50}
                      alt="log"
                      className="aspect-[2.06] object-contain object-center  overflow-hidden"
                    />
                    <div className="text-violet-950 text-2xl sm:text-sm font-semibold  mt-2">
                      Steel buildings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="h-fit font-popinsbld bg-red-black-purple z-10 self-stretch flex w-full  flex-col pl-5 pr-5 py-12 max-md:max-w-full  ">
        <div className="text-white z-[-1] text-4xl sm:text-xl md:text-2xl font-medium   max-md:max-w-full">
          PROJECTS
        </div>
        <div className="bg-violet-950 flex w-1/4 shrink-0 h-1.5 flex-col mt-5 rounded-lg self-start max-md:max-w-full max-md:mt-10" />
        <div className="self-stretch mt-10 max-md:max-w-full max-md:mt-10">
          <div className=" grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-2   max-md:gap-0">
            <div className="flex flex-col items-stretch   max-md:w-full max-md:ml-0">
              <div className="justify-end items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="flex-col text-white text-xl font-semibold leading-10 relative w-full max-w-full overflow-hidden min-h-[370px]  pt-80 max-md:max-w-full max-md:pr-2.5 max-md:pt-10">
                  <Image
                    loading="lazy"
                    src="/1.jpg"
                    width={300}
                    height={50}
                    alt="log"
                    className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                  />
                   <p className="bg-red rounded-tl-md p-5">Danube, Al barsha Dubai</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch   max-md:w-full max-md:ml-0">
              <div className="justify-end items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="flex-col text-white text-xl font-semibold leading-10 relative w-full max-w-full overflow-hidden min-h-[370px]  pt-80 max-md:max-w-full max-md:pr-2.5 max-md:pt-10">
                  <Image
                    loading="lazy"
                    src="/2.jpg"
                    width={300}
                    height={50}
                    alt="log"
                    className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                  />
                   <p className="bg-red rounded-tl-md p-5">Radison hotel, Ajman</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch   max-md:w-full max-md:ml-0">
              <div className="justify-end items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="flex-col text-white text-Xxl font-semibold leading-10 relative w-full max-w-full overflow-hidden min-h-[370px] pl-5 pt-80 max-md:max-w-full max-md:pt-10">
                  <Image
                    loading="lazy"
                    src="/3.jpg"
                    width={200}
                    height={50}
                    alt="log"
                    className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                  />
                   <p className="bg-red rounded-tl-md p-5">Stable at khawaneej, Dubai</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch   max-md:w-full max-md:ml-0">
              <div className="justify-end items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="flex-col text-white text-xl font-semibold leading-10 relative w-full max-w-full overflow-hidden min-h-[370px] pl-5 pt-80 max-md:max-w-full max-md:pt-10">
                  <Image
                    loading="lazy"
                    src="/4.jpg"
                    width={200}
                    height={50}
                    alt="log"
                    className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                  />
                  <p className="bg-red rounded-tl-md p-2">Open shed (EBS), Dubai</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch  max-md:w-full max-md:ml-0">
              <div className="justify-end items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className=" text-white  text-xl font-semibold leading-10 relative w-full max-w-full overflow-hidden min-h-[370px] items-center pl-10 pr-5 pt-80 max-md:max-w-full max-md:pt-10">
                  <Image
                    loading="lazy"
                    src="/5.jpg"
                    width={200}
                    height={50}
                    alt="log"
                    className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                  />
                 <p className="bg-red rounded-tl-md  p-2 "> Farouj Al wadi poultry farm ,Sharjah</p>
                </div>
                <div className="text-white "> 
                 </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch   max-md:w-full max-md:ml-0">
              <div className="justify-end items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="flex-col text-white text-xl font-semibold leading-10 relative w-full max-w-full overflow-hidden min-h-[370px]  pt-80 max-md:max-w-full max-md:pr-2.5 max-md:pt-10">
                  <Image
                    loading="lazy"
                    src="/6.jpg"
                    width={300}
                    height={50}
                    alt="log"
                    className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                  />
                   <p className="bg-red rounded-tl-md  p-2 ">Dhaid poultry farm, Sharjah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
      <div className="text-base font-popinsbld sm:text-xs leading-2 tracking-[2.4px] uppercase bg-clip-text self-center whitespace-nowrap mt-20 max-md:mt-10">
        Have you project in mind?
      </div>
      <div className="text-neutral-900 text-center text-2xl font-semibold leading-[81px] self-center max-w-[668px] mt-14 max-md:max-w-full max-md:text-4xl max-md:leading-[60px] max-md:mt-10">
        Let’s Make Something
        <br />
        Great Together!
      </div>
      <div className=" self-center font-popinsmd w-full max-w-[1350px] mt-28 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 grid grid-cols-3 sm:grid-cols-1 max-md:grid-col max-md:items-stretch max-md:gap-0">
          <div className="flex  flex-col  items-stretch  max-md:w-full max-md:ml-0">
            <div className="  text-black sm:text-lg self-center text-xl font-medium leading-[60px] max-md:max-w-full max-md:mt-10">
              <p className="text-blue-800 font-bold text-3xl">Location</p>
              <br />
              SHARQ AL HIRAH TECH. CONT <br />
              Muweilah commercial, Sharjah, UAE
              <br />
              PO BOX:- 61189
              <br />
            </div>
          </div>
          <div className="flex flex-col   justify-center items-center w-full h-1/2   rounded-full max-md:w-full max-md:ml-0">
            <div className="text-white flex justify-center text-base font-bold w-full bg-red leading-6 p-5   mx-auto  rounded-sm  max-md:pl-2.5 ">
              CONTACT WITH US
            </div>
          </div>
          <div className="flex flex-col items-stretch   max-md:w-full max-md:ml-0">
            <div className="text-black self-center text-xl font-medium sm:text-lg leading-[60px] max-md:max-w-full ">
            <div>
            <p className="text-blue-800 font-bold text-3xl">Telephone</p>
              
              +971 65357381
              <br />
              </div>
              <div className="grid grid-cols-1">

              <p className="text-blue-800 font-bold text-3xl">Mobile</p>
              
              <p>+971 569240131</p>
              
              <p>+971 505378083</p>
              
              <p>+971 503039190</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-3 gap-5 flex justify-center ">
         <FaFacebook size={30} color="red"/>
         <FaLinkedin size={30} color="red"/>
        </div>
      </div>
      <Image
                    loading="lazy"
                    src="/LOGO.png"
                    width={300}
                    height={50}
                    alt="log"
        className="aspect-[2.37] object-contain object-center w-[327px] overflow-hidden self-center z-[1] mt-0 max-w-full"
      />
      <div className="inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          loading="lazy"
          scrolling="no"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.118296576261!2d55.44451187536333!3d25.300229277644778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5fa35c722a89%3A0xeb597a9a9a5da67!2sSharq%20Al%20Hirah%20Tech.%20Cont!5e0!3m2!1sen!2sin!4v1700976962319!5m2!1sen!2sin" ></iframe>
      </div>

       {/* <Image
                    loading="lazy"
                    src="/6.jpg"
                    width={300}
                    height={50}
                    alt="log"
        className="aspect-[6.53] object-contain object-center w-[209px] overflow-hidden self-center max-w-full mt-16 max-md:mt-10"
      /> */}
      <div className="bg-zinc-400 self-stretch flex min-h-[2px] w-full flex-col  max-md:max-w-full max-md:mt-10" />
      <div className="self-center flex w-full max-w-[1140px] items-stretch justify-between gap-5 mt-14 mb-11 px-5 max-md:max-w-full max-md:flex-wrap max-md:my-10">
        <div className="text-neutral-700 text-lg font-medium leading-7 grow shrink basis-auto max-md:max-w-full">
          © 2023 SHARQ AL HIRAH Inc. All Rights Reserved
        </div>
        <div className="text-neutral-700 text-lg font-medium leading-7 grow shrink basis-auto max-md:max-w-full">
          Privacy Policy | Terms and Conditions
        </div>
      </div>
    </div>
  );
}
