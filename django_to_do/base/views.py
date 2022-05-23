from django.shortcuts import redirect
from django.views.generic import ListView

from .models import ToDo
from .forms import ToDoCreateForm

# Create your views here.
class ToDoListView(ListView):
    model = ToDo
    template_name = 'base/todo.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form'] = ToDoCreateForm()
        return context

    def post(self, request):
        form = ToDoCreateForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('list')


def to_do_update(request, todo_id):
    todo = ToDo.objects.get(id=todo_id)
    if request.method == 'POST':
        todo.status = request.POST.get('update')
        todo.save()
    return redirect('list')


def to_do_delete(request, todo_id):
    todo = ToDo.objects.get(id=todo_id)
    if request.method == 'POST':
        todo.delete()
    return redirect('list')