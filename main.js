// ==UserScript==
// @name        ygdy_ad_killer
// @namespace   Ygdy Ad Killer
// @match       https://www.dytt8.net/html/gndy/*
// @grant       none
// @version     1.0
// @author      MrZhang365
// @description 该脚本可以移除阳光电影网站上的部分广告
// @license     MIT
// ==/UserScript==

const badClassNames = ['jjjjasdasd','hmcakes11','hmcakes123','hmcakes112']
const badIDs = ['HMRichBox','hbidbox','mp4richtourl']
function main(){
  badClassNames.forEach((name) => {
    var badElements = document.getElementsByClassName(name)
    if (badElements === null){
      return
    }
    var i = 0
    for (i = 0;badElements.length !== 0;i){
      badElements[i].parentElement.removeChild(badElements[i])
    }
  })

  badIDs.forEach((id) => {
    var badElement = document.getElementById(id)
    if (badElement === null){
      return
    }
    badElement.parentElement.removeChild(badElement)
  })
}

window.onload = setTimeout(main,500)
