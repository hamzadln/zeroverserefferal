var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
const crypto = require('crypto');
var username = undefined;
var xapirapidkey= 'your apikey from rapidapi. Need to subscribe to temp mail https://rapidapi.com/Privatix/api/temp-mail';
var mail = undefined;
var account = '1798442205712312321310' // get this from refferal link, ex: https://gamewonderlab.io/#/share/zeroverse/platform/index?account={copythisnumberhere}&email=albanianpwned%2540gmail.com&activity=1
const cheerio = require('cheerio');
//original https://github.com/hamzadln
const extractLinks = async (data) => {
  try {
    // Fetching HTML
    const html = data;
    // Using cheerio to extract <a> tags
    const $ = cheerio.load(html);

    const linkObjects = $('p');
    // this is a mass object, not an array

    // Collect the "href" and "title" of each link and add them to an array
    const links = [];
    linkObjects.each((index, element) => {
      links.push({
        text: $(element).text(), // get the text
        href: $(element).attr('style'), // get the href attribute
      });
    });

    console.log(links[1].text);
    register(links[1].text);
    // do something else here with these links, such as writing to a file or saving them to your database
  } catch (error) {
    console.log(error);
  }
};
const extractLinks2 = async (data) => {
  try {
    // Fetching HTML
    const html = data;
    const $ = cheerio.load(html);

    const linkObjects = $('p');
    const links = [];
    linkObjects.each((index, element) => {
      links.push({
        text: $(element).text(), // get the text
        href: $(element).attr('style'), // get the attribute
      });
    });

    console.log(links[1].text);
    logintogame(links[1].text);
  } catch (error) {
    console.log(error);
  }
};
function checkavail(){
  data.append('email', mail);

var config = {
  method: 'post',
  url: 'https://gamewonderlab.io/gwuser/account/checkMail',
  'headers': {
    'Host': 'gamewonderlab.io',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Content-Type': 'application/x-www-form-urlencoded',
    'token': 'undefined',
    'Cookie': '_ga_TBDL7QTPZM=GS1.1.1664108371.1.1.1664110985.0.0.0; _ga=GA1.1.2126401156.1664108372',
  },
  data : data
};

axios(config)
.then(function (response) {
  if (response.data.errorCode==200){
    console.log(mail, 'is unregistered.');
    sendmail();
  }else{
    console.log('something happen');
  }

})
.catch(function (error) {
  console.log(error);
});
}
function random(){
  return Math.floor(Math.random() * 1000) + 1000;
}
function sendmail(){
  username = 'randomize'+random();
  mail = username+'@cevipsa.com';
  console.log(mail);
  var data = new FormData();
  data.append('email', mail);
var config = {
  method: 'post',
  url: 'https://gamewonderlab.io/gwuser/account/sendCode',
  'headers': {
    'Host': 'gamewonderlab.io',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Content-Type': 'application/x-www-form-urlencoded',
    'token': 'undefined',
    'Cookie': '_ga_TBDL7QTPZM=GS1.1.1664108371.1.1.1664110985.0.0.0; _ga=GA1.1.2126401156.1664108372',
  },
  data : data
};

axios(config)
.then(function (response) {
  if (response.data.errorCode==200){
    console.log(mail, 'is sent.');
    checkmail();
  }else{
    console.log(response.data);
  }
})
.catch(function (error) {
  console.log(error);
});
}
function sendmail2(){
  let limit = Date.now()+(1000*60); 
  console.log('sleeping 60 sec..');
  while (Date.now() < limit){
    Date.now();
  };
  console.log('finished sleeping');
var axios = require('axios');
var data = 'email='+mail;

var config = {
  method: 'post',
  url: 'http://54.163.170.155:3355/auth/gwReqEmailCode',
  headers: { 
    'Accept-Encoding': ' identity', 
    'Content-Type': ' application/x-www-form-urlencoded', 
    'User-Agent': ' Dalvik/2.1.0 (Linux; U; Android 9; ONEPLUS A5000 Build/PPR1.180720.122)', 
    'Host': ' 54.163.170.155:3355', 
    'Connection': ' Keep-Alive', 
    'Content-Length': ' 31'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.status));
  checkmail2();
})
.catch(function (error) {
  console.log(error);
});
}

function checkmail2(){
  let hash = crypto.createHash('md5').update(mail).digest("hex");
    console.log('Sleeping 5 Second to wait the mail arrives..');
    //console.log(hash);
    let limit = Date.now()+(1000*3); 
          while (Date.now() < limit){
            Date.now();
          };
          const options = {
            method: 'GET',
            url: 'https://privatix-temp-mail-v1.p.rapidapi.com/request/mail/id/'+hash+'/',
            headers: {
              'X-RapidAPI-Key': xapirapidkey,
              'X-RapidAPI-Host': 'privatix-temp-mail-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            extractLinks2(response.data[1].mail_html);
          }).catch(function (error) {
            console.error(error);
          });
}
function checkmail(){
  let hash = crypto.createHash('md5').update(mail).digest("hex");
    console.log('Sleeping 5 Second to wait the mail arrives..');
    let limit = Date.now()+(1000*3); 
          while (Date.now() < limit){
            Date.now();
          };
    const options = {
        method: 'GET',
        url: 'https://privatix-temp-mail-v1.p.rapidapi.com/request/mail/id/'+hash+'/',
        headers: {
          'X-RapidAPI-Key': xapirapidkey,
          'X-RapidAPI-Host': 'privatix-temp-mail-v1.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        if(response.data.error != undefined){
          console.log(response.data);
          console.log('Something happen with the email. Please try again');
          process.exit();
        }
        extractLinks(response.data[0].mail_html);
    }).catch(function (error) {
        console.log(error);
        process.exit();
    });
}
function register(code){
  var axios = require('axios');
var data = JSON.stringify({
  "email": mail,
  "code": code,
  "password": "Customize123",
  "superior": account,
  "activityId": "1"
});

var config = {
  method: 'post',
  url: 'https://gamewonderlab.io/gwuser/account/register',
  headers: { 
    'Cookie': ' _ga_TBDL7QTPZM=GS1.1.1664108371.1.1.1664110985.0.0.0; _ga=GA1.1.2126401156.1664108372', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  if (response.data.errorCode==200){
    console.log('registered successfully!');
    console.log(response.data);
    sendmail2();
    //checkmail();
  }
})
.catch(function (error) {
  console.log(error);
});

}
function logintogame(code){
  var data = `email=${mail}&code=${code}&areaVersion=1`;
  console.log('logging into game');

  var config = {
    method: 'post',
    url: 'http://54.163.170.155:3355/auth/gwLoginEmailCode',
    headers: { 
      'Accept-Encoding': ' identity', 
      'Content-Type': ' application/x-www-form-urlencoded', 
      'User-Agent': ' Dalvik/2.1.0 (Linux; U; Android 9; ONEPLUS A5000 Build/PPR1.180720.122)', 
      'Host': ' 54.163.170.155:3355', 
      'Connection': ' Keep-Alive', 
      'Content-Length': '57'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    //console.log(JSON.stringify(response.data));
    console.log('Logged in successfully!');
    checkclaim();
    sendmail();
  })
  .catch(function (error) {
    console.log(error);
  });
}
function checkclaim(){
  console.log('claiming the prize!');
  var data = JSON.stringify({
    "currentPage": 1,
    "pageSize": 50,
    "activityId": "1",
    "status": [
      2
    ]
  });
  
  var config = {
    method: 'post',
    url: 'https://gamewonderlab.io/gwmarketing/activity/boxList',
    headers: { 
      'Host': 'gamewonderlab.io', 
      'content-length': '61', 
      'accept': 'application/json, text/plain, */*', 
      'user-agent': 'Mozilla/5.0 (Linux; Android 9; ONEPLUS A5000 Build/PPR1.180720.122; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.88 Safari/537.36;strong_typhoon', 
      'token': '180230687092379692', 
      'content-type': 'application/json', 
      'origin': 'https://gamewonderlab.io', 
      'x-requested-with': 'com.gamewonderlab.io.gw', 
      'sec-fetch-site': 'same-origin', 
      'sec-fetch-mode': 'cors', 
      'sec-fetch-dest': 'empty', 
      'referer': 'https://gamewonderlab.io/', 
      'accept-encoding': 'gzip, deflate', 
      'accept-language': 'en-US,en;q=0.9', 
      'cookie': '_ga=GA1.1.1002038697.1664201007, _ga_TBDL7QTPZM=GS1.1.1664201006.1.1.1664208350.0.0.0'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    var resp = response.data;
    var rewardid = resp.data.list[0].id;
    //console.log(JSON.stringify(resp.data.list[0].id));
    var data = JSON.stringify({
      "id": rewardid,
      "activityId": "1"
    });
    
    var config = {
      method: 'post',
      url: 'https://gamewonderlab.io/gwmarketing/activity/openBox',
      headers: { 
        'Host': 'gamewonderlab.io', 
        'content-length': '29', 
        'accept': 'application/json, text/plain, */*', 
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; ONEPLUS A5000 Build/PPR1.180720.122; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.88 Safari/537.36;strong_typhoon', 
        'token': '180230687092379692', 
        'content-type': 'application/json', 
        'origin': 'https://gamewonderlab.io', 
        'x-requested-with': 'com.gamewonderlab.io.gw', 
        'sec-fetch-site': 'same-origin', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-dest': 'empty', 
        'referer': 'https://gamewonderlab.io/', 
        'accept-encoding': 'gzip, deflate', 
        'accept-language': 'en-US,en;q=0.9', 
        'cookie': '_ga=GA1.1.1002038697.1664201007, _ga_TBDL7QTPZM=GS1.1.1664201006.1.1.1664203334.0.0.0'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(response.data.data.value,'USDW is claimed successfully!');
    })
    .catch(function (error) {
      console.log(error);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
}
sendmail();