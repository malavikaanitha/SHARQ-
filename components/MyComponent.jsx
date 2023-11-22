import Image from "next/image";
import * as React from "react";

export default function MyComponent(props) {
  return (
    <div className=" bg-white flex flex-col  w-full">
      <div className="z-[1] flex items-stretch  justify-between gap-5 ml-16 mt-1.5 self-start max-md:flex-wrap">
        <Image
          loading="lazy"
          src="/LOGO.png"
          width={200}
          height={50}
          alt="log"
          className="aspect-[2.79] object-contain object-center w-[170px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="justify-center   items-start flex gap-5 mt-1 w-full h-full   self-start">
          <div className="flex">
            <Image
              loading="lazy"
              src="/location.png"
              width={200}
              height={50}
              alt="log"
              className="aspect-[0.85] object-contain object-center  w-[17px] overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
            <div className="text-black text-xs font-medium leading-4 self-stretch grow shrink basis-auto">
              SHARQ AL HIRAH TECH. <br />
              CONT Muweilah commercial, Sharjah, UAE <br />
              PO BOX:- 61189
              <br />
            </div>
          </div>
          <div className="flex h-fit ">
            <div className="flex">
              <Image
                loading="lazy"
                src="/call.png"
                width={200}
                height={50}
                alt="log"
                className="aspect-[0.94]  object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
              <div className="text-black text-center text-xs font-medium leading-6 self-center my-auto">
                +97165357381
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center bg-red-black-purple items-stretch self-stretch flex w-full flex-col max-md:max-w-full bg-red-600 ">
        <div className="flex-col  justify-center items-center overflow-hidden relative flex min-h-[786px] w-full px-5 py-12 max-md:max-w-full">
          <Image
            loading="lazy"
            src="/hero.png"
            width={200}
            height={50}
            alt="log"
            className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
          />
          <div className="relative w-full max-w-screen-xl mt-20 mb-32 max-md:max-w-full max-md:my-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch self-stretch relative flex grow flex-col max-md:max-w-full max-md:mt-10">
                  <div className=" text-6xl text-white font-bold leading-[54px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
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
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <Image
                  loading="lazy"
                  src="/hero.jpg"
                  width={1000}
                  height={500}
                  alt="log"
                  className="aspect-[1.46] object-contain object-center w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-zinc-900 text-opacity-80 text-center text-lg font-medium leading-6 tracking-wider self-center whitespace-nowrap mt-9">
        Trusted By
      </div>
      <div className="self-center w-[759px] max-w-full mt-10 px-5 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[27%] max-md:w-full max-md:ml-0">
            <Image
              loading="lazy"
              src="/Lae.png"
              width={200}
              height={50}
              alt="log"
              className="aspect-[2.84] object-contain object-center w-[139px] overflow-hidden shrink-0 max-w-full grow mt-20 max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
            <Image
              loading="lazy"
              src="/cropped-IFFCO-logo-new.png"
              width={200}
              height={50}
              alt="log"
              className="aspect-[3.33] object-contain object-center w-[260px] overflow-hidden grow mt-12 max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
            <Image
              loading="lazy"
              src="/logo_1 (1).png"
              width={200}
              height={50}
              alt="log"
              className="aspect-[1.07] object-contain object-center w-[134px] overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1323px] mt-16 pl-4 pr-3.5 pb-12 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col mt-7 max-md:mt-10">
              <div className="text-sm font-semibold leading-6 tracking-[2.1px] bg-clip-text self-stretch whitespace-nowrap">
                FEATURE
              </div>
              <div className="text-violet-950 text-4xl font-semibold leading-[54px] self-stretch mt-20 max-md:mt-10">
                We have Expertise
                <br /> on
              </div>
              <div className="text-white text-lg font-medium leading-5 whitespace-nowrap items-center bg-red-600 w-[153px] max-w-full mt-20 px-5 py-5 max-md:mt-10">
                Contact US
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[66%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-end max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch mt-40 max-md:mt-10">
                  <Image
              loading="lazy"
              src="/5.jpg"
              width={500}
              height={50}
              alt="log"
                      className="aspect-[1.89] object-contain object-center w-full overflow-hidden"
                    />
                    <div className="text-violet-950 text-2xl font-semibold leading-9 mt-2">
                      Poultry farm projects
                      <br />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-stretch max-md:mt-10">
                    <Image
              loading="lazy"
              src="/4.jpg"
              width={500}
              height={50}
              alt="log"
                      className="aspect-[2.06] object-contain object-center w-full overflow-hidden"
                    />
                    <div className="text-violet-950 text-2xl font-semibold leading-9 mt-2">
                      Steel buildings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-red-black-purple self-stretch flex w-full flex-col pl-14 py-12 max-md:max-w-full max-md:pl-5">
        <div className="text-white text-4xl font-medium leading-[56px] w-[1340px] max-w-[1340px] self-end max-md:max-w-full">
          SOME OF OUR PROJECTS
        </div>
        <div className="bg-violet-950 flex w-[479px] shrink-0 h-1.5 flex-col ml-11 mt-16 self-start max-md:max-w-full max-md:mt-10" />
        <div className="self-stretch mt-36 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="justify-end items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="flex-col text-white text-3xl font-semibold leading-10 relative w-full max-w-full overflow-hidden min-h-[370px] pl-5 pr-16 pt-80 max-md:max-w-full max-md:pr-2.5 max-md:pt-10">
                  <Image
                     loading="lazy"
                    src="/hero.png"
                    width={200}
                    height={50}
                    alt="log"
                    className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                  />
                  Danube, Al barsha Dubai
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-end items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="flex-col text-white text-3xl font-semibold leading-10 relative w-full max-w-full overflow-hidden min-h-[370px] pl-5 pr-16 pt-80 max-md:max-w-full max-md:pr-2.5 max-md:pt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6ebbe6fe-af15-4adf-9a0e-a78bf117c1bf?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ebbe6fe-af15-4adf-9a0e-a78bf117c1bf?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ebbe6fe-af15-4adf-9a0e-a78bf117c1bf?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ebbe6fe-af15-4adf-9a0e-a78bf117c1bf?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ebbe6fe-af15-4adf-9a0e-a78bf117c1bf?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ebbe6fe-af15-4adf-9a0e-a78bf117c1bf?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ebbe6fe-af15-4adf-9a0e-a78bf117c1bf?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ebbe6fe-af15-4adf-9a0e-a78bf117c1bf?apiKey=ff9a1e75693f49e28179dac0353d8f80&"
                    className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                  />
                  Radison hotel, Ajman
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-24 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="justify-end items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="flex-col text-white text-3xl font-semibold leading-10 relative w-full max-w-full overflow-hidden min-h-[370px] pl-5 pt-80 max-md:max-w-full max-md:pt-10">
                  <img
                    loading="lazy"
                    className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                  />
                  Stable at khawaneej, Dubai
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-end items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="flex-col text-white text-3xl font-semibold leading-10 relative w-full max-w-full overflow-hidden min-h-[370px] items-center pl-10 pr-5 pt-80 max-md:max-w-full max-md:pt-10">
                  <img
                    loading="lazy"
                    className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                  />
                  Open shed (EBS), Dubai
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-24 mb-44 pr-14 max-md:max-w-full max-md:my-10 max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="flex-col text-white text-3xl font-semibold leading-10 relative w-[428px] max-w-full overflow-hidden min-h-[370px] grow pl-5 pr-16 pt-72 pb-0.5 max-md:max-w-full max-md:mt-10 max-md:pr-2.5 max-md:pt-10">
                <img
                  loading="lazy"
                  className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                />
                Extension of Farouj Al wadi poultry farm ( LAE), Sharjah
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex-col text-white text-3xl font-semibold leading-10 relative w-[534px] max-w-full overflow-hidden min-h-[370px] grow pt-72 pb-0.5 px-5 max-md:max-w-full max-md:pr-0 max-md:mt-10 max-md:pt-10">
                <img
                  loading="lazy"
                  className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                />
                Equipment installation at dhaid poultry farm (LAE), Sharjah
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-base font-semibold leading-7 tracking-[2.4px] uppercase bg-clip-text self-center whitespace-nowrap mt-20 max-md:mt-10">
        Have you project in mind?
      </div>
      <div className="text-neutral-900 text-center text-6xl font-semibold leading-[81px] self-center max-w-[668px] mt-14 max-md:max-w-full max-md:text-4xl max-md:leading-[60px] max-md:mt-10">
        Let’s Make Something
        <br />
        Great Together!
      </div>
      <div className="justify-center self-center w-full max-w-[1350px] mt-28 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
            <div className="text-black text-3xl font-medium leading-[60px] max-md:max-w-full max-md:mt-10">
              Location
              <br />
              SHARQ AL HIRAH TECH. CONT <br />
              Muweilah commercial, Sharjah, UAE
              <br />
              PO BOX:- 61189
              <br />
            </div>
          </div>
          <div className="flex flex-col justify-center items-stretch w-[22%] ml-5 bg-red-500 rounded-full max-md:w-full max-md:ml-0">
            <div className="text-white text-base font-bold leading-6 tracking-[2.88px] w-full mx-auto pl-8 pr-5 pt-28 pb-20 rounded-[50%] max-md:mt-10 max-md:pl-2.5 max-md:pt-10">
              CONTACT WITH US
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
            <div className="text-black text-3xl font-medium leading-[60px] max-md:max-w-full max-md:mt-10">
              Telephone
              <br />
              +971 65357381
              <br />
              Mobile
              <br />
              +971 569240131
              <br />
              +971 505378083
              <br />
              +971 503039190
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        className="aspect-[2.37] object-contain object-center w-[327px] overflow-hidden self-center z-[1] mt-0 max-w-full"
      />
      <img
        loading="lazy"
        className="aspect-[6.53] object-contain object-center w-[209px] overflow-hidden self-center max-w-full mt-16 max-md:mt-10"
      />
      <div className="bg-zinc-400 self-stretch flex min-h-[2px] w-full flex-col mt-36 max-md:max-w-full max-md:mt-10" />
      <div className="self-center flex w-full max-w-[1140px] items-stretch justify-between gap-5 mt-14 mb-11 px-5 max-md:max-w-full max-md:flex-wrap max-md:my-10">
        <div className="text-neutral-700 text-lg font-medium leading-7 grow shrink basis-auto max-md:max-w-full">
          © 2023 SHARQ AL HIRAH Inc. All Rights Reserved
        </div>
        <div className="text-neutral-700 text-right text-lg font-medium leading-7 whitespace-nowrap">
          Privacy Policy | Terms and Conditions
        </div>
      </div>
    </div>
  );
}
