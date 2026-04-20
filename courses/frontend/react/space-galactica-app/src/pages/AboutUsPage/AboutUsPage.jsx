import styles from "./AboutUsPage.module.css";

// 🧑🏽‍🚀 Task - Week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files in this folder.
// Import and use the components from the newly created files.

const OurValues = () => {
  // 🧑🏽‍🚀 Task - Week 1
  // Create the "Our Values" section.
  // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
  // Some inspiration ideas can be found in /data/inspiration_about_us.
  return (
    <>
      <p className="values">
        <span className="numbers">01</span>Exploration: We are driven by a
        deep-seated desire to explore the unknown. We believe that the pursuit
        of discovery is at the heart of human nature, and we are committed to
        pushing the boundaries of what is possible
      </p>
      <p className="values">
        <span className="numbers">02</span>Innovation: At Galactica, we
        prioritize cutting-edge technology and innovation. We are constantly
        evolving our spacecraft, safety protocols, and services to ensure that
        our travelers experience the most advanced and secure space journeys
        available.
      </p>
      <p className="values">
        <span className="numbers">03</span>Sustainability: We are committed to
        making space exploration sustainable for future generations. Our space
        missions are designed to minimize environmental impact, both on Earth
        and in space, and to foster a spirit of responsibility towards our
        universe.
      </p>
      <p className="values">
        <span className="numbers">04</span>Community: We believe in the power of
        collective exploration. Our journeys are not just about reaching new
        destinations; they are about building a community of space enthusiasts
        who share a passion for the stars.
      </p>
    </>
  );
};

const OurCrew = () => {
  // 🧑🏽‍🚀 Task - Week 1
  // Create the "Our Crew section".
  // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
  // Use the pictures from /public/crew.
  // Some inspiration ideas can be found in /data/inspiration_about_us.
  const crew = [
    {
      id: 1,
      image: "public/crew/image-sarah-vega.png",
      name: "Captain Sarah Vega",
      description:
        "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
    },
    {
      id: 2,
      image: "public/crew/image-leo-redding.png",
      name: "Dr. Leo Redding",
      description:
        "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
    },
    {
      id: 3,
      image: "public/crew/image-hana-lee.png",
      name: "Chief Engineer Hana Lee",
      description:
        "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
    },
    {
      id: 4,
      image: "public/crew/image-alex-santos.png",
      name: "Mission Specialist Alex Santos",
      description:
        "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
    },
    {
      id: 4,
      image: "public/crew/image-maya-patel.png",
      name: "Crew Member Maya Patel",
      description:
        "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
    },
  ];
  return (
    <>
      {crew.map((member) => (
        <section key={member.id} className="crew-holder">
          <img className="member-img" src={member.image} />
          <h3 className="member-name">{member.name}</h3>
          <p className="member-desc">{member.description}</p>
        </section>
      ))}
    </>
  );
};

const OurPartners = () => {
  // 🧑🏽‍🚀 Task - Week 1
  // Create the "Our Partners section".
  // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
  // Use the pictures from /public/business_partners.
  // Some inspiration ideas can be found in /data/inspiration_about_us.
  const partners = [
    { id: 1, image: "public/business_partners/alphabet-logo.png" },
    { id: 2, image: "public/business_partners/amazon_logo.png" },
    { id: 3, image: "public/business_partners/CBC_Logo_White.png" },
    { id: 4, image: "public/business_partners/Microsoft-Logo-white.png" },
    { id: 5, image: "public/business_partners/nyu-logo.png" },
    { id: 6, image: "public/business_partners/QueensLogo_white.png" },
    { id: 7, image: "public/business_partners/samsung-logo.png" },
    { id: 8, image: "public/business_partners/sodexo-logo.png" },
  ];
  return (
    <>
      <h4>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </h4>
      {partners.map((partner) => (
        <img className="partner-image" key={partner.id} src={partner.image} />
      ))}
    </>
  );
};

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues />
        </section>
        <section className="card">
          <h2>The crew</h2>
          <OurCrew />
        </section>

        {/* 🧑🏽‍🚀 Task - Week 1 */}
        {/* Use the "OurPartners" component here. */}
      </main>
    </div>
  );
};

export default Crew;
