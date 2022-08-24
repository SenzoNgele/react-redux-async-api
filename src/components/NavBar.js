
const NavBar = () => {
    return (
      <nav>
        <div className="logo">
          <img src="./user.png" style={{width: 85 , height: 65}} alt="friendship" />
          </div>
        <ul>
          <a href={"/UserContainer"}>Home</a>
          <a href={"/#"}>About</a>
          <a href={"/#"}>List of Users</a>
        </ul>
      </nav>
    );
}
 
export default NavBar;