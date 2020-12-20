import './App.css';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryExample />
    </QueryClientProvider>
  );
}

function QueryExample() {
  const { isLoading, error, data } = useQuery(
    'users',
    () =>
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.data)
  );

  if (isLoading) return 'Loading...';
  if (error) return 'An error occured' + error.message;
  console.log(data);

  return (
    <div className="App">
      <h1> React Query</h1>
      {data.map((user)=>(
        <h3 key={user.id}>Name: {user.name}</h3>
      ))}
    </div>
  );
}
