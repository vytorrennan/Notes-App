from django.urls import path 
from .import views 


urlpatterns = [
    path("notes/", views.NotesView.as_view(), name="notes"),
    path("notes/<slug:slug>/", views.NoteDetailView.as_view(), name="note-detail"),
    path("notes-search/", views.SearchNotesView.as_view(), name="notes-search"),
]

# endpoints:
# GET_ALL_NOTES_and_CREATE_NEW_NOTE = "127.0.0.1:8008/notes/"
# GET_SPECIFIC_NOTE = "127.0.0.1:8008/notes/note-slug"
# SEARCH_NOTES = "127.0.0.1:8008/notes-search/?search=meeting"
