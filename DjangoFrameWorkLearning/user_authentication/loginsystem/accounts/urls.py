from django.urls import path
from .views import register_view, profile_view, login_view,logout_view, dashboard_view, password_change_view, session_info_view
from django.contrib.auth import views as auth_views
urlpatterns = [
    path("register/", register_view, name="register"),
    # path('login/', auth_views.LoginView.as_view(template_name='accounts/login.html'), name='login'),
    path('profile/', profile_view, name='profile'),
    path('login/', login_view, name='login'),
    path('logout', logout_view, name='logout'),
    path('dashboard/', dashboard_view, name='dashboard'),
    path('session_info/', session_info_view, name='session_info'),
    path('password_change/', password_change_view, name='password_change'),
    path('password_change/done/', auth_views.PasswordChangeDoneView.as_view(template_name='accounts/password_change_done.html'), name='password_change_done'),
]