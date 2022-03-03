import React ,{ useEffect, useState } from 'react';
import { Timeline } from 'react-twitter-widgets';
import classes from "../css/home.module.css";

export function Home(props){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        const interval = setInterval(() => {
        setCount(c => (c + 1)%3);
      }, 4000);
      return () => clearInterval(interval);
      },[])
    return (
        <div class={classes.all}>
            <img src={`${process.env.PUBLIC_URL}/${count+1}.jpg`} alt="Logo" class={classes.image}/>
            <div class={classes.content}>
                {reactElement}
                <div class={classes.twitter}>
                    <Timeline dataSource={{sourceType: 'profile', screenName: 'biomod2019tokyo'}} options={{height: '800' ,width: '80%'}}/>
                </div>
            </div>
        </div>
    )
}

const reactElement = (
    <div class={classes.message}>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" width="100%"/>
        <div className={classes.text}>
            <h2>こんにちは！</h2>
            <h2>私たちはBIOMOD TeamTOKYOです。</h2>
            <p>分子ロボットを自分で作案し作成するという、東大で数少ない生物系の団体です。</p>
            <p>分子ロボティクスの国際コンペである「BIOMOD」に出場しています。</p>
            <p>「BIOMOD」とは、毎年開催される分子ロボティクスの国際コンペで、毎年サンフランシスコに世界中の学部生が集い、様々な課題に対する分子ロボットの設計を競い合います。</p>
            <p>私たち BIOMOD TeamTOKYOは、その「BIOMOD」に出場する日本代表の一つのチームです。</p>
        </div>
    </div>
)

export default Home