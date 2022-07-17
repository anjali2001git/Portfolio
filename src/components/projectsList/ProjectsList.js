import "./projectsList.scss";

function ProjectsList({id,title,active,setSelected}) {
  return (
    <li className={active?"projectsList active":"projectsList"}
     onClick={()=>setSelected(id)}>
     {title}
    </li>
  )
}

export default ProjectsList