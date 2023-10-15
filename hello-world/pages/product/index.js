import Link from "next/link"

function Product( {productId = 100}){
    return( 
        <div className="flex justify-between">
        <Link  href='/'>
            Home
        </Link>
        <Link href='/product/1'>
            Product 1
        </Link>
        <Link href='/product/2'>
            Product 2
        </Link>
        <Link href='/product/3' replace>
         Product 3
        </Link>

        <Link href={`/product/${ productId}`}>
            Product {productId}
        </Link>
    </div>
    
    
    )

}

export default Product