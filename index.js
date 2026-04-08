const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - Status: ${res.statusCode} (${duration}ms)`);
  });
  next();
});

app.get('/status', (req, res) => {
  console.log(`[LOG] Rota /status acessada com sucesso.`);
  
  res.json({
    status: 'online',
    message: 'Lacrei Saúde API - Ambiente de STAGING', 
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`[SISTEMA] Servidor iniciado com sucesso na porta ${PORT}`);
  console.log(`[SISTEMA] Logs de observabilidade ativos.`);
});