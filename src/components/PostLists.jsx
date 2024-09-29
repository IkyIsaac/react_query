import { useQuery } from "@tanstack/react-query"
import { fetchPosts } from "../api/api"

const PostLists = () => {
    const { data: postData, isError, isLoading, error } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });
    console.log(postData)
    // Handle loading state
    if (isLoading) {
        return <p>Loading...</p>;
    }
    console.log(postData)

    // Handle error state
    if (isError) {
        return <p>Error: {error.message}</p>;
    }

    
    return (
        <div className="container">
            {postData.map((post) => (
                <div key={post.id} className="post">
                    <div>{post.title}</div>
                    {/* Map over post tags if they exist */}
                    {post.tags?.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            ))}
        </div>
    );
};


// const PostLists = () => {
//     const { data:postData, isError, isLoading, error}= useQuery({
//         queryKey:["posts"],
//         queryFn:fetchPosts
//     })
//     console.log(postData)


//   return (
//     <div className="container">
//         {isLoading && <p>Loading...</p>}
//         { isError && <p>{error?.message}</p>}

//         {postData.map((post)=>{

//             return(
//                 <div key={post.id}>
//                     <div>{post.title}</div>
//                     {post.tags.map((tag)=>(
//                         <span key={tag}>{tag}</span>
//                     ))}
//                 </div>
//             )
//         })}
//     </div>
//   )
// }

export default PostLists