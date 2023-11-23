import './Copyright.scss';
import Paragraph from '../../Paragraph/Paragraph';
import {NavLink} from 'react-router-dom';
import {paths} from '../../../common/url';
function Copyright () {
    return (
        <div className="copyright">
            <Paragraph>Copyright ©</Paragraph>
            <div className="copyright__title">
                <NavLink to={paths.MAIN}>Organick</NavLink>
            </div>
        </div>
    )
}

export default Copyright;