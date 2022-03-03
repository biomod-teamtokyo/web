import React from "react";
import { Link } from 'react-router-dom';
import classes from "../css/navigation.module.css";

export function Navigation(props){
    return(
        <nav>
            <ul className={classes.ul}>
                <li className={classes.text}><Link to="biomod">BIOMODについて</Link></li>
                <li className={classes.text}><Link to="project">プロジェクト</Link></li>
                <li className={classes.text}><Link to="laboratory">金研究室について</Link></li>
                <li className={classes.text}><Link to="contact">お問い合わせ</Link></li>
                <li className={classes.text}><Link to="donation">寄付金のお願い</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation