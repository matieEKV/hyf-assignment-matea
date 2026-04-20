export const OurPartners = () => {
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
