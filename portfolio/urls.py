"""portfolio URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

import jobs.views
import jobs.urls
import blog.urls
import frasometre.urls
import expsum.urls
import matrix.urls
import twitter_broadcast.urls
import smart_rockets.urls
urlpatterns = [
                path('admin/', admin.site.urls),
                path('', jobs.views.home, name="home"),
                path('jobs/', include(jobs.urls)),
                path('blog/', include(blog.urls)),
                path('frasometre/', include(frasometre.urls)),
                path('expsum/', include(expsum.urls)),
                path('matrix/', include(matrix.urls)),
                path('twitter-broadcast/', include(twitter_broadcast.urls)),
                path('smart-rockets/', include(smart_rockets.urls)),
            ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]