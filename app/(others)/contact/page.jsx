import dynamic from "next/dynamic";
// import DefaultHeader from "@/components/header/default-header";
// import DefaultFooter from "@/components/footer/default";
import Address from "@/components/block/Address";
import ContactForm from "@/components/common/ContactForm";
import WhyChoose from "@/components/home/home/WhyChoose";
// import LocationTopBar from "@/components/common/LocationTopBar";
import Social from "@/components/common/social/Social";

export const metadata = {
  title: "Contact Dream Tourism IT - Reach Out for Unforgettable Adventures",
  description:
    "Connect with Dream Tourism IT for all your travel needs. Our team is here to assist you in planning your dream getaway. Let's turn your travel dreams into reality together!",
};

const Contact = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      {/* <DefaultHeader /> */}
      {/* End Header 1 */}

      {/* <LocationTopBar /> */}
      {/* End location top bar section */}

      <div className="map-outer">
        <div className="map-canvas">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28250.91588853126!2d12.473874066474862!3d41.90335665795884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6197b04e4813%3A0x35b2f75bb1d9d291!2sVia%20Principe%20Eugenio%2C%2095%2C%2000185%20Roma%20RM%2C%20Italy!5e0!3m2!1sen!2sbd!4v1707049062158!5m2!1sen!2sbd"></iframe>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.3610585104984!2d39.81982877439845!3d21.415048774400667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c205018b9a80af%3A0xd9d4563a691a241b!2sHotel%20Mohammed%20Abdullah%20Al-Ghammas!5e0!3m2!1sen!2sbd!4v1700576126933!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
      </div>
      {/* End map section */}

      <section className="relative container">
        <div className="row justify-end">
          <div className="col-xl-5 col-lg-7">
            <div className="map-form px-40 pt-40 pb-50 lg:px-30 lg:py-30 md:px-24 md:py-24 bg-white rounded-4 shadow-4">
              <div className="text-22 fw-500">Send a message</div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* End contact section form */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row x-gap-80 y-gap-20 justify-between">
            <div className="col-12">
              <div className="text-30 sm:text-24 fw-600">Contact Us</div>
            </div>
            {/* End .col */}

            <Address uk={true} />
            {/* End address com */}

            <div className="col-auto">
              <div className="text-14 text-light-1">
                Follow us on social media
              </div>
              <div className="d-flex x-gap-20 items-center mt-10">
                <Social />
              </div>
            </div>
            {/* End .col */}
            <Address />
            <div className="col-auto">
              <div className="text-14 text-light-1">
                Follow us on social media
              </div>
              <div className="d-flex x-gap-20 items-center mt-10">
                <Social />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Address Section */}

      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Book With Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Experience Quality and Excellence with DreamTourism
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why Book With Us section */}

      {/* <DefaultFooter /> */}
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
