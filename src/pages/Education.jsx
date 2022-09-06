import React from 'react'
import '../Css/Education.css'
const Education = () => {
    const ed ="<Education>";
    const ed1 ="</Education>";

  return (
    <div className='Education' id='education'>
        {ed}
        <h1>Education</h1>
        <div className="edu">
            <div className="heading1"><span className='head'>B-Tech</span>(pursuing)</div>
            <p>Pursuing B.tech 4th year in Computer Science <br /> from Delhi Institute of Technology & Research Management.</p>
        </div>
        <div className="edu">
            <div className="heading"><span className='head'>12th</span>(completed)</div>
            <p>Passout 12th from HBSE.</p>
        </div>
        <div className="edu">
            <div className="heading"><span className='head'>10th</span>(completed)</div>
            <p>Passout 12th from HBSE.</p>
        </div>
        {ed1}
    </div>
  )
}

export default Education