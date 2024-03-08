import Bludo1 from "./assets/Bludo1.png"
import Bludo2 from "./assets/Bludo2.png"
import Bludo3 from "./assets/Bludo3.png"
import Bludo4 from "./assets/Bludo4.png"
import Bludo5 from "./assets/Bludo5.png"
import "./Salats.css"
import {NavLink} from "react-router-dom"
export default function Home() {
    return(
        <div className="ContainH22">
            <div className="zogl2222222">Салаты</div>
            <div className="PodPodBlH2222">
                    <div className="BludoH22">
                            <img src={Bludo1} alt="wesrdtyu" />
                            <h4>Цезарь с курицей</h4>
                            <div className="butonGrB2">200 г</div>
                            <p>Доведенное до совершенства сочетание фермерской курочки, с салатом романо, и айсбергом, щедро сдобренное фирменным соусом «Цезарь».</p>
                            <div className="PodPodPodBlH2212223">
                                <h3>525 ₽</h3>
                                <button className="BasketB22223"></button>
                            </div>
                        </div>
                        <div className="BludoH22">
                            <img src={Bludo2} alt="wesrdtyu" />
                            <h4>Цезарь с тигровыми креветками и кальмарами</h4>
                            <div className="butonGrB2">250 г</div>
                            <p>Нежнейшее мясо тигровых креветок и кальмаров, оттененное свежестью салата романо и айсберга, и пропитанное фирменным соусом «Цезарь».</p>
                            <div className="PodPodPodBlH2212223">
                                <h3>790 ₽</h3>
                                <button className="BasketB22223"></button>
                            </div>
                        </div>
                        <div className="BludoH22">
                            <img src={Bludo3} alt="wesrdtyu" />
                            <h4>Капрезе с моцареллой</h4>
                            <div className="butonGrB2">260 г</div>
                            <p>Неповторимый вкус моцареллы, спелых фермерских помидор, ароматного базилика, руколы и фирменного соуса «Песто».</p>
                            <div className="PodPodPodBlH2212223">
                                <h3>490 ₽</h3>
                                <button className="BasketB22223"></button>
                            </div>
                        </div>
                        <div className="BludoH22">
                            <img src={Bludo4} alt="wesrdtyu" />
                            <h4>Салат по-тбилисски</h4>
                            <div className="butonGrB2">250 г</div>
                            <p>Свежесть первого сорта: салат из экологически чистых помидор, огурца, сладкого лука, зеленого перца чили и грецких орехов.</p>
                            <div className="PodPodPodBlH2212223">
                                <h3>375 ₽</h3>
                                <button className="BasketB22223"></button>
                            </div>
                        </div>
                        <div className="BludoH22">
                            <img src={Bludo5} alt="wesrdtyu" />
                            <h4>Киндзамари из судака </h4>
                            <div className="butonGrB2">200 г</div>
                            <p>Нежное филе судака, под ароматным соусом из пряной кинзы, чеснока, винного уксуса и традиционных грузинских специй.</p>
                            <div className="PodPodPodBlH2212223">
                                <h3>450 ₽</h3>
                                <button className="BasketB22223"></button>
                            </div>
                        </div>
                    </div>
        </div>
                
    )
}
