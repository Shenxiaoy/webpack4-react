import baseUrl from '../baseUrl'
import r from '../utils'
const publicUrl  = baseUrl.diy


export default {
  getTimeHistory: r.get('zeus/train/{id}', publicUrl ),
  list: r.post('batch/batchList', 'list' ),
  detail: r.post('batch/detail', 'detail' ),

}