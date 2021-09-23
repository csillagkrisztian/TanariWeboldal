import React, {useState} from 'react';
import './App.css';

function Valami(props) {
  return <p>{props.valami}</p>
}

function App() {

  const profile1 = {
    name:'Csillag Krisztian',
    paragraph:'Tanitok programozast',
    image:'https://scontent-ams4-1.xx.fbcdn.net/v/t1.6435-1/p160x160/125482754_3875961809082824_6965142187480618367_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=blLGUDvoYz0AX-C2UmW&_nc_oc=AQlMbwcSd9-DTlCMtt1iTMxXJg0SD9B_B_sCjjJKNIuK3D8aOARXgJsRdNE3RVKbnlj4RbqWa7-KS6MuYYGdi4eU&_nc_ht=scontent-ams4-1.xx&oh=001a5eee5b1041aff476c57682bab969&oe=615FE3B0',
    like:false,
  }

  const profile2 = {
    name:'Blala',
    paragraph:'Tanitok programozast',
    image:'https://live.staticflickr.com/5056/5563677179_f16fc58afb_c.jpg',
    like:false,
  }

  const initialDatabase = [
    profile1,
    profile2,
    {
      name:"Cica",
      paragraph:'MIVA',
      image:'',
      like:false,
    }
  ]

  // 1 state - adat, amely a pillanatnyi adatot jelkepezi
  // 2 setState - funkcio, amelyel kicseljuk a pillanatnyi adatot
  // 3 useState() - aminek az argumentuma a kezdo pillanatnyi adat

  
  const initialNumber = 0;
        //1        2             3
  const [number, setNumber] = useState(initialNumber);
  const [database, setDatabase] = useState(initialDatabase);
  const {name,paragraph,image,like} = database[number];

  return (
    <div style={{
      textAlign:'center'
    }}>
      {/** 
       * <{definicio}> {tartalom} </{definicio}>
       */}
      <h1>{name}</h1>
      <img src={image} alt={"profile"}/>
      <p>{paragraph}</p>
      <input type={'email'}></input>
      <br/>
      <Valami></Valami>
      <button>SEND</button>
      <br></br>
      <br></br>
      <button onClick={()=>{
        setDatabase(database.map((profile)=>{
          if(profile.name === name) {
            profile.like = !like;
          }
          return profile;
        }))
      }}>{ like ? 'Unlike' : 'Like' }</button>
      <br></br>
      <button onClick={()=>{if(0 !== number)setNumber(number-1)}}>Prev</button>
      <button onClick={()=>{if(database.length-1 !== number)setNumber(number+1)}}>Next</button>
      
      <p style={{marginTop:'128px'}}>Copyright is for Csillag Krisztian</p>
      <button>Mennye az oldara</button>
    </div>
  );
}

export default App;
