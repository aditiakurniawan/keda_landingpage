import ShapeTop from "../UI/atoms/ShapeTop";
import Ilustration from "../UI/atoms/Ilustration";
import ShapeBottom from "../UI/atoms/ShapeBottom";

function Home() {
  return (
    <section id="home" className="w-screen h-screen relative  ">
      <ShapeTop />
      <div className="px-12 pt-24">
        <p className="text-center w-1/3 mx-auto my-24">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quo
          sit id alias cumque, animi recusandae quos molestias nemo provident
        </p>
        <div className="w-1/3 flex flex-col items-center gap-5">
          <q className=" float-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q>
          <Ilustration />
        </div>
      </div>
      <ShapeBottom />
    </section>
  );
}

export default Home;
