const superagent = require('superagent');
superagent
  .post('http://dls-cup-alpha-2093819659.us-west-2.elb.amazonaws.com/lb-auth/auth/cup_DAuZNjREhwNF5M6_jXwuh/ext-users/token')
  .send({ 'ext_user_id': '5dfd3e079299405abcf04070c0396f2f' }) // sends a JSON post body
  .set('Content-Type', 'application/json')
  .end((err, res) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Post response = ", res.status)
      console.log(res.body);
      console.log(res.body);
      accessToken = res.body.access_token;
      console.log("access token : " + accessToken);
    }
  });

superagent
  .get("http://dls-cup-alpha-2093819659.us-west-2.elb.amazonaws.com/lb-auth/accounts/cup1/ext-users/5dfd3e079299405abcf04070c0396f2f/spaces")
  .end((err, res) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Get response = ", res.status)
      console.log(res.body);
    }
  })






