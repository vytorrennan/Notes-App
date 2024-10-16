from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from noteapp.models import Note
from noteapp.serializers import NoteSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from django.db.models import Q

# Authorization View: Create User
class CreateUserView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


# Search Notes View
class SearchNotesView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        query = request.query_params.get("search", "")
        user = request.user
        notes = Note.objects.filter(
            author=user
        ).filter(
            Q(title__icontains=query) |
            Q(body__icontains=query) |
            Q(category__icontains=query)
        )
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


# List and Create Notes View
class NotesView(ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Note.objects.filter(author=self.request.user)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


# Retrieve, Update, and Delete Note View
class NoteDetailView(RetrieveUpdateDestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Note.objects.filter(author=self.request.user)

    def get_object(self):
        return get_object_or_404(self.get_queryset(), slug=self.kwargs['slug'])

