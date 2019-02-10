
var appid = 85898;
var secret = '2b0aba12738e409a9678002ad89f98f9';
var param = '?showapi_appid=' + appid + '&showapi_sign=' + secret;

var search = 'https://route.showapi.com/1615-1'+param;
var historyPrice = 'https://route.showapi.com/1615-2'+param;
var idSearch = 'https://route.showapi.com/1615-3'+param;

module.exports = {
  search:search,
  historyPrice:historyPrice,
  idSearch:idSearch
}