const axios = require('axios');

async function generateMarketingCopy({ productName, audience, tone, objective }) {
  const headlines = [
    `Descubra como vender mais com ${productName}`,
    `${productName}: a estratégia que transforma atenção em vendas`,
    `O jeito mais simples de vender ${productName} sem complicar` 
  ];

  const ctas = [
    'Clique agora e veja como',
    'Acesse agora',
    'Saiba mais hoje',
    'Clique e comece agora'
  ];

  return {
    productName,
    audience,
    tone,
    objective,
    headlines,
    ctas,
    generatedAt: new Date().toISOString(),
    script: `Para ${audience}, o melhor caminho é usar uma estratégia simples, prática e direta. ${productName} foi criado para ajudar você a vender com mais clareza, maior autoridade e menor esforço. ${ctas[0]}.`
  };
}

async function generateAdsCalendar({ productName, platform, days = 30 }) {
  const items = [];

  for (let i = 1; i <= days; i++) {
    items.push({
      day: i,
      platform,
      title: `${productName} — ideia ${i}`,
      content: `Conteúdo focado em mostrar a transformação que ${productName} oferece para quem quer vender com mais clareza e menos esforço.`,
      cta: 'Clique e veja como'
    });
  }

  return {
    productName,
    platform,
    days,
    items
  };
}

module.exports = {
  generateMarketingCopy,
  generateAdsCalendar
};
