The following attached files need to be installed on your Raspberry Pi:
=============
1000-GPIO_Modules.hgx  |  GPIO management for Rasberry Pi B+ or 2
1000-PiFace_Digital.hgx  |  PiFace Digital Driver
1001_Garden_Sprinkler_System (gpio & piface digital compatible) NEW.hgx  |  The Sprinkler App
Guytpetj.zip  |  The Widget files for this App - copy the content of the zip file to: /usr/local/bin/homegenie/html/pages/control/widgets/ 


CRON:
 * * * * * ( 1 2 3 4 5 ) command to execute
1 =  min (0 to 59)
2 = hour (0 to 23)
3 = day of month (1 to 31)  (1-31/2 = odd days, 2-30/2 = even days)
4 = month (1 to 12)
5 =  day of week (0 to 6) (0 to 6 are Sunday to Saturday

Both rainfall and wind speed require the " jkUtils-OpenWeatherData" app for input. Ensure you enable and configure this app. 

Program Set-up Parameters:
01. Sprinkler Schedule A (Cron) [* * * * *]
02. Sprinkler Active Time (00,00,00,00,00,00) 
03. Sprinkler Schedule B (Cron) [* * * * *]
04. Sprinkler Active Time (00,00,00,00,00,00) 
05. Sprinkler Schedule C (Cron) [* * * * *]
06. Sprinkler Active Time (00,00,00,00,00,00) 
07. Sprinkler Pause Between Groups Time in Seconds
08. mm of Rainfall in last 24 hours to Pause Sprinklers
09. Maximum Wind Speed (m/s) to Pause Sprinklers
10. Auto Activate (at HomeGenie start): ON or OFF
11. GPIO or PiFaceD


"If I am only using 4 of the 6 valves (groups) as I only have 4 valves, with a duration time of 10 minutes each. I would enter this..."
answer: 10,10,10,10,00,00

"So in schedule A, If am only using valves 3 and 4 for 20 minutes and 25 minutes respectively, it would look like this..." 
answer: 00,00,20,25,00,00
