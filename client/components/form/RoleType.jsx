import styles from '../../styles/Home.module.css';
import { useState } from 'react'
import { useRouter } from 'next/router';

function RoleType() {
    const router = useRouter();
    const [doIt, setDoIt] = useState("/simple");

    function handleChange(event) {
        switch (event.target.value) {
        case "charactersheet":
            setDoIt('/charactersheet');
            break;
        case "simple":
            setDoIt('/simple');
            break;
        case "advanced":
            setDoIt('/advanced');
            break
        }
    }

    async function onSubmit() {
        router.push(doIt);
    }
    return (
        <form className={styles.titleForm} onSubmit={onSubmit}>
            <select
                className={styles.formSelect}
                name="prompt"
                id='prompt'
                required
                onChange={handleChange}
            >
                <option value="simple">Simple</option>
                <option value="advanced">Advanced</option>
                <option value="charactersheet">Full DnD charactersheet</option>
            </select>
            <button className={styles.formSubmit} type='submit'>Let's Do This!</button>
        </form>
    )
}

export default RoleType