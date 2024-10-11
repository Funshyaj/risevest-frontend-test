import playstoreIcon from "../assets/playstore.png";
import applestoreIcon from "../assets/applestore.png";

const DownloadCta = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-center md:justify-start gap-4">
      <button
        type="button"
        className="flex items-center gap-5 bg-black rounded-lg py-3 px-4"
      >
        <img src={applestoreIcon} alt="" />
        <p className="text-xxs md:text-sm text-white text-left">
          Download on the <br />
          <span className="font-semibold">App Store</span>
        </p>
      </button>
      <button
        type="button"
        className="flex items-center gap-5 bg-black rounded-lg  py-3 px-4"
      >
        <img src={playstoreIcon} alt="" />
        <p className="text-xxs md:text-sm text-white text-left">
          Download on the <br />
          <span className="font-semibold">Google Play</span>
        </p>
      </button>
    </div>
  );
};

export default DownloadCta;
