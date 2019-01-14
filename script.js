// This is the API Key for Instagram
30605f2e5eca43a299d7c5842dbeda08

// Redirect user to IG authorization URL
"https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=30605f2e5eca43a299d7c5842dbeda08"

//
"http://your-redirect-uri?code=30605f2e5eca43a299d7c5842dbeda08"

var APIKey = "30605f2e5eca43a299d7c5842dbeda08"
var queryURL = "https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=" + APIKey + "http://your-redirect-uri?code=" + APIKey

curl -F '30605f2e5eca43a299d7c5842dbeda08' \
-F 'client_secret=cd4123e5f8834e0eba606baa2c8dec76' \
-F 'grant_type=authorization_code' \
-F 'redirect_uri=http://your-redirect-uri?error=access_denied&error_reason=user_denied&error_description=The+user+denied+your+request' \
-F 'code=CODE' \
"https://api.instagram.com/oauth/access_token"

{
    "access_token": "fb2e77d.47a0479900504cb3ab4a1f626d174d2d",
    "user": {
        "id": "1574083",
        "username": "snoopdogg",
        "full_name": "Snoop Dogg",
        "profile_picture": "..."
    }
}

var userRequest

function userRequest() {
    if (userRequest === "no"){
        "http://your-redirect-uri?error=access_denied&error_reason=user_denied&error_description=The+user+denied+your+request" + APIKey
    }
}
