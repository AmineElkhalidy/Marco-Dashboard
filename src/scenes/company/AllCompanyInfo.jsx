import React from "react";

// Routing
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/images/NoBg-Logo.png";
import Mcdonald from "../../assets/svgs/mc.svg";
import WebsiteSVG from "../../assets/svgs/website.svg";
import EmailSVG from "../../assets/svgs/email.svg";
import PhoneSVG from "../../assets/svgs/phone.svg";
import CheckedSVG from "../../assets/svgs/true.svg";
import NoCheckedSVG from "../../assets/svgs/false.svg";
import LinkedinSVG from "../../assets/svgs/linkedin.svg";
import InstagramSVG from "../../assets/svgs/instagram.svg";
import FacebookSVG from "../../assets/svgs/facebook.svg";
import GoogleSVG from "../../assets/svgs/google.svg";
import StarSVG from "../../assets/svgs/star.svg";

const AllCompanyInfo = () => {
  return (
    <section className="w-full min-h-screen bg-bgColor">
      {/* Container */}
      <div className="w-full px-6 space-y-6">
        {/* Header */}
        <div className="w-full flex justify-between pt-4 flex-col space-y-4 sm:flex-row sm:space-y-0 sm:justify-between">
          <Link to="/companies">
            <img src={Logo} alt="Gradesbar Logo" />
          </Link>

          {/* Company Details */}
          <div className="flex gap-3">
            <div className="space-y-2 text-right">
              <h3 className="text-2xl font-bold">Reichert LLC</h3>
              <span className="inline-block py-2 px-4 bg-[#FE7A4926] rounded-[50px] font-semibold">
                E-Commerce
              </span>
              <br />
              <span className="inline-block py-2 px-4 bg-[#FE7A4926] rounded-[50px] font-semibold">
                292 Mosciski Club, USA
              </span>
            </div>

            <img src={Mcdonald} alt="Company Logo" />
          </div>
        </div>

        {/* Body */}
        <div className="w-full flex pt-8 pb-4 gap-6 flex-col md:flex-row">
          <div className="grid sm:grid-cols-2 gap-4 w-full">
            {/* Business Contact */}
            <div className="bg-white p-4 rounded-[24px] shadow-md">
              <h3 className="text-textColor text-2xl font-bold">
                Business Contact:
              </h3>

              <div className="space-y-2 mt-3">
                {/* Website URL */}
                <div className="w-full flex justify-between items-center ">
                  <div className="flex items-center gap-3">
                    <img
                      className="p-3 bg-[#FE7A4926] rounded-[12px] "
                      src={WebsiteSVG}
                      alt="Website URL"
                    />

                    <span className="text-xl font-semibold ">
                      www.ReichertLLC.com
                    </span>
                  </div>

                  <img src={CheckedSVG} alt="Exist" />
                </div>

                {/* Email */}
                <div className="w-full flex justify-between items-center ">
                  <div className="flex items-center gap-3">
                    <img
                      className="p-3 bg-[#FE7A4926] rounded-[12px] "
                      src={EmailSVG}
                      alt="Email"
                    />

                    <span className="text-xl font-semibold ">
                      ReichertLLC2@info.com
                    </span>
                  </div>

                  <img src={CheckedSVG} alt="Exist" />
                </div>

                {/* Phone Number */}
                <div className="w-full flex justify-between items-center ">
                  <div className="flex items-center gap-3">
                    <img
                      className="p-3 bg-[#FE7A4926] rounded-[12px] "
                      src={PhoneSVG}
                      alt="Phone Number"
                    />

                    <span className="text-xl font-semibold ">No Number</span>
                  </div>

                  <img src={NoCheckedSVG} alt="No Exist" />
                </div>
              </div>
            </div>

            {/* Business VTA */}
            <div className="bg-white p-4 rounded-[24px] shadow-md">
              <h3 className="text-textColor text-2xl font-bold">
                Business VAT Information:
              </h3>

              <div className="space-y-2 mt-3">
                {/* Limited Company Checked */}
                <div className="p-3 w-full bg-[#FE7A4926] rounded-[9px] ">
                  <h4 className="text-sm font-bold">
                    Limited Company Checked:
                  </h4>
                  <p className="text-lg font-semibold">
                    Yes, Registered. No: 324535
                  </p>
                </div>

                {/* VAT Registered */}
                <div className="p-3 w-full bg-[#FE7A4926] rounded-[9px] ">
                  <h4 className="text-sm font-bold">VAT Registered:</h4>
                  <p className="text-lg font-semibold">No.</p>
                </div>

                {/* Business Owner */}
                <div className="p-3 w-full bg-[#FE7A4926] rounded-[9px] ">
                  <h4 className="text-sm font-bold">Business Owner:</h4>
                  <p className="text-lg font-semibold">Henry Shawn</p>
                </div>
              </div>
            </div>

            {/* Business Social Media */}
            <div className="bg-white p-4 rounded-[24px] shadow-md">
              <h3 className="text-textColor text-2xl font-bold">
                Business Social Media:
              </h3>

              <div className="space-y-2 mt-3">
                {/* Linkedin */}
                <div className="w-full flex justify-between items-center ">
                  <div className="flex items-center gap-3">
                    <img
                      className="p-3 bg-[#FE7A4926] rounded-[12px] "
                      src={LinkedinSVG}
                      alt="Linkedin"
                    />

                    <span className="text-xl font-semibold ">
                      No Account Attached
                    </span>
                  </div>

                  <img src={NoCheckedSVG} alt="Exist" />
                </div>

                {/* Facebook */}
                <div className="w-full flex justify-between items-center ">
                  <div className="flex items-center gap-3">
                    <img
                      className="p-3 bg-[#FE7A4926] rounded-[12px] "
                      src={FacebookSVG}
                      alt="Facebook"
                    />

                    <span className="text-xl font-semibold ">
                      ReichertLLC.33
                    </span>
                  </div>

                  <img src={CheckedSVG} alt="Exist" />
                </div>

                {/* Instagram */}
                <div className="w-full flex justify-between items-center ">
                  <div className="flex items-center gap-3">
                    <img
                      className="p-3 bg-[#FE7A4926] rounded-[12px] "
                      src={InstagramSVG}
                      alt="Instagram"
                    />

                    <span className="text-xl font-semibold ">
                      No Account Attached
                    </span>
                  </div>

                  <img src={NoCheckedSVG} alt="No Exist" />
                </div>
              </div>
            </div>

            {/* Business Reviews */}
            <div className="bg-white p-4 rounded-[24px] shadow-md">
              <h3 className="text-textColor text-2xl font-bold">
                Business Reviews:
              </h3>

              <div className="space-y-2 mt-3">
                {/* Google */}
                <div className="p-3 w-full bg-[#FE7A4926] rounded-[9px] flex items-center gap-2">
                  <img
                    className="p-3 rounded-[12px] bg-[#FE7A4926] "
                    src={GoogleSVG}
                    alt="Google"
                  />

                  <div className="w-full">
                    <h4 className="text-xl font-bold">Google</h4>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <img key={index} src={StarSVG} alt="Star" />
                      ))}
                      <span className="font-bold">(5.0)</span>
                      <span className="text-[#00000080] ml-1">
                        2,234 Reviews
                      </span>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="p-3 w-full bg-[#FE7A4926] rounded-[9px] flex items-center gap-2">
                  <img
                    className="p-3 rounded-[12px] bg-[#FE7A4926] "
                    src={WebsiteSVG}
                    alt="Website"
                  />

                  <div className="w-full">
                    <h4 className="text-xl font-bold">Website</h4>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <img key={index} src={StarSVG} alt="Star" />
                      ))}
                      <span className="font-bold">(4.0)</span>
                      <span className="text-[#00000080] ml-1">434 Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Score */}
          <div className="bg-white shadow-md w-full sm:w-[50%] rounded-[24px] p-4 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-3">Your Score:</h3>

            {/* Radial Progress */}
            <div
              className="radial-progress my-4 text-[#FE7A49] "
              style={{
                "--value": 70,
                "--size": "12rem",
                "--thickness": "10px",
              }}
            >
              <div class="flex flex-col items-center justify-center h-full text-textColor ">
                <h2 className="text-3xl font-bold ">5,643</h2>
                <p className="text-center font-medium">
                  You're Doing <br />{" "}
                  <span className="uppercase font-bold">Good</span>
                </p>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold mb-3">
                How Score is calculated:
              </h4>

              <div className="space-y-2">
                <span className="inline-block py-2 px-4 bg-[#FE7A4926] rounded-[50px] font-semibold">
                  +5 Website
                </span>
                <br />
                <span className="inline-block py-2 px-4 bg-[#FE7A4926] rounded-[50px] font-semibold">
                  +10 Social Media
                </span>
                <br />
                <span className="inline-block py-2 px-4 bg-[#FE7A4926] rounded-[50px] font-semibold">
                  +30 Age of Company > 24 Months
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCompanyInfo;
