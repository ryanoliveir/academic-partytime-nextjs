import EventCard from "@/components/EventCard/index.";
import Head from "next/head";
const eventsData = [
    {
      id: 1,
      title: 'Event 1',
      description: 'Description for Event 1.',
      date: '2023-01-15',
    },
    {
      id: 2,
      title: 'Event 2',
      description: 'Description for Event 2.',
      date: '2023-02-20',
    },
    // Add more events as needed
  ];

const Home = () => {
      return (
        <>
            <Head>
                <meta content="width=device-width,initial-scale=1, user-scalable=no" name="viewport" />
            </Head>
            <div className="flex flex-wrap justify-center">
              {eventsData.map((event) => (
                  <EventCard key={event.id} {...event} />
                  ))}
            </div>
            </>
      );
}

export default Home;

