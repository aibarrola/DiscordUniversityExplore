from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CardSerializer
from .models import Card

# Create your views here.
class CardView(viewsets.ModelViewSet):
    serializer_class = CardSerializer
    
    def get_queryset(self):
        category = self.request.GET['category']
        return Card.objects.all().filter(category=category) 