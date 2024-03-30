import { useState } from "react"
import {NavLink} from "react-router-dom"
import minys from "./assets/minys.png"
import plus from "./assets/plus.png"
import krest from "./assets/kr.png"
import './Backet.css'
import {Bludo1,Bludo2,Bludo3,Bludo4,Bludo5,Bludo6,Bludo7,Bludo8,Bludo9,Bludo10,Bludo11,Bludo12,Bludo13,Bludo14,Bludo15,Bludo16,Bludo17,Bludo18,Bludo19,Bludo20,Bludo21,Bludo22,Bludo23,Bludo24,Bludo25,Bludo26,Bludo27,Bludo28,Bludo29,Bludo30,Bludo31,Bludo32,Bludo33,Bludo34,Bludo35,Bludo36,Bludo37,Bludo38,Bludo39,Bludo40,Bludo41,Bludo42,Bludo43,Bludo44,Bludo45,Bludo46,Bludo47} from "../../assetsUn"

export default function Backet() {
    const Picters = [Bludo1,Bludo2,Bludo3,Bludo4,Bludo5,Bludo6,Bludo7,Bludo8,Bludo9,Bludo10,Bludo11,Bludo12,Bludo13,Bludo14,Bludo15,Bludo16,Bludo17,Bludo18,Bludo19,Bludo20,Bludo21,Bludo22,Bludo23,Bludo24,Bludo25,Bludo26,Bludo27,Bludo28,Bludo29,Bludo30,Bludo31,Bludo32,Bludo33,Bludo34,Bludo35,Bludo36,Bludo37,Bludo38,Bludo39,Bludo40,Bludo41,Bludo42,Bludo43,Bludo44,Bludo45,Bludo46,Bludo47]
    const [inputOne, setInput] = useState('');
    let massiv = []
    let mas = JSON.parse(localStorage.ff)
    let b = mas.length
    let dopN = 0
    const [count2,setCount2] = useState(b)
    const [count5,setCount5] = useState(mas.length)
    for(let i = 0;i < mas.length; i++){
        let imgg = mas[i].img
        let vrPric = Number(mas[i].opic)
        let vrNaz = mas[i].name
        console.log(imgg)
        for(let b = 0;b < 47; b++){
            if (imgg == `Bludo${b}`){
                imgg = Picters[b - 1]
                console.log(b)
            }
        }
        const [count,setCount] = useState(1)
        function Fmin(){
            if (count >= 2){
              setCount(count - 1)
              setCount3(count3 - vrPric)
            }
            if (count3 < 0){
                setCount3(0)
            }
        }
        function Fplus(){
            setCount(count + 1)
            setCount3(count3 + vrPric)
        }
        let vrSumPric = vrPric * count
        dopN += vrPric
        function delC2 (){
            if(count2 != 0){
                setCount2(count2 - 1)
             }
            setCount5(count5 - 1)
        }
        function delC(ir){
            if (count3 - vrSumPric < 0) {
                setCount3(0)
            } 
            else{
                setCount3(count3 - vrSumPric)
            }
            const div = document.getElementById(ir)
            const parent = div.parentNode
            parent.removeChild(div)
            delC2()
	    }
        let card = (
            <div className='CardDivs' id={`i${i}`}>
                <img className="ImgPrev" id={`iiiii${i}`} src={imgg} alt="" />
                <div className="cardDD1"><p id={`iii${i}`}>{vrNaz}</p></div>
                <div className="cardDD2"><p className="lol2">{vrPric} ₽</p><button className="Ipitals"><img onClick={Fmin} className="znaks1" src={minys} alt="Error" /><p className="lol" id={`iiii${i}`}>{count}шт</p><img onClick={Fplus} className="znaks2" src={plus} alt="er" /></button><p id={`ii${i}`} className="obsa">{vrSumPric} ₽</p></div>
                <div className="cardDD3" onClick={delC.bind(this,`i${i}`)}><img src={krest} alt="Error" /></div>
            </div>
            )
        massiv.push(card)
    }
    const [count3,setCount3] = useState(dopN)
    const [count4,setCount4] = useState(0)
    function chit() {
        let pi = document.getElementById("pkast")
        if (`${inputOne}` == "1234/5678/9000" && count4 == 0 && count3 >= 1000) {
            setCount3(count3 - 1000)
            setCount4(count4 + 1)
            pi.style.color = "lightgreen"
            pi.innerText = "CODE SUCCESSFULLY ACTIVATED"
        }
        else if(count4 != 0 && `${inputOne}` == "1234/5678/9000"){
            pi.style.color = "red"
            pi.innerText = "THE CODE HAS ALREADY ACTIVATED"
        }
        else if(`${inputOne}` == "1234/5678/9000" && count4 == 0 && count3 < 1000){
            pi.style.color = "red"
            pi.innerText = "THE FINAL  AMOUNT MUST BE MORE 1000"
        }
        else{
            pi.style.color = "red"
            pi.innerText = "INVALID PROMOTIAL CODE"
        }
        setInput("")
    }
    // let isLinkEnabled = false;
    localStorage.ff2 = JSON.stringify([])
    function mat(sye,kov){
        if (count5 != 0){
        // isLinkEnabled = true
        for(let i = 0;i < kov;i++){
            let fi2 = JSON.parse(localStorage.ff2)
            let doF = new Object()
            doF.name = document.getElementById(`iii${i}`).textContent
            doF.price = document.getElementById(`ii${i}`).textContent
            doF.kol = document.getElementById(`iiii${i}`).textContent
            doF.img = document.getElementById(`iiiii${i}`).getAttribute("src")
            fi2.push(doF)
            localStorage.ff2 = JSON.stringify(fi2);
        }
        let fi3 = JSON.parse(localStorage.ff2)
        fi3.unshift(sye)
        localStorage.ff2 = JSON.stringify(fi3);
        // console.log(isLinkEnabled)
        }
    }
    
    return (
    <div className="ContainB">
        <div className="KorD">
          <h1>Корзина</h1>
          <p className="lol4">{count2} ШТ</p>
        </div>
        <div className="RocpD">
            <div className="rop1"><p className="lol3">БЛЮДО:</p></div>
            <div className="rop2"><p className="lol3">ЦЕНА:</p><p className="lol3">КОЛ-ВО:</p><p className="lol3">СУММА:</p></div>
        </div>
         <div className="BacD">
            {massiv}
        </div>
        <div className="foot">
            <div className="podFu1">
                <div className="podFu2">
                    <div className="podFu4"><p>ПРИМЕНИТЬ ПРОМОКОД:</p></div>
                    <div className="podFu4" ><input id="tds" value={inputOne} onChange={(event) => setInput(event.target.value)} type="tel" placeholder="XXXX/XXXX/XXXX"/></div>
                    <div className="podFu4"><p className="pkast" id="pkast"></p></div>
                    <div className="podFu4"><p>ИТОГО К ОПЛАТЕ: {count3} ₽</p></div>
                    <NavLink to="/Oform"><div className="podFu4"><button onClick={mat.bind(this,count3,count5)} className="oformB2">ОФОРМИТЬ ЗАКАЗ</button></div></NavLink> 
                    {/* to={isLinkEnabled ? '/Oform' : '#'} */}
                </div>
                <div className="podFu3">
                    <button onClick={chit} className="oformB1">ПРИМЕНИТЬ</button>
                </div>
            </div>
        </div>
    </div>
      )
}