from django.shortcuts import render
from django.http import HttpResponse
from .models import Blog

# Create your views here.

# views 2 types - function based view and class based view
def home(request):
  # return HttpResponse("<h2> KutuMia20 </h2>")
  blogs = Blog.objects.all() # Database e jabe, Blog Table er sob data ke niye asbe
  # print(blogs) 
  return render(request, "home.html", {"blogs": blogs}) # index.html ke render kore user er samne dekhabey

# Static Vs Media
# Static --> CSS, JS, Image (User er Samne Dekhabe)