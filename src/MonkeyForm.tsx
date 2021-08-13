import React, { useState } from 'react'
import Main from './Main';
import AutosizeInput from 'react-input-autosize';

import { motion } from 'framer-motion';

export interface functions {
    onUsernameChange: Function,
    onPasswordChange: Function

}

export const MonkeyForm: React.FC<functions | undefined> = (props: functions) => {
    
    const [inputValue, setInputValue] = useState("")
    const [inputValue2, setInputValue2] = useState("")
    const [containerWidth, setWidth] = useState(0)
    const [cursorPosition, setPosition] = useState(0)
    const [hands, setHands] = useState(1)
    const [sestina, setSestina] = useState(0)
    const [eyes, setEyes] = useState(0)
    return (
        <div className="MonkeyFormMain"
            id="parent"
            style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "0.5rem",
                paddingBottom: " 2rem",
                borderRadius: "1rem",
                minWidth: "20rem",
                boxShadow: "0px 0px 3px 0px #000000"
            }}
        >

            <Main eyes={eyes} hands={hands} />
            <motion.fieldset
                className="FirstInput"
                onClick={() =>
                    document.getElementById("input")?.focus()
                } id="container" style={{

                    width: "100%", maxWidth:"100%",position: "relative", overflowX: "hidden",
                    backgroundColor: "white",
                    borderRadius: "0.3rem",
                    boxSizing: "border-box",
                    padding: "0.2rem",
                    marginTop: "1rem",
                    display: "flex",
                    height: "3rem" 
                   
                }}>
                <motion.legend
               >

                    UserName</motion.legend>
                <div style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, display: "flex", justifyContent: "start" }}>
                <AutosizeInput
                    id="input"


                    inputStyle={{
                        fontSize: "1.3rem", outline: "none", borderStyle: "none", borderColor: "white"
                    }}
                    name="form-field-name"
                    onFocus={() => {
                        setEyes(1)
                        console.log(eyes)

                    }}
                    onBlur={() => setEyes(0)}
                    value={inputValue}
                    onChange={(e) => {
                        props.onUsernameChange(e.target.value)
                        setInputValue(e.target.value)
                        calculateSpan(e.target.value.length)
                    }}
                />

                    <span id="cursor" style={{ width: "1px" }}></span>
                    </div>
            </motion.fieldset>

            <fieldset className="secondInput"
                style={{
                    marginTop: "1rem",
                    position: "relative",
                    backgroundColor: "white",
                    borderRadius: "0.3rem",
                    boxSizing: "border-box",
                    padding: "0.2rem",
                    width: "100%",
                    display: "flex",
                    overflow: "hidden",
                    height:"3rem"
                }}
            >
                <motion.legend>

                    Password</motion.legend>
                <AutosizeInput
                    id="input2"
                    type="password"
                    inputStyle={{ fontSize: "1.3rem", outline: "none", borderStyle: "none", borderColor: "white", width: "100%" }}
                   
                   
                    onFocus={() => setHands(0)}
                    value={inputValue2}
                    onBlur={() => setHands(1)}
                    onChange={(e) => {
                        props.onPasswordChange(e.target.value)
                        setInputValue2(e.target.value)


                    }}

                />
            </fieldset>

        </div>


    );

    function calculateSpan(length: any) {
        if (containerWidth === 0) {
           
            const duzina = document.getElementById("container")?.getBoundingClientRect().width;
            if (duzina !== undefined) {
                setWidth(duzina)
                setSestina(duzina / 6)
                let val = document.getElementById("container")?.getBoundingClientRect().x
                if (val !== undefined) {
                    setPosition(val)
                }
            }
        }
            else {
                
                const a = document.getElementById("cursor")?.getBoundingClientRect().x;
                if (a !== undefined) {
                   
                    const y = a - cursorPosition;
                    console.log(length)
                    if (length < 1) setEyes(1)

                    else if (y < containerWidth) {

                        setEyes((Math.round(y / sestina)) + 1);
                       
                    }
                    else setEyes(5)
                }
            }
        
    }
}


