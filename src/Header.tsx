import { useEffect } from 'react';
import './Header.scss';

const Header = () => {
  useEffect(()=>{
    if(window.location.pathname === "/savings"){
      let link = document.getElementById('link2')!;
      let link2 = document.getElementById('link1')!;
      link.classList.add("active");
      link2.classList.remove("active");
  } else {
      let link = document.getElementById('link1')!;
      let link2 = document.getElementById('link2')!;
      link.classList.add("active");
      link2.classList.remove("active");
  }
  }, []);

    const setActive = () => {
        let link = document.getElementById('link1')!;
        let link2 = document.getElementById('link2')!;
        link.classList.add("active");
        link2.classList.remove("active");
      }
    
      const setActive_ = () => {
        let link = document.getElementById('link1')!;
        let link2 = document.getElementById('link2')!;
        link2.classList.add("active");
        link.classList.remove("active");
      }
  return (
    <nav>
      <ul>
        <li style={{position: "relative", right: "500px", fontWeight: "600", color: "white"}}><a href="/" onMouseOver={(e)=>{(e.target as HTMLAnchorElement).style.background="none"}}>BUDGET APP</a></li>
        <li><a href='/' id="link1" className='active' onClick={setActive}>Budget</a></li>
        <li><a href='/savings' id="link2" onClick={setActive_}>Savings</a></li>
      </ul>
    </nav>
  )
}

export default Header;
