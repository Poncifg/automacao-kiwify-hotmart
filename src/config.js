require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  appName: 'Automação Kiwify & Hotmart',
  
  kiwify: {
    apiUrl: process.env.KIWIFY_API_URL || 'https://public-api.kiwify.com/v1',
    apiToken: process.env.KIWIFY_API_TOKEN || '',
  },
  
  hotmart: {
    apiUrl: process.env.HOTMART_API_URL || 'https://api.hotmart.com',
    apiToken: process.env.HOTMART_API_TOKEN || '',
  },
  
  meta: {
    appId: process.env.META_APP_ID || '',
    appSecret: process.env.META_APP_SECRET || '',
    accessToken: process.env.META_ACCESS_TOKEN || '',
    pageId: process.env.META_PAGE_ID || '',
  },
  
  whatsapp: {
    phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID || '',
    accessToken: process.env.WHATSAPP_ACCESS_TOKEN || '',
  },
  
  product: {
    name: process.env.PRODUCT_NAME || 'Venda Automática com IA',
    url: process.env.PRODUCT_URL || '',
    checkoutPlatform: process.env.CHECKOUT_PLATFORM || 'Kiwify',
  }
};