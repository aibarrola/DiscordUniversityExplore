from rest_framework import serializers
from .models import Card

# This class converts the model object to a JSON object
class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ('orgName','orgDesc')