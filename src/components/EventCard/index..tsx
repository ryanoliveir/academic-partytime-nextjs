
type props = {
    title: string
    description: string
    date: string

}

const EventCard = ({ title, description, date }: props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full h-40 object-cover"
        src="https://placekitten.com/600/400"
        alt="Event"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Date: {date}
        </span>
      </div>
    </div>
  );
};

export default EventCard;
