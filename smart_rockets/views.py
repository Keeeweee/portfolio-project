from django.shortcuts import render


# Create your views here.
def smart_rockets(request):
    return render(request, 'smart_rockets/smart-rockets.html')