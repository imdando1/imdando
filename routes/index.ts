import * as express from 'express';
import * as path from 'path';

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname + './../views/index.html'));
});

export default router;
