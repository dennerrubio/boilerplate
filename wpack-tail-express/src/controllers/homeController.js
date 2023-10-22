exports.homeGet = (req, res) => {
  res.render('index');
};

exports.homePost = (req, res) => {
  res.send('Formulário Enviado');
};
