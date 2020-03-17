var SaveCustomerInfo = {};
SaveCustomerInfo.url = new Url();
var utm_source = SaveCustomerInfo.url.query.utm_source;
var pixelF= SaveCustomerInfo.url.query.p;
if (utm_source){
    SaveCustomerInfo.myDate = new Date();
    SaveCustomerInfo.myDate.setDate(SaveCustomerInfo.myDate.getDate() + 30);
    document.cookie = 'utm_source=' + utm_source + ';path=/; expires=' + SaveCustomerInfo.myDate;
    document.cookie = 'clickid=' + SaveCustomerInfo.url.query.clickid + ';path=/; expires=' + SaveCustomerInfo.myDate;
    document.cookie = 'pid=' + SaveCustomerInfo.url.query.pid + ';path=/; expires=' + SaveCustomerInfo.myDate;
    document.cookie = 'type=' + SaveCustomerInfo.url.query.type + ';path=/; expires=' + SaveCustomerInfo.myDate;
    document.cookie = 'affid=' + SaveCustomerInfo.url.query.affid + ';path=/; expires=' + SaveCustomerInfo.myDate;
}
if (pixelF){
    document.cookie = 'mypixel=' + pixelF + ';path=/; expires=' + SaveCustomerInfo.myDate;
}


