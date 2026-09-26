const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const config = {
  port: Number(process.env.PORT || 3000),
  k: {
    url: process.env.KIWIFY_API_URL || 'https://api.kiwify.com.br',
    token: process.env.KIWIFY_API_TOKEN || ''
  },
  h: {
    url: process.env.HOTMART_API_URL || 'https://api.hotmart.com',
    token: process.env.HOTMART_API_TOKEN || ''
  }
};

async function getKiwifyProducts() {
  if (!config.k.token) {
    return {
      ok: false,
      message: 'Token da Kiwify não definido. Configure KIWIFY_API_TOKEN no arquivo .env.'
    };
  }

  try {
    const response = await axios.get(`${config.k.url}/products`, {
      headers: {
        Authorization: `Bearer ${config.k.token}`,
        'Content-Type': 'application/json'
      }
    });

    return {
      ok: true,
      data: response.data
    };
  } catch (error) {
    return {
      ok: false,
      message: 'Erro ao consultar produtos da Kiwify.',
      details: error.response?.data || error.message
    };
  }
}

async function getHotmartProducts() {
  if (!config.h.token) {
    return {
      ok: false,
      message: 'Token da Hotmart não definido. Configure HOTMART_API_TOKEN no arquivo .env.'
    };
  }

  try {
    const response = await axios.get(`${config.h.url}/products`, {
      headers: {
        Authorization: `Bearer ${config.h.token}`,
        'Content-Type': 'application/json'
      }
    });

    return {
      ok: true,
      data: response.data
    };
  } catch (error) {
    return {
      ok: false,
      message: 'Erro ao consultar produtos da Hotmart.',
      details: error.response?.data || error.message
    };
  }
}

async function syncProducts() {
  const kiwify = await getKiwifyProducts();
  const hotmart = await getHotmartProducts();

  return {
    kiwify,
    hotmart
  };
}

async function generateSaleData() {
  return {
    offerName: 'Venda Automática com IA',
    productUrl: 'https://seu-link-de-venda.com',
    salesChannel: ['Kiwify', 'Hotmart'],
    status: 'ready'
  };
}

async function bootstrap() {
  const products = await syncProducts();
  const saleData = await generateSaleData();

  console.log('=== STATUS DA AUTOMAÇÃO ===');
  console.log(products);
  console.log('=== DADOS DA OFERTA ===');
  console.log(saleData);
}

if (require.main === module) {
  bootstrap().catch((error) => {
    console.error('Falha ao iniciar automação:', error);
    process.exit(1);
  });
}

module.exports = {
  config,
  getKiwifyProducts,
  getHotmartProducts,
  syncProducts,
  generateSaleData
};
