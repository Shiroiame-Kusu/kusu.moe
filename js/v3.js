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
