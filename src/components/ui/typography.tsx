interface TypographyProps {
  text: string
}

import styles from './typpography.module.css';

function Typography({ text }: TypographyProps) {
  console.log("styles: ", styles)
  return (
    <h1 className={styles['heading-title']}>{text}</h1>
  )
}

export default Typography