import Bludo1 from "./assets/Bludo1.png"
import Bludo2 from "./assets/Bludo2.png"
import "./Xinkali.css"
import {NavLink} from "react-router-dom"
export default function Home() {
    return(
        <div className="ContainH25">
            <div className="zogl222222">Хинкали</div>
            <div className="PodPodBlH2222">
                    <div className="BludoH2">
                            <img src={Bludo1} alt="wesrdtyu" />
                            <h4>Хинкали традиционные жаренные</h4>
                            <div className="butonGrB2">80 г</div>
                            <p>Сочетание фермерской свинины и говядины высшего сорта, оттененные пряностью свежей ...</p>
                            <div className="PodPodPodBlH22124">
                                <h3>125 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo1} alt="wesrdtyu" />
                            <h4>Хинкали жаренные из баранины с тархуном</h4>
                            <div className="butonGrB2">80 г</div>
                            <p>Идеальное сочетание плотного теста, фермерской баранины и экологически чистой кинзы и тархуна.</p>
                            <div className="PodPodPodBlH22124">
                                <h3>125 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo1} alt="wesrdtyu" />
                            <h4>Хинкали жаренные с сыром </h4>
                            <div className="butonGrB2">85 г</div>
                            <p>Невероятно нежные хинкали с ароматной начинкой из сыра моцареллы.</p>
                            <div className="PodPodPodBlH22124">
                                <h3>125 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo2} alt="wesrdtyu" />
                            <h4>Хинкали традиционные</h4>
                            <div className="butonGrB2">90 г</div>
                            <p>Плотно-шелковые хинкали с сочной начинкой из фермерской свинины, говядины и свежей кинзы.</p>
                            <div className="PodPodPodBlH22124">
                                <h3>105 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo2} alt="wesrdtyu" />
                            <h4>Хинкали из баранины с тархуном</h4>
                            <div className="butonGrB2">90 г</div>
                            <p>Гастрономическая достопримечательность: горские хинкали из фермерской баранины и экологически чистой зелени.</p>
                            <div className="PodPodPodBlH22124">
                                <h3>105 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo2} alt="wesrdtyu" />
                            <h4>Хинкали с сыром</h4>
                            <div className="butonGrB2">70 г</div>
                            <p>Невероятно нежные хинкали с ароматной начинкой из сыра моцареллы.</p>
                            <div className="PodPodPodBlH22124">
                                <h3>105 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                    </div>
        </div>
                
    )
}
