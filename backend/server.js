const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com o MongoDB (local ou MongoDB Atlas)
mongoose.connect('mongodb://localhost/ecommerce')
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });


// Modelo de Produto
const Product = mongoose.model('Product', new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String
}));
const products = [
  new Product({
    name: 'Smartphone XYZ',
    price: 1500,
    description: 'Smartphone de última geração com câmera de 108MP, 128GB de armazenamento e processador Snapdragon 888.',
    stock: 20
  }),
  new Product({
    name: 'Laptop ABC',
    price: 4500,
    description: 'Laptop ultrafino com processador Intel i7, 16GB de RAM e 512GB SSD.',
    stock: 15
  }),
  new Product({
    name: 'Fone de Ouvido Bluetooth',
    price: 300,
    description: 'Fones de ouvido sem fio com cancelamento de ruído e bateria de longa duração.',
    stock: 50
  }),
  new Product({
    name: 'Smartwatch 4G',
    price: 1200,
    description: 'Relógio inteligente com monitoramento de saúde e 4G integrado para chamadas e notificações.',
    stock: 30
  }),
  new Product({
    name: 'Câmera Digital 4K',
    price: 2500,
    description: 'Câmera digital com gravação em 4K, lentes intercambiáveis e Wi-Fi integrado.',
    stock: 10
  }),
  new Product({
    name: 'Teclado Mecânico RGB',
    price: 400,
    description: 'Teclado mecânico com teclas personalizáveis e iluminação RGB.',
    stock: 25
  }),
  new Product({
    name: 'Mouse Gamer 16000 DPI',
    price: 250,
    description: 'Mouse gamer com 16000 DPI e iluminação RGB personalizável.',
    stock: 40
  })
];

Product.insertMany(products)
  .then(() => {
    console.log('Produtos de tecnologia adicionados!');
  })
  .catch((err) => {
    console.error('Erro ao adicionar produtos:', err);
  });


// Rota para obter todos os produtos
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao carregar produtos', error });
  }
});

// Rota para obter um produto específico
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: 'Produto não encontrado', error });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
