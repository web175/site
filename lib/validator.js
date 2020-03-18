!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).validator={})}(this,(function(t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */function n(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var r=Array(t),a=0;for(n=0;n<e;n++)for(var u=arguments[n],i=0,o=u.length;i<o;i++,a++)r[a]=u[i];return r}var e=function(t,n){return void 0===n&&(n=1),new RegExp("^(?!.*("+t+").*\\1{"+n+",}).+$","i")},r=function(t){return new RegExp("^[^<>/\\\\\\|:''\\*\\?]+\\.("+t+")+$","i")},a=function(t,n){void 0===n&&(n="");var e="^("+t+"):\\/\\/[\\w\\-_]+(\\.[\\w\\-_]+)+([\\w\\-\\.,@?^=%&:/~\\+#]*[\\w\\-\\@?^=%&/~\\+#])?";return""!==n&&(e=e+".("+n+")+"),e+="$",new RegExp(e,"i")},u={required:/.+/,english:/^[A-Za-z]+$/,alphanum:/^[a-zA-Z0-9]+$/,chinese:/^[\u2E80-\uFE4F]+$/,upper:/[A-Z]/,lower:/[a-z]/,hasLetter:/[A-Za-z]/,hasDigit:/\d/,hasSpec:/[!@#$%^&*?\(\)]/,nospace:/^\S+$/,nodbc:/^[^\uFF01-\uFF60\uFF0A-\uFF5F\u3000-\u3003]+$/,norepeat:e("."),nospec:/^[^><,\[\]\{\}\?\/\+=\|\'\\\':;\~\!\@\#\*\$\%\^\&\(\)`]+$/,qq:/^[1-9]\d{4,10}$/,age:/^(0|[1-9]\d?|1[0-2]\d)$/,zipcode:/^(\d[1-7]|[1-9][0-7])\d{4}$/,ip:/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,ipv6:/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,port:/^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/,domain:/^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/i,bizcode:/^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/,invoice:/^(((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12]))\d{5}[1-9][1-7][0-4])$/,bankcard:/^[1-9]\d{9,29}$/,pbcard:/^(10|30|35|37|4\d||5[0-6]|58|60|62|6[8-9]|84|8[7-8]|9[0-2]|9[4-6]|9[8-9])\d{14,17}$/,ticker:/^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/,passport:/(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/,score:/^150$|^(\d|[1-9]\d|1[0-4]\d)(.5)?$/,currency:/(^-?[1-9]\d{0,2}($|(\,\d{3})*($|(\.\d{1,2}$))))|((^0(\.\d{1,2})?)|(^-0\.\d{1,2}))$/,float:/^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?$/,positivefloat:/^(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?$/,integer:/^-?\d+$/,positiveint:/^\d+$/,decimal:/^-?\d+\.\d+$/,percent:/^-?\d+(\.\d+)?%$/,even:/^[02468]|[1-9]\d*[02468]$/,odd:/^[13579]|[1-9]\d*[13579]$/,email:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,url:a("https?|ftp|wss?"),ftp:a("ftp"),http:a("https?"),ws:a("wss?"),account:/^[A-Za-z]+[\w\-_]*[A-Za-z0-9]+$/,password:/^(?=.*\d)(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*[!@#$%^&*?\(\)]).*$/,hex:/^[0-9A-F]+$/i,color:/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,ascii:/^[\u0000-\u007F]+$/,base64:/^([A-Z0-9+\/]{4})*([A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i,md5:/^(([0-9A-F]{16})|([0-9A-F]{32}))$/i,uuid:/^[0-9A-F]{8}(-?)[0-9A-F]{4}\1[0-9A-F]{4}\1[0-9A-F]{4}\1[0-9A-F]{12}$/i,mobile:/^((\+86)|(86))?(13\d|(14[5-7])|(15([0-3]|[5-9]))|166|17(0|1|8])|18\d|19(8|9))\d{8}$/,telphone:/^[+]{0,1}\d{1,3}[ ]?([-]?(\d|[ ]){1,12})+$/,phone:/^((\+86)|(86))?((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/,year:/^(19|20)\d{2}$/,month:/^(0?[1-9]|1[0-2])$/,day:/^(([1-9])|([1-2]\d)|(3[0-1]))$/,hour:/^((1?\d)|(2[0-3]))$/,minute:/^[1-5]?\d$/,hmt:/^(\d|[01]\d|2[0-3]):[0-5]\d$/,time:/^(\d|([01]\d|2[0-3])):([0-5]\d):([0-5]\d)$/,date:/^((((1[6-9]|[2-9]\d)\d{2})(-|\/)(0?[13578]|1[02])\5(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})(-|\/)(0?[13456789]|1[012])\11(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})(-|\/)0?2\17(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))(-|\/)0?2\25(29)))$/,datetime:/^((((1[6-9]|[2-9]\d)\d{2})(-|\/)(0?[13578]|1[02])\5(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})(-|\/)(0?[13456789]|1[012])\11(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})(-|\/)0?2\17(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))(-|\/)0?2\25(29)))\s+(\d|([0-1]\d|2[0-3])):(\d|([0-5]?\d)):(\d|([0-5]?\d))$/,idcard:/^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12])|91)\d{4}(((19|20)\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((19|20)\d{2}(0[13578]|1[02])31)|((19|20)\d{2}02(0[1-9]|1\d|2[0-8]))|(19([13579][26]|[2468][048]|0[48])0229))\d{3}(\d|X|x)?$/,autocard:/^([\u4EAC\u6D25\u6CAA\u6E1D\u5180\u8C6B\u4E91\u8FBD\u9ED1\u6E58\u7696\u9C81\u65B0\u82CF\u6D59\u8D63\u9102\u6842\u7518\u664B\u8499\u9655\u5409\u95FD\u8D35\u7CA4\u9752\u85CF\u5DDD\u5B81\u743CA-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))|[\u4EAC\u6D25\u6CAA\u6E1D\u5180\u8C6B\u4E91\u8FBD\u9ED1\u6E58\u7696\u9C81\u65B0\u82CF\u6D59\u8D63\u9102\u6842\u7518\u664B\u8499\u9655\u5409\u95FD\u8D35\u7CA4\u9752\u85CF\u5DDD\u5B81\u743CA-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9\u6302\u5B66\u8B66\u6E2F\u6FB3]{1})$/,longitude:/^(\-|\+)?(0?\d{1,2}\.\d{1,15}|1[0-7]?\d{1}\.\d{1,15}|180\.0{1,15})$/,latitude:/^(\-|\+)?([0-8]?\d{1}\.\d{1,15}|90\.0{1,15})$/,londms:/^(\-|\+)?(0?\d{1,2}\u00B0(\d|[0-5]\d)\u2032(\d|[0-5]\d)(\.\d{1,2})?\u2033|1[0-7]?\d{1}\u00B0(\d|[0-5]\d)\u2032(\d|[0-5]\d)(\.\d{1,2})?\u2033|180\u00B000\u203200\u2033)$/,latdms:/^(\-|\+)?([0-8]?\d{1}\u00B0(\d|[0-5]\d)\u2032(\d|[0-5]\d)(\.\d{1,2})?\u2033|90\u00B000\u203200\u2033)$/,approval:/^([\u2E80-\uFE4F]+)\u5B57(\u3014|\[)(19|20)\d{2}(\u3015|\])\u7B2C?\d{1,}\u53F7$/,citycode:/^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12]))\d{4}$/,address:/^[\u2E80-\uFE4F]+(\u5E02|\u53BF|\u533A|\u65D7|\u4E61|\u9547|\u8857\u9053|\u5DDE)\S{3,}$/,isbn:/^(978\-\d\-\d{3}\-\d{5}\-[a-z0-9]$)|(978\d{9}[a-z0-9])$/i,tag:/^<([a-z1-6]+)([^<]+)*(>(.*)<\/\1>| *\/>)$/,jwt:/^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/,mac:/^[0-9A-F]{2}(\-|\:)[0-9A-F]{2}\1[0-9A-F]{2}\1[0-9A-F]{2}\1[0-9A-F]{2}\1[0-9A-F]{2}$/i,mask:/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/,thunder:/^thunder:\/\/[a-zA-Z0-9]+=$/,ed2k:/^ed2k:\/\/|file|.+|\/$/,magnet:/^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/,path:/^[a-zA-Z]:\\([^<>/\\\|:''\*\?]+\\?)+$/,file:/^[^<>/\\\|:''\*\?]+\.\w+$/,linuxfile:/^[^+-./\t\b@#$%*()\[\]][^/\t\b@#$%*()\[\]]{1,254}$/,imgurl:a("https?","gif|png|jpg|jpeg|webp|svg"),doc:r("pdf|txt|rtf|wps|doc|docx|xls|xlsx|ppt|pptx")},i=function(t){return"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)},o=function(t){return"number"==typeof t?String(t):t},d=function(t){return"string"==typeof t?+t:t};function s(t,n){return"number"!=typeof t&&"string"!=typeof t||"number"!=typeof n&&"string"!=typeof n?Array.isArray(t)?t.indexOf(n)>-1:!(!i(t)||"string"!=typeof n)&&Object.keys(t).indexOf(n)>-1:String(t).indexOf(String(n))>-1}var c={object:i,boolean:function(t){return"boolean"==typeof t},string:function(t){return"string"==typeof t},number:function(t){return"number"==typeof t},array:function(t){return Array.isArray(t)},func:function(t){return"function"==typeof t},datetype:function(t){return t instanceof Date},enum:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return[n].concat(e).indexOf(t)>-1},norepeats:function(t,n,r){return void 0===r&&(r=1),e(n,r).test(t)},ext:function(t,n){return r(n).test(t)},idcardvalid:function(t){for(var n=String(t),e=n.toUpperCase().split(""),r=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],a=u.idcard,i=0,o=0;o<17;o++)i+=parseInt(e[o],10)*r[o];return a.test(n)&&[1,0,"X",9,8,7,6,5,4,3,2][i%11]==e[17]},not:function(t,n){return t!=n},eq:function(t,n){return t==n},gt:function(t,n){return+t>+n},gte:function(t,n){return+t>=+n},lt:function(t,n){return+t<+n},lte:function(t,n){return+t<=+n},between:function(t,n,e){return+t>+n&&+t<+e},len:function(t,n){return o(t).length===d(n)},min:function(t,n){return o(t).length>=d(n)},max:function(t,n){return o(t).length<=d(n)},minof:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return+t===Math.min.apply(Math,[n].concat(e).map((function(t){return+t})))},maxof:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return+t===Math.max.apply(Math,[n].concat(e).map((function(t){return+t})))},charlen:function(t,n){for(var e=o(t),r=d(n),a=e.length,u=0,i=-1,s=0;s<a;s++)u+=(i=e.charCodeAt(s))>=0&&i<=128?1:2;return u<=r},empty:function(t){return!t||(t.length?0===t.length:!!i(t)&&0===Object.keys(t).length)},regexp:function(t,n){return n.test(t)},and:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return[t,n].concat(e).every((function(t){return!!t}))},an:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return 1===[t,n].concat(e).filter((function(t){return!!t})).length},or:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return[t,n].concat(e).filter((function(t){return!!t})).length>0},has:function(t,n){return s(t,n)},in:function(t,n){return s(n,t)}};Object.keys(u).forEach((function(t){c[t]=function(n){return"number"==typeof n&&(n=String(n)),u[t].test(n)}}));var f=["后者"],p={default:"%a未通过验证！",required:"%a不能为空！",english:"%a必须是英文字母！",alphanum:"%a必须是字母与数字混合！",chinese:"%a必须是中文！",upper:"%a必须要有大写！",lower:"%a必须要有小写！",nospace:"%a不得含任何空格字符！",nodbc:"%a不得含任何全角字符！",norepeat:"%a不得有任何字符重复！",nospec:"%a不得含SQL敏感字符！",qq:"%a必须是首位不为0的5~11位的数字！",age:"%a必须是0~129的年龄数字！",zipcode:"%a邮编格式不对！",ip:"%aIPV4地址格式不对！",ipv6:"%aIPV6地址格式不对！",port:"%a端口格式不对！",domain:"%a域名格式不对！",bizcode:"%a统一信用编码格式不对！",invoice:"%a增值税号格式有误！",bankcard:"%a银行卡号格式有误！",pbcard:"%a个人银行卡号格式有误！",ticker:"%a股票代号格式有误！",passport:"%a护照号格式有误！",score:"%a分数格式有误！",currency:"%a货币格式有误！",float:"%a必须是浮点数！",positivefloat:"%a必须是正浮点数！",integer:"%a必须是整数！",positiveint:"%a必须是正整数！",decimal:"%a必须是小数！",percent:"%a必须是百分数！",even:"%a必须是偶数！",odd:"%a必须是奇数！",email:"%a邮箱格式不对！",url:"%a网址格式有误！",ftp:"%aFtp地址格式有误！",http:"%aHttp地址格式有误！",ws:"%aWebsocket址格式有误！",account:"%a必须是字母与_数字的组合，且首位为字母！",password:"%a最少包含1个大小写字母、特殊字符、数字！",hex:"%aHAX格式有误！",color:"%a颜色值格式有误！",ascii:"%aASCII格式有误！",base64:"%aBASE64格式有误！",md5:"%aMD5格式有误！",uuid:"%aUUID或GUID格式有误！",mobile:"%a手机号码格式不对！",telphone:"%a电话号码格式不对！",phone:"%a手机或电话号码格式不对！",year:"%a必须是四位年份数字！",month:"%a必须是1~12月份数字！",day:"%a必须是1~31日的数字！",hour:"%a必须是0~23小时数字！",minute:"%a必须是0~59分秒数字！",hmt:"%a时分的格式不对！",time:"%a时分秒的时间格式不对！",date:"%a日期格式不对！",datetime:"%a日期与时间格式不对！",idcard:"%a必须是合法身份证号格式！",autocard:"%a必须是合法车牌号格式！",longitude:"%a必须符合经度格式，带1位以上小数点！",latitude:"%a必须符合纬度格式，带1位以上小数点！",londms:"%a必须是度分秒格式的经度！",latdms:"%a必须是度分秒格式的纬度！",approval:"%a必须是审批文号格式！",citycode:"%a必须是6位地区代码！",address:"%a必须是带镇与街道的地址！",isbn:"%a必须是13位书号格式！",tag:"%a必须是闭合标签格式！",jwt:"%a必须是JWT字符串格式！",mac:"%a必须是MAC地址格式！",mask:"%a子网掩码格式不正确！",path:"%a必须是合法路径！",file:"%a必须是合法文件名！",linuxfile:"%a需为推荐的linux文件名！",imgurl:"%a必须是合法图片文件名！",doc:"%a必须是合法文档文件名！",object:"%a必须是对象类型！",string:"%a必须是字符串类型！",number:"%a必须是数字类型！",boolean:"%a必须是布尔类型！",func:"%a必须是函数类型！",datetype:"%a日期格式不对！",enum:"%a必须是枚举类型！",array:"%a必须是数组类型！",not:"%a不能等于%1！",eq:"%a必须等于%1！",gt:"%a要大于%1！",gte:"%a要大于等于%1！",lt:"%a要小于%1！",lte:"%a要小于等于%1！",between:"%a要大于%1，小于%2！",minof:"%a必须是在%t最小的值！",maxof:"%a必须是在%t最大的值！",len:"%a长度要等于%1！",min:"%a最小长度应为%1！",max:"%a最大长度应为%1！",charlen:"%a最大字节长度应为%1！",in:"%a不在%t范围之内！",has:"%a不存在%t！",empty:"%a必须是空的值！",regexp:"%a没有匹配正确！",and:"%a和%t都不能为空！",an:"%a和%t只能有一项不为空！",or:"%a和%t至少一项或以上不能为空！"},h=Object.create(null),l=function(){function t(){this.__types=[],this.__handler=[],this.__customs=[],this.__names=[],this.isAsync=!1}return t.prototype.struct=function(t){return this.__substruct=t,this},t.prototype.apply=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return c.func(t)&&this.__customs.push([0,t,n]),this},t.prototype.async=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return c.func(t)&&this.__customs.push([1,t,n]),this.isAsync=!0,this},t.prototype.error=function(t){return c.func(t)&&(this.__handler[0]=t),this},t.prototype.ok=function(t){return c.func(t)&&(this.__handler[1]=t),this},t.prototype.alias=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];var r=this.__names[0],a=this.__names[1];return r?r&&!a?this.__names[1]=[t]:r&&a&&a.push(t):this.__names[0]=t,n.length>0&&(this.__names[1]=a?a.concat(n):n),this},t.prototype.msg=function(t,n){if(this.__msgs||(this.__msgs={}),c.string(t)&&n)this.__msgs[t]=n;else if(c.object(t))if(Object.assign)Object.assign(this.__msgs,t);else for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(this.__msgs[e]=t[e]);return this},t}();Object.keys(c).forEach((function(t){1===c[t].length?h[t]={get:function(){return this.__types.push(t),this}}:h[t]={value:function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return this.__types.push([t,n]),this}}})),Object.defineProperties(l.prototype,h);var g={get string(){return(new l).string},get number(){return(new l).number},get object(){return(new l).object},get array(){return(new l).array},get boolean(){return(new l).boolean},get any(){return new l},printout:!1,singleMode:!1};function A(t,n){try{if(!n||0===n.length)return t;var e=n[0],r=(+e).toString()===e?+e:e;return("number"==typeof r&&Array.isArray(t)||t.hasOwnProperty(r))&&1===n.length?t[r]:A(t[r],n.slice(1))}catch(t){return}}function m(t,e,r){if("string"==typeof t&&(t=t.trim()),t||-1!==e.__types.indexOf("required")){for(var a=c,u=e.__names,i=[],o=[],d=[],s=[],h=[],l=[d,s,h,r,e.__handler],A=function(t,n){return h.push(function(t,n,e,r){n=n||"";var a=e||f;return t=t.replace(/%a/g,n),/\%t/.test(t)&&(t=t.replace(/%t/g,(function(){var t=a.length>0?a.shift():"";return t||""}))),r&&r.length>0&&/\%\d+/.test(t)&&r.forEach((function(n,e){return t=t.replace(new RegExp("%"+e,"g"),n)})),t}((r=t,(a=e.__msgs)&&a[r]?a[r]:p[r]?p[r]:p.default),u[0],u[1],n));var r,a},m=function(n){return[t].concat(n).map((function(t){return c.string(t)||c.number(t)?String(t):""}))},y=0,$=e.__types.length;y<$;y++){var _=e.__types[y];if("string"==typeof _)if(!1===a[_](t)){if(d.push(_),A(_,m()),g.singleMode)break}else s.push(_);else if(Array.isArray(_))if(!1===a[_[0]].apply(a,n([t],_[1]))){if(d.push(_[0]),A(_[0],m(_[1])),g.singleMode)break}else s.push(_[0])}for(y=0,$=e.__customs.length;y<$;y++){var b=e.__customs[y],F=b[2]||[];if(0===b[0])if(!1===b[1].apply(b,n([t],F))){if(d.push(y),A(String(y),m(F)),g.singleMode)break}else s.push(y);else 1===b[0]&&(i.push(b[1].apply(b,n([t],F))),o.push([y,F]))}return e.isAsync?new Promise((function(t,n){Promise.all(i).then((function(n){n.forEach((function(t,n){if(!1===t){var e=o[n][0];d.push(e),A(String(e),m(o[n][1]))}else s.push(n)})),t(l)})).catch((function(t){n(t)}))})):l}}function y(t){if(!t)return!0;var n,e,r,a,u=t[0],i=t[1],o=t[2],d=t[3],s=t[4];if(u.length>0){var c=function(){var t={keys:u};return o.length>0&&(t.msgs=o),d&&d.length>0&&(t.path=d),t};return s&&s[0]&&s[0](c()),g.printout&&(n=c(),r=(e=n).path?e.path.join(".")+": \n":"",a=e.msgs?e.msgs.map((function(t,n){return(e.keys?e.keys[n].toString():"")+" ✗ "+t})):[],console.warn("[31m"+r+"[36m"+a.join("\n"))),!1}if(s&&s[1]){var f={keys:i};d&&d.length>0&&(f.path=d),s[1](f)}return!0}function $(t,n,e){if("object"!=typeof t&&!(n instanceof l))throw new Error("Invalid arguments");var r=[],a=[],u=function(){return r.length>0&&-1===r.indexOf(!1)};if(n instanceof l){var i=m(t,n);n.isAsync?a.push(i):r.push(y(i))}else{if("object"!=typeof t||"object"!=typeof n)throw new Error("Invalid arguments");var o=[];!function t(n,e,r){Array.isArray(n)&&n.length>0?n.forEach((function(n,a){var u=e.concat();u.push(a),n instanceof l?r(u,n):"object"==typeof n&&t(n,u,r)})):Object.keys(n).forEach((function(a){var u=n[a],i=e.concat();i.push(a),u instanceof l?r(i,u):"object"==typeof u&&t(u,i,r)}))}(n,[],(function(t,n){o.push([n,t])})),o.forEach((function(n){var u=n[0],i=n[1],o=A(t,i),d=e?e.concat(i):i,s=m(o,u,d);u.isAsync?a.push(s):r.push(y(s)),u.__substruct&&$(o,u.__substruct,d)}))}return a.length>0?new Promise((function(t,n){Promise.all(a).then((function(n){n.forEach((function(t){r.push(y(t))})),t(u())})).catch((function(t){n(t)}))})):u()}var _=g;_.validate=function(t,n){return $(t,n)},_.get=function(t,n){return A(t,c.string(n)?n.split("."):n)},t.Chain=l,t.default=_,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=validator.js.map