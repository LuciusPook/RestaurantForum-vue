import { apiHelper } from './../utils/helpers'


export default {
  create({ restauratId, text }) {
    return apiHelper.post('/comments', {
      restauratId,
      text
    })
  },
  delete({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`)
  }
}