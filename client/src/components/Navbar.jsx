import React from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { Grip, X, MessageCircle, List, Package } from 'lucide-react'
import { useClerk, useUser, UserButton } from '@clerk/clerk-react'


const Navbar = () => {

  const { user } = useUser()
  const { openSignIn } = useClerk()

  const [menuOpen, setMenuOpen] = React.useState(false)
  const navigate = useNavigate()

  return (
    <nav className='h-20'>

      <div className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white'>

        {/* Logo */}
        <img
          onClick={() => { navigate('/'); scrollTo(0, 0) }}
          src={assets.logo}
          alt="logo"
          className='h-10 cursor-pointer'
        />

        {/* Desktop Menu */}
        <div className='hidden sm:flex items-center gap-8 text-gray-800'>

          <Link to="/">Home</Link>

          <Link to="/marketplace">Marketplace</Link>

          <Link
            to="/messages"
            onClick={(e) => {
              if (!user) {
                e.preventDefault()
                openSignIn()
              }
            }}
          >
            Messages
          </Link>

          <Link
            to="/mylisting"
            onClick={(e) => {
              if (!user) {
                e.preventDefault()
                openSignIn()
              }
            }}
          >
            MyListing
          </Link>
           {/* Right Side */}

        </div>

    <div className="flex items-center gap-4">

  {user ? (
    <UserButton afterSignOutRedirectUrl="/">
  <UserButton.MenuItems>

    <UserButton.Action
      label="Marketplace"
      labelIcon={<Grip size={16} />}
      onClick={() => navigate('/marketplace')}
    />

    <UserButton.Action
      label="Messages"
      labelIcon={<MessageCircle size={16} />}
      onClick={() => navigate('/messages')}
    />

    <UserButton.Action
      label="My Listings"
      labelIcon={<List size={16} />}
      onClick={() => navigate('/mylisting')}
    />

    <UserButton.Action
      label="My Orders"
      labelIcon={<Package size={16} />}
      onClick={() => navigate('/myorders')}
    />

  </UserButton.MenuItems>
</UserButton>
  ) : (
    <button
      onClick={openSignIn}
      className='hidden sm:block px-8 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full'
    >
      Login
    </button>
  )}

  <button
    className="sm:hidden text-3xl"
    onClick={() => setMenuOpen(true)}
  >
    ☰
  </button>

    </div>
</div>

      {/* Mobile Menu (kept your structure) */}
      <div
        className={`sm:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex flex-col items-center justify-center h-full text-xl font-semibold gap-6 relative">

          <X
            onClick={() => setMenuOpen(false)}
            size={30}
            className="absolute top-6 right-6 text-gray-600 cursor-pointer"
          />

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <Link to="/marketplace" onClick={() => setMenuOpen(false)}>
            Marketplace
          </Link>

          <Link
            to="/messages"
            onClick={(e) => {
              if (!user) {
                e.preventDefault()
                openSignIn()
              }
              setMenuOpen(false)
            }}
          >
            Messages
          </Link>

          <Link
            to="/mylisting"
            onClick={(e) => {
              if (!user) {
                e.preventDefault()
                openSignIn()
              }
              setMenuOpen(false)
            }}
          >
            MyListing
          </Link>

          {!user && (
            <button
              onClick={() => {
                openSignIn()
                setMenuOpen(false)
              }}
              className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full"
            >
              Login
            </button>
          )}

        </div>
      </div>

    </nav>
  )
}

export default Navbar