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

Deploy like:
```
firebase deploy --only functions
```

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


TODO: Why does 11+11+11+2 = 32?

### Run log:

/Users/cormorant/.nvm/versions/node/v10.4.1/bin/node /Users/cormorant/Code/MyPlanningAlerts/scraper/index.js
Starting Manchester Council scrape...
Got latests date:  10 Dec 2018
Getting first page...
Total page count:  4
Parsed 11 results from first page
Getting page 2...
Parsed 11 results from page 2
Getting page 3...
Parsed 11 results from page 3
Getting page 4...
Parsed 2 results from page 4
Geocoding 32 results...
Geocoded:  650 Wilmslow Rd, Manchester M20 6DG, UK
Geocoded:  46 Stanley Rd, Manchester M16 8HS, UK
Geocoded:  20 Belwood Rd, Manchester M21 9FN, UK
Geocoded:  Moss Bank, Manchester M8 5AB, UK
Geocoded:  29 Collingwood Rd, Manchester M19 2AP, UK
Geocoded:  597 Moston Ln, Manchester M40 9GE, UK
Geocoded:  10 Moorland Rd, Manchester M20 6BD, UK
Geocoded:  The Ice Plant, 39 Blossom St, Manchester M4 5AF, UK
Geocoded:  7 Shawbrook Rd, Manchester M19 1DJ, UK
Geocoded:  231 Mauldeth Rd, Manchester M19 1AB, UK
Geocoded:  1, 623 Wilbraham Rd, Manchester M21 9AT, UK
Geocoded:  2 Barlow Rd, Manchester M19 3DJ, UK
Geocoded:  2 Nobel Way, Manchester M1 7FA, UK
Geocoded:  Oxford Rd, Manchester M1 7ED, UK
Geocoded:  6 Cheetham Hill Road, The Hallmark Tower Site Office (Fernie Road entrance), Manchester M4 4FZ, United Kingdom
Geocoded:  3 Waltham Rd, Manchester M16 8PG, UK
Geocoded:  Cheetham Hill Rd, Manchester M8 8GG, UK
Geocoded:  3 Broughton St, Manchester M8, UK
Geocoded:  24 Kingsdale Rd, Manchester M18 7WB, UK
Geocoded:  13 Wilton Rd, Manchester M8 4NG, UK
Geocoded:  11 Groby Rd, Manchester M21 8AF, UK
Geocoded:  65 Whitworth St, Manchester M1 3NZ, UK
Geocoded:  61 Thelwall Ave, Manchester M14 7FW, UK
Geocoded:  63 Ladybarn Ln, Manchester M14 6YH, UK
Geocoded:  Crescent Rd, Manchester M8 5UR, UK
Geocoded:  34 Grosvenor Rd, Manchester M16 8JP, UK
Geocoded:  Piccadilly, Manchester M1, UK
Geocoded:  556 Hyde Rd, Manchester M18 7AA, UK
Geocoded:  Motel One Manchester-Royal Exchange, 11 - 15 Cross St, Manchester M2 1WD, United Kingdom
Geocoded:  Motel One Manchester-Royal Exchange, 11 - 15 Cross St, Manchester M2 1WD, United Kingdom
Geocoded:  1 Balliol St, Manchester M8 0WS, UK
Storing 32 scraped planning applications...
Batch: Add app 122122TCA2018
Batch: Add app 122118TCA2018
Batch: Add app 122113FH2018
Batch: Add app CDN180929
Batch: Add app 122110FH2018
Batch: Add app 122100FH2018
Batch: Add app 122104FH2018
Batch: Add app CDN180927
Batch: Add app 122086FH2018
Batch: Add app 122091FH2018
Batch: Add app 122084AO2018
Batch: Add app CDN180922
Batch: Add app 122080NMC2018
Batch: Add app CDN180920
Batch: Add app CDN180921
Batch: Add app 122082LP2018
Batch: Add app 122087FO2018
Batch: Add app 122083P3OPA2018
Batch: Add app 122078FH2018
Batch: Add app 122079FH2018
Batch: Add app 122068FH2018
Batch: Add app CDN180918
Batch: Add app 122035FH2018
Batch: Add app 122021FO2018
Batch: Add app 121984JO2018
Batch: Add app 121985FH2018
Batch: Add app 121970AO2018
Batch: Add app CDN180807
Batch: Add app 121585FO2018
Batch: Add app 121586LO2018
Batch: Add app 121236FH2018
Writing batch...
Commit OK.

Process finished with exit code 0

## Maps
https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md


issue....
https://github.com/react-native-community/react-native-maps/issues/428
https://github.com/react-native-community/react-native-maps/issues/222
Which lead to this:
https://github.com/facebook/react-native/issues/21242
then this:
https://github.com/facebook/metro/issues/265

jest-haste-map: @providesModule naming collision

Try following:
https://codeburst.io/react-native-google-map-with-react-native-maps-572e3d3eee14
?

Oh god
https://github.com/react-native-community/react-native-maps/issues/249


# Android dev menu without shake:
```
adb shell input keyevent KEYCODE_MENU && adb shell input keyevent ENTER && adb shell input keyevent ENTER
```


## Notifications:

https://rnfirebase.io/docs/v5.x.x/notifications/introduction
....sending via https://console.firebase.google.com/u/0/project/my-planning-alerts/notification just works out of the box!


# Other Local authorities:
https://publicaccess.trafford.gov.uk/online-applications/search.do?action=weeklyList

TODO: Sort warning on iOS: https://github.com/facebook/react-native/issues/16376


# Geosearch / location

Geohashing, something like:
https://firebase.googleblog.com/2014/06/geofire-20.html
https://github.com/firebase/geofire-js/blob/master/docs/reference.md

This explains concept:
https://www.youtube.com/watch?v=lO1S-FAcZU8

Firestore:
https://stackoverflow.com/questions/46630507/how-to-run-a-geo-nearby-query-with-firestore

Aha. This is what we need:
https://github.com/geofirestore/geofirestore-js#example-usage
(use on both scraper and app)

Uses geohash and ....
https://firebase.google.com/docs/reference/android/com/google/firebase/firestore/GeoPoint
