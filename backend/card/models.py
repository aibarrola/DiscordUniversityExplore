from django.db import models

# Create your models here.
class Card(models.Model):
    orgName = models.TextField()
    orgDesc = models.TextField()
    category = models.TextField()

    def _str_(self):
        return ("orgName" + self.orgName,"orgDesc" + self.orgDesc,"category" + self.category)