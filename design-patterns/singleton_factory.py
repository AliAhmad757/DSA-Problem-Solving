from threading import Lock
from abc import ABC, abstractmethod

class AppConfig:
    _instance = None
    _lock = Lock()

    def __new__(cls):
        with cls._lock:
            if cls._instance is None:
                cls._instance = super().__new__(cls)
            return cls._instance
        
class PaymentProcessor(ABC):
    @abstractmethod
    def process_payment(self, amount):
        pass

class StripeProcessor(PaymentProcessor):
    def process_payment(self, amount):
        print(f"Processing ${amount} via Stripe")

class PayPalProcessor(PaymentProcessor):
    def process_payment(self, amount):
        print(f"Processing ${amount} via PayPal")

class PaymentFactory():
    @staticmethod
    def get_processor(type_string):
        if(type_string == "stripe"):
            return StripeProcessor()
        elif(type_string == "paypal"):
            return PayPalProcessor()
        else:
            raise Exception("No Payment Method Found")


## ==========================================
# TEST CODE: SINGLETON
# ==========================================
print("--- Test 1: Singleton ---")
config1 = AppConfig()
config2 = AppConfig()

print(f"Config 1 ID: {id(config1)}")
print(f"Config 2 ID: {id(config2)}")
if config1 is config2:
    print("SUCCESS: Both variables point to the exact same object in memory!")

# ==========================================
# TEST CODE: FACTORY
# ==========================================
print("\n--- Test 2: Factory ---")
processor1 = PaymentFactory.get_processor("stripe")
processor1.process_payment(100)

processor2 = PaymentFactory.get_processor("paypal")
processor2.process_payment(250)