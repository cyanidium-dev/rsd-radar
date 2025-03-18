import { IDatoCMSData } from "@/shared/types";
import { executeQuery, ExecuteQueryOptions } from "@datocms/cda-client";

export const performRequest = (
  query: string,
  options?: ExecuteQueryOptions
) => {
  return executeQuery(query, {
    ...options,
    token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN as string,
  });
};

export const SITE_DATA_QUERY = `
  query SiteData {
    allContacts {
      id
      phoneNumber
    }
    price {
      id
      uahPrice
      eurPrice
    }
      email {
      id
      email
      }
  }
`;

export const fetchSiteData = async (): Promise<IDatoCMSData> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await performRequest(SITE_DATA_QUERY);
    return {
      contacts: response?.allContacts || [],
      price: response?.price || { id: "", uahPrice: 0, eurPrice: 0 },
      email: response?.email || { id: "", email: "" },
    };
  } catch (error) {
    console.error("Error fetching site data:", error);
    return {
      contacts: [],
      price: { id: "", uahPrice: 0, eurPrice: 0 },
      email: { id: "", email: "" },
    };
  }
};
