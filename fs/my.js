var util = require('util');
var fs = require('fs');

function showerr(){
    return function(err){
        if(err){
            throw err;
        }
    };
}



readFile = function(path, encoding, func){
    var size;
    var buff;
    var buffs;
    var pos = 0;
    var fd;

    //call back function
    var callback = util.isFunction(arguments[arguments.length - 1]) ? arguments[arguments.length - 1] : showerr();

    //encoding
    if(util.isFunction(encoding) || !encoding){
        encoding = { ed: null, flag: 'r'};
    } else if(util.isString(encoding)){
        encoding = { ed: encoding, flag: 'r'};
    } else if(util.isObject(encoding)){
        throw new TypeError('Bad arguments');
    }

    //is encoding for ed.
    var ed = encoding.ed;
    if(ed && !Buffer.isEncoding(ed)){
        throw new Error('Unknown encoding: ' + ed);
    }

    //open file
    var flag = encoding.flag || 'r';
    fs.open(path, flag, 438, function(er, fds){
        if(er) return callback(er);
        fd = fds;

        fs.fstat(fd, function(er, s){
            if(er) {
                return fs.close(fd, function(){
                    callback(er);
                });
            }

            size = s.size;
            buff = new Buffer(size);
            read();
        });
    });

    function read(){
        fs.read(fd, buff, pos, size - pos, -1, aread);
    }

    function aread(er, readNumber){
        if(er) {
            console.error(er);
            return fs.close(fd, function(er2){
                return callback(er);
            });
        }
        pos += readNumber;
        if(pos === size){
            close();
        }
    }

    function close(){
        fs.close(fd, function(er){
            if(ed) buff = buff.toString(ed);
            return callback(er, buff);
        });
    }


}

function writeFile(){
    console.log('wirte file.');
}
module.exports.myReadFile = readFile;
module.exports.myWriteFile = writeFile;
