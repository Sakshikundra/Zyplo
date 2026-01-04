import React, { use } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { LogOut } from 'lucide-react'

const Header = () => {
    const navigate=useNavigate();
    const user=false;
  return (
    <nav className='flex items-center justify-between py-3 px-6 border-b border-gray-800'>
      <Link to="/">
        <img src={logo} className="h-24 w-auto" alt="logo" />
      </Link>
      <div>{!user ? (<Button onClick={() => navigate('/auth')}>Login</Button>
      ) : (
        <DropdownMenu>
  <DropdownMenuTrigger asChild  >
    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" className='h-16'/>
  <AvatarFallback>PA</AvatarFallback>
</Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>SAKSHI KUNDRA</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
        <Link className="mr-2 h-4 w-4" /><span>My links</span>
    </DropdownMenuItem>
    <DropdownMenuItem className="text-red-400">
        <LogOut className="mr-2 h-4 w-4" /><span>Logout</span>
    </DropdownMenuItem>
  
  </DropdownMenuContent>
</DropdownMenu>
      )}
        
      </div>
    </nav>
  )
}

export default Header;
