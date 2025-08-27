const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia09iU2o1ZVc0NVNveHJFcmlnU2ZBeWVycnRhMEJoVFF0c2V2YmFwa2hWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnMybUg3WCt5bHlrWnlRV1pOcFFSN25KUEJ0ZjhnNEhQM1h6REFESG9COD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTHlHV0d2Y1BDcXdFdnlnNUVodFFpZ3V4SnJIUnFyWk1sWFQxVk5KSFhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJORzFOc01mRFRLcEVJM2NrYlFkTWtTb1B0S29zUTZ5Q0RnWmxHNDJvRHprPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllIaGUvbHUwSUp2YVhFWDkxd3ltcFFpS0VLWFBGV0pxS1hNYitnY1F4RTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlgyUDh1Z21aRlpqNERDeG9oT1E4ME1MTk1QTVVvekZUL0ZudXBkcHRCRU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia001NnhHY0F5ZVpDVmUxMmd1M1IyUE8yTy9CRWM2TzgwblJDOUdFaDZIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0VFd3QxaGJDbWhMLzdHL3pFUTF2WjZscWZIUE1TS1hJS1JFdmNrMUREST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllzUlQ2djVwZjUvYjQrbnl0bGNYS2tWUFRJYmEyNWFqUVdNclMreGxTRzJKczR5YnpJdnRGbXh5ei9EZHBUdHdPWHpiS2h3aHRWNWNPMnJZdXVTbkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjAsImFkdlNlY3JldEtleSI6Ilk2bTVGUjlVRVR5bXJzbHkvWmJ1Nm5DdHhITXAxeGJ1MW9XYWcvZElObVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTEzNTkxOTQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdCQ0Q5ODY1RUI5MjEzOEJDQTQwOTRBQzMwN0Y0NTU4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYzMDg1NjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzExMzU5MTk0NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJENUIxNjNGMDU3NzdGREVFMkI1NjA5OTRFMzUzMjA3RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MzA4NTY2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJTWjg4Mk05UCIsIm1lIjp7ImlkIjoiOTIzMTEzNTkxOTQ0OjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxODg0MDMzMjA2ODA0Nzk6MUBsaWQiLCJuYW1lIjoiQWhtZWQgQWxpIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLR1d3T1VGRU0zSXZNVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmNWdkeXFDR3ZZcFNqaG1tVmJQbG43N3FTcHpRU3lLcjJaUjRPWUl4VmlNPSIsImFjY291bnRTaWduYXR1cmUiOiJIMkNoWkdUd0JhVGZrMlRWSVl0MFZsVXFBYWwrdXpZaUpEelJ1TisrSFROdk5IMHJHWDA2ZmFPSGdDd0ZXeDJyM0N0YTVEL1hCQmhtWDl2YndWNTlBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWm1XcUFTV0MxZzA4aGplMkMxd2llanpVemRlM0FWVzFWMjE2L0xJamZUR3BWSlJJVk9SQnhkOEtWZ3RZUVkvY04rcjlpSWRsWlUyTzkrV2IrbUNHQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMTM1OTE5NDQ6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYK1lIY3FnaHIyS1VvNFpwbFd6NVorKzZrcWMwRXNpcTltVWVEbUNNVllqIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYzMDg1NjEsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRnYvIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ADEEL-MD♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://url.bwmxmd.online/Adams.wxwec28p.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ADEEL-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ADEEL-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923390809008",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ADEEL-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© PAWERAD BY ADEEL ABBASI Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://url.bwmxmd.online/Adams.wxwec28p.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923390809008",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
