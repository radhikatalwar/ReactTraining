var today = new Date().toLocaleDateString();

export const initialValues = {
  companyName: "Company Name",
  date: today,
  place: "Delhi",
  invoiceNo: "123@123",
  phoneNo: "9876543210",
  email: "abc@gmail.com",
  clientName: "Client Name",
  clientCompany: "Client Company",
};

export const initialItemDetails = {
  id: 1,
  itemdescription: "item",
  quantity: "1",
  "unitprice($)": "100",
};

export const inputInitialValues = {
  email: "",
  invoiceNo: "",
};

export const columns = [
  { id: "1", label: "id", minWidth: "20%" },
  { id: "2", label: "Item Description", minWidth: "30%" },
  { id: "3", label: "Quantity", minWidth: "15%" },
  { id: "4", label: "Unit price($)", minWidth: "15%" },
  { id: "6", label: "Line total  ", minWidth: "20%" },
];
