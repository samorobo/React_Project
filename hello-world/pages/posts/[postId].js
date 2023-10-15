
function Post({ post }) {
    return (
        <>
            <h2>
                {post.id} - {post.title}
            </h2>
            <p>{post.body}</p>
            <hr />
        </>
    )
}

export default Post;

export async function getStaticPaths() {
    // Fetch data from an external API or use a local data source to get the list of posts
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    // Map over the list of posts and return an array of paths
    const paths = posts.map((post) => ({
        //params: { postId: post.id.toString() },
        params: { postId: `${post.id}`}
    }));

    return {
        paths,
        fallback: false, // See the "fallback" section below
    };
}

export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();

    return {
        props: {
            post: data,
        },
    };
}
