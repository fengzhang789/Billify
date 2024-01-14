import React, { useEffect, useState } from 'react'

const Submit = () => {
    const [data, setData] = useState('');

    const fetchData = async () => {
        try {
          const dataToSend = `Ms. ___ is a 47 year old African American female with Crohn's Disease, DM, and HTN who
          presented to the ED after two days of severe abdominal pain, nausea, vomiting, and diarrhea. She
          stated that on Wednesday evening after being in her usual state of health she began to experience
          sharp lower abdominal pain that radiated throughout all four quadrants. The pain waxed and
          waned and was about a 4/10 and more intense than the chronic abdominal pain episodes she
          experiences periodically from her Crohn’s disease. The pain was sudden and she did not take any
          medications to alleviate the discomfort. The abdominal pain was quickly followed by two
          episodes of partial diarrhea and soft stool that was tan in color with no signs of blood. Her
          abdominal pain continued and she developed nausea and then vomited six times that evening
          before going to sleep. Overnight her abdominal pain worsened and she stayed in bed for most of
          the day on Thursday. She had nausea again all day but had no other episodes of diarrhea or
          vomiting that day and did not eat anything for fear of vomiting. She was able to drink water and
          keep it down. By late Thursday night, her pain had intensified to a 10/10 and she called 911 and
          was brought to the ER by ambulance from her home in Burlington. `;
          const response = await fetch(`http://localhost:5000/api`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: dataToSend }),
          });
      
          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
        fetchData()
      }, [])
    

    return (
        <div style={{color: 'white'}}>{data}</div>
    )
}

export default Submit