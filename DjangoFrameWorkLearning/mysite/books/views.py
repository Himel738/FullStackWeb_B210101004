from django.shortcuts import render
from django.views.generic import CreateView, DeleteView, ListView, UpdateView
from books.models import Book
from django.urls import reverse_lazy
from django.contrib import messages
# Create your views here.
class BookListView(ListView):
    model = Book
    template_name = "books/book_list.html"

class BookCreateView(CreateView):
    model = Book
    template_name = "books/book_form.html"
    fields = ["title", "author"]
    success_url = reverse_lazy("book_list")
    success_message = "Book created successfully!"

    def form_valid(self, form):
        messages.success(self.request, self.success_message)
        return super().form_valid(form)

class BookUpdateView(UpdateView):
    model = Book
    template_name = "books/book_update.html"
    fields = ["title", "author"]
    success_url = reverse_lazy("book_list")
    success_message = "Book updated successfully!"
    
    def form_valid(self, form):
        messages.success(self.request, self.success_message)
        return super().form_valid(form)

class BookDeleteView(DeleteView):
    model = Book
    template_name = "books/book_confirm_delete.html"
    success_url = reverse_lazy("book_list")
    success_message = "Book deleted successfully!"

    def form_valid(self, form):
        messages.success(self.request, self.success_message)
        return super().form_valid(form)