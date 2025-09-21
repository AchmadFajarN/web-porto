import Slide from '../components/Slide'
import DetailProject from '../components/DetailProject'
import { useEffect, useState } from 'react';
import { getProjectById } from '../data/constant';
import { useParams } from 'react-router-dom';

const Project = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const data = getProjectById(id);
    setData(data);
  }, [id]);

  if (!data) {
    return null;
  }

  return (
    <div className='min-h-screen py-20 px-6 xl:px-20 flex flex-col gap-8 xl:flex-row'>
        <Slide bgImage={data.screenshoot} />
        <DetailProject data={data} />
    </div>
  )
}

export default Project