interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: [],
  customerRoles: ['Customer'],
  tenantRoles: ['System Administrator', 'Library Manager'],
  tenantName: 'Company',
  applicationName: 'LibraryManagement System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
