import Button from '@mui/material/Button';
import styles from './Curriculo.module.css';
import fundo from '../../img/fundocurriculo.jpeg';

function Curriculo (){
  return (
    <div className={styles.btnt}>
      <Button variant="outlined" href="https://drive.google.com/file/d/1HPA6WxCgSDqlwdMspXEuqXoGXqE3wX5H/view?usp=sharing">
         <span className={styles.btn}>Clique Aqui Para Visualizar</span>
      </Button>
      <img className={styles.fundo} src={fundo} alt="b"/>
    </div>
  )
}
export default Curriculo