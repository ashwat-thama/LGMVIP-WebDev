const NavBar = ({ getData }) => {
    return (
      <>
        <div id="navBar">
          <div id="navbarDiv">
            <h1>Let's Grow More</h1>
            <button onClick={getData}>Get Users</button>
          </div>
        </div>
        <div id="emptyData">
          <h1>No Users Found</h1>
          <div id="underLine"></div>
        </div>
      </>
    );
  };
  
  const NavBarSecond = ({getData}) => {
    return (
      <>
        <div id="navBar">
          <div id="navbarDiv">
            <h1>Let's Grow More</h1>
            <button onClick={getData}>Get Users</button>
          </div>
        </div>
      </>
    );
  };
  
  export { NavBar,NavBarSecond };