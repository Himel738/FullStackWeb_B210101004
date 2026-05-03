from django.db import models

# Create your models here.

# Class -> Database --> Database e Hit Korbe
class Blog(models.Model): # Data BAse er Ekta Table hobe # automatic primary key create hobe
   name = models.TextField() # Table er Ekta Column Hobe
   image = models.ImageField(upload_to='media', blank=True, null=True) # Table er Ekta Column Hobe, Image Upload Korbe, Blog_images Folder e Save Korbe

   def __str__(self):
        return f"Blog No {self.id}: {self.name}"

# python manage.py makemigrations : Class --> Converts into SQL
# SQL --> Database e Hit Korbe
# python manage.py migrate : SQL --> Database e Hit Korbe

# MVT -->
# M --> Model --> Database er Sathe Kaj Kore
# V --> View --> User er Request Receive Kore, Response Return Kore
# T --> Template --> HTML File, User er Samne Dekhabe

# Template can be defined in 2 ways 
# 1. Globally (HTML File) --> Template Folder Create Kore, HTML File Create Kore, View e Template Render Kore
# 2. inner App Folder e (String) --> View e Template Render Kore, HTML File er Content String e Lekhe Dibe, User er Samne Dekhabe