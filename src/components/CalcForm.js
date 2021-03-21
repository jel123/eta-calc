import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle, faCalculator } from '@fortawesome/free-solid-svg-icons'
import CalcResult from './CalcResult'

const CalcForm = () => {
    // Use State
    const [formData, setFormData] = useState({
        firstnum: 0,
        secondnum: 0
    })

    const [errorMsg, setErrormsg] = useState({
        firstnume: false,
        secondnume: false
    });
    
    const [filterNum, setFilteredNum] = useState({})

    const [totalAbs, setTotalAbs] = useState({
        high: 0,
        total: 0,
        low: 0
    })

    const [totalHourMin, setTotalHourMin] = useState({
        high: 0,
        total: 0,
        low: 0
    })

    const [showSnip, setShowSnip] = useState(false)
    const [showSnipDec, setShowSnipDec] = useState(false)

    // validate Input
    const validateNum = (data) => {
        let firstNum =  Number(data.firstnum); 
        let SecondNum =  Number(data.secondnum);
        let secondValidate = isNaN(parseInt(data.secondnum)) || isNaN(SecondNum) ? true : false;
        let firstValidate = isNaN(parseInt(data.firstnum)) || isNaN(firstNum) ? true : false;
          console.log(secondValidate);
        if(firstValidate && secondValidate) {
            setErrormsg({
                firstnume: true,
                secondnume: true
            })

            return false;
        }
         
        if (firstValidate) {
            setErrormsg({
                firstnume: true
            })
            return false;
        }  
        
        else if (secondValidate) {
            setErrormsg({
                secondnume: true,
            })

            return false;
        } 
        
        else {
            setFilteredNum ({
                firstnum: firstNum,
                secondnum: SecondNum
            })

            setErrormsg({
                firstnume: false,
                secondnume: false,
            })
        }
    }

    // On Submit handler
    const onSubmit = (e) => {
        e.preventDefault();
        validateNum(formData);
    }

    const onChange = ({ target }) => {
        setFormData(prevState => ({
              ...prevState, [target.name] : target.value  
        }))
    }


    const calcEta = () => {
        let targetNum = filterNum.firstnum,
            percentageNum = filterNum.secondnum,
            perceCalc = percentageNum / 100,
            initialCalc = targetNum * perceCalc;

        // high, target, low
        let high = targetNum + initialCalc;
        let low = targetNum - initialCalc;

        if(perceCalc > low) {
            low = initialCalc - low;
        };
        getCalculations(+high.toFixed(2), +low.toFixed(2), +targetNum.toFixed(2));
        calcHoursMin(high, low, targetNum)
    }

    const calcHoursMin = (high, low, targetNum) => {
        let highHourMin = (Math.abs(high) - Math.floor(high)) * 60 ,
            targetHourMin = (Math.abs(targetNum) - Math.floor(targetNum)) * 60,
            lowHourMin = (Math.abs(low) - Math.floor(low)) * 60  
            
          let 
          totHigh = +highHourMin.toFixed(0),
          totTarget = +targetHourMin.toFixed(0),
          totLow = +lowHourMin.toFixed(0)
            console.log(totHigh);
            setTotalHourMin({
                high: `${Math.floor(high)}h ${totHigh !== 0 ? totHigh + 'm' : ''}`,
                target: `${Math.floor(targetNum)}h ${totTarget !== 0 ? totTarget + 'm' : ''}`,
                low: `${Math.floor(low)}h ${totLow !== 0 ? totLow + 'm' : ''}`
            })
    }

    const getCalculations = (high, low, targetNum) => {
        setTotalAbs({
            high: high,
            target: targetNum,
            low: low
        })
    }

    useEffect(() => {
        if(Object.keys(filterNum).length !== 0) {
            calcEta();
        } 

    }, [filterNum, showSnip])

    return (
    <div className="formContainer" onSubmit={onSubmit}>
        <h1>CALCULATOR
            <FontAwesomeIcon icon={faCalculator}/>
        </h1>
         <form className='add-form'>
        <div className='form-control'> 
            <label htmlFor='ETA'> ETA <span> * </span> </label>
            <input id='ETA' type='number'  value={formData.firstnum} name='firstnum' onChange={onChange} />
            {errorMsg.firstnume && 
            <p className='error-msg'>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                Please enter a valid Number
            </p> }
        </div>
        <div className='form-control'> 
            <label> Percentage <span> * </span>  </label>
            <input type='number' value={formData.secondnum} name='secondnum' onChange={onChange} />
            {errorMsg.secondnume && 
            <p className='error-msg'>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                Please enter a valid Number
            </p>}
        </div>
        <input type='submit' className='btn btn-calc' value='calculate'/>
    </form>
        <CalcResult 
        totalHourMin={totalHourMin} 
        totalAbs={totalAbs} 
        snipShow={showSnip}
        showSnipDec={showSnipDec}
        setShow={() => setShowSnip(!showSnip)}
        setShowSnipDec={()=> setShowSnipDec(!showSnipDec)}/>
    </div>
    )
}

export default CalcForm
