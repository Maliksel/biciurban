from django.db import models
from django.contrib.auth.models import User


class Perfil(models.Model):
    nombre = models.CharField(max_length=200)
    def __str__(self):
        return str(self.nombre)

class Biciusuario(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=200)
    apellido = models.CharField(max_length=200)
    fecha_nacimiento = models.DateField(max_length=200)
    correo = models.CharField(max_length=200)
    perfil = models.ForeignKey(Perfil, on_delete = models.CASCADE)
    def __str__(self):
        return self.nombre

class Ruta(models.Model):
    nombre = models.CharField(max_length=200)
    valor = models.IntegerField(max_length=200)
    def __str__(self):
        return str(self.nombre)
        
class Viaje(models.Model):
    usuario1 = models.ForeignKey(Biciusuario, on_delete = models.CASCADE, related_name="usuario_bici")
    usuario2 = models.ForeignKey(Biciusuario, on_delete = models.CASCADE, related_name="usuario_normal")
    ruta = models.ManyToManyField(Ruta)
    def __str__(self):
        return str(self.biciusuarios)