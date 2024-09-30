import { useMutation, useQuery } from "@tanstack/react-query"
import { addPost, fetchPosts, fetchTags } from "../api/api"

const PostLists = () => {
    const { data: postData, isError, isLoading, error } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });
    console.log(postData)
    // Handle loading state

    const {data:tagsData}=useQuery({
        queryKey:["tags"],
        queryFn: fetchTags,
    })


    const {mutate,isError:isPostError,isPending,error:postError, reset}=useMutation({
        mutationFn: addPost,
    })

    if (isLoading) {
        return <p>Loading...</p>;
    }
    console.log(postData)

    // Handle error state
    if (isError) {
        return <p>Error: {error.message}</p>;
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        const formData= new FormData(e.target)
        const title=formData.get("title")
        const tags=Array.from(formData.keys()).filter((key)=>formData.get(key)==="on")
        if(!title || !tags) return;
          mutate({id:postData.length+1,title,tags})
          e.target.reset()
    }

    
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Enter your post.."
                className="postbox"
                name="title"
                />
                <div className="tags">
                    {tagsData?.map((tag)=>{
                        return (
                            <div key={tag}>
                                <input name={tag} id={tag} type="checkbox"/>
                                <label htmlFor={tag}>{tag}</label>
                            </div>
                        )
                    })}
                </div>
                    <button>Post</button>
            </form>
            {postData.map((post) => 
            {return (
                <div key={post.id} className="post">
                    <div>{post.title}</div>
                    {post.tags?.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            )})}
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