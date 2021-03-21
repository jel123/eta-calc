import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const CalcBtn = ({ text }) => {
    return (
        <div className="nav-list">
            <ul className="calc-list">
                <li><Link to='/'>Calculator</Link></li>
                <li><Link to='/breakdown'>Task Breakdown</Link></li>
            </ul>
        </div>
    )
}

CalcBtn.defaultProps = {
    text: PropTypes.string
}

export default CalcBtn
