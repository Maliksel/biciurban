from django.conf.urls import url
from aplicacion import views

urlpatterns = [
    url(r'^usuarios/$', views.UsuarioList.as_view()),
    url(r'^usuarios/(?P<pk>[0-9]+)/$', views.UsuarioDetail.as_view()),
    url(r'^rutas/$', views.RutaList.as_view()),
    url(r'^rutas/(?P<pk>[0-9]+)/$', views.RutaDetail.as_view()),
    url(r'^perfiles/$', views.PerfilList.as_view()),
    url(r'^perfiles/(?P<pk>[0-9]+)/$', views.PerfilDetail.as_view()),

]