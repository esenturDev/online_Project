/* eslint-disable @typescript-eslint/no-unused-vars */
namespace Products {
  type GetProductsRequest = void;
  type GetProductsResponse = {
    _id: number;
    photoUrl: string;
    price: string;
  }[];

  type PostProductsRequest = {
    photoUrl: string;
    price: string;

  };
  type PostProductsResponse = {
    _id: number;
    photoUrl: string;
    price: string;
  }
}