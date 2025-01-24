function otp(n=4) {
  var otp = "";

  for (i = 0; i < n; i++) {
    var no = Math.floor(Math.random() * 10);

    otp += no;
  }

  return otp;
}

module.exports = otp;
