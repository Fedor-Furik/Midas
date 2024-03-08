import Bludo1 from "./assets/Bludo1.png"
import Bludo2 from "./assets/Bludo2.png"
import Bludo3 from "./assets/Bludo3.png"
import Bludo4 from "./assets/Bludo4.png"
import Bludo5 from "./assets/Bludo5.png"
import "./Deserts.css"
import {NavLink} from "react-router-dom"
export default function Home() {
    return(
        <div className="ContainH22">
            <div className="zogl2222222">Десерты</div>
            <div className="PodPodBlH2222">
                    <div className="BludoH22">
                            <img src={Bludo1} alt="wesrdtyu" />
                            <h4>Штрудель яблочный</h4>
                            <div className="butonGrB2">180 г</div>
                            <p>Изысканный классический десерт из слоенного бездрожжевого теста, яблок и корицы.</p>
                            <div className="PodPodPodBlH221222">
                                <h3>420 ₽</h3>
                                <button className="BasketB2222"></button>
                            </div>
                        </div>
                        <div className="BludoH22">
                            <img src={Bludo2} alt="wesrdtyu" />
                            <h4>Тирамису</h4>
                            <div className="butonGrB2">150 г</div>
                            <p>Кофейно-шоколадный десерт с воздушной текстурой и тонким грузинским акцентом.</p>
                            <div className="PodPodPodBlH221222">
                                <h3>430 ₽</h3>
                                <button className="BasketB2222"></button>
                            </div>
                        </div>
                        <div className="BludoH22">
                            <img src={Bludo3} alt="wesrdtyu" />
                            <h4>Наполеон</h4>
                            <div className="butonGrB2">170 г</div>
                            <p>Самый грузинский торт на основе слоенного бездрожжевого теста,щедро смазанного заварным кремом и посыпанного коржевой крошкой.</p>
                            <div className="PodPodPodBlH221222">
                                <h3>430 ₽</h3>
                                <button className="BasketB2222"></button>
                            </div>
                        </div>
                        <div className="BludoH22">
                            <img src={Bludo4} alt="wesrdtyu" />
                            <h4>Медовик</h4>
                            <div className="butonGrB2">140 г</div>
                            <p>Вкус детства: тающие во рту медовые коржи, пропитанные воздушным кремом.</p>
                            <div className="PodPodPodBlH221222">
                                <h3>460 ₽</h3>
                                <button className="BasketB2222"></button>
                            </div>
                        </div>
                        <div className="BludoH22">
                            <img src={Bludo5} alt="wesrdtyu" />
                            <h4>Чизкейк</h4>
                            <div className="butonGrB2">130 г</div>
                            <p>Классический творожный десерт с нежнейшей кремовой консистенцией и освежающей ноткой цитрусовых.</p>
                            <div className="PodPodPodBlH221222">
                                <h3>450 ₽</h3>
                                <button className="BasketB2222"></button>
                            </div>
                        </div>
                    </div>
        </div>
                
    )
}
