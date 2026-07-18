
from django.urls import include, path
from .import views

urlpatterns = [
    path("students/", views.studentsView, name="students"),
    path('students/<int:pk>', views.studentDetailView),

    path('employees/', views.Employees.as_view()),
    path('employees/<int:pk>', views.EmployeeDetail.as_view())
]