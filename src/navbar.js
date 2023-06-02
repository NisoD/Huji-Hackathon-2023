const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>What's cookin' Good lookin' ?</h1>
        <div className="links">
          <a href="/create" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>Random recipe</a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;