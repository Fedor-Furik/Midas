import Bludo1 from "./assets/Bludo1.png"
import Bludo2 from "./assets/Bludo2.png"
import Bludo3 from "./assets/Bludo3.png"
import Bludo4 from "./assets/Bludo4.png"
import Bludo5 from "./assets/Bludo5.png"
import Bludo6 from "./assets/Bludo6.png"
import Bludo7 from "./assets/Bludo7.png"
import "./NewBeak.css"
import {NavLink} from "react-router-dom"
export default function Home() {
    return(
        <div className="ContainH2225">
            <div className="zogl222222">Свежая выпечка</div>
            <div className="PodPodBlH2222">
                    <div className="BludoH2">
                            <img src={Bludo1} alt="wesrdtyu" />
                            <h4>Хачапури по-аджарски с яйцом</h4>
                            <div className="butonGrB2"> 300 г</div>
                            <p>Знаменитая лепешка в форме лодочки с начинкой из имеретинского сыра и сыра сулугуни, украшенная желтком.</p>
                            <div className="PodPodPodBlH22122225">
                                <h3>295 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo2} alt="wesrdtyu" />
                            <h4>Чебурек с мясом</h4>
                            <div className="butonGrB2">150 г</div>
                            <p>Сочная, хрустящая лепешка из фирменного теста, с начинкой из фермерской говядины, пряной кинзы и красного лука.</p>
                            <div className="PodPodPodBlH22122225">
                                <h3>340 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo2} alt="wesrdtyu" />
                            <h4>Чебурек с помидором и сыром</h4>
                            <div className="butonGrB2">130 г</div>
                            <p>Сочная, хрустящая лепешка из фирменного теста, с начинкой из моцареллы и фермерских помидор.</p>
                            <div className="PodPodPodBlH22122225">
                                <h3>320 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo3} alt="wesrdtyu" />
                            <h4>Лобиани</h4>
                            <div className="butonGrB2">450 г</div>
                            <p>Невозможно вкусно: закрытый пирог из фирменного теста и красной фасоли, с акцентом на необычный вкус грузинских специй.</p>
                            <div className="PodPodPodBlH22122225">
                                <h3>400 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                    </div>
                    <div className="PodPodBlH22222">
                    <div className="BludoH2">
                            <img src={Bludo4} alt="wesrdtyu" />
                            <h4>Хачапури по-мегрельски</h4>
                            <div className="butonGrB2"> 500 г</div>
                            <p>Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи.</p>
                            <div className="PodPodPodBlH22122223">
                                <h3>445 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo5} alt="wesrdtyu" />
                            <h4>Фирменный хачапури c копченым сыром</h4>
                            <div className="butonGrB2">600 г</div>
                            <p>Гастрономическая гордость Грузии: лепешка с ароматной начинкой из копченного сыра и сыра сулугуни.</p>
                            <div className="PodPodPodBlH22122223">
                                <h3>455 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo6} alt="wesrdtyu" />
                            <h4>Мясной пирог фиджини</h4>
                            <div className="butonGrB2">300 г</div>
                            <p>Невероятно ароматный и насыщенный вкус рубленой телятины, свежей кинзы и грузинских специй в сочетании с тонким, фирменным тестом.</p>
                            <div className="PodPodPodBlH22122223">
                                <h3>375 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo7} alt="wesrdtyu" />
                            <h4>Хачапури со шпинатом и зеленью</h4>
                            <div className="butonGrB2">450 г</div>
                            <p>Лепешка из фирменного теста с молодым шпинатом и экологически чистой зеленью.</p>
                            <div className="PodPodPodBlH22122223">
                                <h3>435 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                    </div>
        </div>
                
    )
}
