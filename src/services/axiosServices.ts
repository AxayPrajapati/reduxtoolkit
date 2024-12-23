import {AxiosResponse} from 'axios';
import {axiosInstance} from './axiosInstance';

type RequestBody = Record<string, any>; // Adjust type as needed

export const POST = async (
  url: string,
  requestBody: RequestBody,
): Promise<AxiosResponse | any> => {
  try {
    const res: AxiosResponse = await axiosInstance.post(url, requestBody);
    return res;
  } catch (error: any) {
    return error.response.data;
  }
};

export const GET = async (url: string): Promise<AxiosResponse | any> => {
  try {
    const res: AxiosResponse = await axiosInstance.get(url);
    return res;
  } catch (error: any) {
    return error.response.data;
  }
};

export const PATCH = async (
  url: string,
  requestBody: RequestBody,
): Promise<AxiosResponse | any> => {
  try {
    const res: AxiosResponse = await axiosInstance.patch(url, requestBody);
    return res;
  } catch (error: any) {
    return error.response;
  }
};

export const DELETE = async (
  url: string,
  requestBody?: RequestBody,
): Promise<AxiosResponse | any> => {
  try {
    const res: AxiosResponse = await axiosInstance.delete(url, {
      data: requestBody,
    });
    return res;
  } catch (error: any) {
    return error.response;
  }
};
