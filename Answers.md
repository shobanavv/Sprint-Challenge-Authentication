<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
     **Middleware:** is a funtion that have acess to request and response objects and the next middleware function in the application's request-response cycle. 

    **Session:** is a underlying logical framework used by client sessions to support consistency. If the deployment enforces authentication/authorization, the user must be authenticated to start a session, and only that user can use the session. 
    **bcrypt :**is a hashing function which generates salt and returns hashed password based on one way hash algorithm.
    **JWT :**- Json Web Token, is a compact JSON object that is base64url encoded and digitally signed and or encrypted. Signing is with JSON Web signature and Encryption is with JSON Web encryption.

1.  What does bcrypt do in order to prevent attacks?
     Bcrypt has a best kind of  cryptography algorthim in hashing function, besides incorporating a salt to protect against rainbow table attacks. 

1.  What are the three parts of the JSON Web Token?
    Three parts of JSON Web Token:

    _Header_ . _payload_. _signature_(secret)

    (algorithm and type). data. verifysignature
