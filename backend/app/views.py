from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.core.mail import send_mail

@api_view(['POST'])
@permission_classes([AllowAny])
def contact(request):
    name = request.data.get('name')
    email = request.data.get('email')
    message = request.data.get('message')

    # Envoi email
    send_mail(
        f"Email venant de {name}",
        message,
        email,
        ['blxcktwo@gmail.com'],
        fail_silently=False,
    )

    return Response({'status': 'Message envoyé !'})
