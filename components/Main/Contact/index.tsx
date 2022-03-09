import React, {useEffect} from 'react';
import axios from "axios";
import SocialElement from "@components/Main/SocialElement";

const Contact = () => {
  const [data, setData] = React.useState<SocialMedia[] | null>(null);
  useEffect(() => {

    const getData = async () => {
      const data: MeResponse = await axios.get('http://localhost:3000/api/me');
      return data.data.social;
    }

    getData().then(data => {
      setData(data);
    });


  }, []);

  return (
    <div>
      <div className='flex flex-col justify-center items-center space-y-2'>
        <p className='text-aux font-bold'>Contact</p>
        <p className='text-aux font-bold'>@captainrun</p>

        <div className='grid grid-cols-3 place-items-center space-y-4 col-span-2 w-full h-full'>
          {data && data.map((item) =>
            <SocialElement item={item} key={item.name}/>
          )}

        </div>
      </div>
    </div>
  );
};

export default Contact;
