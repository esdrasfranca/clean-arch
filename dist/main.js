import express from 'express';
import { createUserRoutes } from './infrastructure/routes/UserRoutes.js';
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is running on port 3000');
});
app.use('/api/v1/users', createUserRoutes());
//# sourceMappingURL=main.js.map