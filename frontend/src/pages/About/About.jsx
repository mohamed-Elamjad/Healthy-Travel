import Blogs from "../../components/Bloges/Bloges";
import Location from '../../components/Location/Location'
const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10 px-[60px]">
          <h1 className=" my-8 border-l-8 border-[#008EC4] py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            ducimus cupiditate quo harum officia perspiciatis hic ut sunt
            repudiandae, laboriosam expedita nostrum tempora, consectetur
            itaque, voluptate error aperiam corrupti ullam aspernatur a!
            Dolorem, reprehenderit amet quidem deleniti iure rem vel a enim
            ipsam hic numquam consequatur eius id eaque accusamus repudiandae
            impedit, quisquam non, harum inventore ratione? Tempora voluptatum
            ut eligendi corrupti esse, repellat nesciunt illum facilis officiis?
            Nisi quidem officiis asperiores nostrum ipsa maiores explicabo quia!
            Corporis provident asperiores fuga eligendi rem temporibus possimus
            autem excepturi! Facilis sunt corrupti nesciunt asperiores, ab
            consectetur doloremque, velit a mollitia possimus quaerat!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            suscipit minus similique aliquam recusandae quisquam id nulla
            tempora voluptate vero.
          </p>
        </div>
      </div>

      <Location/>
    <Blogs/>
    </>
  );
};

export default About;
