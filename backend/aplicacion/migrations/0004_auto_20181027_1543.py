# Generated by Django 2.0.9 on 2018-10-27 20:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('aplicacion', '0003_auto_20181027_1138'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='viaje',
            name='usuario1',
        ),
        migrations.RemoveField(
            model_name='viaje',
            name='usuario2',
        ),
        migrations.AddField(
            model_name='viaje',
            name='cliente',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='usuario_normal', to='aplicacion.Biciusuario'),
        ),
        migrations.AddField(
            model_name='viaje',
            name='conductor',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='usuario_bici', to='aplicacion.Biciusuario'),
        ),
        migrations.RemoveField(
            model_name='viaje',
            name='ruta',
        ),
        migrations.AddField(
            model_name='viaje',
            name='ruta',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='aplicacion.Ruta'),
        ),
    ]