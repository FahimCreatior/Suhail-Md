const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254797992027" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254797992027";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254797633626,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_48_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAwLFxuICAgICAgICA1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgODUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM5LFxuICAgICAgICA5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDc5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNixcbiAgICAgICAgODMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgODQsXG4gICAgICAgIDc1LFxuICAgICAgICAyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxLFxuICAgICAgICAxODksXG4gICAgICAgIDI1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDY1LFxuICAgICAgICA2NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NixcbiAgICAgICAgNjgsXG4gICAgICAgIDMwLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTjNHUHc0eHV5dFNZbW04OVVIeVRnNHg5UXhiREdnZzRBUHl1ZXVZYWdMTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiem56dy1DR0NUU09fcXgtS0pzc3FwQVwiLFxuICBcInBob25lSWRcIjogXCJmZTNlZDZlMS0yMDlhLTQ2YTYtOGFkMy1hMWMxZWM2MzgzMzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI3LFxuICAgICAgMTMsXG4gICAgICAzNCxcbiAgICAgIDMwLFxuICAgICAgMSxcbiAgICAgIDIyNixcbiAgICAgIDI0NixcbiAgICAgIDEwOSxcbiAgICAgIDI1MyxcbiAgICAgIDE4MyxcbiAgICAgIDIyOCxcbiAgICAgIDE0NyxcbiAgICAgIDE0MCxcbiAgICAgIDMsXG4gICAgICAxNDksXG4gICAgICA4NixcbiAgICAgIDU2LFxuICAgICAgMjE5LFxuICAgICAgNzQsXG4gICAgICA1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NCxcbiAgICAgIDI0MSxcbiAgICAgIDIzMyxcbiAgICAgIDM5LFxuICAgICAgMTA2LFxuICAgICAgMjAyLFxuICAgICAgMTcyLFxuICAgICAgMTQ3LFxuICAgICAgMTUxLFxuICAgICAgMTQzLFxuICAgICAgMTc5LFxuICAgICAgODYsXG4gICAgICAxMjIsXG4gICAgICAyNCxcbiAgICAgIDIwMSxcbiAgICAgIDE4MCxcbiAgICAgIDI1MyxcbiAgICAgIDIxLFxuICAgICAgMTA2LFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhQQVhZQUVGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3OTc5OTIwMjc6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE4MDE2OTY5MTU4NzEwOjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTk9iclZVUWpNVG50QVlZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGdVhmNHBjendLZi9UdkpoanRqSklUZDVSY2FmZkZRQVBhUEZ6WXFyU0VVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFxbVVhbmJ0QUxvcjgrdFpvR1BzbXRpOWhDODV4bnNDQ2lUUEcyd3lmOUllL3FLVm5KMmQ5QWRMd0kzOFNEdHpsWjlIYXNMM05ycmFGMmRWT1dENUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZYYXRUd3J4aFdyMUdiMExqdTQrMVlnL3lEeGVFWWt3d0hxNUlOa25SclRNVEp1SVJWdEVBRitiN21naTZRRHZUZWYzY3B3MHpnN2ZXeHV4QktuSUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc5Nzk5MjAyNzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzNjA5MTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNS1VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1LVS5qc29uIjogIntcImtleURhdGFcIjpcImJFN1pKSGZDS0Y0VXFRR25BU2toMHZjUC9RTUw2Y09waWZCeGdSZnVsRjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc4OTk4NzM4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
