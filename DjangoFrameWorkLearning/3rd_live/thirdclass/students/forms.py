from django import forms
from .models import Student

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ["name", "age", "grade", "email", "profile_pic"]

        labels = {
            "name": "Full Name",
            "age": "Age",
            "grade": "Grade",
            "email": "Email Address",
            "profile_pic": "Profile Picture",
        }

        widgets = {
            "name": forms.TextInput(attrs={"class": "form-control", "placeholder": "Enter full name"}),
            "age": forms.NumberInput(attrs={"class": "form-control", "placeholder": "Enter age"}),
            "grade": forms.TextInput(attrs={"class": "form-control", "placeholder": "Enter grade"}),
            "email": forms.EmailInput(attrs={"class": "form-control", "placeholder": "Enter email address"}),
            "profile_pic": forms.ClearableFileInput(attrs={"class": "form-control-file"}), 
        }