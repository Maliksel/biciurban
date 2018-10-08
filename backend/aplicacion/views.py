from rest_framework.decorators import permission_classes
from aplicacion.models import Biciusuario
from aplicacion.serializers import UsuarioSerializer
from aplicacion.permissions import IsPostOrIsAuthenticated
from rest_framework import generics


@permission_classes((IsPostOrIsAuthenticated, ))
class UsuarioList(generics.ListCreateAPIView):
    serializer_class = UsuarioSerializer
    queryset = Biciusuario.objects.all()

class UsuarioDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UsuarioSerializer
    queryset = Biciusuario.objects.all()


#def principal(request):
    #aplicacion = Biciusuario.objects.all()
    #return render_to_response("principal.html",{})
# Create your views here.