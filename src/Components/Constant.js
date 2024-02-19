import { IconButton } from "@mui/material";

export const rows = [
  {
    id: 1,
    ID: 1077620,
    SHPIIFY: 17713,
    DATE: "22 Jan 2020",
    STATUS: "Pending",
    CUSTOMER: "Ahmed",
    EMAIL: "ahemd.123@gmail.com",
    COUNTRY: "Australia",
    SHIPPING: "Australian Post APi",
    SOURCE: "Shopify Au",
    ORDER_TYPE: "Customer",
  },
  {
    id: 2,
    ID: 1077621,
    SHPIIFY: 17713,
    DATE: "22 Jan 2020",
    STATUS: "Pending",
    CUSTOMER: "Ahmed",
    EMAIL: "ahemd.123@gmail.com",
    COUNTRY: "Australia",
    SHIPPING: "Australian Post APi",
    SOURCE: "Shopify Au",
    ORDER_TYPE: "Customer",
  },
  {
    id: 3,
    ID: 1077624,
    SHPIIFY: 17713,
    DATE: "22 Jan 2020",
    STATUS: "Pending",
    CUSTOMER: "Ahmed",
    EMAIL: "ahemd.123@gmail.com",
    COUNTRY: "Australia",
    SHIPPING: "Australian Post APi",
    SOURCE: "Shopify Au",
    ORDER_TYPE: "Customer",
  },
  {
    id: 4,
    ID: 1077625,
    SHPIIFY: 17713,
    DATE: "22 Jan 2020",
    STATUS: "Pending",
    CUSTOMER: "Ahmed",
    EMAIL: "ahemd.123@gmail.com",
    COUNTRY: "Australia",
    SHIPPING: "Australian Post APi",
    SOURCE: "Shopify Au",
    ORDER_TYPE: "Customer",
  },
  {
    id: 5,
    ID: 1077626,
    SHPIIFY: 17713,
    DATE: "22 Jan 2020",
    STATUS: "Pending",
    CUSTOMER: "Ahmed",
    EMAIL: "ahemd.123@gmail.com",
    COUNTRY: "Australia",
    SHIPPING: "Australian Post APi",
    SOURCE: "Shopify Au",
    ORDER_TYPE: "Customer",
  },
  {
    id: 6,
    ID: 1077627,
    SHPIIFY: 17713,
    DATE: "22 Jan 2020",
    STATUS: "Pending",
    CUSTOMER: "Ahmed",
    EMAIL: "ahemd.123@gmail.com",
    COUNTRY: "Australia",
    SHIPPING: "Australian Post APi",
    SOURCE: "Shopify Au",
    ORDER_TYPE: "Customer",
  },
  {
    id: 7,
    ID: 1077628,
    SHPIIFY: 17713,
    DATE: "22 Jan 2020",
    STATUS: "Pending",
    CUSTOMER: "Ahmed",
    EMAIL: "ahemd.123@gmail.com",
    COUNTRY: "Australia",
    SHIPPING: "Australian Post APi",
    SOURCE: "Shopify Au",
    ORDER_TYPE: "Customer",
  },
  {
    id: 8,
    ID: 1077629,
    SHPIIFY: 17713,
    DATE: "22 Jan 2020",
    STATUS: "Pending",
    CUSTOMER: "Ahmed",
    EMAIL: "ahemd.123@gmail.com",
    COUNTRY: "Australia",
    SHIPPING: "Australian Post APi",
    SOURCE: "Shopify Au",
    ORDER_TYPE: "Customer",
  },
  {
    id: 9,
    ID: 1077630,
    SHPIIFY: 17713,
    DATE: "22 Jan 2020",
    STATUS: "Pending",
    CUSTOMER: "Ahmed",
    EMAIL: "ahemd.123@gmail.com",
    COUNTRY: "Australia",
    SHIPPING: "Australian Post APi",
    SOURCE: "Shopify Au",
    ORDER_TYPE: "Customer",
  },
];
export const columns = [
  { field: "ID", headerName: "ID", width: 100 },
  { field: "SHPIIFY", headerName: "SHPIIFY#", width: 100 },
  { field: "DATE", headerName: "DATE", width: 130 },
  { field: "STATUS", headerName: "STATUS", width: 100 },
  { field: "CUSTOMER", headerName: "CUSTOMER", width: 100 },
  { field: "EMAIL", headerName: "EMAIL", width: 200 },
  { field: "COUNTRY", headerName: "COUNTRY", width: 100 },
  {
    field: "SHIPPING",
    headerName: "SHIPPING",
    width: 180,
  },
  {
    field: "SOURCE",
    headerName: "SOURCE",
    width: 130,
  },

  {
    field: "ORDER_TYPE",
    headerName: "ORDER TYPE",
    width: 125,
  },
  {
    field: "edit",
    headerName: "",
    renderCell: (params) => (
      <IconButton >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-pencil-square"
          viewBox="0 0 16 16"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />{" "}
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
      </IconButton>
    ),
  },
];
