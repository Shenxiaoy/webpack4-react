import baseUrl from '../baseUrl'
import r from '../utils'
const publicUrl  = baseUrl.diy


export default {
  getTimeHistory: r.post('zeus/train/{id}', publicUrl ),
  list: r.post('zeus/list', publicUrl ),

}