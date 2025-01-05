const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white "
    >
      <div className="flex flex-col justify-center mx-auto p-4 w-full h-full max-w-screen-lg">
        <div className="pb-8">
          <p className="font-bold inline text-4xl border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">You can contact me here.</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/bjjjwddb"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          > 
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name "
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Enter Your Email "
              name="email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows={10}
              placeholder="Enter Your Message "
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="flex items-center text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 duration-300">
              Lets talk!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
