let trim=function(){
    console.log('FunctionUP after trim is='+' FunctionUp '.trim())
}

let changesToLowerCase=function(){
    console.log('FunctionUP after trim is='+' FunctionUp '.toLowerCase())
}

let changesToUpperCase= function(){
    console.log('FunctionUP after trim is='+' FunctionUp '.toUpperCase())
}

module.exports.getTrim=trim
module.exports.getLowerCase=changesToLowerCase
module.exports.getUpperCase=changesToUpperCase

