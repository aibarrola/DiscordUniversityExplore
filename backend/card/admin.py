from django.contrib import admin
from .models import Card
# Register your models here.
class TodoAdmin(admin.ModelAdmin):
    list_display= ('orgName','orgDesc','category')

admin.site.register(Card,TodoAdmin)