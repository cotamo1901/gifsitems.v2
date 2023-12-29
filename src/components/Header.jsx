import './Header.css'


const Header = () => {
  return (
   <header className="header-container">
<nav className='nav-container'>
    
    <ul >
        <div className='text-container'>

    <div className=' title-header'>
        <h3>GifExpert</h3>
        
       </div>
        
        <div className='link-header'>
            <a href="">Home</a>
        </div>
        <div className='link-header'>
            <a href="">Contact</a>
        </div>


        </div>
    </ul>
</nav>

   </header>
  )
}

export default Header