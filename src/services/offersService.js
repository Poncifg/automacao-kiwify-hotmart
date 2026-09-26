const config = require('../config');

function generateMarketingCopy(productName) {
  const templates = [
    `🚀 ${productName} - Revolucione seu negócio! Automatize tudo e comece a vender 24/7.`,
    `💰 ${productName} - Seu sistema de vendas automático está pronto. Não perca esta oportunidade!`,
    `⚡ ${productName} - Transforme sua estratégia de marketing. Clique agora e confira!`,
    `🎯 ${productName} - A melhor solução para automação de vendas. Acesse agora!`,
    `✨ ${productName} - Multiplique seus ganhos com automação inteligente. Aproveite hoje!`
  ];
  
  return templates[Math.floor(Math.random() * templates.length)];
}

function createMarketingFlow() {
  const copy = generateMarketingCopy(config.product.name);
  
  return {
    ok: true,
    message: 'Fluxo de marketing criado',
    campaign: {
      productName: config.product.name,
      productUrl: config.product.url,
      platform: config.product.checkoutPlatform,
      marketingCopy: copy,
      channels: ['instagram', 'whatsapp', 'email'],
      status: 'ready',
      createdAt: new Date().toISOString(),
      cta: 'Clique no link e comece agora',
      hashtags: ['#VendasAutomáticas', '#Marketing', '#IA', '#Negócios']
    }
  };
}

function createOfferPayload(offerName, productUrl, channels) {
  return {
    name: offerName,
    url: productUrl,
    channels: channels,
    status: 'pending_validation',
    createdAt: new Date().toISOString(),
    marketing: {
      copy: generateMarketingCopy(offerName),
      platforms: channels,
      schedule: {
        enabled: false,
        frequency: 'daily'
      }
    }
  };
}

module.exports = {
  generateMarketingCopy,
  createMarketingFlow,
  createOfferPayload
};