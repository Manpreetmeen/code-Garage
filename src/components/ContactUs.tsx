export default function ContactUs() {
  return (
    <div>
      <p className="ml-20 my-2 cursor-pointer"> Home / ContactUs </p>

      <main className="relative text-center my-3">
        <div className="bg-blue-600 w-96 h-96 -ml-40  mt-4 rounded-full absolute -z-10"></div>
        <p className="text-5xl font-bold">Hire Software Developers</p>
        <p className="text-2xl font-medium">Enter Your Details Below</p>

        <div className="flex mx-20">
          <div className="left h-96 bg-gray-200 w-1/2 rounded-lg m-5 text-left">
            <i className="fa-solid fa-id-badge text-3xl ml-10 mt-7"></i>
            <p className="ml-24 -mt-9 text-2xl font-medium text-blue-700">
              Contact Us
            </p>
            <p className="ml-24">(+91) 7988162738</p>
            <i className="fa-solid fa-envelope text-3xl ml-10 mt-7"></i>
            <p className="ml-24 -mt-9 text-2xl font-medium text-blue-700">
              Email
            </p>
            <p className="ml-24">vivekjangrardx@gmail.com</p>
            <i className="fa-solid fa-location-dot text-4xl ml-10 mt-7"></i>
            <p className="ml-24 -mt-9 text-2xl font-medium text-blue-700">
              Location
            </p>
            <p className="ml-24 w-64">
              Code Garage Tech, The Atrium Quarkcity, A-45 Phase 8B, Industrial
              Area SAS- Nagar, Punjab -160059, India
            </p>
          </div>
          <div className="right h-9/12 bg-gray-200 w-1/2 rounded-lg m-5">
            <div>
              <i className="fa-solid fa-user text-2xl"></i>
              <input
                className="h-16 p-4 rounded-lg w-96 m-4 border border-1 border-gray-500 mt-8 "
                type="text"
                placeholder="Name"
              ></input>
            </div>
            <div>
              <i className="fa-solid fa-phone text-2xl"></i>
              <input
                className="h-16 p-4 rounded-lg w-96 m-4 border border-1 border-gray-500 "
                type="number"
                placeholder="Contact Number"
              ></input>
            </div>
            <div>
              <i className="fa-regular fa-envelope text-2xl"></i>
              <input
                className="h-16 p-4 rounded-lg w-96 m-4 border border-1 border-gray-500 "
                type="email"
                placeholder="E-mail"
              ></input>
            </div>
            <div className="flex p-4 m-4">
              <i className="fa-regular fa-message text-2xl mt-4"></i>
              <textarea
                className="h-32 p-4 rounded-lg w-96 m-4 border border-1 border-gray-500 "
                placeholder="Message"
              ></textarea>
            </div>{" "}
          </div>
        </div>
      </main>
    </div>
  );
}
