var fs = require('fs');

var infile = fs.createReadStream('./output.txt', {flages: 'r'});
var outfile = fs.createWriteStream('./output2.txt', {flags: 'w'});

infile.on('data', function(data){
    //console.log('읽어들인 데이터', data);
    console.log('3108 김지영 - 읽어들인 데이터', data);
    // 추가
    /*outfile.write(data);
    var buffer1 = new Buffer.from(data, 'utf8');
    console.log('첫번째 버퍼의 문자열 : %s', buffer1.toString());*/

    console.log(data);
    
    var buffer1 = new Buffer.from(data, 'utf8');
    console.log('첫번째 버퍼의 문자열 : %s\n', buffer1.toString());
    
    outfile.write(data);
});

infile.on('end', function(){
    console.log('파일 읽기 종료.');
    outfile.end(function(){
        console.log('파일 쓰기 종료.');
    });
});