import Bludo1 from "./assets/Bludo1.png"
import Bludo2 from "./assets/Bludo2.png"
import Bludo3 from "./assets/Bludo3.png"
import Bludo4 from "./assets/Bludo4.png"
import Bludo5 from "./assets/Bludo5.png"
import Bludo6 from "./assets/Bludo6.png"
import "./HotBluds.css"
import {NavLink} from "react-router-dom"
export default function Home() {
    return(
        <div className="ContainH2">
            <div className="zogl222222">Горячее блюда</div>
            <div className="PodPodBlH2222">
                    <div className="BludoH2">
                            <img src={Bludo1} alt="wesrdtyu" />
                            <h4>Котлета с картофелем по-деревенски</h4>
                            <div className="butonGrB2">220 г</div>
                            <p>По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...</p>
                            <div className="PodPodPodBlH2212">
                                <h3>430 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo2} alt="wesrdtyu" />
                            <h4>Оджахури из телятины</h4>
                            <div className="butonGrB2">250 г</div>
                            <p>Традиционное жаркое из фермерской телятины и свежих фермерским овощей, с добавлением большого количества грузинских специй.</p>
                            <div className="PodPodPodBlH2212">
                                <h3>590 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo3} alt="wesrdtyu" />
                            <h4>Долма</h4>
                            <div className="butonGrB2">170 г</div>
                            <p>Невероятно ароматная начинка из рубленого мяса и свежей зелени, завернутая в виноградные листья, ...</p>
                            <div className="PodPodPodBlH2212">
                                <h3>550 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo4} alt="wesrdtyu" />
                            <h4>Чихохбили</h4>
                            <div className="butonGrB2">300 г</div>
                            <p>Нежные кусочки фермерской курочки и экологически чистых овощей в ароматном соусе.</p>
                            <div className="PodPodPodBlH2212">
                                <h3>355 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo5} alt="wesrdtyu" />
                            <h4>Лобио по-имеретински</h4>
                            <div className="butonGrB2">250 г</div>
                            <p>Традиционное жаркое из фермерской телятины и свежих фермерским овощей, с добавлением большого количества грузинских специй.</p>
                            <div className="PodPodPodBlH2212">
                                <h3>340 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH2">
                            <img src={Bludo6} alt="wesrdtyu" />
                            <h4>Стейк из лосося с овощами</h4>
                            <div className="butonGrB2">430 г</div>
                            <p>Нежный стейк дикого лосося, пропитанный соком и ароматом слегка обжаренных фермерских овощей.</p>
                            <div className="PodPodPodBlH2212">
                                <h3>1 200 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                    </div>
        </div>
                
    )
}
