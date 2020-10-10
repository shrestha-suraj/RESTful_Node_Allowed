The app does the following things:

1) THE API listens on a PORT and accepts incoming HTTP requests for
    - POST - GET - PUT - DELETE and  -HEAD
2) The API allows a client to connect, then create a new user , then edit and delete user
3) The API allows a user to "sign in" which gives them a token that they can use for
   subsequent authenticated requests.
4) The API allows the user to "sign out" which invalidates their token
5) The API allows a signed-in user to use their token to create a new "check- task for system"
6) The API allows a signed-in user to edit or delete any of their checks and limit their checks to 5
7) In the background, workers perform all the "checks" at the appropriate times, and send alerts
   to the users when a check changes its state from "up" to "down", or vice versa using TWILLO API