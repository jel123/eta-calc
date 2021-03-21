import PropTypes from 'prop-types'

const CalcResult = ({totalHourMin, totalAbs, setShow, snipShow, setShowSnipDec, showSnipDec}) => {
  return (
    <div className={`list-wrapper ${totalAbs.slide ? 'slideDown' : ''}`}>
        <div className="decimal">
        <h2> Decimal Hours </h2>
            <ul>
                {
                    Object.entries(totalAbs).map(([key, value]) => {
                    return (<li  key={`${key}-keys`} >{key}: {value}</li>)
                    })
                }
            </ul>
            <button className='btn' onClick={() => setShow(!snipShow)}>Generate Jira Snippet</button>
            <textarea className={snipShow ? 'showText' : ''} value= {`
                    ||BEGIN WORK|| ||
                    |*UNDERSTAND TICKET:*|yes|
                    |*TO-DO:*|Reviewed the ticket. Added ETA:
                    T:  ${totalAbs.target}
                    H:  ${totalAbs.high}
                    L:  ${totalAbs.low}|
                    |*ASSIGNED TO CORRECT PERSON:*|yes|
                    |*TICKET CORRECT STATUS:*|yes|
                    |*HOURS LOGGED:*|yes|
                    `}>
                </textarea>
        </div>

        <div className="hour-min">
            <h2> Hour / Min</h2>
            <ul>
                {
                    Object.entries(totalHourMin).map(([key, value]) => {
                    return (<li  key={`${key}-keys`} >{key}: {value}</li>)
                    })
                }
            </ul>
            <button className='btn' onClick={() => setShowSnipDec(!showSnipDec)}>Generate Jira Snippet</button>
                <textarea className={showSnipDec ? 'showText' : ''} value= {`
                    ||BEGIN WORK|| ||
                    |*UNDERSTAND TICKET:*|yes|
                    |*TO-DO:*|Reviewed the ticket. Added ETA:
                    T:  ${totalHourMin.target}
                    H:  ${totalHourMin.high}
                    L:  ${totalHourMin.low}|
                    |*ASSIGNED TO CORRECT PERSON:*|yes|
                    |*TICKET CORRECT STATUS:*|yes|
                    |*HOURS LOGGED:*|yes|
                    `}>
                </textarea>
         </div>
    </div>
  )
 
}


CalcResult.propTypes = {
    totalHourMin: PropTypes.object,
    totalAbs: PropTypes.object,
    setShow: PropTypes.func,
    snipShow: PropTypes.bool,
    setShowSnipDec: PropTypes.func,
    showSnipDec: PropTypes.bool
}

export default CalcResult
