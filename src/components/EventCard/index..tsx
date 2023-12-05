
import Image from 'next/image'

type props = {
    title: string
    description: string
    src: string
    date: string

}

const EventCard = ({ title, description, src, date }: props) => {
  return (
    <div className="max-w-sm max-h-80 rounded overflow-hidden shadow-lg m-4">
      <Image
        className="w-full h-40 object-cover"
        src={src}
        alt="Event"
        width={400}
        height={500}
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
