export enum apiEndpoints {
  // authentication flow
  LOGIN = "Account/Login",
  FORGOT_PASSWORD = "Account/ForgotPassword",
  CHANGE_PASSWORD = "Account/ChangePassword",

  // sme flows
  GET_ALL_PRODUCT_CATEGORY = "ProductCategory/GetAll",
  GET_ALL_PRODUCT_BY_PRODUCT_CATEGORY = "Product/GetByProductCategoryId/id",
  GET_FIRM_PRODUCT_BY_PRODUCT_ID = "FirmProduct/GetByProductId/id",
  GET_FIRM_PRODUCT_MARKETTING_BY_FIRM_PRODUCT_ID = "FirmProductMarketingFeature/GetByFirmProductId/id",
}
