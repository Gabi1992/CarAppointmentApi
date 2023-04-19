from django.db import models

class Car(models.Model):
    brand = models.CharField(max_length= 200)
    year = models.IntegerField()
    def __str__(self):
        return self.brand
    
    
    
    
    
# Create your models here.
