import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send('Server is running with TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
