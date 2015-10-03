var O = require('observed')
var things = {id: 1, owner: '', data: { data: false } }
var ee = O(things)
 
publishLevel(12, {data: true}).then(function(level_data) {
  things = level_data;
  console.log(things);
});

ee.on('add', console.log)

async function publishLevel(user_id, level_data) {
  var user = await getUser(user_id);
  var can_create = await canCreate(user);

  if (!can_create) {
    return null;
  }

  var level = await saveLevel(user, level_data);

  return level;
}

function getUser(user_id) {
  return new Promise(function(resolve) {
    
      resolve({
        id: user_id,
        nickname: 'tlhunter'
      });
    
  });
}

function canCreate(user) {
  return new Promise(function(resolve) {
    
      resolve(user.id === 12);
    
  });
}

function saveLevel(user, data) {
  return new Promise(function(resolve) {
    
      resolve({
        id: 100,
        owner: user.nickname,
        data: data
      });
    
  });
}