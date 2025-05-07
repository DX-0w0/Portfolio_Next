import styles from './page.module.scss'

export default function ResumePage() {
  return (
    <div className='flex flex-col items-center'>
      <h2>Resume Page</h2>
      <div className={`${styles.icontainer}`}>
        <iframe
          className={`${styles.iframe}`}
          src='https://drive.google.com/file/d/12EStS5UP9kUIMB1-H2G5b1UeRq1TOjjA/preview'
        />
      </div>
    </div>
  )
}
