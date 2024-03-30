import Bludo1 from "./assets/Bludo42.png"
import Bludo2 from "./assets/Bludo43.png"
import Bludo3 from "./assets/Bludo44.png"
import Bludo4 from "./assets/Bludo45.png"
import "./Soups.css"
import {NavLink} from "react-router-dom"
export default function Home() {
    return(
        <div className="ContainH222">
            <div className="zogl222222">Супы</div>
            <div className="PodPodBlH2222">
                    <div className="BludoH2">
                            <img src={Bludo1} alt="wesrdtyu" />
                            <h4>Лапша куриная</h4>
                            <div className="butonGrB2"> 300 г</div>
                            <p>Очень сытный суп с курицей, свежими фермерскими овощами и ненавязчивой нотой грузинских специй.</p>
                            <div className="PodPodPodBlH2212222">
                                <h3>295 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo2} alt="wesrdtyu" />
                            <h4>Борщ</h4>
                            <div className="butonGrB2">350 г</div>
                            <p>По старинному рецепту: традиционный суп на основе фермерской говядины, спелой свеклы и экологически чистых овощей.</p>
                            <div className="PodPodPodBlH2212222">
                                <h3>350 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo3} alt="wesrdtyu" />
                            <h4>Грибной суп-пюре из шампиньонов</h4>
                            <div className="butonGrB2">300 г</div>
                            <p>Ароматный суп из шампиньонов, домашних сливок и лука шалот, с добавление сушеного аниса..</p>
                            <div className="PodPodPodBlH2212222">
                                <h3>375 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo4} alt="wesrdtyu" />
                            <h4>Харчо</h4>
                            <div className="butonGrB2">350 г</div>
                            <p>Не устоять: легендарный грузинский суп-рагу с фермерской говядиной, рисом, свежей зеленью и ароматными грузинскими специями.</p>
                            <div className="PodPodPodBlH2212222">
                                <h3>405 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                    </div>
        </div>
                
    )
}
