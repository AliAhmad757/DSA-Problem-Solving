class Notification:
    def __init__(self, to, subject, body, priority):
        self._to = to
        self._subject = subject
        self._body = body
        self._priority = priority

    def __str__(self):
        return f"Sending email {self._to} with {self._subject} and body {self._body} and priotiy {self._priority}"
    
class NotificationBuilder:
    def __init__(self):
        self._to = None
        self._subject = None
        self._body = None
        self._priority = None

    def to(self, email):
        self._to = email
        return self

    def subject(self, text):
        self._subject = text
        return self

    def body(self, text):
        self._body = text
        return self

    def priority(self, level):
        self._priority = level
        return self
    
    def build(self):
        if(not self._body or not self._to or not self._subject):
            raise ValueError("Can't proceed without filling all body and to and priority and subject")
        
        if(not self._priority):
            self._priority = "low"

        return Notification(self._to, self._subject, self._body, self._priority)



# ==========================================
# TEST CODE: BUILDER PATTERN
# ==========================================

print("--- Test 1: Successful Build ---")
try:
    # Notice the beautiful Fluent API chaining!
    email_notification = (
        NotificationBuilder()
        .to("ceo@worktech.com")
        .subject("AI Architecture Ready")
        .body("The new legal system is successfully refactored.")
        .priority("high")
        .build()
    )
    print("Notification Built Successfully:")
    print(email_notification)
except Exception as e:
    print(f"Failed: {e}")

print("\n--- Test 2: Validation Failure (Missing Subject) ---")
try:
    bad_notification = (
        NotificationBuilder()
        .to("test@example.com")
        .body("This should fail because subject is missing.")
        .build() 
    )
    print("Uh oh! Validation didn't work. It should have failed.")
except ValueError as e:
    print(f"Validation Passed (Error Caught Successfully): {e}")
    



        
