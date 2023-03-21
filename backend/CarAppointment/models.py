from django.db import models

<<<<<<< HEAD
    
class megrendelo(models.Model):
    nev = models.CharField("Adja meg a teljes nevét!",max_length=100)
    telefonszam = models.CharField("Adja meg a telefonszámot!",max_length=11)
    email = models.EmailField("Adja meg a email cimét!")

    
    def __str__(self):
        return self.nev

=======
class Car(models.Model):
    brand = models.CharField(max_length= 200)
    year = models.IntegerField()
    def __str__(self):
        return self.brand
    
    
>>>>>>> 5657c204ca62905745cda5bd8cf27328c0ba689e
    
    
    
# Create your models here.
