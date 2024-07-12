import { CallArticles } from "./api/CallAPI";
import style from "@/styles/Boards.module.scss";
import Bestarticles from "@/components/Bestarticles";
import Recentarticles from "@/components/Recentarticles";

function boards () {



    return (
        <div className={style.articleslayer}>
            <Bestarticles />
            <p>aaa</p>
            <Recentarticles />
        </div>
    )
}

export default boards