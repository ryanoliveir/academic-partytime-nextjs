import EventCard from "@/components/EventCard/index.";
import Head from "next/head";
const eventsData = [
  {
    id: 1,
    title: "Alan Walker",
    description: "Alan Walker in New York",
    src: "https://i.ytimg.com/vi/2zEpkWsnoK0/maxresdefault.jpg",
    date: "2024-09-15",
  },
  {
    id: 2,
    title: "Event 2",
    description: "Lollapalooza 2024",
    src: "https://poltronanerd.com.br/wp-content/uploads/2018/06/Sem-titulo-2-1-768x480.jpg",
    date: "2024-04-24",
  },
  // Add more events as needed
];

const Home = () => {
  return (
    <>
      <Head>
        <meta
          content="width=device-width,initial-scale=1, user-scalable=no"
          name="viewport"
        />
      </Head>
      <div className="flex items-center flex-col flex-wrap min-h-screen algin-items-center justify-center bg-gray-900 text-white">
        <div>
          <h1 className="text-2xl">Welcome to P A R Y T I M E</h1>
        </div>
        <div className="flex items-center  mt-32 flex-row flex-wrap">
          {eventsData.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
