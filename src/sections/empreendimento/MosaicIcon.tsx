import { BsBuilding } from 'react-icons/bs';
import { AiOutlineCar } from 'react-icons/ai';
import { BsGrid1X2 } from 'react-icons/bs';
import { TiLocationOutline } from 'react-icons/ti';

import styles from './styles.module.scss';

interface Props {
    icon: 'area' | 'vagas' | 'unidades' | 'localizacao';
}

const MosaicIcon: React.FC<Props> = ({ icon = 'area' }) => {
    if (icon === 'vagas')
        return <AiOutlineCar size={44} color="white" className={styles['grid-box__icon']} />;

    if (icon === 'unidades')
        return <BsGrid1X2 size={44} color="white" className={styles['grid-box__icon']} />;

    if (icon === 'localizacao')
        return <TiLocationOutline size={44} color="white" className={styles['grid-box__icon']} />;

    return <BsBuilding size={44} color="white" className={styles['grid-box__icon']} />;
};

export default MosaicIcon;
