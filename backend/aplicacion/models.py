from django.db import models
from django.contrib.auth.models import User
from django_google_maps import fields as map_fields


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
    address = map_fields.AddressField(max_length=200, verbose_name='Dirección', blank=True, null=True)
    geolocation = map_fields.GeoLocationField(max_length=100, verbose_name='Coordenada Inicio', blank=True, null=True)
    geolocation2 = map_fields.GeoLocationField(max_length=100, verbose_name='Coordenada Final', blank=True, null=True)
    def __str__(self):
        return str(self.nombre)

    

class Viaje(models.Model):
    conductor = models.ForeignKey(Biciusuario, on_delete = models.CASCADE, related_name="usuario_bici", blank=True, null=True)
    cliente = models.ForeignKey(Biciusuario, on_delete = models.CASCADE, related_name="usuario_normal", blank=True, null=True)
    ruta = models.ForeignKey(Ruta, on_delete = models.CASCADE, blank=True, null=True)
    def __str__(self):
        return str(self.biciusuarios)