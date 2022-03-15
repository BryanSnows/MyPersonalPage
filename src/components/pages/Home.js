import styles from './Home.module.css'
import Albumm from '../layouts/Albumm'

function Home() {
    return (
        <section className={styles.home_container}>   
            <h1>
                Bem vindo ao <span>Mundo de Bryan</span>
            </h1>
            <p>Iniciei minha carreira como Engenheiro de Software em diversas atividades, porém com maior ênfase na área de Front-End. Tive contato com diversas tecnologias, como GIT, GITHUB, TypeScript, HTML/CSS e NODE.JS. Eu foco na linguagem JavaScript, mais especificamente com o React.js. Veja Minhas Fotos</p>
            {/*<LinkButton to="/newproject" text="Criar Projeto"/>*/}
            <Albumm />
        </section>
    )
}
export default Home