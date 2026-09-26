const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: Number(process.env.PORT || 3000),
  k: {
    url: process.env.KIWIFY_API_URL || 'https://api.kiwify.com.br',
    token: process.env.KIWIFY_API_TOKEN || ''
  },
  h: {
    url: process.env.HOTMART_API_URL || 'https://api.hotmart.com',
    token: process.env.HOTMART_API_TOKEN || ''
  },
  appName: 'Automação Kiwify + Hotmart'
};
