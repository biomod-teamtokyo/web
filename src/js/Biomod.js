import React from "react";
import classes from "../css/biomod.module.css";

export function Biomod(props){
    return (
        <div className={classes.container}>
            {intro}{biomod}{explanation}
        </div>
    );
}

const intro = (
    <div>
        <h1>はじめに</h1>
        <p>
        私たちBIOMOD TEAM TOKYOは主に東京大学の学部生を中心に構成された研究チームです。
        ミーティングや実験などの定期的な活動に加えてシミュレーションや動画作成などのスキルアップを行い、
        毎年行われるBIOMOD国内大会と国際大会での発表を目標に日々精力的に活動しています。
        参加者は分子ロボティクスに興味をもつ学部生で構成されており、その所属は様々な分野に渡ります。
        （現在は教養学部、理学部、工学部など）
        現在は生産技術研究所の金研究室の研究活動として研究を進めており、
        実験設備を利用させていただいたり、研究の指導を受けております。
        </p>
    </div>
)

const biomod = (
    <div>
        <h1>BIOMODとは</h1>
        <p>
            BIOMOD は分子を用いたロボットを設計して組み立て、そのアイデアを競う学部生のデザインコンペティションです。
            分子ロボット分野における発展と教育を目指し、2011年から開催されています。
            分子ロボットの特徴としては、DNAやRNA、モータータンパク質等の生体高分子が材料であること、
            非常に小さなスケールのシステムであることが挙げられます。
            大会ではこれらの利点を十二分に活かした、自律性ロボットや分子コンピュータ、ナノスケールでの治療法の基盤技術などの研究発表をします。
            一夏の間にプロジェクトを進め、10月末にサンフランシスコで行われるJamboreeにおいて英語で研究成果を競い合います。
            大きな特徴として、研究内容だけでなく、作成するHPや動画、プレゼンテーションなど、研究成果を発表するコミュニケーションまでが評価の対象となることが挙げられます。
        </p>
    </div>
)

const explanation = (
    <div>
        <h1>分子ロボット研究について</h1>
        <p>
        私たちBIOMOD TEAM TOKYOは主に東京大学の学部生を中心に構成された研究チームです。
        ミーティングや実験などの定期的な活動に加えてシミュレーションや動画作成などのスキルアップを行い、
        毎年行われるBIOMOD国内大会と国際大会での発表を目標に日々精力的に活動しています。
        参加者は分子ロボティクスに興味をもつ学部生で構成されており、その所属は様々な分野に渡ります。
        （現在は教養学部、理学部、工学部など）
        現在は生産技術研究所の金研究室の研究活動として研究を進めており、
        実験設備を利用させていただいたり、研究の指導を受けております。
        </p>
    </div>
)

export default Biomod