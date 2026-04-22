import styles from "./OurCrew.module.css";

export const OurCrew = () => {
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
    <section className={styles.crewContainer}>
      {crew.map((member) => (
        <section key={member.id} className={styles.crewHolder}>
          <img className={styles.memberImg} src={member.image} />
          <div className={styles.infoContainer}>
            <h3 className={styles.memberName}>{member.name}</h3>
            <p className={styles.memberDescription}>{member.description}</p>
          </div>
        </section>
      ))}
    </section>
  );
};
