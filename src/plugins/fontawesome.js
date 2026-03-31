import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Regular icons
import {
    faHome,
    faUser,
    faStar,
    faEnvelope,
    faMoon,
    faSun
} from '@fortawesome/free-regular-svg-icons'
// Solid icons
import {
    faCode,
    faArrowRight
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
    faLinkedin
)

export default FontAwesomeIcon