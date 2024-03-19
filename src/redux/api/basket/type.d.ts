/* eslint-disable @typescript-eslint/no-unused-vars */
namespace BasketProduc {
  type PutProducPluesRequest = {
    _id: number | string;
    quantity: string;
  }

  type PutProducPluesResponse = {
    _id: number | string;
    quantity: string;
  }[];

  type PutProducMinuesRequest = {
    _id: number | string;
    quantity: string;
  }

  type PutProducMinuesResponse = {
    _id: number | string;
    quantity: string;
  }[];
}