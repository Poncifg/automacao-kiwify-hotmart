const axios = require('axios');
const config = require('../config');

const hotmartClient = axios.create({
  baseURL: config.hotmart.apiUrl,
  headers: {
    'Authorization': `Bearer ${config.hotmart.apiToken}`,
    'Content-Type': 'application/json'
  },
  timeout: 5000
});

async function getHotmartProducts() {
  try {
    if (!config.hotmart.apiToken) {
      return {
        ok: false,
        message: 'Token da Hotmart não configurado',
        products: [],
        total: 0
      };
    }

    const response = await hotmartClient.get('/products');
    
    return {
      ok: true,
      message: 'Produtos Hotmart obtidos com sucesso',
      products: response.data.data || response.data || [],
      total: (response.data.data || response.data || []).length,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Erro ao buscar produtos Hotmart:', error.message);
    return {
      ok: false,
      message: error.message || 'Erro ao conectar com Hotmart',
      products: [],
      total: 0,
      error: true
    };
  }
}

async function createHotmartOffer(offerData) {
  try {
    const response = await hotmartClient.post('/products', offerData);
    return {
      ok: true,
      message: 'Oferta criada na Hotmart',
      data: response.data
    };
  } catch (error) {
    console.error('Erro ao criar oferta Hotmart:', error.message);
    return {
      ok: false,
      message: error.message
    };
  }
}

module.exports = {
  getHotmartProducts,
  createHotmartOffer
};