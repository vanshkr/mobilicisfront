import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const backendApi = createApi({
  reducerPath: "backendApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/`,
  }),
  endpoints: (builder) => ({
    getBMWOrMercedesOwnersWithLowIncome: builder.query({
      query: () => `/low_income`,
    }),
    getMaleUsersWithExpensivePhones: builder.query({
      query: () => `/expensive_phones`,
    }),
    getUsersWithLastNameAndQuoteRequirements: builder.query({
      query: () => `/quote_requirements`,
    }),
    getLuxuryCarOwnersWithNoDigitsInEmail: builder.query({
      query: () => `/luxury_cars`,
    }),
    getTopCitiesByUserCountAndIncome: builder.query({
      query: () => `/top_cities`,
    }),
  }),
});

export const {
  useGetBMWOrMercedesOwnersWithLowIncomeQuery,
  useGetLuxuryCarOwnersWithNoDigitsInEmailQuery,
  useGetMaleUsersWithExpensivePhonesQuery,
  useGetTopCitiesByUserCountAndIncomeQuery,
  useGetUsersWithLastNameAndQuoteRequirementsQuery,
} = backendApi;
