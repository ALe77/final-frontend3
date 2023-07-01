import { useContext,  useEffect } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';


const Home = () => {
  const { state, setData } = useContext(ContextGlobal);
  const theme = state.theme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setData(data);      
    };

    fetchData();
  }, [setData]);

  return (
    <main className={theme}>
      <div className="card-grid">
        {state.data.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;