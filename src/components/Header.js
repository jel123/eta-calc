import PropTypes from 'prop-types'
import CalcBtn from './CalcBtn'

const Header = ({ title }) => {
    return (
        <header className='eta-header'>
            <h1>{ title }</h1>
            <CalcBtn />
        </header>
    )
}

Header.defaultProps = {
    title: 'ETA'
}

Header.prototype = {
    title: PropTypes.string.isRequired
}

export default Header
