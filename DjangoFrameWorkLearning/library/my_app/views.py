from django.shortcuts import render
from django.http import HttpResponse
from .import models
from django.db.models import Count
from django.db.models import Q
# Create your views here.
def home(request):
  #  # Select Related ---> Only for One to Many
  # #  books = models.Book.objects.all() # 1 SQL Query
  # #  for book in books: # N+1 SQL Query
  # #       print(book.name, book.author.name)
  #  books = models.Book.objects.select_related("author") # SQL Inner Join
  #  for book in books: # N+1 Normal Loop
  #       print(book.name, book.author.name)

  # # Prefetch Related ---> Only for Many to Many
  #  students = models.Student.objects.prefetch_related("courses") # SQL 2 Queries
  #  for student in students: # N+1 Normal Loop
  #       print(student.name)
  #       for course in student.courses.all(): # N+1 Normal Loop
  #           print(course.name)

  # Aggregations --> Without Group By
  # books = models.Book.objects.aggregate(total_books = Count("id"))
  # print(books)

  # # Annonate --> With Group By
  # students = models.Student.objects.annotate(num_courses = Count("courses"))
  # for student in students:
  #     print(student.name, student.num_courses)

  # # ORDER BY
  # books = models.Book.objects.order_by("id") # Ascending
  # books = models.Book.objects.order_by("-id")[:1] # Descending
  # print(books)

  # Advanced Query
  # book1 = models.Book.objects.filter(name__icontains="book1") # SQL: WHERE name LIKE 'book1%' by icontains it will be case insensitive and it will search for book1 anywhere in the name
  # print(book1)

  books = models.Book.objects.filter(Q(name__icontains="book1") | Q(name__icontains="book2")) # SQL: WHERE name LIKE 'book1%' OR name LIKE 'book2%'
  print(books)

  return HttpResponse("Hello, World!")