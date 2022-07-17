import "./skills.scss";
import {SkillsData,ToolsData} from '../../data/SkillsData'
import DisplaySkills from './DisplaySkills';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { useState, useEffect } from "react";

function Skills() {
  const [selected,setSelected]=useState("techSkills");
  const [data,setData]=useState([]);

  const list1=[
    {
      id:"techSkills",
      title:"Tech Skills"
    },
    {
      id:"toolsAndPlatforms",
      title:"Tools and Platforms"
    }
];
useEffect(()=>{
  switch(selected){
    case "techSkills":
      setData(SkillsData);
      break;
      case "toolsAndPlatforms":
      setData(ToolsData);
      break;
      default:
        setData(SkillsData);
  }
},[selected]);

  const stars = (a) => {
    var list=[];
    var i;
    for(i=0; i<a; i++) {
      list.push(<StarIcon key={i}fontSize="small"/>);
    }
    for(i=0; i<5-a; i++) {
      list.push(<StarOutlineIcon key={a+i} fontSize="small"/>);
    }  
    return list ;
  }
  return (
    <div className='abilities'id="skills">
       <h1>Abilities</h1>
      “Life without knowledge is death in disguise.”
      <br /> - Talib Kweli
      <hr />
      
      
      <div className='abilities-tab-div'>
      <ul>
          {list1.map((item)=>{
              return(<DisplaySkills
                 title={item.title} 
                 active={selected===item.id}
                 setSelected={setSelected}
                 id={item.id}
                 />);
          })}
        </ul>
      </div>
      
      <div className="display-ability">
        {data.map(d=>(
          <div className="container"><div className='display-ability-name'>
            {d.name}
          </div><div className='display-ability-rating'>
              {stars(d.rating)}
            </div></div>
      
        ))}
      </div>
     

    </div>
  )
}

export default Skills