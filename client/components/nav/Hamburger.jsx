import styles from '../../styles/Header.module.css';

function Hamburger({ isOpen }) {
    return (
        <>
            <div className={styles.hamburger}>
                <div className='burger' id='burger1' />
                <div className='burger' id='burger2' />
                <div className='burger' id='burger3' />
                <div className='burger' id='burger4' />
            </div>

            <style jsx>{`
                .burger {
                    width: 2rem;
                    height: .25rem;
                    border-radius: 10px;
                    background-color: #ccdc;
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                    z-index: 1200;
                }
                #burger2, #burger3 {
                    width: 1.2rem;
                }

                #burger1 {
                    transform: ${isOpen ? 'rotate(52deg)' : 'rotate(0)'};
                }
                #burger2 {
                    transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
                    opacity: ${isOpen ? 0 : 1};
                }
                #burger3 {
                    transform: ${isOpen ? 'translateX(-100%)' : 'translateX(0)'};
                    opacity: ${isOpen ? 0 : 1};
                }
                #burger4 {
                    transform: ${isOpen ? 'rotate(-52deg)' : 'rotate(0)'};
                }
            `}</style>
        </>
    )
}

export default Hamburger