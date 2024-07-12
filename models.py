from django.db import models

# Create your models here.


class Property(models.Model):
    name = models.CharField(max_length=100)
    address = models.ForeignKey("core.Address", null=True,  on_delete=models.CASCADE)
    

class Commune(models.Model):
    name = models.CharField(max_length=100)