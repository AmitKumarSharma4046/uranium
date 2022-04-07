let date= function(){
    today=new Date
    let d=today.getDate()
    console.log('The date today is='+d)
}
let month= function(){
    today=new Date
    let m=today.getMonth()+1
    console.log('The month is='+m)
}
let getBatchInfo=function(){
    console.log('uranium,W2D4 ,today topic is Node.js')
}

module.exports.getDate=date
module.exports.getMonth=month
module.exports.getBatchInformation=getBatchInfo

