import User from "@/components/user";
function UserList ({ users}){
    return(
         <>
         <h1>List of Users</h1>
         {users.map(user => {
            return (
                <div key={user.id}>
                    <User user={user} />
                    <hr />
                    </div>
            )
         })}
         </> )
}

export default UserList;

export  async function getStaticProps() {
    const respones = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await respones.json()
    console.log(data)

     return {
        props:{
            users: data
        },
     }
}
