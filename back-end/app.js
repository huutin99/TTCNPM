var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var multer = require('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
      // You could rename the file name
      // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))

      // You could use the original name
      cb(null, file.originalname)
  }
});
var upload = multer({storage: storage});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var signupRouter = require('./routes/signup');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var articleRouter = require('./routes/article');
var uploadRouter = require('./routes/upload');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// app.use(injectUser);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/logout', injectUser, logoutRouter);
app.use('/article', articleRouter);
app.use('/uploadImage', upload.single('avatar'), uploadRouter);

app.get('/images/:name?', function (req, res, next) {
  var options = {
    root: path.join(__dirname, 'public/images'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  var fileName = req.params.name
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
});

const { pool } = require('./queries');
async function injectUser(req, res, next) {
  try {
    // console.log(req.cookies)
    const user = await pool.query(`
      SELECT * FROM "user" u
      INNER JOIN "user_session" us
      ON us.uid = u.id
      WHERE us.id = '${req.cookies.token}'
    `);
    // console.log(user.rows[0]);
    req.user = user.rows[0];
    next();
  } catch (error) {
    return next(error)
  }
}

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
