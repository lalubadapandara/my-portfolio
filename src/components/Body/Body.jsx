import { motion } from "framer-motion";
import React from "react";
import { Grid, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Body = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.2,
          damping: 20,
        }}
        className="w-full"
      >
        <div className="flex justify-between border border-black-5 rounded-xl shadow-xl flex-row-reverse items-center pt-[42px] pb-[42px] pl-[24px] pr-[24x] max-md:!flex-col custom-radial-bg">
          <div className="flex  w-full rounded-lg">
            <img src="/1.png" alt="" className="rounded-full z-10 relative transition-transform duration-300 hover:scale-110"/>
          </div>
          <div className="flex flex-col gap-7">
            <h2 className="text-xl font-semibold">Portfolio | Lalu Badapandara</h2>
            <h1 className="text-6xl font-semibold">Web Developer</h1>
            <p className="text-sm">
                Hi, I’m Lalu Badapandara, a passionate Full-Stack Web Developer currently learning and building projects using the MERN stack (MongoDB, Express.js, React, Node.js). I enjoy turning ideas into real-world applications with clean design, scalable backend systems, and smooth user experiences.
            </p>
            <button className="bg-[#2D2D2D] cursor-pointer text-white p-4 w-[150px] h-[55px] flex items-center justify-center">
              Contact 9348359180
            </button>
          </div>
        </div>
      </motion.section>
      {/* Hero Section End*/}

      {/* Second Section */}
      <section className="w-full">
        <div className="flex justify-between items-start gap-11  pt-[64px] pb-[64px] pl-[24px] pr-[24px] max-md:items-center max-md:justify-center max-md:flex-col">
          <div className="hidden md:flex w-full justify-start max-md:justify-center max-md:items-center">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.3,
                damping: 20,
              }}
              src="/2.png"
              alt=""
              className="w-[200px]"
            />
          </div>

          <div className="flex flex-col gap-10 items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.4,
                damping: 20,
              }}
              className="text-xl font-semibold text-center"
            >
              MERN | FULL STACK
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.5,
                damping: 20,
              }}
              className="text-7xl font-semibold w-full text-center"
            >
              DEVELOPER
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.6,
                damping: 20,
              }}
              className="text-sm w-full text-center"
            >
               I’m always exploring new technologies, improving my problem-solving skills, and working on projects that help me grow as a developer. My goal is to build impactful web applications while continuously learning and contributing to the developer community.
            </motion.p>

          </div>

          <div className="hidden md:flex w-full justify-end max-md:justify-center max-md:items-center">
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.8,
                damping: 20,
              }}
              src="/3.png"
              alt=""
              className="w-[200px]"
            />
          </div>
        </div>
      </section>
      {/* Second Section End*/}

      {/* Third Section */}
      <section className="w-full">
        <div className="flex justify-between items-center  pt-[42px] pb-[42px] pl-[24px] pr-[24px]">
          <div className="flex  gap-7 max-md:flex-col max-md:justify-center">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.5,
                damping: 20,
              }}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img
                src="/4.png"
                alt=""
                className="hidden md:block w-30 mb-2.5"
              />
              <h2 className="text-xl font-semibold text-black">
                Frontend
              </h2>
              <p className="text-sm text-gray-500 text-center">
                I enjoy clean and responsive front-end designs using React and Tailwind CSS. I've built small projects and have a good eye for crafting simple, user-friendly interfaces.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.7,
                damping: 20,
              }}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img src="/5.png" alt="" className="w-30 mb-2.5" />
              <p className="text-md font-semibold text-black">Backend</p>
              <p className="text-sm text-gray-500 text-center">
                I'm learning backend development with Node.js and Express.js, and I can build basic RESTful APIs and work with MongoDB for data storage. I'm learning how to create reliable server-side logic and full-stack projects.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.8,
                damping: 20,
              }}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img src="/6.png" alt="" className="w-30 mb-2.5" />
              <h2 className="text-xl font-semibold text-black">
                Video Editing
              </h2>
              <p className="text-sm text-gray-500 text-center">
                I also enjoy video editing, where I work on creating video. I have enough knowledge of Adobe Premium Pro and After Effects where I can add cuts, effects making video more enganing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Third Section End*/}

      

      {/* Fifth Section */}
      <section className="w-full">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.3,
            damping: 20,
          }}
          className="text-center text-4xl font-semibold pt-[42px] pb-[42px] pr-[24px] pl-[24px]"
        >
          Latest Work
        </motion.h1>

        <div className="w-full grid grid-cols-3 max-md:grid-cols-1 gap-10 pt-[42px] pb-[42px] pr-[24px] pl-[24px]">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col"
          >
            <img src="/10.png" alt="" className="w-50px" />
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">
                Hotel Landing Page
              </h2>
              <p className="text-sm text-gray-500">
                I created a landing page for a hotel named Paul's biriyani with the help of one of my friend. He gave the figma design to make this website which he worked on. Then i aslo tried to design it. 



              </p>
              <a href="https://github.com/lalubadapandara/pauls-biriyani">View Github Repository</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col"
          >
            <img src="/logo.jpg" alt="" className="w-full" />
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">
                Visual Design
              </h2>
              <p className="text-sm text-gray-500">
                Apna stays is a project developed using react js. Where you can book your room while travelling anywhere. Here different pages like about, owner, rooms, experience etc is added.
              </p>
              <a href="https://github.com/lalubadapandara/apna-stays">View Git Hub Repository.</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col"
          >
            <img src="/plus.jpg" alt="" className="w-50px" />
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">Backend Project</h2>
              <p className="text-sm text-gray-500">
                Learnig backend with using Node.js, Express and MongoDB. With Node.js, I work on building small applications, while Express helps me to manage routes, middleware. MongoDB allow me to handle data in a flexibel and powerful way.
              </p>
              <a href="https://github.com/lalubadapandara/first-backend-project">View Git hub Repository</a>
              
            </div>
          </motion.div>
          
          
          
        </div>
      </section>
      {/* Fifth Section End*/}

      {/* Sixth Section */}

      <section className="flex gap-20  items-center pt-[42px] pb-[42px] pr-[24px] pl-[24px] justify-center max-sm:!pr-0 max-sm:!pl-0 max-sm:gap-0 max-sm:!justify-between">
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.3,
            damping: 20,
          }}
          src="../src/assets/admongo.png"
          alt=""
          className=" w-34 max-sm:w-24"
        />
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.5,
            damping: 20,
          }}
          src="../src/assets/adexpress.png"
          alt=""
          className="w-34 max-sm:w-24"
        />
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.7,
            damping: 20,
          }}
          src="../src/assets/adreact.png"
          alt=""
          className="w-34 max-sm:w-24"
        />
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.9,
            damping: 20,
          }}
          src="../src/assets/adnodejs.png"
          alt=""
          className="w-34 max-sm:w-24"
        />

      </section>
      {/* Sixth Section End*/}

      {/* Seventh Section */}
{/* Seventh Section */}
<section className="w-full">
  <motion.h1
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
    className="text-center text-4xl font-semibold pt-[42px] pr-[24px] pl-[24px]"
  >
    Skills
  </motion.h1>

  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
    className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-[42px] pb-[42px] pr-[24px] pl-[24px]"
  >
    {/* Card 1 */}
    <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
      <h2 className="text-md font-semibold">
        I worked on some projects using JavaScript, focusing on interactive and dynamic web features.
      </h2>
      <div className="flex items-start justify-start gap-2">
        <img src="/javalogo.png" alt="" className="w-14 rounded-full border border-[#f0f8ff]" />
        <div className="flex flex-col gap-2.5">
          <p className="text-md">JavaScript</p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
      <h2 className="text-md font-semibold">
        I also can work on projects using Python as it was my first language and can shift to it if needed. I have some basic idea about Django which is similar to React.
      </h2>
      <div className="flex items-start justify-start gap-2">
        <img src="/pythonimage.png" alt="" className="w-14 rounded-full border border-[#f0f8ff]" />
        <div className="flex flex-col gap-2.5">
          <p className="text-md">Python</p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
      <h2 className="text-md font-semibold">
        I am currently learning Data Structure and Algorithms using C++. I enjoy solving problems in C++ and building a strong foundation in programming concepts.
      </h2>
      <div className="flex items-start justify-start gap-2">
        <img src="/clogo.png" alt="" className="w-14 rounded-full border border-[#f0f8ff]" />
        <div className="flex flex-col gap-2.5">
          <p className="text-md">C++</p>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
      <h2 className="text-md font-semibold">
        I have worked with Node.js to build backend applications and also using its modules like Express, Mongoose, fs, bcrypt and others.
      </h2>
      <div className="flex items-start justify-start gap-2">
        <img src="/nodelogo.png" alt="" className="w-14 rounded-full border border-[#f0f8ff]" />
        <div className="flex flex-col gap-2.5">
          <p className="text-md">Node.js</p>
        </div>
      </div>
    </div>
  </motion.div>
</section>
{/* Seventh Section End */}

      {/* Seventh Section End */}

      {/* Eighth Section */}
    <section className="w-full">
  <div className="flex justify-between w-full items-center pt-[42px] pb-[42px] pl-[24px] pr-[24px] gap-5 max-md:flex-col">
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        damping: 20,
      }}
      className="flex flex-col w-[50%] max-md:w-full"
    >
      <h1 className="text-start text-4xl font-semibold pb-[24px]">
        Let's Work Together
      </h1>

      {/* Full width paragraph */}
      <p className="w-full text-justify">
        I am still at the beginning of my journey in web development, with limited experience in building websites or APIs. However, I am deeply excited about exploring this field and highly motivated to learn and grow. My curiosity drives me to experiment, practice, and keep improving my skills step by step. I am also very eager to participate in projects, collaborate with others, and gain hands-on experience that will help me become a stronger developer. For me, this is not just about coding but also about building meaningful connections and learning together with like-minded people.
      </p>

      {/* Social icons with links */}
      <div className="flex items-center justify-start gap-5 pt-4">
        <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer">
          <img src="/discord.svg" alt="Discord" />
        </a>
        <a href="https://dribbble.com/lalu-badapandara" target="_blank" rel="noopener noreferrer">
          <img src="/dribbble.svg" alt="Dribbble" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/fb.svg" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/b__lalu" target="_blank" rel="noopener noreferrer">
          <img src="/insta.svg" alt="Instagram" />
        </a>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
          <img src="/behance.svg" alt="Behance" />
        </a>
      </div>
    </motion.div>
  </div>
</section>

      {/* Eighth Section End*/}
    </>
  );
};

export default Body;
