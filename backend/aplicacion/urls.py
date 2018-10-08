from django.conf.urls import url
from aplicacion import views
urlpatterns = [
    url(r'^aplicacion/$', views.Biciusuario.as_view()),
    url(r'^aplicacion/(?P<pk>[0-9]+)/$', views.Biciusuario.as_view()),

]