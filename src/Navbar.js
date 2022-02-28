const Navbar = () => {
     return ( 
          <nav className="navbar">
               <h2>The Alfred Blog</h2>
               <div className="links">
                    <a href="/">Home</a>
                    <a href="/create" style={{
                         color:"white",
                         backgroundColor:"#f1356d",
                         borderRadius:"5px",
                         padding:"8px 30px"
                    }}>New Blog</a>
               </div>
          </nav>
      );
}
 
export default Navbar;