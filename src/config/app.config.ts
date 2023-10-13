interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Store Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Store Manager', 'Inventory Specialist', 'Customer Service Representative'],
  tenantName: 'Grocer',
  applicationName: 'Online Grocery Store',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal user information',
    'Read product information',
    'Create and manage orders',
    'Read grocer information',
  ],
  ownerAbilities: ['Manage grocer information', 'Manage product inventory', 'Manage orders', 'Manage user information'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/9d3afdaf-d91a-440d-bb79-399a12acc5e0',
};
