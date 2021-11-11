import React from 'react'
import TechCards from './TechCards'
import SkillsCards from './SkillsCards'

const Skills = () => {

  // const [showTechCards, setShowTechCards] = useState(false)
  // const [showSkillsCards, setShowSkillsCards] = useState(false)

  // const handleTechClick = () => {
  //   if (showTechCards === false) {
  //     setShowTechCards(true)
  //   } else {
  //     setShowTechCards(false)
  //   }

  // }
  // const handleSkillsClick = () => {
  //   if (showSkillsCards === false) {
  //     setShowSkillsCards(true)
  //   } else {
  //     setShowSkillsCards(false)
  //   }
  // }


  return (
    <div className="page">
      <div className="skills-container">
        <div className="skill-holder tech-holder">
          <h3 className="page-title">Tech Stack</h3>
          
          {/* {showTechCards ? <TechCards /> : null} */}
          <TechCards />
        </div>
  
        <div className="skill-holder soft-holder">
          <h3 className="page-title">Soft Skills</h3>
          {/* {showSkillsCards ? <SkillsCards /> : null} */}
          <SkillsCards />
        </div>
      </div>
    </div>
  )
}

export default Skills