import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="1"
      className={`relative h-screen w-full mx-auto`}
    >
      <div
        className={` absolute inset-0 top-[70px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-white" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-white to-zinc-900 ..." />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}  text-white`}>
            Hi,{" "}
            <span className="text-[#A51E8F]  ">
                {["I'm Ajay"].map((itme, index) => {
                  return (
                    <div key={index} className=" masker  ">
                      <div className="w-fit flex items-center">
                        {index === 0 && (
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "6vw" }}
                            transition={{
                              ease: [0.76, 0, 0.24, 1],
                              duration: 5,
                            }}
                            className="h-[10vw] bg-contain bg-no-repeat rounded-3xl bg-[url('../src/assets/profile.png')]"
                          ></motion.div>
                        )}
                        <h1>
                          {itme}
                        </h1>
                      </div>
                    </div>
                  );
                })}
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm MERN stack developer and <br className="sm:block hidden" />
            i responsive and animated <br /> web application
          </p>
        </div>
      </div>
      <div className="ml-[30vw] py-10  max-sm:ml-[0vw] h-screen">

      <ComputersCanvas/>
        </div>
      <div className="absolute xs:bottom-10 right-[40vw] top-96 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#e83b3b] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
