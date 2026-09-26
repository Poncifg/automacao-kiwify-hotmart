const { getKiwifyProducts } = require('./kiwifyService');
const { getHotmartProducts } = require('./hotmartService');

async function syncProducts() {
  try {
    const kiwifyResult = await getKiwifyProducts();
    const hotmartResult = await getHotmartProducts();

    return {
      ok: true,
      message: 'Sincronização completa',
      kiwify: kiwifyResult,
      hotmart: hotmartResult,
      totalProducts: (kiwifyResult.products || []).length + (hotmartResult.products || []).length,
      syncTime: new Date().toISOString()
    };
  } catch (error) {
    console.error('Erro ao sincronizar produtos:', error.message);
    return {
      ok: false,
      message: error.message,
      syncTime: new Date().toISOString()
    };
  }
}

module.exports = {
  syncProducts
};