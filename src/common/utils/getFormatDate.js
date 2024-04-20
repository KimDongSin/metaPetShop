export function getFormatDate(date){
    var year = date.getFullYear();              //yyyy
    var month = (1 + date.getMonth());          //M
    month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
    var day = date.getDate();                   //d
    day = day >= 10 ? day : '0' + day;          //day 두자리로 저장

    var hours = ('0' + date.getHours()).slice(-2); 
    var minutes = ('0' + date.getMinutes()).slice(-2);
    var seconds = ('0' + date.getSeconds()).slice(-2); 
    
    var timeString = hours + ':' + minutes  + ':' + seconds;

    return  year + '-' + month + '-' + day + " " +timeString;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
}