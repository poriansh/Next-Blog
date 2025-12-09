import { addToast } from "@heroui/react";
import http from "./htttpServices";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useRequest = ({
  queryKey,
  url,
  method = "get",
  params,
  data,
  headers = {},
  staleTime = 0,
  enabled = true,
  refetchOnWindowFocus = false,
  cacheTime,
  successCallback,
  errorCallback,
  select,
  customBaseUrl,
  showErrorToast = false,
  colorError = "danger",
}) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const base = customBaseUrl || http;
      const config = {
        method,
        url,
        params,
        data,
        headers,
      };

      try {
        const response = await base(config);
        return response.data?.data || response.data;
      } catch (error) {
        if (showErrorToast) {
          addToast({
            description: error?.response?.data?.message,
            color: colorError,
          });
        }
        throw new Error(error?.response?.data?.message || error.message);
      }
    },
    enabled,
    staleTime: staleTime === "Infinity" ? Infinity : staleTime,
    refetchOnWindowFocus,
    cacheTime,
    onSuccess: (data) => {
      successCallback?.(data);
    },
    onError: (error) => {
      errorCallback?.(error.message);
    },
    select,
  });
};

export const useMutate = ({
  url,
  method = "post",
  successCallback,
  errorCallback,
  headers = {},
  preventDefaultMessage = false,
  isFormData = false,
  customBaseUrl,
}) => {
  return useMutation({
    mutationFn: async ({ id, query, requestUrl }) => {
      const finalUrl = requestUrl || `${url}${id ? `/${id}` : ""}`;
      const base = customBaseUrl || http;

      const config = {
        method,
        url: finalUrl,
        data: isFormData ? query : JSON.stringify(query),
        headers: {
          ...(isFormData ? {} : { "Content-Type": "application/json" }),
          ...headers,
        },
      };

      try {
        const response = await base(config);
        return {
          ...response.data,
          data: response.data?.data,
          statusMessage: response.data?.message,
        };
      } catch (error) {
        throw new Error(error?.response?.data?.message || error.message);
      }
    },
    onSuccess: (data) => {
      successCallback?.(data);
      !preventDefaultMessage &&
        addToast({
          description: data.statusMessage || "عملیات با موفقیت انجام شد",
          color: "success",
          timeout: 1500,
          shouldShowTimeoutProgress: true,
        });
    },
    onError: (error) => {
      errorCallback?.(error.message);
      !preventDefaultMessage &&
        addToast({
          description: error.message,
          color: "danger",
          timeout: 1500,
          shouldShowTimeoutProgress: true,
        });
    },
  });
};

export const keyHandler = (key) => {
  return {
    predicate: (query) => query.queryKey.includes(key),
  };
};
