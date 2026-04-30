"use client";
import { Link } from "react-scroll";

const changeLogdata = [
  {
    id: 1,
    anchorId: "section-1",
    title: "Announcing Projects on Frontend Roadmap",
    content:
      "Frontend development refers to the part of web development that focuses on what users see and interact with in a website or application. It involves designing and implementing the user interface (UI) using technologies like HTML, CSS, and JavaScript. The frontend ensures that content is displayed in a visually appealing and responsive manner across different devices and screen sizes. Developers use frameworks and libraries such as React, Angular, and Vue.js to build dynamic and efficient interfaces. A good frontend enhances user experience (UX) by providing smooth navigation, fast loading times, and interactive features, making the application both functional and engaging.",
  },
  {
    id: 2,
    anchorId: "section-2",
    title: "Build your learning habits with learning streaks",
    content:
      "Frontend development refers to the part of web development that focuses on what users see and interact with in a website or application. It involves designing and implementing the user interface (UI) using technologies like HTML, CSS, and JavaScript. The frontend ensures that content is displayed in a visually appealing and responsive manner across different devices and screen sizes. Developers use frameworks and libraries such as React, Angular, and Vue.js to build dynamic and efficient interfaces. A good frontend enhances user experience (UX) by providing smooth navigation, fast loading times, and interactive features, making the application both functional and engaging.",
  },
  {
    id: 3,
    anchorId: "section-3",
    title: "Git and github Roadmap",
    content:
      "Frontend development refers to the part of web development that focuses on what users see and interact with in a website or application. It involves designing and implementing the user interface (UI) using technologies like HTML, CSS, and JavaScript. The frontend ensures that content is displayed in a visually appealing and responsive manner across different devices and screen sizes. Developers use frameworks and libraries such as React, Angular, and Vue.js to build dynamic and efficient interfaces. A good frontend enhances user experience (UX) by providing smooth navigation, fast loading times, and interactive features, making the application both functional and engaging.",
  },
  {
    id: 4,
    anchorId: "section-4",
    title: "Submit your project solution and get feedback",
    content:
      "Frontend development refers to the part of web development that focuses on what users see and interact with in a website or application. It involves designing and implementing the user interface (UI) using technologies like HTML, CSS, and JavaScript. The frontend ensures that content is displayed in a visually appealing and responsive manner across different devices and screen sizes. Developers use frameworks and libraries such as React, Angular, and Vue.js to build dynamic and efficient interfaces. A good frontend enhances user experience (UX) by providing smooth navigation, fast loading times, and interactive features, making the application both functional and engaging.",
  },
  {
    id: 5,
    anchorId: "section-5",
    title: "Backend roadmap ideas",
    content:
      "Frontend development refers to the part of web development that focuses on what users see and interact with in a website or application. It involves designing and implementing the user interface (UI) using technologies like HTML, CSS, and JavaScript. The frontend ensures that content is displayed in a visually appealing and responsive manner across different devices and screen sizes. Developers use frameworks and libraries such as React, Angular, and Vue.js to build dynamic and efficient interfaces. A good frontend enhances user experience (UX) by providing smooth navigation, fast loading times, and interactive features, making the application both functional and engaging.",
  },
  {
    id: 6,
    anchorId: "section-6",
    title: "Redis roadmap",
    content:
      "Frontend development refers to the part of web development that focuses on what users see and interact with in a website or application. It involves designing and implementing the user interface (UI) using technologies like HTML, CSS, and JavaScript. The frontend ensures that content is displayed in a visually appealing and responsive manner across different devices and screen sizes. Developers use frameworks and libraries such as React, Angular, and Vue.js to build dynamic and efficient interfaces. A good frontend enhances user experience (UX) by providing smooth navigation, fast loading times, and interactive features, making the application both functional and engaging.",
  },
  {
    id: 7,
    anchorId: "section-7",
    title: "Changelog page to help you stay in the loop",
    content:
      "Frontend development refers to the part of web development that focuses on what users see and interact with in a website or application. It involves designing and implementing the user interface (UI) using technologies like HTML, CSS, and JavaScript. The frontend ensures that content is displayed in a visually appealing and responsive manner across different devices and screen sizes. Developers use frameworks and libraries such as React, Angular, and Vue.js to build dynamic and efficient interfaces. A good frontend enhances user experience (UX) by providing smooth navigation, fast loading times, and interactive features, making the application both functional and engaging.",
  },
];

const anchorId = [
  { id: "section-1", label: "Announcing Projects on Frontend Roadmap" },
  {
    id: "section-2",
    label: "Build your learning habits with learning streaks",
  },
  { id: "section-3", label: "Git and github Roadmap" },
  { id: "section-4", label: "Submit your project solution and get feedback" },
  { id: "section-5", label: "Backend roadmap ideas" },
  { id: "section-6", label: "Redis roadmap" },
  { id: "section-7", label: "Changelog page to help you stay in the loop" },
];

const ChangeLog = () => {
  return (
    <div className="mx-10 my-4 flex flex-col gap-7 items-center scroll-smooth">
      {changeLogdata.map((data) => {
        return (
          <div key={data.id} className="space-y-2" id={data.anchorId}>
            <h1 className="text-[20px] font-semibold">{data.title}</h1>
            <p>{data.content}</p>
          </div>
        );
      })}

      <div className="md:w-[50%]">
        {anchorId.map((items) => {
          return (
            <div key={items.id} className="flex gap-x-5 h-20">
              <div className="flex flex-col items-center">
                <Link to={items.id} smooth={true} duration={400}>
                  <div className="w-4 h-4 rounded-full bg-black hover:cursor-pointer" />
                </Link>
                <div className="w-0.5 h-[90%] bg-black" />
              </div>
              <Link
                to={items.id}
                smooth={true}
                duration={400}
                className="text-[16px] hover:text-[17px] transition-all duration-150 hover:cursor-pointer"
              >
                {items.label}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChangeLog;
