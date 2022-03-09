import React from 'react';
import axios from 'axios';

const About = () => {
  const [data, setData] = React.useState<string | null>(null);
  React.useEffect(() => {

    const getData = async () => {
      const data: MeResponse = await axios.get('http://localhost:3000/api/me');
      return data.data;
    }

    getData().then(data => {
      setData(data.description);
    });


  }, []);

  return (
    <section
      className='lg:col-span-4 md:col-span-3 bg-primary rounded-lg text-center p-8 text-lg md:text-3xl w-full shadow shadow-gray-900 shadow-md h-full'>
      <p className='flex justify-center items-center h-full '>
        {data ?? 'Loading...'}
      </p>
    </section>
  );
};

export default About;
