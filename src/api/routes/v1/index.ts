import express from 'express';
import users from './users';
const router = express.Router();

const routes = [
  {
    path: '/users',
    route: users
  }
];

routes.forEach((routeObj) => {
  const { path, route } = routeObj;
  router.use(path, route);
});

export default router;
