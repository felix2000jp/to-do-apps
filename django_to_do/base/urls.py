from django.urls import path
from .views import ToDoListView, to_do_update, to_do_delete

urlpatterns = [
    path('', ToDoListView.as_view(), name='list'),
    path('update/<slug:todo_id>', to_do_update, name='update'),
    path('delete/<slug:todo_id>', to_do_delete, name='delete'),
]