import React,{useState} from 'react';
import {connect} from "react-redux";
import {addTodo, completeTodo, deleteTodo} from "./actions";
import './App.css';


function App(props) {
  console.log(props)
    const [baslik,setBaslik] = useState("");
  return (
    <div className={"flex flex-col justify-center items-center py-4"}>
        <h1 className={"text-3xl"}>Yapılacaklar Listesi</h1>
          <div className={"flex flex-row  my-3 p-3"}>
            <input type="text" placeholder="Listeye ekle" className={"border rounded-lg px-3 py-1 mr-3"} onKeyPress={e =>{if(e.key ==='Enter'){ props.addTodo(baslik);setBaslik("");e.target.value=""}}} onChange={(e)=>setBaslik(e.target.value)} />
            <button className={"bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"} onClick={()=>{props.addTodo(baslik);setBaslik("")}}>Ekle</button>
          </div>
        <div>
            <h2 className={"text-2xl"}>Yapılacaklar</h2>
            <ul>
              {props.liste.map((item)=>(
                    <li key={item.id} className={`flex py-2 mt-2 border-b justify-between items-center hover:bg-gray-50 px-3 cursor-pointer ${item.tamamlandi?'line-through':''}` } onClick={()=>props.completeTodo(item.id)}>
                        <span className={"mr-5"}>{item.baslik}</span>
                        <div>
                            <button className={"bg-red-300 hover:bg-red-400 px-4 py-2 rounded-lg"} onClick={()=>props.deleteTodo(item.id)}>Sil</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}
const mapStateToProps = (state) => {
    return{
        liste:state.liste
    }
}
export default connect(mapStateToProps,{addTodo,deleteTodo,completeTodo})(App);

