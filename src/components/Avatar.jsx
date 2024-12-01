import styles from './Avatar.module.css'

export const Avatar = (props) => {
  return (
    <img
        className={styles.avatar}
        src={props.src}
      />
  )
}
