const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="px-[60px]">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-[#008EC4]  py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>

          <div className="rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.3821509305076!2d-7.620560384799913!3d33.00217178090332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda3c0e299eaaae3%3A0x85e2e0a681beea0c!2sSettat%2C%20Morocco!5e0!3m2!1sen!2sus!4v1700902186385!5m2!1sen!2sus"
              width="100%"
              height="360"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
