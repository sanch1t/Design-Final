// local imports
import { careTitle, careSubtitle, careList } from "../data";
import imageFour from "../assets/image-four.svg";
import FadeIn from "../components/FadeIn";

const Care = () => {
  return (
    <div id="care" className="px-10 max-w-[1490px] mx-auto mb-[160px]">
      <FadeIn delay={0.25} direction="down">
        <h1 className=" font-mont text-5xl lg:text-[64px] font-200 text-fontBlack mb-6 text-center">
          {careTitle}
        </h1>
      </FadeIn>

      <FadeIn delay={0.5} direction="down">
        <h5 className="text-[#4F4F4F] font-mont text-lg xs:text-xl mb-12">
          {careSubtitle}<span className="font-mont font-600 text-gradient text-lg xs:text-xl mb-12"> heart</span>
        </h5>
      </FadeIn>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col gap-8 items-start">
          {careList.map((item, i) => (
            <FadeIn key={i} delay={(i + 1) * 0.25} direction="left">
              <div className="flex flex-col xs:flex-row gap-6 items-center xs:items-start">
                <img
                  src={item.img}
                  alt={item.title}
                  className="font-mont h-[88px] w-[68px]"
                />
                <div>
                  <h3 className="font-mont font-400 xs:text-start mb-2 text-2xl lg:text-[28px]">
                    <span className="text-gradient">{item.title}</span>
                  </h3>
                  <h6 className="font-mont xs:text-start text-base lg:text-lg text-fontGray font-500">
                    {item.subtitle}
                  </h6>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.666} direction="right">
          <img src={imageFour} alt="plants" />
        </FadeIn>
      </div>
    </div>
  );
};

export default Care;