function succeed(item) {
  return { ...item };
}

function fail(item) {
  if (item.enhancement === 20) {
    return { ...item }
  } else {
    return { 
      ...item,
      enhancement: item.enhancement + 1
    }
  }

  return { ...item };
}

function repair(item) {
  return { 
    ...item, 
    durability: 100 
  }
}

function get(item) {
  return { ...item };
}

module.exports = {
  succeed,
  fail,
  repair,
  get,
};