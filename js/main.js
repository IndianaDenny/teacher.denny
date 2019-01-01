function createLink (){
  
 let url = document.getElementById('href').value;
  
 // let url = window.location.href
  let a = document.createElement('a');
  a.setAttribute('href', url);
  
 let p = a.protocol;
 let h = a.host;
 let hostname = a.hostname;
 let path = a.pathname;
 let s = a.search;
 let port = a.port;

  
var str = hostname;
var pos = str.lastIndexOf(".");
var tld = str.slice(pos,str.length);
  
pos = str.indexOf(".");
var res = str.slice(pos+1,str.length);
  
console.log('protocol: ', p);
console.log('hostname:  ', hostname);
console.log('host:  ', res);
console.log('tld:  ', tld);
  
}