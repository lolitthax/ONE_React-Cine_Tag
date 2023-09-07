import { Link } from "react-router-dom";

import styles from './Cabecalho.module.css';
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src="./logo.png" alt="Logo do Cine Tag" />
            </Link>

            <nav>

            </nav>
            <CabecalhoLink url="./">
                Home
            </CabecalhoLink>
            <CabecalhoLink url="./Favoritos">
                Favoritos
            </CabecalhoLink>
        </header>
    );
}
export default Cabecalho;