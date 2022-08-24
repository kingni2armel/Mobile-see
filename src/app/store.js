import { configureStore } from "@reduxjs/toolkit"
/**auth */
import loginReducer from "../features/auth/loginSlice"
import registerReducer from "../features/auth/registerSlice"
import deleteReducer from "../features/auth/deleteSlice"
import updateReucer from "../features/auth/updateSlice"
import finduserReducer from "../features/auth/finduserSlice"
import resetpasswordReducer from "../features/auth/resetpasswordSlice"
import getalluserReducer from "../features/auth/getalluserSlice"
/**alert */
import createalertReducer  from "../features/alert/createalertSlice"
import updatealertReducer from "../features/alert/updatealertSlice"
import deletealertReducer from "../features/alert/deletealertSlice"
import getallalertReducer from "../features/alert/getallalertSlice"
import getonealertReducer from "../features/alert/getonealert"
/***announcement */
import createannouncementReducer from "../features/announcement/createannouncementSlice"
import updateannouncementReducer from "../features/announcement/updateannouncementSlice"
import deleteannouncementReducer from "../features/announcement/deleteannouncementSlice"
import getallannouncementReducer from "../features/announcement/updateannouncementSlice"
import getoneannouncementReducer from "../features/announcement/getoneannouncementSlice"

/***flight proposal */
import createflightproposalReducer from "../features/flightproposal/createflightproposalSlice"
import updateflighhtproposalReducer from "../features/flightproposal/updateflightproposalSlice"
import deleteflightproposalReducer from "../features/flightproposal/deleteflightproposalSlice"
import searchflightproposalReducer from "../features/flightproposal/getoneflightproposalSlice"
import getallflightproposalReducer from "../features/flightproposal/getallflightproposalSlice"


const store = configureStore= {
/**auth */
login:loginReducer,
register:registerReducer,
deleteusers:deleteReducer,
getoneuser:finduserReducer,
getAllusers:getalluserReducer,
resetpasswords:resetpasswordReducer,
/**alert */
createalerts:createalertReducer,
deletealerts:deletealertReducer,
updatealerts:updatealertReducer,
getonealerts:getonealertReducer,
allalerts:getallalertReducer,
/**announcement */
createannoucements:createannouncementReducer,
deleteannoucements:deleteannouncementReducer,
updateannoucements:updateannouncementReducer,
getallannouncements:getallannouncementReducer,
getoneannouncements:getoneannouncementReducer,
/***flight proposal */
createflightproposals:createflightproposalReducer,
updateflightproposals:updateflighhtproposalReducer,
deleteflightproposals:deleteflightproposalReducer,
searchflightproposals:searchflightproposalReducer,
getallFlightproposals:getallflightproposalReducer














}
