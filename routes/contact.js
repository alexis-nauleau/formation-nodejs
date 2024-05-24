import express from 'express';
const router = express.Router();

router.get('/contact', (req, res) => {
  res.send('Page contact 😁😁😁');
});

export default router;
