/* eslint-disable @typescript-eslint/no-unused-vars */
namespace AUTH {
  type PostLoginRequest = {
    email: string;
    password: string;
  };
  type PostLoginResponse = {
    token: string;
    authority: boolean;
  }

  type PostRegistrRequest = {
    email: string;
    password: string;
    userName: string;
  };
  type PostRegistrResponse = {
    _id: number;
    email: string;
    password: string;
    userName: string;
    __v: number;
  };
}