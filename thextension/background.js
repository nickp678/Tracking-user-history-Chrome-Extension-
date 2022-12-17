// background.js

chrome.history.onVisited.addListener((historyItem) => {
    
    chrome.scripting.executeScript({
            target: { historyItem : historyItem },
            files: ["./content1.js"]

        })
    
}); 

