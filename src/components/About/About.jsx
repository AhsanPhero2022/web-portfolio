import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import image from "../../assets/unnamed.jpg";

const About = () => {
  return (
    <section id="about" className="pt-10 mt-10 pb-20">
      <hr className="animate-bounce h-2 w-[80px] mx-auto mb-3 border-0 rounded-full bg-[#35aac7]" />
      <h2 className="poppins-font text-4xl font-bold text-center text-white">
        About Me
      </h2>
      <div className="flex flex-col gap-4 md:flex-row justify-between items-center mt-16">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="2000"
          data-aos-once="true"
          className="w-full md:w-1/2 mb-5"
        >
          <img
            src={image}
            className="h-full rounded-lg ring-2 ring-[#2E6F9B]"
            alt=""
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="2000"
          data-aos-once="true"
          className="w-full md:w-1/2"
        >
          <p className="text-xl mb-1 font-bold text-[#35aac7] poppins-font">
            Who I&apos;m
          </p>
          <h3 className="text-4xl font-bold text-gray-100 poppins-font">
            My name is Sharif Ahmad,
          </h3>
          <p className="lato-font mt-4 mb-6 w-full text-gray-400 text-justify">
            {" "}
            A 23-year-old web application developer, Currently pursuing a
            Bachelor of Social Science degree at Sirajganj Government College
            under the esteemed National University of Bangladesh, I am fueling
            my passion for technology and web development. I live in the
            picturesque village of Enayetpur, Khukni in Sirajganj.
          </p>
          <p className="lato-font mt-4 mb-6 w-full text-gray-400 text-justify">
            Coding isn&apos;t just a job for me, it&apos;s a passion that I
            pursue with dedication and enthusiasm. I constantly immerse myself
            in technological blogs and articles, keeping up-to-date with the
            latest trends and innovations. My hobbies are traveling and
            exploring new places. I enjoy watching adventurous programming
            bootcamp and new technology series.
          </p>

          <p className="text-xl font-bold text-[#35aac7] poppins-font mb-3">
            To know more Visit my_
          </p>
          <div className="flex gap-3 text-gray-400">
            <a href="https://www.linkedin.com/in/sharif-ahmad-1088ba235/">
              <FaLinkedin
                size={24}
                className="hover:text-[#35aac7] transition-all"
              />
            </a>
            <a href="https://github.com/AhsanPhero2022">
              <FaGithub
                size={24}
                className="hover:text-[#35aac7] transition-all"
              />
            </a>
            <a href="https://www.facebook.com/abirkhan.mugall">
              <FaFacebook
                size={24}
                className="hover:text-[#35aac7] transition-all"
              />
            </a>
            <a>
              <FaTwitter
                size={24}
                className="hover:text-[#35aac7] transition-all"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
