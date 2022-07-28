import Image from 'next/image'
import styles from './logo.module.css'

export default function Logo() {
  return (
    <>
      <Image src="/icons/Arch-linux-logo.png" width="36" height="36" />
      <div className={styles.logo}>
        <span className={styles.logo__title}>qlAD&s Arch Linux dotfiles</span>
        <span className={styles.logo__subtitle}>qlad&s Arch Linux configuration file</span>
      </div>
    </>
  )
}
