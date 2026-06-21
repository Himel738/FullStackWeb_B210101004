from django.shortcuts import render
from .forms import UserRegisterForm
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages as message
from django.shortcuts import redirect
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import TemplateView
from django.http import HttpResponse

# Create your views here.
def register_view(request):
    if request.method == "POST":
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            message.success(request, "Registration successful.")
            return redirect('login')
            
    else:
        form = UserRegisterForm()
    return render(request, "accounts/register.html", {"form": form})

def profile_view(request):
    if not request.user.is_authenticated:
        return redirect('login')
    return render(request, "accounts/profile.html")

def login_view(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('profile')
    else:
        form = AuthenticationForm()
    return render(request, "accounts/login.html", {"form": form})

def logout_view(request):
    logout(request)
    return redirect('login')

def password_change_view(request):
    if not request.user.is_authenticated:
        return redirect('login')
    return render(request, "accounts/password_change.html")

@login_required(login_url='login')
def dashboard_view(request):
    return render(request, "accounts/dashboard.html")
    
class DashboardView(LoginRequiredMixin, TemplateView):
    login_url = 'login'
    template_name = "accounts/dashboard.html"
@login_required
def session_info_view(request):
    session_key = request.session.session_key
    user_id = request.session.get('_auth_user_id')

    response = f"""
    <h1> Session Information </h1>
    <p> Session Key: {session_key} </p>
    <p> User ID: {user_id} </p>
    """

    return HttpResponse(response)