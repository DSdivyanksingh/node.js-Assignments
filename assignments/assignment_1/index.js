function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in 
    const cl_input=process.argv
    return cl_input[cl_input.length-1];
}

function getNameFromEnv() {
    // Write your code here
    process.env.mame="Yash";
    return process.env.name;
}

function getNameFromReadLine() {
    // Write your code here
    const readLine=require("readline");
    const rl=readLine.createInterface({
        input:process.stdin,
        output:process.stdout

    });
    var inputs=null
    rl.question("Input",(ans)=>{
        inputs=ans;
    })

}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}