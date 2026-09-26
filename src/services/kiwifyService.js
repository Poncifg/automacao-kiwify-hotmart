const axios = require('axios');
const config = require('./config');

async function getKiwifyProducts() {
  if (!config.k.token) {
    return { ok: false, message: 'Token da Kiwify não definido.' };
  }

  try {
    const response = await axios.get(`${config.k.url}/products`, {
      headers: {
        Authorization: `Bearer ${config.k.token}`,
        'Content-Type': 'application/json'
      }
    });

    return { ok: true, data: response.data };
  } catch (error) {
    return {
      ok: false,
      message: 'Erro ao consultar Kiwify.',
      details: error.response?.data || error.message
    };
  }
}

async function getKiwifyProductById(productId) {
  if (!config.k.token) {
    return { ok: false, message: 'Token da Kiwify não definido.' };
  }

  try {
    const response = await axios.get(`${config.k.url}/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${config.k.token}`,
        'Content-Type': 'application/json'
      }
    });

    return { ok: true, data: response.data };
  } catch (error) {
    return {
      ok: false,
      message: 'Erro ao consultar produto da Kiwify.',
      details: error.response?.data || error.message
    };
  }
}

module.exports = {
  getKiwifyProducts,
  getKiwifyProductById
};
