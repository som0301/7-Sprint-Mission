import React from "react";
import InputField from "./InputField";
import { AuthFormProps, FieldInfo } from "../../../types/Auth";

const fields: FieldInfo[] = [
  {
    id: "email",
    name: "email",
    label: "이메일",
    placeholder: "이메일을 입력해주세요",
    autoComplete: "email",
    type: "email",
    required: true,
    errorMessage: "이메일을 입력해주세요.",
  },
  {
    id: "nickname",
    name: "nickname",
    label: "닉네임",
    placeholder: "닉네임을 입력해주세요",
    autoComplete: "nickname",
    type: "text",
    errorMessage: "닉네임을 입력해주세요.",
  },
  {
    id: "password",
    name: "password",
    label: "비밀번호",
    placeholder: "비밀번호를 입력해주세요",
    autoComplete: "new-password",
    type: "password",
    required: true,
    errorMessage: "비밀번호를 입력해주세요.",
  },
  {
    id: "confirmPassword",
    name: "confirmPassword",
    label: "비밀번호 확인",
    placeholder: "비밀번호를 다시 입력해주세요",
    autoComplete: "new-password",
    type: "password",
    required: true,
    errorMessage: "비밀번호가 일치하지 않습니다.",
  },
];

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const filteredFields =
    mode === "login"
      ? fields.filter((field) => ["email", "password"].includes(field.name))
      : fields;

  const buttonText = mode === "login" ? "로그인" : "회원가입";

  return (
    <>
      <form method="post" id={mode} className="form">
        {filteredFields.map((field) => (
          <InputField key={field.id} field={field} />
        ))}
        <button className="button pill-button acc-button">{buttonText}</button>
      </form>
    </>
  );
};

export default AuthForm;
