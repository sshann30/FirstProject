// This is the API Key for Instagram
30605f2e5eca43a299d7c5842dbeda08

// Redirect user to IG authorization URL
"https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=30605f2e5eca43a299d7c5842dbeda08"

// Redirect user from instagram back to site
"http://your-redirect-uri?code=30605f2e5eca43a299d7c5842dbeda08"


// Variables set for AJAX call
var APIKey = "30605f2e5eca43a299d7c5842dbeda08"
var queryURL = "https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=" + APIKey + "http://your-redirect-uri?code=" + APIKey

$.ajax({
    url: queryURL,
    method: "GET"
})


// Request access token

$.post("https://api.instagram.com/oauth/access_token", {
    client_id: cd4123e5f8834e0eba606baa2c8dec76,
    client_secret: cd4123e5f8834e0eba606baa2c8dec76,
    grant_type: "authorization_code",
    redirect_uri: "github link",
    code: "in docs"
})
.then(function(response) {
console.log(response)
});


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
