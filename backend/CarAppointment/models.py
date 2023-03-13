from django.db import models

    
class megrendelo(models.Model):
    nev = models.CharField("Adja meg a teljes nevét!",max_length=100)
    telefonszam = models.IntegerField("Adja meg a telefonszámot!")
    email = models.EmailField("Adja meg a email cimét!")
    
    def __str__(self):
        return self.nev, self.telefonszam, self.email
    
    
    
    
    
    
    
# Create your models here.
