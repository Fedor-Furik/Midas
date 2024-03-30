import {NavLink} from "react-router-dom"

import "./Home.css"
import Yammi from "./assets/HomeBlud.png"
import Toch from "./assets/Union.png"
import Losos from "./assets/LososKr.png"
import Toch2 from "./assets/Union2.png"
import Bludo1 from "./assetsBluda/Bludo12.png"
import Bludo2 from "./assetsBluda/Bludo13.png"
import Bludo3 from "./assetsBluda/Bludo14.png"
import Bludo4 from "./assetsBluda/Bludo15.png"
import Bludo5 from "./assetsBluda/Bludo16.png"
import Bludo6 from "./assetsBluda/Bludo17.png"
import Bludo7 from "./assetsBluda/Bludo18.png"
import Bludo8 from "./assetsBluda/Bludo19.png"
import Bludo9 from "./assetsBluda/Bludo20.png"
import Bludo10 from "./assetsBluda/Bludo21.png"
import Bludo11 from "./assetsBluda/Bludo22.png"
import Bludo12 from "./assetsBluda/Bludo23.png"
export default function Home() {
    function dobav(pe1,pe2,klas,im){
        let fi = JSON.parse(localStorage.ff)
        let doF = new Object()
        doF.name = pe1
        doF.opic = pe2
        doF.img = im
        fi.push(doF)
        localStorage.ff = JSON.stringify(fi);
       let resh = document.querySelector(`.${klas}`)
       localStorage.setItem("z1",true)
       resh.setAttribute('disabled',localStorage.getItem("z1"))
       resh.id = "Act"
    }
    return(
        <div className="ContainH">
            <div className="BlockH1">
                <div className="PodBlH11">
                    <p>Доставка готовой еды из фермерских продуктов!</p>
                    <img className="Backrooms" src={Toch} alt="Error" />
                    <p className="numberPB1">+7 (499) 841-67-29</p>
                    <h6>delivery@midas.rest</h6>
                    <img className="Losos" src={Losos} alt="Error" />
                    <button className="BasketB"></button>
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
                            <p id="1"className="1">Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.</p>
                            <div className="PodPodPodBlH221">
                                <h3 id="1C"className="1C">470 ₽</h3>
                                <button onClick={dobav.bind(this,'Хачапури по-аджарски с яйцом','475','Bas1',"Bludo12")} className="Bas1" id="nAct"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo2} alt="wesrdtyu" />
                            <h4>Хинкали с сыром</h4>
                            <div className="butonGrB">70 г</div>
                            <p id="2"className="2">Невероятно нежные хинкали с ароматной начинкой из сыра моцареллы.</p>
                            <div className="PodPodPodBlH221">
                                <h3 id="2C"className="2C">105 ₽</h3>
                                <button onClick={dobav.bind(this,'Хинкали с сыром','105',"Bas2","Bludo13")} className="Bas2" id="nAct"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo3} alt="wesrdtyu" />
                            <h4>Хинкали жаренные (6шт)</h4>
                            <div className="butonGrB">350 г</div>
                            <p id="3"className="3">Пряные хинкали с начинкой из ароматной баранины со специями.</p>
                            <div className="PodPodPodBlH221">
                                <h3 id="3C"className="3C">520 ₽</h3>
                                <button onClick={dobav.bind(this,'Хинкали жаренные (6шт)','520',"Bas3","Bludo14")} className="Bas3" id="nAct"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo4} alt="wesrdtyu" />
                            <h4>Цезарь с курицей</h4>
                            <div className="butonGrB">200 г</div>
                            <p id="4"className="4">Доведенное до совершенства сочетание фермерской курочки, с салатом романо, и айсбергом, щедро сдобренное фирменным соусом «Цезарь».</p>
                            <div className="PodPodPodBlH221">
                                <h3 id="4C"className="4C">525 ₽</h3>
                                <button onClick={dobav.bind(this,'Цезарь с курицей','525',"Bas4","Bludo15")} className="Bas4" id="nAct"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo5} alt="wesrdtyu" />
                            <h4>Хачапури по-мегрельски</h4>
                            <div className="butonGrB">430 г</div>
                            <p id="5"className="5">Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи.</p>
                            <div className="PodPodPodBlH221">
                                <h3 id="5C" className="5C">490 ₽</h3>
                                <button onClick={dobav.bind(this,'Хачапури по-мегрельски','490',"Bas5","Bludo16")} className="Bas5" id="nAct"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo6} alt="wesrdtyu" />
                            <h4>Котлета с картофелем по-деревенски</h4>
                            <div className="butonGrB">220 г</div>
                            <p id="6" className="6">По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...</p>
                            <div className="PodPodPodBlH221">
                                <h3 id="6C"className="6C">430 ₽</h3>
                                <button onClick={dobav.bind(this,'Котлета с картофелем по-деревенски','430',"Bas6","Bludo17")} className="Bas6" id="nAct"></button>
                            </div>
                        </div>
                    </div>
                    <div className="PodPodBlH222">
                    <div className="BludoH">
                            <img src={Bludo7} alt="wesrdtyu" />
                            <h4>Харчо</h4>
                            <div className="butonGrB">350 г</div>
                            <p id="7">Не устоять: легендарный грузинский суп-рагу с фермерской говядиной, рисом, свежей зеленью и ароматными грузинскими специями.</p>
                            <div className="PodPodPodBlH2213">
                                <h3 id="7C">405 ₽</h3>
                                <button onClick={dobav.bind(this,'Харчо','405',"Bas7","Bludo18")} className="Bas7" id="nAct"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo8} alt="wesrdtyu" />
                            <h4>Чебурек с мясом</h4>
                            <div className="butonGrB">150 г</div>
                            <p id="8">Сочная, хрустящая лепешка из фирменного теста, с начинкой из фермерской говядины, пряной кинзы и красного лука.</p>
                            <div className="PodPodPodBlH2213">
                                <h3 id="8C">340 ₽</h3>
                                <button onClick={dobav.bind(this,'Чебурек с мясом','340',"Bas8","Bludo19")} className="Bas8" id="nAct"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo9} alt="wesrdtyu" />
                            <h4>Хачапури со шпинатом и зеленью</h4>
                            <div className="butonGrB">450 г</div>
                            <p id="9">Лепешка из фирменного теста с молодым шпинатом и экологически чистой зеленью.</p>
                            <div className="PodPodPodBlH2213">
                                <h3 id="9C">435 ₽</h3>
                                <button onClick={dobav.bind(this,'Хачапури со шпинатом и зеленью','435',"Bas9","Bludo20")} className="Bas9" id="nAct"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo10} alt="wesrdtyu" />
                            <h4>Рулетики с сёмгой</h4>
                            <div className="butonGrB">150 г</div>
                            <p id="10">Классическое сочетание слабосоленой сёмги, сливочного сыра Маскарпоне и свежего органического огурца.</p>
                            <div className="PodPodPodBlH2213">
                                <h3 id="10C">535 ₽</h3>
                                <button onClick={dobav.bind(this,'Рулетики с сёмгой','535',"Bas10","Bludo21")} className="Bas10" id="nAct"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo11} alt="wesrdtyu" />
                            <h4>Мясной пирог фиджини</h4>
                            <div className="butonGrB">450 г</div>
                            <p id="11">Невероятно ароматный и насыщенный вкус рубленой телятины, свежей кинзы и грузинских специй в сочетании с тонким, фирменным тестом.</p>
                            <div className="PodPodPodBlH2213">
                                <h3 id="11C">450 ₽</h3>
                                <button onClick={dobav.bind(this,'Мясной пирог фиджини','450',"Bas11","Bludo22")} className="Bas11" id="nAct"></button>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo12} alt="wesrdtyu" />
                            <h4>Пирожки с уткой</h4>
                            <div className="butonGrB">140 г</div>
                            <p id="12">Идеальное сочетание воздушного теста и нежнейшей начинки из утиного филе, свежей кинзы и лука.</p>
                            <div className="PodPodPodBlH2213">
                                <h3 id="12C">370 ₽</h3>
                                <button onClick={dobav.bind(this,'Пирожки с уткой','370',"Bas12","Bludo23")} className="Bas12" id="nAct"></button>
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
                    <NavLink><div className="blockNSl0"><p>АКЦИИ🔥</p></div></NavLink>
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