import Link from "next/link"

function PostList({posts}){
    return (
        <>
        <h1>List of posts</h1>
        {
            posts.map(post =>{
                return (
                    <Link href={`/posts/${post.id}`}>
                    <div key={post.id}>
                    <h2 key={post.id}>{post.id} - {post.title}</h2>
                    <hr />
                    </div>
                    </Link>
                )
            })
        }
        </>
    )
}

export default PostList
//  export async function getStaticPaths() {
//     const respones = await fetch(`https://jsonplaceholder.typicode.com/`)
//     const postList = await respones.json();

//     const staticPaths =


//     return{
//         paths,
//         fallback: false,
//     }
//  }


export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()


    return {
        props:{ 
            posts: data,
        }
    }
}