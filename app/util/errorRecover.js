
/**
 * 前端错误日志收集
 * 需在业务加载之前才可收集到
 */

window.onerror = function(msg,url,line,col,error){
    //没有URL不上报！上报也不知道错误
    if (msg != "Script error." && !url){
        return true;
    }

    setTimeout(function(){
        let data = {};
        col = col || (window.event && window.event.errorCharacter) || 0;
        data.url = url;
        data.line = line;
        data.col = col;
        if (!!error && !!error.stack){
            data.msg = error.stack.toString();
        }else if (!!arguments.callee){
            let ext = [];
            let f = arguments.callee.caller, c = 3;
            while (f && (--c>0)) {
               ext.push(f.toString());
               if (f  === f.caller) {
                    break;
               }
               f = f.caller;
            }
            ext = ext.join(",");
            data.msg = ext;
        }
        // push server
        console.log(data);
    },0);

    return true;
};
