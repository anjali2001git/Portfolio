import { useEffect, useState } from "react";
import ProjectsList from "../projectsList/ProjectsList";
import "./projects.scss";
import Button from 'react-bootstrap/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {fullStackProjects,frontEndProjects, backendProjects} from "../../data/ProjectsData";

function Projects() {
  const [selected,setSelected]=useState("full Stack");
  const [data,setData]=useState([]);
    
   const list=[
    {
      id:"full Stack",
      title:"Full Stack"
    },
    {
      id:"frontend",
      title:"Frontend"
    },
    {
      id:"backend",
      title:"Backend"
    }
];
  useEffect(()=>{
      switch(selected){
        case "full Stack":
          setData(fullStackProjects);
          break;
          case "frontend":
          setData(frontEndProjects);
          break;
          case "backend":
            setData(backendProjects);
            break;
          default:
            setData(fullStackProjects);
      }
  },[selected]);
  return (

    <div class="heavy-rain-gradient color-block mb-3 mx-auto rounded-circle z-depth-1-half">
    <div className="projects" id="projects">
     <h1>PROJECTS</h1>
      <ul>
       {list.map((item)=>(
        <ProjectsList 
         title={item.title}
         active={selected===item.id} 
         setSelected={setSelected}
         id={item.id}
         />
       ))}
      </ul>
      
     
      <div className="container">
        {data.map(d=>(
          <div className="contain">
          <div className="item">
           <img src={d.img} alt="" />
           <h3>{d.title}</h3>  
          </div>
          <div className="content">
              {d.details}
          </div>
            <div className='display-projects-link-div'>
               <a href={d.link} target="_blank" rel="noopener noreferrer">
               <Button variant="outline-primary">Explore <ArrowRightAltIcon/></Button></a>
            </div>
        </div>
        ))}
         
      </div>

    </div>

    </div>
  );
 }
export default Projects;