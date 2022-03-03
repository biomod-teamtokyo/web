import React , { useState } from "react";
import { Link } from 'react-router-dom';
import classes from "../css/header.module.css";

export function Header(props){
    const [active, setActive] = useState(true);

    return (
        <div className={classes.container}>
            <div className={`${classes.menu} ${active ? "" : classes.clicked_menu}`}>
                <ul className={classes.top} >
                    <li className={classes.text}><Link to="biomod" onClick={()=>setActive(true)}>BIOMODについて</Link></li>
                    <li className={classes.text}><Link to="project" onClick={()=>setActive(true)}>プロジェクト</Link></li>
                    <li className={classes.text}><Link to="laboratory" onClick={()=>setActive(true)}>金研究室について</Link></li>
                    <li className={classes.text}><Link to="contact" onClick={()=>setActive(true)}>お問い合わせ</Link></li>
                    <li className={classes.text}><Link to="donation" onClick={()=>setActive(true)}>寄付金のお願い</Link></li>
                </ul>
            </div>

            <div className={active ? "" : classes.fade} onClick={()=>setActive(true)}></div>

            <div className={`${classes.ham} ${active ? "" : classes.red}`} onClick={() => setActive(!active)}>
                <span className={`${classes.ham_line} ${active ? "" : classes.clicked1} ${classes.ham_line1}`}></span>
                <span className={`${classes.ham_line} ${classes.ham_line2} ${active ? "" : classes.clicked2}`}></span>
                <span className={`${classes.ham_line} ${classes.ham_line3} ${active ? "" : classes.clicked3}`}></span>
            </div>
            <Link to="/"><img src={`${process.env.PUBLIC_URL}/tokyo_logo.png`} alt="Logo" className={classes.size}/></Link>
        </div>
    );
}

export default Header