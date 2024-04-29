import Image from 'next/image'
import Link from 'next/link'
import { UserButton, SignInButton, SignedOut }from '@clerk/nextjs'
import { ThemeToggler } from './ThemeToggler'

function Header() {
  return (
    
     <header className='flex between justify-between items-center'>
        <Link href='/' className='flex items-center space-x-2'>
            <div className=' bg-[#0160FE] w-fit'>
                <Image
                    src='https://www.shareicon.net/data/128x128/2016/07/13/606936_dropbox_2048x2048.png'
                    alt='logo'
                    height={50}
                    width={50}
                    className='invert'
                />
            </div>
            <h1 className="font-bold text-xl">Dropbox</h1>
        </Link>

        <div className='px-5 flex space-x-2 items-center'>
            {/* theme toggeler */}
            <ThemeToggler/>

            <UserButton afterSignOutUrl='/' />
           <SignedOut>
            <SignInButton forceRedirectUrl='/dashboard' mode='modal'/>
           </SignedOut>
        </div>
     </header>
    
  )
}

export default Header
