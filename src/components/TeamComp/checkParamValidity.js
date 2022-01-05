const checkParamValidity = (linkParam) => {
  const param = JSON.parse(atob(linkParam));
  if (typeof param === 'object' && param !== null) {
    if (Object.keys(param).length === 2) {
      if (
        ['reverseFormation', 'team'].every((key) => param.hasOwnProperty(key))
      ) {
        if (typeof param.reverseFormation === 'boolean') {
          if (Array.isArray(param.team)) {
            if (param.team.length === 5) {
              return param;
            } else {
              return false;
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export default checkParamValidity;
