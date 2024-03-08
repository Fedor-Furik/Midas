import {NavLink} from "react-router-dom"
import {useState} from "react"
import "./Home.css"
import Yammi from "./assets/HomeBlud.png"
import Toch from "./assets/Union.png"
import Losos from "./assets/LososKr.png"
import Toch2 from "./assets/Union2.png"
import Bludo1 from "./assetsBluda/Bludo1.png"
import Bludo2 from "./assetsBluda/Bludo2.png"
import Bludo3 from "./assetsBluda/Bludo3.png"
import Bludo4 from "./assetsBluda/Bludo4.png"
import Bludo5 from "./assetsBluda/Bludo5.png"
import Bludo6 from "./assetsBluda/Bludo6.png"
import Bludo7 from "./assetsBluda/Bludo7.png"
import Bludo8 from "./assetsBluda/Bludo8.png"
import Bludo9 from "./assetsBluda/Bludo9.png"
import Bludo10 from "./assetsBluda/Bludo10.png"
import Bludo11 from "./assetsBluda/Bludo11.png"
import Bludo12 from "./assetsBluda/Bludo12.png"
export default function Home() {
    const [flag3 ,setFlag3] = useState(false)
    let sum = 1
    function chisla(){
    if(sum !== 0 && flag3 === false){
      setFlag3(!flag3)
    } else if(sum === 0 && flag3 === true){
      setFlag3(!flag3)   
    }
    }
    
    return(
        <div className="ContainH">
            <div className="BlockH1">
                <div className="PodBlH11">
                    <p>Доставка готовой еды из фермерских продуктов!</p>
                    <img className="Backrooms" src={Toch} alt="Error" />
                    <p className="numberPB1">+7 (499) 841-67-29</p>
                    <h6>delivery@midas.rest</h6>
                    {flag3 && <img className="Losos" src={Losos} alt="Error" />}
                    <button onClick={chisla()} className="BasketB"></button>
                    <img className="Backrooms2" src={Toch2} alt="Error" />
                </div>
                <img className="hYamI" src={Yammi} alt="" />
            </div>
            <div className="BlockH2">
                <div className="PodBlH21">
                    <h1>Популярные блюда</h1>
                </div>
                <div className="PodBlH22">
                    <div className="PodPodBlH221">
                        <div className="BludoH">
                            <img src={Bludo1} alt="wesrdtyu" />
                            <h4>Хачапури по-аджарски с яйцом</h4>
                            <div className="butonGrB">430 г</div>
                            <p>Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.</p>
                            <div className="PodPodPodBlH221">
                                <h3>470 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo2} alt="wesrdtyu" />
                            <h4>Хинкали с сыром</h4>
                            <div className="butonGrB">70 г</div>
                            <p>Невероятно нежные хинкали с ароматной начинкой из сыра моцареллы.</p>
                            <div className="PodPodPodBlH221">
                                <h3>105 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo3} alt="wesrdtyu" />
                            <h4>Хинкали жаренные (6шт)</h4>
                            <div className="butonGrB">350 г</div>
                            <p>Пряные хинкали с начинкой из ароматной баранины со специями.</p>
                            <div className="PodPodPodBlH221">
                                <h3>520 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo4} alt="wesrdtyu" />
                            <h4>Цезарь с курицей</h4>
                            <div className="butonGrB">200 г</div>
                            <p>Доведенное до совершенства сочетание фермерской курочки, с салатом романо, и айсбергом, щедро сдобренное фирменным соусом «Цезарь».</p>
                            <div className="PodPodPodBlH221">
                                <h3>525 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo5} alt="wesrdtyu" />
                            <h4>Хачапури по-мегрельски</h4>
                            <div className="butonGrB">430 г</div>
                            <p>Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи.</p>
                            <div className="PodPodPodBlH221">
                                <h3>490 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo6} alt="wesrdtyu" />
                            <h4>Котлета с картофелем по-деревенски</h4>
                            <div className="butonGrB">220 г</div>
                            <p>По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...</p>
                            <div className="PodPodPodBlH221">
                                <h3>430 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                    </div>
                    <div className="PodPodBlH222">
                    <div className="BludoH">
                            <img src={Bludo7} alt="wesrdtyu" />
                            <h4>Харчо</h4>
                            <div className="butonGrB">350 г</div>
                            <p>Не устоять: легендарный грузинский суп-рагу с фермерской говядиной, рисом, свежей зеленью и ароматными грузинскими специями.</p>
                            <div className="PodPodPodBlH2213">
                                <h3>405 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo8} alt="wesrdtyu" />
                            <h4>Чебурек с мясом</h4>
                            <div className="butonGrB">150 г</div>
                            <p>Сочная, хрустящая лепешка из фирменного теста, с начинкой из фермерской говядины, пряной кинзы и красного лука.</p>
                            <div className="PodPodPodBlH2213">
                                <h3>340 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo9} alt="wesrdtyu" />
                            <h4>ачапури со шпинатом и зеленью</h4>
                            <div className="butonGrB">450 г</div>
                            <p>Лепешка из фирменного теста с молодым шпинатом и экологически чистой зеленью.</p>
                            <div className="PodPodPodBlH2213">
                                <h3>435 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo10} alt="wesrdtyu" />
                            <h4>Рулетики с сёмгой</h4>
                            <div className="butonGrB">150 г</div>
                            <p>Классическое сочетание слабосоленой сёмги, сливочного сыра Маскарпоне и свежего органического огурца.</p>
                            <div className="PodPodPodBlH2213">
                                <h3>535 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo11} alt="wesrdtyu" />
                            <h4>Мясной пирог фиджини</h4>
                            <div className="butonGrB">450 г</div>
                            <p>Невероятно ароматный и насыщенный вкус рубленой телятины, свежей кинзы и грузинских специй в сочетании с тонким, фирменным тестом.</p>
                            <div className="PodPodPodBlH2213">
                                <h3>450 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo12} alt="wesrdtyu" />
                            <h4>Пирожки с уткой </h4>
                            <div className="butonGrB">140 г</div>
                            <p>Идеальное сочетание воздушного теста и нежнейшей начинки из утиного филе, свежей кинзы и лука.</p>
                            <div className="PodPodPodBlH2213">
                                <h3>370 ₽</h3>
                                <button className="BasketB2"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="BlockH3">
                <div className="ZoglB">
                    <h4>Меню</h4>
                </div>
                <div className="NedoSlid">
                    <NavLink to="/Actions"><div className="blockNSl0"><p>АКЦИИ🔥</p></div></NavLink>
                    <NavLink to="/HotBluds">
                      <div className="blockNSl1">
                        <div className="podD2">
                            <div className="podpodD2"><p>Горячие</p></div>
                            <div className="podpodD2"><p>блюда</p></div>
                        </div>
                      </div> 
                    </NavLink>
                    <NavLink to="/Soups"><div className="blockNSl2"><p>Супы</p></div></NavLink>
                    <NavLink to="/Xinkali"><div className="blockNSl3"><p>Хинкали</p></div></NavLink>
                    <NavLink to="/ColdSnacks">
                      <div className="blockNSl4">
                        <div className="podD2">
                            <div className="podpodD2"><p>Холодные</p></div>
                            <div className="podpodD2"><p>Закуски</p></div>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink to="/Salats"><div className="blockNSl5"><p>Салаты</p></div></NavLink>     
                </div>
            </div>
        </div>
    )
}