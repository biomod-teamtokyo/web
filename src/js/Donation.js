import React from "react";
import classes from "../css/donation.module.css";

export function Donation(props){
    return <div className={classes.container}>{text}</div>;
}

const text = (
    <div>
        <h1>寄付金について</h1>
        <p>BIOMODに参加している学生は活動資金を自己負担する必要があります。
            アルバイトとの両立ができず、ミーティングや実験に身を入れることが困難な学生や、
            昨年度には渡航費を捻出できず国際大会への参加を辞退した学生もいました。
            熱意がありながらも経済的側面からBIOMODに十分に関われない者がいるのが現状です。
            また、生化学実験には多額の費用がかかり、現状の予算内では国際大会で優勝を取れるほど満足に実験に取り組むことが困難です。
            また、国際大会での発表に必要なクオリティの高い動画制作に不可欠であるソフトウェアを購入するのも断念しています。 
            皆様のご支援・ご協力で、チームメンバーがより一層、BIOMOD活動に集中すること可能となり、
            国際大会であるJamboreeで質の高いプレゼンテーションを披露したり素晴らしい動画を作成したりすることができます。
            Jamboreeでの総合優勝という目標に全力をもって取り組むことで、メンバーの学際的素養がより一層豊かになるだけでなく、
            国内外のトップレベルの研究者に向けたプレゼンテーションの経験を積むことは、国際社会を牽引するリーダー人材の輩出へと繋がります。
            どうか温かいご寄付を賜りますよう深くお願い申し上げます。
        </p>
        <a href="https://biomodtokyo2019.github.io/images/払込用紙.pdf"><p className={classes.color}>東京大学基金寄付申込書をダウンロードする</p></a>
    </div>
)

export default Donation
