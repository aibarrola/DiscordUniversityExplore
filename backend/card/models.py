from django.db import models

# Create your models here.
class Card(models.Model):
    orgName = models.TextField()
    orgDesc = models.TextField()
    orgType = models.TextField()
    orgLink = models.TextField()

    def _str_(self):
        return ("orgName" + self.orgName,"orgDesc" + self.orgDesc, "orgType" + self.orgType, "orgLink" + self.orgLink)