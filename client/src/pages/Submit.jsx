import React, { useEffect, useState } from 'react'
import '../assets/stylesheets/highlighting.css'

const Submit = ({ text }) => {
    const [keywords, setKeywords] = useState(null)
    const [billings, setBillings] = useState(null)
    const [inputDataArray, setInputDataArray] = useState(null)
    const [highlightedWords, setHighlightedWords] = useState([])
    var dataToSend;
    var tempArr = []
      

    const fetchData = async () => {
        try {
            dataToSend = `${text.subjective} ${text.objective} ${text.assessment} ${text.plan}`;
            setInputDataArray(dataToSend.split(/[,\.\s]+/))

        //   `This is a 61 yo gentleman with h/o CVA, HTN, hyperlipidemia, seizure d/o, cocaine abuse, and
        //   medication noncompliance who presents with increasing right sided weakness and dysarthria of
        //   unknown duration less than one day, concerning for TIA versus CVA. Given the patient’s
        //   history of previous stroke and well as noncompliance with medications, either of these would be
        //   most likely. Although less likely, other possibilities to explain this presentation include seizure,
        //   hypertensive urgency versus emergency, or intoxication versus withdrawal of drugs. With
        //   history of seizures, previous brain injury (CVA), and chronic cocaine abuse, recurrence of
        //   seizure could explain his presentation. However, his wife reports previous seizure episodes were unlike these recent symptoms, and his last seizure was approx 3 years ago. The patient also has a
        //   history of uncontrolled hypertension and noncompliance with medications. His significantly
        //   elevated BP probably is chronically high but could be elevated due to acutely increased
        //   intracranial pressure. He has no complaints of headache, changes in vision, or nausea/vomiting.
        //   Finally, although his drug usage probably contributed to these recent symptoms through
        //   mechanisms of cerebral ischemia via vasoconstriction, the presentation would be very atypical
        //   for acute intoxication or withdrawal.`

          const response = await fetch(`http://localhost:5000/api`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: dataToSend }),
          });
      
          const result = await response.json();
          
          setKeywords(result[0]);
          setBillings(result[1]);

          result[0].map(item => {
            tempArr.push(item)
          })

          function removeDuplicates(arr) { 
            return arr.filter((item, 
                index) => arr.indexOf(item) === index); 
            } 

        tempArr = removeDuplicates(tempArr)

        tempArr = tempArr.map(item => {
            return item.text.content;
        })

        setHighlightedWords(tempArr)

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
        if (text !== '') {
            fetchData()
        }
      }, [])

      console.log(highlightedWords)
    
    return (
        <>
            <div style={{ backgroundColor: 'white' }}>
                {inputDataArray &&
                    inputDataArray.map((item, index) => (
                    highlightedWords.indexOf(item) !== -1 ? (
                        <span style={{color: 'red'}} key={index} className='highlighted'>{item} </span>
                    ) : (
                        <span key={index}>{item} </span>
                    )
                    ))}
                </div>

            {keywords && keywords.map(item => {
                return <h1 style={{color: 'white'}} key={item.mentionId}>{item.text.content}</h1>
            })}

            {billings && billings.map(item => {
                return <h1 style={{color: 'white'}} key={item.title}>{item.title} {item.fee}</h1>
            })}
        </>
    )
}

export default Submit