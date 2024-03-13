import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null); // Add state for error handling

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        setError(error); // Set error state if fetch fails
        console.error(error); // Log the error
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  // Check if error occurred and render error message
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Check if landlord data is not fetched yet
  if (!landlord) {
    return <p>Loading...</p>;
  }

  // Render contact form if landlord data is fetched successfully
  return (
    <div className='flex flex-col gap-2'>
      <p>
        Contact <span className='font-semibold'>{landlord.username}</span> for{' '}
        <span className='font-semibold'>{listing.name.toLowerCase()}</span>
      </p>
      <textarea
        name='message'
        id='message'
        rows='2'
        value={message}
        onChange={onChange}
        placeholder='Enter your message here...'
        className='w-full border p-3 rounded-lg'
      ></textarea>

      <Link
        to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
        className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
      >
        Send Message
      </Link>
    </div>
  );
}
