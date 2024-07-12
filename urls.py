from django.urls import path
from . import views
from .views_set import PropertyListView

urlpatterns = [
    path('properties', PropertyListView.as_view(), name='property-list')
]
