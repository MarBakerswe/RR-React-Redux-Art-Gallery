import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchData, inputId } from '../features/dataSlice'; // Adjust the path according to your project structure

function MusicDetailPage() {
  let { id } = useParams();
  const dispatch = useDispatch();

  // Use the useSelector hook to get the data from Redux store
  const data = useSelector((state) => state.data);

  useEffect(() => {
    // Dispatch the inputId action to set the objectId in the store to the id from the URL parameter
    dispatch(inputId(Number(id)));

    // Dispatch the fetchData action to fetch data for the new objectId
    dispatch(fetchData());
  }, [id, dispatch]);

  if (!data.apiData || Object.keys(data.apiData).length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{data.apiData.title}</h1>
      <img src={data.apiData.primaryImage} alt={data.apiData.title} />
      {/* Render other data as you see fit */}
    </div>
  );
}

export default MusicDetailPage;
