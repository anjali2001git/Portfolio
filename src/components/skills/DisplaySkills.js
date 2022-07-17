import "./Skills"
import "./skills.scss";


const DisplaySkills= ({id,title,active,setSelected}) => {

  return (
    <li className={active ?"list active":"list"}
    onClick={()=>setSelected(id)}>
        {title}
        
    </li>
    
  )
}

export default DisplaySkills;