import React from 'react'
import "../Components/list.css";
import { FaHome} from "react-icons/fa";
import { FaRuler} from "react-icons/fa";
import { FaGlobe} from "react-icons/fa";
import { FaAward} from "react-icons/fa";
import { BiSearch} from "react-icons/bi";
import { HiOutlineSpeakerphone} from "react-icons/hi";
import { FiPercent} from "react-icons/fi";
import { BiText} from "react-icons/bi";
import { HiLightBulb} from "react-icons/hi";




const list = [
    {
      icon:<FaHome/>,
      title: "THE TLD",
      content: "Does the domain extension math the language of the domain name?",
    },
    {
      icon:<FaRuler/>,
      title: "Domain Length",
      content: "is the domain short enough to remember?",
    },
    {
      icon:<FaGlobe/>,
      title: "Language",
      content: "How complex is the actuall domain name?",
    },
    {
      icon:<FaAward/>,
      title: "International recognition",
      content: "can the domain name be used on an international scale?",
    },
    {
      icon:<BiSearch/>,
      title: "Search Engine",
      content: "Does the domain follow search engine guidelines?",
    },
    {
      icon:<HiOutlineSpeakerphone/>,
      title: "Advertising Potential",
      content: "could the domain be used for advertising campaigns?",
    },
    {
      icon:<FiPercent/>,
      title: "Sales Opportunities",
      content: "can the domain name be used on an international scale??",
    },
    {
      icon:<BiText/>,
      title: "Typo susceptibillity",
      content: "How high is the risk of mistyping the domain name?",
    },
    {
      icon:<HiLightBulb/>,
      title: "Busines Potential",
      content: "can the domain be used as your company address?",
    },
    
  ];
const ReactList = () => {

  return (
    <div className="container">
    {list.map((mapping) => (
      <div className="childs">
         <span>{mapping.icon}</span> 
          <div className='text'>
        <h3>{mapping.title}</h3>
        <p>{mapping.content}</p>
      </div>
      
      
      </div>
      

    ))}
  </div>
  )
}

export default ReactList
