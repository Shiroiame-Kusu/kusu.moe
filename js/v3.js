var final_date = 'Sept.6th.2022'
var final_version = 'Ver 1.5'

var windowWidth = $(window).width();
var meting_api = 'https://music-api.bwmc.live/?type=:type&id=:id';
window.addEventListener('load', function () {

    //载入动画
    //Preload Animation
    $('.preload-customize').attr('class', 'loaded');
    //Sakurairo Preload Animation
    $('#preload').attr('class', 'loaded');
})

//Forked from Kusunoki
//Based On MIT License
var myDate = new Date;
var mon = myDate.getMonth() + 1;
var date = myDate.getDate();
var days = ['4.4', '5.12', '7.7', '9.9', '9.18', '12.13'];
for (var day of days) {
    var d = day.split('.');
    if (mon == d[0] && date == d[1]) {
        document.write(
            '<style>html{-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);_filter:none}</style>'
        )
        var ImportantDateNoticeStyle = document.getElementById("footer")
        ImportantDateNoticeStyle.innerHTML = ImportantDateNoticeStyle.innerHTML + '<style>#ImportantDateNotice{font-size:18px;}</style>'
        var ImportantDateNotice =  document.getElementById("ImportantDateNotice")
        ImportantDateNotice.innerHTML = ImportantDateNotice.innerHTML + '今天是国家纪念日，本站默认启用纪念模式'
    }
    else{
        var KFC = document.createElement("script");
        KFC.src = "https://cdn.kusu.moe/KFC-Crazy-Thursday/KFC-crazy-thursday.js";
        document.body.appendChild(KFC);
    }
}

console.clear();
console.log(`Kusu.moe Redirecting
Based On kaygb-v3`)
var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(255,137,241);
`
var styleTitle2 = `
font-size:12px;
color: rgb(153,248,255);
`
var styleContent = `
color: rgb(153,248,255);
`
var styleContent0 = `
color: rgb(0,255,0);
`
var title1 = 'kusu.moe'
var title2 = 'Powered by Shiroiame Kusu'
var content = `
版 本 号：` + final_version + `
更新日期：` + final_date + `

主页:  https://kusu.moe
Github:  https://github.com/Shiroiame-Kusu/kusu.moe
邮箱：kusu@kusu.moe

`
var content0 = `
Based on https://github.com/kaygb/KZHomePage
`
console.log(`%c${title1} %c${title2}
%c${content} %c${content0}`, styleTitle1, styleTitle2, styleContent, styleContent0)
