from django.shortcuts import render


# Create your views here.
def matrix(request):
    return render(request, 'matrix/matrix.html')