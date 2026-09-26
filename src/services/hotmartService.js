const axios = require('axios');
const config = require('./../config');

async function getHotmartProducts() {
  if (!config.h.token) {
    return { ok: false, message: 'Token da Hotmart não definido.' };
  }

  try {
    const response = await axios.get(`${config.h.url}/products`, {
      headers: {
        Authorization: `Bearer ${config.h.token}`,
        'Content-Type': 'application/json'
      }
    });

    return { ok: true, data: response.data };
  } catch (error) {
    return {
      ok: false,
      message: 'Erro ao consultar Hotmart.',
      details: error.response?.data || error.message
    };
  }
}

async function getHotmartProductById(productId) {
  if (!config.h.token) {
    return { ok: false, message: 'Token da Hotmart não definido.' };
  }

  try {
    const response = await axios.get(`${config.h.url}/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${config.h.token}`,
        'Content-Type': 'application/json'
      }
    });

    return { ok: true, data: response.data };
  } catch (error) {
    return {
      ok: false,
      message: 'Erro ao consultar produto da Hotmart.',
      details: error.response?.data || error.message
    };
  }
}

module.exports = {
  getHotmartProducts,
  getHotmartProductById
};
