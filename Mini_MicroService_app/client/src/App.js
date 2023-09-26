
import './App.css';
import PostList from './components/PostList';
import PostsCreation from './components/PostsCreation';

function App() {
  return (
    <div className='p-5'>
      <h1 className='text-2xl font-bold mb-2'>Blog app</h1>
      <hr className='bg-slate-600 m-2'></hr>
    <PostsCreation></PostsCreation>
    <PostList></PostList>
    </div>
  )
    
}

export default App;
