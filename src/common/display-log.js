window.displayLog = function(data) {
    document.getElementById('log-area').prepend(JSON.stringify(data) + '\r\n')
}
console.log("dispalyLog", displayLog)