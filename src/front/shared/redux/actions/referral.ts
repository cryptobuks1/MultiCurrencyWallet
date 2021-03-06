import request from 'common/utils/request'
import URL from 'url-parse'


const newReferral = (ethAddress) => {

  const { query } = new URL(window.location.href, 1, true)
  if (query.ref) {
    request.get(`https://wiki.swaponline.io/affiliate.php?referral=${query.ref}&action=add_referrer&address=${ethAddress}`)
  }
}

export default {
  newReferral,
}
