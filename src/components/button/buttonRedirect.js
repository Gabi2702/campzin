import { useNavigate } from 'react-router-dom';

export default function ButtonRedirect({urlRedirect, Title}) {
  const navigate = useNavigate(); 

  const handleRedirect = () => {
    navigate(urlRedirect); 
  };

  return (
    <button 
      onClick={handleRedirect} 
      className=" bg-secondary-light  font-bold py-2 px-4 rounded-md hover:bg-white   transition duration-300"

    >
      <p className='text-white hover:text-primary-light'>{Title}</p>
    </button>
  );
}
