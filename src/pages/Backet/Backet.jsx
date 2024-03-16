import { useState } from "react"
// import photos from "./photo.json"
// import Card from "./Card"
import minys from "./assets/minys.png"
import plus from "./assets/plus.png"
import xch from "./assets/Bludo11.png"
import krest from "./assets/kr.png"
import './Backet.css'
export default function Backet() {
    localStorage.setItem('koN',1)
    let massiv = []
    let mamaMia = 0
    let b = localStorage.getItem('koN')
    // let n = b * 2
    for(let i=0;i < b ; i++){
        let vrNaz = "Хачапури по-аджарский" 
        const [count,setCount] = useState(1)
        function Fmin(){
            if (count >= 2){
              setCount(count - 1) 
            }
        }
        function Fplus(){
            setCount(count + 1)
        }
        // function delC(){
        //     b -= 1
	    // };
        let vrPric = 455
        let vrSumPric = vrPric * count
        mamaMia += vrSumPric
        let card = (
            <div className='CardDivs' id={`i${i}`}>
                <img className="ImgPrev" src={xch} alt="" />
                <div className="cardDD1"><h9>{vrNaz}</h9></div>
                <div className="cardDD2"><h11>{vrPric} ₽</h11><button className="Ipitals"><img onClick={Fmin} className="znaks1" src={minys} alt="Error" /><p>{count}шт</p><img onClick={Fplus} className="znaks2" src={plus} alt="er" /></button><h11 className="obsa">{vrSumPric} ₽</h11></div>
                <div className="cardDD3"><img src={krest} alt="Error" /></div>
            </div>
            )
        massiv.push(card)
    }
    // function ui(){
    //     let bruh = document.getElementById('ryy').value
    //     if (bruh == "1234/5678/9000"){
    //         mamaMia -= 3000
    //     }
    // }
    return (
    <div className="ContainB">
        <div className="KorD">
          <h1>Корзина</h1>
          <h7>{b} ШТ</h7>
        </div>
        <div className="RocpD">
            <div className="rop1"><h8>БЛЮДО:</h8></div>
            <div className="rop2"><h8>ЦЕНА:</h8><h8>КОЛ-ВО:</h8><h8>СУММА:</h8></div>
        </div>
         <div className="BacD">
            {massiv}
        </div>
        <div className="foot">
            <div className="podFu1">
                <div className="podFu2">
                    <div className="podFu4"><p>ПРИМЕНИТЬ ПРОМОКОД:</p></div>
                    <div className="podFu4" ><input type="text" placeholder="XXXX/XXXX/XXXX"/></div>
                    <div className="podFu4"><p>ИТОГО К ОПЛАТЕ: {mamaMia} ₽</p></div>
                    <div className="podFu4"><button className="oformB2">ОФОРМИТЬ ЗАКАЗ</button></div>
                </div>
                <div className="podFu3">
                    <button className="oformB1">ПРИМЕНИТЬ</button>
                </div>
            </div>
        </div>
    </div>
      )
}
// id="ryy"
// onClick={ui()}