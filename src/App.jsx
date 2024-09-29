import "./App.css"
import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from './api/api'
import PostLists from './components/PostLists'

const App = () => {
  // const { data,isLoading }=useQuery({
  //   queryKey:["posts"],
  //   queryFn: fetchPosts,
  // })

  // console.log(data,isLoading)

  return (
    <div>
      <h2 className="title">My Posts</h2>
      <PostLists/>
    </div>
  )
}

export default App