import React from 'react'
import "../styles/Resume.css"

export default function Resume() {
  return (
    <div className='resume'> 
      <div className='resume-aboutme'>
      <h2>Cinthia Pruitt's Resume </h2>
      <h3>Professional Experience </h3>
      <div className="resume-icons">
        Icons Coming Soon.... email, Linkedin, Phone, Github 
    </div>
    </div>
      <div className='skills-resume'>
          <ol className='experience'>
            <li className='experience-item'> 
              <h3>Accenture</h3>
              <h4>Digital Account Manager </h4>
              <h5> 6/2022 - Present </h5>
              <div className='experience-bullets'>
                <li>
                Assemble in-depth presentations for clients which tell a story about their advertisers KPIs, and performance.
                </li>
                <li>
                Aid the client in identifying opportunities for growth for upsells, revenue generation, efficiencies, and relationship management.
                </li>
                <li>
                Develop and execute comprehensive social media strategies for enterprise clients in the Consumer Packaged Goods industry.
                </li>
                </div>
            </li>
            <li className='experience-item'> 
              <h3>Cardinal Digital Marketing</h3>
              <h5> 3/2020 - 6/2022 </h5>
              <h4> Senior Sales Executive</h4>
              <div className='experience-bullets'>
                <li>
                Spearheaded the Enterprise sales department, a new initiative, which saw a 120%  revenue growth in 2 years by successfully onboarding 18 new partnerships. 
                </li>
                <li>
                Developed  in-depth presentations containing digital marketing audits of current marketing efforts for several stakeholders in private equity groups, developed partnership contracts, and negotiated contract terms and fees. 
                </li>
                <li>
                Recommended proper digital channels to prospective clients to help with lead generation efforts through self-taught strategies in SEO, Paid Search, and Paid Social. 
                </li>
                </div>
            </li>
          </ol>
      </div>
      </div>
  )
}
