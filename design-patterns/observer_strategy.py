from abc import ABC, abstractmethod

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

# 1. Dummy Callback Functions banayein (Yeh wo log hain jo event ka wait kar rahe hain)
def send_welcome_email(data):
    print(f"[EMAIL SERVICE]: Welcome email sent to {data['name']} ({data['email']})")

def setup_user_profile(data):
    print(f"[PROFILE SERVICE]: Profile database created for User ID: {data['id']}")

def send_sms_alert(data):
    print(f"[SMS SERVICE]: Alert! New user joined: {data['name']}")

# 2. Apne EventEmitter ka object banayein
event_bus = EventEmitter()

print("--- Test 1: Subscribing Services ---")
# 3. Functions ko subscribe karein "user_registered" event par
event_bus.subscribe("user_registered", send_welcome_email)
event_bus.subscribe("user_registered", setup_user_profile)
event_bus.subscribe("user_registered", send_sms_alert)
print("3 services subscribed to 'user_registered'.\n")

# 4. Event ko EMIT karein (Action trigger karein)
print("--- Test 2: Emitting Event ---")
new_user_data = {"id": 101, "name": "Ali Ahmad", "email": "ali@example.com"}

# Yahan jadoo hona chahiye: Ek line emit hogi, aur teeno functions khud chalne chahiye!
event_bus.emit("user_registered", new_user_data)


# 5. Unsubscribe ka test karein
print("\n--- Test 3: Unsubscribing SMS Service ---")
event_bus.unsubscribe("user_registered", send_sms_alert)
print("SMS service unsubscribed.\n")

# 6. Dobara EMIT kar ke check karein
print("--- Test 4: Emitting Event Again ---")
second_user_data = {"id": 102, "name": "Talha", "email": "talha@example.com"}

# Ab sirf Email aur Profile wale functions chalne chahiye, SMS wala nahi chalna chahiye!
event_bus.emit("user_registered", second_user_data)


class LLMStrategy:
    @abstractmethod
    def generate():
        pass

class OpenAIStrategy(LLMStrategy):
    def generate(self, prompt):
        print(f"[OpenAI] Generating response for: {prompt}")


class DummyStrategy(LLMStrategy):
    def generate(self, prompt):
        print(f"[Dummy] This is a mock response for: {prompt}")

class LLMService:
    def __init__(self, strategy):
        self.strategy = strategy

    def swap_strategy(self, new_strategy):
        self.strategy = new_strategy

    def get_answer(self, prompt):
        self.strategy.generate(prompt)


# ==========================================
# TEST CODE: STRATEGY PATTERN
# ==========================================

print("--- Test 1: Initializing with OpenAI ---")
ai_service = LLMService(OpenAIStrategy())
ai_service.get_answer("Explain Single Responsibility Principle.")

print("\n--- Test 2: Swapping to Dummy Strategy (Zero code changes to LLMService!) ---")
ai_service.swap_strategy(DummyStrategy())
ai_service.get_answer("Explain Single Responsibility Principle.")