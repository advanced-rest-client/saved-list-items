/* global chance */
const DataGenerator = {};

DataGenerator.generateHistoryItem = () => {
  var isPayload = chance.bool();
  var payloadMethods = ['POST', 'PUT', 'DELETE', 'OPTIONS'];
  var otherMethods = ['GET', 'HEAD'];
  var headersSize = chance.integer({
    min: 0,
    max: 10
  });
  var headers = '';
  for (var i = 0; i < headersSize; i++) {
    headers += 'X-' + chance.word() + ': ' + chance.word() + '\n';
  }
  if (isPayload) {
    headers += 'content-type: application/x-www-form-urlencoded';
  }
  var payload = isPayload ? chance.paragraph() : '';
  var d = new Date();
  var randomDay = chance.date({year: d.getFullYear(), 'month': d.getMonth()});
  var t = randomDay.getTime();
  var requestName = chance.sentence({words: 2});
  var item = {
    url: chance.url(),
    method: chance.pick(isPayload ? payloadMethods : otherMethods),
    headers: headers,
    payload: payload,
    created: t,
    updated: t,
    type: 'saved',
    name: requestName
  };
  item._id = encodeURIComponent(requestName) +
    '/' + encodeURIComponent(item.url) + '/' + item.method;
  return item;
};

DataGenerator.generateRequests = function(size) {
  var list = [];
  for (var i = 0; i < size; i++) {
    list.push(DataGenerator.generateHistoryItem());
  }
  return list;
};
