from rest_framework.decorators import permission_classes
from aplicacion.models import *
from aplicacion.serializers import *
from aplicacion.permissions import IsPostOrIsAuthenticated
from rest_framework import generics
from rest_framework.permissions import AllowAny


@permission_classes((IsPostOrIsAuthenticated, ))
class UsuarioList(generics.ListCreateAPIView):
    serializer_class = UsuarioSerializer
    queryset = Biciusuario.objects.all()

class UsuarioDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UsuarioSerializer
    queryset = Biciusuario.objects.all()

class RutaList(generics.ListCreateAPIView):
    serializer_class = RutaSerializer
    queryset = Ruta.objects.all()

class RutaDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RutaSerializer
    queryset = Ruta.objects.all()

@permission_classes((AllowAny, ))
class PerfilList(generics.ListAPIView):
    serializer_class = PerfilSerializer
    queryset = Perfil.objects.all()

class PerfilDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PerfilSerializer
    queryset = Perfil.objects.all()


#def principal(request):
    #aplicacion = Biciusuario.objects.all()
    #return render_to_response("principal.html",{})
# Create your views here.