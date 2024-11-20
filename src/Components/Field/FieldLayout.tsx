import styles from './Field.module.css'

interface FieldLayoutProps {
  field: string[];
  makeMove: (index: number) => void
}

export const FieldLayout: React.FC<FieldLayoutProps> = ({ field, makeMove }) => {
  
  return (
    <div className={styles.fieldContainer}>
      {field.map((cell, index) => {return (
        <span className={cell !== '' ? styles.activeCell : ''} key={index} onClick={() => makeMove(index)}>{cell}</span>
      )})}
    </div>
    
  )
}