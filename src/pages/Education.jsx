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
            <div className="heading"><span className='head'>B-Tech</span>(completed)</div>
            <p>B-Tech in Computer Science  and Engineering<br /> <div className="heading">from:</div> 
            Delhi Institute of Technology & Research Management.{`[2019-2023]`} </p>
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