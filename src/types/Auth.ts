export interface AuthFormProps {
  mode: "login" | "signup";
}

export interface FieldInfo {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  autoComplete: string;
  type?: string;
  className?: string;
  required?: boolean;
  errorMessage: string;
}
