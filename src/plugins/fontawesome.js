import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Regular icons
import {
    faHome,
    faUser,
    faStar,
    faEnvelope,
    faMoon,
    faSun,
    faCircleCheck,
    faClock,
    faCalendar
} from '@fortawesome/free-regular-svg-icons'

// Solid icons
import {
    faCode,
    faArrowRight,
    faAward,
    faMugHot,
    faScrewdriverWrench,
    faList,
    faTableCells,
    faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons'
// Brand icons
import { faHotjar, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(
    faHome,
    faUser,
    faStar,
    faEnvelope,
    faMoon,
    faSun,
    faCode,
    faArrowRight,
    faHotjar,
    faGithub,
    faLinkedin,
    faCircleCheck,
    faAward,
    faScrewdriverWrench,
    faMugHot,
    faClock,
    faList,
    faTableCells,
    faArrowUpRightFromSquare,
    faCalendar

)

export default FontAwesomeIcon