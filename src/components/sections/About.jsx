import IconAbout from "../UI/atoms/IconAbout";
function About() {
  return (
    <section id="about" className="w-screen h-screen ">
      <div className="w-full h-full flex justify-center items-center">
        <div className="px-12 w-1/2 flex flex-col justify-center items-start gap-10 text-start">
          <h1 className="text-5xl font-bold font-heading">ABOUT</h1>
          <p className="text-xl  font-heading">
            Sebuah startup membuat suatu website seperti ERP untuk memudahkan
            seorang pengusaha dalam mencatat setiap barang yang keluar masuk dan
            mencatat setiap keuntungan yang mereka dapatkan setiap harinya.
          </p>
          <button className="py-3 px-6 font-medium border rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400  text-white hover:bg-purple-500-800">
            Get Started
          </button>
        </div>
        <IconAbout className="absolute top-0 right-0 float-right" />
      </div>
    </section>
  );
}

export default About;
