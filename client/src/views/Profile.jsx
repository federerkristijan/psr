
const Events = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "events"] | order(_createdAt asc){
          name,
          date,
          description,
          url
        }`
      )
      .then((data) => setEvents(data))
      .catch(console.error);
  }, []);

  return (
    
  );
};

export default Events;
