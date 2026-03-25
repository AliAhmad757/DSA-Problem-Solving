from abc import ABC, abstractmethod
from threading import Lock


class AppConfig:
    _instance = None
    _lock = Lock()

    def __new__(cls):
        with cls._lock:
            if cls._instance is None:
                cls._instance = super().__new__(cls)
            return cls._instance
        

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

class SendStrategy:
    @abstractmethod
    def send():
        pass

class Youtube(SendStrategy):
    def send(self, data):
        print(f"[Youtube] strategy {data}")


class Website(SendStrategy):
    def send(self, data):
        print(f"[Website] strategy {data}")


class NotifierFactory():
    @staticmethod
    def get_processor(type_string):
        if(type_string == "youtube"):
            return Youtube()
        elif(type_string == "website"):
            return Website()
        else:
            raise Exception("No send strategy found")


class EventEmitter:
    def __init__(self):
        self.events = {}

    def subscribe(self, event_name, callback):
        if(event_name in self.events):
            self.events[event_name].append(callback)
        else:
            self.events[event_name] = [callback]

    def unsubscribe(self, event_name, callback):
        if(event_name in self.events):
            self.events[event_name].remove(callback)

    def emit(self, event_name, data):
        # Pehle check karein ke kya event dictionary mein hai
        if event_name in self.events:
            # Us event ki list nikalen aur loop chalayen
            for callback in self.events[event_name]:
                callback(data)  # FIX: Function ko run kar rahe hain

# ==========================================
# 🚀 INTEGRATION TEST: ALL 5 PATTERNS TOGETHER
# ==========================================

if __name__ == "__main__":
    # 1. SINGLETON: System configuration set kar rahe hain
    app_config = AppConfig()
    app_config.app_name = "Enterprise AI SaaS"
    print(f"✅ [Singleton] System Booted: {app_config.app_name}")

    # 2. OBSERVER: Event Manager initialize kiya
    event_manager = EventEmitter()

    # --- MASTER CALLBACK FUNCTION ---
    # Yeh wo function hai jo Observer run karega jab koi naya user aayega
    def process_new_user(user_data):
        print(f"\n--- 🔔 EVENT: 'user_registered' triggered for {user_data['name']} ---")
        
        # 3. BUILDER: User ke liye custom notification payload banaya
        try:
            notification = (
                NotificationBuilder()
                .to(user_data['email'])
                .subject(f"Welcome to {app_config.app_name}")
                .body("Your AI workspace is ready!")
                .priority("high")
                .build()
            )
            print(f"✅ [Builder] Payload Created -> {notification}")
        except ValueError as e:
            print(f"❌ [Builder Error]: {e}")
            return

        # 4. FACTORY: User ki preference ke hisaab se processor manga
        channel = user_data.get("preference")
        try:
            sender = NotifierFactory.get_processor(channel)
            print(f"✅ [Factory] Successfully created processor for '{channel}'")
            
            # 5. STRATEGY: Message send kar diya (bina if/else ke)
            print("✅", end=" ")
            sender.send(notification) 
        except Exception as e:
            print(f"❌ [Factory/Strategy Error]: {e}")


    # --- WIRING IT ALL UP ---
    # Observer ko bataya ke jab bhi 'user_registered' ho, yeh functions chalao
    event_manager.subscribe("user_registered", process_new_user)

    # ==========================================
    # THE GRAND FINALE: TRIGGER THE EVENTS!
    # ==========================================
    
    print("\n>> Simulating: User 1 signing up on Website...")
    event_manager.emit("user_registered", {
        "name": "Ali Ahmad", 
        "email": "ali@worktech.com", 
        "id": 101, 
        "preference": "website"
    })

    print("\n>> Simulating: User 2 signing up via Youtube Promo...")
    event_manager.emit("user_registered", {
        "name": "Hamza", 
        "email": "hamza@example.com", 
        "id": 102, 
        "preference": "youtube"
    })