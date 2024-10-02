import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const TestimonailsData = [
  {
    img: "https://readymadeui.com/profile_2.webp",
    name: "John Doe",
    position: "Founder of Company A",
    testimonial: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    rating: 4.5
  },
  {
    img: "https://readymadeui.com/profile_2.webp",
    name: "Taj Mahal",
    position: "CEO of Company B",
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 3.5
  },
  {
    img: "https://readymadeui.com/profile_3.webp",
    name: "Jane Smith",
    position: "Marketing Manager",
    testimonial: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="sm:p-10 p-6 my-20 border-gray-200 border-2 text-[#333]">
      <div
      data-aos="fade-up"
      className="max-w-6xl mx-auto px-[60px]">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <h2 className="text-2xl font-extrabold">What our happy client say</h2>
            <p className="text-sm text-[#333] mt-4 leading-relaxed">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 md:gap-6 max-md:gap-10 mt-12">
          {TestimonailsData.map((testimonial, index) => (
            <div key={index} className="max-w-[350px] h-auto lg:p-8 p-4 rounded-md bg-white">
              <div className="flex items-center">
                <img src={testimonial.img} className="w-10 h-10 rounded-full" alt={`Profile of ${testimonial.name}`} />
                <div className="ml-4">
                  <h4 className="text-sm font-extrabold">{testimonial.name}</h4>
                  <p className="mt-1 text-xs text-gray-400">{testimonial.position}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm leading-relaxed">{testimonial.testimonial}</p>
              </div>
              <div className=" mt-4 text-yellow-400 flex gap-2 items-center ">
                {[...Array(5)].map((_, i) => {
                  if (i + 1 <= testimonial.rating) {
                    return <IoIosStar key={i} />;
                  } else if (i < testimonial.rating) {
                    return <IoIosStarHalf key={i} />;
                  } else {
                    return <IoIosStarOutline key={i} />;
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
