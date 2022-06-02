import Logo from './Logo.svg';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header>
		  <img src={Logo} alt="logo" className={classes.logo}/>
	  </header>
  )
}

export default Header;