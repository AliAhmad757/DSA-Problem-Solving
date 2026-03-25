from abc import ABC, abstractmethod

class Person(ABC):
    @abstractmethod
    def name(self):
        pass

class Student(Person):
    pass   # name implement nahi kiya

# abhi tak koi error nahi
# lekin jab object banayenge:
s = Student()   # yahan TypeError aayega