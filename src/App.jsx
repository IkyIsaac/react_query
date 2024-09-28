import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from './api/api'

const App = () => {
  const { data,isLoading }=useQuery({
    queryKey:["posts"],
    queryFn: fetchPosts,
  })

  console.log(data,isLoading)

  return (
    <div>hello world</div>
  )
}

export default App