function validUsername(username: string) {
  if (!username) {
    const message = '"username" is required';
    return ({ status: 400, message });
  }
  
  if (typeof username !== 'string') {
    const message = '"username" must be a string';
    return ({ status: 422, message });
  }
  
  if (username.length <= 2) {
    const message = '"username" length must be at least 3 characters long';
    return ({ status: 422, message });
  }
  
  return null;
}
  
function validVocation(vocation: string) {
  if (!vocation) {
    const message = '"vocation" is required';
    return ({ status: 400, message });
  }
  
  if (typeof vocation !== 'string') {
    const message = '"vocation" must be a string';
    return ({ status: 422, message });
  }
  
  if (vocation.length <= 2) {
    const message = '"vocation" length must be at least 3 characters long';
    return ({ status: 422, message });
  }
  
  return null;
}
  
function validLevel(level: number) {
  if (level <= 0) {
    const message = '"level" must be greater than or equal to 1';
    return ({ status: 422, message });
  }
  
  if (!level) {
    const message = '"level" is required';
    return ({ status: 400, message });
  }
  
  if (typeof level !== 'number') {
    const message = '"level" must be a number';
    return ({ status: 422, message });
  }
  
  return null;
}
  
function validPass(password: string) {
  if (!password) {
    const message = '"password" is required';
    return ({ status: 400, message });
  }
  
  if (typeof password !== 'string') {
    const message = '"password" must be a string';
    return ({ status: 422, message });
  }
  
  if (password.length <= 8) {
    const message = '"password" length must be at least 8 characters long';
    return ({ status: 422, message });
  }
  
  return null;
}
  
export default {
  validUsername,
  validVocation,
  validLevel,
  validPass,
};