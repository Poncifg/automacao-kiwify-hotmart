const { getKiwifyProducts } = require('./kiwifyService');
const { getHotmartProducts } = require('./hotmartService');

async function syncProducts() {
  const [kiwify, hotmart] = await Promise.all([
    getKiwifyProducts(),
    getHotmartProducts()
  ]);

  return {
    kiwify,
    hotmart,
    syncedAt: new Date().toISOString()
  };
}

async function buildOfferPayload({ offerName, productUrl, salesChannel }) {
  return {
    offerName,
    productUrl,
    salesChannel,
    status: 'ready',
    syncedAt: new Date().toISOString()
  };
}

module.exports = {
  syncProducts,
  buildOfferPayload
};
