const express = require('express');
const path = require('path');
const config = require('./config');
const { syncProducts } = require('./services/syncService');
const { getKiwifyProducts } = require('./services/kiwifyService');
const { getHotmartProducts } = require('./services/hotmartService');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (req, res) => {
  res.json({ ok: true, app: config.appName, status: 'online' });
});

app.get('/api/products', async (req, res) => {
  const result = await syncProducts();
  res.json(result);
});

app.get('/api/products/kiwify', async (req, res) => {
  const result = await getKiwifyProducts();
  res.json(result);
});

app.get('/api/products/hotmart', async (req, res) => {
  const result = await getHotmartProducts();
  res.json(result);
});

app.post('/api/offers', async (req, res) => {
  const { offerName, productUrl, salesChannel } = req.body;

  if (!offerName || !productUrl || !Array.isArray(salesChannel)) {
    return res.status(400).json({ ok: false, message: 'Dados inválidos.' });
  }

  const payload = {
    offerName,
    productUrl,
    salesChannel,
    status: 'ready',
    createdAt: new Date().toISOString()
  };

  return res.status(201).json({ ok: true, data: payload });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(config.port, () => {
  console.log(`${config.appName} rodando na porta ${config.port}`);
});
