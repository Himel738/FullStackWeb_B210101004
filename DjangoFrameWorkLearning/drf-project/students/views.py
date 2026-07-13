from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def students(request):
    students = [
        {id: 1, "name": "John Doe", "age": 20},
        {id: 2, "name": "Jane Smith", "age": 22},
        {id: 3, "name": "Bob Johnson", "age": 21}
    ]
    return HttpResponse(students)