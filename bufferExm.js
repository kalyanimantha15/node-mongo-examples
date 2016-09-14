buf = new Buffer(26);
for(var i=0; i<26;i++){
buf[i]=i+97;
}
var json = buf.toJSON()
console.log(buf.toString('ascii'));
console.log(json);