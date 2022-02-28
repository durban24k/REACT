const Home = () => {
     const handleClick = () =>{
          console.log('Hello Ninjas')
     }
     return ( 
          <div className="home">
               <h3>Home Page</h3>
               <button onClick={handleClick}>Click me</button>
          </div>
      );
}
 
export default Home;