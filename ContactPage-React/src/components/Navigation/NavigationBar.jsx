import styles from "./Navigation.module.css"

const NavigationBar = () => {
  return (
    <nav className = {`${styles.navigation} container`}>
        <div className={'logo'}>
            <img src="/images/logoFrame.png" alt="do some coding logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
    </nav>
  )
}

export default NavigationBar