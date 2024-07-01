export const validateEmail = (email: string): boolean => {
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailReg.test(email);
};

export const validatePassword = (password: string): boolean => {
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/;
  return passwordReg.test(password);
};

export const validateNickname = (nickname: string): boolean => {
  return nickname.trim() !== "";
};

export const validatePasswordConfirm = (
  password: string,
  passwordConfirm: string,
): boolean => {
  return password === passwordConfirm;
};
