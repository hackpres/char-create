// import styles from '../../styles/Home.module.css';
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
        <>
            <h3 >
                Select the level of complexity you need for your character generation.
            </h3>
            <form  onSubmit={onSubmit}>
                {/* <select
                    className={styles.formSelect}
                    name="prompt"
                    id='prompt'
                    required
                    onChange={handleChange}
                >
                    <option value="simple">Simple</option>
                    <option value="advanced">Advanced</option>
                    <option value="charactersheet">Full DnD charactersheet</option>
                </select> */}
                <div className="segmented-control" id="radioContainer">
                    <label for="simple" value="Simple">
                        <input type="radio" name="formType" id="simple" />
                        <span>Simple</span>
                    </label>
                    <label for="advanced" value="Advanced">
                        <input type="radio" name="formType" id="advanced" />
                        <span>Advanced</span>
                    </label>
                    <label for="full" value="Full Charactersheet">
                        <input type="radio" name="formType" id="full" />
                        <span>Full Charactersheet</span>
                    </label>
                </div>
                <button  type='submit'>Let's Do This!</button>
            </form>

            <style jsx>{`
                #radioContainer label {
                    curson: pointer;
                    position: relative;
                }
                #radioContainer label + label {
                    margin-left 15px;
                }
                input[type="radio"] {
                    opacity: 0;
                    position: absolute;
                }
                input[type="radio"] + span {
                    font-family: 'Material Icons';
                    color: #B3CEFB;
                    border-radius: 50%;
                    padding: 12px;
                    transition: all 0.4s;
                    -webkit-transition: all 0.4s;
                }
                input[type="radio"]:checked + span {
                    color: blue;
                    background-color: skyblue;
                }
                input[type="radio"]:focus + span {
                    color: purple;
                }

                #radios label:hover::before {
                    content: attr(for);
                    font-family: Roboto, -apple-system, sans-serif;
                    text-transform: capitalize;
                    font-size: 11px;
                    position: absolute;
                    top: 170%;
                    left: 0;
                    right: 0;
                    opacity: 0.75;
                    background-color: #323232;
                    color: #fff;  
                    padding: 4px;
                    border-radius: 3px;
                    display: block;
                }


            `}</style>
        </>

    )
}

export default RoleType