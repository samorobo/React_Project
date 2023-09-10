import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

      <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
      <div className='w-3/5 p-5'> 
      <div className='text-left font-bold'>
        <span className='text-green-500'>Company</span>Name
      </div>
      <div className='py-10'>
        <p className='text-3xl font-bold text-green-500 mb-2'> Sign in to Account</p>
        <div className='border-2 w-10 border-green-500 inline-block mb-2 '></div> 
        <div className='flex justify-center my-2'>
          <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
            <FaFacebookF className='text-sm' />
          </a>

          <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
            <FaLinkedinIn className='text-sm' />
          </a>

          <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
            <FaGoogle className='text-sm' />
          </a>
        </div>
        <p className='text-gray-400 my-3 ml-24'>or use your email account</p>
        <div className='flex flex-col items-center'>
          <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'><FaRegEnvelope className='text-gray-400 m-2' />
          <input type="email" name='email' placeholder='Email' className='bg-gray-200 outline-none text-sm flex-1' />
          </div>

          <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'><MdLockOutline className='text-gray-400 m-2' />
          <input type="password" name='password' placeholder='Password' className='bg-gray-200 outline-none text-sm flex-1' />
          </div>
          <div className='flex justify-between w-64 mb-5'>
            <label htmlFor="" className='flex items-center text-xs'>
              <input type="checkbox" name='remember' className='mr-1' />
              Remember me
              </label>
              <a href="#" className='text-xs'>Forgot password</a>
          </div>
          <a href="#" className='border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white'>Sign Up</a>
        </div>
        </div>
      </div>  {/*Signup in section*/}
      <div className='w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12' >
         <h2 className='text-3xl font-bold mb-2'> Hello, Friend! </h2> 
         <div className='border-2 w-10 border-white inline-block mb-2'></div>
         <p className='mb-10'>Fill up your personal information with us</p>
         <a href="#" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500'>Sign Up</a>
         </div> {/*login in section*/}
      </div>
    </main>
    
  )
}
