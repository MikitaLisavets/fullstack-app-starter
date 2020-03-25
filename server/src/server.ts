import App from './app';

const PORT = process.env.PORT || 3000;

App.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
