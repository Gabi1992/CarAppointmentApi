from django.db import models

    
class megrendelo(models.Model):
    nev = models.CharField("Adja meg a teljes nevét!",max_length=100)
    telefonszam = models.CharField("Adja meg a telefonszámot!",max_length=11)
    email = models.EmailField("Adja meg a email cimét!")

    
    def __str__(self):
        return self.nev

    
    
    
# Create your models here.
