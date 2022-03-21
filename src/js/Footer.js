import React, {useState, useEffect} from "react";
import classes from "../css/footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export function Footer(){
    const [active, setActive] = useState(false);

    const returnTop = () => {
        let startY = window.pageYOffset;
        const scroll = () => {
            startY = window.pageYOffset;
            let y = startY - (startY - 0) / 30 - 1;
            window.scrollTo(0, y);
            if (y < 0) return;
            requestAnimationFrame(scroll);
        };
        requestAnimationFrame(scroll);
     };

    const scrollWindow = () => {
        const top = 400;  //ボタンを表示させたい位置
        let scroll = 0;
        scroll = window.scrollY
        if (top <= scroll) {
          setActive(true)
        } else {
          setActive(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollWindow)
        return () => {
          window.removeEventListener('scroll', scrollWindow)
        }
    }, [])

    var date = new Date();
    var year = date.getFullYear();

    return(
        <div class={classes.container}>
            <p>&copy; {year} BIOMOD Team TOKYO</p>
            <a href="https://twitter.com/biomod2019tokyo" className={classes.sns}><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
            <a href="https://www.facebook.com/biomod2019teamtokyo/" className={classes.sns}><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
            <a href="https://lin.ee/dp6zZI9" className={classes.sns}><FontAwesomeIcon icon={faLine} /> LINE</a>
            <div className={`${classes.gotop} ${active ? classes.activeStyle : classes.normalStyle}`} onClick={returnTop}><FontAwesomeIcon icon={faChevronUp} color={"white"}/></div>
        </div>
    );
}


export default Footer;