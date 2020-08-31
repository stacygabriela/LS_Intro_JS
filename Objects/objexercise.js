let objToCopy = {
  foo: 1,
  bar: 2,
};

function copyObj(sourceObject, keys){
  let desitnationObject = {};

  if (keys){
    keys.forEach(function(key) {
      desitnationObject[key] = sourceObject[key];
    });

    return desitnationObject;
  } else {
    return Object.assign(desitnationObject, sourceObject);
  }
}
