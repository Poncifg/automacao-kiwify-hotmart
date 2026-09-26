const axios = require('axios');
const config = require('../config');

const kiwifyClient = axios.create({
  baseURL: config.kiwify.apiUrl,
  headers: {
    'Authorization': `Bearer ${config.kiwify.apiToken}`,
    'Content-Type': 'application/json'
  },
  timeout: 5000
});

async function getKiwifyProducts() {
  try {
    if (!config.kiwify.apiToken) {
      return {
        ok: false,
        message: 'Token da Kiwify não configurado',
        products: [],
        total: 0
      };
    }

    const response = await kiwifyClient.get('/products');
    
    return {
      ok: true,
      message: 'Produtos Kiwify obtidos com sucesso',
      products: response.data.data || response.data || [],
      total: (response.data.data || response.data || []).length,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Erro ao buscar produtos Kiwify:', error.message);
    return {
      ok: false,
      message: error.message || 'Erro ao conectar com Kiwify',
      products: [],
      total: 0,
      error: true
    };
  }
}

async function createKiwifyOffer(offerData) {
  try {
    const response = await kiwifyClient.post('/products', offerData);
    return {
      ok: true,
      message: 'Oferta criada na Kiwify',
      data: response.data
    };
  } catch (error) {
    console.error('Erro ao criar oferta Kiwify:', error.message);
    return {
      ok: false,
      message: error.message
    };
  }
}

module.exports = {
  getKiwifyProducts,
  createKiwifyOffer
};