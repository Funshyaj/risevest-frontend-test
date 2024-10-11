import pcHeroImg from "./assets/pc-hero-img.png";
import mobileHeroImg from "./assets/mobile-hero-img.png";
import JoinCommunity from "./assets/joinCoummity.png";
import ElipseSmall from "./assets/elipse-small.png";
import ElipseBig from "./assets/ellipse-big.png";
import arrowIcon from "./assets/arrow.png";
import saveff from "./assets/saveff.png";
import pat1 from "./assets/pat-top-left.png";
import pat2 from "./assets/pat-bottom-left.png";
import pat3 from "./assets/pat-top-right.png";
import pat4 from "./assets/pat-bottom-right.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DownloadCta from "./components/DownloadCta";
import { why, assets, testimonials } from "./content";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      easing: "ease-in-out", // Animation easing
    });
  }, []);

  return (
    <main className="px-4 sm:px-8">
      <Header />
      {/* hero section */}
      <section className="flex flex-col md:flex-row items-center min-h-screen mt-10 xxs:mt-16 md:mt-12 lg:mt-5 px-5">
        <div className="basis-2/4 flex flex-col gap-3 justify-center text-center md:text-left py-12 md:py-0">
          <h1 className="">Dollar investments that help you grow</h1>
          <p className="hidden md:block font-semibold">
            We put your money in high quality assets that help you build wealth
            and achieve your financial goals.
          </p>
          <p className="md:hidden font-semibold text-lg">
            Your personal wealth manager. Get started with a minimum of $10 and
          </p>
          <div className="-mx-5 md:mx-0">
            <DownloadCta />
          </div>
        </div>
        <div className="basis-2/4 flex justify-end md:pr-10 lg:pr-24">
          <img
            src={pcHeroImg}
            alt="rise vest mobile app mockup"
            className="hidden md:block z-[999]"
          />
          <img
            src={mobileHeroImg}
            alt="rise vest mobile app mockup"
            className="md:hidden z-[999]"
          />
        </div>

        <img
          src={ElipseBig}
          alt="circle icon"
          className="absolute bottom-[28%] left-[10%] opacity-50 md:opacity-100 md:bottom-8 md:left-40 animate-wiggle hidden xs:block md:hidden lg:block"
        />
        <img
          src={ElipseSmall}
          alt="circle icon"
          className="absolute bottom-[28%] right-[10%] opacity-50 md:opacity-100 md:bottom-[unset] md:right-[unset] md:top-24 md:left-14 animate-float  hidden xs:block md:hidden lg:block"
        />
        <img
          src={ElipseBig}
          alt="circle icon"
          className="absolute -bottom-[8%] left-[10%] opacity-50 md:opacity-100 md:bottom-[unset] md:left-[unset] md:top-32 md:right-[40%] animate-float"
        />
        <img
          src={ElipseSmall}
          alt="circle icon"
          className="absolute -z-[1] absolute top-[10%] right-[5%] opacity-50 md:top-[unset] md:opacity-100 md:bottom-28 md:right-1/3 animate-float hidden xs:block md:hidden lg:block"
        />
        <img
          src={ElipseBig}
          alt="circle icon"
          className="absolute bottom-24 right-10 opacity-50 md:opacity-100 animate-wiggle md:hidden"
        />
      </section>

      {/* Who supports us section - couldnt export logos from figma */}
      {/* <section className="mt-16 mv-8">
        <h3 className="text-grayWhite">We are supported by</h3>
      </section> */}

      {/* why section */}
      <section className="py-10 px-10 lg:px-20 xl:px-32">
        {why.map(({ head, body, image }, index) => (
          <div
            key={head}
            data-aos="fade-up"
            className={`flex flex-col-reverse items-center ${
              (index + 1) % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="basis-2/4 flex flex-col gap-3 text-center md:text-left">
              <h2>{head}</h2>
              <p className="max-w-sm">{body}</p>
              <div className="pt-5 flex gap-4 justify-center md:justify-start items-center hover:gap-6 duration-300 cursor-pointer">
                <p className="text-teal ">Start Investing Now</p>
                <img src={arrowIcon} alt="arrow icon" className="h-3 w-4" />
              </div>
            </div>

            <div className="basis-2/4 relative">
              <img src={image} alt={head} className="" />
              <div className="bg-[#A0DDE2CC] h-6 absolute bottom-10 w-full md:hidden"></div>
            </div>
          </div>
        ))}
      </section>

      {/* Assets section */}
      <section className="space-y-5 px-2 sm:px-3">
        <div className="text-center space-y-1">
          <h2>Asset Classes</h2>
          <p className="text-black font-medium">
            It’s your money, choose where you invest it
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 md:justify-center lg:justify-[unset] md:items-center lg:items-stretch justify-around">
          {assets.map(({ head, body, icon, cta }, index) => (
            <div
              key={head}
              className="border-2 border-[#919FB533] rounded-lg flex flex-col justify-between gap-10 text-center duration-300 lg:hover:shadow-md"
            >
              <div
                className={`h-24 lg:h-32 relative ${
                  index === 0
                    ? "bg-fadedOrange"
                    : index === 1
                    ? "bg-fadedPurple"
                    : "bg-fadedTeal"
                }`}
              >
                <img
                  src={icon}
                  alt="stocks"
                  className="centered-absolute -bottom-28 size-28 border-white border-8 rounded-full"
                />
              </div>

              <div className="max-w-md mx-auto p-5 space-y-4">
                <h3>{head}</h3>
                <p>{body}</p>
                <div className="space-y-1">
                  <p>
                    <span className="text-gray-400">Historical returns:</span>
                    14% per annum
                  </p>
                  <p>
                    <span className="text-gray-400">Risk Level:</span>Medium
                  </p>
                </div>
              </div>

              <div className="flex gap-4 justify-center items-center hover:gap-6 duration-300 cursor-pointer">
                <p className="text-teal font-semibold py-4 ">{cta}</p>
                <img src={arrowIcon} alt="arrow icon" className="h-3 w-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Save for future section */}
      <section className="hidden md:block pt-16 pb-10 px-10 lg:px-20 xl:px-32 mx-auto">
        <div data-aos="fade-up" className="flex flex-row-reverse  items-center">
          <div className="basis-2/4 flex flex-col gap-3 items-start">
            <p className="font-semibold">The Rise App</p>
            <h2>
              Save for your <span className="text-[#a89cfe]">future</span>
            </h2>
            <p className="max-w-sm">
              With Rise, you achieve your financial goals faster. Save for
              school, your home, vacations, your children’s future and more.
            </p>
            <button
              type="button"
              className="rounded-md bg-teal text-white font-semibold px-5 py-3 md:mt-5 min-w-44"
            >
              Start Saving
            </button>
          </div>
          <div className="basis-2/4 relative">
            <img src={saveff} alt="save for your future" className="" />
            <div className="bg-[#A0DDE2CC] h-6 absolute bottom-10 w-full md:hidden"></div>
          </div>
        </div>
      </section>

      {/* How we are Regulated */}
      <section className="overflow-hidden relative px-5 py-20 my-20 flex items-center justify-center text-center border-y-3 -mx-5 sm:-mx-10">
        <div className="max-w-lg space-y-4 z-[99]">
          <h2>How we are Regulated</h2>
          <p className="font-semibold">
            Rise is registered and regulated both in the US and in Nigeria. Our
            team is made up of US registered investment advisers, our Nigerian
            users are covered by our SEC licensed trustees, ARM Trustees and all
            our assets are held with regulated third parties, in all relevant
            jurisdictions
          </p>
        </div>

        <img
          src={pat1}
          alt="gardindt pattern"
          className="absolute -left-20 sm:-left-10 md:left-0 top-0"
        />
        <img
          src={pat2}
          alt="gardindt pattern"
          className="absolute -left-20 sm:-left-10  md:left-0 bottom-0"
        />
        <img
          src={pat3}
          alt="gardindt pattern"
          className="absolute -right-20 sm:-right-10 top-0"
        />
        <img
          src={pat4}
          alt="gardindt pattern"
          className="absolute -right-20 sm:-right-10  bottom-0"
        />
      </section>

      {/* testimonials section */}
      <section className="space-y-10 py-10">
        <div className="text-center w-full max-w-xl mx-auto space-y-3">
          <h2 className="text-lightTeal">From The People Who Use Rise</h2>
          <p>
            Our mission at Risevest is to empower more people just like you to
            achieve your personal financial goals.
          </p>
        </div>

        <div className="no-scrollbar snap-x flex justify-around gap-5 overflow-x-scroll py-3 -mx-3 px-2 md:-mx-10 md:px-10 duration-300">
          {testimonials.map(({ testimony, name, image }, index) => (
            <div
              key={name + index}
              className="snap-center flex flex-col justify-between p-3 rounded-md shadow-custom hover:shadow-none duration-300 min-h-[200px] w-[300px] xs:w-[340px]"
            >
              <p className="w-[280px] xs:w-[320px] text-center md:text-left">
                {testimony}
              </p>
              <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-3">
                <img src={image} className="size-4" alt="" />
                <p className="font-semibold">{name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join the Rise Vest Community */}
      <section className="py-20 flex flex-col md:flex-row-reverse items-center justify-around gap-5">
        <img
          src={JoinCommunity}
          alt="Rise Vest Community"
          // className="animate-spinStop"
        />

        <div className="text-center md:text-left space-y-2 md:space-y-4">
          <h2 className="text-4xl md:text-5xl">Join the Rise Community</h2>
          <p className="md:hidden">
            Join the Rise CommunityJoin the Rise Community
          </p>
          <p className="hidden md:block max-w-md">
            If you want to go far, go together. Our Telegram community surrounds
            you with others who can help you along your financial journey with
            tips, support, advice and learning. It's completely free and open to
            new and seasoned investors.
          </p>
          <button
            type="button"
            className="rounded-md bg-lighterTeal font-semibold px-5 py-3 md:mt-5"
          >
            Join Our Community
          </button>
        </div>
      </section>

      {/* Download The Rise App CTA section */}
      <section className="bg-fadedTeal rounded-3xl my-10 py-10 px-3 md:px-10 md:mx-10 max-h-[36rem] xs:max-h-[34rem] md:max-h-96 overflow-hidden flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
        <div className="space-y-4">
          <p className="text-teal md:pl-2">Download The Rise App</p>
          <h2>Join our 100,000 users investing and setting long term goals!</h2>
          <p className="font-semibold">
            Dollar investments that help you grow.
          </p>

          <div className="-mx-6 md:mx-0">
            <DownloadCta />
          </div>
        </div>

        <div
          className="basis-2/4 flex justify-end md:pr-24 md:mt-40"
          data-aos="fade-up"
        >
          <img src={mobileHeroImg} alt="rise vest mobile app mockup" />
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;
