# GETTING DATA

### Initial query:
https://pa.manchester.gov.uk/online-applications/weeklyListResults.do?action=firstPage
https://pa.manchester.gov.uk/online-applications/pagedSearchResults.do?action=page&searchCriteria.page=1
https://pa.manchester.gov.uk/online-applications/pagedSearchResults.do?action=page&searchCriteria.page=6

POST
searchCriteria.ward: 
week: 26 Nov 2018
dateType: DC_Validated
searchType: Application

### second page
https://pa.manchester.gov.uk/online-applications/pagedSearchResults.do?action=page&searchCriteria.page=2
GET
Cookie: JSESSIONID=l4SFyYwm26UQrOFGO6eEJky2x0DuspXWIA75Euw9.shpdmzm003; T9jAZCs6Brr4ceIj=epjbhh144ua7eqbghk8ddn4hpm30e914s07sg9nj6vjlnc5p8ht0; TestCookie=Test; _ga=GA1.3.1402407480.1543658798; _gid=GA1.3.1704530754.1543658798

https://github.com/invertase/react-native-firebase-starter/issues/35

---------------------------------------------------------
Set project parameters to:
---------------------------------------------------------
Project name:  MyPlanningAlerts
Company name:  kanec
Package name:  com.kanec.myplanningalerts
---------------------------------------------------------

## Firebase Function...

### Cron jobs
Via an external cron trigger service:
https://github.com/firebase/functions-samples/tree/master/delete-unused-accounts-cron
like:
https://www.easycron.com/

### Push notifications
https://medium.com/yale-sandbox/react-native-push-notifications-with-firebase-cloud-functions-74b832d45386
https://medium.com/@anum.amin/react-native-integrating-push-notifications-using-fcm-349fff071591

...can't make outbound networking without paying though....

So service account.
Note: Seems to need full "Owner" permission not just "Firestore Editor" to work?
