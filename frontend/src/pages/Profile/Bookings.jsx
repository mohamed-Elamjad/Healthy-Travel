import PlaceCard from "../../components/Places/PlaceCard"
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    price: 6700,
    rating: 4,
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    rating: 4.5,
  },
];
const Bookings = () => {
  return (
    <div>
      <div className="pt-4 px-4">
        <h1 className="py-2 text-2xl font-semibold">Your Profile</h1>
        <p className="text-slate-600">
          Welcome to your profile page! Here, you can view and manage your personal information, check your booking history, and update your preferences.
        </p>
      </div>

      <hr className="mt-4 mb-8" />
      Destination Bookings
      <div className="px-[60px] py-[35px]">
        <section data-aos="fade-up" className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Bookings
