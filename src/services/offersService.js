const { generateMarketingCopy, generateAdsCalendar } = require('./marketingService');

async function createMarketingFlow() {
  const marketing = await generateMarketingCopy({
    productName: 'Venda Automática com IA',
    audience: 'empreendedores e pequenos negócios',
    tone: 'premium',
    objective: 'vender mais e automatizar processo'
  });

  const calendar = await generateAdsCalendar({
    productName: 'Venda Automática com IA',
    platform: 'Instagram',
    days: 30
  });

  return {
    marketing,
    calendar,
    createdAt: new Date().toISOString()
  };
}

module.exports = {
  createMarketingFlow
};
