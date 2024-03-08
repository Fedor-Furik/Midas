import Bludo1 from "./assets/Bludo1.png"
import Bludo2 from "./assets/Bludo2.png"
import Bludo3 from "./assets/Bludo3.png"
import Bludo4 from "./assets/Bludo4.png"
import Bludo5 from "./assets/Bludo5.png"
import Bludo6 from "./assets/Bludo6.png"
import "./ColdSnacks.css"
import {NavLink} from "react-router-dom"
export default function Home() {
    return(
        <div className="ContainH222">
            <div className="zogl222222">Холодные закуски</div>
            <div className="PodPodBlH2222">
                    <div className="BludoH2">
                            <img src={Bludo1} alt="wesrdtyu" />
                            <h4>Сациви с лососем</h4>
                            <div className="butonGrB2">190 г</div>
                            <p>Кусочки дикого лосося, щедро пропитанные ореховым соусом, с добавлением пряной кинзы и ароматных грузинских специй.</p>
                            <div className="PodPodPodBlH22122">
                                <h3>660 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo2} alt="wesrdtyu" />
                            <h4>Сациви с курицей</h4>
                            <div className="butonGrB2">180 г</div>
                            <p>Сочная курочка, залитая густым ореховым соусом, с добавлением ароматных грузинских специй.</p>
                            <div className="PodPodPodBlH22122">
                                <h3>620 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo3} alt="wesrdtyu" />
                            <h4>Рулетики с семгой</h4>
                            <div className="butonGrB2">150 г</div>
                            <p>Классическое сочетание слабосоленой сёмги, сливочного сыра Маскарпоне и свежего органического огурца.</p>
                            <div className="PodPodPodBlH22122">
                                <h3>535 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo4} alt="wesrdtyu" />
                            <h4>Аджапсандал</h4>
                            <div className="butonGrB2">200 г</div>
                            <p>Экологически чистые баклажаны, помидоры и болгарский перец, пропитанные ароматом грузинских специй и пряной зелени.</p>
                            <div className="PodPodPodBlH22122">
                                <h3>590 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo5} alt="wesrdtyu" />
                            <h4>Рулетики из баклажанов</h4>
                            <div className="butonGrB2">150 г</div>
                            <p>Свежий органический баклажан, фаршированный грецкими орехами и ароматными грузинскими специями.</p>
                            <div className="PodPodPodBlH22122">
                                <h3>495 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo6} alt="wesrdtyu" />
                            <h4>Пхали</h4>
                            <div className="butonGrB2">150 г</div>
                            <p>Органическая свекла и капуста, дополненные выразительным вкусом грецкого ореха, чеснока и грузинских специй.</p>
                            <div className="PodPodPodBlH22122">
                                <h3>270 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                    </div>
        </div>
                
    )
}
