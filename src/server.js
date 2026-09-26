const express = require('express');
const config = require('./config');
const { syncProducts, buildOfferPayload } = require('./services/syncService');
const { getKiwifyProducts } = require('./services/kiwifyService');
const { getHotmartProducts } = require('./services/hotmartService');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ ok: true, app: config.appName, status: 'online' });
});

app.get('/products', async (req, res) => {
  const result = await syncProducts();
  res.json(result);
});

app.get('/products/kiwify', async (req, res) => {
  const result = await getKiwifyProducts();
  res.json(result);
});

app.get('/products/hotmart', async (req, res) => {
  const result = await getHotmartProducts();
  res.json(result);
});

app.post('/offers', async (req, res) => {
  const { offerName, productUrl, salesChannel } = req.body;

  if (!offerName || !productUrl || !Array.isArray(salesChannel)) {
    return res.status(400).json({ ok: false, message: 'Dados inválidos.' });
  }

  const payload = await buildOfferPayload({ offerName, productUrl, salesChannel });
  return res.status(201).json({ ok: true, data: payload });
});

app.listen(config.port, () => {
  console.log(`${config.appName} rodando na porta ${config.port}`);
});
