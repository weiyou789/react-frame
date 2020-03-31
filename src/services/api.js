import axios from 'axios'
import { ccpUrl } from './config'


export const findNesting = (params) => axios.get(ccpUrl + `/common/region/provinces/nesting`, { params })

