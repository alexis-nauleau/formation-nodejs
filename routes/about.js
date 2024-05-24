import express from 'express';
const router = express.Router();

router.get('/about', (req, res) => {
  res.send('Page About 😁😁😁');
});

export default router;
