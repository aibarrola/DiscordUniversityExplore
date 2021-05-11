from django.shortcuts import render
from django.db.models import Q
from rest_framework import viewsets
from .serializers import CardSerializer
from .models import Card

# Create your views here.
class CardView(viewsets.ModelViewSet):
    serializer_class = CardSerializer
    
    def get_queryset(self):
        category = self.request.GET['category']

        search = self.request.GET.get('search', "")
        search_fields = ['orgName']
        terms = search.split()

        query = None ## Query to search for every search term
            
        for term in terms:
            or_query = None ## Query to search for a given term in each field
            for field_name in search_fields:
                q = Q(**{"%s__icontains" % field_name: term})
                if or_query is None:
                    or_query = q
                else:
                    or_query = or_query | q
            if query is None:
                query = or_query
            else:
                query = query & or_query
    
        if category == 'HOME':
            cards = Card.objects.all()
        else:
            cards = Card.objects.all().filter(category=category)
        
        if (query != None):
            cards = cards.filter(query)
        return cards