import { comments } from "@/data/comments"

function Comment({ comment}){
    return(
        <div>
            {comment.id} - {comment.text}
        </div>
    )
}

export default Comment    

export async function getStaticPaths(){

    // const response = await fetch ('api/comments/')
    // const comments = await response.json()
    //  const paths = comments.map((comment) => {
    //     params: { commentId: `${comment.id}` }

    //  })

    return{
        paths:[
            {params: { commentId: '1'}},
            {params: { commentId: '2'}},
            {params: { commentId: '3'}},
        ],
        fallback: false,
    }
}

export async function getStaticProps(context){
    const {params} = context
    const {commentId} = params
   const comment = comments.find(comment => comment.id === parseInt(commentId))
    return {
        props:{
            comment: data,
        },
        fallback: false,
    }
}