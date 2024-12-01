import styles from './Header.module.css' // CSS modules
import igniteLogo from '../assets/ignite-logo.svg'

export const Header = () => {
  return (
    <div className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      {/* <strong>Ignite Feed</strong> */}
    </div>
  )
}
