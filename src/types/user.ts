export interface ICurrentUser {
  id: number;
  username: string;
  email: string;
}

export interface ILoginUserPayload {
  username: string;
  password: string;
}

export interface ILoginUserResponse {
  user: ICurrentUser;
  token: string;
}

export interface ISignUpUserPayload {
  username: string;
  email: string;
  password: string;
}
export interface ISignUpUserResponse {
  user: ICurrentUser;
}

export interface IGetUserResponse {
  user: ICurrentUser;
  token: string;
}
