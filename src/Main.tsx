import React, { useEffect } from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';


const data = [
    {
        left: { cx: 267.7, cy: 366.3, r: 5.5 },
        right: { cx: 327.6, cy: 366.8, r: 5.5 }
    }, {
        left: { cx: 265.2, cy: 369.8, r: 5.5 },
        right: { cx: 324.8, cy: 369.8, r: 5.5 }
    },
    {
        left: { cx: 266.2, cy: 369.2, r: 5.5 },
        right: { cx: 326.4, cy: 369.8, r: 5.5 }
    }, {
        left: { cx: 267.2, cy: 369.8, r: 5.5 },
        right: { cx: 327.7, cy: 370.5, r: 5.5 }
    }, {
        left: { cx: 267.2, cy: 369.8, r: 5.5 },
        right: { cx: 327.7, cy: 370.5, r: 5.5 }
    }, {
        left: { cx: 267.7, cy: 370.5, r: 5.5 },
        right: { cx: 328.3, cy: 371.2, r: 5.5 }
    }, {
        left: { cx: 269.1, cy: 371, r: 5.5 },
        right: { cx: 328.7, cy: 371.5, r: 5.5 }
    }, {
        left: { cx: 270.3, cy: 371, r: 5.5 },
        right: { cx: 330.2, cy: 371.9, r: 5.5 }
    },

]


export interface recived {
    eyes: number,
    hands: number

}

const Main: React.FC<recived> = (props: recived) => {
    const [x, setX] = useState<number>(0)
    const [y, setY] = useState<number>(0)
    useEffect(() => {
        setX(props.eyes);
    }, [props.eyes])
    useEffect(() => {

        setY(props.hands)
    }, [props.hands])
    return (

        <div >

            <motion.svg
                style={{ backgroundColor: "white", width: "100%" }}
                id="prefix__Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x={0}
                y={0}
                viewBox="0 0 595.3 841.9"
                xmlSpace="preserve"
               

            >
                <style>
                    {
                        ".prefix__st0,.prefix__st1{fill:#454545;stroke:#000;stroke-miterlimit:10}.prefix__st1{fill:#dadada}.prefix__st2{fill:none;stroke-width:.7787}.prefix__st2,.prefix__st3,.prefix__st4{stroke:#000;stroke-miterlimit:10}.prefix__st3{fill:none;stroke-width:9.3443;stroke-linecap:round}.prefix__st4{fill:#fff}.prefix__st5{stroke-width:.7787}.prefix__st5,.prefix__st6,.prefix__st7,.prefix__st8,.prefix__st9{stroke:#000;stroke-miterlimit:10}.prefix__st6{fill:none;stroke-width:5.4508;stroke-linecap:round}.prefix__st7,.prefix__st8,.prefix__st9{fill:#fff;stroke-width:1.7056}.prefix__st8,.prefix__st9{fill:#dadada;stroke-width:1.8769}.prefix__st9{stroke-width:1.8719}.prefix__st10,.prefix__st11{stroke-width:1.7056}.prefix__st10{fill:#dadada;stroke:#000;stroke-miterlimit:10}.prefix__st11{fill:#454545}.prefix__st11,.prefix__st12,.prefix__st13,.prefix__st14{stroke:#000;stroke-miterlimit:10}.prefix__st12{fill:#dadada;stroke-width:1.8787}.prefix__st13,.prefix__st14{stroke-width:1.7056}.prefix__st13{fill:none;stroke-linecap:round}.prefix__st14{fill:#ededed}"
                    }
                </style>
                <path
                    className="prefix__st0"
                    d="M204.5 572.1c16.4 5.8 33.6 10.3 49 13 51.1 9 106.5 2.8 146.9-10.9-24.5 7.1-62 9.6-87.2 9.7-33.8.1-77.8-3.8-108.7-11.8zM380.2 464.4c-68.7-28.1-131-9.6-156-1.8-22.1 6.9-87.3 27.2-87.8 56.7-.2 14.3 14.8 27.8 36 39-3.3-2.8-5.2-5.9-5.5-9.2-1.7-18.6 49.6-36.9 62.2-41.4 8.1-2.9 47.3-16.3 98.7-7.9 53.1 8.6 80 34 88.4 42.7 7 7.3 9.1 11.3 8.5 15.2-.7 4.5-4.7 8.3-10.9 11.4 26.5-11.1 43.9-25.6 45.1-40.7 2.2-30.9-64.2-58.1-78.7-64z"
                />
                <path
                    className="prefix__st1"
                    d="M424.7 557.6c.6-4-1.5-7.9-8.5-15.2-8.3-8.7-35.2-34-88.4-42.7-51.5-8.4-90.6 5-98.7 7.9-12.6 4.5-63.8 22.8-62.2 41.4.3 3.3 2.2 6.4 5.5 9.2 6.4 5.5 17.8 10.1 32.1 13.8 30.9 8.1 74.9 11.9 108.7 11.7 25.2-.1 62.8-2.7 87.2-9.7 5.1-1.5 9.6-3.1 13.4-5 6.2-3.1 10.2-6.9 10.9-11.4z"
                />
                <path
                    className="prefix__st0"
                    d="M379.9 349.7c-1.1-4.9-2.3-9.5-6.4-13.4-1.1-1-5.9-5.6-11.9-4.7-.1 0-1.3.2-2.8.8l-.9-1.8c-8.9-17.2-12.9-18-27.7-45.1-1.5-2.8-2.6-4.8-4.9-7-1.1-1.1-2.4-2.1-3.8-3 3.3-1.8 6-2 7.9-1.8 1.6.2 3.3.8 3.4.5s-3.1-2.3-6.6-3c-4.3-.9-8.2.4-10.8 1.4-1.1-.4-2.2-.8-3.4-1.1.6-1.2 1.8-2.6 2.7-3.5 3.3-3.3 7.1-4.1 7-4.4s-3.2.2-7.2 1.6c-6.7 2.4-9.2 5.2-10.3 4.3-1.1-1 .5-5.2 2.6-8.1 1.7-2.3 3.6-3.6 3.5-3.7-.1-.2-2.9 1.4-5.9 3.9-4.4 3.7-6 6.6-7.2 6.1-1-.4.2-2.7-1.3-5.9-1-2.2-2-2.2-3.8-5.3-1.3-2.3-1.7-3.8-2-3.8-.6.2 3.9 13.5 1.4 14.8-2.4 1.3-7.4-10.1-19.1-13.4-7-2-13.6-.2-13.6.4 0 .6 5.8-.1 11.4 3.5 4.5 2.9 8.4 8.3 7.1 10.6-1.8 3-11.2-3.3-23.8 0-7.4 1.9-12.9 6.3-12.6 6.9.3.5 5.8-2.8 13-3.3 7.9-.5 14.6 2.7 19 5.7-2.3 1.6-4.4 3.5-6.1 5.6-6.2 7.4-3.9 11-14.6 27.7-6 9.3-10.3 13.6-14 18.3-.6.8-1.2 1.5-1.7 2.3-1.6-.7-2.9-.9-3-.9-6-.8-10.8 3.7-11.9 4.7-4.1 3.9-5.3 8.5-6.4 13.4-3 13 .2 23.5 1.8 28.6.8 2.4 1.6 5 2.6 7.2-1.2 14.1-2.2 50 23.8 76.6 5.3 5.4 23.5 23.5 52.1 24.4 28.2.9 47.3-15.6 52.4-20.1 31.3-27.8 28.8-70.8 27.8-81.1.8-2 1.5-4.1 2.1-6.1 1.9-5.2 5.1-15.7 2.1-28.8z"
                />
                <path
                    className="prefix__st1"
                    d="M341 391.9c3.7 4.6 5.4 9 5.7 9.7 6.2 16.2-2 32-3.7 35.1-7.9 15.2-25.8 28.9-47.7 27.8-21.3-1-40-15.7-45.9-35.3-.9-3.1-4.8-22.5 4.5-37.5-2.7-1.7-9.9-6.9-12.4-16.1-.6-2.2-3.6-12.8 3.2-21.3 1.8-2.3 4.3-4 6.8-5.4 4.7-2.5 10-3.7 15.3-3.7h64.9c9.2.3 17.4 5 21.2 12.5 4.3 8.6 1.1 17.2.2 19.7-3.1 8-9.6 12.8-12.1 14.5z"
                />
                <g>
                    <path
                        className="prefix__st3"
                        d="M310.9 403.4c0-7.4-6-13.3-13.3-13.3s-13.3 6-13.3 13.3M272.9 425.5l50.4.3"
                    />
                    <path
                        className="prefix__st4"
                        d="M258.7 358c-2 2.2-3.2 5.1-3.2 8.3 0 6.7 5.5 12.2 12.2 12.2s12.2-5.5 12.2-12.2c0-3.1-1.2-6-3.1-8.1"
                    />

                    <motion.circle
                        animate={{ cx: data[x].left.cx, cy: data[x].left.cy, r: data[x].left.r }}
                        className="prefix__st5" />
                    <path className="prefix__st6" d="M260.2 357h15.1" />
                    <g>
                        <path
                            className="prefix__st4"
                            d="M318.6 358.5c-2 2.2-3.2 5.1-3.2 8.3 0 6.7 5.5 12.2 12.2 12.2s12.2-5.5 12.2-12.2c0-3.1-1.2-6-3.1-8.1"
                        />

                        <motion.circle className="prefix__st5" animate={{ cx: data[x].right.cx, cy: data[x].right.cy, r: data[x].right.r }} />
                        <path className="prefix__st6" d="M320.1 357.5h15.1" />
                    </g>
                </g>
                <motion.g
                    
                    animate={!y ? { rotateZ: "-90deg", y: "-12%", x: "3%" } : {}}
                >
                    <path className="prefix__st8" d="M210.4 608.5" />
                    <path className="prefix__st9" d="M188.2 601.6" />
                    <path
                        className="prefix__st10"
                        d="M226.2 638.2l-.1-.1 2.6-16.7-.4-.4-46.6-8.9 36 33.3z"
                    />
                    <path
                        className="prefix__st10"
                        d="M238.8 660.9c2-1.7 2.6-4.3 1.9-6.4 2.1 1.3 5.2.9 7.5-1.1h.1c2.8-2.4 3.5-6.3 1.4-8.6l-10.3-11.9c1.8.7 4 .4 5.6-1l.4-.3c2.3-2 2.6-5.5.6-7.9l-29.4-34c-2-2.3-5.5-2.6-7.9-.6l-.4.3-27.5 21.9-.5.4-.1.1c-2.3 2.1-2.6 5.6-.6 7.8l38.8 44.9c2 2.3 5.6 2.5 8 .5l.5-.4c1.9-1.6 2.5-4.1 1.7-6.2l2 2.3c2 2.3 5.7 2.4 8.2.2zm-57.1-48.8"
                    />
                    <motion.path

                        className="prefix__st11"
                        d="M100.3 431.3c39.7 53.8 64.9 89.6 79 112 4.2 6.7 10.8 17.6 23.2 28.9 17.6 16.2 36.5 23.8 35.8 25.3-.8 1.7-26.2-10-27.8-7.1-.8 1.4 4 5.4 8.2 9 11.2 9.5 20 13.6 19.6 14.7-.8 1.9-24.1-7.2-25.4-4.3-.5 1 2.2 2.8 6.6 7.4 6 6.3 11.7 14.3 10.8 15.3-1.7 1.8-27.9-22.9-31.4-19.6-2.5 2.3 6.1 18.4 10.7 27.1 1.8 3.4 3.7 6.6 3.1 7-.8.6-7-6-11.3-11.2-8.1-9.9-11-16.4-12.3-15.9-1.8.7 5 17.4 2.8 18.5-1.8.9-8.5-9.4-8.7-9.7-19-29.2-44.1-53.9-64.7-81.9-6.8-9.2-40.3-54.8-63.3-86.1"
                    />
                    <path
                        className="prefix__st13"
                        d="M239.4 632.8L225.7 617M240.7 654.5l-13.8-16M231 661l-13-15.1"
                    />
                    <ellipse
                        transform="rotate(-33.901 241.424 626.669)"
                        className="prefix__st14"
                        cx={241.4}
                        cy={626.7}
                        rx={2.6}
                        ry={3.3}
                    />
                    <ellipse
                        transform="rotate(-33.901 243.365 647.206)"
                        className="prefix__st14"
                        cx={243.4}
                        cy={647.2}
                        rx={2.6}
                        ry={3.3}
                    />
                    <ellipse
                        transform="rotate(-33.901 234.524 655.627)"
                        className="prefix__st14"
                        cx={234.5}
                        cy={655.7}
                        rx={2.6}
                        ry={3.3}
                    />
                    <ellipse
                        transform="rotate(-33.901 222.925 660.305)"
                        className="prefix__st14"
                        cx={222.9}
                        cy={660.3}
                        rx={2.6}
                        ry={3.3}
                    />
                </motion.g>
                <motion.g
                    
                    animate={!y ? { rotateZ: "90deg", y: "-12%", x: "-5%" } : {}}
                >
                    <path className="prefix__st8" d="M394.8 608.8" />
                    <path className="prefix__st9" d="M417 602" />
                    <path
                        className="prefix__st10"
                        d="M378.9 638.5l.1-.1-2.5-16.6.4-.5 46.5-8.9-35.9 33.3z"
                    />
                    <path
                        className="prefix__st10"
                        d="M374.6 661l2-2.3c-.8 2.1-.2 4.6 1.7 6.2l.5.4c2.4 2.1 6 1.9 8-.5l38.8-44.9c2-2.3 1.7-5.8-.6-7.8l-.1-.1-.5-.4-27.5-21.9-.4-.3c-2.3-2-5.8-1.8-7.9.6l-29.4 34c-2 2.3-1.8 5.8.6 7.9l.4.3c1.6 1.4 3.7 1.7 5.6 1L355.5 645c-2 2.3-1.4 6.2 1.4 8.6h.1c2.3 2 5.4 2.4 7.5 1.1-.8 2.2-.1 4.8 1.9 6.4 2.5 2.4 6.1 2.2 8.2-.1zm48.8-48.6"
                    />
                    <path
                        className="prefix__st11"
                        d="M504.8 431.6c-39.7 53.8-64.9 89.6-79 112-4.2 6.7-10.8 17.6-23.2 28.9-17.6 16.2-36.5 23.8-35.8 25.3.8 1.7 26.2-10 27.8-7.1.8 1.4-4 5.4-8.2 9-11.2 9.5-20 13.6-19.6 14.7.8 1.9 24.1-7.2 25.4-4.3.5 1-2.2 2.8-6.6 7.4-6 6.3-11.7 14.3-10.8 15.3 1.7 1.8 27.9-22.9 31.4-19.6 2.5 2.3-6.1 18.4-10.7 27.1-1.8 3.4-3.7 6.6-3.1 7 .8.6 7-6 11.3-11.2 8.1-9.9 11-16.4 12.3-15.9 1.8.7-5 17.4-2.8 18.5 1.8.9 8.5-9.4 8.7-9.7 19-29.2 44.1-53.9 64.7-81.9 6.8-9.2 40.3-54.8 63.3-86.1"
                    />
                    <path
                        className="prefix__st13"
                        d="M365.7 633.2l13.7-15.8M364.5 654.8l13.8-16M374.2 661.3l12.9-15"
                    />
                    <ellipse
                        transform="rotate(-56.096 363.77 627.016)"
                        className="prefix__st14"
                        cx={363.8}
                        cy={627}
                        rx={3.3}
                        ry={2.6}
                    />
                    <ellipse
                        transform="rotate(-56.096 361.83 647.554)"
                        className="prefix__st14"
                        cx={361.8}
                        cy={647.6}
                        rx={3.3}
                        ry={2.6}
                    />
                    <ellipse
                        transform="rotate(-56.096 370.672 655.975)"
                        className="prefix__st14"
                        cx={370.7}
                        cy={656}
                        rx={3.3}
                        ry={2.6}
                    />
                    <ellipse
                        transform="rotate(-56.096 382.272 660.652)"
                        className="prefix__st14"
                        cx={382.3}
                        cy={660.7}
                        rx={3.3}
                        ry={2.6}
                    />
                </motion.g>

            </motion.svg>


        </div>
    );
}



export default Main;