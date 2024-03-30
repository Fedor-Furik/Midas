import "./Oform.css"
import {useState} from "react"
import xch from "../../assets/Bludo11.png"
import Kar from "../../assets/Group 66.png"
export default function Oform(){
    let mas = JSON.parse(localStorage.ff2)
    let otr = []
    const [sost1,setSost1] = useState("noCel")
    const [sost2,setSost2] = useState("noCel")
    const [sost3,setSost3] = useState("noCel")
    const [sost4,setSost4] = useState("noCel")
    const [sost5,setSost5] = useState("noCel")
    const [flag34 ,setFlag34] = useState(true)
    const [flag35 ,setFlag35] = useState(false)
    const [sosta1 ,setSosta1] = useState("noCel2")
    const [sosta2 ,setSosta2] = useState("noCel2")
    const [sosta3 ,setSosta3] = useState("noCel2")
    let obS = mas[0]
    if(obS == undefined){
        obS = 0
    }
    for (let i = 1; i < mas.length; i++){
        let vrNaz = mas[i].name
        let vrPric = mas[i].price
        let Kol = mas[i].kol
        let nM = (
            <div className='CardDivs2'>
                <img className="ImgPrev2" src={xch} alt="" />
                <div className="cardDD4"><p className="lol5">{vrNaz}</p></div>
                <div className="cardDD5"><p className="lol5">{Kol}</p></div>
                <div className="cardDD6"><p className="lol5">{vrPric}</p></div>
            </div>
        )
        otr.push(nM)
    }
    function cvet1(){
        setSost2("noCel")
        setSost1("Cel")
        setFlag35(true)
    }
    function cvet2(){
        setSost1("noCel")
        setSost2("Cel")
        setFlag35(false)
    }
    function krysh1(){
        if (sost1 == "noCel"){
            let kra1 = document.getElementById('kpp1')
            kra1.style.visibility = "visible"
            setSosta1("Cel2")
            setSost3("Cel")
        }
        else{
        let kra1 = document.getElementById('kpp1')
        let kra2 = document.getElementById('kpp2')
        let kra3 = document.getElementById('kpp3')
        kra1.style.visibility = "visible"
        kra2.style.visibility = "hidden"
        kra3.style.visibility = "hidden"
        setSosta1("Cel2")
        setSosta2("noCel2")
        setSosta3("noCel2")
        setSost3("Cel")
        setSost4("noCel")
        setSost5("noCel")
        }
    }
    function krysh2(){
        let kra1 = document.getElementById('kpp1')
        let kra2 = document.getElementById('kpp2')
        let kra3 = document.getElementById('kpp3')
        kra1.style.visibility = "hidden"
        kra2.style.visibility = "visible"
        kra3.style.visibility = "hidden"
        setSosta1("noCel2")
        setSosta2("Cel2")
        setSosta3("noCel2")
        setSost3("noCel")
        setSost4("Cel")
        setSost5("noCel")
    }
    function krysh3(){
        let kra1 = document.getElementById('kpp1')
        let kra2 = document.getElementById('kpp2')
        let kra3 = document.getElementById('kpp3')
        kra1.style.visibility = "hidden"
        kra2.style.visibility = "hidden"
        kra3.style.visibility = "visible"
        setSosta1("noCel2")
        setSosta2("noCel2")
        setSosta3("Cel2")
        setSost3("noCel")
        setSost4("noCel")
        setSost5("Cel")
    }
    function ochish(){
        // let cont = document.querySelector(".cont")
        // cont.innerHTML = ""
        localStorage.ff = JSON.stringify([])
        localStorage.clear
        otr = []
    }
    return(
        <div className="cont">
            <form>
            <div className="zogOfo">Оформление заказа</div>
            <div className="blox1">
                <div className="pBlox1">
                    <div className="zog1"><p>01. Контактные данные</p></div>
                    <div className="obobsh">

                        <div className="raz">
                          <p>ИМЯ</p>
                          <p>ТЕЛЕФОН</p>
                          <p>EMAIL</p>
                        </div>
                        <div className="inputsi">
                          {flag34 && <div className="bruh"><p className="avto1">Уже покупали у нас?</p> <p className="avto2">Войдите в личный кабинет, и все ваши данный автоматически заполнятся</p></div> }
                          <input className="vsIn" id="r1" type="name" required/>
                          <input className="vsIn" id="r2" type="telephone" required/>
                          <input className="vsIn" id="r3" type="email" required/>
                        </div>
                    </div>
                </div>
                <div className="pBlox2">
                    <div className="cont">{otr}</div>
                    <div className="bru"><h5 id="eo2">Итого к оплате:</h5><h6 id="eo">{obS} ₽</h6></div>
                    
                </div>
            </div>
            <div className="blox2">
                <div className="pBlox3">
                    <div className="zog1"><p>02. Способ доставки</p></div>
                    <div className="obobsh2">
                        <div className="ppO1">
                            <div onClick={cvet1.bind()} className="bbb1" id={sost1}>
                                <div className="DlFlex">
                                    <p>Бесконтактная доставка</p>
                                    <p>300 ₽</p>
                                </div>
                                <p className="noI">Доставка по Москве в пределах МКАД Осуществляется: ежедневно с 12:00 до 00:00, Диапозон времени: от 1 до 1.5 часов</p>
                            </div>
                            <div onClick={cvet2.bind()} className="bbb2" id={sost2}>
                                <div className="DlFlex">
                                    <p>Самовывоз</p>
                                    <p>0 ₽ </p>
                                </div>
                                <p className="noI">Доступен с 12:00 до 00:00 По адресу ул. Улофа Пальме 5с2</p>
                            </div>
                        </div>
                        {flag35 && <div className="pp02"><div className="obobsh3"><div className="raz2">{flag35 && <p>УЛИЦА</p>}{flag35 && <p>ДОМ</p>}{flag35 && <p>КОММЕНТАРИЙ К ЗАКАЗУ</p>}</div><div className="inputsi">{flag35 && <div className="bruh"><p className="avto3">Адрес доставки</p></div> }{flag35 && <input required className="vsIn" id="r2" type="text" />}{flag35 && <div className="nn2"><input required className="vsIn" id="r5" type="text" /><p>КВАРТИРА</p><input required className="vsIn"  id="r5" type="number" /></div>}{flag35 && <input required className="vsIn" id="r4" type="text" />}</div></div></div>}
                    </div>
                </div>
            </div>
            <div className="blox3">
                <div className="pBlox4">
                    <div className="zog1"><p>03. Оплата</p></div>
                    <div className="obobsh2">
                        <div className="ppO3">
                            <div className="bbb4" onClick={krysh1} id={sost3}>
                                <div className="knip" id={sosta1}><div className="knip2" id="kpp1"></div></div>
                                <div className="DlFlex5">
                                    <p className="vseO">Банковские карты / Электронные деньги / Другое</p>
                                    <img src={Kar} alt="Error" className="VCard" />
                                </div>
                            </div>
                          {flag35 && <div className="ndshgdfc"><div className="bbb5" id={sost4} onClick={krysh2}><div className="knip" id={sosta2}><div className="knip2" id="kpp2"></div></div><p className="vseO">Наличными курьеру</p></div><div className="bbb6" id={sost5} onClick={krysh3}><div className="knip" id={sosta3}><div className="knip2" id="kpp3"></div></div><p className="vseO">Картой курьеру</p></div></div> }
                        </div>
                        {/* {flag36 && <div className="pp02"><div className="obobsh3"><div className="raz2">{flag35 && <p>УЛИЦА</p>}{flag35 && <p>ДОМ</p>}{flag35 && <p>КОММЕНТАРИЙ К ЗАКАЗУ</p>}</div><div className="inputsi">{flag35 && <div className="bruh"><p className="avto3">Адрес доставки</p></div> }{flag35 && <input className="vsIn" id="r2" type="text" />}{flag35 && <div className="nn2"><input className="vsIn" id="r5" type="text" /><p>КВАРТИРА</p><input className="vsIn"  id="r5" type="text" /></div>}{flag35 && <input className="vsIn" id="r4" type="text" />}</div></div></div>} */}
                    </div>
                    <div className="podFu4"><button type="submit" onClick={ochish()} id="nach" className="oformB2">ПОДТВЕРДИТЬ ЗАКАЗ</button></div>
                </div>
            </div>
            </form>
        </div>
        
        
    )
}