import Sample from './components/Sample'
import './App.css'
import style from'./style.module.css'
import Random from './components/Random'
import { useState } from 'react'
import Tudo from './components/Tudo';
function App() {
  const [userDetails,setUserDetails] = useState("")

  const username='vishnu'
  const heandleGetdata=(data)=>{
    setUserDetails(data)
}
  return (
    <>
      <h1 style={{color:'red',fontSize:'50px',textAlign:'center'}} id='' className='head'>My First React Project</h1>
      <label htmlFor="">Username : {username}</label>
      <div  className="border p-3 rounded d-flex">
        <input style={{width:'650px'}} type="text" onChange={(e)=>heandleGetdata(e.target.value)} placeholder='Enter Your Name !!!' className='form-control'/>
     { userDetails ? <div className="result ms-5">Output:{userDetails}</div>:<div className="result ms-5">Nothing to display</div>}
      </div>
      <p className={style.group1}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas tenetur quam ducimus eaque enim itaque quae alias velit nulla optio at adipisci, vel officia molestiae rerum tempore. Ipsa, iste doloribus!
      Sed maxime corporis, rem veritatis, sequi labore in voluptatum ipsam ea accusamus veniam velit, harum totam rerum aperiam vero aliquid mollitia minima minus quod! Neque consequatur iusto minima ad perferendis!
      Soluta eaque alias nulla molestias, autem officiis dolorem possimus veniam hic fugiat natus porro repellat ad vero asperiores reprehenderit nostrum tempora non illo consequuntur excepturi omnis facere dicta cupiditate? Eum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure veritatis fugit assumenda natus perspiciatis hic molestias, qui quod autem eaque laudantium, tenetur, est voluptates consectetur! Sapiente nihil incidunt amet saepe!</p>
      <Random/>
      <Sample/>
      <Tudo/>
    </>
  )
}

export default App
