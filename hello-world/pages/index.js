import Link from "next/link"
import { useRouter } from "next/router"

function Home(){
    const router = useRouter()
    const handleClick = () =>{
        console.log("placing order");
        router.push('/product')
    }
    return(
    <div className="flex just">
         <h1>Home page</h1> 
         <Link href='/blog'>
            blog
        </Link> 
        <Link href='/product'>
            products
         </Link>   
             <button onClick={handleClick}>Place order</button> 

            <Link href='/posts'>
                post
            </Link>
    </div> 
    )
}

export default Home






jho